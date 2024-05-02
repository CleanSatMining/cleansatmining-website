import "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import { Asic, Container } from "@/models/Facility";
import { Container as ContainerDb, Asic as AsicDb } from "@/models/Database";
import { DocumentReference } from "firebase/firestore/lite";

import { db } from "@/firebase.config";

export async function getContainers(): Promise<Container[]> {
  const containersCol = collection(db, "containers");
  const containersSnapshot = await getDocs(containersCol);
  const containersDb = containersSnapshot.docs.map(
    (doc) => doc.data() as ContainerDb
  );

  const containers: Container[] = [];
  for (const containerDb of containersDb) {
    const asicDb = (await getDoc(containerDb.asics)).data() as AsicDb;
    const asic: Asic = {
      hashrateTHs: asicDb.hashrateTHs,
      powerW: asicDb.powerW,
      name: asicDb.model,
    };
    containers.push({
      slug: containerDb.facilitySlug,
      asics: asic,
      start: containerDb.start.seconds * 1000,
      units: containerDb.units,
      intallationCosts: {
        equipement: containerDb.cost,
      },
    });
  }

  return containers;
}

export async function getFacilityContainers(
  slug: string
): Promise<Container[]> {
  const containersCol = collection(db, "containers");
  const containersSnapshot = await getDocs(containersCol);
  const containersDb = containersSnapshot.docs
    .map((doc) => doc.data() as ContainerDb)
    .filter((container) => container.facilitySlug === slug);

  const containers: Container[] = [];
  for (const containerDb of containersDb) {
    const asicDb = (await getDoc(containerDb.asics)).data() as AsicDb;
    const asic: Asic = {
      hashrateTHs: asicDb.hashrateTHs,
      powerW: asicDb.powerW,
      name: asicDb.model,
    };
    containers.push({
      slug: containerDb.facilitySlug,
      asics: asic,
      start: containerDb.start.seconds * 1000,
      units: containerDb.units,
      intallationCosts: {
        equipement: containerDb.cost,
      },
    });
  }

  return containers;
}

export async function getFacilityContainersFromReferences(
  references: DocumentReference[]
): Promise<Container[]> {
  const containersSnapshot = await Promise.all(
    references.map((container) => getDoc(container))
  );
  const containersDb = containersSnapshot.map((c) => {
    return c.data() as ContainerDb;
  });

  const containersCSM = [];
  for (const container of containersDb) {
    const asicSnapshot = await getDoc(container.asics);
    const asicDb = asicSnapshot.data() as AsicDb;
    const asic: Asic = {
      hashrateTHs: asicDb.hashrateTHs,
      powerW: asicDb.powerW,
      name: asicDb.model,
    };
    const containerCSM: Container = {
      slug: container.facilitySlug,
      asics: asic,
      start: container.start.seconds * 1000,
      units: container.units,
      intallationCosts: {
        equipement: container.cost,
      },
    };
    containersCSM.push(containerCSM);
    //console.log("asics", asics.data());
  }

  return containersCSM;
}
