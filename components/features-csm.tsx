"use client";

import "@/app/css/text.css";

export default function FeaturesCSM() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-0 md:py-0">
          {/* Section content */}
          <div className="pt-8 pb-8 md:pt-16 md:pb-4">
            {/* Content */}

            <div className="max-w-3xl mx-auto text-center">
              {/* <h2
                className="mb-4 h2 font-title text-green uppercase text-xl sm:text-4xl"
                data-aos="fade-up"
              >
                Investir dans le minage green du Bitcoin 
              </h2>*/}
              <p
                className="text-lg sm:text-2xl text-grey-200"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Mais, c'est bien plus qu'un banal investissement.{" "}
                <span className="font-bold text-white whitespace-nowrap">
                  CleanSat Mining,
                </span>{" "}
                c'est une aventure!
              </p>
              <br></br>
              <p
                className="text-lg sm:text-2xl text-grey-200"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Faites partie d'une révolution{" "}
                <span className="font-bold text-green whitespace-nowrap">
                  technologique,
                </span>{" "}
                <span className="gradient-text font-bold text-green whitespace-nowrap">
                  écologique,
                </span>{" "}
                et{" "}
                <span className="gradient-text-orange font-bold text-green whitespace-nowrap">
                  monetaire!
                </span>
              </p>
            </div>
            {/* Image */}
            {/* <div
              className="md:w-5/12 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative py-24 -mt-12">
                <div className="flex items-center justify-center">
                  <div className="relative w-24 h-24 flex justify-center items-center">
                    <Image
                      src={FeaturesImage}
                      className="w-full"
                      alt="Illustration"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
