"use client";
import { useTranslations } from "next-intl";
import ButtonLink from "./ButtonLink";
import classNames from "classnames";

interface MarketplaceButtonProps {
  colorScheme: "dark" | "light";
  className?: string;
}

const MarketplaceButton: React.FC<MarketplaceButtonProps> = ({
  colorScheme,
  className,
  ...otherProps
}) => {
  return (
    <ButtonLink href={"/sign-in"} className={classNames("lg:w-48", className)}>
      {"Marketplace"}
    </ButtonLink>
  );
};

export default MarketplaceButton;
