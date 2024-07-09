import React, { useState } from "react";
import ProjectCard, { Item } from "@/components/ui/features/project-card";
import BigNumber from "bignumber.js";
import Icon02 from "@/public/images/icons/project-icon-02.svg";
import Icon03 from "@/public/images/icons/project-icon-03.svg";
import Icon04 from "@/public/images/icons/project-icon-04.svg";
import Icon05 from "@/public/images/icons/project-icon-05.svg";
import Icon01 from "@/public/images/icons/project-icon-01.svg";
import Icon06 from "@/public/images/icons/project-icon-06.svg";
import Icon07 from "@/public/images/icons/project-icon-07.svg";
import Icon08 from "@/public/images/icons/project-icon-08.svg";
import { CleanSatMiningFacility } from "@/models/Facility";
import {
  formatTimestampDay,
  formatUsd,
  formatAddress,
  formatNumber,
  formatMonthYear,
  formatFullNumber,
} from "@/utils/format";
import {
  getFacilityHashrateTHs,
  getFacilityPowerW,
  getFacilityFundraisingUsd,
  formatFacilityPowerWToMW,
  formatFacilityHashrateTHsToPHs,
  formatFacilityFundraisingToM,
} from "@/utils/facility";

interface SectionProps {
  slug: string;
  facility: CleanSatMiningFacility;
}

enum FacilitySection {
  Society = "society",
  Token = "token",
  Mining = "mining",
  Operating = "operating",
}

