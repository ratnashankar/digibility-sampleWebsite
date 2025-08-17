import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, Printer, Download, ChevronDown, ChevronRight, CheckCircle2, Link as LinkIcon, ShieldCheck, AlertTriangle, Mail, CircleCheckBig } from "lucide-react";
import SuccessMsg from "./SucessMsg";
import ErrorMsg from "./ErrorMsg";
const DEFAULT_META = {
  entity: "Digibility Solutions Pvt. Ltd., Pune, India",
  governingLaw: "India",
  supportEmail: "support@digibility.com",
  legalEmail: "legal@digibility.com",
  lastUpdated: "17 August 2025",
};

const TERMS_SECTIONS = [
  {
    id: "eligibility",
    title: "1. Eligibility & General",
    subtitle: "Who we are, who may use the Services, and the contract you enter.",
    body: [
      `These Terms & Conditions ("Terms") govern your access to and use of the services, websites, and applications (collectively, the "Services") provided by Digibility Solutions Pvt. Ltd., Pune, India ("Digibility", "we", "us", or "our"). By using the Services, you agree to be bound by these Terms.`,
      `The Services are available to businesses, freelancers, creators, and individuals who wish to automate and optimize their digital marketing. These Terms are governed by the laws of India. Venue and jurisdiction shall lie with competent courts in India.`,
    ],
  },
  {
    id: "scope",
    title: "2. Service Scope & Limitations",
    subtitle: "What we provide and important limitations.",
    body: [
      `Digibility is an AI‑driven platform with internal review (Human‑in‑the‑Loop) during its MVP phase. We connect analysis → calendar → content creation → scheduling → reporting.`,
      `Service evolution: Features, pricing, post volumes, and credit structures may change. We will notify users of material changes.`,
      `No performance guarantees: We do not guarantee specific outcomes (e.g., sales, leads, likes, reach). Our obligation is to deliver the agreed scope (e.g., planned content/assets/ads) with approvals as per your plan.`,
      `Third‑party dependencies: We rely on platforms such as Meta, Google, LinkedIn, and Twitter/X. We are not responsible for outages, policy changes, token expiries, account bans/blocks, or posting failures caused by those platforms.`,
    ],
  },
  {
    id: "billing",
    title: "3. Subscription & Payments",
    subtitle: "Billing cycles, renewals, refunds, currencies, and taxes.",
    body: [
      `Billing & Renewal: Plans are available on monthly and annual terms with auto‑renewal and auto‑debit from your selected payment method. You authorize Digibility to charge subscription fees until you cancel. Cancellation stops future renewals; it does not retroactively refund current periods.`,
      `Refund Policy & Activation Timeline: You have 7 days from registration to request a refund. Within this period, your content calendar is created. If you do not approve within 3 days, it will be auto‑approved and move to content creation. No refunds are possible once the calendar is approved (client approval or auto‑approval), including where AI credits have been consumed. Service start: Your service period begins on the 15th day after registration. For annual plans, the same logic applies across the 12‑month term.`,
      `Currency & Taxes: India – billed in INR; GST applies as per law. International – billed in USD; no GST applies.`,
    ],
  },
  {
    id: "credits",
    title: "4. AI Credits & Fair Usage",
    subtitle: "Hidden in MVP; limits and expiry still apply.",
    body: [
      `Transparency: AI credit consumption powers analysis, generation, and revisions. It is not displayed during MVP but remains part of service delivery.`,
      `Revision caps: Revisions are capped per plan (as published on the pricing page). Additional usage may require an upgrade.`,
      `Expiry: Unused credits (including revision allowances) expire monthly and do not roll over.`,
    ],
  },
  {
    id: "ip",
    title: "5. Content Rights & Intellectual Property",
    subtitle: "Who owns what, and important disclaimers.",
    body: [
      `Ownership: Upon delivery/publishing, the client owns the content created via Digibility.`,
      `AI disclaimer: AI‑generated content may contain factual errors, overlaps, or similarities with publicly available materials. You must review and approve before publishing.`,
      `Third‑party materials: By uploading any assets (e.g., logos, images, videos), you warrant you have rights to use them and indemnify Digibility against claims arising from such materials.`,
    ],
  },
  {
    id: "client",
    title: "6. Client Responsibilities",
    subtitle: "Approvals, delays, and access requirements.",
    body: [
      `Approvals: Items pending approval will be auto‑approved after 3 days of client inactivity.`,
      `Delays: We are not liable for missed schedules caused by delayed inputs (creative assets, offers, product info, etc.).`,
      `Access: You must provide required access (e.g., social pages, ad accounts). If access is missing/withdrawn, services will be paused. Schedule adjustments or compensations are not guaranteed.`,
    ],
  },
  {
    id: "liability",
    title: "7. Liability & Indemnity",
    subtitle: "Caps on liability and your indemnification obligations.",
    body: [
      `Limitation of liability: To the maximum extent permitted by law, Digibility’s total liability shall not exceed the subscription fees paid in the last 3 months.`,
      `Indemnification: You agree to indemnify and hold Digibility harmless from claims, penalties, or losses arising from your content, offers, campaigns, account usage, or violations of laws/platform policies.`,
    ],
  },
  {
    id: "termination",
    title: "8. Termination & Suspension",
    subtitle: "Non‑payment, misuse, and exit rules.",
    body: [
      `Non‑payment: Accounts may be immediately suspended if payment is not received by the due date. You may reactivate within a 7‑day grace period by completing payment.`,
      `Misuse: We may suspend or terminate accounts for illegal activities, hate speech, fraud, or policy violations, without refund.`,
      `Exit: Upon termination, past content and data are not exportable.`,
    ],
  },
  {
    id: "privacy",
    title: "9. Privacy & Data Handling",
    subtitle: "Where we store data and how we use it.",
    body: [
      `Storage: We store data on reputable global cloud providers (e.g., AWS/GCP).`,
      `Improvement: We may use anonymized, aggregated performance data across clients to improve our AI and Services.`,
      `Third‑party tools: Integrations (e.g., Google APIs, Meta APIs, Zapier) are governed by their own terms and policies. We are not responsible for their data practices.`,
    ],
  },
  {
    id: "marketing",
    title: "10. Marketing & Communication",
    subtitle: "Case studies and messages you’ll receive.",
    body: [
      `Case studies: By subscribing, you grant Digibility the right to showcase your campaigns in case studies/testimonials (excluding confidential details).`,
      `Communications: You consent to receive service‑related and promotional communications (emails, in‑app notifications, etc.). You can manage preferences in your profile.`,
    ],
  },
  {
    id: "updates",
    title: "11. Updates to Terms",
    subtitle: "How we’ll notify you about changes.",
    body: [
      `We may revise these Terms from time to time. We will notify you of material changes via email or in‑product notifications. Continued use after the effective date constitutes acceptance of the updated Terms.`,
    ],
  },
  {
    id: "misc",
    title: "12. Miscellaneous",
    subtitle: "Standard legal boilerplate to avoid ambiguity.",
    body: [
      `Force Majeure: We are not liable for delays/failures due to causes beyond our reasonable control.`,
      `Severability: If any provision is unenforceable, the remainder remains in effect.`,
      `No Waiver: Our failure to enforce a provision is not a waiver of our right to do so later.`,
      `Entire Agreement: These Terms constitute the entire agreement regarding the Services and supersede prior understandings.`,
      `Assignment: You may not assign these Terms without our consent; we may assign as part of a merger, acquisition, or reorganization.`,
    ],
  },
  {
    id: "contact",
    title: "13. Contact",
    subtitle: "How to reach us for legal or support queries.",
    body: [
      `For questions about these Terms, billing, or your account, contact:`,
      `Support: support@digibility.com`,
      `Legal: legal@digibility.com`,
      `Registered Entity: Digibility Solutions Pvt. Ltd., Pune, India`,
    ],
  },
];

