import React, { useEffect, useMemo, useRef, useState } from "react";
import { Cookie, Search, Printer, Download, ChevronDown, ChevronRight, Link as LinkIcon, ShieldCheck, Shield, Globe, Gavel, Info, Settings2, Check, X, FileDown, Undo2 } from "lucide-react";

import SuccessMsg from "./SucessMsg";
import ErrorMsg from "./ErrorMsg";
const META = {
  entity: "Digibility Solutions Pvt. Ltd., Pune, India",
  lastUpdated: "17 August 2025",
  supportEmail: "support@digibility.com",
  privacyEmail: "privacy@digibility.com",
};

const PREFS_KEY = "dig_cookie_prefs";
const CONSENT_KEY = "dig_cookie_consent";

const DEFAULT_PREFS = {
  necessary: true,
  functional: true,
  analytics: false,
  marketing: false,
  doNotSell: false,
};

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    subtitle: "What this policy covers and who we are.",
    body: [
      `This Cookie Policy explains how Digibility (\"we\", \"us\") uses cookies and similar technologies on our website and application (the \"Services\"). It applies to all visitors, users, and customers globally.`,
      `Cookies are small text files stored on your device to recognize your browser, remember settings, and improve your experience. We also use pixels, web beacons, and local storage.`,
    ],
  },
  {
    id: "types",
    title: "2. Types of Cookies We Use",
    subtitle: "Strictly Necessary, Functional, Analytics, Marketing.",
    body: [
      `Strictly Necessary: required for core features like authentication, security, and subscription management. These cannot be disabled.`,
      `Functional: remember preferences (e.g., language, UI settings) to enhance experience.`,
      `Performance & Analytics: help us understand usage and improve the Services (e.g., page performance, feature adoption).`,
      `Marketing & Advertising: used to deliver relevant ads and measure campaign effectiveness (may be set by Digibility or third‑party networks).`,
    ],
  },
  {
    id: "why",
    title: "3. Why We Use Cookies",
    subtitle: "Enable secure login, measure performance, personalize, and advertise (with consent).",
    body: [
      `We use cookies to provide secure login, prevent abuse, remember preferences, analyze performance, personalize content, and—where permitted—serve or measure advertisements.`,
    ],
  },
  {
    id: "control",
    title: "4. Your Choices & Control",
    subtitle: "Manage consent with our Cookie Preferences Manager.",
    body: [
      `On first visit you'll see a cookie banner. You can change your choices anytime below. Disabling certain cookies may impact features.`,
    ],
  },
  {
    id: "thirdparty",
    title: "5. Third‑Party Cookies",
    subtitle: "Integrations and their own policies.",
    body: [
      `Our Services integrate with third parties (e.g., Meta, Google, LinkedIn, Zapier). These providers may set their own cookies and track activity per their policies, which we do not control.`,
    ],
  },
  {
    id: "compliance",
    title: "6. Global Compliance",
    subtitle: "GDPR/EU‑UK, CCPA/CPRA, ePrivacy, and other regimes.",
    body: [
      `GDPR/EU‑UK: Non‑essential cookies (Functional/Analytics/Marketing) require opt‑in consent. You may withdraw consent any time.`,
      `CCPA/CPRA (California): You may opt‑out of \"sale/share\" of personal information via the \"Do Not Sell or Share\" control below.`,
      `ePrivacy and other jurisdictions: We provide clear notice and choices and will adapt as laws evolve.`,
    ],
  },
  {
    id: "retention",
    title: "7. Retention & Expiry",
    subtitle: "Session vs persistent cookies.",
    body: [
      `Session cookies expire when you close the browser. Persistent cookies last for a fixed period (up to 12 months) unless you clear them earlier.`,
    ],
  },
  {
    id: "updates",
    title: "8. Updates to this Policy",
    subtitle: "We will notify you of material changes.",
    body: [
      `We may update this Cookie Policy periodically. Material changes will be notified via email, dashboard alerts, or an updated banner.`,
    ],
  },
  {
    id: "contact",
    title: "9. Contact",
    subtitle: "How to reach us about cookies.",
    body: [
      `Email: privacy@digibility.com (privacy) • support@digibility.com (support)`,
      `Entity: Digibility Solutions Pvt. Ltd., Pune, India`,
    ],
  },
];

const toHash = (id) => `#${id}`;

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

function useIntersectionActive(setActiveId) {
  const containerRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); });
    }, { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 });
    const nodes = containerRef.current?.querySelectorAll('section[data-cookie]');
    nodes?.forEach(n => io.observe(n));
    return () => io.disconnect();
  }, [setActiveId]);
  return containerRef;
}

function applyConsent(prefs) {
  if (typeof window !== 'undefined') {
    window.__digibilityConsent = prefs;
  }
}

