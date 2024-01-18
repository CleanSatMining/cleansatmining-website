import Button from '@/app/_shared/_components/_utils/_buttons/Button'
import { Input } from '@nextui-org/input'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function KeepInformed() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div
      id="MailSectionRoot"
      className=" font-poppins  flex  w-full flex-col items-start gap-12 bg-grey-600 pb-[106px] pt-[56px]"
    >
      <div className="flex w-full flex-col items-center gap-5">
        <div className="font-cairo  text-3xl font-bold leading-[38.4px] text-white">
          Restez informés de l’actualité CSM
        </div>
        <div className="text-center leading-[19.2px] text-white">
          {"Nous vous enverrons un mail lorsqu'un nouveau site est disponible."}
        </div>
        <div className="flex flex-row items-center gap-2">
          <Input
            classNames={{
              label: 'text-white',
              input: [
                'text-white',
                'placeholder:text-white/60 font-poppins text-base font-light leading-[19.2px]',
              ],
              inputWrapper: [' border border-solid border-grey-400 w-[400px]'],
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
            className="m-2 h-[48px] min-w-[200px] max-w-[250px] text-sm"
            style={{ cursor: 'pointer' }}
          >
            {'Rester informé'}
          </Button>
        </div>
      </div>
    </div>
  )
}
