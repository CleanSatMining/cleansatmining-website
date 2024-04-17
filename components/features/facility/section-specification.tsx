import ProjectCard from "@/components/ui/features/project-card";

import Icon02 from "@/public/images/icons/project-icon-02.svg";
import Icon03 from "@/public/images/icons/project-icon-03.svg";
import Icon04 from "@/public/images/icons/project-icon-04.svg";
import Icon05 from "@/public/images/icons/project-icon-05.svg";
import Icon01 from "@/public/images/icons/project-icon-01.svg";
import Icon06 from "@/public/images/icons/project-icon-06.svg";
import Icon07 from "@/public/images/icons/project-icon-07.svg";
import Icon08 from "@/public/images/icons/project-icon-08.svg";

export default function Section() {
  const items01 = [
    {
      id: 0,
      icon: Icon01,
      slug: "#0",
      title: "Container Tinkering",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: true,
    },
    {
      id: 0,
      icon: Icon02,
      slug: "#0",
      title: "Engine Prototypes",
      excerpt: "Solutions for running containers locally and remotely.",
      openSource: false,
    },
  ];

  const items02 = [
    {
      id: 0,
      icon: Icon03,
      slug: "#0",
      title: "PixelOkay",
      excerpt: "Code assets and services for people, with people.",
      openSource: false,
    },
    {
      id: 1,
      icon: Icon04,
      slug: "#0",
      title: "Storybook",
      excerpt: "Storybook helps you develop, test, and document UIs.",
      openSource: false,
    },
    {
      id: 2,
      icon: Icon05,
      slug: "#0",
      title: "Knowledge AI",
      excerpt:
        "Instantly answers all questions based on your internal knowledge bases.",
      openSource: false,
    },
    {
      id: 3,
      icon: Icon06,
      slug: "#0",
      title: "Security Frame",
      excerpt: "Automated security compliance for your business.",
      openSource: false,
    },
    {
      id: 4,
      icon: Icon07,
      slug: "#0",
      title: "KanbanOK",
      excerpt: "The most powerful kanban board ever invented.",
      openSource: false,
    },
    {
      id: 5,
      icon: Icon08,
      slug: "#0",
      title: "T Analytics",
      excerpt: "Make your Twitter analytics pretty and easy to share.",
      openSource: false,
    },
  ];

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
            {items01.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        {/* Client Projects cards */}
        <section>
          <h2 className="font-aspekta text-xl font-[650] mb-6">Le Mining</h2>
          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {items02.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
