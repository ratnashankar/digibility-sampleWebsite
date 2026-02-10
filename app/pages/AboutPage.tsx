"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Target, Heart, Zap } from "lucide-react";

export default function AboutPage() {
  const whoWeServe = [
    {
      title: "Solo Founders",
      description:
        "Building a product while juggling marketing, ops, and everything else.",
      icon: Users,
    },
    {
      title: "Small Teams",
      description: "Lean teams focused on product-market fit, not managing agencies.",
      icon: Target,
    },
    {
      title: "Growing Startups",
      description: "Scaling fast but marketing budgets are tight and timelines are short.",
      icon: Zap,
    },
    {
      title: "Local Businesses",
      description: "Running physical shops that need consistent online presence.",
      icon: Heart,
    },
  ];

  const team = [
    { name: "Amit", title: "The Architect", role: "Co-founder & CEO" },
    { name: "Ratna", title: "The Storyteller", role: "Head of Content" },
    { name: "Pritha", title: "The Operator", role: "Product Lead" },
    { name: "Sonia", title: "The Builder", role: "Engineering Lead" },
    { name: "Rhea", title: "The Connector", role: "Customer Success" },
  ];

  const values = [
    {
      title: "Human-First AI",
      description: "AI creates, humans approve. Always.",
    },
    {
      title: "Radical Transparency",
      description: "No hidden fees, no lock-in, no surprise costs.",
    },
    {
      title: "Accessible by Design",
      description:
        "Enterprise features at startup prices. Marketing should not be expensive.",
    },
    {
      title: "Long-Term Partners",
      description: "We grow when you grow. Your success is our success.",
    },
  ];

  return (
    <div>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-[#F8FAFF] to-white animate-fade-in">

        {/* HERO */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="absolute -top-20 right-0 w-80 h-80 bg-[#6D5CEB]/20 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#4E5674] animate-fade-up">
              Built to power{" "}
              <span className="bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] text-transparent bg-clip-text">
                solopreneurs, startups, and SMBs
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto animate-fade-up delay-150">
              Agency-level marketing without the agency.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="py-20 bg-[#F8FAFF]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#4E5674] animate-fade-up">
              Our Story
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#64748b] leading-relaxed animate-fade-up delay-150">
              <p>
                <strong className="text-[#4E5674]">The Problem:</strong> Founders create
                brilliant products—but no one sees them. Marketing is too expensive or
                too time-consuming.
              </p>

              <p>
                <strong className="text-[#4E5674]">The Frustration:</strong> Every startup
                said the same thing: “We know social media drives growth, but we can’t
                afford an agency and we don’t have time.”
              </p>

              <p>
                <strong className="text-[#4E5674]">The Solution:</strong> Digibility:
                AI-driven marketing that plans, writes, and schedules content—while you
                stay in control.
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#4E5674] animate-fade-up">
              Who We Serve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whoWeServe.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1 animate-stagger"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-[#4E5674]">{item.title}</h3>
                    <p className="text-sm text-[#64748b]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY WE BUILT */}
        <section className="py-20 bg-[#F8FAFF]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#4E5674] animate-fade-up">
              Why We Built Digibility
            </h2>

            <div className="space-y-8">
              {[ 
                {
                  title: "The Problem",
                  desc: "Products fail due to inconsistent marketing. Agencies are expensive, freelancers unreliable, DIY overwhelming.",
                },
                {
                  title: "Our Mission",
                  desc: "Make world-class marketing accessible. Automate repetitive work, keep you in full control.",
                },
                {
                  title: "What Drives Us",
                  desc: "Founders closing deals, local shops growing online, and teams scaling without burnout.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition animate-stagger"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#4E5674]">{card.title}</h3>
                  <p className="text-base text-[#64748b] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#4E5674] animate-fade-up">
              Meet the Team
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                    {member.name.charAt(0)}
                  </div>

                  <h3 className="text-lg font-bold mb-1 text-[#4E5674]">{member.name}</h3>
                  <p className="text-sm font-semibold text-[#6D5CEB]">{member.title}</p>
                  <p className="text-xs text-[#64748b]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-[#F8FAFF]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#4E5674] animate-fade-up">
              What We Stand For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition animate-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-bold mb-2 text-[#4E5674]">{value.title}</h3>
                  <p className="text-sm text-[#64748b]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-up">
              Join Thousands of Teams Growing with Digibility
            </h3>

            <p className="text-base sm:text-lg mb-10 opacity-95 max-w-2xl mx-auto animate-fade-up delay-150">
              Start your free 14-day trial. No credit card required.
            </p>

            <button className="bg-white text-[#6D5CEB] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 animate-fade-up">
              Start 14-Day Trial
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      <Footer/>

      {/* Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s ease-out both;
        }
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out both;
        }
        .animate-stagger {
          opacity: 0;
          animation: fadeUp 0.7s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
