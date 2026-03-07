"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const sections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Roadmap", href: "/roadmap" },
        { label: "Free Tools", href: "/pages/tools/CaptionGeneratorTool" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Free Tools",
      links: [
        { label: "Caption Generator", href: "/pages/tools/CaptionGeneratorTool" },
        { label: "Hashtag Generator", href: "/pages/tools/HashtagGeneratorTool" },
        { label: "UTM Builder", href: "/pages/tools/UTMBuilderTool" },
        { label: "Best Time Demo", href: "/pages/tools/BestTimeDemoTool" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Acceptable Use", href: "/legal/acceptable-use" },
        { label: "Sub-processors", href: "/legal/sub-processors" },
        { label: "DPA", href: "/legal/dpa" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary to-[#2A324B] text-white py-20 overflow-hidden">

      {/* Glow effects */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-brand-start/30 blur-[140px] opacity-30" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-brand-end/30 blur-[140px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-b border-white/20">
          {sections.map((section) => (
            <div key={section.title} className="animate-fade-up">
              <h3 className="text-sm font-black mb-4 tracking-widest uppercase text-white/90">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PRIVACY / CONSENT ROW */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div>
            <p className="text-sm font-semibold text-white/90">
              Privacy & Tracking
            </p>
            <p className="text-xs text-white/60 max-w-md mt-1">
              Analytics help us improve Digibility. Disabled by default.
            </p>
          </div>

          <label className="flex items-center gap-3 text-sm text-white/80">
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={() => setAnalyticsEnabled(!analyticsEnabled)}
              className="accent-brand-start"
            />
            Enable analytics & tracking
          </label>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3 animate-fade-up">
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 12L10 16L18 8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-wide">
              Digibility
            </span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/60">
            © {year} Digibility. All rights reserved.
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com/digibility"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition"
              aria-label="Digibility on X"
            >
              X
            </a>
            <a
              href="https://linkedin.com/company/digibility"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition"
              aria-label="Digibility on LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
