"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PathLeft from "@/public/images/path/path-down-left.svg";
import Blur from "@/public/images/blur/blur-brand.svg";
import Link from "next/link";
import {
  IconMapPin,
  IconPointFilled,
  IconWindmill,
  IconDroplet,
  IconSunElectricity,
  IconBolt,
  IconBrandSpeedtest,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "@/app/css/image.css";
import "swiper/css";

import Author01 from "@/public/logo.svg";

Swiper.use([Autoplay, Navigation]);

const facilities = [
  {
    title: "CleanSat Mining Alpha",
    location: "Parc des Virunga, RDC",
    status: "Operationel",
    image: "/images/facilities/csm-alpha.jpg",
  },
  {
    title: "CleanSat Mining Beta",
    location: "Barrage d'Itaipu, Paraguay",
    status: "Operationel",
    image: "/images/facilities/csm-beta.jpg",
  },
  {
    title: "CleanSat Mining Omega",
    location: "Carélie du Sud, Finlande",
    status: "Operationel",
    image: "/images/facilities/csm-omega.jpg",
  },
  {
    title: "CleanSat Mining Gamma",
    location: "Åsele, Suède",
    status: "Operationel",
    image: "/images/facilities/csm-gamma.jpg",
  },
  {
    title: "CleanSat Mining Delta",
    location: "Oregon, USA",
    status: "Operationel",
    image: "/images/facilities/csm-delta.jpg",
  },
];

const facilitiesToCome = [
  {
    title: "CleanSat Mining Theta",
    location: "A confirmer",
    status: "En attente",
    image: "/images/facilities/facility-to-come.jpg",
  },
  {
    title: "CleanSat Mining iota",
    location: "A confirmer",
    status: "En attente",
    image: "/images/facilities/facility-to-come.jpg",
  },
];

export default function FacilitesCarousel() {
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
      {/* Transition */}
      <div
        className="hidden md:block flex justify-center items-center w-full mt-5 md:mt-10 -mb-[110px] w-100"
        data-aos="fade-up"
        style={{ paddingLeft: "25%", paddingRight: "25%" }}
      >
        <div className="xl:px-20">
          <Image
            src={PathLeft}
            className=" w-full h-full"
            //layout="fill"
            objectFit="fill"
            alt="path Illustration"
          />
        </div>
      </div>
      {/* Bg illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none -mt-20 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Blur}
          className="max-w-none"
          width="1000"
          height="300"
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl   pb-12 md:pb-20">
            <h2 className="h2 font-title text-green uppercase text-xl sm:text-4xl">
              Nos sites CSM
            </h2>
            <div className="max-w-2xl ">
              <p className="text-md sm:text-xl text-grey-200">
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
                  key={index + facility.title}
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
                      className="btn-round text-white bg-gradient-to-r from-grey-900/80 via-grey-900 to-grey-900/80 hover:bg-white w-full transition duration-150 ease-in-out group"
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

export function FacilitesGrid() {
  const [category, setCategory] = useState<string>("0");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Changer 768 selon votre définition de mobile
    };

    handleResize(); // Appel initial pour déterminer l'état au chargement de la page

    window.addEventListener("resize", handleResize); // Ajouter un écouteur d'événements pour redimensionner
    return () => window.removeEventListener("resize", handleResize); // Nettoyer l'écouteur d'événements lors du démontage du composant
  }, []);

  return (
    <section className="">
      <div
        style={{
          paddingLeft: isMobile ? "10px" : "0%",
          paddingRight: isMobile ? "10px" : "0%",
        }}
      >
        <div className="py-12 md:pt-16 md:pb-20">
          {/* Content */}
          <div>
            {/* Category buttons */}
            <div className="mb-8 ">
              <div className="flex flex-wrap justify-center -m-1.5">
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "0"
                      ? "bg-brand-200 border-brand-500"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("0")}
                >
                  <div className="flex items-center justify-center">
                    <span>View All</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "0"
                          ? "text-white bg-brand-500"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      2.7K
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "1"
                      ? "bg-brand-200 border-brand-500"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("1")}
                >
                  <div className="flex items-center justify-center">
                    <span>Illustration</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "1"
                          ? "text-white bg-brand-500"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      1.2K
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "2"
                      ? "bg-brand-200 border-brand-500"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("2")}
                >
                  <div className="flex items-center justify-center">
                    <span>Branding</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "2"
                          ? "text-white bg-brand-500"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      1.4 M
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "3"
                      ? "bg-brand-200 border-brand-500"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("3")}
                >
                  <div className="flex items-center justify-center">
                    <span>Product Design</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "3"
                          ? "text-white bg-brand-500"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      1.7K
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "4"
                      ? "bg-brand-200 border-brand-500"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("4")}
                >
                  <div className="flex items-center justify-center">
                    <span>Typography</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "4"
                          ? "text-white bg-brand-500"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      989
                    </span>
                  </div>
                </button>
              </div>
            </div>
            {/* Gallery */}
            <div className="relative mb-20">
              {/* Images grid */}
              <div
                className="max-w-sm mx-auto sm:max-w-none grid gap-6 sm:gap-0 sm:grid-cols-2 md:grid-cols-2 items-start"
                data-aos-id-inpspiration
              >
                {/* facility items */}
                {facilities.map((facility, index) => (
                  <div
                    key={index + facility.title}
                    className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                    style={
                      !["0", "1", "2", "3"].includes(category)
                        ? { display: "none" }
                        : {}
                    }
                    data-aos="fade-down"
                    data-aos-anchor="[data-aos-id-inpspiration]"
                  >
                    <div className="relative overflow-hidden h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[450px]">
                      <Image
                        className="h-full w-full object-cover object-center"
                        src={facility.image as string}
                        width="352"
                        height="352"
                        alt="Inspiration 01"
                      />
                    </div>
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-16">
                      {/* Backdrop */}
                      <div
                        className="absolute inset-0 -mt-10 bg-gradient-to-t from-grey-700 to-transparent opacity-80 pointer-events-none"
                        aria-hidden="true"
                      />
                      <div>
                        {/* Up side */}
                        <div className="relative">
                          <div className="font-hkgrotesk font-bold text-xl md:text-3xl">
                            {facility.title}
                          </div>
                          <div className="flex items-center">
                            <IconMapPin width={16} className="mr-1 mb-3" />
                            <div className="text-white font-light mb-3 text-xs md:text-sm">
                              {facility.location}
                            </div>
                            <IconPointFilled
                              width={16}
                              className="ml-2 mr-1 mb-3"
                              color="#71DA80"
                            />
                            <div className="text-white font-light mb-3 text-xs md:text-sm">
                              {facility.status}
                            </div>
                          </div>
                        </div>
                        {/* Down side */}
                        <div className="relative w-[200px] items-center h-full z-0">
                          <Link
                            className="btn-round text-white bg-grey-800 hover:bg-grey-700 shadow-sm"
                            href="/#"
                            style={{ cursor: "pointer" }}
                          >
                            Plus d'informations{" "}
                            <span className="tracking-normal text-green group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                              -&gt;
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Content on hover */}
                    <div className="md:hidden md:group-hover:block absolute top-0 left-0 right-0 p-4 text-sm md:text-lg">
                      {/* Backdrop */}
                      <div
                        className="absolute inset-0 -mb-10 bg-gradient-to-t to-grey-800 from-transparent opacity-80 pointer-events-none"
                        aria-hidden="true"
                      />
                      {/* Content */}
                      <div className="relative flex justify-between">
                        {/* Left side */}
                        <div className="flex items-center">
                          <div className="truncate">
                            <div className="relative flex justify-center">
                              <IconWindmill></IconWindmill>
                              <IconDroplet></IconDroplet>
                            </div>
                            <div className="ml-1 text-xs text-white opacity-60 truncate justify-center w-full items-center text-center">
                              Energie
                            </div>
                          </div>
                          <div className="truncate ml-4 items-center">
                            <div className="relative flex justify-center">
                              <IconBolt></IconBolt>
                              <div className="whitespace-nowrap text-white ml-1">
                                150 MW
                              </div>
                            </div>
                            <div className="text-xs text-white opacity-60 truncate justify-center w-full items-center text-center">
                              Puissance
                            </div>
                          </div>
                          <div className="truncate ml-4 items-center">
                            <div className="relative flex justify-center">
                              <IconBrandSpeedtest></IconBrandSpeedtest>
                              <div className="ml-1 whitespace-nowrap text-white">
                                36 TH
                              </div>
                            </div>
                            <div className="text-xs text-white opacity-60 truncate justify-center w-full items-center text-center">
                              Hashrate
                            </div>
                          </div>
                        </div>
                        {/* Right side */}
                        <div className="truncate ml-4 items-center">
                          <div className="flex flex-nowrap items-center ml-1">
                            <button className="text-brand-500 hover:text-brand-100 font-bold">
                              <span className="sr-only">Levée</span>
                              <IconCurrencyDollar
                                size={isMobile ? 20 : 32}
                              ></IconCurrencyDollar>
                            </button>
                            <div className="whitespace-nowrap  text-lg md:text-2xl text-white font-bold opacity-90 ml-0">
                              4 M
                            </div>
                          </div>
                          <div className="text-xs text-white opacity-60 truncate justify-center w-full items-center text-center">
                            Levée
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Inspiration() {
  const [category, setCategory] = useState<string>("0");

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-left">
              <svg
                className="fill-gray-300  hidden md:block absolute -ml-7 -mt-8"
                width="22"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z"
                  fillRule="evenodd"
                />
              </svg>
              <h2 className="h2 font-cabinet-grotesk">Latest inspiration</h2>
            </div>
          </div>
          {/* Content */}
          <div>
            {/* Category buttons */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center md:justify-start -m-1.5">
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "0"
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("0")}
                >
                  <div className="flex items-center justify-center">
                    <span>View All</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "0"
                          ? "text-white bg-blue-300"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      2.7K
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "1"
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("1")}
                >
                  <div className="flex items-center justify-center">
                    <span>Illustration</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "1"
                          ? "text-white bg-blue-300"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      1.2K
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "2"
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("2")}
                >
                  <div className="flex items-center justify-center">
                    <span>Branding</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "2"
                          ? "text-white bg-blue-300"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      1.4 M
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "3"
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("3")}
                >
                  <div className="flex items-center justify-center">
                    <span>Product Design</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "3"
                          ? "text-white bg-blue-300"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      1.7K
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === "4"
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-200"
                  }`}
                  onClick={() => setCategory("4")}
                >
                  <div className="flex items-center justify-center">
                    <span>Typography</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "4"
                          ? "text-white bg-blue-300"
                          : "text-gray-400 bg-gray-100"
                      }`}
                    >
                      989
                    </span>
                  </div>
                </button>
              </div>
            </div>
            {/* Gallery */}
            <div className="relative">
              {/* Images grid */}
              <div
                className="max-w-sm mx-auto sm:max-w-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-start"
                data-aos-id-inpspiration
              >
                {/* facility items */}

                <div
                  className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                  style={
                    !["0", "1", "2", "3"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                >
                  <div className="relative overflow-hidden h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[450px]">
                    <Image
                      className="h-full w-full object-cover object-center"
                      src={facilities[0].image as string}
                      width="352"
                      height="352"
                      alt="Inspiration 01"
                    />
                  </div>
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-16">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-10 bg-gradient-to-t from-grey-700 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    <div>
                      {/* Up side */}
                      <div className="relative">
                        <div className="font-hkgrotesk font-bold text-xl md:text-3xl">
                          {facilities[0].title}
                        </div>
                        <div className="flex items-center">
                          <IconMapPin width={16} className="mr-1 mb-3" />
                          <div className="text-white font-light mb-3 text-xs md:text-sm">
                            {facilities[0].location}
                          </div>
                          <IconPointFilled
                            width={16}
                            className="ml-2 mr-1 mb-3"
                            color="#71DA80"
                          />
                          <div className="text-white font-light mb-3 text-xs md:text-sm">
                            {facilities[0].status}
                          </div>
                        </div>
                      </div>
                      {/* Down side */}
                      <div className="relative w-[200px] items-center h-full z-0">
                        <Link
                          className="btn-round text-white bg-grey-800 hover:bg-grey-700 shadow-sm"
                          href="/#"
                          style={{ cursor: "pointer" }}
                        >
                          Plus d'informations{" "}
                          <span className="tracking-normal text-green group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 1st Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "1", "3"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={facilities[1].image as string}
                    width="352"
                    height="352"
                    alt="Inspiration 01"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-9 h-9 rounded-full mr-4"
                          src={Author01}
                          width="36"
                          height="36"
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 2nd Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "2", "3"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="100"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={facilities[2].image as string}
                    width="352"
                    height="352"
                    alt="Inspiration 02"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-10 h-10 rounded-full mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 3rd Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "1", "3", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="200"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={facilities[3].image as string}
                    width="352"
                    height="352"
                    alt="Inspiration 03"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-10 h-10 rounded-full mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 4th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "1", "2", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="300"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={Author01}
                    width="352"
                    height="352"
                    alt="Inspiration 04"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-10 h-10 rounded-full mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 5th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "1", "2"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="400"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={Author01}
                    width="352"
                    height="352"
                    alt="Inspiration 05"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-10 h-10 rounded-full mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 6th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "1", "2", "3", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="500"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={Author01}
                    width="352"
                    height="352"
                    alt="Inspiration 06"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-10 h-10 rounded-full mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 7th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "1", "3", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="600"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={Author01}
                    width="352"
                    height="352"
                    alt="Inspiration 07"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-10 h-10 rounded-full mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 8th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "2", "3", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="700"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={Author01}
                    width="352"
                    height="352"
                    alt="Inspiration 08"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-10 h-10 rounded-full mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 9th Gallery Image */}
                <a
                  className="relative group hover:shadow-xl transition duration-300 ease-in-out"
                  style={
                    !["0", "2", "4"].includes(category)
                      ? { display: "none" }
                      : {}
                  }
                  href="#0"
                  data-aos="fade-down"
                  data-aos-anchor="[data-aos-id-inpspiration]"
                  data-aos-delay="800"
                >
                  <Image
                    className="w-full aspect-square object-cover"
                    src={Author01}
                    width="352"
                    height="352"
                    alt="Inspiration 09"
                  />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <Image
                          className="shrink-0 w-10 h-10 rounded-full mr-4"
                          src={Author01}
                          width={40}
                          height={40}
                          alt="Author 01"
                        />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">
                            Ada Ahdiyat
                          </div>
                          <div className="text-xs text-white opacity-60 truncate">
                            @ada-designer-ok
                          </div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg
                            className="fill-current"
                            width="16"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
                          4 M
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* CTA */}
              <div className="absolute bottom-0 left-0 right-0 h-[352px] bg-gradient-to-t from-white to-transparent">
                <div className="flex h-full items-end justify-center">
                  <Link
                    className="btn text-white bg-blue-500 hover:bg-blue-600 shadow-sm mb-6"
                    href="/signup"
                  >
                    Join The Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
