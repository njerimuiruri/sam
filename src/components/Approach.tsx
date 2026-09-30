import { site } from "@/data/site";
import { ScalesArt } from "@/components/ornaments";

export default function Approach() {
  const { approach } = site;

  return (
    <section
      id="approach"
      className="relative scroll-mt-24 overflow-hidden bg-navy-900 py-16 text-white lg:py-20"
    >
      {/* faint line-art watermarks */}
      <ScalesArt className="pointer-events-none absolute -left-16 bottom-0 h-72 w-auto text-white/[0.06]" />
      <ScalesArt className="pointer-events-none absolute -right-20 -top-10 h-80 w-auto text-white/[0.04]" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="eyebrow !text-accent-light">Our Approach</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {approach.heading}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </div>
          <p className="mt-4 text-lg leading-relaxed text-navy-200">
            {approach.intro}
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-full border border-white/20 font-serif text-lg font-semibold text-accent-light">
                  {i + 1}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
