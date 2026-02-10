"use client";

import React, { useState } from "react";
import { ToolTemplate } from "@/components/ToolTemplate";
import {
  TrendingUp,
  FileText,
  Image,
  Video,
  MessageSquare,
  Sparkles,
} from "lucide-react";

/* ======================================================
    1. CONTENT CALENDAR
====================================================== */
const ContentCalendarInterface = () => (
  <div data-testid="content-calendar-interface">
    <p className="text-[#64748b] mb-4">
      Your monthly content calendar will be generated here.
    </p>
    <div className="p-6 bg-[#F8FAFF] rounded-lg">
      <p className="text-center text-[#4E5674] font-semibold">
        Content calendar template coming soon...
      </p>
    </div>
  </div>
);

/* ======================================================
    2. CAPTION WRITER
====================================================== */
const CaptionWriterInterface = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCaption = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/generate-caption", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setOutput(data.caption);
    setLoading(false);
  };

  return (
    <div data-testid="caption-writer-interface">
      <textarea
        className="form-input min-h-32 mb-4"
        placeholder="Describe what you want to post about..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="caption-input"
      />

      <button
        className="btn-primary"
        onClick={generateCaption}
        data-testid="generate-caption-button"
      >
        {loading ? "Generating..." : "Generate Caption"}
      </button>

      <div className="mt-6 p-6 bg-[#F8FAFF] rounded-lg">
        <p className="text-[#4E5674] whitespace-pre-wrap">
          {output || "AI-generated captions will appear here..."}
        </p>
      </div>
    </div>
  );
};

/* ======================================================
    3. IMAGE RESIZER
====================================================== */
const ImageResizerInterface = () => (
  <div data-testid="image-resizer-interface">
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-4">
      <p className="text-[#64748b]">Drag and drop an image or click to upload</p>
      <input type="file" accept="image/*" className="hidden" />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <button className="btn-secondary">Instagram (1080x1080)</button>
      <button className="btn-secondary">Twitter (1200x675)</button>
      <button className="btn-secondary">Facebook (1200x630)</button>
      <button className="btn-secondary">LinkedIn (1200x627)</button>
    </div>
  </div>
);

/* ======================================================
    4. VIDEO TRIMMER
====================================================== */
const VideoTrimmerInterface = () => (
  <div data-testid="video-trimmer-interface">
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-4">
      <p className="text-[#64748b]">Upload a video file to trim</p>
      <input type="file" accept="video/*" className="hidden" />
    </div>
    <p className="text-center text-[#4E5674]">
      Video trimming interface coming soon...
    </p>
  </div>
);

/* ======================================================
    5. ENGAGEMENT RATE CALCULATOR
====================================================== */
const EngagementCalculatorInterface = () => (
  <div data-testid="engagement-calculator-interface">
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#4E5674] mb-2">
          Total Followers
        </label>
        <input type="number" className="form-input" placeholder="10000" />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#4E5674] mb-2">
          Total Engagement (Likes + Comments)
        </label>
        <input type="number" className="form-input" placeholder="500" />
      </div>

      <button className="btn-primary w-full">Calculate Engagement Rate</button>

      <div className="p-6 bg-[#F8FAFF] rounded-lg mt-6">
        <p className="text-center text-[#4E5674]">
          Your engagement rate will appear here...
        </p>
      </div>
    </div>
  </div>
);

/* ======================================================
    6. AI POST GENERATOR
====================================================== */
const AIPostGeneratorInterface = () => (
  <div data-testid="ai-post-generator-interface">
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#4E5674] mb-2">
          Topic or Keywords
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="e.g., product launch, sale announcement"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#4E5674] mb-2">
          Platform
        </label>
        <select className="form-input">
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Twitter/X</option>
          <option>LinkedIn</option>
        </select>
      </div>

      <button className="btn-primary w-full">Generate Post</button>

      <div className="p-6 bg-[#F8FAFF] rounded-lg mt-6">
        <p className="text-[#4E5674]">
          AI-generated post content will appear here...
        </p>
      </div>
    </div>
  </div>
);

/* ======================================================
    EXPORT TOOL COMPONENTS
====================================================== */

export const ContentCalendar = () => (
  <ToolTemplate
    icon={TrendingUp}
    title="Content Calendar"
    description="Plan your content with our free monthly calendar template"
    toolInterface={<ContentCalendarInterface />}
  />
);

export const CaptionWriter = () => (
  <ToolTemplate
    icon={FileText}
    title="Caption Writer"
    description="AI-powered captions for Instagram, Facebook, and LinkedIn"
    toolInterface={<CaptionWriterInterface />}
  />
);

export const ImageResizer = () => (
  <ToolTemplate
    icon={Image}
    title="Image Resizer"
    description="Resize images for all social platforms instantly"
    toolInterface={<ImageResizerInterface />}
  />
);

export const VideoTrimmer = () => (
  <ToolTemplate
    icon={Video}
    title="Video Trimmer"
    description="Trim and optimize videos for social media"
    toolInterface={<VideoTrimmerInterface />}
  />
);

export const EngagementCalculator = () => (
  <ToolTemplate
    icon={MessageSquare}
    title="Engagement Calculator"
    description="Calculate your engagement rate and benchmarks"
    toolInterface={<EngagementCalculatorInterface />}
  />
);

export const AIPostGenerator = () => (
  <ToolTemplate
    icon={Sparkles}
    title="AI Post Generator"
    description="Generate social media posts with AI in seconds"
    toolInterface={<AIPostGeneratorInterface />}
  />
);
