"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CommonGatingForm } from "@/components/CommonGatingForm";
import { FileText, Copy, Check } from "lucide-react";

export default function CaptionGeneratorTool() {
  const [unlocked, setUnlocked] = useState(false);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("professional");
  const [platform, setPlatform] = useState("instagram");
  const [captions, setCaptions] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Load gate unlock status
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digibility_tools_lead");
      if (stored) setUnlocked(true);
    }
  }, []);

  const tones = ["professional", "casual", "playful", "inspiring", "educational"] as const;
  const platforms = ["instagram", "facebook", "linkedin", "twitter"] as const;

  // Caption Templates
  const captionTemplates: Record<string, ((topic: string) => string)[]> = {
    professional: [
      (topic) =>
        `Excited to share insights on ${topic}. Here's what we've learned and how it can help your business grow. #BusinessGrowth #${topic.replace(/\s/g, "")}`,
      (topic) =>
        `${topic} is transforming the way we work. Key takeaways: efficiency, innovation, and measurable results. What's your experience? #Innovation`,
      (topic) =>
        `Breaking down ${topic} for you: practical strategies that drive real results. Let's discuss in the comments. #Strategy #Growth`,
    ],
    casual: [
      (topic) =>
        `Just tried ${topic} and wow! 🤩 Here's my honest take on what worked (and what didn't). Drop your questions below! 👇`,
      (topic) =>
        `Real talk about ${topic}... It's not perfect, but here's why I think it's worth your time. What do you think?`,
      (topic) => `${topic} has been a game-changer! Here's the behind-the-scenes on how we're using it. ✨`,
    ],
    playful: [
      (topic) =>
        `Plot twist: ${topic} is actually fun! 🎉 Who knew? Here's how we turned work into play. #MondayMotivation`,
      (topic) =>
        `${topic}? More like... amazing! 🚀 3 reasons why this is cooler than you think (trust me on this one)`,
      (topic) =>
        `Okay but can we talk about ${topic}? Because this is lowkey genius and I need to share it with everyone! 💡`,
    ],
    inspiring: [
      (topic) =>
        `${topic} taught me that success isn't about perfection—it's about progress. Here's what I learned on the journey. 🌟`,
      (topic) =>
        `Every challenge with ${topic} was a lesson in disguise. Grateful for the growth and excited for what's next. Keep pushing forward! 💪`,
      (topic) =>
        `${topic} reminds us that innovation starts with courage. What bold move will you make today? #Inspiration #BeTheChange`,
    ],
    educational: [
      (topic) =>
        `${topic} explained: A step-by-step guide for beginners. Save this post for later! 📚\n\n1. Start here\n2. Then this\n3. Pro tip below ⬇️`,
      (topic) =>
        `The complete ${topic} framework you need to know. Thread 🧵:\n\n• Foundation principles\n• Common mistakes\n• Best practices\n\nDetails in comments ⬇️`,
      (topic) =>
        `Quick lesson on ${topic}: Why it matters, how it works, and what you can do today. Swipe for the breakdown! ➡️ #LearnWithMe`,
    ],
  };

  const generateCaptions = () => {
    if (!topic.trim()) return;

    const templates = captionTemplates[tone] || captionTemplates.professional;
    const generated = templates.map((t) => t(topic));
    setCaptions(generated);
  };

  const copyCaption = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div>
      <Header />

      <main className="min-h-screen py-24 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]">
              Caption Generator
            </h1>
            <p className="text-base sm:text-lg text-[#64748b]">
              Generate engaging social media captions instantly
            </p>
          </div>

          {/* Gated Form */}
          {!unlocked ? (
            <CommonGatingForm
              onUnlock={() => setUnlocked(true)}
              toolName="Caption Generator"
            />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Topic */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-2">
                    What's the post about? *
                  </label>
                  <textarea
                    className="form-input min-h-24"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="E.g., Product launch, team milestone, industry trends..."
                  />
                </div>

                {/* Tone + Platform */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4E5674] mb-2">
                      Tone
                    </label>
                    <select
                      className="form-input"
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                    >
                      {tones.map((t) => (
                        <option key={t} value={t}>
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

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
                </div>

                {/* Generate Button */}
                <button
                  className="btn-primary w-full justify-center"
                  onClick={generateCaptions}
                  disabled={!topic.trim()}
                >
                  Generate Captions
                </button>

                {/* Results */}
                {captions.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-lg font-semibold text-[#4E5674]">
                      Generated Captions:
                    </h3>

                    {captions.map((caption, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-[#F8FAFF] rounded-lg border-2 border-[#6D5CEB]/20 relative"
                      >
                        <p className="text-sm text-[#4E5674] mb-3 whitespace-pre-wrap">
                          {caption}
                        </p>

                        <button
                          onClick={() => copyCaption(caption, idx)}
                          className="absolute top-4 right-4 p-2 bg-white rounded-lg hover:bg-gray-50 transition-all"
                        >
                          {copiedIndex === idx ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-[#6D5CEB]" />
                          )}
                        </button>
                      </div>
                    ))}
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
