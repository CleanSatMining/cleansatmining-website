import React from "react";
import Hero from "@/components/features/facility/hero-facility";
import Facility from "@/components/features/facility/section-features";
import WidgetFacility from "@/components/ui/widgets/widget-facility";
import SideNavigation from "@/components/ui/sidebar/side-navigation";
import { CleanSatMiningFacility } from "@/models/Facility";

export default function Content({
  slug,
  image,
  facility,
  description,
  installation,
  team,
}: {
  slug: string;
  image: React.ReactNode;
  facility: CleanSatMiningFacility;
  description: React.ReactNode;
  installation: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      <Hero slug={slug} facility={facility} image={image} />

      <div className="">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          {/* Main content */}
          <div className="flex">
            {/* Sidebar */}
            <SideNavigation />
            {/* <Sidebar slug={params.slug} /> */}

            {/* Page container */}
            <div className="block lg:flex">
              <Facility
                slug={slug}
                facility={facility}
                description={description}
                installation={installation}
                team={team}
              />
              <WidgetFacility slug={slug} facility={facility} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
