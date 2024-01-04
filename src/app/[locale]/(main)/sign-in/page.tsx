import { useTranslations } from 'next-intl'
import Link from 'next/link'
import SignInForm from './_components/SignInForm'

export default function SignInPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const t = useTranslations('SignInPage')

  return (
    <div className="flex grow p-4 lg:p-6 xl:p-8">
      <div className="mx-auto my-auto flex w-full max-w-lg flex-col gap-6 rounded-2xl p-6 dark:bg-grey-800">
        <h1 className="text-center font-title text-4xl font-extrabold dark:text-white">
          {t('title')}
        </h1>
        <SignInForm searchParams={searchParams} />
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
