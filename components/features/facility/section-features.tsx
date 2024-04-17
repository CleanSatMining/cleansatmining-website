"use client";

import AboutSection from "@/components/features/facility/section-about";
import SpecificationSection from "@/components/features/facility/section-specification";
import { useAtomValue } from "jotai";
import { menuFacilityAtom } from "@/states/store";
import { MenuFacilityOptions } from "@/models/NavLink";

export default function FacilitySections() {
  const menuFacility = useAtomValue(menuFacilityAtom);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {menuFacility === MenuFacilityOptions.DESCRIPTION && (
          <AboutSection></AboutSection>
        )}
        {menuFacility === MenuFacilityOptions.SPECIFICATION && (
          <SpecificationSection></SpecificationSection>
        )}
      </div>
    </section>
  );
}
