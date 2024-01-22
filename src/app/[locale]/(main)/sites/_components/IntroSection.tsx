import { LogoLayout } from '@/app/_shared/_components/_mainLayout/LogoLayout'
import { useTranslations } from 'next-intl'

export function IntroSection() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <LogoLayout theme="dark" backgroundSize="50%">
      <div className="h-[322px]">
        <div className="font-cairo flex h-[322px] h-full flex-col justify-center text-center text-5xl font-extrabold leading-[81.6px] text-white">
          Nos sites CSM
        </div>
      </div>
    </LogoLayout>
  )
}
