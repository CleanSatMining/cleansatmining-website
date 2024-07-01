"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/app/css/animation.cards.css"; // Utilisez le chemin d'accès correct basé sur l'organisation de votre projet
import MarketplaceImage from "@/public/images/feature-mining-illustration.svg";
import Image from "next/image";

enum ScreenSize {
  Mobile = "mobile",
  Medium = "medium",
  Large = "large",
}

export default function cards() {
  console.log("load cards animation");
  const [screenSize, setScreenSize] = useState<ScreenSize>(ScreenSize.Large);
  const [showHalo, setShowHalo] = useState(false);

  useEffect(() => {
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
          document.body.removeChild(script);
        };
      }
    });

    // Assurez-vous de nettoyer tous les scripts pour éviter des effets secondaires
    return () => {
      scripts.forEach((src) => {
        const scriptTags = document.querySelectorAll(`script[src="${src}"]`);
        scriptTags.forEach((scriptTag) => document.body.removeChild(scriptTag));
      });
    };
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'au montage et au démontage

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

            {/* <div className="card">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/5.jpg)`, }}
              ></div>
              <h3 className="card__title">AI Innovate</h3>
              <h4 className="card__subtitle">Pioneering Tomorrow</h4>
              <span className="card__meta">V5.0</span>
              <p className="card__description">
                Join the forefront of AI innovation, where creativity meets
                computational intelligence to shape a better future.
              </p>
            </div>
            <div className="card">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/6.jpg)`, }}
              ></div>
              <h3 className="card__title">AI Horizons</h3>
              <h4 className="card__subtitle">Beyond Human Limits</h4>
              <span className="card__meta">V6.0</span>
              <p className="card__description">
                Explore the future where AI transforms imagination into reality.
              </p>
            </div>
            <div className="card">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/7.jpg)`, }}
              ></div>
              <h3 className="card__title">AI Frontier</h3>
              <h4 className="card__subtitle">Exploring New Horizons</h4>
              <span className="card__meta">V7.0</span>
              <p className="card__description">
                Venture into uncharted territories where AI blazes trails
                towards unprecedented possibilities.
              </p>
            </div>
            <div className="card">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/8.jpg)`, }}
              ></div>
              <h3 className="card__title">AI Visionary</h3>
              <h4 className="card__subtitle">Envisioning Tomorrow</h4>
              <span className="card__meta">V8.0</span>
              <p className="card__description">
                Embrace the visionary realm of AI, where dreams of the future
                become the reality of today.
              </p>
            </div>
            <div className="card">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${
                    process.env.PUBLIC_URL ?? ""
                  }/images/animations/9.jpg)`, }}
              ></div>
              <h3 className="card__title">AI Odyssey</h3>
              <h4 className="card__subtitle">Journey to Tomorrow</h4>
              <span className="card__meta">V9.0</span>
              <p className="card__description">
                Embark on an epic odyssey through the realms of AI, where
                innovation knows no bounds.
              </p>
            </div> */}
          </div>
        </div>
        {screenSize === ScreenSize.Mobile && <div className="mt-[100vh]"></div>}
        <h2 className="trigger section-subtitle">Investir</h2>
        <div className="wrap">
          <div data-stack-1 className="wrap__inner">
            <div className="content content--1">
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="section-subtitle">Miner</h2>
        <div className="wrap">
          <div data-stack-2 className="wrap__inner">
            <div className="content content--2">
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="section-subtitle">Revendre</h2>
        <div className="wrap">
          <div data-stack-3 className="wrap__inner">
            <div className="content content--3">
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/1.jpg)`,
                  }}
                ></div>
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
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/5.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/6.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/7.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/8.jpg)`,
                  }}
                ></div>
              </div>
              <div className="card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL ?? ""
                    }/images/animations/9.jpg)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="section-subtitle ">Découvrir nos opportunités</h2>
        <div className="relative w-full h-full flex justify-center items-center mt-[100px]">
          {/* Halo effect */}
          {showHalo && (
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
          )}

          {/* Icons */}

          <div className="relative flex items-center justify-center cursor-pointer">
            <Image
              className="w-[200px] max-w-none sm:w-[350px]"
              src={MarketplaceImage}
              width={500}
              height={400}
              alt="Marketplace"
              onMouseEnter={() => setShowHalo(true)}
              onMouseLeave={() => setShowHalo(false)}
              onClick={() =>
                window.open("https://marketplace.cleansatmining.com", "_blank")
              }
            />
          </div>
        </div>
        <p className="mb-48"></p>
      </div>
    </section>
  );
}
