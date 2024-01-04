import { Product } from '@/graphql/common/generated-types'
import {
  FinancialProductData,
  TokenisationProductData,
} from '@/models/productData'

export const getFinancialDataFromProduct = (
  product: Product,
): FinancialProductData => {
  const {
    minedBtc,
    otherIncome,
    electricityCost,
    operatingCosts,
    csmOperationalFees,
    otherCosts,
    equipmentDepreciationCost,
    is,
    asics,
    vat,
    miscellaneousEquipment,
    transportation,
    electricityDeposit,
    otherInvestment,
    estimatedNetApy,
    estimatedGrossApy,
    financeHelpPageUrl,
  } = product.customFields

  return {
    minedBtc: minedBtc,
    otherIncome: otherIncome,
    electricityCost: electricityCost,
    operatingCosts: operatingCosts,
    csmOperationalFees: csmOperationalFees,
    otherCosts: otherCosts,
    equipmentDepreciationCost: equipmentDepreciationCost,
    is: is,
    asics: asics,
    vat: vat,
    miscellaneousEquipment: miscellaneousEquipment,
    transportation: transportation,
    electricityDeposit: electricityDeposit,
    otherInvestment: otherInvestment,
    estimatedNetApy: estimatedNetApy,
    estimatedGrossApy: estimatedGrossApy,
    financeHelpPageUrl: financeHelpPageUrl,
  }
}

export const getTokenisationFromProduct = (
  product: Product,
): TokenisationProductData => {
  const {
    tokenName,
    tokenSymbolName,
    tokenSymbolUrl,
    smartContractAddress,
    smartContractAddressUrl,
    blockchainNetwork,
    tokenQuantity,
    shareOfTokenizedCompany,
    ipfsDocumentUrl,
  } = product.customFields

  return {
    tokenName: tokenName,
    tokenSymbolName: tokenSymbolName,
    tokenSymbolUrl: tokenSymbolUrl,
    smartContractAddress: smartContractAddress,
    smartContractAddressUrl: smartContractAddressUrl,
    blockchainNetwork: blockchainNetwork,
    tokenQuantity: tokenQuantity,
    shareOfTokenizedCompany: shareOfTokenizedCompany,
    ipfsDocumentUrl: ipfsDocumentUrl,
  }
}
