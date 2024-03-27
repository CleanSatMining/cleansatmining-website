import Highlighter, { HighlighterItem } from "./highlighter";
import Image from "next/image";
import FeatureImg01 from "@/public/images/features-02.png";
import FeatureImg02 from "@/public/images/feature-image-02.png";
import PathDown from "@/public/images/path/path-down.svg";

const steps = [
  {
    title: "Sélectionnez une offre en cours",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbi aliquet tincidunt mattis ultrices tempus.",
    image: FeatureImg01,
  },
  {
    title: "Investissez à partir du montant d’entrée",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbi aliquet tincidunt mattis ultrices tempus.",
    image: FeatureImg01,
  },
  {
    title: "Recevez vos Bitcoins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbi aliquet tincidunt mattis ultrices tempus.",
    image: FeatureImg01,
  },
  {
    title: "Revendez !",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbi aliquet tincidunt mattis ultrices tempus.",
    image: FeatureImg01,
  },
];

export default function FeaturesHow() {
  return (
    <section className="relative">
      {/* Transition */}
      <div
        className="flex justify-center items-center w-full "
        data-aos="fade-up"
      >
        <Image
          src={PathDown}
          className="xs:w-[100px]"
          priority
          alt="path Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2
              className="mb-4 h2 font-title text-green uppercase"
              data-aos="fade-up"
            >
              Investir dans le minage green du Bitcoin
            </h2>
            <p
              className="text-xl text-grey-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Découvrez l’investissement durable dans le minage vert du Bitcoin
              en suivant ces quatre étapes. Plongez dans une opportunité éthique
              et prometteuse, guidée par notre engagement envers l'innovation et
              la durabilité.
            </p>
          </div>

          {/* Items */}
          <div
            className={`max-w-sm mx-auto grid gap-8 md:grid-cols-${steps.length} lg:gap-16 items-start md:max-w-none`}
          >
            {steps.map((step, index) => (
              <div
                className="relative flex flex-col items-center flex-grow h-full"
                data-aos="fade-up"
                key={index + step.title}
              >
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute h-1 border-t border-dashed border-grey-400 hidden md:block"
                    style={{
                      width: "calc(100% - 32px)",
                      left: "calc(50% + 48px)",
                      top: "32px",
                    }}
                    data-aos="fade-in"
                    data-aos-delay="200"
                  ></div>
                )}
                <svg
                  className="w-16 h-16 mb-4"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-brand-400"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <path
                    className="stroke-current text-brand-100"
                    strokeWidth="2"
                    strokeLinecap="square"
                    d="M21 23h22v18H21z"
                    fill="none"
                    fillRule="evenodd"
                  />
                  <path
                    className="stroke-current text-brand-100"
                    d="M26 28h12M26 32h12M26 36h5"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>

                <Highlighter className="grid md:grid-cols-12 gap-6 group flex-grow">
                  {/* Box #1 */}
                  <div className="md:col-span-12" data-aos="fade-down">
                    <HighlighterItem>
                      <div className="relative h-full bg-grey-600 rounded-[inherit] z-20 overflow-hidden flex-grow">
                        <div className="flex flex-col h-full">
                          {/* Radial gradient */}
                          <div
                            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square flex-grow"
                            aria-hidden="true"
                          >
                            <div className="absolute inset-0 translate-z-0 bg-grey-600 rounded-full blur-[80px] flex-grow" />
                          </div>
                          {/* Text */}
                          <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 flex-grow">
                            <div>
                              <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-grey-100/60 via-grey-100 to-grey-100/60 pb-1 flex-grow">
                                <span>{index + 1}</span>. {step.title}
                              </h3>
                              <p className="text-grey-300 font-light">
                                {step.description}
                              </p>
                            </div>
                          </div>
                          {/* Image */}
                          <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                            <Image
                              className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                              src={FeatureImg02}
                              width={536}
                              height={230}
                              alt="Feature 02"
                            />
                          </div>
                        </div>
                      </div>
                    </HighlighterItem>
                  </div>
                </Highlighter>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
