import type { Metadata } from "next";
import Image from "next/image";
import Content from "@/components/features/facility/page-content";
import { CleanSatMiningFacility } from "@/models/Facility";
import { getfacilitiesShort } from "@/database/facility";

export async function generateStaticParams() {
  const facilities = await getfacilitiesShort();

  return facilities.map((facilities) => ({
    slug: facilities.slug,
    image: facilities.image,
  }));
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

interface Params {
  slug: string;
  image: string;
}

export default function FacilityPage(facility: { params: Params }) {
  console.log("FacilityPage", facility, facility.params.slug);
  const slug = facility.params.slug;
  const image = "/images/facilities/csm-" + slug + ".jpg";

  const HeroImage = (
    <Image
      className="absolute inset-0 w-full h-full object-cover opacity-50"
      src={image}
      width={1440}
      height={577}
      priority
      alt={slug}
    />
  );

  return <Content slug={slug} image={HeroImage} />;
}
