import type { Metadata } from "next";
import Content from "@/components/features/facility/page-content";

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
  return <Content />;
}
