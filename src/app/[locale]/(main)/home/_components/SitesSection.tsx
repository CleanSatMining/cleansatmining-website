import { useTranslations } from 'next-intl'
import { Carousel } from './Carousel/Carousel'

export function SitesSection() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div
      id="TitleRoot"
      className="relative flex w-full flex-col items-center bg-grey-600 bg-no-repeat px-2 py-2 bg-blend-normal sm:px-[12px] sm:py-[12px] lg:px-[60px] lg:py-[52px]"
      style={{
        backgroundSize: '70%',
      }}
    >
      <div className="font-cairo w-full text-xl font-extrabold leading-[38.4px] text-white sm:text-2xl lg:text-3xl">
        {'Nos sites CSM'}
      </div>
      <div className="font-poppins mt-2 w-full text-sm font-normal leading-[19.2px] text-white sm:text-base lg:text-lg">
        {
          'Explorez nos sites de minage, leurs avantages pour vos investissements et vos opportunités.'
        }
      </div>
      <Carousel></Carousel>
    </div>
  )
}
