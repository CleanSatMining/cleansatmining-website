import { useTranslations } from 'next-intl'
import { Carousel } from './Carousel/Carousel'

export function Sites() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div
      id="TitleRoot"
      className=" relative flex w-full flex-col items-center bg-grey-600 bg-no-repeat bg-blend-normal"
      style={{
        padding: '60px 52px',

        backgroundSize: '70%',
      }}
    >
      <div className="font-cairo w-full text-3xl font-extrabold leading-[38.4px] text-white">
        {'Nos sites CSM'}
      </div>
      <div className="font-poppins mt-2 w-full text-base font-normal leading-[19.2px] text-white">
        {
          'Explorez nos sites de minage, leurs avantages pour vos investissements et vos opportunités.'
        }
      </div>
      <Carousel></Carousel>
    </div>
  )
}
