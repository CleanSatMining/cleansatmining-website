import { useTranslations } from 'next-intl'
import SignInForm from './components/SignInForm'
import { Link } from '@/navigation'

export default function SignInPage() {
  const t = useTranslations('SignInPage')
  return (
    <div className="flex grow p-4 lg:p-6 xl:p-8">
      <div className="mx-auto my-auto flex w-full max-w-lg flex-col gap-6 rounded-2xl p-6 dark:bg-grey-800">
        <h1 className="text-center font-title text-4xl font-extrabold dark:text-white">
          {t('title')}
        </h1>
        <SignInForm />
        <p className="text-center text-sm">
          {t('signUp.intro')}{' '}
          <Link href="/sign-up" className="text-green underline">
            {t('signUp.link')}
          </Link>
        </p>
      </div>
    </div>
  )
}
