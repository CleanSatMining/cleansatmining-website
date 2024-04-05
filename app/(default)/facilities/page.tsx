export const metadata = {
  title: "CSM - Sites",
  description: "Nos sites CSM",
};

import Hero from "@/components/hero-facilities";
import { FacilitesGrid } from "@/components/features-facilities";

export default function facilitiesPage() {
  return (
    <>
      <Hero />
      <FacilitesGrid />
    </>
  );
}
