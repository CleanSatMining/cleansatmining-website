"use client";

import { useEffect } from "react";
import Image from "next/image";

import Blur from "@/public/images/blur-brand.svg";

import { IconMapPin, IconPointFilled } from "@tabler/icons-react";

import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "@/app/css/image.css";
import "swiper/css";
Swiper.use([Autoplay, Navigation]);

const facilities = [
  {
    title: "CleanSat Mining Alpha",
    location: "Parc des Virunga, RDC",
    status: "Operationel",
    image: "images/facilities/csm-alpha.jpg",
  },
  {
    title: "CleanSat Mining Beta",
    location: "Barrage d'Itaipu, Paraguay",
    status: "Operationel",
    image: "images/facilities/csm-beta.jpg",
  },
  {
    title: "CleanSat Mining Omega",
    location: "Carélie du Sud, Finlande",
    status: "Operationel",
    image: "images/facilities/csm-omega.jpg",
  },
  {
    title: "CleanSat Mining Gamma",
    location: "Åsele, Suède",
    status: "Operationel",
    image: "images/facilities/csm-gamma.jpg",
  },
  {
    title: "CleanSat Mining Delta",
    location: "Oregon, USA",
    status: "Operationel",
    image: "images/facilities/csm-delta.jpg",
  },
];

export default function Features() {
  useEffect(() => {
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Blur}
          className="max-w-none"
          width="1440"
          height="440"
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl   pb-12 md:pb-20">
            <h2 className="h2 font-title text-green uppercase">
              Nos sites CSM
            </h2>
            <div className="max-w-2xl ">
              <p className="text-xl text-grey-200">
                Explorez nos sites de minage, leurs avantages pour vos
                investissements et vos opportunités.
              </p>
            </div>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="swiper-slide h-auto flex flex-col bg-grey-800 p-6 rounded"
                  style={{
                    backgroundImage: `linear-gradient(220deg, rgba(54, 61, 13, 0) 0, rgba(54, 61, 13, .7) 80%), url(${facility.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="grow pt-40">
                    <div className="font-hkgrotesk font-bold text-xl">
                      {facility.title}
                    </div>
                    <div className="flex items-center">
                      <IconMapPin width={16} className="mr-1 mb-3" />
                      <div className="text-white font-light mb-3 text-xs">
                        {facility.location}
                      </div>
                      <IconPointFilled
                        width={16}
                        className="ml-2 mr-1 mb-3"
                        color="#71DA80"
                      />
                      <div className="text-white font-light mb-3 text-xs">
                        {facility.status}
                      </div>
                    </div>
                  </div>

                  <div className="text-right w-[200px]">
                    <a
                      className="btnRound text-white bg-gradient-to-r from-grey-900/80 via-grey-900 to-grey-900/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                      href="#0"
                    >
                      Plus d'informations{" "}
                      <span className="tracking-normal text-green group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-grey-700 bg-grey-800 hover:bg-grey-700 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-grey-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-grey-700 bg-grey-800 hover:bg-grey-700 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-grey-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
