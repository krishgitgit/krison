import Header from "./components/Header";
import ScrollStage from "./components/ScrollStage";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />

      <main id="top" className="flex-1">
        <ScrollStage>
        <section className="relative min-h-[100svh] overflow-hidden bg-off-white text-asphalt">
          {/* eslint-disable-next-line @next/next/no-img-element -- serve KIHERO.webp directly so file replacements are not stuck in Next image cache */}
          <img
            src="/assets/KIHERO.webp?v=20260913-2116"
            alt="KRISON road-marking machine applying a white line on a bridge road with city skyline beyond"
            className="absolute inset-0 h-full w-full object-cover object-[42%_70%] sm:object-[62%_55%] lg:object-[68%_center]"
          />

          <div className="hero-copy relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-5 pb-10 pt-24 sm:px-8 sm:pt-28 lg:px-8">
            <div className="max-w-[20rem] sm:max-w-md lg:max-w-lg">
              <h1 className="hero-rise hero-rise-1 font-display text-[clamp(3.1rem,8.5vw,5.75rem)] leading-[0.9] font-normal tracking-[-0.03em] text-balance">
                <span className="block">Built for</span>
                <span className="block text-krison italic">Straighter</span>
                <span className="block text-asphalt">Tomorrows.</span>
              </h1>
              <p className="hero-rise hero-rise-2 mt-7 max-w-[36ch] text-[1.0625rem] leading-[1.6] font-normal text-asphalt/80 sm:text-lg sm:leading-[1.65]">
                KRISON manufactures high-performance road-marking equipment
                designed for demanding pavement marking applications.
              </p>
              <div className="hero-rise hero-rise-3 mt-9 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-sm bg-krison px-8 py-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-krison-deep"
                >
                  Explore Products
                  <span aria-hidden>→</span>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-sm border border-asphalt/50 bg-transparent px-8 py-4 text-[15px] font-medium text-asphalt transition-colors duration-200 hover:border-asphalt"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </section>
        </ScrollStage>
      </main>
    </div>
  );
}
