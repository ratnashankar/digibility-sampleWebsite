"use client";

import React from "react";
import Link from "next/link";
import { Radio, TrendingUp, Mail, Target } from "lucide-react";

interface ModuleItem {
  id: number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  status: "live" | "next";
  description: string;
  link: string;
}

export const ModulesBand: React.FC = () => {
  const modules: ModuleItem[] = [
    {
      id: 1,
      title: "Social Media",
      icon: Radio,
      status: "live",
      description: "AI-generated posts across all platforms with approval workflow",
      link: "/features#social",
    },
    {
      id: 2,
      title: "SEO Content",
      icon: TrendingUp,
      status: "next",
      description: "Blog posts and landing pages optimized for search",
      link: "/roadmap",
    },
    {
      id: 3,
      title: "Email Campaigns",
      icon: Mail,
      status: "next",
      description: "Automated email sequences with personalization",
      link: "/roadmap",
    },
    {
      id: 4,
      title: "Ad Management",
      icon: Target,
      status: "next",
      description: "Cross-platform ad creation and optimization",
      link: "/roadmap",
    },
  ];

  return (
    <section className="py-20 bg-white" data-testid="modules-band">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
            data-testid="modules-heading"
          >
            One Platform, Multiple Channels
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
            Start with social media, scale to every marketing channel
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => {
            const IconComponent = module.icon;

            return (
              <Link
                key={module.id}
                href={module.link}
                className="block bg-white border border-gray-200 hover:shadow-xl transition-all rounded-xl p-6"
                data-testid={`module-tile-${module.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center shadow-sm">
                    <IconComponent
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  {module.status === "live" ? (
                    <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                      Live
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-[#4E5674]">
                  {module.title}
                </h3>
                <p className="text-sm text-[#64748b]">{module.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
