import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, Printer, Download, ChevronDown, ChevronRight, Link as LinkIcon, AlertTriangle, Shield, ShieldCheck, Info, Wrench, Globe, Server, Zap, Landmark, Flag, BookOpenCheck, CircleCheckBig } from "lucide-react";
import SuccessMsg from "./SucessMsg";
import ErrorMsg from "./ErrorMsg";
const META = {
  entity: "Digibility Solutions Pvt. Ltd., Pune, India",
  lastUpdated: "17 August 2025",
  supportEmail: "support@digibility.com",
  legalEmail: "legal@digibility.com",
};

const SECTIONS = [
  {
    id: "general",
    title: "1. General Information Only",
    subtitle: "No legal, financial, or professional advice.",
    body: [
      `Content produced by or through Digibility (including AI‑generated outputs, reports, and insights) is provided for general informational and operational purposes only and does not constitute legal, financial, accounting, medical, or other professional advice. You should obtain advice from qualified professionals for decisions requiring such expertise.`,
      `While we strive for accuracy and usefulness, information may be incomplete, outdated, or contain errors or omissions. Use at your own discretion.`,
    ],
  },
  {
    id: "noguarantee",
    title: "2. No Guarantees of Performance",
    subtitle: "Results vary and are not guaranteed.",
    body: [
      `Marketing performance depends on many factors beyond our control (industry, budget, product/market fit, platform algorithms, competition, seasonality, user behavior, and your own approvals and inputs). We do not guarantee specific outcomes (e.g., likes, leads, sales, rankings, ROI).`,
      `Any benchmarks, case studies, or testimonials are illustrative and not promises of future results.`,
    ],
  },
  {
    id: "thirdparties",
    title: "3. Third‑Party Platforms & Dependencies",
    subtitle: "We are not responsible for external platforms.",
    body: [
      `Digibility integrates with third‑party platforms and providers (e.g., Meta, Google, LinkedIn, Twitter/X, payment processors, cloud hosting). Availability, performance, policy changes, outages, accounts bans/blocks, or API limitations of those services are outside our control.`,
      `Access tokens can expire or be revoked. Posting failures, campaign disruptions, or analytics gaps resulting from third‑party issues are not Digibility’s responsibility.`,
    ],
  },
  {
    id: "ai",
    title: "4. AI & Human‑in‑the‑Loop Limitations",
    subtitle: "AI is probabilistic; human review mitigates but does not eliminate errors.",
    body: [
      `Our system is AI‑driven with internal review during the MVP phase. AI outputs can be inaccurate, biased, similar to publicly available content, or unsuitable without context. You must review and approve all analysis, calendars, and creatives before publishing.`,
      `Prompts and inputs you provide strongly influence outputs. Provide accurate context and constraints to reduce risk.`,
    ],
  },
  {
    id: "contentresponsibility",
    title: "5. Content Responsibility & Compliance",
    subtitle: "You are responsible for your claims and materials.",
    body: [
      `You are solely responsible for the accuracy and legality of your offers, claims, and creative materials (including trademarks, logos, product images, pricing, and regulatory disclosures).`,
      `You warrant that your uploads and directives do not infringe third‑party rights and comply with applicable laws, industry codes, and platform policies (e.g., advertising standards, consumer protection, intellectual property, data protection).`,
    ],
  },
  {
    id: "prohibited",
    title: "6. Prohibited or Sensitive Content",
    subtitle: "We may refuse, suspend, or remove content.",
    body: [
      `We may decline or suspend campaigns we deem illegal, harmful, hateful, deceptive, sexually explicit, or otherwise prohibited by platform rules or law.`,
      `Examples include: discrimination or hate speech; illegal goods/services; counterfeit or IP‑infringing materials; dangerous products; misrepresentation and scams; privacy violations; and any other content we reasonably consider non‑compliant.`,
    ],
  },
  {
    id: "uptime",
    title: "7. Availability, Maintenance & Force Majeure",
    subtitle: "Service may be interrupted; some causes are beyond control.",
    body: [
      `We aim for reliable service but do not guarantee uninterrupted or error‑free operation. Planned maintenance or urgent fixes may temporarily limit access.`,
      `Events beyond our reasonable control (e.g., network failures, DDoS, cloud provider outages, natural disasters, regulatory actions) may cause delays or service unavailability.`,
    ],
  },
  {
    id: "security",
    title: "8. Security & Data Handling",
    subtitle: "Strong safeguards; no method is 100% secure.",
    body: [
      `We employ administrative, technical, and physical security measures, including encryption in transit and access controls. However, no method of transmission or storage is completely secure.`,
      `For details, review our Privacy Policy, which explains processing, sharing, international transfers, and your rights.`,
    ],
  },
  {
    id: "geography",
    title: "9. Geographic & Regulatory Considerations",
    subtitle: "Laws vary by location; you must ensure local compliance.",
    body: [
      `We operate globally via reputable cloud infrastructure. You are responsible for ensuring that your use of the Services is permitted under the laws and regulations of your jurisdiction (including advertising standards, consumer protection, data protection, and export controls).`,
      `Certain features or integrations may be unavailable or modified in specific regions due to local requirements or platform rules.`,
    ],
  },
  {
    id: "forwardlooking",
    title: "10. Forward‑Looking Statements",
    subtitle: "Plans and roadmaps are subject to change.",
    body: [
      `Any statements about future features, roadmaps, or product directions are for informational purposes and are not commitments. Timing and scope may change without notice.`,
    ],
  },
  {
    id: "changes",
    title: "11. Changes Without Notice",
    subtitle: "We may update platform materials and this disclaimer.",
    body: [
      `We may update documentation, website content, and this disclaimer periodically. Material changes will be communicated through reasonable channels (e.g., in‑product notifications, email). Continued use signifies acceptance.`,
    ],
  },
  {
    id: "liability",
    title: "12. Limitation of Liability Reference",
    subtitle: "See Terms & Conditions for the binding cap.",
    body: [
      `This disclaimer supplements (and does not replace) our Terms & Conditions, which govern your use of the Services. In the event of conflict, the Terms prevail, including limitations that cap our liability to the subscription fees paid in the last 3 months.`,
    ],
  },
  {
    id: "contact",
    title: "13. Contact & Notices",
    subtitle: "How to reach us.",
    body: [
      `Questions about this disclaimer can be sent to support@digibility.com or legal@digibility.com.`,
      `Registered entity: Digibility Solutions Pvt. Ltd., Pune, India.`,
    ],
  },
];

