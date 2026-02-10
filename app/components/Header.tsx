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
    { name: "Blog", path: "/blog" },
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl
        ${isScrolled ? "bg-white/90 shadow-lg" : "bg-white/70"}`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-4 animate-fade-in">
        <div className="flex items-center justify-between">

        

{/* DESKTOP NAV */}
<div className="hidden lg:flex items-center justify-between w-full">

 <Link href="/" className="flex items-center gap-3">

  {/* Blue AI Icon (replaces old gradient box) */}
  <div className="w-10 h-10 rounded-full bg-[#1E90FF] flex items-center justify-center shadow-md">
    <span className="text-white font-bold text-sm">AI</span>
  </div>

  {/* New Logo Text */}
  <span className="text-2xl font-extrabold tracking-tight flex">
    <span className="text-[#1E90FF]">dig</span>
    <span className="text-[#4E5674]">ibility</span>
  </span>

</Link>


  {/* CENTER — NAV ITEMS */}
  <div className="flex items-center gap-10">

    {navLinks.map((link) => (
      <Link
        key={link.path}
        href={link.path}
        className="text-sm font-medium text-[#64748b] 
        hover:text-[#4E5674] transition-all hover:scale-[1.03]"
      >
        {link.name}
      </Link>
    ))}

    {/* Tools Dropdown */}
    <div className="relative">
      <button
        onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
       
        className="flex items-center gap-1 text-sm font-medium text-[#64748b] hover:text-[#4E5674]"
      >
        Tools
        <ChevronDown className="w-4 h-4" />
      </button>

      {toolsDropdownOpen && (
  <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-100 
        shadow-xl rounded-xl py-2 animate-slide-down">
    {toolsLinks.map((tool) => (
      <a
        key={tool.path}
        href={tool.path}
        className="block px-4 py-2 text-sm text-[#64748b] hover:bg-[#F8FAFF] hover:text-[#4E5674]"
      >
        {tool.name}
      </a>
    ))}
  </div>
)}

    </div>
  </div>

  {/* RIGHT — CTA BUTTON */}
  <div className="ml-10">
    <Link
      href="/signup"
      className="px-6 py-3 rounded-full font-semibold text-white text-sm
      bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF]
      hover:shadow-xl transition hover:scale-[1.07]"
    >
      Start Free Trial
    </Link>
  </div>

</div>




          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 text-[#4E5674] hover:scale-110 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* 🔥 MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4 animate-slide-down">
            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#64748b] hover:text-[#4E5674] transition"
                >
                  {link.name}
                </Link>
              ))}

              <p className="text-xs font-semibold text-[#4E5674] uppercase mt-3">
                Free Tools
              </p>

              {toolsLinks.map((tool) => (
                <Link
                  key={tool.path}
                  href={tool.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#64748b] hover:text-[#4E5674] transition"
                >
                  {tool.name}
                </Link>
              ))}

              <Link
                href="/signup"
                className="w-full text-center mt-4 py-3 rounded-full font-semibold text-white
                  bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] hover:shadow-xl transition"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-slide-down { animation: slideDown 0.3s ease-out; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </header>
  );
}
