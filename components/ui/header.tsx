import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Logo from "@/public/images/CSM-logo.svg";
import Image from "next/image";
import MarketplaceButton from "../tools/buttons/MarketplaceButton";
import { headerLinks, fetchSitesMenu } from "@/constants/header";
import { NavLink } from "@/models/NavLink";
import Dropdown from "@/components/utils/dropdown";

export default function Header({ nav = true }: { nav?: boolean }) {
  const [sitesNavLink, setSiteNavLink] = useState<NavLink[]>([]);

  console.log(sitesNavLink);

  const headerLinksElements = useMemo(
    () =>
      headerLinks.map((link, index) => {
        return (
          <>
            {sitesNavLink.find((value) => {
              console.log(index, value.parent, link.href);
              return value.parent === link.href;
            }) ? (
              <Dropdown title="Sites" key={link.label}>
                {/* 2nd level: hover */}
                {sitesNavLink.map((site) => {
                  return (
                    <li>
                      <Link
                        key={site.label}
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
          </>
        );
      }),
    [sitesNavLink]
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSitesMenu();
      console.log(sitesNavLink);
      setSiteNavLink(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={`absolute w-full z-30`}>
        <header
          className={`bg-grey-600 bg-opacity-60 flex items-center justify-between gap-4 rounded-b-[48px] border-b-[1px] border-green/20 px-12 py-8`}
        >
          <Link href={"/"}>
            <Image src={Logo} width={226} height={80} alt={"logo"} />
          </Link>

          {/* Desktop navigation */}
          {nav && (
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                {headerLinksElements}
                <li className="ml-3">
                  <MarketplaceButton colorScheme="dark"></MarketplaceButton>
                </li>
              </ul>
            </nav>
          )}
        </header>
      </div>
      <div className="h-[150px]"></div>
    </>
  );
}
