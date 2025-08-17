import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/digibility.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerData = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Pricing", path: "/pricing" },
    { label: "Roadmap", path: "/roadmap" },
    { label: "Features", path: "/features" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/" },
  ];

  const darkBgPages = ["/", "/about", "/contact"];
  const isDarkBg = darkBgPages.includes(location.pathname);

  const linkColorClass = scrolled
    ? "text-black hover:text-gray-600"
    : isDarkBg
      ? "text-white hover:text-gray-300"
      : "text-black hover:text-gray-600";

  const mobileBgColor = scrolled || !isDarkBg ? "white" : "black";

  return (
    <header
      className={`fixed w-full h-[10vh] transition-colors duration-300 z-30 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img className="h-[7vh] object-contain" src={logo} alt="Digibility logo" />
        </Link>

        <nav className="hidden lg:flex gap-8 text-lg font-bold">
          {headerData.map((item, idx) => (
            <Link key={idx} to={item.path} className={`transition-colors duration-200 ${linkColorClass}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden p-2 ${linkColorClass}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-[10vh] w-full min-h-screen px-10 py-4 flex flex-col gap-4 text-xl font-bold transition-all duration-300 ease-in-out ${menuOpen ? "right-0" : "right-[-100vw]"
          }`}
        style={{ backgroundColor: mobileBgColor }}
      >
        {headerData.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`transition-colors duration-200 ${linkColorClass}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
