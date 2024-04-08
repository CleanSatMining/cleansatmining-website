import { NavLink } from "@/models/NavLink";
import fetchFacilities from "./facilities";
import { CleanSatMiningFacility } from "@/models/Facility";

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
    href: "/facilities",
    label: "Sites",
    external: false,
  },
  {
    href: "https://cleansat-mining.gitbook.io/gitbook-cleansat-mining",
    label: "L'équipe",
    external: true,
  },
];

export async function fetchfacilitiesMenu(): Promise<NavLink[]> {
  try {
    const tokens: CleanSatMiningFacility[] = await fetchFacilities();
    console.log("tokens", tokens);
    const navLink = tokens.map((token: CleanSatMiningFacility) => {
      const link: NavLink = {
        href: `/facilities/${token.slug
          .trim()
          .replace(" ", "-")
          .toLowerCase()}`,
        label: token.shortName,
        external: false,
        parent: "/facilities",
      };
      return link;
    });
    return navLink;
  } catch (error) {
    console.error("Error fetching tokens full names:", error);
    return [];
  }
}
