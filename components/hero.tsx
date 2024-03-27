import Image from "next/image";
import "@/app/css/text.css";
import Illustration from "@/public/images/hero-illustration.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Illustration */}
      {/* <div
        className="absolute  pointer-events-none w-full -z-10"
        aria-hidden="true"
      >
        <Image src={Back} className=" w-full" priority alt="BG Illustration" />
      </div> */}

      <div
        className="absolute left-1/2 -translate-x-1/2 translate-y-[100px] pointer-events-none mt-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none transform "
          priority
          alt="Hero Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center pt-10 pb-12 md:pt-20 md:pb-[560px] ">
          {/* Hero content */}

          <div
            style={{
              backdropFilter: "blur(2px)",
            }}
            className=" max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:justify-center"
          >
            <h1
              className="h2 font-title mb-2"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              Le minage green de <span className="gradient-text">Bitcoin</span>
              <br></br>à impact positif
            </h1>
            <p
              className="text-xl  mb-10 font-normal"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              Investir, c'est bien, miner, c'est mieux !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
