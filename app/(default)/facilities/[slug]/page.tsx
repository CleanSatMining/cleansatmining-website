import type { Metadata } from "next";

// export const metadata = {
//   title: "CSM - Sites",
//   description: "Nos sites CSM",
// };

import Hero from "@/components/features/facility/hero-facility";
import Sections from "@/components/features/facility/section-features";
import Sidebar from "@/components/ui/sidebar/sidebar";
import WidgetSkills from "@/components/ui/widgets/widget-skills";
import SideNavigation from "@/components/ui/sidebar/side-navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  console.log("Metadata", params.slug);
  const { title, summary: description } = {
    title: "CSM - " + params.slug.toUpperCase(),
    summary: "CleanSat Mining - " + params.slug + " Facility",
  };

  return {
    title,
    description,
  };
}

export default async function FacilityPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <>
      <Hero />

      <div className="">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          {/* Main content */}
          <div className="flex">
            {/* Sidebar */}
            <SideNavigation />
            {/* <Sidebar slug={params.slug} /> */}

            {/* Page container */}
            <div className="block lg:flex">
              <Sections />
              <WidgetSkills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
