"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

import {
  Check,
  Zap,
  Diamond,
  Rocket,
  Info,
  ChevronDown,
  Star,
  ShieldCheck,
  TrendingUp,
  Mail,
  Smartphone,
  PieChart,
  Cpu,
  ArrowRight,
  Sparkles
} from 'lucide-react';

/**
 * 🎨 PREMIUM SAAS PRICING UI
 * Everything contained in one single file.
 */

const App: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing Data
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 4999,
      description: 'For solo founders and small brands',
      icon: <Zap className="w-6 h-6 text-[#4361EE]" />,
      color: 'bg-blue-50',
      btn: 'bg-white border-2 border-[#4361EE] text-[#4361EE] hover:bg-blue-50',
      features: [
        '2 social profiles',
        '30-day content calendar',
        '12 AI-generated posts/month',
        'ROI dashboard',
        'Best-time posting',
        'Email support'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 9999,
      recommended: true,
      description: 'For growing teams that need more reach',
      icon: <Diamond className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-[#4361EE] to-[#3A0CA3]',
      btn: 'bg-gradient-to-r from-[#4361EE] to-[#3A86FF] text-white shadow-lg shadow-blue-500/40',
      features: [
        '4 social profiles',
        'Everything in Starter',
        'Advanced reporting & analytics',
        'Priority content review',
        'A/B testing',
        'Priority support'
      ]
    },
    {
      id: 'scale',
      name: 'Scale',
      price: 19999,
      description: 'For agencies and high-volume brands',
      icon: <Rocket className="w-6 h-6 text-[#3A0CA3]" />,
      color: 'bg-slate-50',
      btn: 'bg-[#1F2E66] text-white hover:bg-[#15204d] shadow-lg shadow-slate-900/20',
      features: [
        '6+ social profiles',
        'Everything in Growth',
        'Team workspaces & permissions',
        'Dedicated success manager',
        'Custom integrations',
        'SLA & phone support'
      ]
    }
  ];

  // FAQ Data
  const faqs = [
    {
      q: "How does billing work?",
      a: "We offer both monthly and annual billing. Monthly plans are billed every 30 days, while annual plans are billed once per year with a significant discount. All payments are processed securely through Stripe."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. You can cancel your subscription at any time through your dashboard. Once canceled, your plan will remain active until the end of the current billing cycle."
    },
    {
      q: "Do you provide invoices with GST?",
      a: "Yes, we provide fully compliant GST invoices. You can add your business details and GSTIN in your profile settings to have them automatically included in every invoice."
    },
    {
      q: "What happens after my trial ends?",
      a: "After your 14-day free trial, you'll be automatically moved to our Starter plan unless you choose a different tier. We'll send you a reminder email 3 days before your trial ends."
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 selection:bg-blue-100 selection:text-blue-900">

      {/* 🌌 Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/10 blur-2xl"
            style={{
              width: Math.random() * 250 + 50,
              height: Math.random() * 250 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Textured Overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234361EE' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HERO */}
<section className="bg-[#F6F7FB] pt-25 pb-28 text-center">
          <div className="max-w-5xl mx-auto px-6">

            <h1 className="text-[64px] leading-[1.1] font-semibold text-[#2F3A56]">
              Plans that scale with{" "}
              <span className="text-[#5B6FEF]">your goals</span>
            </h1>

            <p className="mt-6 text-lg text-[#667085]">
              Simple tiers. 14-day free trial. Cancel anytime.
            </p>

            <div className="mt-10 flex items-center justify-center gap-6">

              {/* Monthly */}
              <span
                className={`text-sm font-medium transition ${!isYearly ? "text-[#2F3A56]" : "text-gray-400"
                  }`}
              >
                Monthly
              </span>

              {/* Toggle bg-gray-200 */}
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`
      relative w-16 h-8 rounded-full transition-all duration-300
      ${isYearly
                    ? "bg-gray-200 bg-gradient-to-r from-[#6D5EF5] to-[#3DA4F4]"
                    : "bg-gray-200"}
    `}
              >

                <div
                  className={`
        absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300
        ${isYearly ? "left-9" : "left-1"}
      `}
                />
              </button>

              {/* Annual */}
              <span
                className={`text-sm font-medium transition ${isYearly ? "text-[#2F3A56]" : "text-gray-400"
                  }`}
              >
                Annual
              </span>

              {/* Save Badge */}
              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium">
                Save 20%
              </span>

            </div>

          </div>
        </section>

        {/* 2️⃣ THREE PRICING PLANS */}
<section className="bg-[#F3F5F9] pb-16 -mt-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

            {plans.map((plan) => {
              const currentPrice = isYearly
                ? Math.floor(plan.price * 0.8)
                : plan.price;

              return (
                <div
                  key={plan.id}
                  className={`
            relative rounded-2xl bg-white p-10
            ${plan.recommended
                      ? "border-2 border-[#5B6FEF] shadow-md"
                      : "border border-[#E4E7EC] shadow-sm"}
          `}
                >

                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5B6FEF] text-white text-xs px-4 py-1 rounded-full font-medium">
                      Most Popular
                    </div>
                  )}

                  {/* Plan Title */}
                  <h3 className="text-2xl font-semibold text-[#2F3A56]">
                    {plan.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#667085]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#2F3A56]">
                      ₹{currentPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="mt-8 space-y-4 text-sm text-[#475467]">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`
              mt-10 w-full py-4 rounded-full text-sm font-medium transition
              ${plan.recommended
                        ? "bg-gradient-to-r from-[#6D5EF5] to-[#3DA4F4] text-white"
                        : "border border-[#D0D5DD] text-[#2F3A56] hover:bg-gray-50"}
            `}
                  >
                    Start Free Trial →
                  </button>

                </div>
              );
            })}
          </div>
        </section>


        {/* 3️⃣ FREE TRIAL INFO BOX */}
