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
  operatorFees: DocumentReference;
  location: DocumentReference;
  token: DocumentReference;
  containers: DocumentReference[];
  cooling: string;
  csmFees: DocumentReference;
  pool: DocumentReference;
  powerPlant: DocumentReference;
  society: DocumentReference;
  vault: DocumentReference;
  safety: string;
};
export type Vault = {
  xpub: string;
};

export type Asic = {
  hashrateTHs: number;
  model: string;
  powerW: number;
};

export type CsmFees = {
  crowdfunding: number;
  operational: number;
  provision: number;
  tax: number;
};

export type Container = {
  asics: DocumentReference;
  cost: number;
  start: {
    seconds: number;
    nanoseconds: number;
  };
  units: number;
};

export type Location = {
  aera: string;
  country: string;
  countryCode: string;
};

export type Fundraising = {
  amount: number;
  date: {
    seconds: number;
    nanoseconds: number;
  };
};

export type Operator = {
  logo: string;
  name: string;
  website: string;
};

export type Pool = {
  name: string;
  fees: number;
};

export type PowerPlant = {
  contractDuration: number; // in years
  electricityPrice: number; // in $/kWh
  powerMW: number; // in MW
  renewableContract: boolean;
  energies: string[];
  spotPrice?: boolean;
  spotLink?: string; // url
};

export type Society = {
  name: string;
  registrationNumber: string;
  shareCapital: number; // in CHF
  tokenization: number; // in %
  csmSaShare: number; // in %
  location: DocumentReference;
};

export type Token = {
  name: string;
  symbol: string;
  supply: number;
  decimals: number;
  initialPrice: number;
  gnosisscanUrl: string;
  address: string;
};

export type OperatorFees = {
  fees: number;
  powerTax: number;
};
