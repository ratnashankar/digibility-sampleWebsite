export const metadata = {
  title: "Disclaimer | Digibility",
  description:
    "Important disclaimers about Digibility’s AI-driven services, performance expectations, third-party dependencies, and limitations of liability.",
  alternates: { canonical: "https://digibility.ai/disclaimer" },
  openGraph: {
    title: "Disclaimer | Digibility",
    description:
      "Important disclaimers about Digibility’s AI-driven services, performance expectations, third-party dependencies, and limitations of liability.",
    url: "https://digibility.ai/disclaimer",
    siteName: "Digibility",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digibility Disclaimer" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Digibility",
    description:
      "Important disclaimers about Digibility’s AI-driven services and limitations of liability.",
    images: ["/og-image.png"],
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border shadow">
      <div className="px-5 py-4">
        <h2 className="text-xl font-semibold text-indigo-700">{title}</h2>
        <div className="mt-2 text-gray-700">{children}</div>
      </div>
    </div>
  );
}

export default function DisclaimerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer",
    url: "https://digibility.ai/disclaimer",
    isPartOf: {
      "@type": "WebSite",
      name: "Digibility",
      url: "https://digibility.ai",
    },
    dateModified: new Date().toISOString().slice(0, 10),
  };

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        // JSON-LD is safe when stringified
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-5xl font-bold">Disclaimer</h1>
          <p className="mt-3 opacity-90">
            Please read this disclaimer carefully before using Digibility’s services.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-6">
        <Section title="1) AI‑Driven Services & Human‑in‑the‑Loop">
          <p>
            Digibility provides AI‑driven automation with human review (HITL) where applicable.
            While we strive for accuracy and quality, <strong>outputs may contain errors, omissions,
            or require client review</strong>. Final responsibility for approving analysis, calendars,
            and published content rests with the client.
          </p>
        </Section>

        <Section title="2) No Performance Guarantees">
          <p>
            Marketing outcomes depend on multiple factors beyond our control (industry conditions, competition,
            budget, product‑market fit, third‑party platform algorithms, seasonality, etc.). <strong>We do not guarantee
            specific results</strong> (e.g., impressions, clicks, likes, leads, or sales). Reports and insights are provided
            for guidance only.
          </p>
        </Section>

        <Section title="3) Third‑Party Platforms & Dependencies">
          <p>
            Our services rely on APIs and policies of Meta, Google, LinkedIn, X (Twitter), and others.
            We are <strong>not responsible</strong> for outages, policy changes, rate limits, rejections,
            account suspensions, or delivery issues caused by third parties.
          </p>
        </Section>

        <Section title="4) Client Responsibilities & Approvals">
          <ul className="list-disc pl-6">
            <li>Provide accurate business information, timely approvals, and required assets (logos, images, offers).</li>
            <li>Ensure uploaded materials comply with laws, IP rights, and platform policies.</li>
            <li>Approve or request edits within stipulated timelines; otherwise, auto‑approval rules may apply.</li>
          </ul>
        </Section>

        <Section title="5) Content & Intellectual Property">
          <p>
            Clients warrant they have rights to all materials they provide. <strong>Clients are responsible</strong> for any
            claims arising from their content, offers, or representations. AI‑generated assets may include similarities to
            public data or stock elements; we recommend client review before publication.
          </p>
        </Section>

        <Section title="6) Financial, Legal, & Industry Advice">
          <p>
            Any strategy suggestions or benchmarks are for informational purposes only and <strong>do not constitute
            financial, legal, medical, or professional advice</strong>. Consult qualified professionals before making
            decisions based on platform outputs.
          </p>
        </Section>

        <Section title="7) Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Digibility’s aggregate liability is limited to the subscription fees
            paid in the <strong>preceding three (3) months</strong>. We are not liable for indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill.
          </p>
        </Section>

        <Section title="8) Warranties Disclaimer">
          <p>
            Services are provided on an “<strong>as is</strong>” and “<strong>as available</strong>” basis without warranties of any kind,
            whether express or implied, including but not limited to merchantability, fitness for a particular purpose,
            and non‑infringement.
          </p>
        </Section>

        <Section title="9) Changes & Availability">
          <p>
            Features, pricing, credits, and service scope may evolve over time. We may update this disclaimer periodically.
            Continued use after changes constitutes acceptance of the updated terms.
          </p>
        </Section>

        <Section title="10) Contact">
          <p>
            Digibility Solutions Pvt. Ltd., Pune, India • support@digibility.ai
          </p>
        </Section>

        <div className="text-sm text-gray-500">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </section>
    </div>
  );
}