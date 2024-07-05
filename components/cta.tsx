"use client";
import { set } from "date-fns";
import React, { useState } from "react";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [displayForm, setDisplayForm] = useState(true);

  // Gère la saisie de l'email par l'utilisateur
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Fonction pour cacher le formulaire temporairement
  const hideFormTemporarily = () => {
    setDisplayForm(false);
    setTimeout(() => {
      setDisplayForm(true);
    }, 3000); // Remet displayForm à true après 3 secondes
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    if (!email || email.trim() === "") {
      return;
    }

    console.log("Formulaire soumis");
    const data = {
      email: email,
    };

    try {
      const response = await fetch("/api/newsletter/subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la requête.");
      }
      //setDisplayForm(false);
      hideFormTemporarily();
      setEmail("");
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <section className="">
      <div className="mx-auto px-4 sm:px-6 border-t-[1px] border-grey-400/20 bg-grey-700/20">
        <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
          {/* Radial gradient */}
          {/* <div
            className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-brand-500 rounded-full blur-[120px] opacity-70"></div>
            <div className="absolute w-1/4 h-1/4 translate-z-0 bg-brand-400 rounded-full blur-[40px]"></div>
          </div> */}
          {/* Blurred shape */}
          <div
            className="absolute bottom-0 translate-x-1/2 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs5-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#459420" />
                  <stop offset="100%" stopColor="#B5CD30" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#bs5-a)"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="text-sm sm:text-[16px] inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-200 pb-3">
                Ne manquez pas les dernières nouvelles.
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-grey-200/60 via-grey-200 to-grey-200/60 pb-4 text-2xl sm:text-5xl">
              Restez informés de l'actualité CSM
            </h2>
            <p className="text-sm sm:text-lg text-grey-300 mb-8">
              Nous vous enverons un mail lorsqu'un nouveau site est disponible
            </p>
            <form
              className="inline-flex max-w-sm w-full"
              onSubmit={handleFormSubmit}
            >
              {displayForm && (
                <div className="w-full flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-input py-1.5 w-full mb-3 sm:mb-0 sm:mr-2 rounded-full bg-grey-600 border-grey-500"
                    placeholder="Votre email"
                    aria-label="Votre email"
                  />
                  <button
                    className="btn-round text-grey-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group"
                    type="submit"
                  >
                    Rester informé{" "}
                    <span className="tracking-normal text-brand-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
                </div>
              )}
              {!displayForm && (
                <div className="w-full flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none text-2xl">
                  <h2 className="">Merci pour votre confiance</h2>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
