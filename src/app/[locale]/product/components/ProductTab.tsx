'use client'
import { Tabs, Tab } from '@nextui-org/tabs'
import {
  BookOpenText,
  Calculator,
  Coin,
  CurrencyCircleDollar,
  File,
} from '@phosphor-icons/react'
import DescriptionTab from './DescriptionTab'
import TokenisationTab from './TokenisationTab'
import LabelWithIcon from '@/components/LabelWithIcon'
import { useTranslations } from 'next-intl'

interface ProductTabProps {
  className?: string
  product: any
}

export default function ProductTab({ className, product }: ProductTabProps) {
  const t = useTranslations('ProductPage.ProductTab')

  const tabs = [
    {
      label: 'Description',
      icon: BookOpenText,
      content: (
        <DescriptionTab
          descriptionPicture={product.descriptionPicture}
          descriptionText={product.descriptionText}
          siteUrl={product.siteUrl}
        />
      ),
    },
    {
      label: 'Finances',
      icon: CurrencyCircleDollar,
      content: 'Finances',
    },
    {
      label: 'Documents',
      icon: File,
      content: 'Documents',
    },
    {
      label: 'Tokenisation',
      icon: Coin,
      content: (
        <TokenisationTab
          tokenName={product.tokenName}
          tokenSymbolName={product.tokenSymbolName}
          tokenSymbolUrl={product.tokenSymbolUrl}
          smartContractAdress={product.smartContractAdress}
          smartContractAdressUrl={product.smartContractAdressUrl}
          blokchainNetwork={product.blokchainNetwork}
          blockchainNetworkLogo={product.blockchainNetworkLogo}
          tokenQuantity={product.tokenQuantity}
          shareOfTokenizedCompany={product.shareOfTokenizedCompany}
          ipfsDocumentUrl={product.ipfsDocumentUrl}
        />
      ),
    },
    {
      label: 'Simulation',
      icon: Calculator,
      content: 'Simulation',
    },
  ]

  return (
    <div className={`flex w-full flex-col gap-7 ${className}`}>
      <Tabs
        aria-label={t('productInformation')}
        disableAnimation
        classNames={{
          tabList:
            'bg-transparent grid grid-cols-2 lg:flex lg:flex-between w-full gap-3 p-0 lg:h-14',
          tab: 'h-14 rounded-2xl border border-grey-400 border-opacity-60 data-[selected=true]:bg-grey-800  data-[selected=true]:border-grey-800 last:!border-green',
          tabContent: 'text-sm font-semibold text-white',
        }}
      >
        {tabs.map((tab, i) => {
          return (
            <Tab
              className="h-full p-0"
              key={tab.label}
              title={
                <LabelWithIcon
                  className={`h-14 ${tabs.length - 1 === i && 'text-green'} `}
                  label={tab.label}
                  Icon={tab.icon}
                  sizeIcon={24}
                />
              }
            >
              {tab.content}
            </Tab>
          )
        })}
      </Tabs>
    </div>
  )
}
