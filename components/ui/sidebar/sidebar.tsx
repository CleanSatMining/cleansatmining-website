"use client";

import { useRef, useEffect, useState } from "react";
import { useAppProvider } from "@/app/app-provider";
import { useSelectedLayoutSegments } from "next/navigation";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import SidebarLink from "./sidebar-link";
import SidebarLinkGroup from "./sidebar-link-group";
import SidebarLinkSubgroup from "./sidebar-link-subgroup";
import MobileSideBar from "./mobile-sidebar";
import Side from "./side-navigation";

export default function SupportSidebar({
  slug,
}: {
  slug: string;
}): JSX.Element {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useAppProvider();
  const segments0 = useSelectedLayoutSegments();

  const segments = ["facilities", "alpha"];
  const [top, setTop] = useState(
    document ? document.documentElement.scrollTop : 0
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

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
    <>
      <MobileSideBar params={{ topic: "Facilities", slug: slug }} />
      <div>
        {/* Backdrop */}
        <Transition
          className="md:hidden fixed inset-0 z-10 bg-grey-900 bg-opacity-20 transition-opacity"
          show={sidebarOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          aria-hidden="true"
        />

        {/* Sidebar */}
        <div ref={sidebar} className="hidden md:block">
          <Transition
            show={sidebarOpen}
            unmount={false}
            as="aside"
            id="sidebar"
            className={`left-0  bottom-0 w-64 h-screen border-r  md:left-auto md:shrink-0 z-10  md:!block border-grey-400`}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 -translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {top + "/" + document.documentElement.scrollTop}
            {/* Gradient bg displaying on light layout only */}
            <div
              className="absolute inset-0 -left-[9999px] bg-gradient-to-b from-grey-50 to-white pointer-events-none -z-10 dark:hidden"
              aria-hidden="true"
            ></div>

            <div
              className={
                (top > 300 ? "fixed top-[200px]" : "") +
                " top-0 bottom-0 w-64 px-4 sm:px-6 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar"
              }
            >
              <div className="pt-0 md:pt-0 pb-8">
                {/* Docs nav */}
                <nav className="md:block">
                  <ul className="text-sm">
                    {/* 1st level */}
                    <SidebarLinkGroup open={segments.includes("facilities")}>
                      {(handleClick, open) => {
                        return (
                          <>
                            <a
                              href="#0"
                              className={`relative flex items-center font-[650] text-grey-400 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-brand-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-grey-200 ${
                                !segments.includes("facilities") &&
                                "before:hidden"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleClick();
                              }}
                            >
                              <svg
                                className="mr-3 shrink-0"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="fill-brand-300"
                                  d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
                                />
                                <path
                                  className="fill-white dark:fill-grey-800"
                                  d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
                                />
                                <path
                                  className="fill-brand-500"
                                  d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
                                />
                              </svg>
                              <span>Facilities</span>
                            </a>
                            <ul
                              className={`mb-3 ml-4 pl-6 border-l border-grey-400 ${
                                !open && "hidden"
                              }`}
                            >
                              <li className="mt-3">
                                <SidebarLink href="/facilities/alpha">
                                  Alpha
                                </SidebarLink>
                              </li>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Methods and Parameters
                                </a>
                              </li>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Merge Fields
                                </a>
                              </li>
                              <SidebarLinkSubgroup
                                title="Alternative Schemas"
                                open={segments.includes("alternative-scheme")}
                              >
                                <li className="mt-3">
                                  <a
                                    className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                    href="#0"
                                  >
                                    File system
                                  </a>
                                </li>
                                <li className="mt-3">
                                  <a
                                    className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                    href="#0"
                                  >
                                    Describing responses
                                  </a>
                                </li>
                              </SidebarLinkSubgroup>
                              <SidebarLinkSubgroup
                                title="E-Commerce"
                                open={segments.includes("ecommerce")}
                              >
                                <li className="mt-3">
                                  <a
                                    className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                    href="#0"
                                  >
                                    Path parameters
                                  </a>
                                </li>
                                <li className="mt-3">
                                  <a
                                    className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                    href="#0"
                                  >
                                    Query string parameters
                                  </a>
                                </li>
                              </SidebarLinkSubgroup>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Account Exports
                                </a>
                              </li>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Integrations
                                </a>
                              </li>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Add a contact
                                </a>
                              </li>
                            </ul>
                          </>
                        );
                      }}
                    </SidebarLinkGroup>
                    {/* 1st level */}
                    <SidebarLinkGroup open={segments.includes("guides")}>
                      {(handleClick, open) => {
                        return (
                          <>
                            <a
                              href="#0"
                              className={`relative flex items-center font-[650] text-grey-400 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-brand-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-grey-200 ${
                                !segments.includes("guides") && "before:hidden"
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleClick();
                              }}
                            >
                              <svg
                                className="mr-3 shrink-0"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  className="fill-brand-400"
                                  d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
                                />
                                <path
                                  className="fill-grey-800"
                                  d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
                                />
                                <path
                                  className="fill-brand-600"
                                  d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
                                />
                              </svg>
                              <span>Guides / Tutorials</span>
                            </a>
                            <ul
                              className={`mb-3 ml-4 pl-6 border-l border-grey-200 dark:border-grey-400 ${
                                !open && "hidden"
                              }`}
                            >
                              <li className="mt-3">
                                <SidebarLink href="/guides/marketing-api-quick-start">
                                  Marketing API Quick Start
                                </SidebarLink>
                              </li>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Create an account
                                </a>
                              </li>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Generate your API key
                                </a>
                              </li>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Make your first API call
                                </a>
                              </li>
                              <li className="mt-3">
                                <a
                                  className="flex items-center space-x-3 font-medium text-grey-400 dark:text-grey-200"
                                  href="#0"
                                >
                                  Next steps
                                </a>
                              </li>
                            </ul>
                          </>
                        );
                      }}
                    </SidebarLinkGroup>
                    {/* 1st level */}
                    <li className="mb-1">
                      <Link
                        href="/help/how-can-we-help"
                        className={`relative flex items-center font-[650] text-grey-400 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-brand-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-grey-200 ${
                          !segments.includes("help") && "before:hidden"
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <svg
                          className="mr-3 shrink-0"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-brand-500"
                            d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
                          />
                          <path
                            className="fill-grey-800"
                            d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
                          />
                          <path
                            className="fill-brand-700"
                            d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
                          />
                        </svg>
                        <span>Help / Support</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
