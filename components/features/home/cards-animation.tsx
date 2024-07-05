"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/app/css/animation.cards.css"; // Utilisez le chemin d'accès correct basé sur l'organisation de votre projet
import MarketplaceImage from "@/public/images/feature-mining-illustration.svg";
import Image from "next/image";
import { CleanSatMiningFacility } from "@/models/Facility";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import Link from "next/link";
import { StackMotionEffect as StackMotionEffect1 } from "@/scripts/js/effect-1/stackMotionEffect";
import { StackMotionEffect as StackMotionEffect2 } from "@/scripts/js/effect-2/stackMotionEffect";
import { StackMotionEffect as StackMotionEffect3 } from "@/scripts/js/effect-3/stackMotionEffect";

enum ScreenSize {
  Mobile = "mobile",
  Medium = "medium",
  Large = "large",
}

const STACK_REPEATING = 6;
const imageSet1 = [
  process.env.PUBLIC_URL ?? "" + "/images/animations/2.jpg",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-alpha-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-beta-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-omega-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-gamma-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-delta-square.png",
];

const imageSet2 = [
  process.env.PUBLIC_URL ?? "" + "/images/animations/3.jpg",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-alpha-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-beta-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-omega-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-gamma-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-delta-square.png",
];

const imageSet3 = [
  process.env.PUBLIC_URL ?? "" + "/images/animations/4.jpg",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-alpha-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-beta-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-omega-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-gamma-square.png",
  process.env.PUBLIC_URL ?? "" + "/images/facilities/csm-delta-square.png",
];

