export const metadata = {
  title: "CleanSat Mining",
  description: "Le minage green de Bitcoin à impact positif",
};

import Hero from "@/components/features/home/hero";
import FeaturesReasons from "@/components/features/home/features-reasons";

import StatsCounter from "@/components/features/home/stats-counter";
import FeaturesMining from "@/components/features/home/features-mining";
import FeaturesFacilities from "@/components/features/facilities/section-facilities";
import Cta from "@/components/cta";
import PageBlur from "@/components/ui/PageBlur";
import AnimationLogo from "@/components/logo-animation";
import CardsAnimation from "@/components/features/home/cards-animation";
import ScrollHorizontal, {
  ScrollSection,
} from "@/components/features/home/scroll-horizontal";

export default function Home() {
  //const [statsMode, setStatsMode] = useState("counter");
  return (
    <>
      <PageBlur />
      <Hero />
      <StatsCounter />
      <AnimationLogo />
      <ScrollSection
        components={[
          <FeaturesMining withTransition={false} />,
          <FeaturesReasons withTransition={false} />,
        ]}
      />
      <FeaturesFacilities withTransition={false} />
      <CardsAnimation />
      <Cta />
    </>
  );
}
