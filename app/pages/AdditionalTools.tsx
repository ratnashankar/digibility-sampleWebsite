"use client";

import { ToolTemplate } from "@/components/ToolTemplate";
import {
  TrendingUp,
  FileText,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { ChangeEvent } from "react";

/** ------------------------------
 *  BEST TIME DEMO INTERFACE
 * ------------------------------ */
function BestTimeDemoInterface() {
  return (
    <div data-testid="best-time-demo-interface">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#4E5674] mb-2">
            Platform
          </label>
          <select className="form-input" data-testid="platform-select">
            <option>Instagram</option>
            <option>Facebook</option>
            <option>Twitter/X</option>
            <option>LinkedIn</option>
            <option>TikTok</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#4E5674] mb-2">
            Your Time Zone
          </label>
          <select className="form-input" data-testid="timezone-select">
            <option>PST (Pacific)</option>
            <option>MST (Mountain)</option>
            <option>CST (Central)</option>
            <option>EST (Eastern)</option>
          </select>
        </div>

        <button className="btn-primary w-full" data-testid="analyze-button">
          Find Best Times
        </button>

        <div className="p-6 bg-[#F8FAFF] rounded-lg mt-6">
          <p className="text-center text-[#4E5674]">
            Best posting times will appear here...
          </p>
        </div>
      </div>
    </div>
  );
}

/** ------------------------------
 *  UTM BUILDER INTERFACE
 * ------------------------------ */
function UTMBuilderInterface() {
  return (
    <div data-testid="utm-builder-interface">
      <div className="space-y-4">
        {[
          { label: "Website URL", type: "url", id: "url-input", ph: "https://example.com" },
          { label: "Campaign Source", type: "text", id: "source-input", ph: "facebook" },
          { label: "Campaign Medium", type: "text", id: "medium-input", ph: "social" },
          { label: "Campaign Name", type: "text", id: "campaign-input", ph: "spring_sale" },
        ].map((field, idx) => (
          <div key={idx}>
            <label className="block text-sm font-medium text-[#4E5674] mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              className="form-input"
              placeholder={field.ph}
              data-testid={field.id}
            />
          </div>
        ))}

        <button className="btn-primary w-full" data-testid="generate-utm-button">
          Generate UTM Link
        </button>

        <div className="p-6 bg-[#F8FAFF] rounded-lg mt-6">
          <p className="text-sm text-[#64748b] mb-2">Your tracked URL:</p>
          <p className="text-[#6D5CEB] font-mono text-sm break-all">
            https://example.com?utm_source=...
          </p>
        </div>
      </div>
    </div>
  );
}

/** ------------------------------
 *  HOOK GENERATOR INTERFACE
 * ------------------------------ */
function HookGeneratorInterface() {
  return (
    <div data-testid="hook-generator-interface">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#4E5674] mb-2">
            Post Topic
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., marketing strategy"
            data-testid="topic-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#4E5674] mb-2">
            Hook Style
          </label>
          <select className="form-input" data-testid="style-select">
            <option>Question</option>
            <option>Bold Statement</option>
            <option>Curiosity</option>
            <option>Pain Point</option>
            <option>Benefit-Driven</option>
          </select>
        </div>

        <button className="btn-primary w-full" data-testid="generate-hooks-button">
          Generate Hooks
        </button>

        <div className="p-6 bg-[#F8FAFF] rounded-lg mt-6 space-y-3">
          <p className="text-sm font-semibold text-[#4E5674]">Generated hooks:</p>
          <p className="text-[#64748b] p-3 bg-white rounded border-l-4 border-[#6D5CEB]">
            Hook example will appear here...
          </p>
        </div>
      </div>
    </div>
  );
}

/** ------------------------------
 *  POST IDEAS INTERFACE
 * ------------------------------ */
function PostIdeasInterface() {
  return (
    <div data-testid="post-ideas-interface">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#4E5674] mb-2">
            Industry/Niche
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., fitness, SaaS"
            data-testid="industry-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#4E5674] mb-2">
            Content Type
          </label>
          <select className="form-input" data-testid="content-type-select">
            <option>Tips & How-To</option>
            <option>Behind the Scenes</option>
            <option>Customer Stories</option>
            <option>Industry News</option>
            <option>Trending Topics</option>
          </select>
        </div>

        <button className="btn-primary w-full" data-testid="generate-ideas-button">
          Generate Ideas
        </button>

        <div className="p-6 bg-[#F8FAFF] rounded-lg mt-6">
          <ul className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#6D5CEB] font-bold">{i}.</span>
                <span className="text-[#64748b]">Post idea will appear here...</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** ------------------------------
 *  EXPORT TOOLS
 * ------------------------------ */

export const BestTimeDemo = () => (
  <ToolTemplate
    icon={TrendingUp}
    title="Best-Time Demo"
    description="Find optimal posting times for your audience"
    toolInterface={<BestTimeDemoInterface />}
  />
);

export const UTMBuilder = () => (
  <ToolTemplate
    icon={Sparkles}
    title="UTM Builder"
    description="Create trackable campaign URLs with UTM parameters"
    toolInterface={<UTMBuilderInterface />}
  />
);

export const HookGenerator = () => (
  <ToolTemplate
    icon={MessageSquare}
    title="Hook Generator"
    description="Generate attention-grabbing hooks for your posts"
    toolInterface={<HookGeneratorInterface />}
  />
);

export const PostIdeas = () => (
  <ToolTemplate
    icon={FileText}
    title="Post Ideas"
    description="Get endless content ideas for your brand"
    toolInterface={<PostIdeasInterface />}
  />
);
