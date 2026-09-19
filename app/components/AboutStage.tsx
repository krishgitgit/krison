"use client";

import Image from "next/image";
import { useState } from "react";

const ACCORDION_ITEMS = [
  {
    id: "applicators",
    title: "Thermoplastic Applicators",
    content:
      "Precision manual and automatic line marking machines engineered for uniform film thickness, sharp edge definition, and calibrated glass bead dispersion across highway corridors and urban roads.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    id: "preheaters",
    title: "High-Capacity Pre-Heaters",
    content:
      "Industrial jacketed melting boilers with continuous hydraulic agitation and calibrated thermal distribution for rapid, homogeneous thermoplastic heating and high-output roadwork operations.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c-.043.766.275 1.54.879 2.121z"
        />
      </svg>
    ),
  },
  {
    id: "quality",
    title: "Quality & Global Standards",
    content:
      "Manufactured under certified ISO 9001:2008 quality management protocols, recognized by IAF, JAS-ANZ, and CCL international accreditations for demanding civil specifications.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: "durability",
    title: "Rugged Field Durability",
    content:
      "Reinforced structural steel chassis and heavy-gauge components engineered to endure extreme ambient temperatures, abrasive road aggregates, and tough job-site construction conditions.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function AboutStage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="about-us"
      aria-label="About Us"
      className="relative z-30 w-full overflow-hidden"
      style={{
        backgroundColor: "#4169e1",
      }}
    >
      {/* Seamless atmospheric blend from off-white marquee into Royal Blue (#4169e1) */}
      <div
        className="w-full h-20 sm:h-28 md:h-36 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #f4f3f0 0%, #dfe7f7 18%, #bfd0f3 40%, #8fafee 65%, #628be7 85%, #4169e1 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main Full-Width Container — Expansive canvas with symmetrical breathing room from boundary */}
      <div className="relative mx-auto w-full max-w-[1760px] 2xl:max-w-[1920px] px-6 sm:px-10 lg:px-14 xl:px-20 pt-8 sm:pt-10 lg:pt-12 pb-20 sm:pb-28 lg:pb-36 font-ios">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* LEFT COLUMN: Video Player Placeholder & Subtle Black-Bordered Stats Card */}
          <div className="flex flex-col">
            {/* 1. Video Player Placeholder */}
            <div
              className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:rounded-3xl"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 10px 32px -4px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Machine Poster Visual */}
              <Image
                src="/assets/KIHERO.webp"
                alt="KRISON road marking machinery in operation"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Contrast Film Overlay */}
              <div className="absolute inset-0 bg-slate-950/25 transition-opacity duration-300 group-hover:opacity-85" />

              {/* Centered Circular Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play KRISON road-marking equipment demonstration video"
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white transition-all duration-300 ease-out group-hover:scale-108 active:scale-95 cursor-pointer"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.07)",
                    boxShadow: "0 8px 24px -2px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <svg
                    className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5 text-krison"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5.14v14.72a1 1 0 001.52.85l11.4-7.36a1 1 0 000-1.7L9.52 4.29A1 1 0 008 5.14z" />
                  </svg>
                </button>
              </div>

              {/* Bottom-Left Subtitle Overlay Pill */}
              <div
                className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 max-w-[85%] sm:max-w-[78%] rounded-xl bg-black/75 px-4 py-2.5 backdrop-blur-md"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.25)",
                }}
              >
                <p className="text-xs sm:text-sm font-normal text-white/95 leading-snug tracking-normal">
                  Precision road marking machinery in operation — KRISON Engineering
                </p>
              </div>
            </div>

            {/* 2. Stats Card — Frosted Multi-Tonal Blue with Subtle Blackish Boundary */}
            <div
              className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl p-6 sm:p-7 xl:p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.82) 0%, rgba(220, 239, 254, 0.74) 35%, rgba(182, 219, 248, 0.65) 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow:
                  "0 6px 24px -4px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
              }}
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                {/* Metric 1 */}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] text-slate-950 leading-none">
                    18+
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-slate-800/85 leading-snug">
                    Countries Globally Deployed
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] text-slate-950 leading-none">
                    4+
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-slate-800/85 leading-snug">
                    Quality Accreditations
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] text-slate-950 leading-none">
                    100%
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-slate-800/85 leading-snug">
                    Pavement &amp; Road Focus
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Eyebrow, iOS-Style Title, Narrative & Frosted Blue Feature Cards */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-krison" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-slate-800/80">
                ABOUT KRISON
              </p>
            </div>

            {/* Display Headline — Roman serif base paired with Italian italic display serif highlights */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-normal tracking-[-0.02em] text-slate-950 leading-[1.14]">
              Engineers{" "}
              <span className="text-krison italic">
                Precision Machinery
              </span>{" "}
              &amp; Delivers Reliable{" "}
              <span className="text-krison italic">
                Road-Marking Technology
              </span>
            </h2>

            {/* Editorial Narrative Paragraph */}
            <p className="mt-4 sm:mt-5 mb-7 sm:mb-8 text-base sm:text-lg text-slate-800/85 leading-relaxed font-normal max-w-2xl">
              KRISON manufactures and exports high-performance road-marking machinery engineered
              for rigorous pavement marking applications. Built for precision line definition and
              operational reliability, our thermoplastic applicators and pre-heaters empower
              contractors to deliver durable, compliant road infrastructure across demanding
              environments worldwide.
            </p>

            {/* 4 Feature Accordion Cards — Frosted Multi-Shade Blue with Subtle Blackish Boundary */}
            <div className="space-y-3.5 sm:space-y-4">
              {ACCORDION_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-2xl transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(225, 241, 254, 0.9) 45%, rgba(195, 225, 250, 0.82) 100%)"
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(232, 244, 254, 0.8) 45%, rgba(206, 230, 250, 0.7) 100%)",
                      backdropFilter: "blur(18px)",
                      WebkitBackdropFilter: "blur(18px)",
                      border: isOpen
                        ? "1px solid rgba(0, 0, 0, 0.12)"
                        : "1px solid rgba(0, 0, 0, 0.08)",
                      boxShadow: isOpen
                        ? "0 8px 24px -4px rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.03)"
                        : "0 4px 18px -2px rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-4 sm:p-5 text-left transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`accordion-desc-${item.id}`}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        {/* Jewel Icon Pill */}
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-krison transition-transform duration-200"
                          style={{
                            background:
                              "linear-gradient(135deg, #ffffff 0%, #e0effa 100%)",
                            border: "1px solid rgba(0, 0, 0, 0.06)",
                            boxShadow: "0 2px 6px -1px rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          {item.icon}
                        </div>
                        <span className="text-base sm:text-lg font-medium text-slate-900 tracking-[-0.012em]">
                          {item.title}
                        </span>
                      </div>

                      {/* Slender iOS Chevron */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center text-slate-500 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-180 text-krison" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.75}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`accordion-desc-${item.id}`}
                        className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-700/90 leading-relaxed pl-[4.5rem]"
                      >
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
