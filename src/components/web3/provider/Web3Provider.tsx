'use client'

import { Web3ReactProvider } from '@web3-react/core'

import {
  metaMask,
  metaMaskHooks,
  getWalletConnectV2,
  ChainSelectConfig,
  parseAllowedChain,
} from '@realtoken/realt-commons'
import {
  CHAINS,
  ChainsID,
  Chain as CustomChain,
} from '@/components/constants/chains'
import ConnectWallet from './ConnectWallet'

const customChains: ChainSelectConfig<CustomChain> = {
  allowedChains: parseAllowedChain(ChainsID),
  chainsConfig: CHAINS,
}
const showAllNetworks = true

const env = process.env.NEXT_PUBLIC_ENV ?? 'development'
const walletConnectKey = '6cd6d4bd2414e7bcbb25e4a83ea5d812'

export const [walletConnectV2, walletConnectV2Hooks] =
  getWalletConnectV2<CustomChain>(
    customChains,
    env,
    walletConnectKey,
    showAllNetworks,
  )

interface Web3ProviderProps {
  children: React.ReactNode
}

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  return (
    <Web3ReactProvider
      connectors={[
        [metaMask, metaMaskHooks],
        [walletConnectV2, walletConnectV2Hooks],
      ]}
    >
      <ConnectWallet></ConnectWallet>
      {children}
    </Web3ReactProvider>
  )
}

export default Web3Provider
