"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CommonGatingForm } from "@/components/CommonGatingForm";
import { Link2, Copy, Check } from "lucide-react";

export default function UTMBuilderTool() {
  const [unlocked, setUnlocked] = useState(false);

  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [content, setContent] = useState("");
  const [term, setTerm] = useState("");

  const [builtURL, setBuiltURL] = useState("");
  const [copied, setCopied] = useState(false);

  // Safe for SSR
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("digibility_tools_lead");
      if (stored) setUnlocked(true);
    }
  }, []);

  const buildUTM = () => {
    if (!url || !source || !medium || !campaign) return;

    const params = new URLSearchParams();
    params.append("utm_source", source);
    params.append("utm_medium", medium);
    params.append("utm_campaign", campaign);

    if (content) params.append("utm_content", content);
    if (term) params.append("utm_term", term);

    const separator = url.includes("?") ? "&" : "?";
    setBuiltURL(`${url}${separator}${params.toString()}`);
  };

  const copyURL = () => {
    navigator.clipboard.writeText(builtURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <Header />

      <main className="min-h-screen py-24 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto px-6">

          {/* Hero Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mx-auto mb-6">
              <Link2 className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]">
              UTM Builder
            </h1>
            <p className="text-base sm:text-lg text-[#64748b]">
              Create trackable campaign URLs with UTM parameters
            </p>
          </div>

          {/* Gating */}
          {!unlocked ? (
            <CommonGatingForm
              toolName="UTM Builder"
              onUnlock={() => setUnlocked(true)}
            />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">

                {/* Website URL */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    className="form-input"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com/page"
                  />
                </div>

                {/* Source */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-1">
                    Campaign Source *
                  </label>
                  <span className="text-xs text-[#64748b]">(e.g., facebook, newsletter)</span>
                  <input
                    type="text"
                    className="form-input mt-1"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="facebook"
                  />
                </div>

                {/* Medium */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-1">
                    Campaign Medium *
                  </label>
                  <span className="text-xs text-[#64748b]">(e.g., social, email, cpc)</span>
                  <input
                    type="text"
                    className="form-input mt-1"
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                    placeholder="social"
                  />
                </div>

                {/* Campaign Name */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-1">
                    Campaign Name *
                  </label>
                  <span className="text-xs text-[#64748b]">(e.g., spring_sale)</span>
                  <input
                    type="text"
                    className="form-input mt-1"
                    value={campaign}
                    onChange={(e) => setCampaign(e.target.value)}
                    placeholder="spring_sale"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-1">
                    Campaign Content (optional)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="banner_ad"
                  />
                </div>

                {/* Term */}
                <div>
                  <label className="block text-sm font-medium text-[#4E5674] mb-1">
                    Campaign Term (optional)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="keyword"
                  />
                </div>

                {/* Build Button */}
                <button
                  className="btn-primary w-full justify-center"
                  onClick={buildUTM}
                  disabled={!url || !source || !medium || !campaign}
                >
                  Build UTM URL
                </button>

                {/* Output URL */}
                {builtURL && (
                  <div className="mt-8 p-6 bg-[#F8FAFF] rounded-xl border-2 border-[#6D5CEB]/20">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm font-semibold text-[#4E5674]">
                        Your Tracked URL:
                      </h3>

                      <button
                        onClick={copyURL}
                        className="flex items-center gap-2 text-sm font-semibold text-[#6D5CEB] hover:underline"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? "Copied!" : "Copy URL"}
                      </button>
                    </div>

                    <p className="text-sm text-[#4E5674] font-mono break-all bg-white p-4 rounded-lg">
                      {builtURL}
                    </p>
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
