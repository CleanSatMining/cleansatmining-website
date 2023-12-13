import { Link } from '@nextui-org/link'
import ProductSection from '@/components/product/ProductSection'
import { ArrowRight } from '@phosphor-icons/react'
import Image from 'next/image'
import Box from '@/components/Box'
import { useTranslations } from 'next-intl'

interface TokenisationTabProps {
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

export default function TokenisationTab({
  tokenName,
  tokenSymbolName,
  tokenSymbolUrl,
  smartContractAdress,
  blokchainNetwork,
  smartContractAdressUrl,
  blockchainNetworkLogo,
  tokenQuantity,
  shareOfTokenizedCompany,
  ipfsDocumentUrl,
}: TokenisationTabProps) {
  const t = useTranslations('ProductPage.ProductTab')

  return (
    <Box className="flex h-full flex-col gap-12 p-9">
      <div className="flex flex-col gap-7 font-semibold">
        <ProductSection
          className="gap-1 p-0 xl:p-0"
          spacing="small"
          title={t('tokenName')}
        >
          {tokenName}
        </ProductSection>
        <ProductSection
          className="gap-1 p-0 xl:p-0"
          spacing="small"
          title={t('tokenSymbol')}
        >
          <Link className="font-semibold text-white" href={tokenSymbolUrl}>
            {tokenSymbolName}
          </Link>
        </ProductSection>
        <ProductSection
          className="gap-1 p-0 xl:p-0"
          spacing="small"
          title={t('smartContractAddress')}
        >
          <Link
            className="font-semibold text-white"
            href={smartContractAdressUrl}
          >
            {smartContractAdress}
          </Link>
        </ProductSection>
        <div className="flex items-end gap-4">
          <ProductSection
            className="gap-1 p-0 xl:p-0"
            spacing="small"
            title={t('blockchain')}
          >
            {blokchainNetwork}
          </ProductSection>
          <Image
            className="h-fit"
            src={blockchainNetworkLogo}
            alt={`Logo ${blokchainNetwork}`}
            width={43}
            height={43}
          />
        </div>
        <ProductSection
          className="gap-1 p-0 xl:p-0"
          spacing="small"
          title={t('tokenQuantity')}
        >
          {tokenQuantity}
        </ProductSection>
        <ProductSection
          className="gap-1 p-0 xl:p-0"
          spacing="small"
          title={t('shareOfTokenizedCompany')}
        >
          {shareOfTokenizedCompany + '%'}
        </ProductSection>
      </div>
      <Link
        className="flex w-fit items-center gap-2 font-semibold  text-white hover:text-green"
        showAnchorIcon
        href={ipfsDocumentUrl}
        anchorIcon={<ArrowRight size={20} />}
      >
        {t('seeTokenizationDocuments')}
      </Link>
    </Box>
  )
}
