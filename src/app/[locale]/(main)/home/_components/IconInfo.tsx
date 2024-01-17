import { Avatar } from '@nextui-org/avatar'
import Image from 'next/image'

interface Props {
  icon: string
  text: string
  alt: string
}

export const IconInfo = ({
  icon = 'win',
  text = 'Label',
  alt = 'icon',
}: Props): JSX.Element => {
  return (
    <div
      id="IconInfos"
      className="bg-50%_50% flex h-full w-full flex-col items-start justify-start gap-5 rounded-[24px] border border-solid border-white/90 bg-[#333333] bg-[linear-gradient(rgba(255,_255,_255,_0.95),_rgba(255,_255,_255,_0.95))] bg-cover bg-no-repeat px-8 pb-2 pt-8 bg-blend-normal"
    >
      <Avatar
        className="h-16 w-16"
        isBordered
        color="secondary"
        icon={<Image src={icon} alt={alt} width={40} height={40} />}
      />
      <div
        id="Label"
        className="w-full text-2xl font-bold leading-[28.8px] text-grey-600"
      >
        {text}
      </div>
    </div>
  )
}
