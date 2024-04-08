import "firebase/firestore";
import {
  CleanSatMiningFacility,
  Container as CleanSatMiningContainer,
} from "@/models/Facility";

import { getfacility } from "@/database/facility";

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  try {
    console.log("slug", context.params);

    const facilityCSM: CleanSatMiningFacility = await getfacility(
      context.params.id
    );

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