<section className="bg-[#F3F5F9] pt-12 pb-24">
  <div className="max-w-4xl mx-auto px-6">

    <div className="bg-[#F8F9FF] border border-[#DADDFB] rounded-[20px] p-10 md:p-12">

      <div className="flex items-start gap-5">

        {/* Blue Circle Icon */}
        <div className="w-10 h-10 rounded-full bg-[#5B6FEF] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-semibold">i</span>
        </div>

        {/* Text Content */}
        <div>

          <h3 className="text-[18px] font-semibold text-[#2F3A56]">
            14-Day Free Trial Includes
          </h3>

          <p className="mt-3 text-[#667085] text-[15px] leading-relaxed max-w-2xl">
            Your first pass is included: brand analysis, 30-day calendar,
            and initial content generation. Additional revisions use
            credits from your plan.
          </p>

          {/* Link Row */}
          <div className="mt-4 flex items-center gap-2 text-[#5B6FEF] text-sm font-medium">
            <span className="w-5 h-5 rounded-full border border-[#5B6FEF] flex items-center justify-center text-xs">
              ?
            </span>
            <a href="#" className="hover:underline">
              How do credits work?
            </a>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

        {/* 4️⃣ FAQ ACCORDION */}
<section className="bg-[#F3F5F9] pt-15 pb-24">
  <div className="max-w-4xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-center text-[32px] font-semibold text-[#2F3A56] mb-12">
      Billing & Plans FAQ
    </h2>

    {/* Accordion List */}
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <MinimalFAQItem key={idx} question={faq.q} answer={faq.a} />
      ))}
    </div>

  </div>
</section>


      </div>
    </div>
  );
};

// --- FAQ ITEM COMPONENT ---
function MinimalFAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-[#F8F9FF] border border-[#E4E7EC] rounded-[14px] overflow-hidden">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="text-[#2F3A56] font-medium">
          {question}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="px-6 overflow-hidden"
          >
            <div className="pb-5 text-[#667085] text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
