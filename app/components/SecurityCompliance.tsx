"use client";

import React from "react";
import {
  Shield,
  Lock,
  FileCheck,
  Server,
  LucideIcon,
} from "lucide-react";

interface SecurityFeature {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SecurityCompliance: React.FC = () => {
  const features: SecurityFeature[] = [
    {
      id: 1,
      icon: Shield,
      title: "OAuth Only",
      description:
        "We never see or store your passwords—secure OAuth connections only",
    },
    {
      id: 2,
      icon: Lock,
      title: "Encryption",
      description:
        "All data encrypted in transit and at rest with industry standards",
    },
    {
      id: 3,
      icon: FileCheck,
      title: "Role-Based Access",
      description:
        "Control who sees what with granular permission settings",
    },
    {
      id: 4,
      icon: Server,
      title: "Export/Delete on Request",
      description:
        "Your data, your control—export or delete anytime",
    },
  ];

  return (
    <section className="py-20 bg-white" data-testid="security-compliance">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
            data-testid="security-heading"
          >
            Enterprise-Grade Security
          </h2>

          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
            Your data and accounts are protected by industry-leading security
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={feature.id}
                className="text-center card-stagger"
                data-testid={`security-feature-${feature.id}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-4">
                  <IconComponent
                    className="w-8 h-8 text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-bold mb-2 text-[#4E5674]">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#64748b]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
