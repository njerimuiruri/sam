import { site } from "@/data/site";

/** One line icon per practice area, matched by position to site.practiceAreas. */
const icons = [
  // Corporate / commercial — building
  "M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 10h.01M15 10h.01M9 13h.01M15 13h.01",
  // Contracts / drafting — document with pen
  "M8 3h6l4 4v8M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M14 3v4h4M9 9h4M9 13h2M13.5 19l6-6 2 2-6 6H13.5v-2Z",
  // Real estate — house with key
  "M3 11l9-8 9 8M5 10v10h6v-6h2v6h6V10M15 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 2v4",
  // Family — two people
  "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 8a2.5 2.5 0 1 0 0-5M21 20c0-2.5-1.5-4.7-3.7-5.6",
  // Litigation — gavel
  "M14 4l6 6M12 6l6 6M8.5 9.5l6 6M3 21l7-7M9.5 15.5l-6-6a2 2 0 0 1 0-2.8l3.7-3.7a2 2 0 0 1 2.8 0l6 6a2 2 0 0 1 0 2.8l-3.7 3.7a2 2 0 0 1-2.8 0Z",
  // Estate planning — shield / seal
  "M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3ZM9 12l2 2 4-4",
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="scroll-mt-24 bg-cream py-16 lg:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Practice Areas</span>
          <h2 className="mt-4 text-3xl font-semibold text-navy-900 sm:text-4xl">
            Focused expertise across the matters that matter most
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          </div>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">
            Clear legal guidance across business, property, family, dispute, and
            succession matters.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.practiceAreas.map((area, i) => (
            <article
              key={area.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-navy-900/5"
            >
              {/* hover top accent */}
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-gold transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-navy-100 bg-cream text-accent transition-colors group-hover:border-accent/30">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={icons[i % icons.length]} />
                  </svg>
                </span>
                <span className="font-serif text-sm font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-navy-900">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {area.blurb}
              </p>

              <ul className="mt-5 space-y-2 border-t border-navy-50 pt-5">
                {area.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-navy-700"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-none text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.8a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
