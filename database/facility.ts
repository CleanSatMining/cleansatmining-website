import "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import {
  CleanSatMiningFacility,
  Container as CleanSatMiningContainer,
  Asic,
  Operator,
  Location,
  Token,
  FacilityStatus,
  EnergyType,
  Fundraising,
} from "@/models/Facility";
import {
  Facility as FaciltyDb,
  Container as ContainerDb,
  Fundraising as FundraisingDb,
} from "@/models/Database";

import { db } from "@/firebase.config";

export async function getfacilitiesShort(
  withLocation?: boolean
): Promise<CleanSatMiningFacility[]> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FaciltyDb
  );

  if (withLocation) {
    console.log("withLocation in function", withLocation);
    const facilitiesCSM: CleanSatMiningFacility[] = [];
    for (const facilityDb of facilitiesDb) {
      facilitiesCSM.push(await getFacilityWithLocationCSMFromDb(facilityDb));
    }

    return facilitiesCSM;
  } else {
    return facilitiesDb.map((facility) => {
      const s: CleanSatMiningFacility = {
        id: facility.id,
        name: facility.name as string,
        shortName: facility.shortName as string,
        slug: facility.slug as string,
        image: facility.image as string,
        status: facility.status as FacilityStatus,
        energies: facility.energies as EnergyType[],
      };

      return s;
    });
  }
}

export async function getfacilities(): Promise<CleanSatMiningFacility[]> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FaciltyDb
  );

  console.log(facilitiesDb);

  const facilitiesCSM: CleanSatMiningFacility[] = [];
  for (const facilityDb of facilitiesDb) {
    facilitiesCSM.push(await getFacilityCSMFromDb(facilityDb));
  }

  return facilitiesCSM;
}

export async function getfacility(id: string): Promise<CleanSatMiningFacility> {
  const document = doc(db, "sites", id);
  const docf = await getDoc(document);
  //console.log("document", docf.data());
  const facilityDb = docf.data() as FaciltyDb;

  const facilityCSM: CleanSatMiningFacility = await getFacilityCSMFromDb(
    facilityDb
  );

  return facilityCSM;
}

async function getFacilityCSMFromDb(
  facilityDb: FaciltyDb
): Promise<CleanSatMiningFacility> {
  const operator = await getDoc(facilityDb.operator);
  //console.log("operator", operator.data());
  const location = await getDoc(facilityDb.location);
  //console.log("location", location.data());
  const token = await getDoc(facilityDb.token);
  //console.log("token", token.data());
  const containers = await Promise.all(
    facilityDb.containers.map((container) => getDoc(container))
  );
  const containersDb = containers.map((c) => {
    return c.data() as ContainerDb;
  });

  const containersCSM = [];
  for (const container of containersDb) {
    const asics = await getDoc(container.asics);
    const containerCSM: CleanSatMiningContainer = {
      asics: asics.data() as Asic,
      start: container.start,
      units: container.units,
      intallationCosts: {
        equipement: 0,
      },
    };
    containersCSM.push(containerCSM);
    //console.log("asics", asics.data());
  }

  const fundraisingsCol = collection(
    db,
    "sites",
    facilityDb.id,
    "fundraisings"
  );
  const fundraisingsSnapshot = await getDocs(fundraisingsCol);
  const fundraisingsDb = fundraisingsSnapshot.docs.map(
    (doc) => doc.data() as FundraisingDb
  );

  const fundraisingsCSM = fundraisingsDb.map((fundraising) => {
    const f: Fundraising = {
      amount: fundraising.amount,
      date: fundraising.date,
    };
    return f;
  });

  const facilityCSM: CleanSatMiningFacility = {
    id: facilityDb.id,
    name: facilityDb.name,
    shortName: facilityDb.shortName,
    image: facilityDb.image,
    slug: facilityDb.slug,
    status: facilityDb.status as FacilityStatus,
    location: location.data() as Location,
    energies: facilityDb.energies as EnergyType[],
    data: {
      operator: operator.data() as Operator,

      token: token.data() as Token,
      mining: {
        containers: containersCSM,
        startingDate: "",
        electricity: {
          usdPricePerKWH: 0,
        },
      },
      api: {
        enable: false,
        username: "",
        url: "",
        contractor: undefined,
      },
      fees: {
        crowdfunding: {
          csm: 0,
        },
        operational: {
          operator: {
            includeWithElectricity: false,
            rate: 0,
          },
          csm: 0,
          pool: 0,
          provision: 0,
          taxe: 0,
        },
      },
      fundraisings: fundraisingsCSM,
      image: "",
      name: "",

      vault: {
        btcAddress: "",
        xpub: "",
      },
    },
  };
  return facilityCSM;
}

async function getFacilityWithLocationCSMFromDb(
  facilityDb: FaciltyDb
): Promise<CleanSatMiningFacility> {
  const location = await getDoc(facilityDb.location);

  const facilityCSM: CleanSatMiningFacility = {
    id: facilityDb.id,
    name: facilityDb.name,
    shortName: facilityDb.shortName,
    image: facilityDb.image,
    slug: facilityDb.slug,
    status: facilityDb.status as FacilityStatus,
    location: location.data() as Location,
    energies: facilityDb.energies as EnergyType[],
  };
  return facilityCSM;
}
