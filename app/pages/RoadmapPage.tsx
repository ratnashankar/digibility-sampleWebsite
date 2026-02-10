"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Sparkles, X } from "lucide-react";

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
      period: "Now (Live)",
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
    <div className="App">
      <Header />

      <main className="min-h-screen bg-[#F8FAFF] py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-6 text-[#4E5674]"
              data-testid="roadmap-heading"
            >
              What's Next
            </h1>
            <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
              Social is live today. Next up:{" "}
              <span className="font-semibold text-[#6D5CEB]">
                SEO → Email → Ads
              </span>
              .
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 mb-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md relative overflow-hidden"
                data-testid={`roadmap-item-${index}`}
              >
                {/* Top Border */}
                {item.status === "live" && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600" />
                )}
                {item.status === "next" && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF]" />
                )}

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {item.status === "live" ? (
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    ) : item.status === "next" ? (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-gray-600" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-[#64748b] uppercase tracking-wide">
                        {item.period}
                      </span>

                      {item.status === "live" && (
                        <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                          Live Now
                        </span>
                      )}

                      {item.status === "next" && (
                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] text-white rounded-full">
                          Up Next
                        </span>
                      )}

                      {item.status === "planned" && (
                        <span className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-[#4E5674] mb-4">
                      {item.title}
                    </h3>

                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-[#64748b]"
                        >
                          <span className="text-[#6D5CEB] mt-1">•</span>
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
          <div className="bg-white rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-xl font-bold mb-4 text-[#4E5674]">
              Also in 2026
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {additionalFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-[#64748b] bg-[#F8FAFF] p-3 rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 text-[#6D5CEB]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Stay in the Loop</h3>
            <p className="text-base mb-6 opacity-95 max-w-xl mx-auto">
              Get early access notifications and exclusive updates on new
              features.
            </p>

            <button
              onClick={() => setShowEmailModal(true)}
              className="bg-white text-[#6D5CEB] px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all"
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
              className="absolute top-4 right-4 text-[#64748b] hover:text-[#4E5674]"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-3 text-[#4E5674]">
                  Get Roadmap Updates
                </h3>
                <p className="text-sm text-[#64748b] mb-6">
                  Be the first to know when new features launch.
                </p>

                <form onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="form-input mb-4"
                  />

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
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
                <h3 className="text-xl font-bold mb-2 text-[#4E5674]">
                  You're subscribed!
                </h3>
                <p className="text-sm text-[#64748b]">
                  We'll keep you updated on new launches.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
