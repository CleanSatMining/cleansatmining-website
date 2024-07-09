"use client";
import React, { useRef, ReactElement, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "@/app/css/scroll.css"; // Utilisez le chemin d'accès correct basé sur l'organisation de votre projet

interface ScrollHorizontalProps {
  components: ReactElement[];
}

const ScrollHorizontal: React.FC<ScrollHorizontalProps> = ({ components }) => {
  useEffect(() => {
    // Enregistrez les plugins nécessaires
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".scroll-content");
    const container = document.querySelector(
      ".scroll-container"
    ) as HTMLElement;

    console.log("section", sections.length, container?.offsetWidth);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container?.offsetWidth,
      },
    });
  }, []);
  return (
    <div className="overflow-y-scroll h-full overflow-scrolling-touch overflow-y-visible relative h-auto overflow-x-hidden m-0">
      {/*       {components.map((component, index) =>
        React.cloneElement(component, {
          ...component.props,
          className: `${component.props.className || ""} panel`.trim(),
          key: index,
        })
      )} */}

      <div className="flex flex-col justify-center items-center h-screen bg-yellow-400">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div className="scroll-container w-screen overflow-x-scroll">
        <div className="description scroll-content w-[200vw] whitespace-nowrap">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>

        <section className="scroll-content w-[200vw] whitespace-nowrap">
          ONE
        </section>
        <section className="scroll-content w-[200vw] whitespace-nowrap">
          TWO
        </section>
        <section className="scroll-content w-[200vw] whitespace-nowrap">
          THREE
        </section>
      </div>
      <div className="flex h-screen bg-yellow-400">Last Container</div>
    </div>
  );
};

export default ScrollHorizontal;

export const ScrollSection: React.FC<ScrollHorizontalProps> = ({
  components,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

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
          end: "2000 top",
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
    <section className="relative scroll-section-outer bg-grey-700">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {components.map((component, index) => (
            <section className="scroll-section" key={"scroll-" + index}>
              {component}
            </section>
          ))}
          {/*<div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
           <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div> */}
        </div>
      </div>
    </section>
  );
};
