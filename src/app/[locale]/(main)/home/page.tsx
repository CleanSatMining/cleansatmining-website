import { useTranslations } from 'next-intl'

export default function HomeDefault() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex flex-col items-center gap-6 py-4 text-center md:py-8 xl:py-16">
      <h1 className="font-title text-4xl font-extrabold !leading-tight lg:text-5xl xl:text-7xl">
        {t.rich('title', {
          span: (chunks) => (
            <span className="inline-block rounded-2xl bg-green px-4 text-grey-800 drop-shadow-green">
              {chunks}
            </span>
          ),
        })}
      </h1>
      <p className="text-xxl font-title lg:text-2xl xl:text-3xl">
        {t('description')}
      </p>
    </div>
  )
}
