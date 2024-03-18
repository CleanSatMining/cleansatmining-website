"use client";
import { useTranslations } from "next-intl";
import ButtonLink from "./ButtonLink";

interface MarketplaceButtonProps {
  colorScheme: "dark" | "light";
}

const MarketplaceButton: React.FC<MarketplaceButtonProps> = ({
  colorScheme,
  ...otherProps
}) => {
  return (
    <ButtonLink href={"/sign-in"} className="lg:w-48">
      {"Marketplace"}
    </ButtonLink>
  );
};

export default MarketplaceButton;