const hash = (id) => `#${id}`;

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

export default function DisclaimerPage(){
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(() => Object.fromEntries(SECTIONS.map(s => [s.id, s.id === SECTIONS[0].id])));
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const [ack, setAck] = useState(false);
  const [storedAck, setStoredAck] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('dig_disclaimer_ack');
    if (saved) {
      try { setStoredAck(JSON.parse(saved)); } catch {}
    }
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => { if(e.isIntersecting) setActiveId(e.target.id); });
    }, { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 });
    const nodes = containerRef.current?.querySelectorAll('section[data-disc]');
    nodes?.forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(()=>{
    if(!query) return;
    const next = { ...open };
    SECTIONS.forEach(s=>{
      const hit = s.title.toLowerCase().includes(query.toLowerCase()) || s.body.some(p => p.toLowerCase().includes(query.toLowerCase()));
      if(hit) next[s.id] = true;
    });
    setOpen(next);
  }, [query]);

  const filtered = useMemo(()=>{
    if(!query) return SECTIONS;
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
    a.href = url; a.download = 'digibility_disclaimer.txt'; a.click();
    URL.revokeObjectURL(url);
  };

  const saveAck = () => {
    const payload = { acknowledgedAt: new Date().toISOString(), version: META.lastUpdated };
    localStorage.setItem('dig_disclaimer_ack', JSON.stringify(payload));
    setStoredAck(payload);
    setAck(false);
    alert('Thanks. Your acknowledgement has been saved.');
  };

  return (
    <div className="min-h-screen bg-gray-50">


      <div className="max-w-7xl mx-auto px-6 pt-[10vh] pb-4">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Disclaimer</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">Important notices to help you use Digibility safely and responsibly.</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
              <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">Entity: {META.entity}</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Last Updated: {META.lastUpdated}</span>
              {storedAck && (
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-2"><CircleCheckBig className="w-4 h-4"/> Acknowledged on {new Date(storedAck.acknowledgedAt).toLocaleString()}</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/>
              <input className="pl-9 pr-3 py-2 rounded-xl border bg-white w-64 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Search disclaimer…" value={query} onChange={(e)=>setQuery(e.target.value)} />
            </div>
            <button onClick={expandAll} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm">Expand all</button>
            <button onClick={collapseAll} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm">Collapse all</button>
            <button onClick={printPage} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2"><Printer className="w-4 h-4"/> Print</button>
            <button onClick={downloadTxt} className="px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center gap-2"><Download className="w-4 h-4"/> Download</button>
          </div>
        </div>
      </div>

      {/* Content + ToC */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main */}
        <div className="lg:col-span-8" ref={containerRef}>
          {SECTIONS.filter(s => filtered.includes(s)).map((s) => (
            <section key={s.id} id={s.id} data-disc className="mb-4 bg-white border rounded-2xl shadow-sm overflow-hidden">
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
                </div>
              )}
            </section>
          ))}

          {/* Acknowledgement */}
          <div className="mt-8 bg-white border rounded-2xl p-5 flex items-start gap-3">
            <input id="ack" type="checkbox" className="mt-1 w-4 h-4" checked={ack} onChange={(e)=>setAck(e.target.checked)} />
            <label htmlFor="ack" className="text-sm text-gray-700">I have read and understood the above disclaimers.</label>
            <button
              disabled={!ack}
              onClick={saveAck}
              className={`ml-auto px-4 py-2 rounded-xl text-white flex items-center gap-2 ${ack ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              <BookOpenCheck className="w-4 h-4"/> Save Acknowledgement
            </button>
          </div>

          {/* Contact strip */}
          <div className="mt-4 text-sm text-gray-600">Questions? Email <a className="text-emerald-700" href={`mailto:${META.supportEmail}`}>{META.supportEmail}</a> or <a className="text-emerald-700" href={`mailto:${META.legalEmail}`}>{META.legalEmail}</a>.</div>
        </div>

        {/* ToC */}
        <aside className="lg:col-span-4 lg:sticky lg:top-6 h-fit">
          <div className="bg-white border rounded-2xl p-4 shadow-sm">
            <div className="font-semibold mb-2">On this page</div>
            <nav className="space-y-1 text-sm">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={hash(s.id)}
                  onClick={(e)=>{
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior:'smooth', block:'start' });
                    setOpen({ ...open, [s.id]: true });
                    history.replaceState(null, '', hash(s.id));
                  }}
                  className={`block px-2 py-1 rounded-lg transition ${activeId === s.id ? 'bg-sky-50 text-sky-700' : 'hover:bg-gray-50'}`}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-3 text-xs text-gray-500">This Disclaimer supplements our Terms & Conditions, Privacy Policy, and Refund Policy. In case of conflict, the Terms prevail.</div>
        </aside>
      </div>
</div>
  );
}
