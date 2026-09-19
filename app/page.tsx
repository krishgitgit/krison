import Header from "./components/Header";
import ScrollStage from "./components/ScrollStage";
import TrustMarquee from "./components/TrustMarquee";
import AboutStage from "./components/AboutStage";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />

      <main id="top" className="flex-1">
        {/* Landing Page (Hero Section) */}
        <section className="relative min-h-[100svh] overflow-hidden bg-off-white text-asphalt flex flex-col justify-between">
          {/* Landing page background image */}
          {/* eslint-disable-next-line @next/next/no-img-element -- serve KIHERO.webp directly so file replacements are not stuck in Next image cache */}
          <img
            src="/assets/KIHERO.webp?v=20260919"
            alt="KRISON road-marking machine applying a white line on a bridge road with city skyline beyond"
            className="absolute inset-0 h-full w-full object-cover object-[42%_70%] sm:object-[62%_55%] lg:object-[68%_center]"
          />

          {/* Subtle boundary fade right at the bottom edge of the image */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 md:h-24 z-[5]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(244, 243, 240, 0) 0%, rgba(244, 243, 240, 0.25) 45%, rgba(244, 243, 240, 0.7) 75%, #f4f3f0 100%)",
            }}
            aria-hidden="true"
          />

          {/* Hero Copy — Horizontally Centered */}
          <div className="hero-copy relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col items-center px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-8">
            <div className="mx-auto flex flex-col items-center text-center max-w-[24rem] sm:max-w-xl lg:max-w-2xl">
              <h1 className="hero-rise hero-rise-1 font-display text-[clamp(3.1rem,8.5vw,5.75rem)] leading-[0.9] font-normal tracking-[-0.03em] text-balance text-white text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
                <span className="block">Built for</span>
                <span className="block italic">Safer</span>
                <span className="block">Tomorrows.</span>
              </h1>
              <p className="font-caption hero-rise hero-rise-2 mt-7 text-[15px] leading-snug text-white text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)]">
                <span className="block font-medium tracking-[0.2em] uppercase text-white">
                  ROAD-MARKING EQUIPMENT
                </span>
                <span className="mt-1.5 block font-normal tracking-[0.06em] text-white">
                  Engineered for precision. Built for demanding roads.
                </span>
              </p>
              <div className="hero-rise hero-rise-3 mt-7 flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-sm bg-krison px-8 py-4 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-krison-deep cursor-pointer"
                >
                  Explore Products
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Stage: Brand philosophy statement on white background */}
        <ScrollStage />

        {/* Credentials & Trust Marquee */}
        <TrustMarquee />

        {/* About Us Stage */}
        <AboutStage />
      </main>
    </div>
  );
}
