
import dynamic from "next/dynamic";

export const metadata = {
  title: "Careers at Digibility | Build the Future of AI Marketing",
  description:
    "Join Digibility to build AI-first marketing automation. We hire for Engineering, AI/ML, Product, Design, and Growth. Internships available.",
  alternates: { canonical: "https://digibility.ai/careers" },
  openGraph: {
    title: "Careers at Digibility",
    description:
      "Join Digibility to build AI-first marketing automation. Engineering, AI/ML, Product, Design & Growth roles. Internships available.",
    url: "https://digibility.ai/careers",
    siteName: "Digibility",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digibility Careers" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Digibility",
    description:
      "Help us democratize digital marketing with AI. Apply for roles across Engineering, AI/ML, Product, Design & Growth.",
    images: ["/og-image.png"],
  },
};
import CareersClient from "./CareersClient"; 

export default function CareersPage() {
  const roles = [
    {
      id: "lead-backend-engineer",
      title: "Lead Backend Engineer (Node.js/TypeScript)",
      location: "Pune, India (Hybrid/Remote)",
      type: "Full-time",
      summary:
        "Own high-scale API design, microservices, and integrations with Meta, Google, LinkedIn.",
      skills: [
        "Node.js, TypeScript, PostgreSQL/Prisma",
        "Cloud (AWS/GCP), Docker, CI/CD",
        "REST/GraphQL, OAuth, Webhooks",
        "Observability & performance tuning",
      ],
    },
    {
      id: "ai-ml-engineer",
      title: "AI/ML Engineer (GenAI, RAG, Vision)",
      location: "Pune, India (Hybrid/Remote)",
      type: "Full-time",
      summary:
        "Build AI pipelines for analysis, content generation (text/image/video), and feedback loops.",
      skills: [
        "Python/TypeScript, vector DBs (Pinecone/PGVector)",
        "Prompting, finetuning, evaluation",
        "Multi-modal generation, guardrails",
        "MLOps & latency/cost optimization",
      ],
    },
    {
      id: "frontend-engineer",
      title: "Senior Frontend Engineer (React/Next.js)",
      location: "Pune, India (Hybrid/Remote)",
      type: "Full-time",
      summary:
        "Ship accessible, fast, SEO-first UIs with App Router, ISR, and Tailwind.",
      skills: [
        "React 18, Next.js (App Router), Tailwind",
        "State management and forms",
        "Core Web Vitals, accessibility (a11y)",
        "Storybook/testing is a plus",
      ],
    },
    {
      id: "product-manager",
      title: "Product Manager (Automation & UX)",
      location: "Pune, India (Hybrid/Remote)",
      type: "Full-time",
      summary:
        "Drive MVP to scale through discovery, roadmapping, and outcome-led execution.",
      skills: [
        "PRDs, roadmaps, outcome metrics",
        "User research & experimentation",
        "Technical writing & analytics",
        "AI/marketing domain bonus",
      ],
    },
    {
      id: "content-strategist",
      title: "Content Strategist (Social + SEO)",
      location: "Pune, India (Hybrid/Remote)",
      type: "Full-time",
      summary:
        "Own content playbooks for social channels, calendars, and brand voice.",
      skills: [
        "Social media strategy & copywriting",
        "SEO basics & analytics literacy",
        "AI tooling for content ops",
        "High editorial standards",
      ],
    },
    {
      id: "design-lead",
      title: "Product Designer / Design Lead",
      location: "Pune, India (Hybrid/Remote)",
      type: "Full-time",
      summary:
        "Design coherent systems, flows, and visuals for a futuristic AI product.",
      skills: [
        "Design systems, prototyping, UX writing",
        "Data viz, accessibility",
        "Motion/interaction a plus",
        "Figma expertise",
      ],
    },
    {
      id: "growth-marketer",
      title: "Growth Marketer (Performance + SEO)",
      location: "Pune, India (Hybrid/Remote)",
      type: "Full-time",
      summary:
        "Run experiments across paid, organic, and partnerships to drive signups.",
      skills: [
        "Paid social/search, SEO, CRO",
        "Attribution & analytics",
        "Landing page optimization",
        "Experiment design",
      ],
    },
    {
      id: "internship",
      title: "6-Month Internship (Engineering / Design / Content / Growth)",
      location: "Pune, India (Hybrid/Remote)",
      type: "Internship",
      summary:
        "Hands-on mentorship, real product work, and a strong chance of full-time offer upon successful completion.",
      skills: ["Strong fundamentals", "Curiosity & ownership", "Portfolio or GitHub"],
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digibility Solutions Pvt. Ltd.",
    url: "https://digibility.ai",
    logo: "https://digibility.ai/og-image.png",
    sameAs: [
      "https://www.linkedin.com/company/digibility-ai",
      "https://x.com/digibility",
      "https://www.facebook.com/digibilityai/",
      "https://www.instagram.com/digibility.ai/",
    ],
    department: {
      "@type": "Organization",
      name: "Careers",
      url: "https://digibility.ai/careers",
    },
    makesOffer: {
      "@type": "OfferCatalog",
      name: "Open Roles",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: roles.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "JobPosting",
          title: r.title,
          employmentType: r.type,
          hiringOrganization: {
            "@type": "Organization",
            name: "Digibility Solutions Pvt. Ltd.",
          },
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: {
            "@type": "Country",
            name: "India",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Pune",
              addressCountry: "IN",
            },
          },
          description: `${r.summary} Skills: ${r.skills.join(", ")}`,
          validThrough: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ).toISOString(),
        },
      })),
    },
  };

  return (
    <div className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-5xl font-bold">Careers at Digibility</h1>
          <p className="mt-3 opacity-90 max-w-3xl">
            Help us democratize digital marketing with AI. We’re building a fast, accessible,
            and truly automated marketing platform used by businesses globally.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-900">Open Roles</h2>
        <p className="text-gray-600">Engineering, AI/ML, Product, Design, Content & Growth</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {roles.map((r) => (
            <article key={r.id} className="bg-white rounded-2xl border shadow p-5">
              <h3 className="text-lg font-semibold text-indigo-700">{r.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {r.location} • {r.type}
              </p>
              <p className="text-gray-700 mt-3">{r.summary}</p>
              <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
                {r.skills.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              <a
                href="#apply"
                className="inline-flex items-center justify-center mt-5 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                aria-label={`Apply for ${r.title}`}
              >
                Apply now
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Internship banner */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-2xl bg-white border shadow p-6">
          <h2 className="text-xl font-semibold text-indigo-700">Internships @ Digibility</h2>
          <p className="text-gray-700 mt-2">
            We offer <strong>6-month internships</strong> across Engineering, Design, Content, and Growth. 
            Exceptional interns may receive a full-time offer upon successful completion.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <CareersClient />
    </div>
  );
}