const slugToHash = (id) => `#${id}`;

function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return (
    <>
      {before}
      <mark className="bg-yellow-200 rounded px-0.5">{match}</mark>
      {highlight(after, query)}
    </>
  );
}

export default function TermsPage({ meta = DEFAULT_META }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(() => {
 
    const initial = Object.fromEntries(TERMS_SECTIONS.map(s => [s.id, s.id === TERMS_SECTIONS[0].id]));
 
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#','') : '';
    if (hash && initial[hash] !== undefined) initial[hash] = true;
    return initial;
  });
  const [activeId, setActiveId] = useState(TERMS_SECTIONS[0].id);
  const [agreed, setAgreed] = useState(false);
  const [storedConsent, setStoredConsent] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('dig_terms_consent');
    if (saved) {
      try { setStoredConsent(JSON.parse(saved)); } catch {}
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 });

    const nodes = containerRef.current?.querySelectorAll('section[data-term]');
    nodes?.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!query) return;
    const newOpen = { ...open };
    TERMS_SECTIONS.forEach(s => {
      const hit = s.title.toLowerCase().includes(query.toLowerCase()) || s.body.some(p => p.toLowerCase().includes(query.toLowerCase()));
      if (hit) newOpen[s.id] = true;
    });
    setOpen(newOpen);
  }, [query]);

  const filtered = useMemo(() => {
    if (!query) return TERMS_SECTIONS;
    const q = query.toLowerCase();
    return TERMS_SECTIONS.filter(s => s.title.toLowerCase().includes(q) || s.body.some(p => p.toLowerCase().includes(q)));
  }, [query]);

  const expandAll = () => setOpen(Object.fromEntries(TERMS_SECTIONS.map(s => [s.id, true])));
  const collapseAll = () => setOpen(Object.fromEntries(TERMS_SECTIONS.map(s => [s.id, false])));

  const [status, setStatus] = useState({ ok: null, err: null });

  const slugToHash = (id) => `#${id}`;

  const copyLink = async (id) => {
  const url = `${window.location.origin}${window.location.pathname}${slugToHash(id)}`;

  try {
    await navigator.clipboard.writeText(url);
    setStatus({ ok: null, err: null });
    setTimeout(() => {
      setStatus({ ok: "Section link copied to clipboard ✅", err: null });
    }, 10);
  } catch {
    setStatus({ ok: null, err: "Failed to copy link ❌" });
  }
};

  const printPage = () => window.print();

  const downloadTxt = () => {
    const plain = TERMS_SECTIONS.map(s => `${s.title}\n${s.body.join('\n')}\n`).join('\n');
    const blob = new Blob([plain], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'digibility_terms.txt'; a.click();
    URL.revokeObjectURL(url);
  };

  const handleAgree = () => {
    const payload = { agreedAt: new Date().toISOString(), version: meta.lastUpdated };
    localStorage.setItem('dig_terms_consent', JSON.stringify(payload));
    setStoredConsent(payload);
    setAgreed(false);
    alert('Thank you. Your consent has been recorded.');
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 pt-[10vh] pb-4">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms & Conditions</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">Welcome to Digibility. Please read these Terms carefully before using our services.</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Governing Law: {meta.governingLaw}</span>
              <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">Entity: {meta.entity}</span>
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Last Updated: {meta.lastUpdated}</span>
            </div>
            {storedConsent && (
              <div className="mt-3 text-sm text-emerald-700 flex items-center gap-2"><CircleCheckBig className="w-4 h-4"/> You agreed on {new Date(storedConsent.agreedAt).toLocaleString()}</div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/>
              <input
                className="pl-9 pr-3 py-2 rounded-xl border bg-white w-64 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="Search terms…"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
            <button onClick={expandAll} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm">Expand all</button>
            <button onClick={collapseAll} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm">Collapse all</button>
            <button onClick={printPage} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2"><Printer className="w-4 h-4"/> Print</button>
            <button onClick={downloadTxt} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2"><Download className="w-4 h-4"/> Download</button>
          </div>
        </div>
      </div>

      {/* Content + TOC */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main */}
        <div className="lg:col-span-8" ref={containerRef}>
          {TERMS_SECTIONS.filter(s => filtered.includes(s)).map((s) => (
            <section key={s.id} id={s.id} data-term className="mb-4 bg-white border rounded-2xl shadow-sm overflow-hidden">
              <header
                className="w-full flex items-start justify-between gap-3 p-4 cursor-pointer select-none"
                onClick={() => setOpen({ ...open, [s.id]: !open[s.id] })}
                aria-expanded={open[s.id]}
                aria-controls={`${s.id}-content`}
              >
                <div className="flex items-start gap-3">
                  {open[s.id] ? <ChevronDown className="w-5 h-5 mt-1 text-gray-500"/> : <ChevronRight className="w-5 h-5 mt-1 text-gray-500"/>}
                  <div>
                    <div className="font-semibold text-lg">{highlight(s.title, query)}</div>
                    <div className="text-sm text-gray-600">{highlight(s.subtitle, query)}</div>
                  </div>
                </div>
                <div>
  <button
    className="text-xs px-2 py-1 rounded-lg border bg-gray-50 hover:bg-gray-100 flex items-center gap-0 lg:gap-1 min-w-fit"
    onClick={(e) => {
      e.stopPropagation();
      copyLink("section1");
    }}
    aria-label="Copy link to section"
  >
    <LinkIcon className="w-3.5 h-3.5" /> Copy link
  </button>

  <div className=" z-50">
    {status.ok && <SuccessMsg message={status.ok} show={true} />}
    {status.err && <ErrorMsg message={status.err} show={true} />}
  </div>
</div>
              </header>
              {open[s.id] && (
                <div id={`${s.id}-content`} className="px-5 pb-5 border-t">
                  {s.body.map((p, idx) => (
                    <p key={idx} className="mt-3 text-gray-800">{highlight(p, query)}</p>
                  ))}
                  {/* Section-specific notes */}
                  {s.id === 'scope' && (
                    <div className="mt-4 p-3 rounded-xl border bg-emerald-50 text-emerald-800 text-sm flex items-start gap-2"><ShieldCheck className="w-4 h-4 mt-0.5"/> Keep platform accounts in good standing and promptly re‑connect integrations when prompted.</div>
                  )}
                  {s.id === 'liability' && (
                    <div className="mt-4 p-3 rounded-xl border bg-amber-50 text-amber-800 text-sm flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-0.5"/> To the maximum extent permitted by law, our liability is capped as stated herein.</div>
                  )}
                </div>
              )}
            </section>
          ))}

          {/* Consent */}
          <div className="mt-8 bg-white border rounded-2xl p-5 flex items-start gap-3">
            <input id="agree" type="checkbox" className="mt-1 w-4 h-4" checked={agreed} onChange={(e)=>setAgreed(e.target.checked)} />
            <label htmlFor="agree" className="text-sm text-gray-700">I have read and agree to the Digibility Terms & Conditions.</label>
            <button
              disabled={!agreed}
              onClick={handleAgree}
              className={`ml-auto px-4 py-2 rounded-xl text-white flex items-center gap-2 ${agreed ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              <CheckCircle2 className="w-4 h-4"/> Save Consent
            </button>
          </div>

          {/* Contact strip */}
          <div className="mt-4 text-sm text-gray-600 flex items-center gap-2"><Mail className="w-4 h-4"/> Questions? Write to <a className="text-emerald-700" href={`mailto:${meta.supportEmail}`}>{meta.supportEmail}</a> or <a className="text-emerald-700" href={`mailto:${meta.legalEmail}`}>{meta.legalEmail}</a>.</div>
        </div>

        {/* ToC */}
        <aside className="lg:col-span-4 lg:sticky lg:top-6 h-fit">
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <div className="font-semibold mb-2">On this page</div>
            <nav className="space-y-1 text-sm">
              {TERMS_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={slugToHash(s.id)}
                  onClick={(e)=>{
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior:'smooth', block:'start' });
                    setOpen({ ...open, [s.id]: true });
                    history.replaceState(null, '', slugToHash(s.id));
                  }}
                  className={`block px-2 py-1 rounded-lg transition ${activeId === s.id ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-gray-50'}`}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-3 text-xs text-gray-500">These Terms are not legal advice. For specific situations, consult your counsel.</div>
        </aside>
      </div>
 </div>
  );
}
