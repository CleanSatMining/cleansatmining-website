import { MenuFacilityOptions } from "@/models/NavLink";

export const MenuFacilityOptionsFiles: Record<MenuFacilityOptions, string> = {
  [MenuFacilityOptions.DESCRIPTION]: "about.md",
  [MenuFacilityOptions.INSTALLATION]: "plant.md",
  [MenuFacilityOptions.TEAM]: "team.md",
  [MenuFacilityOptions.SPECIFICATION]: "",
};

export function contentUrl(slug: string, type: MenuFacilityOptions): string {
  const file: string = MenuFacilityOptionsFiles[type];

  if (file === "") {
    return "";
  }
  return `/api/facilities/${slug}/files/${file}`;
}
