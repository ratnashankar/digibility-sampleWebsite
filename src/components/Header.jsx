import React, { useState } from 'react';
import logo from "../assets/digibility logo light background.png";
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full h-[10vh] z-50">
      <div className="px-10 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img className="w-[20vh]" src={logo} alt="Digibility logo" />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-[18px] font-bold text-black">
          <Link to="/about" className="hover:text-gray-900">About</Link>
          <Link to="/" className="hover:text-gray-900">Pricing</Link>
          <Link to="/" className="hover:text-gray-900">Roadmap</Link>
          <Link to="/" className="hover:text-gray-900">Careers</Link>
          <Link to="/contact" className="hover:text-gray-900">Contact</Link>
          <Link to="/" className="hover:text-gray-900">Login</Link>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="open menu"
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round" 
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4 text-[18px] font-bold text-black">
          <a href="#features" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#Customers" onClick={() => setMenuOpen(false)}>Roadmap</a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>Careers</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#login" onClick={() => setMenuOpen(false)}>Login</a>
        </div>
      )}
    </header>
  );
}
