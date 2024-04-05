import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore/lite";
import { CleanSatMiningFacility } from "@/models/Site";
import { useParams } from "next/navigation";

import { db } from "@/firebase.config";

export async function GET(request: Request) {
  try {
    const { slug } = useParams();

    const data = await getfacilities();

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

async function getfacilities(): Promise<CleanSatMiningFacility[]> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesList = facilitiesSnapshot.docs.map((doc) => doc.data());

  console.log(facilitiesList);

  const ret = facilitiesList.map((site) => {
    const s: CleanSatMiningFacility = {
      id: site.id,
      name: site.name as string,
      shortName: site.shortName as string,
      slug: site.slug as string,
    };

    return s;
  });

  return ret;
}
