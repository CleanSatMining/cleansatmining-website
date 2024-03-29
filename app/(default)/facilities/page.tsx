export const metadata = {
  title: "Wall of Love (Single Post) - Tidy",
  description: "Page description",
};

import Hero from "@/components/hero-facilities";
import { FacilitesGrid, Inspiration } from "@/components/features-facilities";

export default function facilitiesPage() {
  return (
    <>
      <Hero />
      <FacilitesGrid />
    </>
  );
}
