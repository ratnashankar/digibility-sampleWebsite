// app/pricing/PricingClient.tsx
"use client";

import { useMemo, useState } from "react";

type Currency = "INR" | "USD";
type Billing = "monthly" | "yearly";

type PlanKey = "trial" | "ignite" | "accelerate" | "dominance";

type Plan = {
  key: PlanKey;
  name: string;
  tagline: string;
  monthly: { INR: number; USD?: number };
  // yearly = monthly * 12 * 0.8
  features: string[];
  limits: string[];
  cta: string; // "Start Free"
  highlight?: boolean; // visually featured
};

const PLANS: Plan[] = [
  {
    key: "trial",
    name: "Trial",
    tagline: "Test-drive Digibility before you commit.",
    monthly: { INR: 0 },
    features: [
      "Platforms: Facebook + Instagram",
      "Content: Static images with AI captions",
      "Automation: AI Analysis (basic), Basic calendar (no edits), Reporting (basic)",
      "Support: Email",
    ],
    limits: ["4 posts/month (1 per week)", "No revisions", "Cross-posted on FB & IG"],
    cta: "Start Free",
  },
  {
    key: "ignite",
    name: "Ignite",
    tagline: "For solo entrepreneurs & micro businesses (≤ ₹20 Lakhs).",
    monthly: { INR: 4999, USD: 59 },
    features: [
      "Platforms: Facebook + Instagram",
      "Content: Static images with AI captions",
      "Automation: AI Analysis (basic), Basic calendar (manual edits), Reporting (basic)",
      "Support: Email",
    ],
    limits: ["12 posts/month (3 per week)", "4 total revisions/month", "Cross-posted on FB & IG"],
    cta: "Start Free",
  },
  {
    key: "accelerate",
    name: "Accelerate",
    tagline: "For growing SMBs (₹20 Lakhs – ₹1 Cr).",
    monthly: { INR: 12999, USD: 159 },
    features: [
      "Platforms: Facebook + Instagram + LinkedIn",
      "Content: Static, Carousels, Reels, LinkedIn Articles",
      "Automation: Detailed AI Analysis, Smart calendar (auto-ideas), Content with HITL review, Reporting with insights",
      "Support: Email + Chat",
    ],
    limits: [
      "28–29 posts/month",
      "Weekly: 4 static + 1 carousel + 1 reel",
      "Plus 4 LinkedIn articles/month",
      "15 total revisions/month",
    ],
    cta: "Start Free",
    highlight: true,
  },
  {
    key: "dominance",
    name: "Dominance",
    tagline: "For scaling businesses (₹1 Cr – ₹5 Cr).",
    monthly: { INR: 29999, USD: 349 },
    features: [
      "Platforms: Facebook + Instagram + LinkedIn + Twitter",
      "Content: Static, Carousels, Reels, Articles",
      "Automation: Full AI Analysis (competitors, ICP, strategy), Smart calendar + Auto-posting, Full content (text+image+video), Advanced reporting w/ strategy",
      "Support: Priority (Email + Chat + Phone) + Account Manager",
    ],
    limits: ["60 posts/month", "Weekly: 10 static + 3 carousels + 2 reels", "40 total revisions/month"],
    cta: "Start Free",
  },
];

function fmtPrice(v: number, cur: Currency) {
  const nf = new Intl.NumberFormat(cur === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency: cur,
    maximumFractionDigits: 0,
  });
  return nf.format(v);
}

function yearlyPrice(monthly: number) {
  // 20% discount
  return Math.round(monthly * 12 * 0.8);
}

