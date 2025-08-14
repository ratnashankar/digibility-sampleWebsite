import React, { useState } from "react";
import logo from "../assets/digibility logo light background.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerData = [
    { label: "About", path: "/about" },
    { label: "Pricing", path: "/" },
    { label: "Roadmap", path: "/" },
    { label: "Careers", path: "/" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/" }
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full h-[10vh] z-50">
      <div className="px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img className="h-[8vh] object-contain" src={logo} alt="Digibility logo" />
        </Link>
        <nav className="hidden lg:flex gap-8 text-lg font-bold text-black">
          {headerData.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="hover:text-gray-600 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`lg:hidden absolute top-[10vh] w-full max-w-[100vw] min-h-screen bg-white shadow-lg px-10 py-4 flex flex-col gap-4 text-xl  font-bold text-black
    transition-all duration-300 ease-in-out
    ${menuOpen ? "right-0" : "right-[-100vw]"}
  `}
      >
        {headerData.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-600 transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>

    </header>
  );
}
