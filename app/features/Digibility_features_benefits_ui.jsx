import { useMemo, useState, useEffect } from "react";
import { Check, Sparkles, Rocket, Users, Star, Shield, Zap, Settings, BarChart3, LayoutGrid, Wand2, LineChart, Brain, Clock, ChevronDown, PlayCircle, MessageSquare } from "lucide-react";


// Digibility Features & Benefits Page (Interactive)
// - Audience tabs with tailored benefits
// - Feature explorer with filter chips
// - USP section with animated badges
// - Competitor comparison toggle (Simple vs Detailed)
// - Expandable differentiators accordion
// - Sticky CTA
// TailwindCSS required

export default function FeaturesBenefitsPage() {
  const [audience, setAudience] = useState("spark"); // spark, momentum, apex
  const [featureFilter, setFeatureFilter] = useState("all");
  const [compareMode, setCompareMode] = useState("simple"); // simple | detailed
  const [openAccordions, setOpenAccordions] = useState({});

  const featureGroups = useMemo(() => ([
    { key: "all", label: "All" },
    { key: "social", label: "Social Media" },
    { key: "seo", label: "SEO" },
    { key: "ppc", label: "PPC" },
    { key: "content", label: "Content" },
    { key: "email", label: "Email" },
    { key: "orm", label: "Reputation" },
    { key: "video", label: "Video" },
    { key: "cro", label: "CRO" },
  ]), []);

  const features = [
    { id: 1, group: "social", icon: LayoutGrid, title: "Unified Calendar", desc: "Plan, approve, and schedule across FB, IG, LinkedIn, Twitter, GBP.", tag: "HITL" },
    { id: 2, group: "social", icon: Wand2, title: "AI Creative Studio", desc: "Generate captions, carousels, reels prompts with brand voice lock.", tag: "AI" },
    { id: 3, group: "seo", icon: BarChart3, title: "SEO Audit & Keywords", desc: "Automated audits, keyword clusters, and quick-win pages.", tag: "AI" },
    { id: 4, group: "ppc", icon: Zap, title: "Smart Budgeting", desc: "Bid & budget suggestions to reduce CPA across Google & Meta.", tag: "AI" },
    { id: 5, group: "content", icon: Brain, title: "Topic Intelligence", desc: "Competitor & trend mining to fuel content pillars.", tag: "AI" },
    { id: 6, group: "email", icon: MessageSquare, title: "Journeys & Drips", desc: "Build journeys, prebuilt templates, and auto-segmentation.", tag: "HITL" },
    { id: 7, group: "orm", icon: Shield, title: "Brand Listening", desc: "Monitor mentions, analyze sentiment, and draft responses.", tag: "AI" },
    { id: 8, group: "video", icon: PlayCircle, title: "Video Assist", desc: "Scripts, storyboards, and AI scenes for short-form.", tag: "HITL" },
    { id: 9, group: "cro", icon: LineChart, title: "CRO Experiments", desc: "Run A/B ideas from AI with simple win/loss tracking.", tag: "AI" },
  ];

  const filtered = featureFilter === "all" ? features : features.filter(f => f.group === featureFilter);

  const audienceBenefits = {
    spark: {
      title: "Spark — Starting Up",
      subtitle: "Launch fast with AI guidance and simple approvals.",
      bullets: [
        "From signup to first 3 posts in a day with templates",
        "No marketing team needed — AI drafts, you approve",
        "Crystal-clear pricing and revision limits",
      ],
      cta: "Start with Spark →",
    },
    momentum: {
      title: "Momentum — Growing",
      subtitle: "Increase reach with carousels, reels, and LinkedIn authority.",
      bullets: [
        "Weekly mix auto-suggested from your niche",
        "LinkedIn articles that position you as a leader",
        "Analytics that turn into next-month strategy",
      ],
      cta: "Grow with Momentum →",
    },
    apex: {
      title: "Apex — Scaling Up",
      subtitle: "Operate like an agency without hiring an agency.",
      bullets: [
        "Multi-channel dominance: FB, IG, LinkedIn, Twitter",
        "Human-in-the-loop quality with AI speed",
        "Dedicated success manager to hit quarterly goals",
      ],
      cta: "Scale with Apex →",
    },
  };

  const usps = [
    { icon: Sparkles, title: "AI-First, Human-Checked", desc: "Automation for speed, experts for brand-safe quality." },
    { icon: Rocket, title: "From Idea to Post", desc: "Analysis → Calendar → Creatives → Schedule → Report — in one flow." },
    { icon: Shield, title: "Approval Control", desc: "Client approvals at analysis, calendar, and content levels." },
    { icon: Clock, title: "Time-to-Value", desc: "Your first month’s calendar can be ready the day you onboard." },
  ];

  const differentiators = [
    { q: "End-to-End vs Point Tools", a: "Most tools do just one thing (schedule, or copy). Digibility connects the full loop so insights feed next month’s plan automatically." },
    { q: "Human-in-the-Loop Quality", a: "We balance AI speed with human review where it matters (brand tone, visuals), so you get reliability without agency costs." },
    { q: "Outcome Orientation", a: "We optimize for reach, engagement, and conversions — not just output volume — using monthly strategy feedback from reports." },
    { q: "Scales With You", a: "Start with static posts, add reels, articles, experiments, and channels without switching tools or workflows." },
  ];

  const competitorsSimple = [
    { label: "Scheduling Apps", dig: "Full loop", other: "Scheduling only" },
    { label: "Copy Generators", dig: "On-brand + visual", other: "Text only" },
    { label: "Agencies", dig: "AI speed + HITL", other: "Great quality, high cost" },
  ];

  const competitorsDetailed = [
    { feature: "Strategy → Calendar → Assets → Scheduling → Reporting", dig: "✔ Unified", other: "✖ Fragmented" },
    { feature: "Approvals (analysis, calendar, content)", dig: "✔ 3-layer", other: "✖ 0–1 layer" },
    { feature: "Reels/Carousel prompts & brand voice lock", dig: "✔ Built-in", other: "✖ Add-on or none" },
    { feature: "AI + Human-in-the-Loop", dig: "✔ Balanced", other: "✖ AI-only or Manual" },
    { feature: "Cost vs Agency", dig: "✔ ~1/10th", other: "✖ High retainers" },
  ];

  const toggleAcc = (i) => setOpenAccordions((p) => ({ ...p, [i]: !p[i] }));

  useEffect(() => {
    // Pre-open the first differentiator for visual cue
    setOpenAccordions({ 0: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-[10vh]">
      {/* <Header/> */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Features that Turn <span className="text-blue-600">Consistency</span> into <span className="text-emerald-600">Growth</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Digibility unifies analysis, planning, creation, scheduling, and reporting — with AI speed and human-grade quality.
        </p>
      </section>

      {/* Audience Tabs */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {[
            { key: "spark", label: "Spark • Starting Up" },
            { key: "momentum", label: "Momentum • Growing" },
            { key: "apex", label: "Apex • Scaling Up" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setAudience(t.key)}
              className={`px-4 py-2 rounded-full border transition ${audience === t.key ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-100"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="p-6 rounded-2xl bg-white shadow">
            <h3 className="text-2xl font-semibold mb-1">{audienceBenefits[audience].title}</h3>
            <p className="text-gray-600 mb-4">{audienceBenefits[audience].subtitle}</p>
            <ul className="space-y-3">
              {audienceBenefits[audience].bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <button className="mt-5 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black">
              {audienceBenefits[audience].cta}
            </button>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 border">
            <h4 className="font-semibold mb-3">What you’ll actually get</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {["AI Analysis", "Content Calendar", "Creative Studio", "Scheduling", "Reporting", "Strategy"].map((k) => (
                <div key={k} className="bg-white rounded-xl p-3 shadow-sm border hover:shadow transition">
                  <div className="text-sm font-medium">{k}</div>
                  <div className="text-xs text-gray-500">Fully connected workflow</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USP Badges */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-4 gap-4">
          {usps.map((u, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl shadow border hover:shadow-lg transition">
              <u.icon className="w-7 h-7 text-blue-600" />
              <div className="mt-3 font-semibold">{u.title}</div>
              <div className="text-sm text-gray-600 mt-1">{u.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Explorer */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {featureGroups.map((g) => (
            <button
              key={g.key}
              onClick={() => setFeatureFilter(g.key)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${featureFilter === g.key ? "bg-emerald-600 text-white border-emerald-600" : "bg-white hover:bg-gray-100"
                }`}
            >
              {g.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((f) => (
            <div key={f.id} className="p-5 bg-white rounded-2xl shadow border hover:shadow-lg transition">
              <div className="flex items-center gap-2">
                <f.icon className="w-6 h-6 text-emerald-600" />
                <div className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{f.tag}</div>
              </div>
              <div className="mt-3 font-semibold">{f.title}</div>
              <div className="text-sm text-gray-600 mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-semibold">How we’re different</h3>
          <div className="flex items-center gap-2 text-sm">
            <span className={compareMode === "simple" ? "font-semibold" : ""}>Simple</span>
            <button className="w-12 h-6 bg-gray-300 rounded-full relative" onClick={() => setCompareMode(compareMode === "simple" ? "detailed" : "simple")}>
              <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${compareMode === "simple" ? "left-0.5" : "left-6"}`} />
            </button>
            <span className={compareMode === "detailed" ? "font-semibold" : ""}>Detailed</span>
          </div>
        </div>

        {compareMode === "simple" ? (
          <div className="grid md:grid-cols-3 gap-4">
            {competitorsSimple.map((row, i) => (
              <div key={i} className="p-5 bg-white rounded-2xl shadow border">
                <div className="text-sm text-gray-500">{row.label}</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-emerald-600 font-semibold">Digibility:</span>
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
                  <th className="p-3">Digibility</th>
                  <th className="p-3">Typical Others</th>
                </tr>
              </thead>
              <tbody>
                {competitorsDetailed.map((r, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">{r.feature}</td>
                    <td className="p-3 text-emerald-700 font-medium">{r.dig}</td>
                    <td className="p-3 text-gray-600">{r.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Differentiators Accordion */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h3 className="text-2xl font-semibold mb-4">Why teams switch to Digibility</h3>
        <div className="space-y-3">
          {differentiators.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl border shadow-sm">
              <button onClick={() => toggleAcc(i)} className="w-full flex items-center justify-between p-4 text-left">
                <span className="font-medium">{d.q}</span>
                <ChevronDown className={`w-5 h-5 transition ${openAccordions[i] ? "rotate-180" : ""}`} />
              </button>
              {openAccordions[i] && (
                <div className="px-4 pb-4 text-gray-600 text-sm">{d.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 inset-x-0 px-4">
        <div className="max-w-3xl mx-auto backdrop-blur bg-white/80 border shadow-lg rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">

          {/* Text */}
          <div className="text-center sm:text-left text-sm">
            <div className="font-semibold">Ready to turn consistency into growth?</div>
            <div className="text-gray-600">
              Start with Spark, upgrade to Momentum, scale with Apex.
            </div>
          </div>

          {/* Button */}
          <a
            href="#pricing"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-center w-full sm:w-auto"
          >
            View Plans
          </a>
        </div>
      </div>

    </div>
  );
}
