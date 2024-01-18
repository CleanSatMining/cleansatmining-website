import { Avatar } from '@nextui-org/avatar'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface Props {
  icon: string
  step: string
  alt: string
  title: string
  text: string
}

export function StepCard({
  icon = 'win',
  step = '1',
  alt = 'icon',
  title = 'Label',
  text = 'text',
}: Props): JSX.Element {
  // eslint-disable-line
  const t = useTranslations('HomePage.signedOut')

  return (
    <div
      id="IconInfos"
      className="bg-50%_50% flex h-full w-full flex-col items-start gap-5 rounded-[24px] border border-solid border-white/90 bg-grey-600 bg-[linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95))] bg-cover bg-no-repeat px-3 pb-8 bg-blend-normal"
    >
      <div className="flex w-full items-center justify-center">
        <div
          id="Step"
          className="flex h-6 w-24 flex-row justify-center rounded-bl-[24px] rounded-br-[24px] bg-grey-600 pt-1 text-center text-sm font-semibold uppercase leading-[16.8px] text-white"
        >
          {step}
        </div>
      </div>
      <div className="font-poppins ml-5 flex w-full flex-col items-start gap-3">
        <Avatar
          className="h-16 w-16"
          isBordered
          color="primary"
          icon={<Image src={icon} alt={alt} width={40} height={40} />}
        />
      </div>
      <div className="ml-5 w-5/6 text-2xl font-bold leading-[28.8px] text-grey-600">
        {title}
      </div>
      <div className="font-poppins ml-5 w-5/6 text-sm leading-[21px] text-grey-600">
        {text}
      </div>
    </div>
  )
}
