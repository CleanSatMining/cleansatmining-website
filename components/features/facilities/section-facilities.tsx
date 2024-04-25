"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import PathLeft from "@/public/images/path/path-down-left.svg";
import Blur from "@/public/images/blur/blur-brand.svg";
import Filter from "@/public/images/blur/filter-image.svg";
import Link from "next/link";
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
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "@/app/css/image.css";
import "swiper/css";
import {
  CleanSatMiningFacility,
  FacilityStatus,
  EnergyType,
  FacilityDataMode,
} from "@/models/Facility";
import { formatNumber } from "@/utils/format";
import { getFacilityEnergiesIcon } from "@/utils/facility";
import { getFacilityPower } from "@/utils/facility";
import { getFacilityHashrate } from "@/utils/facility";
import {
  getFacilityFundraising,
  formatFacilityPowerWToMW,
  formatFacilityHashrateTHsToPHs,
} from "@/utils/facility";

Swiper.use([Autoplay, Navigation]);

export interface FacilitiesProps {
  data: CleanSatMiningFacility[];
}

const facilitiesInit: CleanSatMiningFacility[] = [
  {
    id: "1",
    name: "CleanSat Mining Alpha",
    shortName: "CSM Alpha",
    image: "/images/facilities/csm-alpha.jpg",
    slug: "alpha",
    status: FacilityStatus.operational,
    mode: FacilityDataMode.Location,
    location: {
      aera: "Parc des Virunga",
      country: "RDC",
      countryCode: "CD",
    },
  },
  {
    id: "2",
    name: "CleanSat Mining Beta",
    shortName: "CSM Beta",
    image: "/images/facilities/csm-beta.jpg",
    slug: "beta",
    status: FacilityStatus.operational,
    mode: FacilityDataMode.Location,
    location: {
      aera: "Barrage d'Itaipu",
      country: "Paraguay",
      countryCode: "PY",
    },
  },
];

