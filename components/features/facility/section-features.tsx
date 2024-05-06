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
  team: React.ReactNode | undefined;
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
      <div className="w-full mx-auto px-4 sm:px-6">
        {menuFacility === MenuFacilityOptions.DESCRIPTION && <>{description}</>}
        {menuFacility === MenuFacilityOptions.INSTALLATION && (
          <>{installation}</>
        )}
        {menuFacility === MenuFacilityOptions.TEAM && <>{team}</>}
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
