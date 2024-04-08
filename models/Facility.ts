export type CleanSatMiningFacility = {
  id: string;
  name: string;
  shortName: string;
  image: string;
  slug: string;
  status: FacilityStatus;
  location?: Location;
  energies: EnergyType[];
  data?: FacilityData;
};

export type Operator = {
  name: string;
  logo: string;
  website: string;
};

export type FacilityData = {
  name: string;
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

export type Token = {
  address: string;
  initialPrice: number;
  supply: number;
  symbol: string;
  gnosisscanUrl: string;
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
}

export type Income = {
  usd: number;
  btc: number;
};

export type Mining = {
  startingDate: string;
  electricity: {
    usdPricePerKWH: number;
  };
  containers: Container[];
};

export type Container = {
  asics: Asic;
  start: string;
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
      includeWithElectricity: boolean;
      rate: number; //BBGS, OP
    };
    csm: number;
    pool: number;
    taxe: number;
    provision: number;
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
