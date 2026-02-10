"use client";

import React from "react";
import Link from "next/link";
import { 
  Hash, 
  TrendingUp, 
  FileText, 
  Image, 
  Video, 
  MessageSquare, 
  Sparkles 
} from "lucide-react";

interface ToolItem {
  id: number;
  name: string;
  description: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const FreeToolsTeaser: React.FC = () => {
  const tools: ToolItem[] = [
    {
      id: 1,
      name: "Caption Writer",
      icon: FileText,
      description: "AI-powered captions for Instagram, Facebook, and LinkedIn",
      path: "/tools/caption-writer",
    },
    {
      id: 2,
      name: "Hashtag Generator",
      icon: Hash,
      description: "Generate trending hashtags for any topic or industry",
      path: "/tools/hashtag-generator",
    },
    {
      id: 3,
      name: "Best-Time Demo",
      icon: TrendingUp,
      description: "Find optimal posting times for your audience",
      path: "/tools/best-time-demo",
    },
    {
      id: 4,
      name: "UTM Builder",
      icon: Sparkles,
      description: "Create trackable campaign URLs with UTM parameters",
      path: "/tools/utm-builder",
    },
    {
      id: 5,
      name: "Hook Generator",
      icon: MessageSquare,
      description: "Generate attention-grabbing hooks for your posts",
      path: "/tools/hook-generator",
    },
    {
      id: 6,
      name: "Post Ideas",
      icon: Image,
      description: "Get endless content ideas for your brand",
      path: "/tools/post-ideas",
    },
    {
      id: 7,
      name: "Calendar Template",
      icon: Video,
      description: "Downloadable content calendar template",
      path: "/tools/content-calendar",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFF]" data-testid="free-tools-teaser">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-[#4E5674]"
            data-testid="tools-heading"
          >
            Free Marketing Tools
          </h2>
          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
            Try our suite of free tools—no signup required
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const IconComponent = tool.icon;

            return (
              <Link
                key={tool.id}
                href={tool.path}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all card-stagger group"
                data-testid={`tool-card-${tool.id}`}
              >
                
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-[#4E5674]">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748b]">
                  {tool.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
