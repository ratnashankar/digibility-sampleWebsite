"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CommonGatingForm } from "@/components/CommonGatingForm";
import { Calendar, Download } from "lucide-react";

export default function CalendarTemplateTool() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digibility_tools_lead");
      if (stored) setUnlocked(true);
    }
  }, []);

  // CSV Generator
  const generateCalendarCSV = () => {
    const csvContent = `Date,Platform,Post Type,Topic,Status,Notes
2026-02-01,Instagram,Carousel,Product Feature Highlight,Planned,Focus on benefit #1
2026-02-03,LinkedIn,Article,Industry Insights,Planned,Share research or trends
2026-02-05,Facebook,Video,Behind the Scenes,Planned,Team introduction
2026-02-07,Twitter,Thread,Tips & Tricks,Planned,Educational content
2026-02-10,Instagram,Reel,Customer Testimonial,Planned,Feature review/story
2026-02-12,LinkedIn,Post,Case Study,Planned,Success story with metrics
2026-02-14,Instagram,Static,Holiday/Event Post,Planned,Valentine's Day
2026-02-17,Facebook,Live,Q&A Session,Planned,Engage with audience
2026-02-19,Twitter,Poll,Audience Research,Planned,Ask preference question
2026-02-21,Instagram,Story Series,Product Tutorial,Planned,How-to guide
2026-02-24,LinkedIn,Article,Thought Leadership,Planned,Industry opinion piece
2026-02-26,Facebook,Photo,Team Milestone,Planned,Celebrate achievement
2026-02-28,Instagram,Carousel,Month Recap,Planned,Highlight wins & learnings
2026-03-03,LinkedIn,Post,Networking Tips,Planned,Professional advice
2026-03-05,Twitter,Announcement,New Feature/Update,Planned,Product news
2026-03-07,Instagram,Reel,Quick Tip,Planned,Value-packed short video
2026-03-10,Facebook,Event,Webinar Promotion,Planned,Link to registration
2026-03-12,LinkedIn,Article,Market Analysis,Planned,Data-driven insights
2026-03-14,Instagram,Static,User-Generated Content,Planned,Feature customer post
2026-03-17,Twitter,Thread,Success Framework,Planned,Step-by-step guide
2026-03-19,Facebook,Album,Project Showcase,Planned,Before/after gallery
2026-03-21,Instagram,Carousel,FAQ Series,Planned,Answer common questions
2026-03-24,LinkedIn,Post,Hiring Announcement,Planned,Open positions
2026-03-26,Twitter,Infographic,Statistics Share,Planned,Visual data
2026-03-28,Instagram,Reel,Trend Participation,Planned,Join viral challenge
2026-03-31,Facebook,Post,Month-End Thank You,Planned,Community appreciation`;

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "digibility-30day-calendar-template.csv";
    document.body.appendChild(a);

    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Header />

      <main className="min-h-screen py-24 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">
          {/* HERO */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#4E5674]">
              30-Day Calendar Template
            </h1>
            <p className="text-base sm:text-lg text-[#64748b] mt-2">
              Download a ready-to-use content calendar for your social media
            </p>
          </div>

          {/* GATED FORM */}
          {!unlocked ? (
            <CommonGatingForm
              onUnlock={() => setUnlocked(true)}
              toolName="Calendar Template"
            />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* FEATURES */}
                <div className="bg-[#F8FAFF] rounded-xl p-6 border-2 border-[#6D5CEB]/20">
                  <h3 className="text-xl font-bold mb-4 text-[#4E5674]">
                    What’s Included:
                  </h3>

                  <ul className="space-y-3 text-sm text-[#64748b]">
                    {[
                      "30 days of pre-planned content ideas across all platforms",
                      "Mix of content types: Carousels, videos, articles, reels, stories",
                      "Topic suggestions for every post",
                      "CSV format compatible with Excel, Sheets, etc.",
                      "Fully customizable based on your brand",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DOWNLOAD BUTTON */}
                <button
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-4 text-lg transition"
                  onClick={generateCalendarCSV}
                >
                  <Download className="w-5 h-5" />
                  Download 30-Day Calendar (CSV)
                </button>

                {/* TIP BOX */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Pro Tip:</strong> Customize dates, topics and
                    formats based on your brand voice and business goals.
                    Consistency wins on social media!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
