"use client";

import { useState, useEffect } from "react";
import ButtonLink from "@/components/ui/buttons/ButtonLink";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className={"mb-20"}>
      <header
        className={` fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top ? "bg-grey-600 backdrop-blur-sm shadow-lg" : ""
        }`}
      >
        {/* Bg gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-grey-600 to-black opacity-60 h-[10rem] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              <Logo />
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop menu links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    href="/tutorials"
                    className="text-grey-100 hover:text-green px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    Comprendre
                  </Link>
                </li>

                {/* 1st level: hover */}
                <Dropdown title="facilities">
                  {/* 2nd level: hover */}
                  <li>
                    <Link
                      href="/documentation"
                      className="font-medium text-sm text-grey-100 hover:text-green flex py-2 px-5 leading-tight"
                    >
                      CSM Alpha
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="font-medium text-sm text-grey-100 hover:text-green flex py-2 px-5 leading-tight"
                    >
                      CSM Beta
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/404"
                      className="font-medium text-sm text-grey-100 hover:text-green flex py-2 px-5 leading-tight"
                    >
                      CSM Gamma
                    </Link>
                  </li>
                </Dropdown>
                <li>
                  <Link
                    href="/blog"
                    className="text-grey-100 hover:text-green px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  >
                    En savoir plus
                  </Link>
                </li>
              </ul>

              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <ButtonLink href={"/"} className="p-2 rounded-xl">
                    {"Marketplace"}
                  </ButtonLink>
                  {/* <Link
                    href="/signup"
                    className="btn-sm text-grey-200 bg-green hover:bg-grey-800 ml-3"
                  >
                    <span>Marketplace</span>
                  </Link> */}
                </li>
              </ul>
            </nav>

            <MobileMenu />
          </div>
        </div>
      </header>
    </div>
  );
}
