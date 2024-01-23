import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { HeroSection } from '../HeroSection'
import styles from './Hero.module.css'

export function Hero() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div className="font-cairo relative flex w-full flex-col items-center gap-4 bg-cover bg-no-repeat pl-4 pr-4 text-center bg-blend-normal sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32">
      <Image
        src="https://file.rendit.io/n/rqTURJwtAXKSXb0R0kdq.svg"
        alt="Frame7"
        className={`${styles['moveThreePoints']}  absolute left-[300px] top-24 h-16 w-16 origin-top-right rotate-[30deg] sm:left-[500px] md:left-[700px] lg:left-[1100px]`}
        width={100}
        height={100}
      />
      <Image
        src="https://file.rendit.io/n/mcAegHPTd9QJNJDJyiKj.svg"
        alt="Frame8"
        className={`${styles['moveThreePointsReverse']} absolute left-[350px] top-[450px] h-8 w-8 origin-top-left rotate-[-45deg] sm:left-[500px] md:left-[700px] lg:left-[1100px]`}
        width={100}
        height={100}
      />

      <div className="relative flex w-full flex-col items-start gap-4 ">
        <div className="flex w-full flex-col items-start gap-1 sm:w-3/4 md:w-2/3 lg:w-5/6">
          <div className="flex w-full flex-row items-start justify-between sm:w-3/4 md:w-2/3 lg:w-4/5">
            <Image
              src="https://file.rendit.io/n/ZiSsl30eXwFjFpT9bV79.svg"
              alt="Frame9"
              className={`${styles['moveThreePointsDelay']} mt-24 w-8`}
              width={100}
              height={100}
            />
            <Image
              src="https://file.rendit.io/n/Az9MX40AmB6yaq02mW1q.svg"
              alt="Frame6"
              className={`${styles['moveThreePointsCross']} mb-8  w-24`}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <HeroSection />

      <div className="relative flex w-full flex-row items-start justify-between">
        <Image
          src="https://file.rendit.io/n/IiB6Ifbqs6WethTgaZxB.svg"
          alt="Frame5"
          className={`${styles['moveThreePointsCrossReverse']} w-20`}
          width={100}
          height={100}
        />
      </div>
      <div className="h-[411px] w-full rounded-full bg-green blur-[70px]" />
    </div>
  )
}
