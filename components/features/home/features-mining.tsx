"use client";

import { Transition } from "@headlessui/react";
import PathRightToLeft from "@/public/images/path/path-down-right-to-left.svg";
import Image from "next/image";
//import FeaturesImage from "@/public/images/icons/btc-anim.webm";

interface FeaturesMiningProps {
  withTransition?: boolean;
}

export default function FeaturesMining({
  withTransition = true,
}: FeaturesMiningProps) {
  return (
    <section className="relative">
      {/* Transition */}
      {withTransition && (
        <div
          className="flex justify-center items-center w-full mt-5 md:mt-10 min-h-[50px] sm:min-h-[100px]"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <Image
            src={PathRightToLeft}
            className="hidden md:block"
            priority
            alt="path Illustration"
          />
        </div>
      )}
      {/* Bg illustration */}
      {/*   <div
        className="absolute top-0 left-1/2 -z-10 ml-[390px]"
        aria-hidden="true"
      >
        <Image src={Illustration} className="max-w-none" alt="Illustration" />
      </div> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div
              className="z-10 md:w-7/12 lg:w-1/2 order-1 md:order-none"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="text-center md:text-left">
                <h2 className="h3 font-title text-xl sm:text-4xl mb-4 text-green uppercase">
                  N'importe quel investisseur peut participer à l'industrie du
                  minage Bitcoin.
                </h2>
                <p className="text-sm sm:text-xl text-grey-100 mb-6">
                  Pour la toute première fois, et grâce à un système d'actions
                  tokenisées parfaitement conformes au cadre réglementaire
                  Suisse.
                </p>
                <p className="text-sm sm:text-xl text-grey-100 mb-6">
                  En possédant des CSM tokens, vous êtes légalement propriétaire
                  d'une part d'une société Suisse détenant des ASICs en
                  exploitation sur un site bien particulier !
                </p>
                {/* <ul className="inline-flex flex-col text-sm sm:text-lg text-grey-100 space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Performance reviews</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Objectives and goal setting</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Manager check-ins</span>
                  </li>
                </ul> */}
              </div>
            </div>
            {/* Image */}

            <div
              className="md:w-5/12 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative py-24 -mt-12">
                <div className="flex items-center justify-center">
                  <div className="relative flex justify-center items-center">
                    {/* Halo effect */}
                    {/*   <svg
                      className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
                      width="480"
                      height="480"
                      viewBox="0 0 480 480"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="pulse-a"
                          x1="50%"
                          x2="50%"
                          y1="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FFF500" />
                          <stop offset="76.382%" stopColor="#FAF5FF" />
                          <stop offset="100%" stopColor="#B5CD30" />
                        </linearGradient>
                      </defs>
                      <g fillRule="evenodd">
                        <path
                          className="pulse"
                          fill="url(#pulse-a)"
                          fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                        />
                        <path
                          className="pulse pulse-1"
                          fill="url(#pulse-a)"
                          fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                        />
                        <path
                          className="pulse pulse-2"
                          fill="url(#pulse-a)"
                          fillRule="evenodd"
                          d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
                        />
                      </g>
                    </svg> */}
                    {/* Grid */}
                    {/*  <div className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                      <div className="h-[200%] animate-endless">
                        <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                        <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.brand.500)_48px,_theme(colors.brand.500)_49px)]" />
                        <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                        <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.brand.500)_48px,_theme(colors.brand.500)_49px)]" />
                      </div>
                    </div> */}
                    {/* Icons */}

                    <div
                      className="relative flex items-center justify-center inset-0"
                      style={{
                        boxShadow: "0 0 200px 200px #333333",
                      }}
                    >
                      {/*      <Image
                        className="w-[200px] max-w-none sm:w-[350px]"
                        src={"/images/icons/btc-anim.webm"}
                        width={500}
                        height={400}
                        alt="Features"
                      /> */}
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="inset-0 w-[400px] max-w-none sm:w-[700px]"
                      >
                        <source
                          src="/images/icons/btc-anim.webm"
                          type="video/webm"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
