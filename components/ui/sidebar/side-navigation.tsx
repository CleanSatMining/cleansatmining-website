"use client";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { menuFacilityAtom } from "@/states/store";
import { MenuFacilityOptions } from "@/models/NavLink";
import { User, Lightning } from "@phosphor-icons/react";

export default function SideNavigation({
  description = true,
  installation = true,
  specification = true,
  team = true,
}: {
  description?: boolean;
  installation?: boolean;
  team?: boolean;
  specification?: boolean;
}) {
  const [top, setTop] = useState(0);
  const [menu, setMenu] = useAtom(menuFacilityAtom);

  const handleMenuChange = (value: string) => {
    setMenu(value);
  };

  useEffect(() => {
    //menu item
    if (menu === MenuFacilityOptions.DESCRIPTION && !description) {
      setMenu(MenuFacilityOptions.INSTALLATION);
    } else if (menu === MenuFacilityOptions.INSTALLATION && !installation) {
      setMenu(MenuFacilityOptions.TEAM);
    } else if (menu === MenuFacilityOptions.TEAM && !team) {
      setMenu(MenuFacilityOptions.SPECIFICATION);
    } else {
      setMenu(MenuFacilityOptions.DESCRIPTION);
    }

    //scroll
    const handleScroll = () => {
      // Obtenez la position de défilement actuelle
      const scrollTop = document.documentElement.scrollTop;

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
          ? "w-10 sm:w-12 md:w-36 shrink-0 border-r border-grey-400"
          : ""
      }
    >
      <div
        className={
          (top > 300
            ? "fixed top-[200px] "
            : "sticky top-0 border-r border-grey-400 ") +
          "w-10 sm:w-12 md:w-36 shrink-0 h-screen overflow-y-auto no-scrollbar"
        }
      >
        <div className="h-full flex flex-col justify-between after:flex-1 after:mt-auto">
          <div className="flex-1 grow flex">
            <nav className="w-full">
              <ul className="space-y-4">
                {description && (
                  <li className="py-2">
                    <div
                      onClick={() =>
                        handleMenuChange(MenuFacilityOptions.DESCRIPTION)
                      }
                      className={`cursor-pointer w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                        menu === MenuFacilityOptions.DESCRIPTION
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
                      <span className="hidden md:block ml-2">Description</span>
                    </div>
                  </li>
                )}
                {installation && (
                  <li className="py-2">
                    <div
                      onClick={() =>
                        handleMenuChange(MenuFacilityOptions.INSTALLATION)
                      }
                      className={`cursor-pointer w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                        menu === MenuFacilityOptions.INSTALLATION
                          ? "text-brand-500 after:bg-brand-500"
                          : "text-grey-300 hover:text-grey-200"
                      }`}
                    >
                      <Lightning size={20} weight="bold" />
                      {/* <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                    >
                      <path fillOpacity=".16" d="m13.4 18-3-7.4-7.4-3L19 2z" />
                      <path d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z" />
                    </svg> */}
                      <span className="hidden md:block ml-2">Installation</span>
                    </div>
                  </li>
                )}
                {team && (
                  <li className="py-2">
                    <div
                      onClick={() => handleMenuChange(MenuFacilityOptions.TEAM)}
                      className={`cursor-pointer w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                        menu === MenuFacilityOptions.TEAM
                          ? "text-brand-500 after:bg-brand-500"
                          : "text-grey-300 hover:text-grey-200"
                      }`}
                    >
                      <User className="fill-current" size={20} weight="bold" />

                      {/* <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path fillOpacity=".16" d="M1 4h18v10H1z" />
                      <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z" />
                    </svg> */}
                      <span className="hidden md:block ml-2">Equipe</span>
                    </div>
                  </li>
                )}
                {specification && (
                  <li className="py-2">
                    <div
                      onClick={() =>
                        handleMenuChange(MenuFacilityOptions.SPECIFICATION)
                      }
                      className={`cursor-pointer w-full h-6 flex items-center justify-start pr-2 relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 ${
                        menu === MenuFacilityOptions.SPECIFICATION
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
                      {/* <svg
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
                    </svg> */}
                      <span className="hidden md:block ml-2">
                        Specification
                      </span>
                    </div>
                  </li>
                )}
                {/* <li className="py-2">
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
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
