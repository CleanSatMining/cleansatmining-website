export const metadata = {
  title: "CleanSat Mining",
  description: "Le minage green de Bitcoin à impact positif",
};

import Hero from "@/components/hero";
import FeaturesReasons from "@/components/features-reasons";

import StatsCounter from "@/components/stats-counter";
import FeaturesMining from "@/components/features-mining";
import FeaturesFacilities from "@/components/features-facilities";
import FeaturesHow from "@/components/features-how";
import Cta from "@/components/cta";
import PageBlur from "@/components/ui/PageBlur";
import FeatureCSM from "@/components/features-csm";

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
      <FeatureCSM />
      <FeaturesMining />
      <FeaturesReasons />
      <FeaturesFacilities />
      <FeaturesHow />
      <Cta />
    </>
  );
}
