
export const metadata = {
  title: "About Us | Digibility",
  description:
    "Learn about Digibility — our mission, journey, leadership team, and vision to redefine AI-powered social media automation globally.",
  openGraph: {
    title: "About Us | Digibility",
    description:
      "Learn about Digibility — our mission, journey, leadership team, and vision to redefine AI-powered social media automation globally.",
    url: "https://digibility.ai/about",
    siteName: "Digibility",
    images: [{ url: "/og-about.png", width: 1200, height: 630, alt: "Digibility About Us" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Digibility",
    description:
      "Digibility is an Indian startup with global ambitions, building AI-powered marketing automation.",
    images: ["/og-about.png"],
  },
  alternates: { canonical: "https://digibility.ai/about" },
};

export default function About() {
  return (
    <div className="bg-gray-50 pt-[8vh] text-gray-900">
      {/* Hero */}
      <section className="text-center px-1 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl font-bold mb-4">About Digibility</h1>
        <p className="text-lg max-w-3xl mx-auto">
          An Indian startup with global ambitions — empowering businesses to scale their social media effortlessly with AI.
        </p>
      </section>

      {/* Journey */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <span className="text-blue-600 text-2xl">🚀</span>
            <p><strong>2024 – Ideation & Founding:</strong> The seed of Digibility is planted to simplify digital growth with AI-first automation.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-indigo-600 text-2xl">🤖</span>
            <p><strong>2025 – MVP Release:</strong> First version launches with AI-driven analysis, content, and scheduling.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-purple-600 text-2xl">📱</span>
            <p><strong>2025 – Social-first Launch:</strong> Automation for Facebook, Instagram, LinkedIn, and more — built for SMBs and creators.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-cyan-600 text-2xl">🌍</span>
            <p><strong>2026 – Scaling Globally:</strong> Expanding features into SEO, PPC, CRO and beyond with advanced marketing intelligence.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Mission & Vision</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          <strong>Mission:</strong> Democratize digital marketing with AI, enabling businesses of all sizes to grow online effortlessly.
          <br />
          <strong>Vision:</strong> Become the world’s most trusted AI-powered growth partner.
        </p>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto py-16 px-6" aria-labelledby="leadership-heading">
        <h2 id="leadership-heading" className="text-3xl font-bold text-center">Leadership Team</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { name: "Amit Gupta", role: "Founder & CEO", magic: "Driving global vision, strategy & execution." },
            { name: "Swapnil Vothkar", role: "Tech Advisor", magic: "Architecting robust backend systems." },
            { name: "Ratna Shankar Tripathi", role: "AI Architect", magic: "Infusing AI intelligence & automation into the core platform." },
            { name: "Sonia Gupta", role: "Community Head", magic: "Building strong user connections and brand trust." },
            { name: "Garv Gupta", role: "Strategy & Partnerships", magic: "Forging growth channels and collaborations." },
            { name: "Pritha Sengupta", role: "Creative Strategy Lead", magic: "Design & storytelling excellence across touchpoints." },
            { name: "Rhea Bhatia", role: "Customer Success Lead", magic: "Ensuring delightful client experiences and outcomes." },
          ].map((m) => (
            <div key={m.name} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">{m.name}</h3>
              <p className="text-blue-600 font-medium">{m.role}</p>
              <p className="mt-2 text-sm text-gray-600">{m.magic}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Vision */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-1  py-16 text-center">
        <h2 className="text-3xl font-bold">Global Vision</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Born in India, building for the world — AI-powered growth for every business.
        </p>
      </section>

      {/* Careers CTA */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">Join Our Journey</h2>
        <p className="mt-4 text-lg">We welcome interns and full-time talent. Help us shape the future of marketing.</p>
        <a href="/careers" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Explore Careers
        </a>
      </section>

    </div>
  );
}