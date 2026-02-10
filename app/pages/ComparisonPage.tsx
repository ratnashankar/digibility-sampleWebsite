"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, Minus, ArrowRight } from "lucide-react";
import { DigiLoader } from "@/components/DigiLoader";

type StatusType = "check" | "cross" | "partial";

interface ComparisonItem {
  status: StatusType;
  text: string;
}

interface Category {
  name: string;
  description?: string;
  DIY: ComparisonItem;
  Freelancer: ComparisonItem;
  Agency: ComparisonItem;
  ToolStack: ComparisonItem;
  Digibility: ComparisonItem;
}

interface Highlight {
  stat: string;
  label: string;
}

interface CostBreakdownItem {
  option: string;
  cost: string;
  period: string;
  highlight?: boolean;
  includes: string[];
}

interface BottomLineItem {
  icon: string;
  title: string;
  description: string;
}

interface ComparisonData {
  highlights: Highlight[];
  categories: Category[];
  costBreakdown: CostBreakdownItem[];
  bottomLine: BottomLineItem[];
}

export default function ComparisonPage() {
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null);

  useEffect(() => {
    fetch("/data/comparison-full.json")
      .then((res) => res.json())
      .then((data: ComparisonData) => setComparisonData(data))
      .catch((err) => console.error("Failed to load comparison data:", err));
  }, []);

  const getStatusIcon = (status: StatusType) => {
    switch (status) {
      case "check":
        return <Check className="w-5 h-5 text-green-500" aria-label="Yes" />;
      case "cross":
        return <X className="w-5 h-5 text-red-500" aria-label="No" />;
      case "partial":
        return <Minus className="w-5 h-5 text-yellow-500" aria-label="Partial" />;
      default:
        return null;
    }
  };

  if (!comparisonData) {
    return (
      <div className="App">
        <Header />
        <div
          className="min-h-screen flex items-center justify-center bg-[#F8FAFF]"
          data-testid="comparison-page-loading"
        >
          <DigiLoader size={64} />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />

      <main className="min-h-screen bg-[#F8FAFF]" data-testid="comparison-page">
        {/* HERO */}
        <section className="py-20 md:py-28 bg-white" data-testid="comparison-hero">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#4E5674]"
                data-testid="comparison-page-heading"
              >
                Why teams choose{" "}
                <span className="gradient-text">Digibility</span>
              </h1>
              <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
                See how Digibility stacks up against DIY, freelancers, agencies, and tool stacks.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section
          className="py-12 bg-gradient-to-br from-[#6D5CEB]/5 to-[#2DA4EF]/5"
          data-testid="comparison-highlights"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {comparisonData.highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
                data-testid={`highlight-${i}`}
              >
                <div className="text-3xl font-bold text-[#6D5CEB] mb-2">{h.stat}</div>
                <div className="text-sm text-[#64748b]">{h.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Comparison Table */}
        <section className="py-20" data-testid="full-comparison-section">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]">
                Complete Feature Comparison
              </h2>
              <p className="text-base text-[#64748b] max-w-2xl mx-auto">
                A detailed breakdown of all metrics that matter.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
              <table className="comparison-table w-full" data-testid="full-comparison-table">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-6 text-[#4E5674] font-semibold min-w-[200px]">
                      Feature
                    </th>
                    <th className="p-6 text-[#64748b] font-medium">DIY</th>
                    <th className="p-6 text-[#64748b] font-medium">Freelancer</th>
                    <th className="p-6 text-[#64748b] font-medium">Agency</th>
                    <th className="p-6 text-[#64748b] font-medium">Tool Stack</th>
                    <th className="p-6 bg-gradient-to-br from-[#6D5CEB]/10 to-[#2DA4EF]/10">
                      <span className="font-bold text-[#6D5CEB]">Digibility</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonData.categories.map((cat, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-50 hover:bg-[#F8FAFF]/50 transition-colors"
                      data-testid={`comparison-row-${i}`}
                    >
                      <td className="p-6">
                        <div className="font-semibold text-[#4E5674]">{cat.name}</div>
                        {cat.description && (
                          <div className="text-xs text-[#94a3b8] mt-1">{cat.description}</div>
                        )}
                      </td>

                      {["DIY", "Freelancer", "Agency", "ToolStack", "Digibility"].map(
                        (key) => {
                          const item = cat[key as keyof Category] as ComparisonItem;
                          return (
                            <td key={key} className="p-6">
                              <div className="flex flex-col items-center gap-2">
                                {getStatusIcon(item.status)}
                                <span className="text-xs text-[#64748b] text-center">
                                  {item.text}
                                </span>
                              </div>
                            </td>
                          );
                        }
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="py-20 bg-white" data-testid="cost-breakdown-section">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {comparisonData.costBreakdown.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 ${
                  item.highlight
                    ? "bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white scale-105"
                    : "bg-[#F8FAFF] border border-gray-100"
                }`}
                data-testid={`cost-card-${i}`}
              >
                <h3 className={`text-lg font-bold mb-4`}>
                  {item.option}
                </h3>
                <div className="text-3xl font-bold mb-2">{item.cost}</div>
                <div className="text-sm mb-4">{item.period}</div>

                <ul className="space-y-2">
                  {item.includes.map((f, idx) => (
                    <li key={idx} className="text-xs flex items-start gap-2">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Line */}
        <section className="py-20" data-testid="why-choose-section">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparisonData.bottomLine.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#6D5CEB]/30 transition-all"
                data-testid={`bottom-line-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6D5CEB]/10 to-[#2DA4EF]/10 flex items-center justify-center mb-6 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#4E5674]">{item.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to see the difference?
            </h2>
            <p className="text-base sm:text-lg mb-10 opacity-95 max-w-2xl mx-auto">
              Join hundreds of brands switching to Digibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#6D5CEB] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="/pricing"
                className="border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition flex items-center gap-2"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
