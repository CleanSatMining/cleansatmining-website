export const metadata = {
  title: "CSM - Sites",
  description: "Nos sites CSM",
};

import Hero from "@/components/features/facilities/hero-facilities";
import { FacilitesGrid } from "@/components/features/facilities/section-facilities";

export default function facilitiesPage() {
  return (
    <>
      <Hero />
      <FacilitesGrid />
    </>
  );
}
