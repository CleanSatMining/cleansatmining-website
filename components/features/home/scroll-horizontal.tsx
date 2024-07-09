"use client";
import React, { useRef, ReactElement, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@/app/css/scroll.css"; // Utilisez le chemin d'accès correct basé sur l'organisation de votre projet

interface ScrollHorizontalProps {
  components: ReactElement[];
}

export const ScrollSection: React.FC<ScrollHorizontalProps> = ({
  components,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Changer 768 selon votre définition de mobile
    };

    handleResize(); // Appel initial pour déterminer l'état au chargement de la page

    window.addEventListener("resize", handleResize); // Ajouter un écouteur d'événements pour redimensionner
    return () => window.removeEventListener("resize", handleResize); // Nettoyer l'écouteur d'événements lors du démontage du composant
  }, []);

  useEffect(() => {
    const screens = components.length;
    const translateX = -100 * (screens - 1);

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `${translateX}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "500 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      // A return function for killing the animation on component unmount
      pin.kill();
    };
  }, []);

  return (
    <>
      {isMobile &&
        components.map((component, index) => (
          <React.Fragment key={"section-" + index}>{component}</React.Fragment>
        ))}
      {!isMobile && (
        <section className="relative scroll-section-outer bg-grey-700">
          <div ref={triggerRef}>
            <div ref={sectionRef} className="scroll-section-inner">
              {components.map((component, index) => (
                <section className="scroll-section" key={"scroll-" + index}>
                  {component}
                </section>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
