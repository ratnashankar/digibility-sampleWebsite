"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "About", path: "/about" },
    //{ name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const toolsLinks = [
    { name: "Caption Generator", path: "/pages/tools/CaptionGeneratorTool" },
    { name: "Hashtag Generator", path: "/pages/tools/HashtagGeneratorTool" },
    { name: "Best Time Demo", path: "/pages/tools/BestTimeDemoTool" },
    { name: "UTM Builder", path: "/pages/tools/UTMBuilderTool" },
  ];

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <nav className="max-w-7xl mx-auto px-8 py-4 animate-fade-in">
        <div className="flex items-center justify-between">

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <span className="text-2xl font-bold text-[#4E5674]">
                Digibility
              </span>
            </Link>


            {/* NAV LINKS */}
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm font-medium text-slate-500 hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}

              {/* TOOLS DROPDOWN 
              <div className="relative">
                <button
                  onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-primary"
                >
                  Tools
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-xl py-2 animate-slide-down">
                    {toolsLinks.map((tool) => (
                      <Link
                        key={tool.path}
                        href={tool.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-background hover:text-primary"
                        onClick={() => setToolsDropdownOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div> */}
            </div>

            {/* CTA */}
            <div className="ml-10">
              <Link
                href="/signup"
                className="btn-primary text-sm hover:scale-[1.07]"
              >
                Start Free Trial
              </Link>
            </div>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="lg:hidden p-2 text-primary transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-600 hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}

              <p className="text-xs font-semibold text-primary uppercase mt-3">
                Free Tools
              </p>

              {toolsLinks.map((tool) => (
                <Link
                  key={tool.path}
                  href={tool.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-slate-600 hover:text-primary transition"
                >
                  {tool.name}
                </Link>
              ))}

              <Link
                href="/signup"
                className="btn-primary w-full text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
