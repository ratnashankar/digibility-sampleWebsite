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
  ];

  return (
    <footer className="bg-[#2e2e2e] text-white py-6 px-[5vw] lg:px-[10vw]">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-start gap-2 lg:gap-6 mb-4 text-[16px]">
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
        <div className="text-[16px]">
          © 2025 Digibility Solutions Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
