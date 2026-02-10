"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white"
      data-testid="final-cta"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3
          className="text-3xl sm:text-4xl font-bold mb-6"
          data-testid="final-cta-heading"
        >
          Ready to See It Work?
        </h3>

        <p className="text-base sm:text-lg mb-10 opacity-95 max-w-2xl mx-auto">
          Join hundreds of teams who've replaced their entire marketing stack
          with one powerful platform. Start your free 14-day trial—no credit
          card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-[#6D5CEB] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            data-testid="final-cta-primary"
          >
            Start Free 14-Day Trial
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>

          <button
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#6D5CEB] transition-all"
            data-testid="final-cta-secondary"
          >
            Book a Demo
          </button>
        </div>

        <p className="mt-8 text-sm opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};
export default FinalCTA;

