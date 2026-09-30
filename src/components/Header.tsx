"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Monogram } from "@/components/ornaments";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-3 text-navy-900 transition-colors group-hover:text-accent"
        >
          <Monogram size={40} />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-navy-900">
              {site.firmName}
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-400">
              Advocates &amp; Legal Counsel
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-700 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            Book a consultation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-navy-200 text-navy-900 md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-0.5 w-4 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-current transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-4 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy-100 bg-white md:hidden">
          <nav className="container-x flex flex-col py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy-50 py-3 text-sm font-medium text-navy-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              Book a consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
