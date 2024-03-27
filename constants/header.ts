import { NavLink } from "@/models/NavLink";
import fetchTokens from "./sites";

export const headerLinks: NavLink[] = [
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

export async function fetchSitesMenu(): Promise<NavLink[]> {
  try {
    const tokens = await fetchTokens();
    const navLink = tokens.map(
      (token: { fullName: string; shortName: string }) => {
        const link: NavLink = {
          href: `/sites/${token.shortName.toLowerCase()}`,
          label: token.fullName,
          external: false,
          parent: "/sites",
        };
        return link;
      }
    );
    return navLink;
  } catch (error) {
    console.error("Error fetching tokens full names:", error);
    return [];
  }
}
