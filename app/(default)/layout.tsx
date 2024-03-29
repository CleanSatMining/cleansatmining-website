"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

//import HeaderHome from "@/components/ui/header-home";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Blur from "@/public/images/blur/blur-homepage.svg";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const [isHome, setIsHome] = useState(false);

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
      <Header />
      {/* {
        <div onClick={() => setIsHome(!isHome)}>
          {isHome && <HeaderHome />}
          {!isHome && <Header />}
        </div>
      } */}

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}
