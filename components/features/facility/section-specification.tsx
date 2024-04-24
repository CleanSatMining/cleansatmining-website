import ProjectCard, { Item } from "@/components/ui/features/project-card";

import Icon02 from "@/public/images/icons/project-icon-02.svg";
import Icon03 from "@/public/images/icons/project-icon-03.svg";
import Icon04 from "@/public/images/icons/project-icon-04.svg";
import Icon05 from "@/public/images/icons/project-icon-05.svg";
import Icon01 from "@/public/images/icons/project-icon-01.svg";
import Icon06 from "@/public/images/icons/project-icon-06.svg";
import Icon07 from "@/public/images/icons/project-icon-07.svg";
import Icon08 from "@/public/images/icons/project-icon-08.svg";
import { CleanSatMiningFacility } from "@/models/Facility";
import { formatTimestampDay, formatUsd, formatAddress } from "@/utils/format";
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

export default function Section({ facility, slug }: SectionProps) {
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
          icon: Icon02,
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
              description: "Adresse Bitcoin",
              value: formatAddress(facilityData.vault.xpub),
              link: `https://www.blockchain.com/explorer/assets/btc/xpub/${facilityData.vault.xpub}`,
            },
          ],
        },
        {
          id: 2,
          icon: Icon02,
          slug: "#0",
          title: "Levée de fonds",
          data: facilityData.fundraisings.map((fundraising) => ({
            description: formatTimestampDay(fundraising.date),
            value: `${formatUsd(fundraising.amount)}`,
          })),
          description: formatFacilityFundraisingToM(
            getFacilityFundraisingUsd(facilityData)
          ),
        },
        {
          id: 3,
          icon: Icon05,
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
          ],
        },
      ]
    : [];

  if (facilityData && facilityData.mining.safety !== "") {
    itemsSociety.push({
      id: 4,
      icon: Icon05,
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

  const itemsMining: Item[] = facilityData
    ? [
        {
          id: 0,
          icon: Icon03,
          slug: "#0",
          title: "Containeurs",
          data: [
            {
              description: "Nombre de machines",
              value: facilityData.mining.containers
                .reduce((acc, container) => acc + container.units, 0)
                .toString(),
            },
            {
              description: "Puissance de calcul",
              value: formatFacilityHashrateTHsToPHs(
                getFacilityHashrateTHs(facilityData)
              ),
            },
            {
              description: "Puissance électrique",
              value: formatFacilityPowerWToMW(getFacilityPowerW(facilityData)),
            },
            {
              description: "Type de refroidissement",
              value: facilityData.mining.cooling,
            },
          ],
        },
        {
          id: 1,
          icon: Icon04,
          slug: "#0",
          title: "Storybook",
          data: [{ description: "lieu", value: "Lieu" }],
        },
        {
          id: 2,
          icon: Icon05,
          slug: "#0",
          title: "Knowledge AI",
          data: [{ description: "lieu", value: "Lieu" }],
        },
        {
          id: 3,
          icon: Icon06,
          slug: "#0",
          title: "Security Frame",
          data: [{ description: "lieu", value: "Lieu" }],
        },
        {
          id: 4,
          icon: Icon07,
          slug: "#0",
          title: "KanbanOK",
          data: [{ description: "lieu", value: "Lieu" }],
        },
        {
          id: 5,
          icon: Icon08,
          slug: "#0",
          title: "T Analytics",
          data: [{ description: "lieu", value: "Lieu" }],
        },
      ]
    : [];

  return (
    <section>
      {/* Page title */}
      <h2 className="h2 font-aspekta mb-12">Spécifications</h2>
      {/* Page content */}
      <div className="space-y-10">
        {/* Side Hustles cards */}
        <section>
          <h2 className="font-aspekta text-xl font-[650] mb-6">La société</h2>
          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {itemsSociety.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        {/* Client Projects cards */}
        <section>
          <h2 className="font-aspekta text-xl font-[650] mb-6">Le Mining</h2>
          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {itemsMining.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
