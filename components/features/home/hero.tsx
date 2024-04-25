import Image from "next/image";
import "@/app/css/text.css";
import Illustration from "@/public/images/hero-illustration.svg";
import Logo from "@/public/logo.svg";

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
        className="absolute left-1/2 -translate-x-1/2 translate-y-[120px] pointer-events-none mt-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="w-[600px] xl:w-auto  lg:w-[1000px] md:w-[800px] max-w-none md:transform "
          width={700}
          height={300}
          priority
          alt="Hero Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 xxs:mb-10 xs:mb-0 xl:mb-10">
        <div className="flex items-center justify-center pt-5 pb-[200px] md:pt-10 md:pb-[300px] lg:pb-[400px] xl:pb-[500px]">
          {/* Hero content */}

          <div
            style={{
              backdropFilter: "blur(2px)",
            }}
            className=" max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:justify-center"
          >
            <div
              className="flex items-center justify-center mb-0 mt-8 md:mt-10"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <Image
                src={Logo}
                className="w-[40px] lg:w-[80px] md:w-[60px] opacity-80"
                priority
                alt="Logo Illustration"
              />
            </div>
            <h1
              className=" h2 font-title text-2xl sm:text-[40px] mb-2 font-semibold"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              Acheter du{" "}
              <span className="gradient-text font-bold">Bitcoin</span>, c'est
              bien...
            </h1>
            <h1
              className="h2 font-title mb-2 text-3xl sm:text-5xl"
              data-aos="zoom-out"
              data-aos-delay="800"
            >
              Le Miner, c’est encore mieux !
            </h1>

            {/* <p
              className="text-lg sm:text-xl  mb-10 font-normal"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              Investir, c'est bien, miner, c'est mieux !
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
