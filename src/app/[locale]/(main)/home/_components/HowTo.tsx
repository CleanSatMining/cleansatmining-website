import { useTranslations } from 'next-intl'
import { StepCard } from './StepCard/StepCard'

export function HowTo() {
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
      <div className="font-cairo w-full text-3xl font-extrabold leading-[38.4px] text-grey-600">
        {'Investir dans le minage green du Bitcoin'}
      </div>
      <div className="font-poppins mb-10 mt-2 w-full text-base font-normal leading-[19.2px] text-grey-600">
        {
          "Découvrez l’investissement durable dans le minage vert du Bitcoin en suivant ces quatre étapes. Plongez dans une opportunité éthique et prometteuse, guidée par notre engagement envers l'innovation et la durabilité."
        }
      </div>
      <div className="grid w-full grid-cols-4 items-start gap-5">
        <StepCard
          alt="step1"
          icon="https://file.rendit.io/n/oVfbT0pGts2DNo3QwTWC.svg"
          step="étape 1"
          text="Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbialiquet tincidunt mattis ultrices tempus."
          title="Sélectionnez une offre en cours"
        ></StepCard>
        <StepCard
          alt="step2"
          icon="https://file.rendit.io/n/C4BcIezGFk5jDTBDleef.svg"
          step="étape 2"
          text="Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbialiquet tincidunt mattis ultrices tempus."
          title="Investissez à partir du montant d’entrée"
        ></StepCard>
        <StepCard
          alt="step3"
          icon="https://file.rendit.io/n/XqFiEaIkNVjk8imdMhub.svg"
          step="étape 3"
          text="Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbialiquet tincidunt mattis ultrices tempus."
          title="Recevez vos Bitcoins"
        ></StepCard>
        <StepCard
          alt="step4"
          icon="https://file.rendit.io/n/kvycZIZJ7BMl32YEV79b.svg"
          step="étape 4"
          text="Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbialiquet tincidunt mattis ultrices tempus."
          title="Revendez !"
        ></StepCard>
      </div>
    </div>
  )
}
