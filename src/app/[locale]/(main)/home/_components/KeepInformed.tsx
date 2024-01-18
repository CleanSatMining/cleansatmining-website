import Button from '@/app/_shared/_components/_utils/_buttons/Button'
import { Input } from '@nextui-org/input'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function KeepInformed() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div
      id="MailSectionRoot"
      className="font-poppins flex w-full flex-col items-start gap-12 bg-grey-600 px-4 pb-8 pt-8 sm:pb-[106px] sm:pt-[56px]"
    >
      <div className="flex w-full flex-col items-center gap-5">
        <div className="font-cairo text-2xl font-bold leading-[38.4px] text-white sm:text-3xl ">
          Restez informés de l’actualité CSM
        </div>
        <div className="text-center leading-[19.2px] text-white">
          {"Nous vous enverrons un mail lorsqu'un nouveau site est disponible."}
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Input
            classNames={{
              label: 'text-white',
              input: [
                'text-white',
                'placeholder:text-white/60 font-poppins text-base font-light leading-[19.2px]',
              ],
              inputWrapper: [
                'border border-solid border-grey-400 w-full sm:w-[400px]',
              ],
            }}
            radius="lg"
            variant="bordered"
            size="sm"
            placeholder="Votre email"
            startContent={
              <Image
                src="https://file.rendit.io/n/HYS6Wg48uf7JVvjzIGAK.svg"
                alt="EnvelopeSimple"
                id="EnvelopeSimple"
                className="w-6"
                width={24}
                height={24}
              />
            }
            type="email"
            color="secondary"
          />
          <Button
            data-testid="submitAddToCartForm"
            type="submit"
            theme="white"
            className="m-2 h-[48px] w-full text-sm sm:min-w-[200px] sm:max-w-[250px]"
            style={{ cursor: 'pointer' }}
          >
            {'Rester informé'}
          </Button>
        </div>
      </div>
    </div>
  )
}
