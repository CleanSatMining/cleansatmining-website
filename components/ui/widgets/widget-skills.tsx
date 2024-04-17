import {
  IconMapPin,
  IconPointFilled,
  IconWindmill,
  IconDroplet,
  IconWorldBolt,
  IconSun,
  IconBuildingFactory,
  IconBolt,
  IconBrandSpeedtest,
  IconCurrencyDollar,
} from "@tabler/icons-react";

export default function Widget() {
  return (
    <div>
      <div className="min-w-[250px] xl:min-w-[300px] rounded-lg border border-grey-200 dark:border-grey-500 dark:bg-gradient-to-t dark:from-grey-500 dark:to-grey-500/30 odd:rotate-1 even:-rotate-1 p-5">
        <div className="font-aspekta font-[650] mb-3">En bref</div>
        <ul className="space-y-3">
          <li className="flex justify-between items-center w-full">
            <div className="grid grid-cols-[3fr,4fr,2fr] w-full">
              <div className="grow inline-flex mr-1.5 truncate">
                <span className="font-aspekta font-[550] text-sm truncate text-grey-300">
                  Energie
                </span>
              </div>
              <div className="mr-1.5">
                <div className="font-aspekta font-[650] text-sm flex justify-end">
                  Hydro, Eolien
                </div>
              </div>
              <div className="flex justify-end mr-1.5">
                <div className="flex text-brand-500">
                  <IconDroplet></IconDroplet>
                  <IconWindmill></IconWindmill>
                </div>
              </div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="grid grid-cols-[3fr,4fr,2fr] w-full">
              <div className="grow inline-flex mr-1.5 truncate">
                <span className="font-aspekta font-[550] text-sm truncate text-grey-300">
                  Puissance
                </span>
              </div>
              <div className="mr-1.5 flex justify-end">
                <div className="font-aspekta font-[650] text-sm">1.8MW</div>
              </div>
              <div className="flex justify-end mr-1.5">
                <div className="flex text-brand-500">
                  <IconBolt></IconBolt>
                </div>
              </div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="grid grid-cols-[3fr,4fr,2fr] w-full">
              <div className="grow inline-flex mr-1.5 truncate">
                <span className="font-aspekta font-[550] text-sm truncate text-grey-300">
                  Hashrate
                </span>
              </div>
              <div className="mr-1.5 flex justify-end">
                <div className="font-aspekta font-[650] text-sm">60PH</div>
              </div>
              <div className="flex justify-end mr-1.5">
                <div className="flex text-brand-500">
                  <IconBrandSpeedtest></IconBrandSpeedtest>
                </div>
              </div>
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="grid grid-cols-[3fr,4fr,2fr] w-full">
              <div className="grow inline-flex mr-1.5 truncate">
                <span className="font-aspekta font-[550] text-sm truncate text-grey-300">
                  Levée
                </span>
              </div>
              <div className="mr-1.5 flex justify-end">
                <div className="font-aspekta font-[650] text-sm">1.9M$+</div>
              </div>
              <div className="flex justify-end mr-1.5">
                <div className="flex text-brand-500">
                  <IconCurrencyDollar></IconCurrencyDollar>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
