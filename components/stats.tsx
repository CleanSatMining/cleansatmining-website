import Image from "next/image";
import Mining from "@/public/images/mining.svg";
import Uptime from "@/public/images/uptime.svg";
import Hashrate from "@/public/images/power.svg";
import Site from "@/public/images/site.svg";
import Funds from "@/public/images/funds.svg";

export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 border-b border-grey-400">
          {/* Items */}
          <div className="max-w-sm md:max-w-5xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
            {/* 1st item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
            >
              <div
                className="flex flex-col items-center"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="300"
              >
                <div className="mb-4">
                  <Image
                    src={Mining}
                    width={56}
                    height={56}
                    className=""
                    priority
                    alt="Mining Illustration"
                  />
                </div>
                <h4 className="h4 text-green text-center">25 BTC</h4>
                <p className="text-sm text-grey-200 text-center">
                  Bitcoin minés
                </p>
              </div>
            </div>
            {/* 2nd item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <div
                className="flex flex-col items-center"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="300"
              >
                <div className="mb-4">
                  <Image
                    src={Funds}
                    width={82}
                    height={82}
                    className=""
                    priority
                    alt="Funds Illustration"
                  />
                </div>
                <h4 className="h4 text-green text-center">$3,600,000</h4>
                <p className="text-sm text-grey-200 text-center">
                  Levés en USD
                </p>
              </div>
            </div>
            {/* 3rd item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div
                className="flex flex-col items-center"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="300"
              >
                <div className="mb-4">
                  <Image
                    src={Hashrate}
                    width={78}
                    height={78}
                    className=""
                    priority
                    alt="Hashrate Illustration"
                  />
                </div>
                <h4 className="h4 text-green text-center">19.2 EH/s</h4>
                <p className="text-sm text-grey-200 text-center">
                  Hashrate opérationnel
                </p>
              </div>
            </div>
            {/* 4th item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div
                className="flex flex-col items-center"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="300"
              >
                <div className="mb-4">
                  <Image
                    src={Site}
                    width={44}
                    height={44}
                    className=""
                    priority
                    alt="Site Illustration"
                  />
                </div>
                <h4 className="h4 text-green text-center">8</h4>
                <p className="text-sm text-grey-200 text-center">
                  Site de minage actifs
                </p>
              </div>
            </div>
            {/* 5th item */}
            <div
              className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <div
                className="flex flex-col items-center"
                data-aos="fade-down"
                data-aos-anchor="[data-aos-id-stats]"
                data-aos-delay="300"
              >
                <div className="mb-4">
                  <Image
                    src={Uptime}
                    width={32}
                    height={32}
                    className=""
                    priority
                    alt="Uptime Illustration"
                  />
                </div>
                <h4 className="h4 text-green text-center">75%</h4>
                <p className="text-sm text-grey-200 text-center">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
