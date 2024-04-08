import { DocumentReference } from "firebase/firestore/lite";

export type Facility = {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  image: string;
  status: string;
  energies: string[];
  operator: DocumentReference;
  location: DocumentReference;
  token: DocumentReference;
  containers: DocumentReference[];
};

export type Container = {
  asics: DocumentReference;
  cost: number;
  start: string;
  units: number;
};

export type Location = {
  aera: string;
  country: string;
  countryCode: string;
};

export type Fundraising = {
  amount: number;
  date: string;
};
