"use client";
import Link from "next/link";
import Image from "next/image";
import TypingAnimation from "@/components/ui/animations/typing-animation";
import { CleanSatMiningFacility } from "@/models/Facility";
import React from "react";
import { IconPointFilled } from "@tabler/icons-react";

interface SectionProps {
  slug: string;
  image: React.ReactNode;
  facility: CleanSatMiningFacility;
}

export default function Section({ facility, image }: SectionProps) {
  const countryCode = facility.location?.countryCode ?? undefined;
  const country = facility.location?.country ?? undefined;
  const aera = facility.location?.aera ?? undefined;
  const flag = countryCode
    ? "http://purecatamphetamine.github.io/country-flag-icons/3x2/" +
      countryCode +
      ".svg"
    : undefined;

  const location = aera && country ? aera + ", " + country : undefined;
  //const imageHero = "/images/facilities/csm-" + slug + ".jpg";

  return (
    <>
      {/* Featured post */}
      <section className="relative">
        {/* Background image */}
        {image && (
          <div className="absolute inset-0 h-228 pt-16 box-content -z-1 -mt-[100px]">
            {image}
            {/* <Image
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              src={image}
              width={1440}
              height={577}
              priority
              alt={"featuredPost.title"}
            /> */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-grey-600"
              aria-hidden="true"
            ></div>
          </div>
        )}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-10 pb-10 md:pt-[110px] md:pb-[100px]">
            {/* Featured article */}
            <div className="" data-aos="fade-down">
              <article>
                <header>
                  {/* Title and excerpt */}
                  <div className="text-center">
                    <Link href={`/facilities/${"alpha"}`}>
                      <h1 className="h1  text-2xl sm:text-4xl md:text-6xl font-red-hat-display mb-4 font-semibold">
                        {facility.name}
                      </h1>
                    </Link>
                    <div className="flex items-center justify-center">
                      {flag && (
                        <Image
                          className="rounded-full shrink-0 mr-3"
                          src={flag}
                          width={32}
                          height={32}
                          alt={"featuredPost.author"}
                        />
                      )}
                      <p className="text-md md:text-xl text-grey-300">
                        {location}
                      </p>
                      <div className="hidden sm:block">
                        <div className="flex ml-6">
                          <IconPointFilled
                            width={20}
                            className="items-center justify-center"
                            color="#71DA80"
                          />
                          <div className="text-grey-200 font-light text-md ml-1 ">
                            {facility.status}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block sm:hidden flex items-center justify-center mt-2">
                      <IconPointFilled
                        width={20}
                        className="items-center justify-center"
                        color="#71DA80"
                      />
                      <div className="text-grey-200 font-light text-sm ml-1 ">
                        {facility.status}
                      </div>
                    </div>
                  </div>

                  {/* Article meta */}
                  <div className="hidden sm:block mt-5">
                    {/* Author meta */}
                    {facility.catchPhrases.length > 1 && (
                      <div className="flex items-center justify-center">
                        <div>
                          <div className="text-md md:text-md font-medium text-grey-200 hover:underline">
                            <TypingAnimation
                              phrase1={facility.catchPhrases[0]}
                              phrase2={facility.catchPhrases[1]}
                            ></TypingAnimation>
                          </div>
                          <span className="text-grey-400"> · </span>
                        </div>
                      </div>
                    )}
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
