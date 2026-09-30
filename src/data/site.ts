/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT
 *  This is the ONE file to edit when the real details are known.
 *  Text marked "Lorem ipsum" is placeholder copy; replace it.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Attorney / firm identity */
  attorneyName: "Sam Njuguna",
  firmName: "Sam & Associates",
  monogram: "S",
  tagline: "Considered counsel. Decisive representation.",
  heroIntro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",

  /** Short credential line under the name */
  credentials:
    "Advocate of the High Court · LL.B, LL.M · Commercial & Civil Practice",

  /** Single-sentence guiding principle, shown in the quote band */
  principle:
    "Every matter deserves the same diligence, discretion, and clear counsel, whatever its size.",

  /** Contact details */
  contact: {
    phone: "+254 743 604821",
    email: "sam@example.com",
    addressLines: [
      "Lorem Ipsum Chambers, 4th Floor",
      "123 Placeholder Avenue",
      "Nairobi, Kenya",
    ],
    hours: "Monday to Friday · 8:30 am to 5:30 pm",
    // Replace with a real Google Maps embed URL for the office
    mapEmbedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.50%2C-0.11%2C51.51&layer=mapnik",
  },

  /** Navigation; anchors match the section ids in page.tsx */
  nav: [
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice" },
    { label: "Approach", href: "#approach" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  /** Trust strip numbers */
  stats: [
    { value: "4+", label: "Years in practice" },
    { value: "20+", label: "Matters handled" },
    { value: "5", label: "Areas of focus" },
    { value: "24 hr", label: "Enquiry response" },
  ],

  /** About / profile section */
  about: {
    heading: "About Sam",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    facts: [
      { label: "Admitted", value: "Lorem Bar Association, 2023" },
      {
        label: "Education",
        value: "LL.B (Hons), LL.M, Placeholder University",
      },
      { label: "Languages", value: "English, Lorem, Ipsum" },
      {
        label: "Memberships",
        value: "Law Society; Chartered Institute of Arbitrators",
      },
    ],
  },

  /** Practice areas: general placeholder set; edit freely */
  practiceAreas: [
    {
      title: "Corporate & Commercial Law",
      blurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      points: [
        "Company formation & governance",
        "Shareholder agreements",
        "Mergers & acquisitions",
        "Regulatory compliance",
      ],
    },
    {
      title: "Contracts & Drafting",
      blurb:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      points: [
        "Commercial contracts",
        "Employment agreements",
        "Service level agreements",
        "Contract review & negotiation",
      ],
    },
    {
      title: "Real Estate & Property",
      blurb:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      points: [
        "Sale & purchase agreements",
        "Leases & tenancies",
        "Land disputes",
        "Property due diligence",
      ],
    },
    {
      title: "Family Law",
      blurb:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
      points: [
        "Divorce & separation",
        "Child custody & support",
        "Prenuptial agreements",
        "Mediation",
      ],
    },
    {
      title: "Civil Litigation & Dispute Resolution",
      blurb:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      points: [
        "Commercial disputes",
        "Debt recovery",
        "Arbitration",
        "Alternative dispute resolution",
      ],
    },
    {
      title: "Estate Planning & Succession",
      blurb:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur.",
      points: [
        "Wills & trusts",
        "Probate & administration",
        "Succession planning",
        "Powers of attorney",
      ],
    },
  ],

  /** Approach / how we work */
  approach: {
    heading: "How we work",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    steps: [
      {
        title: "Consultation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We listen first and map the full picture.",
      },
      {
        title: "Strategy",
        text: "Ut enim ad minim veniam, quis nostrud exercitation. A clear plan with defined outcomes and costs.",
      },
      {
        title: "Representation",
        text: "Duis aute irure dolor in reprehenderit. Diligent execution, kept simple and communicated plainly.",
      },
      {
        title: "Resolution",
        text: "Excepteur sint occaecat cupidatat non proident. We close matters cleanly and keep you informed throughout.",
      },
    ],
  },

  /** Testimonials */
  testimonials: [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "A. Client",
      detail: "Managing Director, Placeholder Ltd.",
    },
    {
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      name: "B. Client",
      detail: "Private client",
    },
    {
      quote:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis.",
      name: "C. Client",
      detail: "Founder, Ipsum Holdings",
    },
  ],

  matterTypes: [
    "Corporate & Commercial",
    "Contracts & Drafting",
    "Real Estate & Property",
    "Family Law",
    "Litigation & Disputes",
    "Estate Planning",
    "Other",
  ],

  social: {
    linkedin: "#",
    x: "#",
  },
};

export type Site = typeof site;
