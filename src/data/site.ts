/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT
 *  This is the ONE file to edit when the real details are known.
 *  Update this file when firm details or approved copy changes.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Attorney / firm identity */
  attorneyName: "Samuel Njuguna Njenga",
  firmName: "Njuguna  Njenga & Associates",
  monogram: "S",
  tagline: "Counsel & Advocacy",
  heroIntro:
"Committed to delivering thoughtful legal counsel, trusted representation and practical solutions tailored to our clients’ needs. Guided by integrity, professionalism and respect for the law, we strive to protect our clients’ interests, uphold justice and build lasting relationships founded on trust and excellence",
  /** Short credential line under the name */
  credentials:
    "Advocate of the High Court · LL.B, PGDL",

  /** Single-sentence guiding principle, shown in the quote band */
  principle:
    "Every matter deserves the same diligence, discretion, and clear counsel, whatever its size.",

  /** Contact details */
  contact: {
    phone: "+254 743 604821",
    email: "snnjenga316@gmail.com",
    addressLines: ["Nairobi, Kenya"],
    hours: "Monday to Friday · 8:30 am to 5:30 pm",
    mapEmbedSrc:""
  
    },

  nav: [
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice" },
    { label: "Approach", href: "#approach" },
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
      "Samuel Njuguna Njenga is an Advocate of the High Court with an LL.B and PGDL. His practice covers commercial, property, family, civil dispute, and succession matters.",
      "His approach is grounded in careful listening, clear advice, and diligent attention to each matter. Clients are guided through their options and kept informed as their matter progresses.",
    ],
    facts: [
      { label: "Admission", value: "Advocate of the High Court" },
      { label: "Qualifications", value: "LL.B, PGDL" },
    ],
  },

  /** Practice areas */
  practiceAreas: [
    {
      title: "Corporate & Commercial Law",
      blurb:
        "Practical legal support for businesses, from company governance and compliance to commercial transactions.",
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
        "Careful drafting, review, and negotiation to help make contractual rights and obligations clear.",
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
        "Guidance on property transactions, leases, due diligence, and land-related disputes.",
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
        "Thoughtful advice on family matters, with a focus on practical solutions and your family's needs.",
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
        "Representation in civil and commercial disputes, with advice on litigation and alternative resolution.",
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
        "Support with wills, probate, estate administration, and planning for the transfer of assets.",
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
      "We take time to understand your priorities, give clear advice, and guide you through each stage with a focused plan.",
    steps: [
      {
        title: "Consultation",
        text: "We listen carefully, understand your priorities, and clarify the legal issues before recommending next steps.",
      },
      {
        title: "Strategy",
        text: "We assess your options and develop a practical plan, with clear advice on risks, timing, and costs.",
      },
      {
        title: "Representation",
        text: "We act on your behalf with diligence, keep you informed, and pursue the agreed strategy.",
      },
      {
        title: "Resolution",
        text: "We work toward an effective outcome and explain what comes next, every step of the way.",
      },
    ],
  },

  /** Testimonials */
  testimonials: [] as { quote: string; name: string; detail: string }[],

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
