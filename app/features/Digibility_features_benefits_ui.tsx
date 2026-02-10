"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Check,
  Sparkles,
  Rocket,
  Users,
  Star,
  Shield,
  Zap,
  Settings,
  BarChart3,
  LayoutGrid,
  Wand2,
  LineChart,
  Brain,
  Clock,
  ChevronDown,
  PlayCircle,
  MessageSquare,
} from "lucide-react";

type FeatureFilter =
  | "all"
  | "social"
  | "seo"
  | "ppc"
  | "content"
  | "email"
  | "orm"
  | "video"
  | "cro";

type AudienceKey = "spark" | "momentum" | "apex";

interface FeatureGroup {
  key: FeatureFilter;
  label: string;
}

interface FeatureItem {
  id: number;
  group: FeatureFilter;
  icon: any;
  title: string;
  desc: string;
  tag: string;
}

interface AudienceData {
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
}

interface USPItem {
  icon: any;
  title: string;
  desc: string;
}

interface DifferentiatorItem {
  q: string;
  a: string;
}

interface CompareSimpleItem {
  label: string;
  dig: string;
  other: string;
}

interface CompareDetailedItem {
  feature: string;
  dig: string;
  other: string;
}

export default function FeaturesBenefitsPage() {
  const [audience, setAudience] = useState<AudienceKey>("spark");
  const [featureFilter, setFeatureFilter] = useState<FeatureFilter>("all");
  const [compareMode, setCompareMode] = useState<"simple" | "detailed">("simple");
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({});

  const featureGroups: FeatureGroup[] = useMemo(
    () => [
      { key: "all", label: "All" },
      { key: "social", label: "Social Media" },
      { key: "seo", label: "SEO" },
      { key: "ppc", label: "PPC" },
      { key: "content", label: "Content" },
      { key: "email", label: "Email" },
      { key: "orm", label: "Reputation" },
      { key: "video", label: "Video" },
      { key: "cro", label: "CRO" },
    ],
    []
  );

  const features: FeatureItem[] = [
    { id: 1, group: "social", icon: LayoutGrid, title: "Unified Calendar", desc: "Plan, approve and schedule across all platforms.", tag: "HITL" },
    { id: 2, group: "social", icon: Wand2, title: "AI Creative Studio", desc: "Generate captions, carousels & reels with brand voice lock.", tag: "AI" },
    { id: 3, group: "seo", icon: BarChart3, title: "SEO Audit & Keywords", desc: "Automated audits & quick-win keyword clusters.", tag: "AI" },
    { id: 4, group: "ppc", icon: Zap, title: "Smart Budgeting", desc: "Reduce CPA with automated bid suggestions.", tag: "AI" },
    { id: 5, group: "content", icon: Brain, title: "Topic Intelligence", desc: "Competitor trend mining for content pillars.", tag: "AI" },
    { id: 6, group: "email", icon: MessageSquare, title: "Journeys & Drips", desc: "Automated email sequences & segmentation.", tag: "HITL" },
    { id: 7, group: "orm", icon: Shield, title: "Brand Listening", desc: "Monitor mentions & analyze sentiment.", tag: "AI" },
    { id: 8, group: "video", icon: PlayCircle, title: "Video Assist", desc: "Scripts and storyboards for short-form video.", tag: "HITL" },
    { id: 9, group: "cro", icon: LineChart, title: "CRO Experiments", desc: "AI-suggested A/B experiments.", tag: "AI" },
  ];

  const filtered = featureFilter === "all"
    ? features
    : features.filter((f) => f.group === featureFilter);

  const audienceBenefits: Record<AudienceKey, AudienceData> = {
    spark: {
      title: "Spark — Starting Up",
      subtitle: "Launch fast with AI guidance and simple approvals.",
      bullets: [
        "From signup to first 3 posts in a day",
        "AI drafts, you approve",
        "Crystal-clear pricing",
      ],
      cta: "Start with Spark →",
    },
    momentum: {
      title: "Momentum — Growing",
      subtitle: "Increase reach with reels & authority content.",
      bullets: [
        "Weekly mix auto-suggested",
        "LinkedIn articles for authority building",
        "Analytics that shape strategy",
      ],
      cta: "Grow with Momentum →",
    },
    apex: {
      title: "Apex — Scaling Up",
      subtitle: "Operate like an agency without hiring one.",
      bullets: [
        "Multi-channel dominance",
        "Human-checked quality",
        "Success manager included",
      ],
      cta: "Scale with Apex →",
    },
  };

  const usps: USPItem[] = [
    { icon: Sparkles, title: "AI + Human Review", desc: "Automation for speed, experts for quality." },
    { icon: Rocket, title: "End-to-End Flow", desc: "Analysis → Assets → Schedule → Report." },
    { icon: Shield, title: "Approval Control", desc: "Approvals at every stage." },
    { icon: Clock, title: "Fast Time-to-Value", desc: "Your calendar ready in a day." },
  ];

  const differentiators: DifferentiatorItem[] = [
    { q: "End-to-End vs Point Tools", a: "Digibility connects the full loop so insights feed next month automatically." },
    { q: "Human-in-the-Loop Quality", a: "AI speed + human review ensures brand safety." },
    { q: "Outcome Orientation", a: "Optimized for engagement, not output volume." },
    { q: "Scales With You", a: "Add channels & formats without workflow changes." },
  ];

  const competitorsSimple: CompareSimpleItem[] = [
    { label: "Scheduling Apps", dig: "Full loop", other: "Scheduling only" },
    { label: "Copy Tools", dig: "On-brand + visuals", other: "Only text" },
    { label: "Agencies", dig: "AI + HITL", other: "High cost" },
  ];

  const competitorsDetailed: CompareDetailedItem[] = [
    { feature: "Strategy → Calendar → Assets → Reporting", dig: "✔ Unified", other: "✖ Fragmented" },
    { feature: "Approvals (multi-stage)", dig: "✔ Built-in", other: "✖ Limited" },
    { feature: "Reels/Carousel prompts", dig: "✔ Native", other: "✖ Add-on" },
    { feature: "AI + Human Check", dig: "✔ Balanced", other: "✖ AI-only" },
    { feature: "Cost vs Agency", dig: "✔ ~1/10th", other: "✖ Expensive" },
  ];

  const toggleAcc = (i: number) =>
    setOpenAccordions((p) => ({ ...p, [i]: !p[i] }));

  useEffect(() => {
    setOpenAccordions({ 0: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white pt-[10vh] animate-fade-in">

      {/* -------------------------------------------------------------
           HERO
      -------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
          Features that Turn{" "}
          <span className="text-[#6D5CEB]">Consistency</span> into{" "}
          <span className="text-[#2DA4EF]">Growth</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg animate-fade-up delay-150">
          Digibility unifies analysis, planning, creation, scheduling & reporting.
        </p>
      </section>

      {/* -------------------------------------------------------------
           AUDIENCE TABS
      -------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-up">

          {[
            { key: "spark", label: "Spark • Starting Up" },
            { key: "momentum", label: "Momentum • Growing" },
            { key: "apex", label: "Apex • Scaling Up" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setAudience(t.key as AudienceKey)}
              className={`px-4 py-2 rounded-full border transition shadow-sm hover:shadow-md 
              ${
                audience === t.key
                  ? "bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] text-white border-[#6D5CEB]"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start animate-fade-up">

          <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition border">
            <h3 className="text-2xl font-semibold mb-1">{audienceBenefits[audience].title}</h3>
            <p className="text-gray-600 mb-4">{audienceBenefits[audience].subtitle}</p>

            <ul className="space-y-3">
              {audienceBenefits[audience].bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <Check className="w-5 h-5 text-[#2DA4EF] mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button className="mt-5 px-5 py-3 rounded-xl bg-[#6D5CEB] text-white hover:bg-[#5a4ceb] transition shadow">
              {audienceBenefits[audience].cta}
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#E6FFFA] border shadow-lg">
            <h4 className="font-semibold mb-3">What you get</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "AI Analysis",
                "Content Calendar",
                "Creative Studio",
                "Scheduling",
                "Reporting",
                "Strategy",
              ].map((k) => (
                <div
                  key={k}
                  className="bg-white rounded-xl p-3 shadow-sm border hover:shadow-lg transition"
                >
                  <div className="text-sm font-medium">{k}</div>
                  <div className="text-xs text-gray-500">
                    Fully connected workflow
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
           USP BADGES
      -------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12 animate-fade-up">
        <div className="grid md:grid-cols-4 gap-4">
          {usps.map((u, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-2xl shadow border hover:shadow-xl transition"
            >
              <u.icon className="w-7 h-7 text-[#6D5CEB]" />
              <div className="mt-3 font-semibold">{u.title}</div>
              <div className="text-sm text-gray-600 mt-1">{u.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
           FEATURE EXPLORER
      -------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12 animate-fade-up">
        <div className="flex flex-wrap gap-2 mb-4">
          {featureGroups.map((g) => (
            <button
              key={g.key}
              onClick={() => setFeatureFilter(g.key)}
              className={`px-3 py-1.5 rounded-full text-sm border transition shadow-sm hover:shadow-md
                ${
                  featureFilter === g.key
                    ? "bg-[#2DA4EF] text-white border-[#2DA4EF]"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((f) => (
            <div
              key={f.id}
              className="p-5 bg-white rounded-2xl shadow border hover:shadow-xl transition"
            >
              <div className="flex items-center gap-2">
                <f.icon className="w-6 h-6 text-[#6D5CEB]" />
                <div className="text-xs px-2 py-0.5 rounded-full bg-[#E8E7FF] text-[#6D5CEB] border border-[#d8d6ff]">
                  {f.tag}
                </div>
              </div>
              <div className="mt-3 font-semibold">{f.title}</div>
              <div className="text-sm text-gray-600 mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
           COMPARISON
      -------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12 animate-fade-up">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-semibold">How we’re different</h3>

          <div className="flex items-center gap-2 text-sm">
            <span className={compareMode === "simple" ? "font-semibold" : ""}>
              Simple
            </span>
            <button
              className="w-12 h-6 bg-gray-300 rounded-full relative transition hover:bg-gray-400"
              onClick={() =>
                setCompareMode(
                  compareMode === "simple" ? "detailed" : "simple"
                )
              }
            >
              <span
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all shadow
                  ${
                    compareMode === "simple"
                      ? "left-0.5"
                      : "left-6"
                  }`}
              />
            </button>
            <span className={compareMode === "detailed" ? "font-semibold" : ""}>
              Detailed
            </span>
          </div>
        </div>

        {compareMode === "simple" ? (
          <div className="grid md:grid-cols-3 gap-4">
            {competitorsSimple.map((row, i) => (
              <div key={i} className="p-5 bg-white rounded-2xl shadow border hover:shadow-xl transition">
                <div className="text-sm text-gray-500">{row.label}</div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[#2DA4EF] font-semibold">
                    Digibility:
                  </span>
                  <span>{row.dig}</span>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-gray-500">Others:</span>
                  <span>{row.other}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3">Capability</th>
                  <th className="p-3 text-[#6D5CEB]">Digibility</th>
                  <th className="p-3 text-gray-600">Typical Others</th>
                </tr>
              </thead>

              <tbody>
                {competitorsDetailed.map((r, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50 transition">
                    <td className="p-3">{r.feature}</td>
                    <td className="p-3 text-[#6D5CEB] font-medium">{r.dig}</td>
                    <td className="p-3 text-gray-600">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* -------------------------------------------------------------
           DIFFERENTIATORS ACCORDION
      -------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-24 animate-fade-up">
        <h3 className="text-2xl font-semibold mb-4">
          Why teams switch to Digibility
        </h3>

        <div className="space-y-3">
          {differentiators.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition">
              <button
                onClick={() => toggleAcc(i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium">{d.q}</span>
                <ChevronDown
                  className={`w-5 h-5 transition ${
                    openAccordions[i] ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openAccordions[i] && (
                <div className="px-4 pb-4 text-gray-600 text-sm animate-fade-up">
                  {d.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------------
           STICKY CTA
      -------------------------------------------------------------- */}
      <div className="fixed bottom-4 inset-x-0 px-4 animate-fade-up">
        <div className="max-w-3xl mx-auto backdrop-blur-xl bg-white/80 border shadow-xl rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="text-center sm:text-left text-sm">
            <div className="font-semibold text-gray-800">
              Ready to turn consistency into growth?
            </div>
            <div className="text-gray-600">
              Start with Spark, upgrade to Momentum, scale with Apex.
            </div>
          </div>

          <a
            href="#pricing"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] text-white hover:scale-105 hover:shadow-xl transition text-center w-full sm:w-auto"
          >
            View Plans
          </a>
        </div>
      </div>

      {/* -------------------------------------------------------------
         PAGE ANIMATIONS
      -------------------------------------------------------------- */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
