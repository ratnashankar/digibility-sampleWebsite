import React, { useMemo, useState } from "react";
import { Calendar, CheckCircle2, Clock, Rocket, Target, Users, Wrench, ChevronDown, ChevronUp, Filter, Download, AlertTriangle, Layers, GitBranch, BarChart3 } from "lucide-react";




const TAGS = {
  fe: { label: "Frontend", color: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  be: { label: "Backend", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  ai: { label: "Automation", color: "bg-amber-50 text-amber-700 border-amber-200" },
  ops: { label: "Ops", color: "bg-slate-50 text-slate-700 border-slate-200" },
  gtm: { label: "GTM", color: "bg-pink-50 text-pink-700 border-pink-200" },
};

const OWNERS = ["Swapnil", "Ratan", "Frontend Freelancer", "Static FE", "You"];

const STATUS_STYLE = {
  Planned: "bg-gray-100 text-gray-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Done: "bg-emerald-100 text-emerald-700",
  Parked: "bg-yellow-100 text-yellow-800",
  Blocked: "bg-red-100 text-red-700",
};

const QUARTERS = [
  "Q3'25", "Q4'25", "Q1'26", "Q2'26", "Q3'26", "Q4'26",
];

const PHASES = [
  {
    key: "p1",
    icon: Rocket,
    title: "Phase 1 — Social Media MVP",
    quarter: "Q3'25",
    goal: "Ship Onboarding + AI Analysis with HITL backend; marketing site live; Stripe/Razorpay billing.",
    progress: 35,
    milestones: [
      {
        id: "p1-m1",
        title: "Onboarding (UI + API + DB)",
        status: "In Progress",
        owners: ["Frontend Freelancer", "Swapnil", "Ratan"],
        tags: ["fe", "be"],
        quarter: "Q3'25",
        deps: [],
        notes: "Bare-minimum fields; validation; role-aware.",
      },
      {
        id: "p1-m2",
        title: "AI Profile Analysis (UI + API; HITL)",
        status: "In Progress",
        owners: ["Frontend Freelancer", "Swapnil", "Ratan"],
        tags: ["fe", "be", "ai"],
        quarter: "Q3'25",
        deps: ["p1-m1"],
        notes: "Manual enrichment behind API; GPT integration stubbed.",
      },
      {
        id: "p1-m3",
        title: "Marketing Site (Home, About, Pricing, Features)",
        status: "Planned",
        owners: ["Static FE"],
        tags: ["fe", "gtm"],
        quarter: "Q3'25",
        deps: [],
        notes: "SEO basics + analytics pixel setup.",
      },
      {
        id: "p1-m4",
        title: "Billing & Plans (Stripe/Razorpay)",
        status: "Planned",
        owners: ["Swapnil", "Ratan"],
        tags: ["be", "ops"],
        quarter: "Q3'25",
        deps: ["p1-m1"],
        notes: "Spark/Momentum/Apex plans; dual currency.",
      },
      {
        id: "p1-m5",
        title: "Admin Panel (Internal Ops)",
        status: "Planned",
        owners: ["Swapnil", "Ratan"],
        tags: ["be", "ops"],
        quarter: "Q3'25",
        deps: ["p1-m1"],
        notes: "Manual execution queue, approvals, audit log.",
      },
    ],
  },
  {
    key: "p1_2",
    icon: Wrench,
    title: "Phase 1.2 — Calendar, Created Content, Scheduling (Foundations)",
    quarter: "Q4'25",
    goal: "Ship calendar CRUD, drafts storage, and posting stubs; begin limited pilot.",
    progress: 10,
    milestones: [
      {
        id: "p1_2-m1",
        title: "Content Calendar (CRUD + Approvals)",
        status: "Planned",
        owners: ["Frontend Freelancer", "Swapnil", "Ratan"],
        tags: ["fe", "be"],
        quarter: "Q4'25",
        deps: ["p1-m2"],
        notes: "Month/Week views; per-item approval; audit trail.",
      },
      {
        id: "p1_2-m2",
        title: "Created Content Store (Copy + Assets)",
        status: "Planned",
        owners: ["Swapnil", "Ratan"],
        tags: ["be"],
        quarter: "Q4'25",
        deps: ["p1_2-m1"],
        notes: "S3/GCS storage; versioning; permissions.",
      },
      {
        id: "p1_2-m3",
        title: "Scheduling Stubs (Platform Connectors)",
        status: "Planned",
        owners: ["Swapnil", "Ratan"],
        tags: ["be"],
        quarter: "Q4'25",
        deps: ["p1_2-m2"],
        notes: "Meta/LinkedIn/Twitter OAuth + post stubs.",
      },
    ],
  },
  {
    key: "p2",
    icon: Target,
    title: "Phase 2 — SEO (Automation-First)",
    quarter: "Q1'26",
    goal: "Automated audits, keywords, competitor diff; monthly reporting.",
    progress: 0,
    milestones: [
      { id: "p2-m1", title: "Crawler + Audit Engine", status: "Planned", owners: ["Swapnil", "Ratan"], tags: ["be", "ai"], quarter: "Q1'26", deps: [], notes: "Lighthouse/API blend." },
      { id: "p2-m2", title: "Keyword Clusters + Gaps", status: "Planned", owners: ["Swapnil"], tags: ["ai"], quarter: "Q1'26", deps: ["p2-m1"], notes: "LLM ranking heuristics." },
      { id: "p2-m3", title: "SEO Report + Actions", status: "Planned", owners: ["Frontend Freelancer"], tags: ["fe"], quarter: "Q1'26", deps: ["p2-m2"], notes: "Prioritized tasks + export." },
    ],
  },
  {
    key: "p3",
    icon: Users,
    title: "Phase 3 — PPC & Paid (HITL setup, AI optimization)",
    quarter: "Q2'26",
    goal: "Campaign scaffolds, creative assist, budget optimizer.",
    progress: 0,
    milestones: [
      { id: "p3-m1", title: "Account Linking + Permissions", status: "Planned", owners: ["Swapnil", "Ratan"], tags: ["be"], quarter: "Q2'26", deps: [], notes: "Google Ads + Meta." },
      { id: "p3-m2", title: "Campaign Wizard + Templates", status: "Planned", owners: ["Frontend Freelancer"], tags: ["fe", "ai"], quarter: "Q2'26", deps: ["p3-m1"], notes: "Goal-based flows." },
      { id: "p3-m3", title: "Budget Optimizer (AI)", status: "Planned", owners: ["Swapnil"], tags: ["ai"], quarter: "Q2'26", deps: ["p3-m2"], notes: "Bid/budget suggestions." },
    ],
  },
  {
    key: "p4",
    icon: BarChart3,
    title: "Phase 4 — Reporting & Strategy Loop",
    quarter: "Q2'26",
    goal: "Close-the-loop insights that auto-inform next month's plan.",
    progress: 0,
    milestones: [
      { id: "p4-m1", title: "Cross-Channel Analytics", status: "Planned", owners: ["Swapnil", "Ratan"], tags: ["be"], quarter: "Q2'26", deps: ["p1_2-m3"], notes: "Metrics map + ETL." },
      { id: "p4-m2", title: "Insight Generator (LLM)", status: "Planned", owners: ["Swapnil"], tags: ["ai"], quarter: "Q2'26", deps: ["p4-m1"], notes: "Find winners + suggestions." },
      { id: "p4-m3", title: "Strategy Suggestions UI", status: "Planned", owners: ["Frontend Freelancer"], tags: ["fe"], quarter: "Q2'26", deps: ["p4-m2"], notes: "Apply-to-calendar flow." },
    ],
  },
];

function Tag({ t }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${TAGS[t].color}`}>{TAGS[t].label}</span>
  );
}

function StatusPill({ status }) {
  return <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_STYLE[status]}`}>{status}</span>;
}

function ProgressBar({ value }) {
  return (
    <div className="h-2 w-full bg-gray-100 rounded-full">
      <div className="h-2 bg-emerald-500 rounded-full" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function RoadmapPage() {
  const [view, setView] = useState("timeline");
  const [quarter, setQuarter] = useState("All");
  const [expanded, setExpanded] = useState({});

  const filteredPhases = useMemo(() => {
    if (quarter === "All") return PHASES;
    return PHASES.filter(p => p.quarter === quarter);
  }, [quarter]);

  const toggle = (k) => setExpanded((s) => ({ ...s, [k]: !s[k] }));

  const exportCSV = () => {
    const rows = [["Phase", "Milestone", "Quarter", "Status", "Owners", "Tags", "Dependencies", "Notes"]];
    PHASES.forEach(p => {
      p.milestones.forEach(m => {
        rows.push([p.title, m.title, m.quarter, m.status, m.owners.join(";"), m.tags.join(";"), m.deps.join(";"), m.notes]);
      });
    });
    const csv = rows.map(r => r.map(v => `"${String(v).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "digibility_roadmap.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">

      <div className="max-w-6xl mx-auto px-6 pt-[10vh] lg:pt-[13vh] pb-6">
        <h1 className="text-4xl font-bold">Product Roadmap</h1>
        <p className="text-gray-600 mt-2">A living plan for shipping Digibility fast, lean, and with compounding value.</p>
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 pb-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 bg-white border rounded-xl px-3 py-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">Quarter</span>
          <select className="text-sm border-none focus:outline-none" value={quarter} onChange={(e) => setQuarter(e.target.value)}>
            <option>All</option>
            {QUARTERS.map(q => <option key={q}>{q}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2 bg-white border rounded-xl px-3 py-2">
          <Layers className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">View</span>
          <button className={`text-sm px-2 py-1 rounded-lg ${view === 'timeline' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`} onClick={() => setView("timeline")}>Timeline</button>
          <button className={`text-sm px-2 py-1 rounded-lg ${view === 'kanban' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`} onClick={() => setView("kanban")}>Kanban</button>
        </div>

        <button onClick={exportCSV} className="ml-auto flex items-center gap-2 bg-white border rounded-xl px-3 py-2 hover:bg-gray-100">
          <Download className="w-4 h-4" /> <span className="text-sm">Export CSV</span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        {view === "timeline" ? (
          <div className="space-y-5">
            {filteredPhases.map((p) => (
              <div key={p.key} className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                <button onClick={() => toggle(p.key)} className="w-full text-left p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p.icon className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold">{p.title} <span className="text-gray-400">• {p.quarter}</span></div>
                      <div className="text-sm text-gray-600">{p.goal}</div>
                    </div>
                  </div>
                  <div className="min-w-[220px] flex items-center gap-3">
                    <ProgressBar value={p.progress} />
                    <span className="text-sm text-gray-600 w-10 text-right">{p.progress}%</span>
                    {expanded[p.key] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {expanded[p.key] && (
                  <div className="p-5 border-t">
                    <div className="space-y-3">
                      {p.milestones.map((m) => (
                        <div key={m.id} className="rounded-xl border p-4 bg-gray-50">
                          <div className="flex flex-wrap items-center gap-2 justify-between">
                            <div className="font-medium">{m.title}</div>
                            <div className="flex items-center gap-2">
                              <StatusPill status={m.status} />
                              <span className="text-xs text-gray-500">{m.quarter}</span>
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-gray-600">Owners: {m.owners.join(", ")}</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {m.tags.map((t) => <Tag key={t} t={t} />)}
                          </div>
                          {m.deps.length > 0 && (
                            <div className="mt-2 text-xs text-gray-500 flex items-center gap-1"><GitBranch className="w-4 h-4" />Depends on: {m.deps.join(", ")}</div>
                          )}
                          {m.notes && <div className="mt-2 text-xs text-gray-500">{m.notes}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-4">
            {(["Planned", "In Progress", "Blocked", "Done"]).map((col) => (
              <div key={col} className="bg-white rounded-2xl border shadow-sm p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">{col}</div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_STYLE[col]}`}>{col}</span>
                </div>
                <div className="space-y-3">
                  {PHASES.flatMap(p => p.milestones.map(m => ({ ...m, phase: p.title })))
                    .filter(m => (quarter === "All" || m.quarter === quarter))
                    .filter(m => (col === (m.status === "Planned" ? "Planned" : m.status)))
                    .map((m) => (
                      <div key={m.id} className="border rounded-xl p-3 bg-gray-50">
                        <div className="text-sm font-medium">{m.title}</div>
                        <div className="text-xs text-gray-500">{m.phase} • {m.quarter}</div>
                        <div className="mt-2 text-xs text-gray-600">Owners: {m.owners.join(", ")}</div>
                        <div className="mt-2 flex flex-wrap gap-1">{m.tags.map((t) => <Tag key={t} t={t} />)}</div>
                        {m.deps.length > 0 && <div className="mt-2 text-[10px] text-gray-500">Depends on: {m.deps.join(", ")}</div>}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
