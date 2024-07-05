import "firebase/firestore";
import {
  getFacilitiesModeShort,
  getFacilitiesModeFull,
  getFacilitiesModeMining,
  getFacilitiesModeLocation,
} from "@/database/facility";
import { LRUCache } from "lru-cache";

const CACHE_DURATION_SECONDS = 8 * 60 * 60; // 8 heures
/* eslint-disable */
const cache = new LRUCache<string, any>({
  max: 500,
  ttl: 1000 * CACHE_DURATION_SECONDS,
});
/* eslint-enable */

export async function GET(request: Request) {
  try {
    // Utiliser req.query pour obtenir les paramètres de la requête
    const queryParams = new URLSearchParams(request.url.split("?")[1]);
    const cacheActivated = queryParams.get("cache") !== "false";
    const mode = queryParams.get("mode") ?? "short"; // short ou full ou location

    //console.log("queryParams", queryParams);
    //console.log("mode", mode);
    //console.log("cacheActivated", cacheActivated);

    const cacheKey = `facilities_${mode}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData && cacheActivated) {
      console.log("Récupération des facilities depuis le cache.");
      return new Response(JSON.stringify(cachedData));
    }
    console.log("Récupération des facilities depuis la base de données.");

    var data = undefined;

    switch (mode) {
      case "location":
        data = await getFacilitiesModeLocation();
        break;
      case "mining":
        data = await getFacilitiesModeMining();
        break;
      case "full":
        data = await getFacilitiesModeFull();
        break;
      default:
        data = await getFacilitiesModeShort();
        break;
    }

    // Mettre en cache la réponse pour la durée spécifiée
    cache.set(cacheKey, data);
    return new Response(JSON.stringify(data));
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
