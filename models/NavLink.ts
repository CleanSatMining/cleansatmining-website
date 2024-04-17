import { Icon } from "@phosphor-icons/react";

export type NavLink = {
  href: string;
  label:
    | "links.home"
    | "links.understand"
    | "links.facilities"
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
    | "facilities"
    | "En savoir plus"
    | string;
  external: boolean;
  icon?: Icon;
  parent?: string;
};

export enum MenuFacilityOptions {
  DESCRIPTION = "description",
  INSTALLATION = "installation",
  TEAM = "team",
  SPECIFICATION = "specification",
}
