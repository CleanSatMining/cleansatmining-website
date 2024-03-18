import { Icon } from "@phosphor-icons/react";

export type NavLink = {
  href: string;
  label:
    | "links.home"
    | "links.understand"
    | "links.sites"
    | "links.about"
    | "links.contact"
    | "links.blog"
    | "links.legalNotices"
    | "links.TCS"
    | "links.privacy"
    | "socialMedia.linkedin"
    | "socialMedia.twitter"

    //todo: to remove
    | "Acceuil"
    | "Comprendre"
    | "Sites"
    | "En savoir plus";
  external: boolean;
  icon?: Icon;
};
