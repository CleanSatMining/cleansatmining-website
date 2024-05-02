import type { Metadata } from "next";
import Image from "next/image";
import Content from "@/components/features/facility/page-content";
import { getFacilitiesModeShort, getFacility } from "@/database/facility";
import Markdown from "@/components/ui/features/markdownStatic";
import { downloadFile } from "@/database/facility";
import { MenuFacilityOptionsFiles } from "@/constants/content";
import { MenuFacilityOptions } from "@/models/NavLink";

interface Params {
  slug: string;
  image: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const facilities = await getFacilitiesModeShort();

  const params: Params[] = facilities.map((facilities) => ({
    slug: facilities.slug,
    image: facilities.image,
  }));

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; image: string };
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

export default async function FacilityPage(facilityParams: { params: Params }) {
  console.log("FacilityPage", facilityParams, facilityParams.params.slug);
  const slug = facilityParams.params.slug;
  const image = "/images/facilities/csm-" + slug + ".jpg";
  const facility = await getFacility(slug);

  const descriptionContent = await downloadFile(
    slug,
    MenuFacilityOptionsFiles[MenuFacilityOptions.DESCRIPTION]
  );
  const installationContent = await downloadFile(
    slug,
    MenuFacilityOptionsFiles[MenuFacilityOptions.INSTALLATION]
  );
  const teamContent = await downloadFile(
    slug,
    MenuFacilityOptionsFiles[MenuFacilityOptions.TEAM]
  );

  const markdownDescription = <Markdown content={descriptionContent} />;
  const markdownInstallation = <Markdown content={installationContent} />;
  const markdownTeam = <Markdown content={teamContent} />;

  const HeroImage = (
    <Image
      className="absolute inset-0 w-full h-full object-cover opacity-50"
      src={image}
      width={700}
      height={300}
      priority
      alt={slug}
    />
  );

  return (
    <Content
      slug={slug}
      image={HeroImage}
      facility={facility}
      description={markdownDescription}
      installation={markdownInstallation}
      team={markdownTeam}
    />
  );
}
