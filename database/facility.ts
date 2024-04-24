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
  PowerPlant,
  Society,
  COOLING,
} from "@/models/Facility";
import {
  Facility as FaciltyDb,
  Container as ContainerDb,
  Fundraising as FundraisingDb,
  PowerPlant as PowerPlantDb,
  Society as SocietyDb,
  OperatorFees as OperatorFeesDb,
  Pool as PoolDb,
  CsmFees as CsmFeesDb,
  Vault as VaultDb,
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
      };

      return s;
    });
  }
}

export async function getfacilityId(slug: string): Promise<string | undefined> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FaciltyDb
  );

  const f = facilitiesDb.map((facility) => {
    const s: CleanSatMiningFacility = {
      id: facility.id,
      name: facility.name as string,
      shortName: facility.shortName as string,
      slug: facility.slug as string,
      image: facility.image as string,
      status: facility.status as FacilityStatus,
    };

    return s;
  });

  return f.find((f) => f.slug === slug)?.id;
}

export async function getfacilities(): Promise<CleanSatMiningFacility[]> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FaciltyDb
  );

  const facilitiesCSM: CleanSatMiningFacility[] = [];
  for (const facilityDb of facilitiesDb) {
    facilitiesCSM.push(await getFacilityCSMFromDb(facilityDb));
  }

  return facilitiesCSM;
}

export async function getfacility(
  slug: string
): Promise<CleanSatMiningFacility> {
  const id = await getfacilityId(slug);
  if (!id) {
    throw new Error("Facility not found");
  }
  const documentReference = doc(db, "sites", id);
  const docSnapshot = await getDoc(documentReference);
  //console.log("document", docf.data());
  const facilityDb = docSnapshot.data() as FaciltyDb;

  const facilityCSM: CleanSatMiningFacility = await getFacilityCSMFromDb(
    facilityDb
  );

  return facilityCSM;
}

async function getFacilityCSMFromDb(
  facilityDb: FaciltyDb
): Promise<CleanSatMiningFacility> {
  const operatorSnapshot = await getDoc(facilityDb.operator);
  //console.log("operator", operator.data());
  const locationSnapshot = await getDoc(facilityDb.location);
  //console.log("location", location.data());
  const tokenSnapshot = await getDoc(facilityDb.token);

  const powerPlantDb: PowerPlantDb = (
    await getDoc(facilityDb.powerPlant)
  ).data() as PowerPlantDb;

  const powerPlant: PowerPlant = {
    contractDuration: powerPlantDb.contractDuration,
    electricityPrice: powerPlantDb.electricityPrice,
    powerMW: powerPlantDb.powerMW,
    renewableContract: powerPlantDb.renewableContract,
    energies: powerPlantDb.energies as EnergyType[],
    spotLink: powerPlantDb.spotLink,
    spotPrice: powerPlantDb.spotPrice,
  };

  const societyDb = (await getDoc(facilityDb.society)).data() as SocietyDb;

  const societyLocationSnapshot = await getDoc(societyDb.location);
  //console.log("societyLocation", societyDb.location, societyLocationDb.data());

  const society: Society = {
    name: societyDb.name,
    registrationNumber: societyDb.registrationNumber,
    shareCapital: societyDb.shareCapital,
    tokenization: societyDb.tokenization,
    csmSaShare: societyDb.csmSaShare,
    location: societyLocationSnapshot.data() as Location,
  };

  //console.log("hello", facilityDb.name);

  const operatorFeesDbDocument = await getDoc(facilityDb.operatorFees);
  const operatorFeesDb = operatorFeesDbDocument.data() as OperatorFeesDb;

  const poolSnapshot = await getDoc(facilityDb.pool);
  const poolDb = poolSnapshot.data() as PoolDb;

  const csmFeesSnapshot = await getDoc(facilityDb.csmFees);
  const csmFeesDb = csmFeesSnapshot.data() as CsmFeesDb;

  const vaultSnapshot = await getDoc(facilityDb.vault);
  const vaultDb = vaultSnapshot.data() as VaultDb;

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
      start: container.start.seconds,
      units: container.units,
      intallationCosts: {
        equipement: container.cost,
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
      date: fundraising.date.seconds,
    };
    return f;
  });

  const miningDate: number = containersCSM.reduce((oldest, container) => {
    const containerDate = container.start;
    return containerDate < oldest ? containerDate : oldest;
  }, new Date().getTime());

  const facilityCSM: CleanSatMiningFacility = {
    id: facilityDb.id,
    name: facilityDb.name,
    shortName: facilityDb.shortName,
    image: facilityDb.image,
    slug: facilityDb.slug,
    status: facilityDb.status as FacilityStatus,
    location: locationSnapshot.data() as Location,
    data: {
      operator: operatorSnapshot.data() as Operator,
      location: locationSnapshot.data() as Location,
      token: tokenSnapshot.data() as Token,
      powerPlant: powerPlant,
      society: society,
      mining: {
        cooling: facilityDb.cooling as COOLING,
        pool: {
          name: poolDb.name,
        },
        containers: containersCSM,
        startingDate: miningDate,
        safety: facilityDb.safety,
      },
      api: {
        enable: false,
        username: "",
        url: "",
        contractor: undefined,
      },
      fees: {
        crowdfunding: {
          csm: csmFeesDb.crowdfunding,
        },
        operational: {
          operator: {
            powerTax: operatorFeesDb.powerTax,
            rate: operatorFeesDb.fees,
          },
          csm: csmFeesDb.operational,
          pool: poolDb.fees,
          provision: csmFeesDb.provision,
          tax: csmFeesDb.tax,
        },
      },
      fundraisings: fundraisingsCSM,
      image: facilityDb.image,
      name: facilityDb.name,

      vault: {
        btcAddress: "",
        xpub: vaultDb.xpub,
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
  };
  return facilityCSM;
}
