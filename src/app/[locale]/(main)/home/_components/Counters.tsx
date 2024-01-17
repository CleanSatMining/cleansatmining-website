import { Avatar } from '@nextui-org/avatar'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Counters() {
  const t = useTranslations('HomePage.signedOut')

  return (
    <div
      id="CompteurRoot"
      className="bg-50%_50% relative mt-[-300]  grid w-full grid-cols-4 items-start bg-[#efefef] bg-no-repeat px-12 pt-16 bg-blend-normal"
      style={{
        marginTop: '-400px',
        columnGap: '5%',
        height: '190px',
        paddingLeft: '10%',
        paddingRight: '10%',
      }}
    >
      <div className="flex gap-3">
        <div className="flex flex-col items-start">
          <Avatar
            className="h-16 w-16"
            isBordered
            color="primary"
            icon={
              <Image
                src="https://file.rendit.io/n/lyHOX1EN5Kj1w7khM7ie.svg"
                alt="Wallet"
                width={40}
                height={40}
              />
            }
          />
        </div>
        <div className="mt-1 flex w-2/3 flex-col items-start gap-2">
          <div id="Label" className="text-lg leading-[19.2px] text-grey-600">
            Puissance installée
          </div>
          <div
            id="Donne"
            className="text-3xl font-semibold leading-[33.6px] text-grey-600"
          >
            175 MW
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col items-start">
          <Avatar
            className="h-16 w-16"
            isBordered
            color="primary"
            icon={
              <Image
                src="https://file.rendit.io/n/P8B1XDAPmC9ygG5HQ6Vr.svg"
                alt="Wallet"
                width={50}
                height={50}
              />
            }
          />
        </div>
        <div className="mt-1 flex w-20 flex-col items-start gap-2 ">
          <div id="Label1" className="text-lg leading-[19.2px] text-grey-600">
            ASICs
          </div>
          <div
            id="Donne1"
            className="text-3xl font-semibold leading-[33.6px] text-grey-600"
          >
            5,603
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col items-start">
          <Avatar
            className="h-16 w-16"
            isBordered
            color="primary"
            icon={
              <Image
                src="https://file.rendit.io/n/PiAcMkg9chGoGinT8rxl.svg"
                alt="Wallet"
                width={50}
                height={50}
              />
            }
          />
        </div>
        <div className="mt-1 flex w-3/5 flex-col items-start gap-2 ">
          <div id="Label2" className="text-lg leading-[19.2px] text-grey-600">
            Bitcoins minés
          </div>
          <div
            id="Donne2"
            className="text-3xl font-semibold leading-[33.6px] text-grey-600"
          >
            5,603 BTC
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col items-start">
          <Avatar
            className="h-16 w-16"
            isBordered
            color="primary"
            icon={
              <Image
                src="https://file.rendit.io/n/Gco8krCyr26z5nf30s9X.svg"
                alt="Wallet"
                width={50}
                height={50}
              />
            }
          />
        </div>
        <div className="mt-1 flex w-3/5 flex-col items-start gap-2 ">
          <div id="Label3" className="text-lg leading-[19.2px] text-grey-600">
            Revenus
          </div>
          <div
            id="Donne3"
            className="text-3xl font-semibold leading-[33.6px] text-grey-600"
          >
            150,000 $
          </div>
        </div>
      </div>
    </div>
  )
}
