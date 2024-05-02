import "firebase/firestore";
import { getDoc } from "firebase/firestore/lite";
import { Location } from "@/models/Facility";
import { Location as LocationDb } from "@/models/Database";
import { DocumentReference } from "firebase/firestore/lite";

export async function getLocation(
  reference: DocumentReference
): Promise<Location> {
  const locationDb = (await getDoc(reference)).data() as LocationDb;
  const location: Location = {
    aera: locationDb.aera,
    country: locationDb.country,
    countryCode: locationDb.countryCode,
  };

  return location;
}
