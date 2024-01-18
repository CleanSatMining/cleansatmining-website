import { useTranslations } from 'next-intl'
import { IconCounter } from './IconInfo'

export function Counters() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div
      id="CompteurRoot"
      className="bg-50%_50% relative mt-[-300] mt-[-400px]  grid w-full grid-cols-2 items-start gap-5 bg-grey-100 bg-no-repeat px-4 pb-[60px] pt-16 bg-blend-normal sm:px-12 lg:grid-cols-4"
      style={{
        //marginTop: '-400px',
        columnGap: '5%',
        //height: '190px',
        paddingLeft: '10%',
        paddingRight: '10%',
      }}
    >
      <IconCounter
        iconAlt="power"
        iconSrc="https://file.rendit.io/n/lyHOX1EN5Kj1w7khM7ie.svg"
        label="Puissance installée"
        value="175 MW"
      ></IconCounter>

      <IconCounter
        iconAlt="asics"
        iconSrc="https://file.rendit.io/n/P8B1XDAPmC9ygG5HQ6Vr.svg"
        label="ASICs"
        value="5,603"
      ></IconCounter>

      <IconCounter
        iconAlt="bitcoin"
        iconSrc="https://file.rendit.io/n/PiAcMkg9chGoGinT8rxl.svg"
        label="Bitcoins minés"
        value="5,603 BTC"
      ></IconCounter>

      <IconCounter
        iconAlt="income"
        iconSrc="https://file.rendit.io/n/Gco8krCyr26z5nf30s9X.svg"
        label="Revenus"
        value="150,000 $"
      ></IconCounter>
    </div>
  )
}
