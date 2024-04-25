export type CleanSatMiningFacility = {
  // short data
  id: string;
  name: string;
  shortName: string;
  image: string;
  slug: string;
  status: FacilityStatus;
  mode: FacilityDataMode;

  // mode location
  location?: Location;

  // mode mining
  mining?: Mining;

  // mode full
  data?: FacilityData;
};

export type Operator = {
  name: string;
  logo: string;
  website: string;
};

export type FacilityData = {
  name: string;
  location: Location;
  operator: Operator;
  image: string;
  token: Token;
  api: Api;
  mining: Mining;
  fundraisings: Fundraising[];
  fees: Fees;
  vault: {
    btcAddress: string;
    xpub: string;
  };
  powerPlant: PowerPlant;
  society: Society;
};

export type Pool = {
  name: string;
};

export type Location = {
  aera: string;
  country: string;
  countryCode: string;
};

export type Society = {
  name: string;
  registrationNumber: string;
  shareCapital: number; // in CHF
  tokenization: number; // in %
  csmSaShare: number; // in %
  location: Location;
};

export type PowerPlant = {
  contractDuration: number; // in years
  electricityPrice: number; // in $/kWh
  powerMW: number; // in MW
  renewableContract: boolean;
  energies: EnergyType[];
  spotPrice?: boolean;
  spotLink?: string; // url
};

export type Fundraising = {
  amount: number;
  date: number;
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

export type TokenBalance = {
  address: string;
  balance: number;
  symbol: string;
  usd: number;
};

export type Api = {
  enable: boolean;
  username: string | undefined;
  url: string | undefined;
  contractor: Contractor | undefined;
};

export enum FacilityStatus {
  operational = "operational",
  funding = "funding",
  tocome = "tocome",
  stopped = "stopped",
}

export enum EnergyType {
  solar = "solar",
  hydro = "hydro",
  wind = "wind",
  nuclear = "nuclear",
  fossil = "fossil",
  geothermal = "geothermal",
  biomass = "biomass",
}

export enum Contractor {
  LUXOR = "LUXOR",
  ANTPOOL = "ANTPOOL",
  FOUNDRY = "FOUNDRY",
}

export type Income = {
  usd: number;
  btc: number;
};

export type Mining = {
  startingDate: number;
  safety: string;
  cooling: COOLING;
  containers: Container[];
  pool: Pool;
};

export type Container = {
  asics: Asic;
  start: number;
  units: number;
  intallationCosts: {
    equipement: number;
  };
};

export type Asic = {
  name: string;
  powerW: number;
  hashrateTHs: number;
};

export type Yield = {
  usd: number;
  btc: number;
  apr: number;
};

export type Fees = {
  crowdfunding: {
    csm: number;
  };
  operational: {
    operator: {
      powerTax: number; // $/kWh
      rate: number; // %
    };
    csm: number; // %
    pool: number; // %
    tax: number; // %
    provision: number; // %
  };
};

export enum FilterStatus {
  active = "active",
  inactive = "inactive",
  all = "all-status",
}

export enum FilterSite {
  my = "my-site",
  all = "all-status",
}

export enum COOLING {
  AIR = "air",
}

export enum FacilityDataMode {
  Short = "short",
  Location = "location",
  Mining = "mining",
  Full = "data",
}
