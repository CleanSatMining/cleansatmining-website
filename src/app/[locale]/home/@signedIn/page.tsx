'use client'
import {
  Product as ProductGQL,
  ProductListOptions,
} from '@/api/common/generated-types'
import { GET_PRODUCTS } from '@/app/homepage.graphql'
import Box from '@/components/Box'
import { Product } from '@/models/Product'
import { useQuery } from '@apollo/client'
import { useTranslations } from 'next-intl'
import { useMemo, useState } from 'react'
import ProductCard from './components/ProductCard'

export default function HomeSignedIn() {
  const t = useTranslations('HomePage.signedIn')

  // TODO fetch products list then map to render the ProductCard list and remove the mocked datas
  const productListOptions: ProductListOptions = {
    take: 6,
  }

  useQuery(GET_PRODUCTS, {
    variables: { options: productListOptions },
    onCompleted: (data) => {
      if (data && data.products.items.length > 0) {
        initiateMockedProducts(data.products.items)
      }
    },
  })

  let [mockedProducts, setMockedProducts] = useState<Product[]>([])

  function initiateMockedProducts(items: ProductGQL[]) {
    let currentProducts: Product[] = []

    items.forEach((item) => {
      currentProducts.push({
        id: item.id,
        slug: item.slug,
        name: item.variants[0].name,
        saleStatus: renderStatus(),
        productName: 'CSM Alpha',
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
      })
    })

    setMockedProducts(currentProducts)
  }

  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const renderStatus = () => {
    switch (randomIntFromInterval(1, 4)) {
      case 1:
        return 'closed'
      case 2:
        return 'incoming'
      case 3:
        return 'running'
      case 4:
        return 'lastOpportunity'
      default:
        return 'closed'
    }
  }

  const renderCards = useMemo(() => {
    if (mockedProducts.length > 0) {
      return (
        <>
          <Box className="flex justify-between gap-4 px-9 py-6">
            <div>Filtres</div>
            <div>Tri</div>
          </Box>
          <div
            className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
            data-testid="productsList"
          >
            {mockedProducts.map((product, index) => {
              return <ProductCard product={product} key={index} />
            })}
          </div>
        </>
      )
    } else {
      return (
        <Box className="rounded-3xl px-9 py-6" data-testid="emptyList">
          <p>{t('empty')}</p>
        </Box>
      )
    }
  }, [mockedProducts, t])

  return (
    <div className="flex flex-col gap-7" data-testid="signedInHome">
      {renderCards}
    </div>
  )
}
