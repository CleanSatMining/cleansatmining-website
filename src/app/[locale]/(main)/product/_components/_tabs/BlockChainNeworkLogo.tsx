import Image from 'next/image'

interface BlockChainNeworkLogoProps {
  blockchainNetwork: string
}

export function BlockChainNeworkLogo({
  blockchainNetwork,
}: BlockChainNeworkLogoProps) {
  let blockchainNetworkLogoSource: string

  switch (blockchainNetwork) {
    case 'gnosis':
      blockchainNetworkLogoSource = '/blockchainNetworkLogo/gnosisLogo.png'
      break
    default:
      blockchainNetworkLogoSource = ''
  }

  return (
    <>
      {blockchainNetworkLogoSource && (
        <Image
          className="h-fit"
          src={blockchainNetworkLogoSource}
          alt={`Logo ${blockchainNetwork}`}
          width={38}
          height={38}
        />
      )}
    </>
  )
}
