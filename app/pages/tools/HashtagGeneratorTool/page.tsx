"use client";

import { useState, useEffect } from "react";

import { CommonGatingForm } from "@/components/CommonGatingForm";

import { Hash, Copy, Check } from "lucide-react";

export default function HashtagGeneratorTool() {
  const [unlocked, setUnlocked] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [platform, setPlatform] = useState("instagram");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // SSR Safe LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digibility_tools_lead");
      if (stored) setUnlocked(true);
    }
  }, []);

  const platforms = ["instagram", "twitter", "linkedin", "tiktok"] as const;

  const hashtagDatabase: Record<string, string[]> = {
    marketing: [
      "marketing",
      "digitalmarketing",
      "contentmarketing",
      "socialmedia",
      "branding",
      "marketingstrategy",
    ],
    business: [
      "business",
      "entrepreneur",
      "startup",
      "smallbusiness",
      "businessgrowth",
      "success",
    ],
    tech: ["tech", "technology", "innovation", "ai", "automation", "saas", "software"],
    social: ["socialmedia", "instagram", "tiktok", "linkedin", "engagement", "viral"],
    content: ["content", "contentcreation", "creative", "design", "video", "photography"],
    growth: ["growth", "growthhacking", "scaling", "roi", "results", "performance"],
  };

  const generateHashtags = () => {
    if (!keywords.trim()) return;

    const keywordList = keywords
      .toLowerCase()
      .split(/[\s,]+/)
      .filter((k) => k);

    const generated = new Set<string>();

    // Add user keywords
    keywordList.forEach((keyword) => {
      generated.add(`#${keyword.replace(/[^a-z0-9]/g, "")}`);

      Object.keys(hashtagDatabase).forEach((category) => {
        if (keyword.includes(category) || category.includes(keyword)) {
          hashtagDatabase[category].forEach((tag) => generated.add(`#${tag}`));
        }
      });
    });

    // Add popular tags
    const popularTags = [
      "trending",
      "viral",
      "explore",
      "fyp",
      "instagood",
      "photooftheday",
      "business",
      "motivation",
      "success",
      "entrepreneur",
    ];

    popularTags.slice(0, 20 - generated.size).forEach((tag) => generated.add(`#${tag}`));

    setHashtags(Array.from(generated).slice(0, 20));
  };

  const copyAsSpaced = () => {
    navigator.clipboard.writeText(hashtags.join(" "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyAsCSV = () => {
    navigator.clipboard.writeText(hashtags.join(","));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      

      <main className="min-h-screen py-24 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <Hash className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]">
              Hashtag Generator
            </h1>

            <p className="text-base sm:text-lg text-[#64748b]">
              Generate trending hashtags for maximum reach
            </p>
          </div>

          {/* Gated Form */}
          {!unlocked ? (
            <CommonGatingForm
              toolName="Hashtag Generator"
              onUnlock={() => setUnlocked(true)}
            />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Keywords Input */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-2">
                    Enter Keywords *
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="marketing, business, social media"
                  />
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-2">
                    Platform
                  </label>
                  <select
                    className="form-input"
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

                <button
                  className="btn-primary w-full justify-center"
                  onClick={generateHashtags}
                  disabled={!keywords.trim()}
                >
                  Generate Hashtags
                </button>

                {/* Results */}
                {hashtags.length > 0 && (
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-[#4E5674]">
                        {hashtags.length} Hashtags Generated
                      </h3>

                      <div className="flex gap-2">
                        <button
                          onClick={copyAsSpaced}
                          className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          Copy Spaced
                        </button>

                        <button
                          onClick={copyAsCSV}
                          className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
                        >
                          Copy CSV
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {hashtags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-[#F8FAFF] text-[#6D5CEB] rounded-lg font-medium cursor-pointer hover:bg-[#6D5CEB] hover:text-white transition-all"
                          onClick={() => {
                            navigator.clipboard.writeText(tag);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1000);
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-[#64748b] mt-4">
                      Click any hashtag to copy individually
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      
    </div>
  );
}
