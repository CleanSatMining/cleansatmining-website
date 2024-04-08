import "firebase/firestore";
import { getfacilitiesShort, getfacilities } from "@/database/facility";

export async function GET(request: Request) {
  try {
    // Utiliser req.query pour obtenir les paramètres de la requête
    const queryParams = new URLSearchParams(request.url.split("?")[1]);
    const withLocation = queryParams.get("withLocation") === "true";
    const full = queryParams.get("full") === "true";
    console.log("withLocation", queryParams);

    if (full) {
      const data = await getfacilities();
      return new Response(JSON.stringify(data));
    } else {
      const data = await getfacilitiesShort(withLocation);
      return new Response(JSON.stringify(data));
    }
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
