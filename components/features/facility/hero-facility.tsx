import Link from "next/link";
import Image from "next/image";
import TypingAnimation from "@/components/ui/animations/typing-animation";

export default function Facility() {
  const imageHero = "/images/facilities/csm-alpha.jpg";
  const flag =
    "http://purecatamphetamine.github.io/country-flag-icons/3x2/" +
    "CD" +
    ".svg";

  return (
    <>
      {/* Featured post */}
      <section className="relative">
        {/* Background image */}
        {imageHero && (
          <div className="absolute inset-0 h-228 pt-16 box-content -z-1 -mt-[100px]">
            <Image
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              src={imageHero}
              width={1440}
              height={577}
              priority
              alt={"featuredPost.title"}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-grey-600"
              aria-hidden="true"
            ></div>
          </div>
        )}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-16">
            {/* Featured article */}
            <div className="" data-aos="fade-down">
              <article>
                <header>
                  {/* Title and excerpt */}
                  <div className="text-center">
                    <Link href={`/facilities/${"alpha"}`}>
                      <h1 className="h1 font-red-hat-display mb-4">
                        CSM ALPHA
                      </h1>
                    </Link>
                    <div className="flex items-center justify-center">
                      <a href="#0">
                        <Image
                          className="rounded-full shrink-0 mr-3"
                          src={flag}
                          width={32}
                          height={32}
                          alt={"featuredPost.author"}
                        />
                      </a>
                      <p className="text-xl text-grey-300">
                        Parc des Virunga, RDC
                      </p>
                    </div>
                  </div>
                  {/* Article meta */}
                  <div className="mt-5">
                    {/* Author meta */}
                    <div className="flex items-center justify-center">
                      <div>
                        <a
                          className="font-medium text-grey-200 hover:underline"
                          href="#0"
                        >
                          <TypingAnimation
                            phrase1={
                              "Site classé au patrimoine mondial de l'UNESCO."
                            }
                            phrase2={
                              '"Le minage de Bitcoin est une solution extraordinaire dans un endroit étonnant" (E. de Merode).'
                            }
                          ></TypingAnimation>
                        </a>
                        <span className="text-grey-400"> · </span>
                      </div>
                    </div>
                  </div>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
