"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CommonGatingForm } from "@/components/CommonGatingForm";
import { Globe, Lightbulb } from "lucide-react";

// Type structure for ideas
interface Idea {
  title: string;
  angle: string;
}

export default function PostIdeasFromURLTool() {
  const [unlocked, setUnlocked] = useState(false);
  const [url, setUrl] = useState("");
  const [ideas, setIdeas] = useState<Idea[]>([]);

  // SSR-safe localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digibility_tools_lead");
      if (stored) setUnlocked(true);
    }
  }, []);

  // Extract domain keyword
  const extractDomain = (urlString: string): string => {
    try {
      const domain = new URL(urlString).hostname.replace("www.", "");
      return domain.split(".")[0];
    } catch {
      return urlString.toLowerCase().replace(/[^a-z]/g, "");
    }
  };

  const generateIdeas = () => {
    if (!url.trim()) return;

    const keyword = extractDomain(url);

    const templateIdeas: Idea[] = [
      {
        title: `Behind the Scenes: How We Built ${keyword}`,
        angle:
          "Show your product development journey, challenges faced, and lessons learned. People love authenticity.",
      },
      {
        title: `5 Ways ${keyword} Solves [Common Problem]`,
        angle:
          "Focus on specific pain points your product addresses. Use customer testimonials and real examples.",
      },
      {
        title: `Customer Spotlight: How [Name] Uses ${keyword}`,
        angle:
          "Feature a customer success story. Include metrics, before/after, and their favorite features.",
      },
      {
        title: `${keyword} vs. Traditional Solutions: The Honest Comparison`,
        angle:
          "Educational content comparing your approach to conventional methods. Be balanced and factual.",
      },
      {
        title: `Quick Tips: Getting Started with ${keyword} in 5 Minutes`,
        angle:
          "Create a beginner-friendly tutorial or tips carousel. Make it actionable and easy to follow.",
      },
    ];

    setIdeas(templateIdeas);
  };

  return (
    <div>
      <Header />

      <main className="min-h-screen py-24 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#4E5674] mb-4">
              Post Ideas from URL
            </h1>

            <p className="text-base sm:text-lg text-[#64748b]">
              Generate content ideas based on your website
            </p>
          </div>

          {/* Gating */}
          {!unlocked ? (
            <CommonGatingForm
              toolName="Post Ideas from URL"
              onUnlock={() => setUnlocked(true)}
            />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">

                {/* Input */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    className="form-input"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <button
                  className="btn-primary w-full justify-center"
                  onClick={generateIdeas}
                  disabled={!url.trim()}
                >
                  Generate Ideas
                </button>

                {/* Results */}
                {ideas.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-semibold text-[#4E5674] flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[#6D5CEB]" />
                      5 Content Ideas for Your Brand:
                    </h3>

                    {ideas.map((idea, index) => (
                      <div
                        key={index}
                        className="p-6 bg-[#F8FAFF] rounded-xl border-2 border-[#6D5CEB]/20"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                            {index + 1}
                          </div>

                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-[#4E5674] mb-2">
                              {idea.title}
                            </h4>

                            <p className="text-sm text-[#64748b] leading-relaxed">
                              <strong>Angle:</strong> {idea.angle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-800">
                        💡 <strong>Pro Tip:</strong> Customize these ideas to match your unique brand voice and audience.  
                        Add real examples, screenshots, and your product benefits.
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
