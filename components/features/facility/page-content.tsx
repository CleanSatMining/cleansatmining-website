"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/features/facility/hero-facility";
import Facility from "@/components/features/facility/section-features";
import WidgetFacility from "@/components/ui/widgets/widget-facility";
import SideNavigation from "@/components/ui/sidebar/side-navigation";
import { usePathname } from "next/navigation";
import { CleanSatMiningFacility } from "@/models/Facility";
import { useAtom } from "jotai";
import { facilitiesAtom } from "@/states/store";

export default function Content() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() ?? "";
  const [facilities, setFacilities] = useAtom(facilitiesAtom);
  const [facility, setFacility] = useState<CleanSatMiningFacility | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/facilities?full=true");
        const fetchedData: CleanSatMiningFacility[] = await res.json();
        setFacilities(fetchedData);
        console.log("Données récupérées", slug);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du site " + slug,
          error
        );
        // Gérer les erreurs ici
      }
    };

    fetchData();

    // Nettoyage de l'effet
    return () => {
      // Nettoyer les ressources si nécessaire
    };
  }, []);

  useEffect(() => {
    setFacility(facilities.find((f) => f.slug === slug));

    // Nettoyage de l'effet
    return () => {
      // Nettoyer les ressources si nécessaire
    };
  }, [facilities, slug]);

  return (
    <>
      {facility ? (
        <>
          <Hero slug={slug} facility={facility} />

          <div className="">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
              {/* Main content */}
              <div className="flex">
                {/* Sidebar */}
                <SideNavigation />
                {/* <Sidebar slug={params.slug} /> */}

                {/* Page container */}
                <div className="block lg:flex">
                  <Facility slug={slug} facility={facility} />
                  <WidgetFacility slug={slug} facility={facility} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
