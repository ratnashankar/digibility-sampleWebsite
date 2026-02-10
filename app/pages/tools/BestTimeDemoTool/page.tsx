"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";





import { CommonGatingForm } from "@/components/CommonGatingForm";
import { Clock } from "lucide-react";

export default function BestTimeDemoTool() {
  const [unlocked, setUnlocked] = useState(false);
  const [platform, setPlatform] = useState("instagram");
  const [timezone, setTimezone] = useState("IST");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digibility_tools_lead");
      if (stored) setUnlocked(true);
    }
  }, []);

  const platforms = ["instagram", "facebook", "linkedin", "twitter", "tiktok"];
  const timezones = ["IST", "PST", "EST", "GMT", "AEST"];

  const bestTimes = {
    instagram: [
      { day: "Monday-Friday", time: "11:00 AM - 1:00 PM", score: 95 },
      { day: "Wednesday", time: "7:00 PM - 9:00 PM", score: 92 },
      { day: "Sunday", time: "10:00 AM - 12:00 PM", score: 88 },
    ],
    facebook: [
      { day: "Wednesday", time: "11:00 AM - 1:00 PM", score: 93 },
      { day: "Thursday-Friday", time: "1:00 PM - 3:00 PM", score: 90 },
      { day: "Saturday", time: "9:00 AM - 11:00 AM", score: 85 },
    ],
    linkedin: [
      { day: "Tuesday-Wednesday", time: "9:00 AM - 11:00 AM", score: 96 },
      { day: "Thursday", time: "12:00 PM - 2:00 PM", score: 91 },
      { day: "Friday", time: "8:00 AM - 10:00 AM", score: 87 },
    ],
    twitter: [
      { day: "Monday-Friday", time: "12:00 PM - 3:00 PM", score: 94 },
      { day: "Wednesday", time: "5:00 PM - 6:00 PM", score: 89 },
      { day: "Thursday", time: "9:00 AM - 10:00 AM", score: 86 },
    ],
    tiktok: [
      { day: "Tuesday-Thursday", time: "6:00 PM - 10:00 PM", score: 97 },
      { day: "Friday", time: "5:00 PM - 7:00 PM", score: 93 },
      { day: "Sunday", time: "7:00 PM - 9:00 PM", score: 90 },
    ],
  };

  return (
    <div>
      <Header />

      <main className="min-h-screen py-24 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">
          {/* TOP SECTION */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold text-[#4E5674]">Best Time Demo</h1>
            <p className="mt-3 text-lg text-[#64748b]">
              Find optimal posting times for maximum engagement
            </p>
          </div>

          {/* GATED FORM */}
          {!unlocked ? (
            <CommonGatingForm
              onUnlock={() => setUnlocked(true)}
              toolName="Best Time Demo"
            />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* SELECT INPUTS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4E5674] mb-2">
                      Platform
                    </label>
                    <select
                      className="w-full px-3 py-2 border rounded-lg"
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                    >
                      {platforms.map((p) => (
                        <option key={p} value={p}>
                          {p.charAt(0).toUpperCase() + p.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4E5674] mb-2">
                      Timezone
                    </label>
                    <select
                      className="w-full px-3 py-2 border rounded-lg"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                    >
                      {timezones.map((tz) => (
                        <option key={tz} value={tz}>
                          {tz}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* SHOW BUTTON */}
                <button
                  className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                  onClick={() => setShowResults(true)}
                >
                  Show Best Times
                </button>

                {/* RESULTS */}
                {showResults && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-[#4E5674] mb-6">
                      Top 3 Posting Windows for{" "}
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </h3>

                    <div className="space-y-4">
                      {bestTimes[platform].map((slot, index) => (
                        <div
                          key={index}
                          className="p-6 bg-[#F8FAFF] rounded-xl border-2 border-[#6D5CEB]/20"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <div className="text-lg font-bold text-[#4E5674]">
                                #{index + 1} Best Time
                              </div>
                              <div className="text-sm text-[#64748b] mt-1">
                                {slot.day}
                              </div>
                            </div>

                            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                              {slot.score}% Match
                            </div>
                          </div>

                          <div className="text-2xl font-bold text-indigo-600">
                            {slot.time}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Disclaimer:</strong> These times are sample
                        data based on cohort analysis. Actual optimal
                        performance varies. Use Digibility's full AI platform
                        for personalized timings.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
