"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Refund", href: "/legal/refund" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
    { label: "Cookies", href: "/legal/cookies" },
    { label: "Careers", href: "/legal/careers" },
  ];

  const visibleLinks = navLinks.slice(0, 4);
  const hiddenLinks = navLinks.slice(4);

  return (
    <header className="fixed lg:px-6 w-full h-[8vh] transition-colors duration-300 z-30 bg-white">
      <div className="px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
          aria-label="Digibility Home"
        >
          Digibility
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-bold">
          {visibleLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}

          <button
            aria-label="Toggle extra menu"
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[8vh] right-0 bg-white w-full lg:w-64 lg:right-10 shadow-lg border rounded p-6 flex flex-col gap-4 text-lg font-bold">
          {hiddenLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="transition-colors duration-200 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile also shows visible links */}
          <div className="lg:hidden flex flex-col gap-4">
            {visibleLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="transition-colors duration-200 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
