import ResponsiveImage from '@/components/ResponsiveImage'
import { useTranslations } from 'next-intl'
import mobileImg from './csm-signed-out-mobile.png'
import desktopImg from './csm-signed-out-desktop.png'
import ButtonLink from '@/components/button/ButtonLink'

export default function HomeSignedOut() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-28 mx-auto flex flex-col items-center gap-4 text-center leading-tight md:left-1/3 md:right-1/3 md:top-56 md:w-1/3">
        <h2 className="max-w-xs font-title text-3xl font-extrabold">
          {t('title')}
        </h2>
        <ButtonLink href="/sign-in" minWidth data-testid="signInCta">
          {t('cta')}
        </ButtonLink>
      </div>
      <ResponsiveImage
        src={mobileImg}
        mobileImg={mobileImg}
        desktopImg={desktopImg}
        alt=""
      />
    </div>
  )
}
