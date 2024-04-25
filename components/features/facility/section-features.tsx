"use client";

import SpecificationSection from "@/components/features/facility/section-specification";
import { useAtomValue } from "jotai";
import { menuFacilityAtom } from "@/states/store";
import { MenuFacilityOptions } from "@/models/NavLink";
import { CleanSatMiningFacility } from "@/models/Facility";

interface SectionProps {
  slug: string;
  facility: CleanSatMiningFacility;
  description: React.ReactNode;
  installation: React.ReactNode;
  team: React.ReactNode;
}

export default function FacilitySections({
  facility,
  slug,
  description,
  installation,
  team,
}: SectionProps) {
  const menuFacility = useAtomValue(menuFacilityAtom);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {menuFacility === MenuFacilityOptions.DESCRIPTION && <>{description}</>}
        {menuFacility === MenuFacilityOptions.TEAM && <>{installation}</>}
        {menuFacility === MenuFacilityOptions.INSTALLATION && <>{team}</>}
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
