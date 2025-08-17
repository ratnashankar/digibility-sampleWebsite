import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, Printer, Download, ChevronDown, ChevronRight, Link as LinkIcon, Shield, ShieldCheck, Cookie, Globe, Database, Trash2, FileDown, Mail, CircleCheckBig } from "lucide-react";
import SuccessMsg from "./SucessMsg";
import ErrorMsg from "./ErrorMsg";
const DEFAULT_META = {
  entity: "Digibility Solutions Pvt. Ltd., Pune, India",
  dpoEmail: "privacy@digibility.com",
  supportEmail: "support@digibility.com",
  lastUpdated: "17 August 2025",
};

const PRIVACY_SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    subtitle: "Who we are and what this notice covers.",
    body: [
      `This Privacy Policy explains how Digibility Solutions Pvt. Ltd., Pune, India ("Digibility", "we", "us") collects, uses, shares, and protects information in connection with our websites and applications (the "Services").`,
      `This notice applies to customers, trial users, and site visitors globally. Additional region-specific rights (e.g., GDPR/CCPA) are described in Section 10.`,
    ],
  },
  {
    id: "data-we-collect",
    title: "2. Information We Collect",
    subtitle: "Account data, usage data, content, and technical logs.",
    body: [
      `Account & Profile: name, email, business information, time zone, social handles, subscription details.`,
      `Content & Assets: brand logos, images, product photos, captions, calendars, approvals, revision history (provided by you).`,
      `Usage & Device: pages viewed, features used, approximate location, device/browser type, language, referrer, IDs (via cookies, pixels, SDKs).`,
      `Integrations: tokens/IDs required to connect platforms (e.g., Meta, Google, LinkedIn, Twitter/X) and minimal scopes needed for posting, analytics, or ads.`,
      `Support & Comms: messages sent to support, survey responses, and email preferences.`,
    ],
  },
  {
    id: "sources",
    title: "3. Sources of Information",
    subtitle: "You, your devices, connected platforms, and public sources.",
    body: [
      `Directly from you when you sign up, configure your profile, upload assets, or contact support.`,
      `Automatically from your device and browser via cookies and similar technologies.`,
      `From connected third-party platforms via APIs (e.g., Meta/Google/LinkedIn/Twitter/X) as authorized by you.`,
      `From publicly available sources for enrichment (business websites, listings) as permitted by law.`,
    ],
  },
  {
    id: "purposes",
    title: "4. How We Use Information (Purposes & Legal Bases)",
    subtitle: "Provide, secure, improve the Services; perform contracts; legitimate interests; consent.",
    body: [
      `Provide & Operate: account creation, authentication, posting/scheduling, analytics, billing. (Contract)`,
      `Security & Abuse Prevention: fraud detection, rate limiting, auditing. (Legitimate interests/Legal obligation)`,
      `Improvements & Research: product analytics, training and evaluation of models with aggregated/anonymized data. (Legitimate interests)`,
      `Marketing & Comms: service updates, onboarding tips, offers (with your preferences/consent). (Consent/Legitimate interests)`,
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies & Similar Technologies",
    subtitle: "Functional, Analytics, and Marketing categories.",
    body: [
      `We use cookies, pixels, and local storage to remember settings, measure performance, and personalize marketing. See your controls below.`,
    ],
  },
  {
    id: "sharing",
    title: "6. Sharing & Subprocessors",
    subtitle: "Vendors, integrations, legal, and business transfers.",
    body: [
      `Vendors/Subprocessors: cloud hosting (AWS/GCP), email delivery, analytics, payment processors (e.g., Stripe/Razorpay), customer support tools.`,
      `Integrations: if you connect third-party platforms (e.g., Meta/Google/LinkedIn/Twitter/X), their terms and privacy policies apply.`,
      `Legal: we may disclose information to comply with law, protect rights, or respond to lawful requests.`,
      `Business Transfers: in a merger, acquisition, or reorganization, your information may transfer subject to this Policy.`,
    ],
  },
  {
    id: "intl-transfers",
    title: "7. International Data Transfers",
    subtitle: "We may process and store data globally.",
    body: [
      `We use reputable global cloud providers (e.g., AWS/GCP). Your information may be processed and stored in data centers outside your home country subject to appropriate safeguards.`,
    ],
  },
  {
    id: "retention",
    title: "8. Data Retention",
    subtitle: "How long we keep data and deletion timelines.",
    body: [
      `We retain account, content, and log data for as long as necessary to provide the Services and for legitimate business/legal purposes.`,
      `If you request deletion, we will delete or anonymize personal data subject to legal/operational retention needs (e.g., fraud prevention, tax).`,
    ],
  },
  {
    id: "security",
    title: "9. Security",
    subtitle: "Controls to protect your information.",
    body: [
      `We implement administrative, technical, and physical safeguards (encryption in transit, access controls, audit logging). No method of transmission or storage is 100% secure.`,
    ],
  },
  {
    id: "rights",
    title: "10. Your Rights",
    subtitle: "Access, correct, delete, port, object, and opt-out (region-specific).",
    body: [
      `You may have rights under laws such as GDPR/CCPA to request access, correction, deletion, or a copy of your data, and to object or restrict certain processing. You may also opt-out of marketing communications.`,
      `We will verify requests and respond within statutory timelines. Some rights may be limited by law or to protect the rights of others.`,
    ],
  },
  {
    id: "children",
    title: "11. Children's Privacy",
    subtitle: "Our Services are not directed to children under 13.",
    body: [
      `We do not knowingly collect personal data from children under 13. If you believe a child has provided us information, contact us to request deletion.`,
    ],
  },
  {
    id: "changes",
    title: "12. Changes to this Policy",
    subtitle: "We will notify you of material updates.",
    body: [
      `We may update this Policy from time to time. Material changes will be notified via email or in-product notifications. Continued use after the effective date constitutes acceptance.`,
    ],
  },
  {
    id: "contact",
    title: "13. Contact Us",
    subtitle: "How to reach our privacy team.",
    body: [
      `Email our Data Protection contact at privacy@digibility.com, or reach support@digibility.com for account questions.`,
      `Postal/Registered Entity: Digibility Solutions Pvt. Ltd., Pune, India`,
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

export default function PrivacyPage({ meta = DEFAULT_META, onExport, onDelete }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(() => {
    const initial = Object.fromEntries(PRIVACY_SECTIONS.map(s => [s.id, s.id === PRIVACY_SECTIONS[0].id]));
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    if (hash && initial[hash] !== undefined) initial[hash] = true;
    return initial;
  });
  const [activeId, setActiveId] = useState(PRIVACY_SECTIONS[0].id);
  const containerRef = useRef(null);

  const [cookies, setCookies] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dig_cookie_prefs')) || { functional: true, analytics: false, marketing: false };
    } catch { return { functional: true, analytics: false, marketing: false }; }
  });
  useEffect(() => {
    localStorage.setItem('dig_cookie_prefs', JSON.stringify(cookies));
  }, [cookies]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id));
    }, { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 });
    const nodes = containerRef.current?.querySelectorAll('section[data-pp]');
    nodes?.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!query) return;
    const newOpen = { ...open };
    PRIVACY_SECTIONS.forEach(s => {
      const hit = s.title.toLowerCase().includes(query.toLowerCase()) || s.body.some(p => p.toLowerCase().includes(query.toLowerCase()));
      if (hit) newOpen[s.id] = true;
    });
    setOpen(newOpen);
  }, [query]);

  const filtered = useMemo(() => {
    if (!query) return PRIVACY_SECTIONS;
    const q = query.toLowerCase();
    return PRIVACY_SECTIONS.filter(s => s.title.toLowerCase().includes(q) || s.body.some(p => p.toLowerCase().includes(q)));
  }, [query]);

  const expandAll = () => setOpen(Object.fromEntries(PRIVACY_SECTIONS.map(s => [s.id, true])));
  const collapseAll = () => setOpen(Object.fromEntries(PRIVACY_SECTIONS.map(s => [s.id, false])));

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
    const plain = PRIVACY_SECTIONS.map(s => `${s.title}\n${s.body.join('\n')}\n`).join('\n');
    const blob = new Blob([plain], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'digibility_privacy.txt'; a.click();
    URL.revokeObjectURL(url);
  };

  const handleExport = () => {
    if (onExport) return onExport();
    alert('Export request submitted. Our team will contact you with next steps.');
  };
  const handleDelete = () => {
    if (onDelete) return onDelete();
    alert('Deletion request submitted. We will verify your identity and confirm by email.');
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 pt-[10vh] pb-4">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">How Digibility collects, uses, shares, and protects your information.</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
              <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">Entity: {meta.entity}</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Last Updated: {meta.lastUpdated}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 min-w-[80vw] mx-auto sm:gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="pl-9 pr-3 py-2 rounded-xl border bg-white w-full focus:outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="Search privacy…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <button onClick={expandAll} className="w-full sm:w-auto px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm">Expand all</button>
            <button onClick={collapseAll} className="w-full sm:w-auto px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm">Collapse all</button>
            <button onClick={printPage} className="w-full sm:w-auto px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2 justify-center">
              <Printer className="w-4 h-4" /> Print
            </button>
            <button onClick={downloadTxt} className="w-full sm:w-auto px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2 justify-center">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">

        <div className="lg:col-span-8" ref={containerRef}>
          {PRIVACY_SECTIONS.filter(s => filtered.includes(s)).map((s) => (
            <section key={s.id} id={s.id} data-pp className="mb-4 bg-white border rounded-2xl shadow-sm overflow-hidden">
              <header
                className="w-full flex items-start justify-between gap-3 p-4 cursor-pointer select-none"
                onClick={() => setOpen({ ...open, [s.id]: !open[s.id] })}
                aria-expanded={open[s.id]}
                aria-controls={`${s.id}-content`}
              >
                <div className="flex items-start gap-3">
                  {open[s.id] ? <ChevronDown className="w-5 h-5 mt-1 text-gray-500" /> : <ChevronRight className="w-5 h-5 mt-1 text-gray-500" />}
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

                  {s.id === 'cookies' && (
                    <div className="mt-4 p-4 rounded-2xl border bg-slate-50">
                      <div className="flex items-center gap-2 font-medium mb-2"><Cookie className="w-4 h-4" /> Cookie Preferences</div>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {[
                          { key: 'functional', title: 'Functional', desc: 'Required for core features and security.', locked: true },
                          { key: 'analytics', title: 'Analytics', desc: 'Helps us understand usage to improve the product.' },
                          { key: 'marketing', title: 'Marketing', desc: 'Personalized offers and retargeting across channels.' },
                        ].map(c => (
                          <div key={c.key} className="p-3 rounded-xl border bg-white flex items-start gap-3">
                            <input type="checkbox" className="mt-1 w-4 h-4" disabled={c.locked} checked={cookies[c.key]} onChange={() => setCookies(prev => ({ ...prev, [c.key]: !prev[c.key] }))} />
                            <div>
                              <div className="font-medium">{c.title} {c.locked && <span className="text-xs ml-1 px-1.5 py-0.5 rounded-full bg-gray-100 border">required</span>}</div>
                              <div className="text-xs text-gray-600 mt-0.5">{c.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 mt-2">Your preferences are stored in your browser (localStorage). Clearing site data resets these settings.</div>
                    </div>
                  )}

                  {s.id === 'rights' && (
                    <div className="mt-4 grid sm:grid-cols-2 gap-3">
                      <button onClick={handleExport} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border bg-white hover:bg-gray-100">
                        <FileDown className="w-4 h-4" /> Request Data Export
                      </button>
                      <button onClick={handleDelete} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border bg-white hover:bg-gray-100 text-rose-700">
                        <Trash2 className="w-4 h-4" /> Request Account Deletion
                      </button>
                    </div>
                  )}

                  {s.id === 'intl-transfers' && (
                    <div className="mt-4 p-3 rounded-xl border bg-emerald-50 text-emerald-800 text-sm flex items-start gap-2"><Globe className="w-4 h-4 mt-0.5" /> We use reputable global cloud providers (AWS/GCP) with industry-standard safeguards.</div>
                  )}

                  {s.id === 'security' && (
                    <div className="mt-4 p-3 rounded-xl border bg-amber-50 text-amber-800 text-sm flex items-start gap-2"><Shield className="w-4 h-4 mt-0.5" /> While we apply strong controls, no method of transmission or storage is 100% secure.</div>
                  )}
                </div>
              )}
            </section>
          ))}

          <div className="mt-4 text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 break-words">
            <div className="flex items-center gap-1 sm:gap-2">
              <Mail className="w-4 h-4" />
              Privacy queries:
              <a className="text-emerald-700" href={`mailto:${meta.dpoEmail}`}>{meta.dpoEmail}</a>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              • Account:
              <a className="text-emerald-700" href={`mailto:${meta.supportEmail}`}>{meta.supportEmail}</a>
            </div>
          </div>

        </div>

        <aside className="lg:col-span-4 lg:sticky lg:top-6 h-fit">
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <div className="font-semibold mb-2">On this page</div>
            <nav className="space-y-1 text-sm">
              {PRIVACY_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={slugToHash(s.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setOpen({ ...open, [s.id]: true });
                    history.replaceState(null, '', slugToHash(s.id));
                  }}
                  className={`block px-2 py-1 rounded-lg transition ${activeId === s.id ? 'bg-sky-50 text-sky-700' : 'hover:bg-gray-50'}`}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-3 text-xs text-gray-500">This Policy is informational and not legal advice. For specific guidance, consult your counsel.</div>
        </aside>
      </div>
    </div>
  );
}
