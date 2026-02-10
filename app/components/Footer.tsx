import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

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
        { label: "Hashtag Generatorr", href: "/pages/tools/HashtagGeneratorTool" },
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
    <footer className="relative bg-gradient-to-b from-[#4E5674] to-[#2A324B] text-white py-20 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-[#6D5CEB]/30 blur-[140px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#2DA4EF]/30 blur-[140px] opacity-30 animate-pulse delay-300"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-10 border-b border-white/20">
          {sections.map((section) => (
            <div key={section.title} className="animate-fade-up">
              <h3 className="text-sm font-bold mb-4 tracking-wide uppercase text-white/90">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10">

          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-up">
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M6 12L10 16L18 8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-wide">Digibility</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/70 animate-fade-up">
            © {year} Digibility. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 animate-fade-up">

            {/* X */}
            <a
              href="https://twitter.com/digibility"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white hover:scale-110 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/digibility"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white hover:scale-110 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
}
