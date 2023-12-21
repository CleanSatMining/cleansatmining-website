import Web3 from 'web3'
import {
  hashPersonalMessage,
  ecrecover,
  bufferToHex,
  toBuffer,
  fromRpcSig,
  pubToAddress,
} from 'ethereumjs-util'

export const isValidSignature = async (
  message: string,
  signature: string,
  userAddress: string,
): Promise<boolean> => {
  try {
    const ethereum = window.ethereum
    const web3 = ethereum ? new Web3(ethereum as any) : null
    if (web3) {
      const recoveredAddress = await web3.eth.personal.ecRecover(
        message,
        signature,
      )
      const isValid =
        recoveredAddress.toLowerCase() === userAddress.toLowerCase()
      console.log('result', recoveredAddress, isValid)
      return isValid
    }
    return false
  } catch (error) {
    console.error('Erreur lors de la validation de la signature:', error)
    return false
  }
}

export const isValidSignatureServer = (
  message: string,
  signature: string,
  userAddress: string,
): boolean => {
  try {
    // Parse the signature
    const { v, r, s } = fromRpcSig(signature)

    const prefixedMessage = hashPersonalMessage(Buffer.from(message))

    // Perform EC recovery to get the public key
    const publicKey = ecrecover(prefixedMessage, v, toBuffer(r), toBuffer(s))

    // Derive the Ethereum address from the public key
    const recoveredAddress = pubToAddress(publicKey)
    const recoveredAddressString = bufferToHex(recoveredAddress)

    // Validate the recovered address
    const isValid =
      recoveredAddressString.toLowerCase() === userAddress.toLowerCase()

    return isValid
  } catch (error) {
    console.error('Error validating signature:', error)
    return false
  }
}