export default function FacilitesCarousel() {
  const [facilities, setFacilities] = useState<CleanSatMiningFacility[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/facilities?mode=location");
        const fetchedData: CleanSatMiningFacility[] = await res.json();
        setFacilities(fetchedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        // Gérer les erreurs ici
      }
    };

    fetchData();

    // Nettoyage de l'effet
    return () => {
      // Nettoyer les ressources si nécessaire
    };
  }, []);

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
                  key={index + facility.name}
                  className="swiper-slide h-auto flex flex-col bg-grey-800 p-6 rounded"
                  style={{
                    backgroundImage: `linear-gradient(220deg, rgba(54, 61, 13, 0) 0, rgba(54, 61, 13, .7) 80%), url(${facility.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="grow pt-40">
                    <div className="font-hkgrotesk font-bold text-xl">
                      {facility.name}
                    </div>
                    <div className="flex items-center">
                      <IconMapPin width={16} className="mr-1 mb-3" />
                      <div className="text-white font-light mb-3 text-xs">
                        {facility?.location?.aera +
                          ", " +
                          facility?.location?.country}
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
  const [category, setCategory] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);
  const [facilities, setFacilities] =
    useState<CleanSatMiningFacility[]>(facilitiesInit);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/facilities?mode=full");
        const fetchedData: CleanSatMiningFacility[] = await res.json();
        setFacilities(fetchedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        // Gérer les erreurs ici
      }
    };

    fetchData();

    // Nettoyage de l'effet
    return () => {
      // Nettoyer les ressources si nécessaire
    };
  }, []);

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
                    category === ""
                      ? "bg-brand-500 border-brand-500 font-semibold shadow-xl border-0 hover:opacity-90"
                      : "text-grey-100 bg-grey-800 hover:bg-grey-700 shadow-xl border-0"
                  }`}
                  onClick={() => setCategory("")}
                >
                  <div className="flex items-center justify-center">
                    <span>Tout voir</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === EnergyType.hydro
                          ? "text-grey-800 bg-brand-500 hover:opacity-90"
                          : "text-green bg-grey-800 hover:bg-grey-700 shadow-sm border-0"
                      }`}
                    >
                      <IconWorldBolt size={20}></IconWorldBolt>
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === EnergyType.hydro
                      ? "bg-brand-500 border-brand-500 font-semibold shadow-xl border-0 hover:opacity-90"
                      : "text-grey-100 bg-grey-800 hover:bg-grey-700 shadow-xl border-0"
                  }`}
                  onClick={() => setCategory(EnergyType.hydro)}
                >
                  <div className="flex items-center justify-center">
                    <span>Hydroélectricité</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "1"
                          ? "text-grey-800 bg-brand-500 hover:opacity-90"
                          : "text-green bg-grey-800 hover:bg-grey-700 shadow-sm border-0"
                      }`}
                    >
                      <IconDroplet size={20}></IconDroplet>
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === EnergyType.wind
                      ? "bg-brand-500 border-brand-500 font-semibold shadow-xl border-0 hover:opacity-90"
                      : "text-grey-100 bg-grey-800 hover:bg-grey-700 shadow-xl border-0"
                  }`}
                  onClick={() => setCategory(EnergyType.wind)}
                >
                  <div className="flex items-center justify-center">
                    <span>Eolien</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "2"
                          ? "text-grey-800 bg-brand-500 hover:opacity-90"
                          : "text-green bg-grey-800 hover:bg-grey-700 shadow-sm border-0"
                      }`}
                    >
                      <IconWindmill size={20}></IconWindmill>
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === EnergyType.nuclear
                      ? "bg-brand-500 border-brand-500 font-semibold shadow-xl border-0 hover:opacity-90"
                      : "text-grey-100 bg-grey-800 hover:bg-grey-700 shadow-xl border-0"
                  }`}
                  onClick={() => setCategory(EnergyType.nuclear)}
                >
                  <div className="flex items-center justify-center">
                    <span>Nucléaire</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "3"
                          ? "text-grey-800 bg-brand-500 hover:opacity-90"
                          : "text-green bg-grey-800 hover:bg-grey-700 shadow-sm border-0"
                      }`}
                    >
                      <IconBuildingFactory size={20}></IconBuildingFactory>
                    </span>
                  </div>
                </button>
                <button
                  className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
                    category === EnergyType.solar
                      ? "bg-brand-500 border-brand-500 font-semibold shadow-xl border-0 hover:opacity-90"
                      : "text-grey-100 bg-grey-800 hover:bg-grey-700 shadow-xl border-0"
                  }`}
                  onClick={() => setCategory(EnergyType.solar)}
                >
                  <div className="flex items-center justify-center">
                    <span>Solaire</span>
                    <span
                      className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
                        category === "4"
                          ? "text-grey-800 bg-brand-500 hover:opacity-90"
                          : "text-green bg-grey-800 hover:bg-grey-700 shadow-sm border-0"
                      }`}
                    >
                      <IconSun size={20}></IconSun>
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
                    key={index + facility.name}
                    className="relative group hover:shadow-xl transition duration-150 ease-in-out"
                    style={
                      !facility.data?.powerPlant.energies
                        .map((e) => e.toString())
                        .includes(category) && category !== ""
                        ? { display: "none" }
                        : {}
                    }
                    data-aos="fade-down"
                    data-aos-anchor="[data-aos-id-inpspiration]"
                  >
                    <div className="relative overflow-hidden h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[370px]">
                      <Image
                        className="h-full w-full object-cover object-center"
                        src={facility.image as string}
                        width="352"
                        height="352"
                        alt="Inspiration 01"
                      />
                      <Image
                        //className="absolute inset-0 h-full w-full object-cover object-center"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        src={Filter}
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
                            {facility.name}
                          </div>
                          <div className="flex items-center">
                            <IconMapPin width={16} className="mr-1 mb-3" />
                            <div className="text-white font-light mb-3 text-xs md:text-sm">
                              {facility.location?.aera +
                                ", " +
                                facility.location?.country}
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
                            href={"/facilities/" + facility.slug}
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
                          <div className="">
                            <div className="relative flex justify-center">
                              {getFacilityEnergiesIcon(facility)}
                            </div>
                            <div className="ml-1 text-xs text-white opacity-60 justify-center w-full items-center text-center">
                              Energie
                            </div>
                          </div>
                          {facility.data && (
                            <div className="truncate ml-4 items-center">
                              <div className="relative flex justify-center">
                                <IconBolt></IconBolt>
                                <div className="whitespace-nowrap text-white ml-1">
                                  {formatFacilityPowerWToMW(
                                    getFacilityPower(facility) ?? 0
                                  )}
                                </div>
                              </div>
                              <div className="text-xs text-white opacity-60 truncate justify-center w-full items-center text-center">
                                Puissance
                              </div>
                            </div>
                          )}
                          {facility.data && (
                            <div className="truncate ml-4 items-center">
                              <div className="relative flex justify-center">
                                <IconBrandSpeedtest></IconBrandSpeedtest>
                                <div className="ml-1 whitespace-nowrap text-white">
                                  {formatFacilityHashrateTHsToPHs(
                                    getFacilityHashrate(facility) ?? 0
                                  )}
                                </div>
                              </div>
                              <div className="text-xs text-white opacity-60 truncate justify-center w-full items-center text-center">
                                Hashrate
                              </div>
                            </div>
                          )}
                        </div>
                        {/* Right side */}
                        {facility.data && (
                          <div className="truncate ml-4 items-center">
                            <div className="flex flex-nowrap items-center ml-1">
                              <button className="text-brand-500 hover:text-brand-100 font-bold">
                                <span className="sr-only">Levée</span>
                                <IconCurrencyDollar
                                  size={isMobile ? 20 : 32}
                                ></IconCurrencyDollar>
                              </button>
                              <div className="whitespace-nowrap  text-lg md:text-2xl text-white font-bold opacity-90 ml-0">
                                {formatNumber(
                                  getFacilityFundraising(facility) ?? 0,
                                  1,
                                  "M"
                                )}
                                {""}+
                              </div>
                            </div>
                            <div className="text-xs text-white opacity-60 truncate justify-center w-full items-center text-center">
                              Levée
                            </div>
                          </div>
                        )}
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
