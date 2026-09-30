import { site } from "@/data/site";
import { ColumnArt } from "@/components/ornaments";

export default function About() {
  const { about } = site;

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 lg:py-20"
    >
      {/* faint line-art watermark */}
      <ColumnArt className="pointer-events-none absolute -right-8 top-8 hidden h-[28rem] w-auto text-navy-100 sm:block" />

      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: heading + portrait slot */}
        <div>
          <span className="eyebrow">Profile</span>
          <h2 className="mt-4 text-3xl font-semibold text-navy-900 sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </div>

          {/* Secondary photo slot — swap for a candid / office photo */}
          <div className="relative mt-7 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-navy-100 bg-navy-50">
            <span className="absolute left-4 top-4 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-gold/60" />
            <span className="absolute bottom-4 right-4 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-gold/60" />
            <div className="flex h-full w-full flex-col items-center justify-center text-center text-navy-300">
              <svg
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider">
                Photo of {site.attorneyName}
              </p>
            </div>
          </div>
        </div>

        {/* Right: bio + facts */}
        <div>
          <div className="space-y-4 text-lg leading-relaxed text-navy-600">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="my-8 hairline" />

          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {f.label}
                </dt>
                <dd className="mt-1.5 text-navy-800">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
