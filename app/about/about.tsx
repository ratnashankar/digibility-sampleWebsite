"use client";

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
      description:
        "Lean teams focused on product-market fit, not managing agencies.",
      icon: Target,
    },
    {
      title: "Growing Startups",
      description:
        "Scaling fast but marketing budgets are tight and timelines are short.",
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
    <div className="App animate-fade-in bg-gradient-to-b from-[#F8FAFF] to-white">

      <main className="min-h-screen">

{/* ============================
    HERO SECTION
============================ */}
<section
  className="py-20 md:py-32 bg-white relative overflow-hidden"
  data-testid="about-hero"
>
  {/* Subtle background gradient accent */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
    <div className="absolute -top-20 right-20 w-96 h-96 bg-[#6D5CEB]/10 blur-3xl rounded-full"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#4E5674] animate-fade-up leading-tight"
        data-testid="about-heading"
      >
        Built to power{" "}
        <span className="text-[#6D5CEB]">
          solopreneurs,
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] text-transparent bg-clip-text">
          startups, and SMBs
        </span>
      </h1>

      <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto animate-fade-up delay-150">
        Agency-level marketing without the agency.
      </p>
    </div>
  </div>
</section>


        {/* ============================
            OUR STORY
        ============================ */}
        <section
          className="py-20 bg-[#F8FAFF]"
          data-testid="our-story"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#4E5674] animate-fade-up">
              Our Story
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#64748b] leading-relaxed animate-fade-up delay-150">
              <p>
                <strong className="text-[#4E5674]">The Problem:</strong> We watched founders pour
                their energy into brilliant products, only to watch them fail because no one knew
                they existed. Marketing was either too expensive (agencies charging $10K/month) or
                too time-consuming (DIY tools that required full-time attention).
              </p>

              <p>
                <strong className="text-[#4E5674]">The Frustration:</strong> Every startup we spoke
                to had the same story—"We know we need to post consistently. We know social media
                drives growth. But we cannot afford an agency, and we do not have time to do it
                ourselves."
              </p>

              <p>
                <strong className="text-[#4E5674]">The Solution:</strong> We built Digibility.
                AI that plans your content, writes on-brand posts, and schedules everything—
                while you stay in control.
              </p>
            </div>
          </div>
        </section>

        {/* ============================
            WHO WE SERVE
        ============================ */}
        <section className="py-20 bg-white" data-testid="who-we-serve">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#4E5674] animate-fade-up">
              Who We Serve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whoWeServe.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all animate-stagger"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#4E5674]">{item.title}</h3>
                    <p className="text-sm text-[#64748b]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================
            WHY WE BUILT DIGIBILITY
        ============================ */}
<section className="py-20 bg-[#F8FAFF]" data-testid="why-we-built">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-[#4E5674] animate-fade-up">
      Why We Built Digibility
    </h2>

    <div className="space-y-12">
      {[
        {
          title: "The Problem",
          desc: "Great products fail because founders cannot afford consistent marketing. Agencies are expensive. Freelancers are inconsistent. DIY is exhausting.",
        },
        {
          title: "Our Mission",
          desc: "Make world-class marketing accessible to every business, regardless of budget or team size. Automate the grind. Preserve the control.",
        },
        {
          title: "What Drives Us",
          desc: "Every founder who closes a deal because someone saw their post. Every local shop that fills their tables because of consistent social presence. Every team that hits their growth targets without burning out. That is why we build.",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-8 sm:p-10 animate-stagger"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#4E5674]">
            {card.title}
          </h3>
          <p className="text-base sm:text-lg text-[#64748b] leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
        {/* ============================
            TEAM
        ============================ */}
        <section className="py-20 bg-white" data-testid="team-section">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#4E5674] animate-fade-up">
              Meet the Team
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-stagger"
                  style={{ animationDelay: `${index * 0.15}s` }}
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

        {/* ============================
            VALUES
        ============================ */}
        <section className="py-20 bg-[#F8FAFF]" data-testid="values-section">
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

        {/* ============================
            CTA
        ============================ */}
        <section
          className="py-20 bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white"
          data-testid="about-cta"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-up">
              Join Thousands of Teams Growing with Digibility
            </h3>

            <p className="text-base sm:text-lg mb-10 opacity-95 max-w-2xl mx-auto animate-fade-up delay-150">
              Start your free 14-day trial. No credit card required.
            </p>

            <button
              className="bg-white text-[#6D5CEB] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2 animate-fade-up"
              data-testid="about-cta-button"
            >
              Start 14-Day Trial
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      {/* ============================
          Animations
      ============================ */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .animate-stagger {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
