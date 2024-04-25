import "firebase/firestore";
import { getfacilitiesShort, getFullDatafacilities } from "@/database/facility";
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
    const noCache = queryParams.get("noCache") === "true";
    const mode = queryParams.get("mode") ?? "short"; // short ou full ou location

    console.log("queryParams", JSON.stringify(queryParams));

    const cacheKey = `facilities_${mode}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData && !noCache) {
      return new Response(JSON.stringify(cachedData));
    }

    var data = undefined;

    switch (mode) {
      case "location":
        data = await getfacilitiesShort(true);
        break;
      case "full":
        data = await getFullDatafacilities();
        break;
      default:
        data = await getfacilitiesShort();
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
