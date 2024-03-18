export default function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-16 border-b border-grey-400">
          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">
              Integrated workflow designed for product teams
            </h1>
            <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div> */}

          <div className="grid md:grid-cols-5 bg-grey-700 divide-y md:divide-y-0 md:divide-x divide-grey-500 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-green mb-2"
                data-aos="fade-up"
              >
                25 BTC
              </div>
              <div
                className="text-lg text-grey-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Bitcoin minés
              </div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-green mb-2"
                data-aos="fade-up"
              >
                $10M
              </div>
              <div
                className="text-lg text-grey-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Levée en USD
              </div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-green mb-2"
                data-aos="fade-up"
              >
                19.2 EH/s
              </div>
              <div
                className="text-lg text-grey-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Hashrate
              </div>
            </div>
            {/* 4rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-green mb-2"
                data-aos="fade-up"
              >
                8
              </div>
              <div
                className="text-lg text-grey-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Sites de minage
              </div>
            </div>
            {/* 5rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div
                className="text-4xl font-bold leading-tight tracking-tighter text-green mb-2"
                data-aos="fade-up"
              >
                75%
              </div>
              <div
                className="text-lg text-grey-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Uptime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
