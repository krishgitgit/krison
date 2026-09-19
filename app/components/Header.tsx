"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Products", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "History", href: "#about" },
  { label: "Contact", href: "#" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 px-4 pt-4 pb-6 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_12px_28px_rgb(18_20_23_/_0.14)]"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="relative flex h-12 w-full items-center sm:h-14">
        <a
          href="#top"
          className="relative z-10 flex h-12 shrink-0 items-center sm:h-14"
          aria-label="KRISON home"
        >
          <Image
            src="/logo/krison_logo_red.svg"
            alt="KRISON"
            width={212}
            height={74}
            priority
            className="h-[3.3rem] w-auto sm:h-[3.85rem]"
          />
        </a>

        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-13 lg:gap-14 md:flex">
          <nav className="flex items-center gap-13 lg:gap-14" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative inline-flex items-center py-1 text-[0.9625rem] font-medium tracking-[0.04em] text-asphalt"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-krison transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-1 rounded-sm bg-krison px-[1.65rem] py-3 text-[0.9625rem] font-medium text-white transition-colors duration-200 hover:bg-krison-deep cursor-pointer"
          >
            Get Quote <span aria-hidden>→</span>
          </button>
        </div>

        <div className="ml-auto flex items-center gap-4 md:hidden">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-sm bg-krison px-[1.375rem] py-2.5 text-[0.9625rem] font-medium text-white transition-colors duration-200 hover:bg-krison-deep cursor-pointer"
          >
            Get Quote <span aria-hidden>→</span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-asphalt cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-[0.4125rem]" aria-hidden>
              <span className="block h-px w-[1.1rem] bg-asphalt" />
              <span className="block h-px w-[1.1rem] bg-asphalt" />
              <span className="block h-px w-[1.1rem] bg-asphalt" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="mt-4 flex flex-col gap-3 md:hidden bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group w-fit text-[0.9625rem] font-medium tracking-[0.04em] text-asphalt"
              onClick={() => setOpen(false)}
            >
              {item.label}
              <span className="mt-1 block h-px w-0 bg-krison transition-[width] duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
