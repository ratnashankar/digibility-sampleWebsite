"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CommonGatingForm } from "@/components/CommonGatingForm";
import { Zap, Copy, Check } from "lucide-react";

export default function HookHeadlineTool() {
  const [unlocked, setUnlocked] = useState(false);
  const [audience, setAudience] = useState("founders");
  const [benefit, setBenefit] = useState("");
  const [hooks, setHooks] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // SSR-safe localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digibility_tools_lead");
      if (stored) setUnlocked(true);
    }
  }, []);

  const audiences = [
    "founders",
    "marketers",
    "agencies",
    "ecommerce",
    "smbs",
    "consultants",
  ] as const;

  const hookTemplates: ((aud: string, ben: string) => string)[] = [
    (aud, ben) => `How ${aud} are using ${ben} to 10× their results (without hiring more people)`,
    (aud, ben) => `The ${ben} mistake that is costing ${aud} thousands every month`,
    (aud, ben) => `${aud}: Stop wasting time. Here is how ${ben} changes everything.`,
    (aud, ben) => `What 95% of ${aud} get wrong about ${ben} (and how to fix it)`,
    (aud, ben) => `The ${ben} framework that helped 1000+ ${aud} scale faster`,
    (aud, ben) => `${aud} who ignore ${ben} are leaving money on the table. Here is why.`,
    (aud, ben) => `I spent $50K learning ${ben} so ${aud} do not have to. Here is what works.`,
    (aud, ben) => `${ben} for ${aud}: The complete guide nobody is talking about`,
    (aud, ben) => `Why ${aud} who master ${ben} grow 3× faster than their competitors`,
    (aud, ben) => `The ${ben} playbook every ${aud} needs (but most ignore)`,
  ];

  const generateHooks = () => {
    if (!benefit.trim()) return;

    const generated = hookTemplates.map((fn) => fn(audience, benefit));
    setHooks(generated);
  };

  const copyHook = (hook: string, index: number) => {
    navigator.clipboard.writeText(hook);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div>
      <Header />

      <main className="min-h-screen py-24 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]">
              Hook & Headline Generator
            </h1>
            <p className="text-base sm:text-lg text-[#64748b]">
              Create attention-grabbing hooks that make people stop scrolling
            </p>
          </div>

          {/* Gating */}
          {!unlocked ? (
            <CommonGatingForm
              toolName="Hook & Headline Generator"
              onUnlock={() => setUnlocked(true)}
            />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Audience Select */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-2">
                    Target Audience
                  </label>
                  <select
                    className="form-input"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                  >
                    {audiences.map((aud) => (
                      <option key={aud} value={aud}>
                        {aud.charAt(0).toUpperCase() + aud.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Benefit Input */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-2">
                    Product/Service Benefit *
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={benefit}
                    onChange={(e) => setBenefit(e.target.value)}
                    placeholder="e.g., AI automation, social media marketing, time management"
                  />
                </div>

                {/* Generate Button */}
                <button
                  className="btn-primary w-full justify-center"
                  onClick={generateHooks}
                  disabled={!benefit.trim()}
                >
                  Generate Hooks
                </button>

                {/* Results */}
                {hooks.length > 0 && (
                  <div className="mt-8 space-y-3">
                    <h3 className="text-lg font-semibold text-[#4E5674]">
                      10 Attention-Grabbing Hooks:
                    </h3>

                    {hooks.map((hook, index) => (
                      <div
                        key={index}
                        className="p-4 bg-[#F8FAFF] rounded-lg border-l-4 border-[#6D5CEB] flex justify-between items-start gap-4"
                      >
                        <p className="text-sm text-[#4E5674] flex-1">{hook}</p>

                        <button
                          onClick={() => copyHook(hook, index)}
                          className="p-2 hover:bg-white rounded transition-all flex-shrink-0"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-[#6D5CEB]" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
