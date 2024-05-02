import "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import {
  CleanSatMiningFacility,
  Container,
  Asic,
  Operator,
  Location,
  Token,
  FacilityStatus,
  EnergyType,
  PowerPlant,
  Society,
  COOLING,
  FacilityDataMode,
} from "@/models/Facility";
import {
  Facility as FacilityDb,
  Container as ContainerDb,
  PowerPlant as PowerPlantDb,
  Society as SocietyDb,
  OperatorFees as OperatorFeesDb,
  Pool as PoolDb,
  CsmFees as CsmFeesDb,
  Vault as VaultDb,
  Asic as AsicDb,
} from "@/models/Database";

import { getLocation } from "@/database/location";
import {
  getFacilityContainersFromReferences,
  getContainers,
} from "@/database/container";
import { getFundraisings } from "@/database/fundraising";
import { app, db } from "@/firebase.config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function getFacilityId(slug: string): Promise<string | undefined> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FacilityDb
  );

  const f = facilitiesDb.map((facility) => {
    const s: CleanSatMiningFacility = {
      id: facility.id,
      name: facility.name as string,
      shortName: facility.shortName as string,
      slug: facility.slug as string,
      image: facility.image as string,
      status: facility.status as FacilityStatus,
      mode: FacilityDataMode.Short,
    };

    return s;
  });

  return f.find((f) => f.slug === slug)?.id;
}

export async function getFacilitiesModeShort(
  withLocation?: boolean
): Promise<CleanSatMiningFacility[]> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FacilityDb
  );

  return facilitiesDb.map((facility) => {
    const s: CleanSatMiningFacility = {
      id: facility.id,
      name: facility.name as string,
      shortName: facility.shortName as string,
      slug: facility.slug as string,
      image: facility.image as string,
      status: facility.status as FacilityStatus,
      mode: FacilityDataMode.Short,
    };

    return s;
  });
}

export async function getFacilitiesModeLocation(): Promise<
  CleanSatMiningFacility[]
> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FacilityDb
  );

  const facilitiesCSM: CleanSatMiningFacility[] = [];
  for (const facilityDb of facilitiesDb) {
    facilitiesCSM.push(await populateFacilityLocation(facilityDb));
  }

  return facilitiesCSM;
}

export async function getFacilitiesModeMining(): Promise<
  CleanSatMiningFacility[]
> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FacilityDb
  );

  const facilities: CleanSatMiningFacility[] = await populateFacilitiesMining(
    facilitiesDb
  );

  return facilities;
}

export async function getFacilitiesModeFull(): Promise<
  CleanSatMiningFacility[]
> {
  const facilitiesCol = collection(db, "sites");
  const facilitiesSnapshot = await getDocs(facilitiesCol);
  const facilitiesDb = facilitiesSnapshot.docs.map(
    (doc) => doc.data() as FacilityDb
  );

  const facilitiesCSM: CleanSatMiningFacility[] = [];
  for (const facilityDb of facilitiesDb) {
    facilitiesCSM.push(await populateFacility(facilityDb));
  }

  return facilitiesCSM;
}

export async function getFacility(
  slug: string
): Promise<CleanSatMiningFacility> {
  const id = await getFacilityId(slug);
  if (!id) {
    throw new Error("Facility not found");
  }
  const documentReference = doc(db, "sites", id);
  const docSnapshot = await getDoc(documentReference);
  //console.log("document", docf.data());
  const facilityDb = docSnapshot.data() as FacilityDb;

  const facilityCSM: CleanSatMiningFacility = await populateFacility(
    facilityDb
  );

  return facilityCSM;
}

async function populateFacility(
  facilityDb: FacilityDb
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

  const containersCSM = await getFacilityContainersFromReferences(
    facilityDb.containers
  );

  const fundraisingsCSM = await getFundraisings(facilityDb.id);

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
    mode: FacilityDataMode.Full,
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

async function populateFacilityLocation(
  facilityDb: FacilityDb
): Promise<CleanSatMiningFacility> {
  const location = await getLocation(facilityDb.location);

  const facilityCSM: CleanSatMiningFacility = {
    id: facilityDb.id,
    name: facilityDb.name,
    shortName: facilityDb.shortName,
    image: facilityDb.image,
    slug: facilityDb.slug,
    status: facilityDb.status as FacilityStatus,
    location: location,
    mode: FacilityDataMode.Location,
  };
  return facilityCSM;
}

async function populateFacilitiesMining(
  facilitiesDb: FacilityDb[]
): Promise<CleanSatMiningFacility[]> {
  const containers = await getContainers();
  const facilities: CleanSatMiningFacility[] = [];
  for (const facilityDb of facilitiesDb) {
    const location = await getLocation(facilityDb.location);
    const fundings = await getFundraisings(facilityDb.id);
    const facilityContainer = containers.filter(
      (container) => container.slug === facilityDb.slug
    );
    const miningDate: number = facilityContainer.reduce((oldest, container) => {
      const containerDate = container.start;
      return containerDate < oldest ? containerDate : oldest;
    }, new Date().getTime());
    const facility: CleanSatMiningFacility = {
      id: facilityDb.id,
      name: facilityDb.name,
      shortName: facilityDb.shortName,
      image: facilityDb.image,
      slug: facilityDb.slug,
      status: facilityDb.status as FacilityStatus,
      mode: FacilityDataMode.Mining,
      location: location,
      fundraisings: fundings,
      energies: facilityDb.energies as EnergyType[],
      mining: {
        cooling: facilityDb.cooling as COOLING,
        pool: {
          name: "",
        },
        containers: facilityContainer,
        startingDate: miningDate,
        safety: facilityDb.safety,
      },
    };
    facilities.push(facility);
  }
  return facilities;
}

export async function downloadFile(slug: string, file: string) {
  const storage = getStorage(app);
  // Create a storage reference from our storage service
  const storageRef = ref(storage, "facilities/" + slug + "/" + file);

  // Get the download URL
  try {
    const url = await getDownloadURL(storageRef);
    console.log("downloadFile facility", url);

    // Fetch the JSON data at the URL
    const response = await fetch(url);

    const data = await response.text();

    return data;
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
}
