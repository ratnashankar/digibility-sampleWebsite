"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Filter } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [email, setEmail] = useState<string>("");
  const [whatsappConsent, setWhatsappConsent] = useState<boolean>(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState<boolean>(false);

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "articles", label: "Articles" },
    { id: "case-studies", label: "Case Studies" },
    { id: "videos", label: "Videos" },
    { id: "guides", label: "Guides" },
  ];

  const posts = [
    {
      id: 1,
      title: "10 Social Media Mistakes That Are Costing You Customers",
      excerpt:
        "Learn the most common social media pitfalls that drive customers away and how to fix them before you lose more business.",
      category: "articles",
      author: "Ratna Sharma",
      date: "Jan 15, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Case Study: How a D2C Brand Grew 300% with Consistent Posting",
      excerpt:
        "Discover how one local coffee brand used Digibility to triple their revenue in 6 months through strategic social media.",
      category: "case-studies",
      author: "Pritha Menon",
      date: "Jan 12, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Complete Guide to Instagram Reels for Business Growth",
      excerpt:
        "Everything you need to know about creating engaging Reels that drive traffic, followers, and sales.",
      category: "guides",
      author: "Amit Verma",
      date: "Jan 10, 2026",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Video: Setting Up Your First Campaign in 5 Minutes",
      excerpt:
        "Watch our step-by-step tutorial on launching your first social media campaign.",
      category: "videos",
      author: "Sonia Kapoor",
      date: "Jan 8, 2026",
      readTime: "5 min watch",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "The ROI of AI-Generated Content: What Our Data Shows",
      excerpt:
        "Analyzing 10,000+ posts to understand the real impact of AI content generation on engagement and conversions.",
      category: "articles",
      author: "Ratna Sharma",
      date: "Jan 5, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "2026 Social Media Trends Every Marketer Should Know",
      excerpt:
        "Stay ahead of the curve with our predictions and insights on what’s coming in social marketing.",
      category: "guides",
      author: "Amit Verma",
      date: "Jan 1, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c75f?w=600&h=400&fit=crop",
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setEmail("");
      setWhatsappConsent(false);
    }, 3000);
  };

  return (
    <div className="App">
      <Header />

      <main className="min-h-screen bg-[#F8FAFF]">
        {/* HERO */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#4E5674]">
              Blog
            </h1>
            <p className="text-base text-[#64748b]">
              Insights, guides, and stories to help you grow.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* POSTS */}
            <div className="lg:col-span-2">
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Filter className="w-5 h-5 text-[#64748b]" />

                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedCategory === cat.id
                        ? "bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] text-white"
                        : "bg-white text-[#64748b] hover:bg-[#F8FAFF]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* POSTS LIST */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>

                      <div className="md:w-3/5 p-6 md:p-8">
                        <span className="px-3 py-1 text-xs font-semibold bg-[#6D5CEB]/10 text-[#6D5CEB] rounded-full">
                          {categories.find((c) => c.id === post.category)?.label}
                        </span>

                        <h2 className="text-xl sm:text-2xl font-bold my-3 text-[#4E5674]">
                          {post.title}
                        </h2>

                        <p className="text-sm text-[#64748b] mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-[#64748b]">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" /> {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" /> {post.date}
                            </span>
                            <span>{post.readTime}</span>
                          </div>

                          <button className="text-[#6D5CEB] font-semibold text-sm hover:underline flex items-center gap-1">
                            Read More <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-[#4E5674]">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-[#64748b] mb-6">
                    Get the latest insights, tips & case studies in your inbox.
                  </p>

                  {!newsletterSubmitted ? (
                    <form onSubmit={handleNewsletterSubmit}>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input mb-4"
                        placeholder="your@email.com"
                      />

                      <label className="checkbox-label mb-4 flex gap-2 text-sm text-[#64748b]">
                        <input
                          type="checkbox"
                          checked={whatsappConsent}
                          onChange={(e) => setWhatsappConsent(e.target.checked)}
                        />
                        Also send updates via WhatsApp
                      </label>

                      <button className="btn-primary w-full">Subscribe</button>

                      <p className="text-xs text-[#64748b] text-center mt-4">
                        Unsubscribe anytime. We respect your inbox.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold text-[#4E5674] text-sm">
                        You’re subscribed!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
