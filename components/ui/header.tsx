import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Logo from "@/public/images/CSM-logo.svg";
import Image from "next/image";
import MarketplaceButton from "../tools/buttons/MarketplaceButton";
import { NavLink } from "@/models/NavLink";

const headerLinks: NavLink[] = [
  {
    href: "/",
    label: "Acceuil", //"links.home",
    external: false,
  },
  {
    href: "https://cleansat-mining.gitbook.io/gitbook-cleansat-mining",
    label: "Comprendre",
    external: true,
  },
  {
    href: "/sites",
    label: "Sites",
    external: false,
  },
  {
    href: "/about",
    label: "En savoir plus",
    external: false,
  },
];

export default function Header({ nav = true }: { nav?: boolean }) {
  const headerLinksElements = useMemo(
    () =>
      headerLinks.map((link, index) => {
        return (
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
        );
      }),
    []
  );

  return (
    <header>
      <div
        className={`flex items-center justify-between gap-4 rounded-b-[48px] border-b-[1px] border-green/20 px-12 py-8`}
      >
        <Link href={"/"}>
          <Image src={Logo} width={226} height={80} alt={"logo"} />
        </Link>

        {/* Desktop navigation */}
        {nav && (
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {headerLinksElements}
              {/* <li>
                <Link
                  className="font-medium text-grey-100 hover:text-brand-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  href="/signin"
                >
                  Sign in
                </Link>
              </li> */}
              <li className="ml-3">
                <MarketplaceButton colorScheme="dark"></MarketplaceButton>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}