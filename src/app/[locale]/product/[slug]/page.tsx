'use client'
import { Product as ProductGQL } from '@/api/common/generated-types'
import { Product } from '@/models/Product'
import { useQuery } from '@apollo/client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr/ArrowLeft'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import AddToCartBanner from '../components/AddToCartBanner'
import MainInformationCard from '../components/MainInformationCard'
import ProductTab from '../components/ProductTab'
import { GET_PRODUCT_DETAIL } from './product.graphql'
import Box from '@/components/Box'
import ProductImage from '@/components/product/ProductImage'

export default function ProductPage() {
  const t = useTranslations('ProductPage')

  const { slug } = useParams()

  useQuery(GET_PRODUCT_DETAIL, {
    variables: { slug: slug },
    onCompleted: (data) => {
      if (data && data.product) {
        initiateMockedProduct(data.product)
      }
    },
  })

  const [mockedProduct, setMockedProduct] = useState<Product>()

  function initiateMockedProduct(item: ProductGQL) {
    const currentProduct: Product = {
      id: item.variants[0].id,
      slug: slug[-1],
      name: item.variants[0].name,
      saleStatus: 'incoming',
      productName: 'CSM Alpha',
      secondaryProductName: "Offre d'investissement n°1",
      locationName: 'Parc des Birunga',
      locationCountry: 'RDC',
      estimatedNetApy: 0.173,
      minInvestmentAmount: 1000,
      maxInvestmentAmount: 10000,
      currentProjectInvestmentAmount: 14580000,
      totalInvestment: 18000000,
      minProjectValue: 12000000,
      energySources: ['hydro', 'solar'],
      electricityPrice: '0.1524 $/Kwh',
      availablePower: '175 MW',
      contractDuration: '5 ans (renouvelable)',
      operatorName: 'Big Black Green Services',
      operatorLogo:
        'https://www.bbgsmining.com/resource/img/logos/bbgs-green.png',
      operatorUrl: 'https://www.bbgsmining.com/en/home',
      engineType: 'M30S (10TH, 1300W)',
      engineQuantity: 10,
      estimatedDeliveryDate: new Date('2023-08-31T00:00:00'),
      estimatedLaunchDate: new Date('2023-09-07T00:00:00'),
      siteUrl: 'https://cleansatmining.com/csm-alpha',
      descriptionPicture:
        'https://cdn.pixabay.com/photo/2023/01/09/22/05/gorilla-7708352_1280.jpg',
      descriptionText: `Le Parc national des Virunga est un site classé au patrimoine mondial de l'UNESCO situé en République Démocratique du Congo.  C'est le plus ancien parc national d'Afrique. Il est connu pour abriter les derniers gorilles de montagne. Depuis plusieurs années, le parc est menacé par des activités illégales telles que le braconnage et l'exploration pétrolière. Emmanuel de Merode, le directeur du parc, a joué un rôle clé dans le développement d’un certain nombre de projets liés aux énergies renouvelables dans la région, tels que des centrales hydroélectriques, afin de réduire la dépendance aux combustibles fossiles, et d'améliorer l'accès à l'électricité pour les communautés locales. Le Parc national des Virunga est un site classé au patrimoine mondial de l'UNESCO situé en République Démocratique du Congo.  C'est le plus ancien parc national d'Afrique. Il est connu pour abriter les derniers gorilles de montagne. Depuis plusieurs années, le parc est menacé par des activités illégales telles que le braconnage et l'exploration pétrolière. Emmanuel de Merode, le directeur du parc, a joué un rôle clé dans le développement d’un certain nombre de projets liés aux énergies renouvelables dans la région, tels que des centrales hydroélectriques, afin de réduire la dépendance aux combustibles fossiles, et d'améliorer l'accès à l'électricité pour les communautés locales. Le Parc national des Virunga est un site classé au patrimoine mondial de l'UNESCO situé en République Démocratique du Congo.  C'est le plus ancien parc national d'Afrique. Il est connu pour abriter les derniers gorilles de montagne. Depuis plusieurs années, le parc est menacé par des activités illégales telles que le braconnage et l'exploration pétrolière. Emmanuel de Merode, le directeur du parc, a joué un rôle clé dans le développement d’un certain nombre de projets liés aux énergies renouvelables dans la région, tels que des centrales hydroélectriques, afin de réduire la dépendance aux combustibles fossiles, et d'améliorer l'accès à l'électricité pour les communautés locales.Le Parc national des Virunga est un site classé au patrimoine mondial de l'UNESCO situé en République Démocratique du Congo.  C'est le plus ancien parc national d'Afrique. Il est connu pour abriter les derniers gorilles de montagne. Depuis plusieurs années, le parc est menacé par des activités illégales telles que le braconnage et l'exploration pétrolière. Emmanuel de Merode, le directeur du parc, a joué un rôle clé dans le développement d’un certain nombre de projets liés aux énergies renouvelables dans la région, tels que des centrales hydroélectriques, afin de réduire la dépendance aux combustibles fossiles, et d'améliorer l'accès à l'électricité pour les communautés locales.Le Parc national des Virunga est un site classé au patrimoine mondial de l'UNESCO situé en République Démocratique du Congo.  C'est le plus ancien parc national d'Afrique. Il est connu pour abriter les derniers gorilles de montagne. Depuis plusieurs années, le parc est menacé par des activités illégales telles que le braconnage et l'exploration pétrolière. Emmanuel de Merode, le directeur du parc, a joué un rôle clé dans le développement d’un certain nombre de projets liés aux énergies renouvelables dans la région, tels que des centrales hydroélectriques, afin de réduire la dépendance aux combustibles fossiles, et d'améliorer l'accès à l'électricité pour les communautés locales.`,
      tokenName: 'CleanSat Mining Alpha',
      tokenSymbolName: 'CSM-ALPHA',
      tokenSymbolUrl:
        'https://gnosisscan.io/token/0xf8419b6527A24007c2BD81bD1aA3b5a735C1F4c9',
      smartContractAdress: '0xf8419b6527A24007c2BD81bD1aA3b5a735C1F4c9',
      smartContractAdressUrl:
        'https://gnosisscan.io/token/0xf8419b6527A24007c2BD81bD1aA3b5a735C1F4c9',
      blokchainNetwork: 'Gnosis chain',
      blockchainNetworkLogo:
        'https://uploads-ssl.webflow.com/63692bf32544bee8b1836ea6/636a6e764bdb11a70341fab4_owl-forest.png',
      tokenQuantity: 100000,
      shareOfTokenizedCompany: 100,
      ipfsDocumentUrl: '',
    }
    setMockedProduct(currentProduct)
  }

  return (
    // TODO : Add loader
    mockedProduct ? (
      <div className="flex flex-col gap-7 xl:py-7">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold hover:text-green"
        >
          <ArrowLeft size={20} />
          {t('backLink')}
        </Link>
        <Box className="mb-7 overflow-hidden">
          <ProductImage
            size="banner"
            image={
              'https://www.cleansatmining.com/data/files/activity-721-1.jpg'
            }
            status={mockedProduct.saleStatus}
            productName={mockedProduct.productName}
            secondaryProductName={mockedProduct.secondaryProductName}
            locationName={mockedProduct.locationName}
            locationCountry={mockedProduct.locationCountry}
          />
        </Box>
        <div className="grid w-full grid-cols-1 gap-7 lg:grid-cols-5">
          <ProductTab className="lg:col-span-3" product={mockedProduct} />
          <MainInformationCard
            className="lg:col-span-2"
            product={mockedProduct}
          />
        </div>
        <AddToCartBanner
          salesStatus={'open'}
          // TODO : Put back true limit after demo
          // maxInvestmentAmount={5000}
          productId={mockedProduct.id}
          minInvestmentAmount={100}
          maxInvestmentAmount={400}
        />
      </div>
    ) : (
      '...Loading'
    )
  )
}
