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
            <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
              {/* Middle area */}
              <div className="grow">
                <Facility
                  slug={slug}
                  facility={facility}
                  description={description}
                  installation={installation}
                  team={team}
                />
              </div>

              {/* Right sidebar */}
              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <WidgetFacility slug={slug} facility={facility} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
