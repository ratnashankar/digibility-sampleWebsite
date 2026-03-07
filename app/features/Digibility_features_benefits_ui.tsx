"use client";

import { 
  Sparkles, 
  Calendar, 
  Palette, 
  Clock, 
  BarChart3, 
  Users, 
  Link2,
  ArrowRight
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI Analysis",
    subtitle: "Know your brand inside-out—instantly",
    description: "Connect your site and social accounts. Our AI scans your brand voice, analyzes competitor strategies, and identifies content gaps. In minutes, you get a foundation most agencies take weeks to build."
  },
  {
    icon: Calendar,
    title: "Content Calendar",
    subtitle: "30 days planned in 5 minutes",
    description: "No more blank-page paralysis. Digibility generates a full month of strategic content ideas tailored to your industry, audience, and goals. Drag, drop, and adjust—your calendar fills itself."
  },
  {
    icon: Palette,
    title: "Content Creation",
    subtitle: "Posts that sound like you, look like your brand",
    description: "Static images, multi-slide carousels, and short-form video scripts—all generated on-brand. Our AI learns your tone, uses your color palette, and matches your style. Every piece is approval-ready, not a rough draft."
  },
  {
    icon: Clock,
    title: "Scheduler & Publishing",
    subtitle: "Post at peak times, never miss a slot",
    description: "Best-time recommendations per platform. Auto-retry on failed posts. Queue management across Instagram, Facebook, LinkedIn, Twitter/X, and Google Business Profile. Set it and trust it."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    subtitle: "See what works, do more of it",
    description: "Post-level UTM tracking ties every click to revenue. Unified dashboard shows engagement, reach, and conversions across all platforms. Automated insights highlight your best performers—so next month is even better."
  },
  {
    icon: Users,
    title: "Collaboration & Workflow",
    subtitle: "Approvals without the email chaos",
    description: "Role-based access for your team. Approve, reject, or request edits in one click. Full version history and comment threads keep everyone aligned. No more 'Where's that draft?' Slack messages."
  },
  {
    icon: Link2,
    title: "Integrations",
    subtitle: "Connect once, publish everywhere",
    description: "Live now: Instagram, Facebook, LinkedIn, Twitter/X, TikTok, Google Business Profile. OAuth-only (no passwords stored). Coming soon: Pinterest, YouTube, and more. One dashboard, all channels."
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Plan. Create. Schedule.{" "}
          <span className="text-[#6366F1]">Prove ROI.</span>
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          One flow for social content—AI speed with human checks.
        </p>
      </section>

      {/* Blue Banner */}
      <section className="bg-[#EEF2FF] py-6 px-6 text-center">
        <p className="text-gray-700 font-medium">
          Marketing eats your week...
        </p>
        <p className="text-[#6366F1] font-semibold text-lg">
          Digibility gives it back.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Features List - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-[#6366F1] flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-[#6366F1] text-sm font-medium mt-0.5">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar - What's Next Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#6366F1] flex items-center justify-center mb-4">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's Next?
              </h3>
              
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Social is live. SEO, Email, and Ads modules launching throughout 2025. 
                See our full roadmap and get early access.
              </p>
              
              <button className="w-full py-2.5 px-4 bg-[#6366F1] hover:bg-[#5558E0] text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                View Roadmap
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}