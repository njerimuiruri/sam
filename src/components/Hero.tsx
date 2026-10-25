import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-20">
      {/* ── Decorative art ─────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* soft blue wash top-right */}
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-accent/10 to-navy-100/40 blur-3xl" />
        {/* large outlined circles */}
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full border border-navy-200/60" />
        <div className="absolute -left-16 top-36 h-56 w-56 rounded-full border border-gold/30" />
        {/* thin grid lines */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 text-navy-200/50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0H0V44" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* oversized monogram watermark */}
        <span className="absolute -bottom-16 left-4 select-none font-serif text-[16rem] font-bold leading-none text-navy-100/70 sm:text-[22rem]">
          {site.monogram}
        </span>
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className="container-x relative grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="eyebrow">{site.firmName}</span>

          {/* <h1 className="mt-4 text-4xl font-semibold leading-[1.06] text-navy-900 sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1> */}

          {/* short rule flourish */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </div>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
            {site.heroIntro}
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Book a consultation
            </a>
            <a href="#practice" className="btn-ghost">
              Explore practice areas
            </a>
          </div>

          {/* <p className="mt-6 text-sm font-medium text-navy-500">
            {site.credentials}
          </p> */}
        </div>

        {/* Right: portrait */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            {/* vertical caption on the frame */}
            <span className="absolute -left-11 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-[0.35em] text-navy-400 lg:block">
              Counsel &amp; Advocacy
            </span>

            {/* accent frames behind photo */}
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-2xl border border-gold/50" />
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-accent" />
            <div className="absolute -bottom-5 -right-5 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-accent" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-100 shadow-2xl shadow-navy-900/10">
              <Image
                src="/img/sam.jpeg"
                alt={`Portrait of ${site.attorneyName}`}
                fill
                priority
                sizes="(max-width: 1024px) 20rem, 30rem"
                className="object-cover"
              />
              {/* subtle navy gradient at the base */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>

            {/* name plate */}
            <div className="absolute -bottom-6 left-6 rounded-xl border border-navy-100 bg-white px-5 py-3 shadow-lg">
              <p className="font-serif text-lg font-semibold text-navy-900">
                {site.attorneyName}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
             {site.credentials}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ────────────────────────────────── */}
      {/* <div className="container-x relative pb-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 sm:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-6 text-center">
              <p className="font-serif text-3xl font-semibold text-navy-900">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
