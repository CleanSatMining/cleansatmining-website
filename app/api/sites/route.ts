import { NextApiRequest, NextApiResponse } from "next";
import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore/lite";
import { CleanSatMiningSite } from "@/models/Site";

import { db } from "@/firebase.config";

export async function GET(request: Request) {
  try {
    const data = await getSites();

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Erreur lors de la récupération des sites :", error);
    return new Response(
      JSON.stringify({
        error: "Erreur serveur lors de la récupération des sites.",
      }),
      { status: 500 }
    );
  }
}

async function getSites(): Promise<CleanSatMiningSite[]> {
  const sitesCol = collection(db, "sites");
  const sitesSnapshot = await getDocs(sitesCol);
  const sitesList = sitesSnapshot.docs.map((doc) => doc.data());

  const ret = sitesList.map((site) => {
    const s: CleanSatMiningSite = {
      id: site.id,
      name: site.name as string,
      shortName: site.shortName as string,
    };

    return s;
  });

  return ret;
}
