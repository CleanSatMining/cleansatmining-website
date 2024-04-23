// lib/store.ts
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { CleanSatMiningFacility } from "@/models/Facility";

export const menuFacilityAtom = atom<string>("description"); // Définissez la valeur initiale du menu ici
export const facilitiesAtom = atomWithStorage<CleanSatMiningFacility[]>(
  "facilities",
  []
);
export const facilityAtom = atom<CleanSatMiningFacility | undefined>(undefined);
