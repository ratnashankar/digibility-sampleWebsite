// app/blog/_data.ts
export type CategoryKey =
  | "foundation-guides"
  | "deep-dive-series"
  | "step-by-step-solutions"
  | "top-picks-and-tips"
  | "success-stories"
  | "insights-and-perspectives"
  | "ask-and-answer"
  | "tools-and-reviews"
  | "visual-insights";

export const categories: Record<CategoryKey, { label: string; slug: CategoryKey }> = {
  "foundation-guides": { label: "Foundation Guides", slug: "foundation-guides" },
  "deep-dive-series": { label: "Deep Dive Series", slug: "deep-dive-series" },
  "step-by-step-solutions": { label: "Step-by-step solutions", slug: "step-by-step-solutions" },
  "top-picks-and-tips": { label: "Top Picks & Tips", slug: "top-picks-and-tips" },
  "success-stories": { label: "Success Stories", slug: "success-stories" },
  "insights-and-perspectives": { label: "Insights & Perspectives", slug: "insights-and-perspectives" },
  "ask-and-answer": { label: "Ask & Answer", slug: "ask-and-answer" },
  "tools-and-reviews": { label: "Tools & Reviews", slug: "tools-and-reviews" },
  "visual-insights": { label: "Visual Insights", slug: "visual-insights" },
};

export const categoryOrder: CategoryKey[] = Object.keys(categories) as CategoryKey[];

type Post = {
  title: string;
  slug: string;
  category: CategoryKey;
  excerpt: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  views?: number;
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Helper to manufacture posts from titles with dummy metadata
function mkPosts(category: CategoryKey, titles: string[], startOffsetDays = 0): Post[] {
  return titles.map((t, i) => ({
    title: t,
    slug: slugify(t),
    category,
    excerpt:
      "A practical, brand-safe, AI-first perspective from Digibility. (Dummy excerpt – replace in CMS.)",
    author: "Digibility Editorial",
    date: new Date(Date.now() - (startOffsetDays + i) * 86400000).toISOString(),
    readingMinutes: 5 + ((i * 2) % 6),
    views: 200 + i * 37,
  }));
}

export const posts: Post[] = [
  // Foundation Guides
  ...mkPosts("foundation-guides", [
    "The Ultimate Guide to Digital Marketing Strategies in 2025",
    "Everything You Need to Know About SEO for Modern Businesses",
    "Content Marketing Best Practices for Growing Your Online Presence",
    "The Complete Resource Page for Social Media Advertising Trends",
  ], 0),

  // Deep Dive Series
  ...mkPosts("deep-dive-series", [
    "Digital Marketing 101: What Every Business Owner Should Know",
    "How to Master Local SEO for Increased Website Traffic",
    "18 Proven Ways to Increase Your Email Marketing Open Rates",
    "Using Google Analytics: A Practical Review for Digital Marketers",
  ], 8),

  // Step-by-step solutions
  ...mkPosts("step-by-step-solutions", [
    "How to Build a Content Calendar That Drives Consistent Traffic",
    "How to Optimize Your Website for Voice Search in 2025",
    "How to Use ChatGPT to Generate SEO-Friendly Blog Content",
    "How to Boost Your Conversion Rates Through A/B Testing",
  ], 16),

  // Top Picks & Tips
  ...mkPosts("top-picks-and-tips", [
    "7 Digital Marketing Tools Every Small Business Should Have",
    "10 Common SEO Mistakes to Avoid for Better Rankings",
    "22 Content Ideas to Engage Your Audience on Social Media",
    "Top 5 Trends Shaping the Future of Online Advertising in 2025",
  ], 24),

  // Success Stories
  ...mkPosts("success-stories", [
    "How Company X Increased Organic Traffic by 120% with SEO",
    "From Zero to Hero: How a Start-up Built Its Brand Through Social Media",
    "The Secret Behind Doubling Leads Using Email Automation",
    "Real Results: What Happened When We Tried Influencer Marketing for 6 Months",
  ], 32),

  // Insights & Perspectives
  ...mkPosts("insights-and-perspectives", [
    "Why Most Businesses Ignore SEO at Their Own Risk",
    "The Biggest Myths About Social Media Marketing (Debunked)",
    "Will AI Replace Content Creators? An Honest Look",
    "Expert Predictions: The Future of Digital Marketing in the Next 5 Years",
  ], 40),

  // Ask & Answer
  ...mkPosts("ask-and-answer", [
    "Your Top Digital Marketing Questions Answered",
    "FAQ: Everything About Pay-Per-Click Advertising",
    "The Beginner’s Q&A for Building an Email List from Scratch",
    "What Does Bounce Rate Really Mean for Your Website?",
  ], 48),

  // Tools & Reviews
  ...mkPosts("tools-and-reviews", [
    "Google Ads vs. Facebook Ads: Which Is Best for Your Business?",
    "Honest Review: Is SEMrush Worth the Investment in 2025?",
    "5 Must-Have CRM Tools for Digital Marketers",
    "The Best SEO Plugins for WordPress in 2025",
  ], 56),

  // Visual Insights
  ...mkPosts("visual-insights", [
    "10 Infographics That Explain SEO Basics Quickly",
    "Digital Marketing Explained: Visual Guide for Beginners",
    "The Best Charts and Graphs Highlighting Social Media Growth Trends",
    "Video Walkthrough: How to Set Up Google Analytics for Your Website",
  ], 64),
];