"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

interface LogoItem {
  id: number;
  name: string;
  logo: string;
}

export const SocialProof: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [logos, setLogos] = useState<LogoItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [testimonialsRes, logosRes] = await Promise.all([
          fetch("/data/testimonials.json"),
          fetch("/data/logos.json"),
        ]);

        const testimonialsData: Testimonial[] =
          await testimonialsRes.json();
        const logosData: LogoItem[] = await logosRes.json();

        setTestimonials(testimonialsData);
        setLogos(logosData);
      } catch (err) {
        console.error("Failed to load social proof data:", err);
      }
    };

    loadData();
  }, []);

  return (
    <section className="py-20 bg-white" data-testid="social-proof">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
            data-testid="social-proof-heading"
          >
            Trusted by Growing Teams
          </h2>

          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
            Join hundreds of businesses automating their marketing
          </p>
        </div>

        {/* Logo Strip */}
        <div className="mb-16" data-testid="logo-strip">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="w-24 h-12 flex items-center justify-center"
              >
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F8FAFF] rounded-2xl p-8 card-stagger"
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Rating */}
              <div
                className="flex gap-1 mb-4"
                aria-label={`${testimonial.rating} stars`}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#4E5674] mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-[#4E5674]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#64748b]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
