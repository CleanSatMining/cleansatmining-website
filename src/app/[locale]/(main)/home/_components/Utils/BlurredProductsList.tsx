import ButtonLink from '@/app/_shared/_components/_utils/_buttons/ButtonLink'
import { useTranslations } from 'next-intl'

interface BlurredProductsListProps {
  pathTranslateKey: 'HomePage.signedOut' | 'HomePage.signedIn'
  enableLoginButton: boolean
}

export function BlurredProductsList({
  pathTranslateKey,
  enableLoginButton,
}: BlurredProductsListProps) {
  const t = useTranslations(pathTranslateKey)

  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-28 mx-auto flex flex-col items-center gap-4 text-center leading-tight md:left-1/3 md:right-1/3 md:top-56 md:w-1/3">
        <h2 className="max-w-xs font-title text-3xl font-extrabold">
          {t('title')}
        </h2>
        {enableLoginButton && (
          <ButtonLink href="/sign-in" minWidth data-testid="signInCta">
            {t('cta')}
          </ButtonLink>
        )}
      </div>
    </div>
  )
}
