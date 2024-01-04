'use client'
import { useState, useEffect } from 'react'

import Button from '@/components/button/Button'

import {
  isValidSignature,
  isValidSignatureServer,
} from '@/components/utils/auth'
import { useWeb3React } from '@web3-react/core'

const message = 'Message à signer.'

const SignatureComponent: React.FC = () => {
  const [result, setResult] = useState('')

  const { account, provider } = useWeb3React()

  const handleSign = async () => {
    console.log('is provider?')

    if (provider && account) {
      try {
        console.log('provider')
        const signer = provider.getSigner()
        const signedMessage = await signer.signMessage(message)

        //const isValid = await isValidSignature(message, signedMessage, account)
        const isValidServer = isValidSignatureServer(
          message,
          signedMessage,
          account,
        )

        console.log(signedMessage, isValidServer)
        setResult(isValidServer ? 'Signature valide' : 'Signature non valide')
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    if (!account) {
      setResult('')
    }
  }, [account, setResult])

  return (
    <>
      {account && (
        <div className="flex flex-col items-center gap-6 py-4 text-center">
          <Button className="lg:w-48" onClick={handleSign} theme="yellow">
            Sign
          </Button>
          <p>Résultat: {result}</p>
        </div>
      )}
    </>
  )
}

export default SignatureComponent
