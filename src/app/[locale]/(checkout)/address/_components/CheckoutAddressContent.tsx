import { useTranslations } from 'next-intl'

export default function CheckoutAddressContent() {
  const t = useTranslations('CartAddressPage')

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="flex gap-1 text-sm font-semibold leading-tight">
          <span className="uppercase">{t('step1.number')}</span>
          <span className="font-normal">{t('step1.label')}</span>
        </h3>
        <div className="rounded-2xl border border-grey-400 p-4">
          Module RealT
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="flex gap-1 text-sm font-semibold leading-tight">
          <span className="uppercase">{t('step2.number')}</span>
          <span className="font-normal">{t('step2.label')}</span>
        </h3>
        <div className="px-4 py-3 font-bold text-green">
          1HQ3Go3ggs8pFnXuHVRytPCq5fGG8Hbhx
        </div>
      </div>
    </>
  )
}
