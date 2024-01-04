import { BlurredProductsList } from '@/app/[locale]/(main)/home/_components/BlurredProductsList'

export default function HomeSignedOut() {
  return (
    <BlurredProductsList
      pathTranslateKey={'HomePage.signedOut'}
      enableLoginButton={true}
    />
  )
}
