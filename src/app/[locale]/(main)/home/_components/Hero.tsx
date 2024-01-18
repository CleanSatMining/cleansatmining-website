import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Title } from './Title'

export function Hero() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div className="bg-50%_50% font-cairo relative flex w-full flex-col items-start items-center  gap-4 bg-cover bg-no-repeat  px-32 text-center bg-blend-normal">
      <Image
        src="https://file.rendit.io/n/rqTURJwtAXKSXb0R0kdq.svg"
        alt="Frame7"
        className="absolute left-[1299.078125px] top-24 h-16 w-16 origin-top-left rotate-[30deg]"
        width={100}
        height={100}
      />
      <Image
        src="https://file.rendit.io/n/mcAegHPTd9QJNJDJyiKj.svg"
        alt="Frame8"
        className="absolute left-[1179.2890625px] top-[535px] h-8 w-8 origin-top-left rotate-[-45deg]"
        width={100}
        height={100}
      />

      <div className="relative flex w-5/6 flex-col items-start gap-4">
        <div className="flex w-5/6 flex-col items-start gap-1">
          <div className="flex w-4/5 flex-row items-start justify-between">
            <Image
              src="https://file.rendit.io/n/ZiSsl30eXwFjFpT9bV79.svg"
              alt="Frame9"
              className="mt-24 w-8"
              width={100}
              height={100}
            />
            <Image
              src="https://file.rendit.io/n/Az9MX40AmB6yaq02mW1q.svg"
              alt="Frame6"
              className="mb-8 w-24"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <Title />

      <div className="relative flex w-2/3 flex-row items-start justify-between">
        <Image
          src="https://file.rendit.io/n/IiB6Ifbqs6WethTgaZxB.svg"
          alt="Frame5"
          className="w-20"
          width={100}
          height={100}
        />
        <div className="font-poppins flex w-2/3 flex-col items-start">
          <Image
            src="https://file.rendit.io/n/bolBqL8SeimxYdpzJCz9.svg"
            alt="ArrowRight"
            id="ArrowRight"
            className="w-5"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="h-[411px] w-full rounded-full bg-[#b5cd30] blur-[70px]" />
    </div>
  )
}
