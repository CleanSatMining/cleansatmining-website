import SideNavigation from "@/components/ui/sidebar/side-navigation";
import TopNavigation from "@/components/ui/sidebar/top-navigation";
import FacilityNav from "@/components/ui/facility-nav";
import AboutSection from "@/components/features/facility/features-facility-about";

export default function FacilitySections() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AboutSection></AboutSection>
      </div>
    </section>
  );
}
