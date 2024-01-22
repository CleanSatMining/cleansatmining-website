import { Status } from '@/app/_shared/_components/_site/Status'
import { SiteData } from '@/app/_shared/_components/_site/Types'
import Button from '@/app/_shared/_components/_utils/_buttons/Button'
import Image from 'next/image'

interface Props {
  data: SiteData
}

export const Site = ({ data }: Props): JSX.Element => {
  return (
    <div className="bg-secondarysecondary-25 border-secondarysecondary-50 relative flex flex-col items-start rounded-[24px] border border-solid px-0 py-[36px]">
      <div className="relative flex w-full flex-[0_0_auto] items-center self-stretch px-[36px] py-0">
        <div className="relative flex flex-1 grow items-start gap-[12px]">
          <div className="relative flex flex-1 grow flex-col items-start gap-[12px]">
            <div className="relative inline-flex flex-[0_0_auto] items-start gap-[10px]">
              <div className="text-secondarysecondary-300 relative mt-[-1.00px] w-fit whitespace-nowrap text-[14px] font-normal leading-[16.8px] tracking-[0] [font-family:'Poppins-Regular',Helvetica]">
                Statut
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[8px] self-stretch">
              <Status status={data.status} statusCode={data.statusCode} />
            </div>
          </div>
        </div>
        <div className="relative flex w-[89px] flex-col items-start gap-[12px]">
          <p className="text-secondarysecondary-300 relative mt-[-1.00px] w-fit whitespace-nowrap text-[14px] font-normal leading-[16.8px] tracking-[0] [font-family:'Poppins-Regular',Helvetica]">
            <span className="text-[#333333]">énergie</span>
          </p>
          <div className="relative inline-flex flex-[0_0_auto] items-start gap-[8px]">
            <Image
              src="/assets/icons/icon_drop.svg"
              alt="Icon Drop"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/icon_sun.svg"
              alt="Icon Drop"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="relative flex flex-1 grow items-start gap-[12px] py-0 pl-[16px] pr-0">
          <div className="relative flex flex-1 grow flex-col items-start gap-[12px]">
            <div className="relative inline-flex flex-[0_0_auto] items-start gap-[10px]">
              <div className="text-secondarysecondary-300 relative mt-[-1.00px] w-fit whitespace-nowrap text-[14px] font-normal leading-[16.8px] tracking-[0] [font-family:'Poppins-Regular',Helvetica]">
                Puissance
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[8px] self-stretch">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[12px] self-stretch">
                <div className="text-secondarysecondary-500 font-texte-m-semibold relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--texte-m-semibold-font-size)] font-[number:var(--texte-m-semibold-font-weight)] leading-[var(--texte-m-semibold-line-height)] tracking-[var(--texte-m-semibold-letter-spacing)] [font-style:var(--texte-m-semibold-font-style)]">
                  175 MW
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 grow flex-col items-start gap-[12px]">
          <div className="relative mr-[-177.00px] flex w-[347px] flex-[0_0_auto] items-start gap-[10px]">
            <div className="relative inline-flex flex-[0_0_auto] items-start gap-[10px]">
              <div className="text-secondarysecondary-300 relative mt-[-1.00px] w-fit whitespace-nowrap text-[14px] font-normal leading-[16.8px] tracking-[0] [font-family:'Poppins-Regular',Helvetica]">
                Machine
              </div>
            </div>
          </div>
          <div className="relative mr-[-177.00px] inline-flex flex-[0_0_auto] flex-col items-center gap-[8px]">
            <div className="relative flex w-[347px] flex-[0_0_auto] items-center gap-[12px]">
              <div className="text-secondarysecondary-500 font-texte-m-semibold relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--texte-m-semibold-font-size)] font-[number:var(--texte-m-semibold-font-weight)] leading-[var(--texte-m-semibold-line-height)] tracking-[var(--texte-m-semibold-letter-spacing)] [font-style:var(--texte-m-semibold-font-style)]">
                375 M30S++
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 grow items-start gap-[12px]">
          <div className="relative flex flex-1 grow flex-col items-start gap-[12px]">
            <div className="relative inline-flex flex-[0_0_auto] items-start gap-[10px]">
              <div className="text-secondarysecondary-300 relative mt-[-1.00px] w-fit whitespace-nowrap text-[14px] font-normal leading-[16.8px] tracking-[0] [font-family:'Poppins-Regular',Helvetica]">
                Capacité
              </div>
            </div>
            <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[8px] self-stretch">
              <div className="relative flex w-full flex-[0_0_auto] flex-col items-start gap-[12px] self-stretch">
                <div className="text-secondarysecondary-500 font-texte-m-semibold relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--texte-m-semibold-font-size)] font-[number:var(--texte-m-semibold-font-weight)] leading-[var(--texte-m-semibold-line-height)] tracking-[var(--texte-m-semibold-letter-spacing)] [font-style:var(--texte-m-semibold-font-style)]">
                  10TH, 1300W
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          data-testid="submitAddToCartForm"
          type="submit"
          className="m-2 max-w-[200px] bg-blue lg:w-1/2 lg:min-w-[100px]"
          theme="dark"
        >
          {"Plus d'informations"}
        </Button>
      </div>
    </div>
  )
}
