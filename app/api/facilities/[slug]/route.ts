import "firebase/firestore";
import { LRUCache } from "lru-cache";

import {
  CleanSatMiningFacility,
  Container as CleanSatMiningContainer,
} from "@/models/Facility";

import { getfacility } from "@/database/facility";

const CACHE_DURATION_SECONDS = 8 * 60 * 60; // 8 heures
/* eslint-disable */
const cache = new LRUCache<string, any>({
  max: 500,
  ttl: 1000 * CACHE_DURATION_SECONDS,
});
/* eslint-enable */

type Params = {
  slug: string;
};

export async function GET(request: Request, context: { params: Params }) {
  try {
    if (!context.params.slug) {
      return new Response(
        JSON.stringify({
          error:
            "Erreur serveur lors de la récupération des facilities. Parametre non trouvé",
        }),
        { status: 400 }
      );
    }

    const cacheKey = `facility_${context.params.slug}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return new Response(JSON.stringify(cachedData));
    }

    const facilityCSM: CleanSatMiningFacility = await getfacility(
      context.params.slug
    );

    // Mettre en cache la réponse pour la durée spécifiée
    cache.set(cacheKey, facilityCSM);

    return new Response(JSON.stringify(facilityCSM));
  } catch (error) {
    console.error("Erreur lors de la récupération des facilities :", error);
    return new Response(
      JSON.stringify({
        error: "Erreur serveur lors de la récupération des facilities.",
      }),
      { status: 500 }
    );
  }
}
