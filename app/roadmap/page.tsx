'use client';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
export default function RoadmapPage() {
    const [showModal, setShowModal] = useState(false);

    const roadmap = {
        planned: [
            { title: "AI-Powered SEO Insights", desc: "Plan to launch SEO optimization module." },
            { title: "Multi-language Support", desc: "Support for global languages." }
        ],
        inProgress: [
            { title: "Content Calendar Automation", desc: "Smarter scheduling of posts." },
            { title: "Advanced Analytics", desc: "In-depth reports for businesses." }
        ],
        completed: [
            { title: "Social Media Scheduler", desc: "Posts to FB, Instagram, LinkedIn." },
            { title: "AI Analysis", desc: "AI-powered competitor & content insights." }
        ]
    };
    return (
       <>
       <Header/>
        <div className='pt-[8vh]' >
            <header className="bg-blue-600 text-white py-4 shadow">
                <h1 className="text-2xl font-bold text-center">Digibility Roadmap</h1>
            </header>
            <main className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-10">Our Product Roadmap</h2>

                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Planned</h3>
                        {roadmap.planned.map((item, i) => (
                            <div key={i} className="bg-white border rounded-xl shadow-sm p-5 mb-4">
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Vote
                                </button>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">In Progress</h3>
                        {roadmap.inProgress.map((item, i) => (
                            <div key={i} className="bg-white border rounded-xl shadow-sm p-5 mb-4">
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Vote
                                </button>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Completed</h3>
                        {roadmap.completed.map((item, i) => (
                            <div key={i} className="bg-white border rounded-xl shadow-sm p-5 mb-4">
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Vote
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div
                            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-lg font-semibold mb-4">Login Required</h3>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full mb-3 px-3 py-2 border rounded"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-3 px-3 py-2 border rounded"
                            />
                            <button
                                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Login
                            </button>
                            <button
                                className="w-full mt-3 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
            <Footer/>
       </>
    );
}
