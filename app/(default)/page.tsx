"use client";
// export const metadata = {
//   title: "Home - CSM",
//   description: "Le minage green de Bitcoinà impact positif",
// };

import { useState } from "react";
import Hero from "@/components/hero";
import FeaturesReasons from "@/components/features-reasons";
import StatsBlock from "@/components/stats-block";
import StatsSquare from "@/components/stats-square";
import StatsSimple from "@/components/stats-simple";
import Stats from "@/components/stats";
import StatsCounter from "@/components/stats-counter";
import FeaturesMining from "@/components/features-mining";
import FeaturesFacilities from "@/components/features-facilities";
import FeaturesHow from "@/components/features-how";
import Cta from "@/components/cta";
import PageBlur from "@/components/ui/PageBlur";

export default function Home() {
  const [statsMode, setStatsMode] = useState("counter");
  return (
    <>
      <PageBlur />
      <Hero />
      <div
        onClick={() =>
          setStatsMode(
            statsMode === "default"
              ? "block"
              : statsMode === "block"
              ? "square"
              : statsMode === "square"
              ? "simple"
              : statsMode === "simple"
              ? "counter"
              : "default"
          )
        }
      >
        {statsMode === "default" && <Stats />}
        {statsMode === "block" && <StatsBlock />}
        {statsMode === "square" && <StatsSquare />}
        {statsMode === "simple" && <StatsSimple />}
        {statsMode === "counter" && <StatsCounter />}
      </div>
      <FeaturesMining />
      <FeaturesReasons />
      <FeaturesFacilities />
      <FeaturesHow />
      <Cta />
    </>
  );
}