export default function cards() {
  console.log("load cards animation");
  const [screenSize, setScreenSize] = useState<ScreenSize>(ScreenSize.Large);
  const [showHalo, setShowHalo] = useState(false);
  const [imageStack1, setImageStack1] = useState<string[]>(imageSet1);
  const [imageStack2, setImageStack2] = useState<string[]>(imageSet2);
  const [imageStack3, setImageStack3] = useState<string[]>(imageSet3);

  useEffect(() => {
    // Apply the first stack motion effect to all elements with a specific data attribute
    document.querySelectorAll("[data-stack-1]").forEach((stackEl) => {
      new StackMotionEffect1(stackEl);
    });
    // Apply the second stack motion effect to all elements with a different specific data attribute
    document.querySelectorAll("[data-stack-2]").forEach((stackEl) => {
      new StackMotionEffect2(stackEl);
    });
    // Apply the third stack motion effect to all elements with yet another specific data attribute
    document.querySelectorAll("[data-stack-3]").forEach((stackEl) => {
      new StackMotionEffect3(stackEl);
    });

    // Select all grid intro card elements and apply animations on scroll
    const introCards = document.querySelectorAll(".intro .card");
    introCards.forEach((introCard) => {
      gsap.to(introCard, {
        ease: "power1.in",
        startAt: {
          transformOrigin: "100% 50%",
          filter: "brightness(100%)",
        },
        rotationX: () => -60,
        yPercent: () => gsap.utils.random(-100, 0),
        z: () => gsap.utils.random(-100, 0),
        filter: "brightness(0%)",
        scrollTrigger: {
          trigger: introCard,
          start: "top 60%",
          end: "clamp(bottom top)",
          scrub: true,
        },
      });
    });

    // Sélectionnez l'élément cible
    const target = document.querySelector(".target");

    // Enregistrez les plugins nécessaires
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Configuration de GSAP pour désactiver les avertissements de version d'essai
    gsap.config({});

    // Animation ciblant ".target" avec ScrollTrigger
    gsap.to(".target", {
      scrollTrigger: {
        trigger: ".target",
        markers: false,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      rotation: 360,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/facilities");
        const fetchedData: CleanSatMiningFacility[] = await res.json();

        const stack1 = [
          process.env.PUBLIC_URL ?? "" + "/images/animations/2.jpg",
        ];
        const stack2 = [
          process.env.PUBLIC_URL ?? "" + "/images/animations/3.jpg",
        ];
        const stack3 = [
          process.env.PUBLIC_URL ?? "" + "/images/animations/4.jpg",
        ];
        for (const facility of fetchedData) {
          stack1.push(
            process.env.PUBLIC_URL ??
              "" + "/images/facilities/csm-" + facility.slug + "-square.png"
          );
          stack2.push(
            process.env.PUBLIC_URL ??
              "" + "/images/facilities/csm-" + facility.slug + "-square.png"
          );
          stack3.push(
            process.env.PUBLIC_URL ??
              "" + "/images/facilities/csm-" + facility.slug + "-square.png"
          );
        }
        setImageStack1(stack1);
        setImageStack2(stack2);
        setImageStack3(stack3);
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

  /* useEffect(() => {
    const scripts = [
      "scripts/js/gsap.min.js",
      "scripts/js/ScrollTrigger.min.js",
      "scripts/js/imagesloaded.pkgd.min.js",
      "scripts/js/lenis.js",
      //"scripts/js/smoothscroll.js",
      "scripts/js/index.js", // Assurez-vous que ce script est un module si nécessaire
    ];

    scripts.forEach((src) => {
      // Vérifie si le script est déjà présent dans le document
      if (!document.querySelector(`script[src="${src}"]`)) {
        const script = document.createElement("script");

        // Pour le dernier script qui est un module
        if (src === "scripts/js/index.js") {
          script.type = "module";
        }

        script.src = src;
        script.async = false; // Pour charger les scripts dans l'ordre

        document.body.appendChild(script);

        // Nettoyage: Supprime le script du DOM lors du démontage du composant
        return () => {
          //document.body.removeChild(script);
        };
      }
    });

    // Assurez-vous de nettoyer tous les scripts pour éviter des effets secondaires
    return () => {
      scripts.forEach((src) => {
        //const scriptTags = document.querySelectorAll(`script[src="${src}"]`);
        //scriptTags.forEach((scriptTag) => document.body.removeChild(scriptTag));
      });
    };
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'au montage et au démontage
 */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize(ScreenSize.Mobile);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setScreenSize(ScreenSize.Medium);
      } else {
        setScreenSize(ScreenSize.Large);
      }
    };

    // Définir la taille initiale
    handleResize();

    // Ajouter l'écouteur d'événements
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événements
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="section-title h2 font-title text-green uppercase text-xl sm:text-4xl"
          data-aos="fade-up"
        >
          Investir dans le minage green du Bitcoin
        </h2>
        <p className="mb-24"></p>
        {/* <h2 className="section-title">A New Frontier</h2> */}

        <div className={"intro"}>
          {/* <h2 className="intro__title">The Next Evolution</h2>
          <p className="intro__hint">Scroll into the future</p> */}
          <div
            className={
              screenSize === ScreenSize.Mobile
                ? "grid_animation_mobile"
                : screenSize === ScreenSize.Medium
                ? "grid_animation_medium"
                : "grid_animation"
            }
          >
            <div className="card">
              <div
                className="card__img"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/1.jpg)`,
                }}
              ></div>
              <h3 className="card__title">Choisir</h3>
              <h4 className="card__subtitle">
                Sélectionnez une offre en cours
              </h4>
              <span className="card__meta">#1</span>
              <p className="card__description"></p>
            </div>
            <div className="card">
              <div
                className="card__img"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/2.jpg)`,
                }}
              ></div>
              <h3 className="card__title">Investir</h3>
              <h4 className="card__subtitle">
                Investissez à partir du montant d’entrée
              </h4>
              <span className="card__meta">#2</span>
              <p className="card__description"></p>
            </div>
            <div className="card">
              <div
                className="card__img"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/3.jpg)`,
                }}
              ></div>
              <h3 className="card__title">Miner</h3>
              <h4 className="card__subtitle">Recevez vos Bitcoins</h4>
              <span className="card__meta">#3</span>
              <p className="card__description"></p>
            </div>
            <div className="card">
              <div
                className="card__img"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/4.jpg)`,
                }}
              ></div>
              <h3 className="card__title">Revendre</h3>
              <h4 className="card__subtitle">Revendez vos tokens</h4>
              <span className="card__meta">#4</span>
              <p className="card__description"></p>
            </div>
          </div>
        </div>
        {screenSize === ScreenSize.Mobile && <div className="mt-[100vh]"></div>}
        <h2 className="trigger section-subtitle">Investir</h2>
        <div className="wrap">
          <div data-stack-1 className="wrap__inner">
            <div className="content content--1">
              {Array.from({ length: STACK_REPEATING }).map((_, stackIndex) =>
                imageStack1.map((image, index) => {
                  return (
                    <div
                      className="card"
                      key={"data-stack-1-" + stackIndex + "-" + index}
                    >
                      <div
                        className="card__img"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      ></div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <h2 className="section-subtitle">Miner</h2>
        <div className="wrap">
          <div data-stack-2 className="wrap__inner">
            <div className="content content--2">
              {Array.from({ length: STACK_REPEATING }).map((_, stackIndex) =>
                imageStack2.map((image, index) => {
                  return (
                    <div
                      className="card"
                      key={"data-stack-2-" + stackIndex + "-" + index}
                    >
                      <div
                        className="card__img"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      ></div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <h2 className="section-subtitle">Revendre</h2>
        <div className="wrap">
          <div data-stack-3 className="wrap__inner">
            <div className="content content--3">
              {Array.from({ length: STACK_REPEATING }).map((_, stackIndex) =>
                imageStack3.map((image, index) => {
                  return (
                    <div
                      className="card"
                      key={"data-stack-3-" + stackIndex + "-" + index}
                    >
                      <div
                        className="card__img"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      ></div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <Link
          className="relative cursor-pointer z-[99999]"
          href="https://marketplace.cleansatmining.com"
          target="_blank"
        >
          <h2 className="section-subtitle cursor-pointer z-[99999]">
            Découvrir nos opportunités
          </h2>
        </Link>

        <Link
          className="relative w-full h-full flex justify-center items-center mt-[100px] z-[9999] cursor-pointer"
          href="https://marketplace.cleansatmining.com"
          target="_blank"
          onMouseEnter={() => setShowHalo(true)}
          onMouseLeave={() => setShowHalo(false)}
        >
          {/* Halo effect */}
          {
            <svg
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
            </svg>
          }

          {/* Icons */}

          <div className="relative flex items-center justify-center cursor-pointer">
            <Image
              className={`target box w-[200px] max-w-none sm:w-[350px] ${
                showHalo ? "opacity-50" : ""
              }`}
              src={MarketplaceImage}
              width={500}
              height={400}
              alt="Marketplace"
            />
          </div>
        </Link>
        <p className="mb-48"></p>
      </div>
    </section>
  );
}
