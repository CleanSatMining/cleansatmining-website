'use client'
import { useCallback, useState, useEffect } from 'react'

import Button from '@/components/button/Button'

import { useWeb3React } from '@web3-react/core'
import { walletConnectV2 } from './Web3Provider'
import { metaMask } from '@realtoken/realt-commons'

const ConnectWallet: React.FC = () => {
  const { account: accountConnected } = useWeb3React()
  const [account, setAccount] = useState<string>(accountConnected ?? '')

  const onMetamaskConnect = useCallback(async () => {
    try {
      await disconnectWalletConnect()
      await disconnectMetamask()
      console.log('connect metamask')
      await metaMask.activate()
    } catch (err) {
      console.log(err)
    }
  }, [])

  const onWalletConnect = useCallback(async () => {
    try {
      await disconnectWalletConnect()
      await disconnectMetamask()
      console.log('connect walletConnectV2')
      await walletConnectV2.activate()
    } catch (err) {
      console.log(err)
    }
  }, [])

  const onWalletDisconnect = useCallback(async () => {
    console.log('disconnect wallet')
    await disconnectWalletConnect()
    await disconnectMetamask()
  }, [])

  useEffect(() => {
    if (accountConnected) {
      setAccount(accountConnected)
    } else {
      setAccount('')
    }
  }, [setAccount, accountConnected])

  return (
    <div className="flex flex-col items-center gap-0 py-4 text-center ">
      <p className="text-xxl font-title lg:text-2xl xl:text-3xl">
        {account ? 'You are connected : ' : 'Hello connect to Web3'}
      </p>
      <p>{account}</p>

      <div className="flex flex-row items-center gap-6 py-4 text-center">
        <Button className="lg:w-48" onClick={onMetamaskConnect}>
          Metamask
        </Button>
        <Button className=" n,:w-48" onClick={onWalletConnect}>
          WalletConnect
        </Button>
        <Button className="lg:w-48" onClick={onWalletDisconnect} theme="white">
          Disconnect
        </Button>
      </div>
    </div>
  )
}

export default ConnectWallet

async function disconnectWalletConnect() {
  if (walletConnectV2.deactivate) {
    await walletConnectV2.deactivate()
  } else {
    await walletConnectV2.resetState()
  }
}

async function disconnectMetamask() {
  if (metaMask.deactivate) {
    await metaMask.deactivate()
  } else {
    await metaMask.resetState()
  }
}