export default function Section({ facility, slug }: SectionProps) {
  const [activeSection, setActiveSection] = useState<FacilitySection>(
    FacilitySection.Society
  );
  const facilityData = facility.data;
  const itemsSociety: Item[] = facilityData
    ? [
        {
          id: 0,
          icon: Icon01,
          slug: "#0",
          title: "Juridique",
          data: [
            { description: "Nom", value: facilityData.society.name },
            {
              description: "Domiciliation",
              value: `${facilityData.society.location.aera}, ${facilityData.society.location.country}`,
            },
            {
              description: "Numéro d'enregistrement",
              value: facilityData.society.registrationNumber,
            },
          ],
        },
        {
          id: 1,
          icon: Icon01,
          slug: "#0",
          title: "Capital",
          data: [
            {
              description: "Capital social",
              value: `${formatUsd(
                facilityData.society.shareCapital,
                0,
                "CHF",
                "CHF"
              )}`,
            },
            {
              description: "Part de la société tokenisée",
              value: `${facilityData.society.tokenization * 100}%`,
            },
            {
              description: "Part détenus par CSM SA",
              value: `${facilityData.society.csmSaShare * 100}%`,
            },
            {
              description: "Portefeuille Bitcoin",
              value: formatAddress(facilityData.vault.xpub),
              link: `https://www.blockchain.com/explorer/assets/btc/xpub/${facilityData.vault.xpub}`,
            },
          ],
        },
        {
          id: 2,
          icon: Icon01,
          slug: "#0",
          title: "Levée de fonds",
          data: facilityData.fundraisings.map((fundraising) => ({
            description: formatMonthYear(fundraising.date),
            value: `${formatUsd(fundraising.amount)}`,
          })),
          description: formatFacilityFundraisingToM(
            getFacilityFundraisingUsd(facilityData.fundraisings)
          ),
        },
      ]
    : [];

  const itemsToken: Item[] = facilityData
    ? [
        {
          id: 0,
          icon: Icon06,
          slug: "#0",
          title: facilityData.token.name,
          data: [
            {
              description: "Symbole",
              value: facilityData.token.symbol,
            },
            {
              description: "Total en circulation",
              value: `${formatNumber(facilityData.token.supply, 0, "", 0)}`,
            },
            {
              description: "Adresse du contrat",
              value: formatAddress(facilityData.token.address),
              link: facilityData.token.gnosisscanUrl,
            },
            {
              description: "Prix de vente initial",
              value: formatUsd(facilityData.token.initialPrice),
            },
          ],
        },
      ]
    : [];

  const itemsOperating: Item[] = facilityData
    ? [
        {
          id: 1,
          icon: Icon07,
          slug: "#0",
          title: "Exploitation",
          data: [
            {
              description: "Lieu d'exploitation",
              value: `${facilityData.location.aera}, ${facilityData.location.country}`,
            },
            {
              description: "Mise en route de la ferme",
              value: formatTimestampDay(facilityData.mining.startingDate),
            },
            {
              description: "Operateur",
              value: facilityData.operator.name,
              link: facilityData.operator.website,
            },
            {
              description: "Pool de minage",
              value: facilityData.mining.pool.name,
            },
          ],
        },

        {
          id: 3,
          icon: Icon07,
          slug: "#0",
          title: "Frais",
          data: [
            {
              description: "Frais operateur sur production",
              value: `${facilityData.fees.operational.operator.rate * 100}%`,
            },
            {
              description: "Taxe operateur sur electricité",
              value: `${facilityData.fees.operational.operator.powerTax} $/kWh`,
            },
            {
              description: "Frais opérationnels CSM",
              value: `${facilityData.fees.operational.csm * 100}%`,
            },
            {
              description: "Frais de provision",
              value: `${facilityData.fees.operational.provision * 100}%`,
            },
            {
              description: "Taxe",
              value: `${facilityData.fees.operational.tax * 100}%`,
            },
          ],
        },
        {
          id: 4,
          icon: Icon07,
          slug: "#0",
          title: "Electricité",
          data: [
            {
              description: "Capacité du site",
              value: `Environ ${facilityData.powerPlant.powerMW}MW`,
            },
            {
              description: "Prix de l'électricité",
              value: `${facilityData.powerPlant.spotLink ? "Spot + " : ""} ${
                facilityData.powerPlant.electricityPrice
              } $/kWh`,
              link: facilityData.powerPlant.spotLink,
            },
            {
              description: "Durée du contrat",
              value: `${facilityData.powerPlant.contractDuration} ans ${
                facilityData.powerPlant.renewableContract
                  ? "(renouvelable)"
                  : ""
              }`,
            },
          ],
        },
      ]
    : [];

  if (facilityData && facilityData.mining.safety !== "") {
    itemsOperating.push({
      id: 4,
      icon: Icon07,
      slug: "#0",
      title: "Securité",
      data: [
        {
          description: facilityData.mining.safety,
          value: "",
        },
      ],
    });
  }
  const machines: string = formatNumber(
    facilityData
      ? facilityData.mining.containers
          .reduce(
            (acc, container) => acc.plus(container.units),
            new BigNumber(0)
          )
          .toNumber()
      : new BigNumber(0).toNumber()
  );
  const itemsMining: Item[] = facilityData
    ? [
        {
          id: 0,
          icon: Icon03,
          slug: "#0",
          title: "Containeurs",
          description: formatFacilityHashrateTHsToPHs(
            getFacilityHashrateTHs(facilityData.mining)
          ),
          data: [
            {
              description: "Nombre de machines",
              value: `${machines}`,
            },
            {
              description: "Puissance de calcul",
              value: formatFacilityHashrateTHsToPHs(
                getFacilityHashrateTHs(facilityData.mining)
              ),
            },
            {
              description: "Puissance électrique",
              value: formatFacilityPowerWToMW(
                getFacilityPowerW(facilityData.mining)
              ),
            },
            {
              description: "Type de refroidissement",
              value: facilityData.mining.cooling,
            },
          ],
        },
      ]
    : [];

  if (facilityData && facilityData.mining.containers.length > 0) {
    var index = 0;
    for (const container of facilityData.mining.containers) {
      const dateFunds =
        index < facilityData.fundraisings.length
          ? facilityData.fundraisings[index].date
          : container.start;
      itemsMining.push({
        id: 1,
        icon: Icon03,
        slug: "#0",
        title: "Levée " + formatMonthYear(dateFunds),
        description: formatUsd(container.intallationCosts.equipement),
        data: [
          {
            description: "Puissance de calcul",
            value: `${formatFacilityHashrateTHsToPHs(
              container.asics.hashrateTHs * container.units
            )}`,
          },
          {
            description: "Puissance électrique",
            value: `${formatFacilityPowerWToMW(
              container.asics.powerW * container.units
            )}`,
          },
          {
            description: "Nombre de machines",
            value: `${container.units}`,
          },
          {
            description: "Type de machines",
            value: `${container.asics.name}`,
          },
          {
            description: "Caracteristique machine",
            value: `${container.asics.hashrateTHs} TH/s - ${container.asics.powerW} W`,
          },
          {
            description: "Cout d'installation",
            value: formatUsd(container.intallationCosts.equipement),
          },
          {
            description: "Date de mise en service",
            value: formatTimestampDay(container.start),
          },
        ],
      });
      index++;
    }
  }

  return (
    <section>
      {/* Page title */}
      <h2 className="h2 font-aspekta mb-4 lg:mb-8 text-2xl sm:text-4xl">
        Spécifications
      </h2>
      {/* Filters */}
      <ul className="flex flex-wrap text-xs sm:text-sm border-b border-grey-400">
        <li className="px-2 sm:px-3 -mb-px">
          <a
            className={`block py-3 font-medium text-grey-100 ${
              activeSection === FacilitySection.Society
                ? "border-b-2 border-green"
                : ""
            }`}
            href="#0"
            onClick={() => setActiveSection(FacilitySection.Society)}
          >
            Société
          </a>
        </li>
        <li className="px-2 sm:px-3 -mb-px">
          <a
            className={`block py-3 font-medium text-grey-1002 ${
              activeSection === FacilitySection.Token
                ? "border-b-2 border-green"
                : ""
            }`}
            href="#0"
            onClick={() => setActiveSection(FacilitySection.Token)}
          >
            Token
          </a>
        </li>
        <li className="px-2 sm:px-3 -mb-px">
          <a
            className={`block py-3 font-medium text-grey-100 ${
              activeSection === FacilitySection.Mining
                ? "border-b-2 border-green"
                : ""
            }`}
            href="#0"
            onClick={() => setActiveSection(FacilitySection.Mining)}
          >
            Mining
          </a>
        </li>
        <li className="px-2 sm:px-3 -mb-px">
          <a
            className={`block py-3 font-medium text-grey-100 ${
              activeSection === FacilitySection.Operating
                ? "border-b-2 border-green"
                : ""
            }`}
            href="#0"
            onClick={() => setActiveSection(FacilitySection.Operating)}
          >
            Exploitation
          </a>
        </li>
      </ul>
      {/* Page content */}
      <div className="space-y-5 sm:space-y-10 mt-8">
        {/* Society cards */}
        {activeSection === FacilitySection.Society && (
          <section>
            {/* Cards */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                itemsSociety.length > 2 ? 3 : 2
              } gap-5`}
            >
              {itemsSociety.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
        {/* Token cards */}
        {activeSection === FacilitySection.Token && (
          <section>
            {/* Cards */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                itemsToken.length > 2 ? 3 : 2
              } gap-5`}
            >
              {itemsToken.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
        {/* Mining cards */}
        {activeSection === FacilitySection.Mining && (
          <section>
            {/* Cards */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                itemsMining.length > 2 ? 3 : 2
              } gap-5`}
            >
              {itemsMining.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
        {/* Operating cards */}
        {activeSection === FacilitySection.Operating && (
          <section>
            {/* Cards */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${
                itemsOperating.length > 2 ? 3 : 2
              } gap-5`}
            >
              {itemsOperating.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
