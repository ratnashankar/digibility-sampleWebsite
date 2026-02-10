"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFaqs = async () => {
      try {
        const res = await fetch("/data/faqs.json");

        if (!res.ok) {
          throw new Error("Failed to fetch FAQs");
        }

        const data: FAQItem[] = await res.json();
        setFaqs(data);
      } catch (error) {
        console.error("Failed to load FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFaqs();
  }, []);

  return (
    <section className="py-20 bg-[#F8FAFF]" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
            data-testid="faq-heading"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#64748b]">
            Everything you need to know about Digibility
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-[#64748b]">Loading FAQs...</p>
        )}

        {!loading && (
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            data-testid="faq-accordion"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-white rounded-xl border-2 border-transparent hover:border-[#6D5CEB]/20 transition-all px-6"
                data-testid={`faq-item-${faq.id}`}
              >
                <AccordionTrigger className="text-left text-[#4E5674] font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-[#64748b] pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
};
