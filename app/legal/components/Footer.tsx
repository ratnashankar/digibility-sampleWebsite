import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div>
          <h4 className="text-lg font-bold mb-2 text-white">Digibility</h4>
          <p className="text-sm">
            AI-Powered Social Media Automation for Businesses.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2 text-white">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-y-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2 text-white">Connect</h4>
          <p className="text-sm">Email: contact@digibility.ai</p>
          <p className="text-sm">Location: Pune, India</p>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Digibility Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
