import { EnergySource } from './Energy'

export type SaleStatus = 'closed' | 'incoming' | 'running' | 'lastOpportunity'

export type Product = {
  id: string
  slug: string
  name: string
  saleStatus: SaleStatus
  productName: string
  secondaryProductName?: string
  locationName?: string
  locationCountry?: string
  estimatedNetApy?: number
  minInvestmentAmount: number
  maxInvestmentAmount?: number
  currentProjectInvestmentAmount: number
  totalInvestment: number
  minProjectValue: number
  energySources: EnergySource[]
  electricityPrice: string
  availablePower: string
  contractDuration?: string
  operatorName: string
  operatorLogo?: string
  operatorUrl?: string
  engineType: string
  engineQuantity: number
  estimatedDeliveryDate: Date
  estimatedLaunchDate: Date
  siteUrl: string
  descriptionPicture?: string
  descriptionText: string
  tokenName: string
  tokenSymbolName: string
  tokenSymbolUrl: string
  smartContractAdress: string
  smartContractAdressUrl: string
  blokchainNetwork: string
  blockchainNetworkLogo: string
  tokenQuantity: number
  shareOfTokenizedCompany: number
  ipfsDocumentUrl: string
}