export default function PricingClient() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [billing, setBilling] = useState<Billing>("monthly");
  const [tourOpen, setTourOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const pricedPlans = useMemo(() => {
    return PLANS.map((p) => {
      const m = p.monthly[currency as "INR" | "USD"] ?? p.monthly["INR"];
      const price =
        billing === "monthly" ? m : yearlyPrice(m);
      return { ...p, price, showCurrency: p.key === "trial" ? null : currency };
    });
  }, [currency, billing]);

  const comparison = [
    { label: "Platforms", trial: "FB, IG", ignite: "FB, IG", accelerate: "FB, IG, LinkedIn", dominance: "FB, IG, LinkedIn, Twitter" },
    { label: "Post Volume / mo", trial: "4", ignite: "12", accelerate: "28–29", dominance: "60" },
    { label: "Content Types", trial: "Static", ignite: "Static", accelerate: "Static, Carousel, Reel, Articles", dominance: "Static, Carousel, Reel, Articles" },
    { label: "Revisions", trial: "—", ignite: "4 total", accelerate: "15 total", dominance: "40 total" },
    { label: "AI Analysis", trial: "Basic", ignite: "Basic", accelerate: "Detailed", dominance: "Full (Competitors, ICP, Strategy)" },
    { label: "Calendar", trial: "Basic (no edits)", ignite: "Basic (manual edits)", accelerate: "Smart (auto-ideas)", dominance: "Smart + Auto-posting" },
    { label: "Reporting", trial: "Basic metrics", ignite: "Basic metrics", accelerate: "Insights", dominance: "Advanced + Strategy" },
    { label: "Support", trial: "Email", ignite: "Email", accelerate: "Email + Chat", dominance: "Priority + AM" },
  ];

  return (
  <section className="max-w-7xl mx-auto px-6 py-12">
    {/* Toggles */}
    <div className="flex flex-wrap gap-3 justify-center">
      <div className="flex items-center gap-2 bg-white rounded-full border px-2 py-1 shadow-sm">
        <button
          onClick={() => setBilling("monthly")}
          aria-pressed={billing === "monthly"}
          className={`px-3 py-1 rounded-full ${
            billing === "monthly" ? "bg-blue-600 text-white" : ""
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          aria-pressed={billing === "yearly"}
          className={`px-3 py-1 rounded-full ${
            billing === "yearly" ? "bg-blue-600 text-white" : ""
          }`}
          title="Save 20%"
        >
          Yearly{" "}
          <span className="ml-1 inline-block text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full">
            Save 20%
          </span>
        </button>
      </div>

      <div className="flex items-center gap-2 bg-white rounded-full border px-2 py-1 shadow-sm">
        <button
          onClick={() => setCurrency("INR")}
          aria-pressed={currency === "INR"}
          className={`px-3 py-1 rounded-full ${
            currency === "INR" ? "bg-blue-600 text-white" : ""
          }`}
        >
          INR
        </button>
        <button
          onClick={() => setCurrency("USD")}
          aria-pressed={currency === "USD"}
          className={`px-3 py-1 rounded-full ${
            currency === "USD" ? "bg-blue-600 text-white" : ""
          }`}
        >
          USD
        </button>
      </div>

      <button
        onClick={() => setTourOpen(true)}
        className="px-4 py-2 rounded-full bg-indigo-600 text-white shadow hover:bg-indigo-700"
      >
        Request Product Tour
      </button>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {pricedPlans.map((p) => (
        <div
          key={p.key}
          className={`rounded-2xl border bg-white shadow-sm p-6 flex flex-col ${
            p.highlight ? "ring-2 ring-emerald-400" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            {p.key !== "trial" && billing === "yearly" && (
              <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                20% off
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">{p.tagline}</p>

          <div className="mt-4">
            {p.key === "trial" ? (
              <div className="text-3xl font-bold">Free</div>
            ) : (
              <div className="text-3xl font-bold">
                {fmtPrice(p.price, p.showCurrency as Currency)}
                <span className="text-sm font-normal text-gray-500">
                  /{billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            )}
          </div>

          <ul className="mt-4 text-sm space-y-2">
            {p.limits.map((l, i) => (
              <li key={i}>• {l}</li>
            ))}
          </ul>

          <hr className="my-4" />

          <ul className="text-sm text-gray-700 space-y-2">
            {p.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span aria-hidden>✔</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="/signup"
            className="mt-6 inline-block text-center px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            {p.cta}
          </a>
        </div>
      ))}
    </div>

    {/* Comparison Table */}
    <div className="mt-12 bg-white rounded-2xl border shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Feature</th>
            <th className="p-3 text-left">Trial</th>
            <th className="p-3 text-left">Ignite</th>
            <th className="p-3 text-left">Accelerate</th>
            <th className="p-3 text-left">Dominance</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-3">{row.label}</td>
              <td className="p-3">{row.trial}</td>
              <td className="p-3">{row.ignite}</td>
              <td className="p-3">{row.accelerate}</td>
              <td className="p-3">{row.dominance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Why Choose Digibility */}
    <section className="mt-12 grid md:grid-cols-3 gap-6">
      {[
        { t: "AI-first, Human-checked", d: "Automation for speed, experts for on-brand quality." },
        { t: "End-to-End Workflow", d: "Analysis → Calendar → Creatives → Schedule → Report in one flow." },
        { t: "Scales With You", d: "Start simple, add channels and formats as you grow." },
      ].map((x) => (
        <div key={x.t} className="p-6 bg-white rounded-2xl border shadow">
          <div className="text-lg font-semibold">{x.t}</div>
          <div className="text-sm text-gray-600 mt-2">{x.d}</div>
        </div>
      ))}
    </section>

    {/* Logos / Testimonials */}
    <section className="mt-12 text-center">
      <div className="text-sm text-gray-600">Trusted by forward-thinking teams</div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 rounded" aria-hidden />
        ))}
      </div>
    </section>

    {/* FAQs */}
    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-center">Frequently Asked Questions</h2>
      <div className="mt-6 max-w-3xl mx-auto space-y-3">
        {[
          {
            q: "Is there a free plan?",
            a: "Yes — the Trial plan includes 4 static posts per month cross-posted on Facebook & Instagram.",
          },
          {
            q: "Do you offer yearly discounts?",
            a: "Yes, save 20% on Ignite, Accelerate, and Dominance with annual billing.",
          },
          {
            q: "What support comes with each plan?",
            a: "Trial/Ignite include email support. Accelerate adds chat. Dominance includes priority support, phone, and an account manager.",
          },
          {
            q: "Can I upgrade anytime?",
            a: "Yes, you can upgrade at any time from within your account.",
          },
        ].map((f, i) => (
          <details key={i} className="bg-white rounded-2xl border p-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="text-sm text-gray-600 mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>

    {/* Product Tour Modal */}
    {tourOpen && (
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={() => setTourOpen(false)}
      >
        <div
          className="bg-white rounded-2xl p-6 w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg font-semibold">Request a Product Tour</h3>
          <p className="text-sm text-gray-600">
            Share your details and we’ll schedule a walkthrough.
          </p>
          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setTourOpen(false);
              setToast("Thanks! We’ll reach out within 48 business hours.");
              setTimeout(() => setToast(null), 4500);
            }}
          >
            <input
              className="w-full rounded-xl border px-3 py-2"
              placeholder="Name"
              required
            />
            <input
              className="w-full rounded-xl border px-3 py-2"
              placeholder="Work Email"
              type="email"
              required
            />
            <input
              className="w-full rounded-xl border px-3 py-2"
              placeholder="Company"
            />
            <button className="w-full rounded-xl bg-indigo-600 text-white py-2 hover:bg-indigo-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    )}

    {/* Toast */}
    {toast && (
      <div
        role="status"
        aria-live="polite"
        className="fixed bottom-5 right-5 max-w-sm rounded-xl bg-gray-900 text-white px-4 py-3 shadow-lg"
      >
        {toast}
      </div>
    )}
  </section>
);

}