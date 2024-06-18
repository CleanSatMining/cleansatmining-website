"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import "@/app/css/animation.css"; // Assurez-vous d'inclure les styles CSS nécessaires

const SMALL_SIZE = 640;

const Animation: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [displayRevolution1, setDisplayRevolution1] = useState(false);
  const [displayRevolution2, setDisplayRevolution2] = useState(false);
  const [displayRevolution3, setDisplayRevolution3] = useState(false);
  const imageRef1 = useRef<HTMLImageElement>(null);
  const imageRef3 = useRef<HTMLImageElement>(null);
  const [imageVisible, setImageVisible] = useState(1);
  const [opacityText1, setOpacityText1] = useState(0);
  const [opacityImage1, setOpacityImage1] = useState(0);
  const [opacityImage2, setOpacityImage2] = useState(0);
  const [opacityImage3, setOpacityImage3] = useState(0);
  const [imageTop, setImageTop] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= SMALL_SIZE);
    };

    // Vérifie la taille de l'écran au montage du composant
    checkScreenSize();

    // Ajoute un écouteur d'événements pour les changements de taille de la fenêtre
    window.addEventListener("resize", checkScreenSize);

    // Supprime l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isSmall = window.innerWidth <= SMALL_SIZE;
      const middleRatio = isSmall ? 0.35 : 0.2;
      const opacityGradiant = 0.01;
      let image = 1;
      if (imageRef1.current) {
        const textDisplayRatio = isSmall ? -4 : 20;
        const screenHeight = window.innerHeight;
        const offset = 0; // screenHeight * 0.032;
        const rect = imageRef1.current.getBoundingClientRect();
        const top1 = rect.top - offset;
        const middle = screenHeight * middleRatio;
        image = top1 >= middle * 0.9 ? 1 : 2;

        const toptext = top1 - screenHeight / textDisplayRatio;
        const opacityImage =
          middle * opacityGradiant > top1 - middle
            ? Math.max(0, (top1 - middle) / (middle * opacityGradiant))
            : 1;

        const opacityImageFix = 1 - opacityImage;

        //console.log("top1", "image", image);
        // console.log(
        //   (isSmall ? "small " : "big ") +
        //     top1 +
        //     " over " +
        //     screenHeight +
        //     " middle " +
        //     middle +
        //     " image " +
        //     image +
        //     " opacityImage " +
        //     opacityImage
        // );
        setImageVisible(image);
        setOpacityText1(
          image === 1 || image === 2
            ? Math.min(1, (screenHeight - toptext) / (toptext - middle))
            : 0
        );
        setOpacityImage1(0);
        setOpacityImage2(opacityImageFix);
        setImageTop(Math.max(top1, middle));
      }

      if (imageRef3.current && image > 1) {
        const r1 = isSmall ? 0.5 : 0.4;
        const r2 = isSmall ? 0.3 : 0.01;
        const r3 = isSmall ? 0.1 : -0.2;

        const screenHeight = window.innerHeight;
        const offset = 0; // screenHeight * 0.032;
        const rect = imageRef3.current.getBoundingClientRect();
        const top3 = rect.top - offset;
        const middle = screenHeight * middleRatio;
        image = top3 >= middle * 0.9 ? 2 : 3;

        const topRevolution1 = top3 / screenHeight < r1;
        const topRevolution2 = top3 / screenHeight < r2;
        const topRevolution3 = top3 / screenHeight < r3;
        const opacityImage =
          middle * opacityGradiant > middle - top3
            ? Math.max(0, (middle - top3) / (middle * opacityGradiant))
            : 1;

        const opacityImageFix = 1 - opacityImage;

        //console.log("top3", "image", image);
        /*      console.log(
          (isSmall ? "small " : "big ") +
            top3 +
            " over " +
            screenHeight +
            " middle " +
            middle +
            " image " +
            image
        ); */

        //setImageTop(rect.top); // Met à jour l'état avec la position de l'image par rapport au haut de l'écran
        //setImage1Middle(middle);
        setImageVisible(image);
        setDisplayRevolution1(topRevolution1);
        setDisplayRevolution2(topRevolution2);
        setDisplayRevolution3(topRevolution3);
        setOpacityImage3(opacityImage);
        setOpacityImage2(opacityImageFix);
        // setOpacityText1(
        //   image === 3 || image === 2
        //     ? Math.min(1, (screenHeight - toptext) / (toptext - middle))
        //     : 0
        // );

        setImageTop(Math.min(top3, middle));
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Appel initial pour définir la position initiale
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="section dark-section">
      <div className="container coin-dark-cention">
        <div className="dark-container">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2
              className="h2 font-title text-xl sm:text-4xl  text-white text-white text-center"
              style={{
                opacity: opacityText1,
              }}
            >
              Mais, c'est bien plus qu'un banal investissement. <br />
              <br />
              <span className="text-green">CleanSat Mining,</span> c'est une
              aventure!
            </h2>
          </div>

          {
            <div
              ref={imageRef1}
              className={
                isSmallScreen ? "coin-image-holder-mobile" : `coin-image-holder`
              }
              style={{
                position: "sticky",
                top: "auto",
                willChange: "opacity",
                opacity: opacityImage1,
                left: "auto",
                backgroundColor: imageVisible === 1 ? "#98ce1a" : "transparent",
              }}
            >
              {imageVisible >= 1 && (
                <Image
                  src="/logo.svg"
                  loading="lazy"
                  alt=""
                  width={200}
                  height={200}
                  className="coin-image"
                  style={{
                    willChange: "opacity",
                    opacity: opacityImage1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(0.933532, 0.933532, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
              )}

              {imageVisible >= 1 && (
                <div
                  className="coin-bg-blur"
                  style={{
                    boxShadow: `0 0 ${opacityText1 * 100}px 0 #98ce1a`,
                    willChange: "opacity",
                    opacity: opacityImage1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
              )}

              {imageVisible >= 1 && (
                <div
                  className="coin-circle"
                  style={{
                    backgroundImage: "url(/images/coin-circle.svg)",
                    willChange: "opacity",
                    opacity: opacityImage1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(258.59deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
              )}
            </div>
          }

          {true && (
            <div
              className={
                isSmallScreen ? "coin-image-holder-mobile" : `coin-image-holder`
              }
              style={{
                position: "fixed",
                top: "50%",
                willChange: "transform",
                opacity: imageVisible === 3 ? 0 : 1,
                left: "50%",
                transform: `translate(-50%, -${200}%)`,
                backgroundColor: "transparent",
              }}
            >
              <Image
                src="/logo.svg"
                loading="lazy"
                alt=""
                width={200}
                height={200}
                className="coin-image"
                style={{
                  willChange: "transform",
                  opacity: imageVisible === 3 ? 0 : 1,
                  transform: `translate3d(0px, ${imageTop}px, 0px) scale3d(0.933532, 0.933532, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: "preserve-3d",
                }}
              />

              <div
                className="coin-bg-blur"
                style={{
                  backgroundColor: "#98ce1a",
                  boxShadow: "0 0 100px 0 #98ce1a",
                  willChange: "transform",
                  opacity: imageVisible === 3 ? 0 : 1,
                  transform: `translate3d(0px, ${imageTop}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: "preserve-3d",
                }}
              />

              <div
                className="coin-circle"
                style={{
                  backgroundImage: "url(/images/coin-circle.svg)",
                  willChange: "transform",
                  opacity: imageVisible === 3 ? 0 : 1,
                  transform: `translate3d(0px, ${imageTop}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  transformStyle: "preserve-3d",
                }}
              />

              {/* {
                <div
                  className={
                    isSmallScreen
                      ? "dark-container-text-wrapper-mobile"
                      : "dark-container-text-wrapper "
                  }
                  style={{
                    marginTop: "850px",
                    opacity: opacityImage3,
                    willChange: "transform",
                    transform: `translate3d(0px, ${imageTop}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
                  }}
                >
                  <div className="flex flex-col justify-center items-center pb-0">
                    <p
                      className="text-lg sm:text-2xl text-grey-200 mb-4"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Faites partie d'une révolution{" "}
                    </p>
                    {displayRevolution1 && (
                      <p
                        className="text-xl sm:text-3xl text-grey-200 mb-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <span className="font-bold text-green whitespace-nowrap">
                          technologique
                        </span>
                      </p>
                    )}
                    {displayRevolution2 && (
                      <p
                        className="text-2xl sm:text-5xl text-grey-200 mb-6 sm:mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <span className="gradient-text font-bold text-green whitespace-nowrap">
                          écologique
                        </span>
                      </p>
                    )}

                    {displayRevolution3 && (
                      <>
                        <p
                          className="text-3xl sm:text-6xl text-grey-200 mb-[-40px] sm:mb-[-84px]"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          <span className="gradient-text-orange font-bold text-green whitespace-nowrap">
                            monetaire!
                          </span>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              } */}
            </div>
          )}

          {
            <div
              ref={imageRef3}
              className={
                isSmallScreen
                  ? "coin-image-holder2-mobile"
                  : `coin-image-holder2`
              }
              style={{
                position: "sticky",
                top: "auto",
                willChange: "opacity",
                opacity: 1,
                left: "auto",
                transform: "none",
                backgroundColor: imageVisible === 3 ? "#98ce1a" : "transparent",
              }}
            >
              {
                <Image
                  src="/logo.svg"
                  loading="lazy"
                  alt=""
                  width={200}
                  height={200}
                  className="coin-image"
                  style={{
                    willChange: "opacity",
                    opacity: imageVisible === 3 ? 1 : 0,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(0.933532, 0.933532, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
              }

              {
                <div
                  className="coin-bg-blur"
                  style={{
                    boxShadow: "0 0 100px 0 #98ce1a",
                    willChange: "opacity",
                    opacity: imageVisible === 3 ? 1 : 0,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
              }

              {
                <div
                  className="coin-circle"
                  style={{
                    marginTop: "0px",
                    backgroundImage: "url(/images/coin-circle.svg)",
                    willChange: "opacity",
                    opacity: imageVisible === 3 ? 1 : 0,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
              }
            </div>
          }

          {
            <div
              className={
                isSmallScreen
                  ? "dark-container-text-wrapper-mobile"
                  : "dark-container-text-wrapper "
              }
            >
              <div className="flex flex-col justify-center items-center pb-0 w-full">
                <p
                  className="text-lg sm:text-2xl text-grey-200 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Faites partie d'une révolution{" "}
                </p>
                {displayRevolution1 && (
                  <p
                    className="text-xl sm:text-3xl text-grey-200 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <span className="font-bold text-green whitespace-nowrap">
                      technologique
                    </span>
                  </p>
                )}
                {displayRevolution2 && (
                  <p
                    className="w-full text-left text-2xl sm:text-5xl text-grey-200 mb-6 sm:mb-8 sm:mt-[80px] sm:ml-[300px]"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <span className="gradient-text font-bold text-green whitespace-nowrap">
                      écologique
                    </span>
                  </p>
                )}

                {displayRevolution3 && (
                  <>
                    <p
                      className="w-full text-right text-3xl sm:text-6xl text-grey-200 mb-[-40px] sm:mb-[-84px] sm:mt-[-160px] sm:mr-[200px]"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <span className="gradient-text-orange font-bold text-green whitespace-nowrap">
                        monetaire
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Animation;
