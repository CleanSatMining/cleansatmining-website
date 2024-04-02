import Counter from "@/components/tools/features/counter";

interface StatProps {
  number: number;
  prefix: string;
  suffix: string;
  text: string;
}

export default function Stats() {
  const stats: StatProps[] = [
    {
      number: 25.3,
      prefix: "",
      suffix: " BTC",
      text: "Bitcoin minés.",
    },
    {
      number: 1.44,
      prefix: "$",
      suffix: "M+",
      text: "Levée en USD.",
    },
    {
      number: 19.2,
      prefix: "",
      suffix: " EH/s",
      text: "Hashrate opérationnel.",
    },
    {
      number: 75,
      prefix: "",
      suffix: "%",
      text: "Uptime des machines.",
    },
  ];

  return (
    <>
      <section className="relative">
        {/* Bg gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-grey-800 to-transparent opacity-60 h-[10rem] pointer-events-none -z-10"
          aria-hidden="true"
        />
        {/* Counters */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-sm mx-auto grid grid-cols-2 gap-12 sm:grid-cols-2 md:grid-cols-4 md:-mx-5 md:gap-0 items-start md:max-w-none">
            {stats.map((stat, index) => (
              <div
                key={index + stat.number}
                className="relative text-center md:px-5"
              >
                <h4 className="font-inter-tight text-xl sm:text-2xl md:text-3xl font-bold tabular-nums mb-2">
                  {stat.prefix}
                  <Counter number={stat.number} />
                  {stat.suffix}
                </h4>
                <p className="text-sm text-zinc-500">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
