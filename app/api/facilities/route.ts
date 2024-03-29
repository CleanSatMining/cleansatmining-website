import { NextApiRequest, NextApiResponse } from "next";
import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore/lite";
import { CleanSatMiningSite } from "@/models/Site";

import { db } from "@/firebase.config";

export async function GET(request: Request) {
  try {
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

async function getfacilities(): Promise<CleanSatMiningSite[]> {
  const facilitiesCol = collection(db, "facilities");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesList = facilitiesSnapshot.docs.map((doc) => doc.data());

  const ret = facilitiesList.map((site) => {
    const s: CleanSatMiningSite = {
      id: site.id,
      name: site.name as string,
      shortName: site.shortName as string,
    };

    return s;
  });

  return ret;
}
