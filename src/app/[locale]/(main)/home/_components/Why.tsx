import { useTranslations } from 'next-intl'
import { IconInfo } from './IconInfo'

export function Why() {
  const t = useTranslations('HomePage.signedOut')
  const background = '/assets/background-logo.svg'

  return (
    <div
      id="TitleRoot"
      className=" relative flex w-full flex-col items-center  bg-no-repeat bg-blend-normal"
      style={{
        padding: '60px 52px',
        background: `url(${background}) no-repeat center center, #FFF`,
        backgroundSize: '70%',
      }}
    >
      <div className="font-cairo w-full text-3xl font-extrabold leading-[38.4px] text-green">
        {
          "N'importe quel investisseur peut participer à l'industrie du minage Bitcoin."
        }
      </div>
      <div className="font-poppins mt-2 w-full text-base font-normal leading-[19.2px] text-grey-600">
        {
          "Pour la toute première fois, et grâce à un système d'actions tokenisées parfaitement conformes au cadre réglementaire Suisse."
        }
        <br />
        {
          "En possédant des CSM tokens, vous êtes légalement propriétaire d'une part d'une société Suisse détenant des ASICs en exploitation sur un site bien particulier !"
        }
      </div>
      <div className="font-cairo mb-5 mt-10 w-full text-3xl font-extrabold leading-[32px] text-grey-600">
        {'4 raisons d’investir avec CleanSat Mining'}
      </div>
      <div className="grid w-full grid-cols-4 items-start gap-5">
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
    </div>
  )
}
