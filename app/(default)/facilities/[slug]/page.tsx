import type { Metadata } from "next";
// export const metadata = {
//   title: "CSM - Sites",
//   description: "Nos sites CSM",
// };

import Hero from "@/components/features/facility/hero-facility";
import Sections from "@/components/features/facility/feature-facility-sections";
import Sidebar from "@/components/ui/sidebar/sidebar";
import WidgetSkills from "@/components/ui/widgets/widget-skills";
import SideNavigation from "@/components/ui/sidebar/side-navigation";

export async function generateStaticParams() {
  return ["alpha", "beta", "gamma"].map((slug) => ({ params: { slug } }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { title, summary: description } = {
    title: "CSM - Alpha",
    summary: "CleanSat Mining - Alpha Facility",
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
