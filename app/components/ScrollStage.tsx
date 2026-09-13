"use client";

import { useEffect, useRef } from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeOutBack(t: number) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
}

export default function ScrollStage({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const displaceRef = useRef<SVGFEDisplacementMapElement>(null);
  const reduceRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setReduce = () => {
      reduceRef.current = media.matches;
    };
    setReduce();
    media.addEventListener("change", setReduce);

    let frame = 0;
    const apply = () => {
      const track = trackRef.current;
      if (!track) return;
      const total = track.offsetHeight - window.innerHeight;
      const p = clamp(-track.getBoundingClientRect().top / Math.max(total, 1));
      const reduced = reduceRef.current;

      document.documentElement.style.setProperty("--krison-p", p.toFixed(4));
      document.documentElement.style.setProperty("--krison-nav", String(p));

      const displace = displaceRef.current;
      if (displace) {
        displace.setAttribute("scale", (12 + p * 88).toFixed(1));
      }

      const cover = coverRef.current;
      if (cover) {
        cover.style.opacity = clamp((p - 0.55) / 0.35).toFixed(3);
      }

      const about = aboutRef.current;
      if (about) {
        const reveal = clamp((p - 0.38) / 0.22);
        const motion = clamp((p - 0.4) / 0.45);
        const y = reduced ? 0 : (1 - easeOutBack(motion)) * 36;
        about.style.opacity = reveal.toFixed(3);
        about.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      media.removeEventListener("change", setReduce);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      document.documentElement.style.setProperty("--krison-p", "0");
      document.documentElement.style.setProperty("--krison-nav", "0");
    };
  }, []);

  return (
    <div ref={trackRef} className="relative h-[220vh]">
      <div className="scroll-sticky sticky top-0 h-[100svh] overflow-hidden">
        <div className="scroll-hero absolute inset-0">{children}</div>
        <div className="liquid-mass pointer-events-none absolute z-20" aria-hidden>
          <svg className="absolute h-0 w-0" aria-hidden>
            <filter
              id="krison-gas"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.016"
                numOctaves="3"
                seed="7"
                result="noise"
              />
              <feDisplacementMap
                ref={displaceRef}
                in="SourceGraphic"
                in2="noise"
                scale="12"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
          <span className="liquid-mass-core absolute bg-off-white" />
        </div>
        <div
          ref={coverRef}
          className="pointer-events-none absolute inset-0 z-[21] bg-off-white"
          style={{ opacity: 0 }}
          aria-hidden
        />
        <div
          id="about"
          ref={aboutRef}
          className="pointer-events-none absolute inset-0 z-30 flex items-center px-5 sm:px-8 lg:px-8"
          style={{ opacity: 0, transform: "translate3d(0, 36px, 0)" }}
        >
          <div className="mx-auto w-full max-w-6xl text-center">
            <h2 className="font-display mx-auto max-w-5xl text-center text-[clamp(2.75rem,7.2vw,6.75rem)] leading-[0.95] font-normal tracking-[-0.03em] text-[#141c18]">
              <span className="block">
                We engineer the{" "}
                <span className="text-krison italic">precision</span>
              </span>
              <span className="block">
                that keeps{" "}
                <span className="text-krison italic">every road</span>
              </span>
              <span className="block">moving forward.</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
