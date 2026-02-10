"use client";

import React, { useState, useEffect } from "react";
import { User, Users, Building2, Store } from "lucide-react";

interface Persona {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  outcomes: string[];
}

const iconMap = {
  User,
  Users,
  Building2,
  Store,
};

export const PersonasOutcomes: React.FC = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    const loadPersonas = async () => {
      try {
        const res = await fetch("/data/personas.json");
        const data = await res.json();
        setPersonas(data);
      } catch (err) {
        console.error("Failed to load personas:", err);
      }
    };

    loadPersonas();
  }, []);

  return (
    <section className="py-20 bg-white" data-testid="personas-outcomes">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
            data-testid="personas-heading"
          >
            Built for Your Reality
          </h2>

          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
            Different teams, different challenges, same powerful solution
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona) => {
            const IconComponent = iconMap[persona.icon] || User;

            return (
              <div
                key={persona.id}
                className="bg-[#F8FAFF] rounded-2xl p-8 border-2 border-transparent hover:border-[#6D5CEB] transition-all"
                data-testid={`persona-card-${persona.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center flex-shrink-0">
                    <IconComponent
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title + Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#4E5674] mb-2">
                      {persona.title}
                    </h3>

                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </div>

                {/* First Outcome */}
                <div className="mt-6">
                  <p className="text-base font-semibold text-[#6D5CEB]">
                    {persona.outcomes?.[0]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
