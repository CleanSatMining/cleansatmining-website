import { LogoLayout } from '@/app/_shared/_components/_mainLayout/LogoLayout'
import { useTranslations } from 'next-intl'
import { StepCard } from './HowTo/StepCard'

export function HowToSection() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <LogoLayout
      id="HowToRoot"
      theme="light"
      className="relative flex w-full flex-col items-center px-4 py-4 sm:px-6 sm:py-6 lg:px-[52px] lg:py-[60px]"
      backgroundSize="70%"
    >
      <div className="font-cairo w-full text-xl font-extrabold leading-[38.4px] text-grey-600 sm:text-2xl lg:text-3xl">
        {'Investir dans le minage green du Bitcoin'}
      </div>
      <div className="font-poppins mb-10 mt-2 w-full text-sm font-normal leading-[19.2px] text-grey-600 sm:text-base lg:text-lg">
        {
          "Découvrez l’investissement durable dans le minage vert du Bitcoin en suivant ces quatre étapes. Plongez dans une opportunité éthique et prometteuse, guidée par notre engagement envers l'innovation et la durabilité."
        }
      </div>
      <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
    </LogoLayout>
  )
}