import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import SignUpForm from './components/SignUpForm'

export default function SignUpPage() {
  const t = useTranslations('SignUpPage')
  return (
    <div className="p-4 lg:p-6 xl:p-8">
      <div className="mx-auto my-auto flex w-full max-w-lg flex-col gap-6 rounded-2xl p-6 dark:bg-grey-800">
        <h1 className="text-center font-title text-4xl font-extrabold dark:text-white">
          {t('title')}
        </h1>
        <SignUpForm />
        <p className="text-center text-sm">
          {t('signIn.intro')}{' '}
          <Link href="/sign-in" className="text-green underline">
            {t('signIn.link')}
          </Link>
        </p>
      </div>
    </div>
  )
}
