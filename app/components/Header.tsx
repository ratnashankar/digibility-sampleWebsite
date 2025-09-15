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
    { label: "Login", href: "https://app.digibility.ai/login" },
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

  const renderLink = (item: { label: string; href: string }) => {
    const isLogin = item.label === "Login";
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className={
          isLogin
            ? "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 shadow-md"
            : "transition-colors duration-200 hover:text-blue-600"
        }
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="fixed lg:px-6 w-full h-[10vh] transition-colors duration-300 z-30 bg-white">
      <div className="px-10 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 flex items-center"
          aria-label="Digibility Home"
        >
          <img
            src="/1757175021796-digibility.png"
            alt="Digibility_Logo"
            className="h-14 w-auto max-w-[160px] mt-[-10px] " 
          />
        </Link>


        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-bold">
          {visibleLinks.map(renderLink)}

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
          {hiddenLinks.map(renderLink)}

          {/* Mobile also shows visible links */}
          <div className="lg:hidden flex flex-col gap-4">
            {visibleLinks.map(renderLink)}
          </div>
        </div>
      )}
    </header>
  );
}