export function CookieBanner({ onManage }) {
  const [hidden, setHidden] = useState(() => {
    try { return !!JSON.parse(localStorage.getItem(CONSENT_KEY)); } catch { return false; }
  });
  if (hidden) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-4 p-4 rounded-2xl border bg-white shadow-lg">
        <div className="flex items-start gap-3">
          <Cookie className="w-5 h-5 text-amber-600 mt-0.5" />
          <div className="text-sm">
            <div className="font-medium">We use cookies</div>
            <div className="text-gray-600">We use cookies to run the site, improve performance, and (with consent) personalize marketing. Manage your choices anytime.</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button onClick={() => {
                const prefs = { ...DEFAULT_PREFS, functional: true, analytics: true, marketing: true };
                localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
                localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: META.lastUpdated, consentedAt: new Date().toISOString() }));
                applyConsent(prefs);
                setHidden(true);
              }} className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-sm">Accept all</button>
              <button onClick={() => {
                const prefs = { ...DEFAULT_PREFS, functional: true, analytics: false, marketing: false };
                localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
                localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: META.lastUpdated, consentedAt: new Date().toISOString() }));
                applyConsent(prefs);
                setHidden(true);
              }} className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm">Reject non‑essential</button>
              <button onClick={() => onManage?.()} className="px-3 py-1.5 rounded-lg border text-sm">Manage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CookiePolicyPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(() => Object.fromEntries(SECTIONS.map(s => [s.id, s.id === SECTIONS[0].id])));
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const [prefs, setPrefs] = useState(() => {
    try { return { ...DEFAULT_PREFS, ...(JSON.parse(localStorage.getItem(PREFS_KEY)) || {}) }; } catch { return DEFAULT_PREFS; }
  });
  const [consent, setConsent] = useState(() => {
    try { return JSON.parse(localStorage.getItem(CONSENT_KEY)); } catch { return null; }
  });
  const [showBannerManage, setShowBannerManage] = useState(false);

  const containerRef = useIntersectionActive(setActiveId);

  useEffect(() => { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); applyConsent(prefs); }, [prefs]);

  useEffect(() => {
    if (!query) return;
    const next = { ...open };
    SECTIONS.forEach(s => {
      const hit = s.title.toLowerCase().includes(query.toLowerCase()) || s.body.some(p => p.toLowerCase().includes(query.toLowerCase()));
      if (hit) next[s.id] = true;
    });
    setOpen(next);
  }, [query]);

  const filtered = useMemo(() => {
    if (!query) return SECTIONS;
    const q = query.toLowerCase();
    return SECTIONS.filter(s => s.title.toLowerCase().includes(q) || s.body.some(p => p.toLowerCase().includes(q)));
  }, [query]);

  const expandAll = () => setOpen(Object.fromEntries(SECTIONS.map(s => [s.id, true])));
  const collapseAll = () => setOpen(Object.fromEntries(SECTIONS.map(s => [s.id, false])));

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
    const plain = SECTIONS.map(s => `${s.title}\n${s.body.join('\n')}\n`).join('\n');
    const blob = new Blob([plain], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'digibility_cookie_policy.txt'; a.click();
    URL.revokeObjectURL(url);
  };

  const saveConsent = () => {
    const payload = { version: META.lastUpdated, consentedAt: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));
    setConsent(payload);
    alert('Preferences saved');
  };

  const resetPrefs = () => {
    setPrefs(DEFAULT_PREFS);
    localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {showBannerManage && <CookieBanner onManage={() => setShowBannerManage(false)} />}


      <div className="max-w-7xl mx-auto px-6 pt-[10vh] pb-4">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Cookie Policy</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">How Digibility uses cookies and how you can control them.</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
              <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">Entity: {META.entity}</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Last Updated: {META.lastUpdated}</span>
              {consent && (
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Consented on {new Date(consent.consentedAt).toLocaleString()}</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input className="pl-9 pr-3 py-2 rounded-xl border bg-white w-64 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Search policy…" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <button onClick={expandAll} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm">Expand all</button>
            <button onClick={collapseAll} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm">Collapse all</button>
            <button onClick={printPage} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2"><Printer className="w-4 h-4" /> Print</button>
            <button onClick={downloadTxt} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2"><Download className="w-4 h-4" /> Download</button>
          </div>
        </div>
      </div>

      {/* Preferences Manager */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 font-semibold mb-3"><Settings2 className="w-5 h-5" /> Cookie Preferences</div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[{
              key: 'necessary', name: 'Strictly Necessary', desc: 'Required for core features (login, security, subscriptions).', locked: true
            }, {
              key: 'functional', name: 'Functional', desc: 'Remembers settings like language and UI preferences.'
            }, {
              key: 'analytics', name: 'Performance & Analytics', desc: 'Helps us measure usage and improve the product.'
            }, {
              key: 'marketing', name: 'Marketing & Advertising', desc: 'Personalized ads and campaign measurement.'
            }].map(item => (
              <div key={item.key} className="p-3 rounded-xl border bg-gray-50 flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-4 h-4" checked={prefs[item.key]} disabled={item.locked} onChange={() => setPrefs(p => ({ ...p, [item.key]: !p[item.key] }))} />
                <div>
                  <div className="font-medium">{item.name} {item.locked && <span className="text-xs ml-1 px-1.5 py-0.5 rounded-full bg-gray-100 border">required</span>}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CCPA/CPRA Opt-out */}
          <div className="mt-4 p-3 rounded-xl border bg-amber-50 text-amber-900">
            <div className="flex items-center gap-2 font-medium"><Gavel className="w-4 h-4" /> CCPA/CPRA – Do Not Sell or Share My Personal Information</div>
            <div className="text-xs mt-1">Enable this to opt‑out of \"sale/share\" of personal information for targeted advertising. This disables Analytics and Marketing cookies.</div>
            <div className="mt-2 flex items-center gap-2">
              <input id="dns" type="checkbox" className="w-4 h-4" checked={prefs.doNotSell} onChange={() => setPrefs(p => ({ ...p, doNotSell: !p.doNotSell, analytics: !p.doNotSell ? false : p.analytics, marketing: !p.doNotSell ? false : p.marketing }))} />
              <label htmlFor="dns" className="text-sm">Do Not Sell or Share</label>
              <button onClick={() => setPrefs(p => ({ ...p, analytics: false, marketing: false, doNotSell: true }))} className="ml-auto text-xs px-2 py-1 rounded-lg bg-gray-900 text-white">Opt‑out now</button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button onClick={() => setPrefs(p => ({ ...DEFAULT_PREFS, functional: true, analytics: true, marketing: true }))} className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm flex items-center gap-2"><Check className="w-4 h-4" /> Accept all</button>
            <button onClick={() => setPrefs(p => ({ ...DEFAULT_PREFS, functional: true, analytics: false, marketing: false }))} className="px-3 py-2 rounded-xl bg-gray-900 text-white text-sm flex items-center gap-2"><X className="w-4 h-4" /> Reject non‑essential</button>
            <button onClick={saveConsent} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Save preferences</button>
            <button onClick={resetPrefs} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2"><Undo2 className="w-4 h-4" /> Reset</button>
            <button onClick={() => setShowBannerManage(true)} className="ml-auto text-sm underline">Show banner</button>
          </div>

          {consent && (
            <div className="mt-3 text-xs text-gray-600">You consented on <strong>{new Date(consent.consentedAt).toLocaleString()}</strong> • Version: {consent.version}</div>
          )}
        </div>
      </div>

      {/* Content + ToC */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main */}
        <div className="lg:col-span-8" ref={containerRef}>
          {SECTIONS.filter(s => filtered.includes(s)).map((s) => (
            <section key={s.id} id={s.id} data-cookie className="mb-4 bg-white border rounded-2xl shadow-sm overflow-hidden">
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

                  {s.id === 'compliance' && (
                    <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                      <div className="p-3 rounded-xl border bg-emerald-50 text-emerald-900"><Shield className="w-4 h-4 inline mr-1" /> GDPR/EU‑UK: opt‑in for non‑essential; withdraw anytime in Preferences.</div>
                      <div className="p-3 rounded-xl border bg-amber-50 text-amber-900"><Gavel className="w-4 h-4 inline mr-1" /> CCPA/CPRA: use \"Do Not Sell or Share\" to opt‑out of sale/sharing.</div>
                      <div className="p-3 rounded-xl border bg-sky-50 text-sky-900"><Globe className="w-4 h-4 inline mr-1" /> Other: jurisdiction‑specific rules may apply; we adapt as laws evolve.</div>
                    </div>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* ToC */}
        <aside className="lg:col-span-4 lg:sticky lg:top-6 h-fit">
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <div className="font-semibold mb-2">On this page</div>
            <nav className="space-y-1 text-sm">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={toHash(s.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setOpen({ ...open, [s.id]: true });
                    history.replaceState(null, '', toHash(s.id));
                  }}
                  className={`block px-2 py-1 rounded-lg transition ${activeId === s.id ? 'bg-sky-50 text-sky-700' : 'hover:bg-gray-50'}`}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-3 text-xs text-gray-500">This Cookie Policy complements our Terms, Privacy, and Refund policies.</div>
        </aside>
      </div>
    </div>
  );
}
