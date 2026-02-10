"use client";

import React from "react";
import {
  Link2,
  Zap,
  Calendar,
  BarChart3,
  CheckCircle,
  Bell,
  LucideIcon,
} from "lucide-react";

interface Step {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ProductTour: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      icon: Link2,
      title: "Connect & Scan",
      description: "Add site + socials; brand + competition analysis runs.",
    },
    {
      id: 2,
      icon: Calendar,
      title: "Calendar in Minutes",
      description: "30-day plan by platform.",
    },
    {
      id: 3,
      icon: CheckCircle,
      title: "Drafts You Approve",
      description: "On-brand statics, carousels, reels; human-checked.",
    },
    {
      id: 4,
      icon: Zap,
      title: "Best-Time Scheduling",
      description: "Per platform windows.",
    },
    {
      id: 5,
      icon: BarChart3,
      title: "ROI You Can See",
      description: "UTMs by post, repeat what works.",
    },
    {
      id: 6,
      icon: Bell,
      title: "Learn & Update",
      description: "Wins feed next month's strategy.",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFF]" data-testid="product-tour">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
            data-testid="product-tour-heading"
          >
            How It Works
          </h2>

          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
            From setup to success in 6 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;

            return (
              <div
                key={step.id}
                className="flex flex-col items-start card-stagger"
                data-testid={`product-step-${step.id}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 relative">
                  <IconComponent
                    className="w-7 h-7 text-[#6D5CEB]"
                    aria-hidden="true"
                  />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white text-xs font-bold flex items-center justify-center">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-[#4E5674]">
                  {step.title}
                </h3>

                <p className="text-sm text-[#64748b] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
