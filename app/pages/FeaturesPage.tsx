"use client";

import React from "react";
import Link from "next/link";



import {
  ArrowRight,
  Sparkles,
  Calendar,
  Palette,
  Clock,
  BarChart3,
  Users,
  Link2,
  LucideIcon
} from "lucide-react";

// Interfaces
interface FeatureItem {
  id: string;
  icon: LucideIcon;
  title: string;
  benefit: string;
  description: string;
}

export default function FeaturesPage() {
  const features: FeatureItem[] = [
    {
      id: "ai-analysis",
      icon: Sparkles,
      title: "AI Analysis",
      benefit: "Know your brand inside-out—instantly",
      description:
        "Connect your site and social accounts. Our AI scans your brand voice, analyzes competitors, and identifies content gaps.",
    },
    {
      id: "content-calendar",
      icon: Calendar,
      title: "Content Calendar",
      benefit: "30 days planned in 5 minutes",
      description:
        "Digibility generates a full month of strategic content ideas tailored to your industry, audience, and goals.",
    },
    {
      id: "content-creation",
      icon: Palette,
      title: "Content Creation",
      benefit: "Posts that sound like you, look like your brand",
      description:
        "Static images, carousels and video scripts—AI generates everything on-brand using your tone & color palette.",
    },
    {
      id: "scheduler",
      icon: Clock,
      title: "Scheduler & Publishing",
      benefit: "Post at peak times, never miss a slot",
      description:
        "Best-time recommendations, auto-retry, queue management, and multi-platform publishing.",
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analytics & Reporting",
      benefit: "See what works, do more of it",
      description:
        "UTM tracking, unified dashboard, conversions, and AI-driven insights for performance improvement.",
    },
    {
      id: "collaboration",
      icon: Users,
      title: "Collaboration & Workflow",
      benefit: "Approvals without the email chaos",
      description:
        "Role-based access, approval workflows, edit requests, comments, and full version history.",
    },
    {
      id: "integrations",
      icon: Link2,
      title: "Integrations",
      benefit: "Connect once, publish everywhere",
      description:
        "Supports major platforms with secure OAuth—Instagram, Facebook, LinkedIn, X, TikTok, GBP.",
    },
  ];

  return (
    <div className="App">
     
      <main className="min-h-screen bg-[#F8FAFF]">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#4E5674]">
                Plan. Create. Schedule.{" "}
                <span className="gradient-text">Prove ROI.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
                One flow for social content—AI speed with human checks.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Story */}
        <section className="py-16 bg-gradient-to-br from-[#6D5CEB]/10 to-[#2DA4EF]/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-[#4E5674]">
              Marketing eats your week…
            </p>
            <p className="text-2xl sm:text-3xl font-bold gradient-text mt-2">
              Digibility gives it back.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-16">
                {features.map((feature) => {
                  const IconComponent = feature.icon;

                  return (
                    <div
                      key={feature.id}
                      id={feature.id === "ai-analysis" ? "social" : feature.id}
                      className="card-stagger"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 text-[#4E5674]">
                            {feature.title}
                          </h3>
                          <p className="text-lg font-semibold text-[#6D5CEB] mb-3">
                            {feature.benefit}
                          </p>
                          <p className="text-base text-[#64748b] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sidebar - What's Next */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#6D5CEB]/20">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mb-4">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-[#4E5674]">
                      What's Next?
                    </h3>

                    <p className="text-sm text-[#64748b] mb-6">
                      Social is live—SEO, Email & Ads launching through 2025.
                    </p>

                    <Link 
                      href="/roadmap"
                      className="btn-primary w-full flex justify-center items-center gap-2"
                    >
                      View Roadmap
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Your Time Back?
            </h3>

            <p className="text-base sm:text-lg mb-10 opacity-95 max-w-2xl mx-auto">
              Start your free 14-day trial. No credit card required.
            </p>

            <button className="bg-white text-[#6D5CEB] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-2">
              Start 14-Day Trial
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="mt-8 text-sm opacity-80">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </section>
      </main>

   
    </div>
  );
}
