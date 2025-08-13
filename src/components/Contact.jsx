import React, { useState, useRef } from "react";
import logo from "../assets/digibility logo light background.png";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
       
    };
     const handleScroll = (e) => {
        const element = document.getElementById(e);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white text-[#2E2E2E] flex flex-col min-h-screen mt-10">
          <header className="z-40 bg-white border-b border-gray-200 fixed top-0 w-full px-[5vw] py-2 text-xl">
  <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
    <div className="flex items-center">
      <img src={logo} alt="Digibility logo" className="h-10" />
    </div>

    <nav className="hidden md:flex gap-6 font-medium">
      <a href="#support">Support</a>
      <a href="#sales">Sales</a>
      <a href="#press">Press</a>
      <a href="#faq">FAQs</a>
    </nav>

    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="focus:outline-none p-2 border rounded-lg"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
  </div>

  {menuOpen && (
    <div className="md:hidden bg-white border-t border-gray-200 w-full px-5 py-3 absolute top-full left-0">
      <a  href="#support" className="block py-2">Support</a>
      <a href="#sales" className="block py-2">Sales</a>
      <a href="#press" className="block py-2">Press</a>
      <a href="#faq" className="block py-2">FAQs</a>
    </div>
  )}
</header>


            {/* HERO */}
            <section className="bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-white py-10 min-h-screen">
                <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                            Let’s talk. We’re here to help.
                        </h1>
                        <p className="text-lg text-gray-200 max-w-[60ch]">
                            Questions about pilots, pricing, or partnerships? Tell us a bit about
                            you and we’ll reply fast. No chatbots in circles — real humans, real
                            answers.
                        </p>
                    </div>

                    <div className=" w-[78vw] lg:w-[35vw] bg-white/10 border border-white/25 rounded-2xl p-5">
                        <div className="flex flex-wrap flex-col gap-6">
                            {[
                                {
                                    tag: "Support",
                                    title: "Product help",
                                    email: "support@digibility.app",
                                },
                                {
                                    tag: "Sales",
                                    title: "Plans & pilots",
                                    email: "sales@digibility.app",
                                },
                                {
                                    tag: "Press",
                                    title: "Media & PR",
                                    email: "press@digibility.app",
                                },
                                {
                                    tag: "Careers",
                                    title: "Work with us",
                                    email: "careers@digibility.app",
                                },
                            ].map((c) => (
                                <div
                                    key={c.tag}
                                    className="bg-white text-gray-900 border border-gray-300 rounded-2xl p-4 flex-1 min-w-[240px] w-[68vw] mx-auto lg:w-[32vw]"
                                >
                                    <span className="inline-block px-3 py-1 bg-[#EEF5FF] text-blue-600 text-xs font-semibold rounded-full">
                                        {c.tag}
                                    </span>
                                    <h4 className="text-lg font-bold mt-2">{c.title}</h4>
                                    <p className="text-gray-600">
                                        Email:{" "}
                                        <a
                                            href={`mailto:${c.email}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {c.email}
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* FORM + ASIDE */}
            <section
                id="support"
                className="max-w-[1200px]  px-[11vw] py-10 flex flex-col lg:flex-row gap-6"
            >
                {/* FORM */}
                <div className=" min-w-[50vw] bg-white rounded-xl border p-5">
                    <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
                    <p className="text-gray-600 italic mb-4">
                        We reply within 1–2 business days. For urgent issues, email support
                        directly.
                    </p>
                    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                name="name"
                                placeholder="Jane Doe"
                                className="flex-1 border rounded-lg p-3"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="you@company.com"
                                className="flex-1 border rounded-lg p-3"
                                required
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <select
                                name="subject"
                                className="flex-1 border rounded-lg p-3"
                                required
                            >
                                <option value="">Select a subject</option>
                                <option>General Inquiry</option>
                                <option>Sales</option>
                                <option>Support</option>
                                <option>Careers</option>
                                <option>Feedback</option>
                            </select>
                            <input
                                name="company"
                                placeholder="Your business name"
                                className="flex-1 border rounded-lg p-3"
                            />
                        </div>
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="How can we help? Please include any useful details."
                            className="border rounded-lg p-3"
                            required
                        />
                        <div>
                            <input
                                name="file"
                                type="file"
                                accept="image/*,.png,.jpg,.jpeg,.webp,.pdf"
                                className="border rounded-lg p-2 w-full"
                            />
                            <small className="text-gray-500 block mt-1">
                                Max 5MB. Common types: PNG, JPG, WEBP, PDF.
                            </small>
                        </div>
                        <input
                            type="text"
                            name="website"
                            className="hidden"
                        />
                        <div className="flex gap-3 flex-wrap">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-5 py-3 rounded-lg font-bold"
                            >
                                Send Message
                            </button>
                            <button
                                type="reset"
                                onClick={() =>
                                    setForm({
                                        name: "",
                                        email: "",
                                        subject: "",
                                        company: "",
                                        message: "",
                                        file: null,
                                        website: "",
                                    })
                                }
                                className="border border-blue-600 text-blue-600 px-5 py-3 rounded-lg font-bold"
                            >
                                Reset / Clear
                            </button>
                        </div>
                        {status.ok && (
                            <div className="bg-green-50 text-green-800 border border-green-300 p-3 rounded-lg">
                                {status.ok}
                            </div>
                        )}
                        {status.err && (
                            <div className="bg-red-50 text-red-800 border border-red-300 p-3 rounded-lg">
                                {status.err}
                            </div>
                        )}
                    </form>
                    <div
                        role="status"
                        className="block bg-[#E8F5E9] text-[#1B5E20] border border-[#B2DFDB] p-3 my-5 rounded-lg"
                    >
                        Thanks! Your message has been sent.
                    </div>
                    <div
                        role="status"
                        className="block bg-[#FDECEA] text-[#611A15] border border-[#F5C6CB] p-3 my-5 rounded-lg"
                    >
                        Something went wrong. Please try again or email support.
                    </div>



                    {/* Prefer another way */}
                    <div className="mt-6 border-t pt-4 border-2 rounded-3xl px-6 py-4 " >
                        <h3 className="text-xl font-bold mb-3">Prefer another way?</h3>
                        <div className="space-y-2 text-gray-700">
                            <div className="flex items-center gap-2">
                                <span>📧</span>
                                <a href="mailto:support@digibility.app" className="text-blue-600">
                                    support@digibility.app
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📞</span>
                                <a href="tel:+10000000000" className="text-blue-600">
                                    Call us
                                </a>
                                <span>·</span>
                                <span>💬</span>
                                <a
                                    href="https://wa.me/10000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600"
                                >
                                    WhatsApp
                                </a>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <a href="#"  aria-label="LinkedIn" className="text-blue-600 border-2 rounded-xl bg-[#eef5ff] h-[36px] w-[36px] px-[11px] py-1 ">
                                    in
                                </a>
                                <a href="#"  aria-label="Twitter/X" className="text-blue-600 border-2 rounded-xl bg-[#eef5ff] h-[36px] w-[36px] px-[12px] py-1 ">
                                    X
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick resources */}
                    <div className="mt-6 border-t pt-4 text-[17px] flex flex-col lg:flex-row gap-5">
                        <a href="#" className="block text-blue-600 border-2  px-3 py-3  rounded-xl">
                            📘 Visit our Help Center
                        </a>
                        <a href="#" className="block text-blue-600 border-2  px-3 py-3  rounded-xl">
                            🎫 Open a Support Ticket
                        </a>
                        <a href="#" className="block text-blue-600 border-2  px-3 py-3  rounded-xl">
                            💼 Careers / Join the Team
                        </a>
                    </div>

                    {/* Compliance strip */}
                    <div className="mt-6 flex flex-wrap gap-3 border-t pt-4 text-sm text-gray-600">
                        <span className="px-3 py-1 border rounded-full">🛡️ Data protected</span>
                        <span className="px-3 py-1 border rounded-full">
                            🔒 Secure communications
                        </span>
                        <span className="px-3 py-1 border rounded-full">🇪🇺 GDPR-ready</span>
                    </div>
                </div>

                {/* ASIDE */}
                <div className=" bg-white w-[78vw] lg:w-[20vw] h-fit shrink-0 rounded-xl border p-5">
                    <h3 className="text-3xl font-bold mb-2">Before you write in</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Looking for pricing? See our plans or ask Sales.</li>
                        <li>
                            Need help right now? Email{" "}
                            <a href="mailto:support@digibility.app" className="text-blue-600">
                                support@digibility.app
                            </a>
                            .
                        </li>
                        <li>
                            Press? Email{" "}
                            <a href="mailto:press@digibility.app" className="text-blue-600">
                                press@digibility.app
                            </a>
                            .
                        </li>
                    </ul>
                    <div className="mt-4 border rounded-lg p-3">
                        <b>Office</b>
                        <p className="text-gray-600 mt-1">
                            Digibility Solutions Pvt. Ltd. We operate remotely with a registered HQ.
                            Visits by appointment only.
                        </p>
                    </div>
                    <div className="mt-4 border border-dashed rounded-lg p-6 text-gray-500 h-[30vw] lg:h-[13vw] text-center">
                        Map placeholder (optional)
                    </div>
                </div>
            </section>


            <section id="faq" className="max-w-[1200px] mx-auto px-[10vw] lg:px-5 pb-10">
                <h2 className="text-3xl font-bold mb-3">FAQs</h2>
                <div className="flex flex-wrap gap-4">
                    {[
                        [
                            "How fast do you reply?",
                            "We aim to reply within 1–2 business days. Support emails are prioritized.",
                        ],
                        [
                            "Do you offer pilots?",
                            "Yes — we’re in private pilots. Mention your goals and timeline in the form.",
                        ],
                        [
                            "Is phone support available?",
                            "For active pilots/customers, we schedule call slots as needed.",
                        ],
                        [
                            "Where can I report a bug?",
                            "Email support@digibility.app with steps, device, and screenshots.",
                        ],
                        [
                            "How do I contact support?",
                            "Use the form above and select “Support,” or email support@digibility.app.",
                        ],
                        [
                            "Can I book an onboarding call?",
                            "Yes. If you’re in a pilot or paid plan, request a call in your message and we’ll share slots.",
                        ],
                        [
                            "Where can I get feature help?",
                            "Check the Help Center for guides. If you’re stuck, open a ticket and we’ll assist.",
                        ],
                    ].map(([q, a], i) => (
                        <div
                            key={i}
                            className="flex-[1_1_260px] min-w-[240px] rounded-xl border p-4 bg-white"
                        >
                            <details>
                                <summary className="font-semibold cursor-pointer">{q}</summary>
                                <p className="mt-2 text-gray-700">{a}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-gray-300 py-5">
                <div className="max-w-[1200px] mx-auto px-5 text-gray-600">
                    © {new Date().getFullYear()} Digibility Solutions Pvt. Ltd. ·{" "}
                    <a href="#" className="text-blue-600">
                        Privacy
                    </a>{" "}
                    ·{" "}
                    <a href="#" className="text-blue-600">
                        Terms
                    </a>
                </div>
            </footer>
        </div>
    );
}
