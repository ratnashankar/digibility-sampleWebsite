export const metadata = {
  title: "Refund Policy | Digibility",
  description:
    "Understand Digibility’s refund rules for plan purchases, approval windows, and AI credit usage.",
  alternates: { canonical: "https://digibility.ai/refund-policy" },
  openGraph: {
    title: "Refund Policy | Digibility",
    description:
      "Refund timelines, conditions, and exceptions for Digibility subscriptions.",
    url: "https://digibility.ai/refund-policy",
    siteName: "Digibility",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digibility Refund Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Digibility",
    description: "Read Digibility’s refund rules and timelines.",
    images: ["/og-image.png"],
  },
};

function RefundSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
})

{
  const id = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <section
      id={id}
      aria-labelledby={id}
      className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition p-5"
    >
      <h2 className="text-xl font-semibold text-indigo-700">{title}</h2>
      <div className="mt-2 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

// ✅ Page Component
export default function RefundPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RefundPolicy",
    name: "Digibility Refund Policy",
    url: "https://digibility.ai/refund-policy",
    publisher: {
      "@type": "Organization",
      name: "Digibility Solutions Pvt. Ltd.",
      url: "https://digibility.ai",
    },
    dateModified: new Date().toISOString().slice(0, 10),
  };

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
       <h1 className="text-4xl md:text-5xl font-bold">Refund Policy</h1>
          <p className="mt-3 opacity-90">
            How refunds work at Digibility — timelines, approvals, and
            exceptions.
          </p>
        </div>
      </section>

      {/* Body Content */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-6">
        <RefundSection title="1) Overview">
          <p>
            Digibility subscriptions renew monthly or annually with auto-debit.
            A refund is available only within the first{" "}
            <strong>7 days</strong> from registration and{" "}
            <strong>before</strong> content calendar approval or auto-approval.
            After approval/auto-approval or any AI credit usage tied to content
            creation, refunds are <strong>not</strong> applicable.
          </p>
        </RefundSection>

        <RefundSection title="2) Timeline & Auto-Approval">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Day 0–7:</strong> Refund window. Your content calendar is
              created and shared for approval.
            </li>
            <li>
              <strong>Auto-approval at Day 3:</strong> If no feedback is
              received within 3 days, the calendar is auto-approved and moves to
              production.
            </li>
            <li>
              <strong>After Day 7:</strong> No refunds. The plan activates from
              Day 15 and continues monthly (or yearly for annual plans).
            </li>
          </ul>
        </RefundSection>

        <RefundSection title="3) AI Credits & Revisions">
          <p>
            Revisions are capped per plan (fair usage). Any usage of AI credits
            during the refund window may render the subscription ineligible for
            a refund. Unused credits do not roll over and are non-refundable.
          </p>
        </RefundSection>

        <RefundSection title="4) Billing & Currency">
          <p>
            India billing is in <strong>INR</strong> with applicable GST.
            International billing is in <strong>USD</strong> (no GST). Eligible
            refunds, if any, are processed to the original payment method within
            <strong> 7–10 business days</strong> after approval.
          </p>
        </RefundSection>

        <RefundSection title="5) Exceptions">
          <ul className="list-disc pl-6 space-y-2">
            <li>Accounts suspended for policy violations are not eligible.</li>
            <li>
              Refunds are not provided for delays caused by client-side
              approvals, missing assets, or third-party platform outages.
            </li>
            <li>
              Refunds are not available once content production has started
              after approval or auto-approval.
            </li>
          </ul>
        </RefundSection>

        {/* Last Updated */}
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
