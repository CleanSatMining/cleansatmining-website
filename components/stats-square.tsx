export default function Stats() {
  return (
    <section className="relative">
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-grey-800 to-grey-600 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-16">
          <div
            className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-5 text-center"
            data-aos-id-stats
          >
            {/* 1st item */}
            <div
              className="bg-grey-800 py-8 px-1 shadow-2xl text-green"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                25 BTC
              </div>
              <div className="text-grey-300">Bitcoin minés</div>
            </div>
            {/* 2nd item */}
            <div
              className="bg-grey-800 py-8 px-1 shadow-2xl text-green"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="100"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                $10M
              </div>
              <div className="text-grey-300">Levés en USD</div>
            </div>
            {/* 3rd item */}
            <div
              className="bg-grey-800 py-8 px-1 shadow-2xl text-green"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="200"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                82.6 EH/s
              </div>
              <div className="text-grey-300">Hashrate</div>
            </div>
            {/* 4th item */}
            <div
              className="bg-grey-800 py-8 px-1 shadow-2xl text-green"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="300"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                8
              </div>
              <div className="text-grey-300">Sites de minage</div>
            </div>
            {/* 5th item */}
            <div
              className="bg-grey-800 py-8 px-1 shadow-2xl text-green"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="300"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1">
                75%
              </div>
              <div className="text-grey-300">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
