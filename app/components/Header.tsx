"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = ["Products", "Solutions", "History", "Contact"] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 pt-4">
      <div className="relative flex w-full items-center">
        <a href="#top" className="relative z-10 shrink-0" aria-label="KRISON home">
          <Image
            src="/logo/krison_logo_red.svg"
            alt="KRISON"
            width={212}
            height={74}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-13 lg:gap-14 md:flex">
          <nav className="flex items-center gap-13 lg:gap-14" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="group relative inline-flex items-center py-1 text-sm font-medium tracking-[0.04em] text-asphalt"
              >
                {item}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-krison transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-1 rounded-sm bg-krison px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-krison-deep"
          >
            Get Quote <span aria-hidden>→</span>
          </button>
        </div>

        <div className="ml-auto flex items-center gap-4 md:hidden">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-sm bg-krison px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-krison-deep"
          >
            Get Quote <span aria-hidden>→</span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-asphalt"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-px w-4 bg-asphalt" />
              <span className="block h-px w-4 bg-asphalt" />
              <span className="block h-px w-4 bg-asphalt" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="mt-4 flex flex-col gap-3 md:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="group w-fit text-sm font-medium tracking-[0.04em] text-asphalt"
              onClick={() => setOpen(false)}
            >
              {item}
              <span className="mt-1 block h-px w-0 bg-krison transition-[width] duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
