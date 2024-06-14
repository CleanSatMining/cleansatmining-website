export const metadata = {
  title: "CleanSat Mining",
  description: "Le minage green de Bitcoin à impact positif",
};

import Hero from "@/components/features/home/hero";
import FeaturesReasons from "@/components/features/home/features-reasons";

import StatsCounter from "@/components/features/home/stats-counter";
import FeaturesMining from "@/components/features/home/features-mining";
import FeaturesFacilities from "@/components/features/facilities/section-facilities";
import FeaturesHow from "@/components/features/home/features-how";
import Cta from "@/components/cta";
import PageBlur from "@/components/ui/PageBlur";
import FeatureCSM from "@/components/features/home/features-csm";
import Animation from "@/components/animation";

export default function Home() {
  //const [statsMode, setStatsMode] = useState("counter");
  return (
    <>
      <PageBlur />
      <Hero />
      {/* <div
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
      </div> */}
      <StatsCounter />
      <Animation />
      {/* <FeatureCSM /> */}
      <FeaturesMining />
      <FeaturesReasons />
      <FeaturesFacilities />
      <FeaturesHow />
      <Cta />
    </>
  );
}
