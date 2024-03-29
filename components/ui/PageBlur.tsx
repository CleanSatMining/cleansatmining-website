import Image from "next/image";
import Blur from "@/public/images/blur/blur-homepage.svg";

export default function PageBlur() {
  return (
    <div
      className="absolute inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    >
      <Image
        src={Blur}
        priority
        className="object-cover w-full h-full"
        alt="Blur Illustration"
      />
    </div>
  );
}
