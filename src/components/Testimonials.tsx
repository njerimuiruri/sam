import { site } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-4 text-3xl font-semibold text-navy-900 sm:text-4xl">
            What clients say
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {site.testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-cream p-8"
            >
              <span className="absolute right-5 top-4 font-serif text-7xl leading-none text-navy-100">
                &rdquo;
              </span>
              <span
                aria-hidden
                className="relative font-serif text-6xl leading-none text-accent/30"
              >
                &ldquo;
              </span>
              <blockquote className="relative -mt-4 flex-1 text-navy-700">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-100 pt-4">
                <p className="font-serif text-lg font-semibold text-navy-900">
                  {t.name}
                </p>
                <p className="text-sm text-navy-500">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-navy-400">
          Testimonials reflect the experience of individual clients. Prior results
          do not guarantee a similar outcome.
        </p>
      </div>
    </section>
  );
}
