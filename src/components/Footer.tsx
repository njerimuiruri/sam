import { site } from "@/data/site";
import { Monogram } from "@/components/ornaments";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* gold hairline at the very top, like a letterhead rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 text-white">
              <Monogram size={40} />
              <span className="font-serif text-lg font-semibold text-white">
                {site.firmName}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {site.tagline} Clear, thoughtful legal guidance and representation
              focused on your needs.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white"
                >
                  {site.contact.phone}
                </a>
              </li>
              {site.contact.addressLines.map((line) => (
                <li key={line} className="text-navy-300">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-4 text-xs text-navy-400 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {site.firmName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Disclaimer
            </a>
          </div>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-navy-500">
          Attorney advertising. The information on this website is for general
          informational purposes only and is not legal advice. No
          attorney-client relationship is formed by use of this site. Prior
          results do not guarantee a similar outcome.
        </p>
      </div>
    </footer>
  );
}
