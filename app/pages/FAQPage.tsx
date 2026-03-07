"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQItem[];
}

export default function FAQPage() {
  const faqCategories: Record<string, FAQCategory> = {
    billing: {
      title: "Billing & Payments",
      faqs: [
        {
          question: "How does billing work?",
          answer:
            "You are billed monthly or annually (save 20% with annual plans). We accept credit cards, UPI, and bank transfers.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes. Cancel anytime from dashboard. You keep access till the billing cycle ends.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Visa, Mastercard, AmEx, UPI, and bank transfers. International cards supported.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 14-day free trial. Paid plans offer prorated refunds within 7 days.",
        },
        {
          question: "Can I upgrade or downgrade?",
          answer:
            "Yes. Upgrades apply immediately, downgrades apply next billing cycle.",
        },
      ],
    },

    product: {
      title: "Product & Features",
      faqs: [
        {
          question: "Which social platforms do you support?",
          answer:
            "Instagram, Facebook, Twitter/X, LinkedIn, TikTok, Google Business Profile.",
        },
        {
          question: "How does AI content generation work?",
          answer:
            "AI analyses your brand voice & industry to generate personalized content.",
        },
        {
          question: "Can I customize content style?",
          answer:
            "Yes. Upload brand kit, tone guidelines and examples to personalize output.",
        },
      ],
    },

    security: {
      title: "Security & Compliance",
      faqs: [
        {
          question: "How do you protect my data?",
          answer:
            "Data encrypted with TLS 1.3 & AES-256. OAuth login only. No password stored.",
        },
        {
          question: "Are you GDPR & CCPA compliant?",
          answer:
            "Yes. Full compliance with global privacy laws. Export/delete data anytime.",
        },
        {
          question: "Where is data stored?",
          answer:
            "AWS Mumbai (primary) & Singapore (backup). Data never leaves India unless you enable global platforms.",
        },
      ],
    },

    data: {
      title: "Data & Privacy",
      faqs: [
        {
          question: "Can I export my data?",
          answer: "Yes. Export your complete dataset anytime in JSON or CSV.",
        },
        {
          question: "What happens if I cancel?",
          answer:
            "You have 30 days to export data. After that, it is permanently deleted.",
        },
      ],
    },

    access: {
      title: "Team & Access",
      faqs: [
        {
          question: "Can multiple team members use one account?",
          answer: "Yes. We support Admin, Editor, Viewer roles.",
        },
        {
          question: "How many users can I add?",
          answer: "Starter: 2, Growth: 5, Scale: Unlimited.",
        },
      ],
    },
  };

  return (
    <div className="App">
      <main className="min-h-screen bg-[#F8FAFF]">

        {/* HERO SECTION */}
        <section className="py-20 md:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4E5674] leading-tight">
      Clear answers for{" "}
      <span className="bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] text-transparent bg-clip-text">
        busy teams
      </span>
    </h1>
    <p className="mt-6 text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
      Setup, trial, pricing, features, and security in minutes.
    </p>
  </div>
</section>

        {/* FAQ CATEGORIES */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 space-y-16">

            {Object.entries(faqCategories).map(([key, category]) => (
              <div key={key} className="animate-[fadeInUp_.6s_ease]">
                <h2 className="text-3xl font-bold mb-6 text-[#4E5674]">
                  {category.title}
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${key}-${index}`}
                      className="
                        bg-white/90 border border-transparent 
                        rounded-2xl shadow-sm
                        backdrop-blur-sm
                        hover:border-[#6D5CEB]/30 
                        hover:shadow-md
                        transition-all
                        px-6
                      "
                    >
                      <AccordionTrigger
                        className="text-left font-semibold text-[#4E5674] py-5"
                      >
                        {faq.question}
                      </AccordionTrigger>

                      <AccordionContent className="text-[#64748b] pb-6 text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* LEGAL SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className="
                bg-[#F8FAFF]/80 rounded-3xl p-10 
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                border border-[#6D5CEB]/20
                backdrop-blur-md
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-[#4E5674]">
                Legal & Compliance
              </h3>
              <p className="text-sm text-[#64748b] mb-6">
                Review our policies & compliance documents:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  ["Privacy Policy", "/legal/privacy"],
                  ["Terms of Service", "/legal/terms"],
                  ["Acceptable Use Policy", "/legal/acceptable-use"],
                  ["Sub-processors", "/legal/sub-processors"],
                  ["Data Processing Agreement", "/legal/dpa"],
                ].map(([label, link]) => (
                  <Link
                    key={label}
                    href={link}
                    className="flex items-center gap-2 text-sm text-[#6D5CEB] font-medium hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT CTA */}
        <section className="py-24 bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-4xl font-bold mb-6">Still Have Questions?</h3>
            <p className="text-lg mb-10 opacity-95 max-w-xl mx-auto">
              Email us anytime at support@digibility.com.
            </p>

            <button
              className="
                bg-white text-[#6D5CEB] px-10 py-4 
                rounded-full font-semibold text-lg 
                shadow-lg hover:shadow-2xl 
                transition-all active:scale-95
              "
            >
              Contact Support
            </button>

            <p className="mt-8 text-sm opacity-80">
              Avg. response time: <strong>2 hours</strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
