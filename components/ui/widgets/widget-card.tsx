import React from "react";
import "@/app/css/animation.cards.css";
import Image from "next/image";
import { IconMapPin, IconPointFilled } from "@tabler/icons-react";
import { ArrowRight } from "@phosphor-icons/react";

// Définition du type pour les props
type WidgetCardProps = {
  src: string;
  title: string;
  location: {
    country: string;
    region: string;
    countryCode: string;
  };
  status: string;
  slug: string;
};

const WidgetFacilityCard: React.FC<WidgetCardProps> = ({
  src,
  title,
  location,
  status,
}) => {
  return (
    <div className="card card_facility">
      <div
        className="card__img"
        style={{
          backgroundImage: `linear-gradient(220deg, rgba(54, 61, 13, 0) 0, rgba(54, 61, 13, .7) 80%), url(${src})`,
        }}
      ></div>

      <div className="card__title card_facility__title">
        <div className="flex items-center justify-between font-hkgrotesk font-bold text-[16px] w-full">
          <div>{title}</div>

          <div className="">
            <Image
              className="rounded-lg shrink-0"
              src={
                "http://purecatamphetamine.github.io/country-flag-icons/3x2/" +
                location.countryCode +
                ".svg"
              }
              width={24}
              height={24}
              alt={"location.country"}
            />
          </div>
        </div>
      </div>

      {/* <span className="card__meta">{location.countryCode}</span> */}
      <div className="card__description">
        <div className="flex items-center">
          <IconMapPin width={16} className="mr-1 " />
          <div className="text-white font-light  text-xs">
            {location.region + ", " + location.country}
          </div>
        </div>
        <div className="flex items-center">
          <IconPointFilled width={16} className="mr-1" color="#71DA80" />
          <div className="text-white font-light  text-xs">{status}</div>
        </div>
      </div>
    </div>
  );
};

export default WidgetFacilityCard;

export const WidgetFacilityFrame: React.FC<WidgetCardProps> = ({
  src,
  title,
  location,
  status,
  slug,
}) => {
  return (
    <div
      className="bg-grey-800 p-6 rounded"
      style={{
        backgroundImage: `linear-gradient(220deg, rgba(54, 61, 13, 0) 0, rgba(54, 61, 13, .7) 80%), url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grow pt-40">
        <div className="flex items-center font-hkgrotesk font-bold text-xl">
          <div>{title}</div>

          {location && (
            <div className="ml-2">
              <Image
                className="rounded-lg shrink-0"
                src={
                  "http://purecatamphetamine.github.io/country-flag-icons/3x2/" +
                  location.countryCode +
                  ".svg"
                }
                width={24}
                height={24}
                alt={"location.country"}
              />
            </div>
          )}
        </div>
        <div className="flex items-center">
          <IconMapPin width={16} className="mr-1 mb-3" />
          <div className="text-white font-light mb-3 text-xs">
            {location.region + ", " + location.country}
          </div>
          <IconPointFilled
            width={16}
            className="ml-2 mr-1 mb-3"
            color="#71DA80"
          />
          <div className="text-white font-light mb-3 text-xs">{status}</div>
        </div>
      </div>

      <div className="text-right w-[200px]">
        <a
          className="btn-round text-white bg-gradient-to-r from-grey-900/80 via-grey-900 to-grey-900/80 hover:bg-white w-full transition duration-150 ease-in-out group"
          href={"/facilities/" + slug}
        >
          Plus d'informations{" "}
          <span className="tracking-normal text-green group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            <ArrowRight size={16} weight="bold" />
          </span>
        </a>
      </div>
    </div>
  );
};
