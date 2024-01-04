import ProductSection from '@/app/_shared/_components/_product/ProductSection'
import Box from '@/app/_shared/_components/_utils/Box'
import { TokenisationProductData } from '@/models/productData'
import { Link } from '@nextui-org/link'
import { ArrowRight } from '@phosphor-icons/react'
import { useFormatter, useTranslations } from 'next-intl'
import { BlockChainNeworkLogo } from './BlockChainNeworkLogo'

interface TokenisationTabProps {
  tokenisationProductData: TokenisationProductData
}

export default function TokenisationTab({
  tokenisationProductData: {
    tokenName,
    tokenSymbolName,
    tokenSymbolUrl,
    smartContractAddress,
    blockchainNetwork,
    smartContractAddressUrl,
    tokenQuantity,
    shareOfTokenizedCompany,
    ipfsDocumentUrl,
  },
}: TokenisationTabProps) {
  const t = useTranslations('ProductPage.ProductTab.TokenisationTab')
  const format = useFormatter()

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
            href={smartContractAddressUrl}
          >
            {smartContractAddress}
          </Link>
        </ProductSection>
        <div className="flex items-end gap-4">
          <ProductSection
            className="gap-1 p-0 xl:p-0"
            spacing="small"
            title={t('blockchain')}
          >
            {blockchainNetwork}
          </ProductSection>
          <BlockChainNeworkLogo blockchainNetwork={blockchainNetwork} />
        </div>
        <ProductSection
          className="gap-1 p-0 xl:p-0"
          spacing="small"
          title={t('tokenQuantity')}
        >
          {format.number(tokenQuantity, 'rounded')}
        </ProductSection>
        <ProductSection
          className="gap-1 p-0 xl:p-0"
          spacing="small"
          title={t('shareOfTokenizedCompany')}
        >
          {format.number(shareOfTokenizedCompany, 'percent')}
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
