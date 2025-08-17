import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, Printer, Download, ChevronDown, ChevronRight, Link as LinkIcon, CalendarDays, Info, CheckCircle2, AlertTriangle, IndianRupee, DollarSign } from "lucide-react";
import SuccessMsg from "./SucessMsg";
import ErrorMsg from "./ErrorMsg";


const META = {
  lastUpdated: "17 August 2025",
};

const SECTIONS = [
  {
    id: "summary",
    title: "1. Summary",
    subtitle: "Clear overview of how refunds work at Digibility.",
    body: [
      `You have a 7‑day refund window starting from your Registration Date. Within this period, your content calendar is created and shared for approval. If you don’t act within 3 days of receiving the calendar, it is auto‑approved. Once the calendar is approved (by you or auto‑approved), refunds are not possible — including where AI credits have been consumed. Your plan’s service period begins on Day 15 from your Registration Date.`,
    ],
  },
  {
    id: "eligibility",
    title: "2. Refund Eligibility",
    subtitle: "When a refund may be requested.",
    body: [
      `Refunds are available only within the first 7 calendar days from Registration Date and only if the content calendar has not been approved or auto‑approved.`,
      `If you request a refund within the window and before approval/auto‑approval, we will process a full refund of the subscription charge.`,
      `Refunds are not available for partial periods once the content calendar is approved or after Day 7, whichever comes first.`,
    ],
  },
  {
    id: "no_refund",
    title: "3. No‑Refund Conditions",
    subtitle: "Situations where refunds are not issued.",
    body: [
      `No refund after the content calendar approval (explicit approval by you or auto‑approval after 3 days of no response).`,
      `No refund after the 7‑day refund period ends, regardless of calendar status.`,
      `No refund where AI credits have been consumed in analysis, calendar generation, or content preparation.`,
      `No refund for delays caused by lack of access, late inputs, or third‑party platform issues (e.g., Meta/Google/LinkedIn/Twitter/X).`,
    ],
  },
  {
    id: "activation",
    title: "4. Service Activation & Renewals",
    subtitle: "When your paid service starts and how renewals work.",
    body: [
      `Your service period starts on the 15th day after Registration. Example: Register on 1st → service activates on the 15th of the same month.`,
      `Monthly and Annual plans auto‑renew and auto‑debit your saved payment method until you cancel. Cancellation prevents future renewals; it does not refund current/elapsed periods.`,
      `Annual plans follow the same refund logic (7‑day window from Registration and no refund after approval/auto‑approval).`,
    ],
  },
  {
    id: "howto",
    title: "5. How to Request a Refund",
    subtitle: "Simple steps during your 7‑day window.",
    body: [
      `Submit a ticket from your dashboard or email support@digibility.com with subject “Refund Request” and include your Registration Date, plan name, and reason.`,
      `We verify eligibility (window open + no approval/auto‑approval + minimal/zero credits used) and confirm within standard support SLAs.`,
    ],
  },
  {
    id: "payments",
    title: "6. Currency, Taxes & Processing",
    subtitle: "Where charges apply and how they appear.",
    body: [
      `India: Billed in INR; GST applies as per law.`,
      `International: Billed in USD; GST does not apply.`,
      `Refunds (when eligible) are processed back to the original payment method. Bank processing timelines may vary (typically 5–10 business days).`,
    ],
  },
  {
    id: "examples",
    title: "7. Examples",
    subtitle: "Illustrative scenarios to avoid confusion.",
    body: [
      `A. Register on 1st. Calendar delivered on 3rd. You don’t respond by 6th → Auto‑approved. No refund. Service starts on 15th.`,
      `B. Register on 1st. You request refund on 5th before approving the calendar → Full refund.`,
      `C. Register on 1st. You approve calendar on 4th → No refund (credits consumed + approval).`,
      `D. Register on 1st. No calendar yet by 7th (rare). You request refund on 7th → Full refund.`,
    ],
  },
  {
    id: "notes",
    title: "8. Important Notes",
    subtitle: "Edge cases and fairness rules.",
    body: [
      `Auto‑approval triggers 3 days after the calendar is presented to you inside the app and/or via email notification.`,
      `If you delay providing access, assets, offers, or approvals, schedules may slip; refunds are not issued for such delays.`,
      `We may update this policy with notice; continued use after changes indicates acceptance.`,
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

function addDays(d, n){ const x=new Date(d); x.setDate(x.getDate()+n); return x; }
function toISODate(d){ return d.toISOString().slice(0,10); }

export default function RefundPolicyPage(){
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(() => Object.fromEntries(SECTIONS.map(s => [s.id, s.id === SECTIONS[0].id])));
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const containerRef = useRef(null);

  const todayISO = useMemo(()=> toISODate(new Date()), []);
  const [regDate, setRegDate] = useState(todayISO);
  const [presentedDate, setPresentedDate] = useState("");

  const refundEnd = useMemo(()=> toISODate(addDays(new Date(regDate), 7-1)), [regDate]); 
  const serviceStart = useMemo(()=> toISODate(addDays(new Date(regDate), 14)), [regDate]);
  const autoApprove = useMemo(()=> presentedDate ? toISODate(addDays(new Date(presentedDate), 3)) : "—", [presentedDate]);

  useEffect(() => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => { if(e.isIntersecting) setActiveId(e.target.id); });
    }, { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 });
    const nodes = containerRef.current?.querySelectorAll('section[data-refund]');
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
    a.href = url; a.download = 'digibility_refund_policy.txt'; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 pt-[10vh] pb-4">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Refund Policy</h1>
            <p className="text-gray-600 mt-2 max-w-2xl">Understand your refund window, approvals, and service activation dates.</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Last Updated: {META.lastUpdated}</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1"><IndianRupee className="w-3.5 h-3.5"/>INR + GST (India)</span>
              <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 flex items-center gap-1"><DollarSign className="w-3.5 h-3.5"/>USD (International)</span>
            </div>
          </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
  <div className="relative w-[80vw] sm:w-64">
    <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
    <input
      className="pl-9 pr-3 py-2 rounded-xl border bg-white w-full focus:outline-none focus:ring-2 focus:ring-amber-300"
      placeholder="Search policy…"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </div>

  <button
    onClick={expandAll}
    className="w-[80vw] sm:w-auto px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm"
  >
    Expand all
  </button>

  <button
    onClick={collapseAll}
    className="w-[80vw] sm:w-auto px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm"
  >
    Collapse all
  </button>

  <button
    onClick={printPage}
    className="w-[80vw] sm:w-auto px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center justify-center gap-2"
  >
    <Printer className="w-4 h-4" /> Print
  </button>

  <button
    onClick={downloadTxt}
    className="w-[80vw] sm:w-auto px-3 py-2 rounded-xl border bg-white hover:bg-gray-100 text-sm flex items-center justify-center gap-2"
  >
    <Download className="w-4 h-4" /> Download
  </button>
</div>

        </div>
      </div>

      {/* Interactive timeline helper */}
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="bg-white border rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 font-semibold mb-3"><CalendarDays className="w-5 h-5"/> Calculate Your Key Dates</div>
          <div className="grid md:grid-cols-3 gap-4">
            <label className="text-sm">
              <div className="text-gray-600 mb-1">Registration Date</div>
              <input type="date" value={regDate} onChange={(e)=>setRegDate(e.target.value)} className="w-full border rounded-lg px-3 py-2"/>
            </label>
            <label className="text-sm">
              <div className="text-gray-600 mb-1">Calendar Presented Date <span className="text-gray-400">(optional)</span></div>
              <input type="date" value={presentedDate} onChange={(e)=>setPresentedDate(e.target.value)} className="w-full border rounded-lg px-3 py-2"/>
            </label>
            <div className="text-sm p-3 rounded-xl bg-slate-50 border">
              <div className="text-gray-600 mb-1 flex items-center gap-1"><Info className="w-4 h-4"/> Notes</div>
              <div className="text-xs text-gray-600">Auto‑approval occurs 3 days after the calendar is presented. Service activates on Day 15 from Registration.</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
            <div className="p-3 rounded-xl bg-emerald-50 border text-emerald-800">
              <div className="font-medium">Refund Window Ends</div>
              <div className="text-lg">{refundEnd}</div>
              <div className="text-xs">(Day 7 inclusive)</div>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border text-amber-800">
              <div className="font-medium">Auto‑Approval Deadline</div>
              <div className="text-lg">{autoApprove}</div>
              <div className="text-xs">(3 days after calendar presented)</div>
            </div>
            <div className="p-3 rounded-xl bg-sky-50 border text-sky-800">
              <div className="font-medium">Service Starts</div>
              <div className="text-lg">{serviceStart}</div>
              <div className="text-xs">(15th day from Registration)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content + ToC */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main */}
        <div className="lg:col-span-8" ref={containerRef}>
          {SECTIONS.filter(s => filtered.includes(s)).map((s) => (
            <section key={s.id} id={s.id} data-refund className="mb-4 bg-white border rounded-2xl shadow-sm overflow-hidden">
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

                  {s.id === 'no_refund' && (
                    <div className="mt-4 p-3 rounded-xl border bg-rose-50 text-rose-800 text-sm flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-0.5"/> Once the calendar is approved (or auto‑approved), refunds are not possible, and AI credit consumption will be deemed utilized.</div>
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
                  href={hash(s.id)}
                  onClick={(e)=>{
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior:'smooth', block:'start' });
                    setOpen({ ...open, [s.id]: true });
                    history.replaceState(null, '', hash(s.id));
                  }}
                  className={`block px-2 py-1 rounded-lg transition ${activeId === s.id ? 'bg-amber-50 text-amber-700' : 'hover:bg-gray-50'}`}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-3 text-xs text-gray-500">This policy complements our Terms & Conditions. If anything conflicts, the Terms prevail.</div>
        </aside>
      </div>
 </div>
  );
}
