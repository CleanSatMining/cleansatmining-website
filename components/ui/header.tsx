"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import MarketplaceButton from "./buttons/MarketplaceButton";
import { headerLinks, fetchfacilitiesMenu } from "@/constants/header";
import { NavLink } from "@/models/NavLink";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header({ nav = true }: { nav?: boolean }) {
  const [facilitiesNavLink, setSiteNavLink] = useState<NavLink[]>([]);

  const headerLinksElements = useMemo(
    () =>
      headerLinks.map((link, index) => {
        return (
          <div key={"div" + index}>
            {facilitiesNavLink.find((value) => {
              return value.parent === link.href;
            }) ? (
              <Dropdown title={link.label} key={link.label}>
                {/* 2nd level: hover */}
                {facilitiesNavLink.map((site) => {
                  return (
                    <li key={site.label}>
                      <Link
                        href={site.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        title={
                          link.external
                            ? `${link.label} - ${"externalLink"}`
                            : undefined
                        }
                        className="font-medium text-sm text-grey-100 hover:text-green flex py-2 px-5 leading-tight"
                      >
                        {site.label}
                      </Link>
                    </li>
                  );
                })}
              </Dropdown>
            ) : (
              <li key={link.label} className="hidden lg:block">
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    className={`${
                      index === 0 ? "border-green" : "border-transparent"
                    } border-b-[1px] py-1 font-medium text-grey-100 hover:text-brand-500 hover:border-green px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out`}
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
                </div>
              </li>
            )}
          </div>
        );
      }),
    [facilitiesNavLink]
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchfacilitiesMenu();
      console.log(facilitiesNavLink);
      setSiteNavLink(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={`absolute w-full z-30`}>
        <header
          className={`bg-grey-600 bg-opacity-60 flex items-center justify-between gap-4 rounded-b-[48px] border-b-[1px] border-green/20 px-6 md:px-12 py-2 md:py-4`}
        >
          <Link href={"/"}>
            <Image
              className="w-[120px] h-[40px] sm:w-[160px] sm:h-[60px]"
              src={Logo}
              width={80}
              height={80}
              alt={"logo"}
            />
          </Link>

          {/* Desktop navigation */}
          {nav && (
            <nav className="hidden md:flex md:grow" key={"nav"}>
              {/* Desktop sign in links */}
              <ul
                className="flex grow justify-end flex-wrap items-center"
                key={"ul header"}
              >
                {headerLinksElements}
                <li className="ml-3" key={"MarketplaceButton"}>
                  <MarketplaceButton colorScheme="dark"></MarketplaceButton>
                </li>
              </ul>
            </nav>
          )}

          <MobileMenu />
        </header>
      </div>
      <div className="h-[60px] sm:h-[100px]"></div>
    </>
  );
}
