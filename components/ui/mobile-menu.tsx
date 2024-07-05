"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Logo from "./logo";
import MarketplaceButton from "./buttons/MarketplaceButton";
import { NavLink } from "@/models/NavLink";
import { headerLinks, fetchfacilitiesMenu } from "@/constants/header";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);
  const [facilitiesNavLink, setSiteNavLink] = useState<NavLink[]>([]);

  const headerLinksElements = useMemo(
    () =>
      headerLinks.map((link, index) => {
        return (
          <div key={"div" + index}>
            {facilitiesNavLink.find((value) => {
              return value.parent === link.href;
            }) ? (
              <li className="py-2 my-2 border-t border-b border-grey-800">
                <Link
                  href={link.href}
                  className="flex text-grey-300 hover:text-white py-2"
                  onClick={() => setMobileNavOpen(false)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  title={
                    link.external
                      ? `${link.label} - ${"externalLink"}`
                      : undefined
                  }
                >
                  {link.label}
                </Link>
                {/* 2nd level: hover */}
                <ul className="pl-4">
                  {facilitiesNavLink.map((site) => {
                    return (
                      <li key={site.label}>
                        <Link
                          href={site.href}
                          target={site.external ? "_blank" : undefined}
                          rel={
                            site.external ? "noopener noreferrer" : undefined
                          }
                          title={
                            site.external
                              ? `${site.label} - ${"externalLink"}`
                              : undefined
                          }
                          onClick={() => setMobileNavOpen(false)}
                          className="text-sm flex font-medium text-grey-300 hover:text-grey-100 py-2"
                        >
                          {site.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li key={link.label}>
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    className={`flex text-grey-300 hover:text-white py-2`}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    title={
                      link.external
                        ? `${link.label} - ${"externalLink"}`
                        : undefined
                    }
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              </li>
            )}
          </div>
        );
      }),
    [facilitiesNavLink]
  );

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchfacilitiesMenu();
      //console.log(facilitiesNavLink);
      setSiteNavLink(data);
    };

    fetchData();
  }, []);

  return (
    <div className="inline-flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-grey-300 hover:text-grey-100 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-grey-900 shadow-lg no-scrollbar"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="py-6 pr-4 pl-20">
            {/* Logo */}
            <Link
              href="/"
              className="inline-block mb-4"
              aria-label="Cruip"
              onClick={() => setMobileNavOpen(false)}
            >
              <Logo />
            </Link>
            {/* Links */}
            <ul>
              {headerLinksElements}
              <li>
                <MarketplaceButton
                  colorScheme="dark"
                  className=" w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2  transition duration-150 ease-in-out"
                ></MarketplaceButton>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
}
