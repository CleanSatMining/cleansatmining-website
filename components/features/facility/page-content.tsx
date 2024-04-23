"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/features/facility/hero-facility";
import Sections from "@/components/features/facility/section-features";
import WidgetSkills from "@/components/ui/widgets/widget-skills";
import SideNavigation from "@/components/ui/sidebar/side-navigation";
import { usePathname } from "next/navigation";
import { CleanSatMiningFacility } from "@/models/Facility";
import { useSetAtom, useAtom } from "jotai";
import { facilitiesAtom } from "@/states/store";

export default function Content() {
  const imageHero = "/images/facilities/csm-alpha.jpg";
  const flag =
    "http://purecatamphetamine.github.io/country-flag-icons/3x2/" +
    "CD" +
    ".svg";
  const pathname = usePathname();
  const slug = pathname.split("/").pop() ?? "";
  const [facilities, setFacilities] = useAtom(facilitiesAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/facilities");
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

  return (
    <>
      <Hero slug={slug} facility={facilities.find((f) => f.slug === slug)} />

      <div className="">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          {/* Main content */}
          <div className="flex">
            {/* Sidebar */}
            <SideNavigation />
            {/* <Sidebar slug={params.slug} /> */}

            {/* Page container */}
            <div className="block lg:flex">
              <Sections />
              <WidgetSkills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
