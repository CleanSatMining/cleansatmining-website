import Highlighter, { HighlighterItem } from "./ui/features/highlighter";
import Image from "next/image";
import FeatureImg01 from "@/public/images/features-02.png";
import FeatureImg02 from "@/public/images/feature-image-02.png";
import PathDown from "@/public/images/path/path-down.svg";
import PostItem from "@/components/ui/features/post-item";
import { allUpdates, allOnBoardings } from "@/.contentlayer/generated";

const steps = [
  {
    title: "Sélectionnez une offre en cours",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbi aliquet tincidunt mattis ultrices tempus.",
    image: FeatureImg01,
  },
  {
    title: "Investissez à partir du montant d’entrée",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbi aliquet tincidunt mattis ultrices tempus.",
    image: FeatureImg01,
  },
  {
    title: "Recevez vos Bitcoins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbi aliquet tincidunt mattis ultrices tempus.",
    image: FeatureImg01,
  },
  {
    title: "Revendez !",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum eget sit felis enim amet donec. Id consectetur sit nec sed. Ut integer venenatis volutpat morbi aliquet tincidunt mattis ultrices tempus.",
    image: FeatureImg01,
  },
];

export default function FeaturesHow() {
  // Sort posts by date
  allOnBoardings.sort((a, b) => {
    return a.order < b.order ? -1 : 1;
  });

  return (
    <section className="relative">
      {/* Transition */}
      <div
        className="flex justify-center items-center w-full "
        data-aos="fade-up"
      >
        <Image src={PathDown} className="" priority alt="path Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2
              className="mb-4 h2 font-title text-green uppercase text-xl sm:text-4xl"
              data-aos="fade-up"
            >
              Investir dans le minage green du Bitcoin
            </h2>
            <p
              className="text-md sm:text-xl text-grey-200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Découvrez l’investissement durable dans le minage vert du Bitcoin
              en suivant ces quatre étapes. Plongez dans une opportunité éthique
              et prometteuse, guidée par notre engagement envers l'innovation et
              la durabilité.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div
                className="absolute h-full top-4 left-[2px] w-0.5 bg-grey-400 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] -z-10 overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,_transparent,_theme(colors.brand.500/.65)_25%,_theme(colors.brand.200)_50%,_theme(colors.brand.500/.65)_75%,_transparent)] after:animate-shine"
                aria-hidden="true"
              ></div>
              {allOnBoardings.map((post, postIndex) => (
                <PostItem key={postIndex} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
