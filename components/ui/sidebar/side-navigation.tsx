"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const pathname = usePathname();
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Obtenez la position de défilement actuelle
      const scrollTop = document.documentElement.scrollTop;

      console.log("scrollTop", scrollTop);

      console.log("top", top);

      // Définissez top en fonction de la position de défilement, mais ne descendez pas en dessous de 100
      setTop(() => scrollTop);
    };

    // Ajoutez l'écouteur d'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // Supprimez l'écouteur d'événement de défilement lorsque le composant est nettoyé
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Dépendances vides signifient que l'effet s'exécute une fois au montage et se nettoie au démontage

  return (
    <div
      className={
        top > 300
          ? "w-10 sm:w-24 md:w-32 shrink-0 border-r border-grey-400"
          : ""
      }
    >
      <div
        className={
          (top > 300
            ? "fixed top-[200px] "
            : "sticky top-0 border-r border-grey-400 ") +
          "w-10 sm:w-24 md:w-32 shrink-0 h-screen overflow-y-auto no-scrollbar"
        }
      >
        <div className="h-full flex flex-col justify-between after:flex-1 after:mt-auto">
          <div className="flex-1 grow flex">
            <nav className="w-full">
              <ul className="space-y-4">
                <li className="py-2">
                  <Link
                    href="/"
                    className={`w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                      pathname !== "/about" &&
                      pathname !== "/subscribe" &&
                      pathname !== "/projects" &&
                      pathname !== "/resume"
                        ? "text-brand-500 after:bg-brand-500"
                        : "text-grey-300 hover:text-grey-200"
                    }`}
                  >
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="19"
                    >
                      <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z" />
                      <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z" />
                    </svg>
                    <span className="hidden sm:block ml-2">Home </span>
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/about"
                    className={`w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                      pathname === "/about"
                        ? "text-brand-500 after:bg-brand-500"
                        : "text-grey-300 hover:text-grey-200"
                    }`}
                  >
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        fillOpacity=".16"
                        d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                      />
                      <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                    </svg>
                    <span className="hidden sm:block ml-2">About</span>
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/projects"
                    className={`w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                      pathname === "/projects"
                        ? "text-brand-500 after:bg-brand-500"
                        : "text-grey-300 hover:text-grey-200"
                    }`}
                  >
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path fillOpacity=".16" d="M1 4h18v10H1z" />
                      <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z" />
                    </svg>
                    <span className="hidden sm:block ml-2">Projects</span>
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/resume"
                    className={`w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                      pathname === "/resume"
                        ? "text-brand-500 after:bg-brand-500"
                        : "text-grey-300 hover:text-grey-200"
                    }`}
                  >
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                    >
                      <path
                        fillOpacity=".16"
                        fillRule="nonzero"
                        d="M1 5h16v14H1z"
                      />
                      <path
                        fillRule="nonzero"
                        d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"
                      />
                    </svg>
                    <span className="hidden sm:block ml-2">Resume</span>
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/subscribe"
                    className={`w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                      pathname === "/subscribe"
                        ? "text-brand-500 after:bg-brand-500"
                        : "text-grey-300 hover:text-grey-200"
                    }`}
                  >
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                    >
                      <path fillOpacity=".16" d="m13.4 18-3-7.4-7.4-3L19 2z" />
                      <path d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z" />
                    </svg>
                    <span className="hidden sm:block ml-2">Sub</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
