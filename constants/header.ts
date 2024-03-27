import { NavLink } from "@/models/NavLink";
import fetchTokens from "./sites";
import { CleanSatMiningSite } from "@/models/Site";

export const headerLinks: NavLink[] = [
  {
    href: "/",
    label: "Acceuil", //"links.home",
    external: false,
  },
  {
    href: "https://cleansat-mining.gitbook.io/gitbook-cleansat-mining#comment-ca-marche",
    label: "Comprendre",
    external: true,
  },
  {
    href: "/sites",
    label: "Sites",
    external: false,
  },
  {
    href: "https://cleansat-mining.gitbook.io/gitbook-cleansat-mining",
    label: "L'équipe",
    external: true,
  },
];

export async function fetchSitesMenu(): Promise<NavLink[]> {
  try {
    const tokens: CleanSatMiningSite[] = await fetchTokens();
    console.log("tokens", tokens);
    const navLink = tokens.map((token: CleanSatMiningSite) => {
      const link: NavLink = {
        href: `/sites/${token.shortName
          .trim()
          .replace(" ", "-")
          .toLowerCase()}`,
        label: token.shortName,
        external: false,
        parent: "/sites",
      };
      return link;
    });
    return navLink;
  } catch (error) {
    console.error("Error fetching tokens full names:", error);
    return [];
  }
}
