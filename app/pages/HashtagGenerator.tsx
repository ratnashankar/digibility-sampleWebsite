"use client";

import React, { useState } from "react";
import { CommonGatingForm } from "@/components/CommonGatingForm";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Hash } from "lucide-react";

interface FormData {
  name: string;
  email: string;
}

export default function HashtagGenerator() {
  const [unlocked, setUnlocked] = useState(false);
  const [topic, setTopic] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);

  const handleFormSubmit = async (formData: FormData) => {
    console.log("Form submitted:", formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setUnlocked(true);
  };

  const generateHashtags = () => {
    const mockHashtags = [
      "#socialmedia", "#marketing", "#digitalmarketing", "#contentmarketing",
      "#socialmediamarketing", "#branding", "#business", "#entrepreneur",
      "#marketingstrategy", "#socialmediatips", "#contentcreation", "#growth",
      "#engagement", "#trending", "#viral", "#instagramtips", "#marketingdigital",
      "#smallbusiness", "#startup", "#businessgrowth",
    ];

    setHashtags(mockHashtags.slice(0, 15));
  };

  return (
    <div className="App">
      <Header />

      <main className="min-h-screen py-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <Hash className="w-8 h-8 text-white" />
            </div>

            <h1
              className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
              data-testid="tool-heading"
            >
              Hashtag Generator
            </h1>

            <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
              Generate trending hashtags for any topic or industry
            </p>
          </div>

          {/* Access Locking Form */}
          {!unlocked ? (
            <CommonGatingForm
              onUnlock={() => setUnlocked(true)}
              toolName="Hashtag Generator"
            />
          ) : (
            <div
              className="bg-white rounded-2xl p-8 shadow-lg"
              data-testid="tool-interface"
            >
              {/* Topic Input */}
              <div className="mb-6">
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-[#4E5674] mb-2"
                >
                  Enter your topic or keyword
                </label>

                <div className="flex gap-3">
                  <input
                    id="topic"
                    type="text"
                    className="form-input flex-1"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., fitness, coffee, startup"
                    data-testid="topic-input"
                  />

                  <button
                    className="btn-primary"
                    onClick={generateHashtags}
                    disabled={!topic.trim()}
                    data-testid="generate-button"
                  >
                    Generate
                  </button>
                </div>
              </div>

              {/* Results */}
              {hashtags.length > 0 && (
                <div data-testid="results">
                  <h3 className="text-lg font-semibold text-[#4E5674] mb-4">
                    Generated Hashtags:
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {hashtags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-[#F8FAFF] text-[#6D5CEB] rounded-lg font-medium cursor-pointer hover:bg-[#6D5CEB] hover:text-white transition-all"
                        onClick={() => navigator.clipboard.writeText(tag)}
                        data-testid={`hashtag-${index}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-[#64748b] mt-4">
                    Click any hashtag to copy
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
