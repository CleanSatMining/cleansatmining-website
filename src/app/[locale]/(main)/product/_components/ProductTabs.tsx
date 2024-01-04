'use client'
import LabelWithIcon from '@/app/_shared/_components/_utils/LabelWithIcon'
import {
  getFinancialDataFromProduct,
  getTokenisationFromProduct,
} from '@/app/_shared/_helpers/product.helper'
import { Product } from '@/graphql/common/generated-types'
import { Tab, Tabs } from '@nextui-org/tabs'
import {
  BookOpenText,
  Calculator,
  Coin,
  CurrencyCircleDollar,
  File,
  Icon,
} from '@phosphor-icons/react'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import DescriptionTab from './_tabs/DescriptionTab'
import DocumentsTab from './_tabs/DocumentsTab'
import FinancesTab from './_tabs/FinancesTab'
import TokenisationTab from './_tabs/TokenisationTab'

interface ProductTabProps {
  className?: string
  product: Product
}

interface Tab {
  labelTranslationPath:
    | 'description'
    | 'finances'
    | 'documents'
    | 'tokenisation'
    | 'simulation'
  icon: Icon
  highlighted: boolean
  content: JSX.Element
}

export default function ProductTabs({ className, product }: ProductTabProps) {
  const t = useTranslations('ProductPage.ProductTab')

  const { description } = product
  const { descriptionPicture, siteUrl, downloadableDocuments } =
    product.customFields

  const tabs: Tab[] = [
    {
      labelTranslationPath: 'description',
      icon: BookOpenText,
      highlighted: false,
      content: (
        <DescriptionTab
          descriptionPictureUrl={descriptionPicture?.source}
          descriptionText={description}
          siteUrl={siteUrl}
        />
      ),
    },
    {
      labelTranslationPath: 'finances',
      icon: CurrencyCircleDollar,
      highlighted: false,
      content: (
        <FinancesTab
          financialProductData={getFinancialDataFromProduct(product)}
        />
      ),
    },
    {
      labelTranslationPath: 'documents',
      icon: File,
      highlighted: true,
      content: <DocumentsTab downloadableDocuments={downloadableDocuments} />,
    },
    {
      labelTranslationPath: 'tokenisation',
      icon: Coin,
      highlighted: false,
      content: (
        <TokenisationTab
          tokenisationProductData={getTokenisationFromProduct(product)}
        />
      ),
    },
    {
      labelTranslationPath: 'simulation',
      icon: Calculator,
      highlighted: false,
      content: <>{'Simulation'}</>,
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
          tab: 'h-14 rounded-2xl border border-grey-400 border-opacity-60 data-[selected=true]:bg-grey-800  data-[selected=true]:border-grey-800',
          tabContent: 'text-sm font-semibold text-white',
        }}
      >
        {tabs.map((tab, i) => {
          return (
            <Tab
              className={classNames(' h-full p-0 ', {
                '!border-green border-opacity-100': tab.highlighted,
              })}
              key={tab.labelTranslationPath}
              title={
                <LabelWithIcon
                  className={classNames('h-14', {
                    'text-green': tab.highlighted,
                  })}
                  label={t(tab.labelTranslationPath)}
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
