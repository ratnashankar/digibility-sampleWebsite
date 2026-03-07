"use client";

import React, { useState } from "react";
import { CheckCircle, Clock, Sparkles, X, Check } from "lucide-react";

export default function RoadmapPage() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);

    setIsSubmitted(true);
    setTimeout(() => {
      setShowEmailModal(false);
      setIsSubmitted(false);
      setEmail("");
    }, 2000);
  };

  interface TimelineItem {
    period: string;
    status: "live" | "next" | "planned";
    title: string;
    features: string[];
  }

  const timeline: TimelineItem[] = [
    {
      period: "NOW (LIVE)",
      status: "live",
      title: "Social Media",
      features: [
        "30-day content calendar",
        "AI drafts + human review workflow",
        "Best-time posting scheduler",
        "Post-level ROI tracking",
        "Instagram, Facebook, LinkedIn, Twitter/X, TikTok, GBP",
      ],
    },
    {
      period: "Q1 2026",
      status: "next",
      title: "SEO (Alpha)",
      features: [
        "Full site technical scan",
        "Quick wins report with priority ranking",
        "Keyword research & content plan",
        "Google Search Console sync",
        "On-page optimization suggestions",
      ],
    },
    {
      period: "Q2 2026",
      status: "planned",
      title: "Email (Beta)",
      features: [
        "Brand-voice newsletter generation",
        "Send-time optimization per subscriber",
        "UTM tracking for every link",
        "Segment-based automation",
        "ESP integrations (Mailchimp, SendGrid, etc.)",
      ],
    },
    {
      period: "Q2–Q3 2026",
      status: "planned",
      title: "Ads (Beta)",
      features: [
        "Auto-boost top-performing posts",
        "Dynamic ad variants from winners",
        "Basic audience targeting",
        "Cross-platform budget allocation",
        "ROAS tracking & optimization",
      ],
    },
  ];

  const additionalFeatures: string[] = [
    "YouTube publishing",
    "Analytics+ (deeper insights)",
    "Approvals 2.0 (enhanced workflow)",
    "Mobile app (iOS & Android)",
    "Shopify connector",
    "WooCommerce connector",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <main className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-6">
              What's Next
            </h1>
            <p className="text-xl text-gray-500">
              Social is live today. Next up:{" "}
              <span className="text-[#6366F1]">SEO → Email → Ads</span>
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 mb-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 relative overflow-hidden"
              >
                {/* Top Border */}
                {item.status === "live" && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#22C55E]" />
                )}
                {item.status === "next" && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#6366F1]" />
                )}
                {item.status === "planned" && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200" />
                )}

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {item.status === "live" ? (
                      <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-[#22C55E]" />
                      </div>
                    ) : item.status === "next" ? (
                      <div className="w-14 h-14 rounded-xl bg-[#6366F1] flex items-center justify-center">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center">
                        <Clock className="w-7 h-7 text-gray-400" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                        {item.period}
                      </span>

                      {item.status === "live" && (
                        <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                          Live Now
                        </span>
                      )}

                      {item.status === "next" && (
                        <span className="px-3 py-1 text-xs font-medium bg-[#6366F1] text-white rounded-full">
                          Up Next
                        </span>
                      )}

                      {item.status === "planned" && (
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>

                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-base text-gray-500"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#6366F1] mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 mb-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              Also in 2026
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-base text-gray-500"
                >
                  <Check className="w-5 h-5 text-[#6366F1]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#6366F1] to-[#3B82F6] rounded-2xl p-12 text-center text-white">
            <h3 className="text-2xl font-semibold mb-3">Stay in the Loop</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get early access notifications and exclusive updates on new features before they launch.
            </p>

            <button
              onClick={() => setShowEmailModal(true)}
              className="bg-white text-[#6366F1] px-8 py-3 rounded-full text-base font-medium hover:shadow-lg transition-shadow"
            >
              Get Updates
            </button>
          </div>
        </div>
      </main>

      {/* Email Capture Modal */}
      {showEmailModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
          onClick={() => setShowEmailModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Get Roadmap Updates
                </h3>
                <p className="text-base text-gray-500 mb-6">
                  Be the first to know when new features launch.
                </p>

                <form onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg mb-4 text-base focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#6366F1] text-white py-3 rounded-lg text-base font-medium hover:bg-[#5558E0] transition-colors"
                  >
                    Subscribe to Updates
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  You're subscribed!
                </h3>
                <p className="text-base text-gray-500">
                  We'll keep you updated on new launches.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}