"use client";

import AboutSection from "@/components/features/facility/section-about";
import TeamSection from "@/components/features/facility/section-team";
import PlantSection from "@/components/features/facility/section-plant";
import SpecificationSection from "@/components/features/facility/section-specification";
import { useAtomValue } from "jotai";
import { menuFacilityAtom } from "@/states/store";
import { MenuFacilityOptions } from "@/models/NavLink";
import { usePathname } from "next/navigation";

export default function FacilitySections() {
  const menuFacility = useAtomValue(menuFacilityAtom);
  const pathname = usePathname();
  const slug = pathname.split("/").pop() ?? "";
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {menuFacility === MenuFacilityOptions.DESCRIPTION && (
          <AboutSection slug={slug}></AboutSection>
        )}
        {menuFacility === MenuFacilityOptions.TEAM && (
          <TeamSection slug={slug}></TeamSection>
        )}
        {menuFacility === MenuFacilityOptions.INSTALLATION && (
          <PlantSection slug={slug}></PlantSection>
        )}
        {menuFacility === MenuFacilityOptions.SPECIFICATION && (
          <SpecificationSection></SpecificationSection>
        )}
      </div>
    </section>
  );
}
