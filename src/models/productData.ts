export type FinancialProductData = {
  minedBtc: number
  otherIncome: number
  electricityCost: number
  operatingCosts: number
  csmOperationalFees: number
  otherCosts: number
  equipmentDepreciationCost: number
  is: number
  asics: number
  vat: number
  miscellaneousEquipment: number
  transportation: number
  electricityDeposit: number
  otherInvestment: number
  estimatedNetApy: number
  estimatedGrossApy: number
  financeHelpPageUrl: string
}

export type TokenisationProductData = {
  tokenName: string
  tokenSymbolName: string
  tokenSymbolUrl: string
  smartContractAddress: string
  smartContractAddressUrl: string
  blockchainNetwork: string
  tokenQuantity: number
  shareOfTokenizedCompany: number
  ipfsDocumentUrl: string
}
