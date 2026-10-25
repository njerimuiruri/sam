import { site } from "@/data/site";
import { Monogram } from "@/components/ornaments";

export default function QuoteBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-14 text-white lg:py-16">
      {/* faint framing lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 inset-y-4 rounded-2xl border border-white/10"
      />
      <div className="container-x relative flex flex-col items-center text-center">
        <Monogram size={40} className="text-accent-light" />
        <span
          aria-hidden
          className="mt-4 font-serif text-5xl leading-none text-gold/60"
        >
          &ldquo;
        </span>
        <p className="mt-2 max-w-3xl font-serif text-2xl font-medium leading-snug text-navy-50 sm:text-[1.75rem]">
          {site.principle}
        </p>
        {/* <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-navy-300">
          {site.attorneyName}
        </p> */}
      </div>
    </section>
  );
}
