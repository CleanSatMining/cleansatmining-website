import { FC } from 'react'

import { GnosisLogo, Chain as RealtChains } from '@realtoken/realt-commons'

import { Currency, DAI } from './currencies'

export enum ChainsID {
  Gnosis = 0x64,
}

export type Chain = Omit<RealtChains, 'blockExplorerUrl'> & {
  chainId: ChainsID
  chainName: string
  logo: FC
  nativeCurrency: Currency
  rpcUrl: string
  blockExplorerUrl: string
}

export const CHAINS: Record<ChainsID, Chain> = {
  [ChainsID.Gnosis]: {
    chainId: ChainsID.Gnosis,
    chainName: 'Gnosis Chain',
    logo: GnosisLogo,
    nativeCurrency: DAI,
    rpcUrl: 'https://rpc.ankr.com/gnosis',
    blockExplorerUrl: 'https://gnosisscan.io/',
    isTestnet: false,
  },
}

export const URLS = Object.keys(CHAINS).reduce<Record<number, string>>(
  (accumulator, chainId) => {
    accumulator[Number(chainId)] = CHAINS[Number(chainId) as ChainsID].rpcUrl
    return accumulator
  },
  {},
)

export const ALLOWED_CHAINS = Object.keys(URLS).map((chainId) =>
  Number(chainId),
)

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
