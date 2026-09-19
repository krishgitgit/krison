"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const CERTIFICATES = [
  {
    id: "cert-ccl",
    src: "/assets/cert_ccl.svg",
    alt: "CCL Quality Management Certification",
    width: 170,
    height: 60,
  },
  {
    id: "cert-jas-anz",
    src: "/assets/cert_jas_anz.svg",
    alt: "JAS-ANZ Joint Accreditation System of Australia and New Zealand",
    width: 190,
    height: 60,
  },
  {
    id: "cert-iaf",
    src: "/assets/certificate1.png",
    alt: "IAF Member of Multilateral Recognition Arrangement",
    width: 156,
    height: 60,
  },
  {
    id: "cert-iso9001",
    src: "/assets/cert_iso9001.svg",
    alt: "ISO 9001:2008 Quality Management System Certified",
    width: 205,
    height: 60,
  },
] as const;

const COUNTRIES = [
  "India",
  "Saudi Arabia",
  "Dubai",
  "Oman",
  "Abu Dhabi",
  "Bahrain",
  "Sharjah",
  "Ethiopia",
  "Kenya",
  "Lagos",
  "Ghana",
  "Denmark",
  "West Indies",
  "Malawi",
  "Tanzania",
  "Guyana",
  "Sri Lanka",
  "Bangladesh",
] as const;

// 4 distinct certification marks repeated 4 times = 16 marks per half (gapless infinite loop)
const CERTIFICATE_SET = [
  ...CERTIFICATES,
  ...CERTIFICATES,
  ...CERTIFICATES,
  ...CERTIFICATES,
];

// 18 countries repeated 2 times per half
const COUNTRY_SET = [...COUNTRIES, ...COUNTRIES];

export default function TrustMarquee() {
  const row1TrackRef = useRef<HTMLDivElement>(null);
  const row2TrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Constant physical velocity for smooth, synchronized movement across both rows
    const TARGET_SPEED_PPS = 38;

    const syncSpeeds = () => {
      if (row1TrackRef.current) {
        const halfWidth1 = row1TrackRef.current.scrollWidth / 2;
        const duration1 = Math.max(halfWidth1 / TARGET_SPEED_PPS, 15);
        row1TrackRef.current.style.setProperty(
          "--marquee-duration",
          `${duration1.toFixed(2)}s`
        );
      }

      if (row2TrackRef.current) {
        const halfWidth2 = row2TrackRef.current.scrollWidth / 2;
        const duration2 = Math.max(halfWidth2 / TARGET_SPEED_PPS, 15);
        row2TrackRef.current.style.setProperty(
          "--marquee-duration",
          `${duration2.toFixed(2)}s`
        );
      }
    };

    syncSpeeds();

    window.addEventListener("resize", syncSpeeds);
    const timeout = setTimeout(syncSpeeds, 300);

    return () => {
      window.removeEventListener("resize", syncSpeeds);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="credentials"
      aria-label="Accreditations and global presence"
      className="relative z-30 w-full overflow-hidden bg-off-white pt-20 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12"
    >
      {/* Universal Big Header in Roman Serif with extending horizontal divider lines */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          <span className="h-px flex-1 bg-black/[0.12]" aria-hidden="true" />
          <h2 className="font-display text-[clamp(1.85rem,4.5vw,3.85rem)] font-normal leading-[1.1] tracking-[-0.025em] text-asphalt text-center">
            &ldquo;trusted by{" "}
            <span className="text-krison italic">road contractors</span> all around the{" "}
            <span className="text-krison italic">globe</span>&rdquo;
          </h2>
          <span className="h-px flex-1 bg-black/[0.12]" aria-hidden="true" />
        </div>
      </div>

      {/* Dual Marquee Container with compact gap between Row 1 and Row 2 */}
      <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8">
        {/* ROW 1: Certification Marks (Left -> Right) */}
        <div
          className="group relative w-full overflow-hidden marquee-mask py-2"
          tabIndex={0}
          aria-label="Certification marks marquee: moving left to right"
        >
          <div
            ref={row1TrackRef}
            className="flex w-max items-center gap-14 sm:gap-20 md:gap-24 animate-marquee-ltr group-hover:[animation-play-state:paused]"
            style={{ "--marquee-duration": "40s" } as React.CSSProperties}
          >
            {/* First Set */}
            <div className="flex shrink-0 items-center gap-14 sm:gap-20 md:gap-24">
              {CERTIFICATE_SET.map((cert, index) => (
                <div
                  key={`r1-a-${cert.id}-${index}`}
                  className="flex shrink-0 items-center justify-center opacity-85 transition-opacity duration-300 hover:opacity-100"
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={cert.width}
                    height={cert.height}
                    className="h-9 sm:h-11 md:h-12 w-auto object-contain"
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>

            {/* Loop Duplicate */}
            <div
              className="flex shrink-0 items-center gap-14 sm:gap-20 md:gap-24"
              aria-hidden="true"
            >
              {CERTIFICATE_SET.map((cert, index) => (
                <div
                  key={`r1-b-${cert.id}-${index}`}
                  className="flex shrink-0 items-center justify-center opacity-85 transition-opacity duration-300 hover:opacity-100"
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={cert.width}
                    height={cert.height}
                    className="h-9 sm:h-11 md:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: Countries (Right -> Left, under Row 1 with less gap, no separate header) */}
        <div
          className="group relative w-full overflow-hidden marquee-mask py-2"
          tabIndex={0}
          aria-label="Country deployment marquee: moving right to left"
        >
          <div
            ref={row2TrackRef}
            className="flex w-max items-center gap-7 sm:gap-10 animate-marquee-rtl group-hover:[animation-play-state:paused]"
            style={{ "--marquee-duration": "40s" } as React.CSSProperties}
          >
            {/* First Set */}
            <div className="flex shrink-0 items-center gap-7 sm:gap-10">
              {COUNTRY_SET.map((country, index) => (
                <div
                  key={`r2-a-${country}-${index}`}
                  className="inline-flex shrink-0 items-center gap-7 sm:gap-10"
                >
                  <span className="font-sans text-[12.5px] sm:text-[13.5px] font-medium tracking-[0.12em] uppercase text-asphalt/80 hover:text-krison transition-colors duration-200 whitespace-nowrap">
                    {country}
                  </span>
                  <span
                    className="h-1 w-1 rounded-full bg-krison/60 shrink-0"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            {/* Loop Duplicate */}
            <div
              className="flex shrink-0 items-center gap-7 sm:gap-10"
              aria-hidden="true"
            >
              {COUNTRY_SET.map((country, index) => (
                <div
                  key={`r2-b-${country}-${index}`}
                  className="inline-flex shrink-0 items-center gap-7 sm:gap-10"
                >
                  <span className="font-sans text-[12.5px] sm:text-[13.5px] font-medium tracking-[0.12em] uppercase text-asphalt/80 hover:text-krison transition-colors duration-200 whitespace-nowrap">
                    {country}
                  </span>
                  <span
                    className="h-1 w-1 rounded-full bg-krison/60 shrink-0"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
