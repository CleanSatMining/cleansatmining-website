import Link from "next/link";
import Image from "next/image";
import PageHero from "@/public/images/map.svg";
import Stats from "@/components/stats-facilities";

export function Herofacilities1() {
  return (
    <>
      <section className="relative">
        {/* Dark background */}
        <div
          className="absolute inset-0 bg-grey-900 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <div className="w-full h-full" data-aos="fade">
            <Image
              className="opacity-10 w-full h-full object-cover"
              src={PageHero}
              width={1440}
              height={497}
              alt="Hero"
            />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-28 md:pt-40 md:pb-36">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-center">
                <Link
                  className="inline-flex font-semibold text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out group mb-2"
                  href="/wall-of-love"
                  data-aos="fade-down"
                >
                  <span className="tracking-normal text-blue-600 group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">
                    &lt;-
                  </span>{" "}
                  Back to Wall of Love
                </Link>
                <h1 className="h2 font-playfair-display text-grey-100 mb-4">
                  How Black Inc. Increased team collboration with Tidy
                </h1>
              </div>
              <div className="text-grey-400" data-aos="fade-up">
                4 min read <span className="text-grey-600">·</span> Sep 24, 2021
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
    </>
  );
}

export default function Herofacilities() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          src={PageHero}
          width={1440}
          height={577}
          priority
          alt="Testimonials"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-white dark:from-grey-700"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 min-h-[500px]">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="h1 font-red-hat-display mb-4" data-aos="fade-down">
              Nos sites CSM
            </h1>
            <p
              className="text-xl text-grey-600 dark:text-grey-300"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              Our customers are building some of the world's most original,
              useful and loved products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
