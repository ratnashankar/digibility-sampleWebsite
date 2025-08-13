import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/digibility logo light background.png";

const AboutUs = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleScroll = (e) => {
        const element = document.getElementById(e);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="mt-[8vh]" >
            <header className="z-40 bg-white border-b border-gray-200 fixed top-0 w-full px-[5vw]">
                <div className="mx-auto flex justify-between items-center py-3">

                    <div className="flex items-center">
                        <img src={logo} alt="Digibility logo" className="h-11" />
                    </div>

                    <nav className="hidden md:flex space-x-6 text-gray-800 text-lg font-bold">
                        <button onClick={() => handleScroll("story")}>Story</button>
                        <button onClick={() => handleScroll("mission")}>Mission</button>
                        <button onClick={() => handleScroll("principles")}>Principles</button>
                        <button onClick={() => handleScroll("how")}>How it works</button>
                        <button onClick={() => handleScroll("faq")}>FAQs</button>
                    </nav>

                    <button
                        className="md:hidden p-2 rounded focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 20 20"
                            stroke="currentColor"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-4 bg-white px-5 py-4 text-lg font-bold border-t border-gray-200">
                        <button onClick={() => handleScroll("story")}>Story</button>
                        <button onClick={() => handleScroll("mission")}>Mission</button>
                        <button onClick={() => handleScroll("principles")}>Principles</button>
                        <button onClick={() => handleScroll("how")}>How it works</button>
                        <button onClick={() => handleScroll("faq")}>FAQs</button>
                    </div>
                )}
            </header>

            <section className="bg-gradient-to-br from-[#007bff] to-[#6f42c1] text-white">
                <div className=" mx-auto flex flex-col md:flex-row items-center px-[11vw] py-16 gap-6">
                    <div className="flex-1">
                        <div className="tracking-wide font-semibold opacity-90 mb-2">
                            ABOUT DIGIBILITY
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                            We’re building calm, consistent social media for small businesses.
                        </h1>
                        <p className="text-lg text-gray-200 max-w-2xl mb-6">
                            Digibility exists because posting shouldn’t require six tools,
                            three freelancers, and your Sunday evening. We’re creating an
                            AI-assisted system that plans, creates, schedules, and learns — so
                            you get time back.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button className="bg-green-400 hover:bg-green-500 text-white font-bold px-5 py-3 rounded-lg transition-colors duration-300 ease-in-out">
                                Request Private Invite
                            </button>
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-5 py-3 rounded-lg transition-colors duration-300 ease-in-out">
                                Our Product Principles
                            </button>

                        </div>
                    </div>

                    <div className="flex-1 bg-white/10 border border-white/30 rounded-2xl p-5 w-full md:max-w-[33vw]">
                        <p className="italic text-gray-100 mb-3">
                            “Marketing isn’t failing you — the system is. Our job is to fix
                            the system so small teams can win.”
                        </p>
                        <ul className="flex flex-wrap gap-3">
                            {[
                                "Plan → Create → Schedule in one flow",
                                "No complex dashboards — radical clarity",
                                "Keep ownership of your content & data",
                                "Built for individuals, SMBs, coaches & consultants",
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex gap-2 w-full sm:w-[48%]"
                                >
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 mt-2"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            <section id="story" className="bg-gray-50 px-[11vw] ">
                <div className=" mx-auto  py-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Digibility Story
                    </h2>
                    <p className="text-gray-600 max-w-3xl mb-7">
                        Our founders spent years helping small brands publish content the
                        hard way. The patterns were clear: too many tools, not enough
                        clarity, and results that were hard to trust. Digibility is our
                        answer to that pattern.
                    </p>
                    <div className="flex flex-col gap-6 border-l-2 border-blue-500 ">
                        {[
                            {
                                year: "2015–2021",
                                title: "Pattern Spotting",
                                text: "Advising SMBs & creators showed the same problems again and again: tool sprawl, DIY burnout, and inconsistent posting.",
                            },
                            {
                                year: "2022–2024",
                                title: "Prototypes & Playbooks",
                                text: "We built internal playbooks and light prototypes to automate calendars and approvals. Results improved — effort dropped.",
                            },
                            {
                                year: "2025",
                                title: "Digibility Solutions Pvt. Ltd.",
                                text: "We formalized the vision and began building the MVP with a small group of early users to refine the flow end-to-end.",
                            },
                            {
                                year: "Now",
                                title: "Private Pilots",
                                text: "We’re inviting a handful of businesses to help shape the product. If you want calm, consistent social — join us.",
                            },
                        ].map((step, i) => (
                            <div
                                key={i}
                                className="flex flex-col md:flex-row gap-4 relative  px-[3vw] pl-[1vw] items-start"
                            >
                                <div className="min-w-[160px] mt-5">
                                    <span className="inline-block px-3 py-1 bg-white border border-gray-300 rounded-full font-semibold">
                                        {step.year}
                                    </span>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-2xl p-4 flex-1">
                                    <b>{step.title}</b>
                                    <br />
                                    {step.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="problem" className=" mx-auto px-[11vw] py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    The Problem We’re Fixing
                </h2>
                <p className="text-gray-600 max-w-3xl mb-7">
                    When you try to build a social presence with limited time and budget,
                    the system makes you wear every hat. We’re changing that.
                </p>
                <div className="flex flex-wrap gap-6">
                    {[
                        { icon: "🧩", title: "Tool Overload", text: "Six apps to make one post. Data scattered everywhere." },
                        { icon: "⏳", title: "DIY Burnout", text: "Weekends lost to planning, writing, and designing." },
                        { icon: "📉", title: "Unclear ROI", text: "Hard to know what worked, so every week starts from zero." },
                        { icon: "📅", title: "Inconsistency", text: "Without a system, posting regularly is a constant struggle." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 flex-1 min-w-[240px]">
                            <div className="text-2xl">{item.icon}</div>
                            <h4 className="text-xl font-bold mt-2">{item.title}</h4>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="mission" className=" mx-auto px-[11vw] py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>
                <div className="flex flex-wrap gap-6">
                    {[
                        { icon: "🎯", title: "Mission:", text: "Give small teams a calm, consistent way to do social media — with clarity and less effort." },
                        { icon: "🌍", title: "Vision:", text: "A world where every good business can market itself without needing a big budget or a big team." },
                        { icon: "🤝", quote: "“Outcomes over outputs. Time back to you.”" }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-start bg-white border border-gray-200 rounded-2xl p-4 flex-1 min-w-[260px]">
                            <div className="text-2xl">{item.icon}</div>
                            <div>
                                {item.title && <b>{item.title}</b>}
                                {item.text && <p>{item.text}</p>}
                                {item.quote && <p className="italic text-gray-600">{item.quote}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="what" className=" px-[11vw]  py-16 max-w-[60vw]">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                    What Is Digibility? (Plain English)
                </h2>
                <p className="text-gray-600 max-w-3xl">
                    It’s your social media co-pilot. You answer a few simple questions. It
                    plans your calendar, drafts your posts, schedules them, and learns
                    what works. You stay in control — we remove the chaos.
                </p>
            </section>

            <section id="principles" className=" mx-auto px-[11vw] py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Principles</h2>
                <div className="flex flex-wrap gap-6">
                    {[
                        { icon: "✅", title: "Outcomes > Outputs", text: "We optimize for business results, not posting volume." },
                        { icon: "🧠", title: "Human-first AI", text: "AI assists; you approve. Your voice stays yours." },
                        { icon: "🔒", title: "Privacy by Design", text: "You own your content and data. Clear export and deletion." },
                        { icon: "⏱️", title: "Give Time Back", text: "Reduce planning, writing, and scheduling overhead." },
                        { icon: "🔎", title: "Radical Clarity", text: "Simple insights so you know what worked — and why." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-start bg-white border border-gray-200 rounded-2xl p-4 flex-1 min-w-[260px] max-w-[10vw]">
                            <div className="text-2xl">{item.icon}</div>
                            <div>
                                <b>{item.title}</b>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="how" className=" mx-auto px-[11vw] py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    How It Works (at a Glance)
                </h2>
                <div className="flex flex-wrap gap-6">
                    {[
                        { num: "1", title: "Answer", text: "Tell us who you are and what you sell in a short, friendly flow." },
                        { num: "2", title: "Plan & Create", text: "We assemble your calendar and draft posts tailored to your goals." },
                        { num: "3", title: "Schedule & Learn", text: "Approve with one click. We schedule, publish, and learn what works." }
                    ].map((step, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 flex-1 min-w-[260px]">
                            <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mb-2">
                                {step.num}
                            </div>
                            <b>{step.title}</b>
                            <p>{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="trust" className=" mx-auto px-[11vw] py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Responsible AI & Data Practices
                </h2>
                <div className="flex flex-wrap gap-6">
                    {[
                        { title: "Data Ownership", text: "Your content and exports are yours — always." },
                        { title: "Security", text: "Encryption in transit & at rest; role-based access." },
                        { title: "Compliance-Ready", text: "Designed with GDPR principles; no dark patterns." },
                        { title: "Control", text: "Clear settings for retention, deletion, and opt-out." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-gray-300 rounded-2xl p-4 flex-1 min-w-[220px]">
                            <b>{item.title}</b>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="roadmap" className=" mx-auto px-[11vw] py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap Snapshot</h2>
                <div className="flex flex-wrap gap-6">
                    {[
                        { title: "Now", items: ["Private pilots with select businesses", "Calendar + drafting + scheduling core", "Early analytics: clarity over vanity"] },
                        { title: "Next", items: ["Brand voice onboarding & style guides", "Deeper platform integrations", "Smarter time-to-post recommendations"] },
                        { title: "Later", items: ["Collaboration & approvals", "Template marketplace", "Advanced insights & alerts"] }
                    ].map((col, i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4 flex-1 min-w-[260px]">
                            <h5 className="text-lg text-purple-600 font-bold mb-2">{col.title}</h5>
                            <ul className="list-disc list-inside text-gray-700">
                                {col.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className=" mx-auto px-[11vw] py-16">
                <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-2xl p-7">
                    <h2 className="text-3xl font-bold mb-2">
                        Why we’re in stealth — and how to get in
                    </h2>
                    <p className="text-gray-200 max-w-3xl mb-5">
                        We’re refining the experience with a small group first. That lets us
                        build fast, listen closely, and keep promises. Want in?
                    </p>
                    <form className="flex flex-wrap gap-3">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="rounded-lg p-3 text-gray-800 flex-1 min-w-[200px]"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="rounded-lg p-3 text-gray-800 flex-1 min-w-[200px]"
                            required
                        />
                        <select className="rounded-lg p-3 text-gray-800 flex-1 min-w-[200px]">
                            <option value="">Business type</option>
                            <option>Solo / Creator</option>
                            <option>Coach / Consultant</option>
                            <option>SMB</option>
                            <option>Startup</option>
                        </select>
                        <button
                            type="button"
                            className="bg-green-400 hover:bg-green-500 px-5 py-3 rounded-lg font-bold transition-colors duration-300 ease-in-out"
                        >
                            Request Invite
                        </button>
                    </form>
                </div>
            </section>

            <section id="faq" className=" mx-auto px-[11vw] py-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
                {[
                    {
                        q: "Is Digibility a tool or an agency?",
                        a: "It’s a software tool. We automate planning, creation, scheduling, and learning. You stay in control and approve what goes live."
                    },
                    {
                        q: "Do I own my content?",
                        a: "Yes. You own everything you write, design, and publish through Digibility. Export and deletion options are built-in."
                    },
                    {
                        q: "Will this replace my freelancer or team?",
                        a: "It can reduce repetitive work and coordination. Many teams will use Digibility alongside a freelancer for creative polish."
                    },
                    {
                        q: "What platforms will you support first?",
                        a: "We’re prioritizing Instagram, Facebook, and LinkedIn to start, with more to follow as pilots mature."
                    },
                    {
                        q: "How do private pilots work?",
                        a: "We onboard a limited group, set shared goals, and iterate weekly. If you’re a fit, request an invite above."
                    }
                ].map((item, i) => (
                    <details
                        key={i}
                        className="bg-white border border-gray-200 rounded-lg p-4 mb-3"
                    >
                        <summary className="font-semibold cursor-pointer">
                            {item.q}
                        </summary>
                        <p className="mt-2 text-gray-600">{item.a}</p>
                    </details>
                ))}
            </section>
            <footer className=" container mx-auto px-[3vw] py-10  border-t border-gray-200 text-gray-600 text-[18px]">
                © 2025 Digibility Solutions Pvt. Ltd. ·{" "}
                <a href="#" className=" text-[#007bff]">Privacy</a> ·{" "}
                <a href="#" className=" text-[#007bff]">Terms</a>
            </footer>
        </div>
    );
};

export default AboutUs;
