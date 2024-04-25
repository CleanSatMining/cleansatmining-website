import "firebase/firestore";
import { LRUCache } from "lru-cache";
import { downloadFile } from "@/database/facility";
export const dynamic = "force-static";

const CACHE_DURATION_SECONDS = 8 * 60 * 60; // 8 heures
/* eslint-disable */
const cache = new LRUCache<string, any>({
  max: 500,
  ttl: 1000 * CACHE_DURATION_SECONDS,
});
/* eslint-enable */

type Params = {
  slug: string;
  file: string;
};

export async function GET(request: Request, context: { params: Params }) {
  try {
    //const queryParams = new URLSearchParams(request.url.split("?")[1]);
    //const slug = queryParams.get("slug") ?? "";
    //const file = queryParams.get("file") ?? "";
    const slug = context.params.slug ?? "";
    const file = context.params.file ?? "";
    console.log("slug", context.params, slug, file);

    if (slug === "" || file === "") {
      return new Response(
        JSON.stringify({
          error:
            "Erreur serveur lors de la récupération des facilities. Parametre non trouvé",
        }),
        { status: 400 }
      );
    }

    const cacheKey = `facility_file_${slug}_${file}`;
    const cachedData = cache.get(cacheKey);
    console.log("cachedData", cacheKey, cachedData);
    if (cachedData) {
      console.log("PASS WITH CACHE");
      return new Response(cachedData);
    }

    const content = await downloadFile(slug, file);

    // Mettre en cache la réponse pour la durée spécifiée
    console.log("PASS WITH NO CACHE : SET CACHE", cacheKey);
    cache.set(cacheKey, content);

    return new Response(content);
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
