import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Digibility Legal | Privacy, Terms & More",
  description: "Read Digibility’s Terms, Privacy Policy, Refunds, Disclaimer and other legal documents.",
  openGraph: {
    title: "Digibility Legal",
    description: "Read Digibility’s Terms, Privacy Policy, Refunds, Disclaimer and other legal documents.",
    url: "https://digibility.ai/legal",
    siteName: "Digibility",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digibility Legal Docs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digibility Legal",
    description: "Digibility Legal Pages - Privacy, Terms & More",
    images: ["/og-image.png"],
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
}
