"use client";
import { NavLink } from "@/models/NavLink";
import { DiscordLogo } from "@phosphor-icons/react/dist/ssr/DiscordLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { TwitterLogo } from "@phosphor-icons/react/dist/ssr/TwitterLogo";
import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr/YoutubeLogo";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const footerLinks: NavLink[] = [
  {
    href: "mailto:contact@cleansatmining.com ",
    label: "contact",
    external: true,
  },
  {
    href: "https://cleansatmining.com/legal-notices ",
    label: "Mentions légales",
    external: true,
  },
  {
    href: "https://cleansatmining.com/privacy-policy ",
    label: "Confidentialité",
    external: true,
  },
];

export const socialLinks: NavLink[] = [
  {
    href: process.env.NEXT_PUBLIC_RS_TWITTER ?? "",
    label: "twitter",
    external: true,
    icon: TwitterLogo,
  },
  {
    href: process.env.NEXT_PUBLIC_RS_YOUTUBE ?? "",
    label: "youtube",
    external: true,
    icon: YoutubeLogo,
  },
  {
    href: process.env.NEXT_PUBLIC_RS_LINKEDIN ?? "",
    label: "linkedin",
    external: true,
    icon: LinkedinLogo,
  },
  {
    href: process.env.NEXT_PUBLIC_RS_DISCORD ?? "",
    label: "discord",
    external: true,
    icon: DiscordLogo,
  },
];

export default function Footer() {
  const pathname = usePathname();

  const footerLinksElements = useMemo(
    () =>
      footerLinks.map((link, index) => {
        const isActiveLink = !link.external && pathname === link.href;
        return (
          <li
            key={link.label}
            className={`lg:px-3 ${
              index !== 0 ? "lg:border-l-[1px] lg:border-green" : ""
            }`}
          >
            <Link
              href={link.href}
              className={classNames(
                "border-b-[1px] py-1",
                isActiveLink ? "border-green" : "border-transparent",
                "font-semibold leading-5 hover:text-green"
              )}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              title={
                link.external ? `${link.label} - ${"externalLink"}` : undefined
              }
            >
              {link.label}
            </Link>
          </li>
        );
      }),
    [pathname]
  );

  const socialLinksElements = useMemo(
    () =>
      socialLinks.map((link) => {
        if (link.href && link.href !== "")
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green p-2 leading-5 hover:bg-green/90 dark:text-grey-800"
                target={link.external ? "_blank" : ""}
                rel={link.external ? "noopener noreferrer" : ""}
                title={
                  link.external
                    ? `${link.label} - ${"externalLink"}`
                    : undefined
                }
              >
                <span className={classNames(link.icon ? "sr-only" : "")}>
                  {link.label}
                </span>
                {link.icon && <link.icon size={24} role="img" />}
              </Link>
            </li>
          );
      }),
    []
  );

  return (
    <footer className="flex flex-col gap-16 rounded-t-[48px] border-t-[1px] border-green/20 px-12 py-8">
      <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-4">
        <Link href={"/"}>
          <Image src="/logo.svg" width={80} height={80} alt={"logo"} />
        </Link>
        <nav aria-label={"nav"}>
          <ul className="flex flex-col flex-wrap gap-y-2 lg:flex-row lg:items-center lg:justify-center">
            {footerLinksElements}
          </ul>
        </nav>
        <ul className="flex items-center gap-6">{socialLinksElements}</ul>
      </div>
      <div className="flex flex-col items-center text-center dark:text-grey-300">
        <p className="mb-3 text-sm font-semibold">
          {"Copyright © 2024 CleanSat Mining SA"}
        </p>
      </div>
    </footer>
  );
}
