import classNames from "classnames";
import Link, { LinkProps } from "next/link";

interface ButtonLinkProps extends LinkProps {
  minWidth?: boolean;
  theme?: "green" | "yellow" | "white" | "grey600";
  block?: boolean;
  center?: boolean;
  justify?: string;
  disabled?: boolean;
  animation?: boolean;
  isExternal?: boolean;
  className?: string;
  colorSheme?: "light" | "dark";
  children: React.ReactNode;
}

export default function ButtonLink({
  minWidth = false,
  theme = "green",
  block = false,
  center = true,
  disabled = false,
  animation = true,
  isExternal = false,
  className,
  colorSheme = "light",
  children,
  ...rest
}: ButtonLinkProps) {
  const buttonBG = {
    green: "bg-green",
    yellow: "bg-yellow",
    white: "bg-white",
    grey600: "bg-grey-600",
  };
  return (
    <Link
      className={classNames(
        block ? "block" : "inline-block",
        minWidth ? "min-w-[200px]" : "",
        center ? "justify-center" : "",
        disabled
          ? "bg-grey-300"
          : colorSheme === "light"
          ? theme === "grey600"
            ? `${buttonBG[theme]} transition  ease-in-out hover:opacity-80`
            : `${buttonBG[theme]} hover:brightness-75`
          : `${buttonBG[theme]} ${
              animation ? "transition  ease-in-out hover:font-bold" : ""
            }`,
        "inline-flex items-center gap-2 rounded-2xl p-3 text-center font-semibold text-grey-800",
        className
      )}
      target={isExternal ? "_blank" : "_self"}
      {...rest}
    >
      {children}
    </Link>
  );
}
