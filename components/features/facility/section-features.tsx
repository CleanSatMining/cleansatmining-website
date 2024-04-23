"use client";

import AboutSection from "@/components/features/facility/section-about";
import TeamSection from "@/components/features/facility/section-team";
import PlantSection from "@/components/features/facility/section-plant";
import SpecificationSection from "@/components/features/facility/section-specification";
import { useAtomValue } from "jotai";
import { menuFacilityAtom } from "@/states/store";
import { MenuFacilityOptions } from "@/models/NavLink";
import { CleanSatMiningFacility } from "@/models/Facility";

interface SectionProps {
  slug: string;
  facility: CleanSatMiningFacility;
}

export default function FacilitySections({ facility, slug }: SectionProps) {
  const menuFacility = useAtomValue(menuFacilityAtom);

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
          <SpecificationSection
            facility={facility}
            slug={slug}
          ></SpecificationSection>
        )}
      </div>
    </section>
  );
}
