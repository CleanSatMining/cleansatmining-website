export const metadata = {
  title: "CSM - Sites",
  description: "Nos sites CSM",
};
import { getFacilitiesModeMining } from "@/database/facility";
import Hero from "@/components/features/facilities/hero-facilities";
import { FacilitesGrid } from "@/components/features/facilities/section-facilities";

export default async function facilitiesPage() {
  const facilities = await getFacilitiesModeMining();

  return (
    <>
      <Hero />
      <FacilitesGrid facilities={facilities} />
    </>
  );
}
