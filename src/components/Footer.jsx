import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { label: "Pricing", path: "/pricing" },
    { label: "Features & Benefits", path: "/features" },
    { label: "Roadmap", path: "/roadmap" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Refund Policy", path: "/refund" },
    { label: "Disclaimer", path: "/disclaimer" },
    { label: "Cookie Policy", path: "/cookie" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" },
  ];

  return (
   <footer className="bg-[#2e2e2e] text-white py-8 px-[5vw] lg:px-[10vw]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-col justify-between items-center gap-6">
    
    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[15px]">
      {footerLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="hover:text-gray-400 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>

    <div className="w-full h-[1px] bg-gray-700 md:hidden" />

    <div className="text-center md:text-right text-[14px] text-gray-300">
      © 2025 Digibility Solutions Pvt. Ltd.  
      <br className="md:hidden" />
      All rights reserved.
    </div>
  </div>
</footer>

  );
}
