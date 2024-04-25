"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/features/facility/hero-facility";
import Facility from "@/components/features/facility/section-features";
import WidgetFacility from "@/components/ui/widgets/widget-facility";
import SideNavigation from "@/components/ui/sidebar/side-navigation";
import { usePathname } from "next/navigation";
import { CleanSatMiningFacility } from "@/models/Facility";
import { useAtom } from "jotai";
import { facilitiesAtom } from "@/states/store";

export default function Content({
  slug,
  image,
}: {
  slug: string;
  image: React.ReactNode;
}) {
  //const pathname = usePathname();
  //const slug = pathname.split("/").pop() ?? "";
  const [facilities, setFacilities] = useAtom(facilitiesAtom);
  const [facility, setFacility] = useState<CleanSatMiningFacility | undefined>(
    undefined
  );
  console.log("Content", slug);

  useEffect(() => {
    const fetchFacility = async (slug: string) => {
      const response = await fetch(`/api/facilities/${slug}`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await response.json();
      return data;
    };

    const fetchData = async () => {
      try {
        const res = await fetch("/api/facilities");
        const fetchedData: CleanSatMiningFacility[] = await res.json();
        setFacilities(fetchedData);

        const promises = fetchedData.map((d) => d.slug).map(fetchFacility);
        const allFacilities: CleanSatMiningFacility[] = await Promise.all(
          promises
        );

        setFacilities(allFacilities);
        console.log("Données récupérées", slug);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du site " + slug,
          error
        );
        // Gérer les erreurs ici
      }
    };

    if (
      facilities.length === 0 ||
      !facilities.find((f) => f.slug === slug) ||
      facilities.filter((f) => f.data === undefined).length > 0
    ) {
      // fetch data if not already fetched
      // or if a facility is not already in the store
      // or if a facility data detail is missing
      fetchData();
    }

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
          <Hero slug={slug} facility={facility} image={image} />

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
