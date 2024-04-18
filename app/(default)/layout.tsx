"use client";

import { useEffect } from "react";
import AppProvider from "@/app/app-provider";
import AOS from "aos";
import "aos/dist/aos.css";

//import HeaderHome from "@/components/ui/header-home";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

      <AppProvider>
        <main className="grow">{children}</main>
      </AppProvider>
      <Footer />
    </div>
  );
}
