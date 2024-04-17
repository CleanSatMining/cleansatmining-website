"use client";

import Image from "next/image";
import AboutImg from "@/public/images/facilities/csm-alpha[1].jpg";

export default function Features() {
  return (
    <section>
      {/* Page title */}
      <h2 className="h2 font-aspekta mb-5">Le parc des Virunga</h2>
      <div className="mb-4" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <Image
          className="w-full rounded-3xl"
          src={AboutImg}
          width={692}
          height={390}
          alt="About"
        />
      </div>
      {/* Page content */}
      <div className="text-slate-500 dark:text-slate-400 space-y-8">
        <div className="space-y-4">
          <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
            Short Bio
          </h2>
          <p>
            I'm a software engineer with more than 10 years of experience in a
            variety of domains. For the past few years, I've focused on highload
            server-side projects, distributed systems, and platform development
            - tinkering with infrastructure, all things containers and Cloud
            Native.
          </p>
          <p>
            While there isn't a Wikipedia page about me (sorry folks!), a media
            bio is available below.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
            Career
          </h2>
          <p>
            In my role as a Senior Software Engineer for Google Chrome, I am
            responsible for developing and maintaining the{" "}
            <a className="font-medium text-sky-500 hover:underline" href="#0">
              Chrome Web Browser
            </a>
            .
          </p>
          <p>
            My work involves developing and testing new features, optimizing
            performance and security, and ensuring the browser works for users
            around the world. I also work closely with other Google teams ensure
            Chrome is well-integrated with other{" "}
            <a className="font-medium text-sky-500 hover:underline" href="#0">
              Google
            </a>{" "}
            products and services.
          </p>
          <p>
            As CTO of AppForYou,{" "}
            <strong className="font-medium text-slate-800 dark:text-slate-100">
              I am responsible for leading
            </strong>{" "}
            the technical teamand developing the company's technology strategy.
            I work closely with the engineering team to ensure that the products
            and services we provide are secure.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
            Let's Connect
          </h2>
          <p>
            I'm excited to connect with others via{" "}
            <a className="font-medium text-sky-500 hover:underline" href="#0">
              email
            </a>{" "}
            and{" "}
            <a className="font-medium text-sky-500 hover:underline" href="#0">
              Twitter
            </a>{" "}
            to chat about projects and ideas. Currently, I'm not taking on
            freelance projects, but I am open to hearing about potential
            opportunities, discussing them with you and then potentially
            collaborating if it's a good fit.
          </p>
        </div>
      </div>
    </section>
  );
}
