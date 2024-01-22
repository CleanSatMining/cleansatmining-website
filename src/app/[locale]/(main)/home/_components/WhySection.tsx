import { LogoLayout } from '@/app/_shared/_components/_mainLayout/LogoLayout'
import { useTranslations } from 'next-intl'
import { IconInfo } from './IconInfo/IconInfo'

export function Why() {
  const t = useTranslations('HomePage.signedOut')
  const background = '/assets/background-logo.svg'

  return (
    <LogoLayout
      theme="light"
      backgroundSize="70%"
      id="TitleRoot"
      className="relative flex w-full flex-col items-center  px-4 py-4  sm:px-[12px] sm:py-[12px] lg:px-[60px] lg:py-[52px] "
    >
      <div className="font-cairo w-full text-xl font-extrabold leading-[38.4px] text-green sm:text-2xl lg:text-3xl">
        {
          "N'importe quel investisseur peut participer à l'industrie du minage Bitcoin."
        }
      </div>
      <div className="font-poppins mt-2 w-full text-sm font-normal leading-[19.2px] text-grey-600 sm:text-base lg:text-lg">
        {
          "Pour la toute première fois, et grâce à un système d'actions tokenisées parfaitement conformes au cadre réglementaire Suisse."
        }
        <br />
        {
          "En possédant des CSM tokens, vous êtes légalement propriétaire d'une part d'une société Suisse détenant des ASICs en exploitation sur un site bien particulier !"
        }
      </div>
      <div className="font-cairo mb-5 mt-10 w-full text-xl font-extrabold leading-[32px] text-grey-600 sm:text-2xl lg:text-3xl">
        {'4 raisons d’investir avec CleanSat Mining'}
      </div>
      <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <IconInfo
          alt="trophy"
          icon="https://file.rendit.io/n/g2HYyKDyt81nRIxlPSNY.svg"
          text="Obtenez une espérance de gain incroyable"
        ></IconInfo>
        <IconInfo
          alt="Coins"
          icon="https://file.rendit.io/n/adrEsTePxTa7AIPSCMzr.svg"
          text="Gardez une liquidité sur votre capital"
        ></IconInfo>
        <IconInfo
          alt="Recycle"
          icon="https://file.rendit.io/n/PTlRvngRSY6RtuK0C9qI.svg"
          text="Diminuez le gâchis énergétique"
        ></IconInfo>
        <IconInfo
          alt="GlobeHemisphereWest"
          icon="https://file.rendit.io/n/T4gSoLqGeldkBTtkvpdk.svg"
          text="Contribuez à l’impact sur l’économie locale"
        ></IconInfo>
      </div>
    </LogoLayout>
  )
}
