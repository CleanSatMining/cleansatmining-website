"use client";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import HeaderHome from "@/components/ui/header-home";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Blur from "@/public/images/blur-homepage.svg";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="relative">
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
      <Header />
      {/* <div onClick={() => setIsHome(!isHome)}>
        {isHome && <HeaderHome />}
        {!isHome && <Header />}
      </div> */}

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}
