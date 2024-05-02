import "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import { Fundraising } from "@/models/Facility";
import { Fundraising as FundraisingDb } from "@/models/Database";

import { db } from "@/firebase.config";

export async function getFundraisings(
  facilityId: string
): Promise<Fundraising[]> {
  const fundraisingsCol = collection(db, "sites", facilityId, "fundraisings");
  const fundraisingsSnapshot = await getDocs(fundraisingsCol);
  const fundraisingsDb = fundraisingsSnapshot.docs.map(
    (doc) => doc.data() as FundraisingDb
  );

  const fundraisingsCSM = fundraisingsDb.map((fundraising) => {
    const f: Fundraising = {
      amount: fundraising.amount,
      date: fundraising.date.seconds * 1000,
    };
    return f;
  });

  return fundraisingsCSM;
}
