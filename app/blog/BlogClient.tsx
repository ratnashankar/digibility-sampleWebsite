// app/blog/BlogClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { posts, categories, CategoryKey, categoryOrder } from "./Blogdata";

type SortKey = "newest" | "popular";
const PAGE_SIZE = 12;

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogClient({ initialCategory }: { initialCategory?: CategoryKey }) {
  const [activeCat, setActiveCat] = useState<CategoryKey | "all">(initialCategory ?? "all");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("newest");
  const [page, setPage] = useState(1);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => setPage(1), [activeCat, query, sortBy]);

  const filtered = useMemo(() => {
    let data = posts.slice();

    if (activeCat !== "all") {
      data = data.filter((p) => p.category === activeCat);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)
      );
    }
    if (sortBy === "newest") {
      data.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    } else {
      data.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
    }
    return data;
  }, [activeCat, query, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    if (toast) {
      const id = setTimeout(() => setToast(null), 4500);
      return () => clearTimeout(id);
    }
  }, [toast]);

return (
  <section className="max-w-7xl mx-auto px-6 py-10">
    {/* Controls */}
    <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
      {/* Category tabs */}
      <div className="flex-1 overflow-x-auto pb-3">
        <div className="flex gap-2 w-max">
          <button
            className={`px-3 py-1.5 rounded-full border ${
              activeCat === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white"
            }`}
            onClick={() => setActiveCat("all")}
          >
            All
          </button>
          {categoryOrder.map((k) => (
            <button
              key={k}
              className={`px-3 py-1.5 rounded-full border whitespace-nowrap ${
                activeCat === k
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white"
              }`}
              onClick={() => setActiveCat(k)}
              title={categories[k].label}
            >
              {categories[k].label}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <input
          className="rounded-xl border px-3 py-2 w-64"
          placeholder="Search posts…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search posts"
        />
        <select
          className="rounded-xl border px-3 py-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortKey)}
          aria-label="Sort posts"
        >
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
        </select>
      </div>
    </div>

  <div className="max-w-[90vw] flex flex-wrap gap-6 mt-6 mx-auto">
  {pageItems.map((p) => (
    <article
      key={p.slug}
      className="
        w-full sm:w-[48%] lg:w-[30%] bg-white rounded-2xl mt-4 border shadow-sm hover:shadow transition mx-auto  "
    >
      {/* Cover (placeholder gradient) */}
      <a href={`/blog/${p.slug}`} aria-label={p.title}>
        <div className="h-44 rounded-t-2xl bg-gradient-to-br from-blue-50 to-emerald-50 border-b" />
      </a>
      <div className="p-5">
        <div className="text-xs inline-flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {categories[p.category].label}
          </span>
          <span className="text-gray-400">•</span>
          <time className="text-gray-500">{formatDate(p.date)}</time>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">{p.readingMinutes} min read</span>
        </div>
        <h2 className="mt-2 text-lg font-semibold">
          <a href={`/blog/${p.slug}`} className="hover:underline">
            {p.title}
          </a>
        </h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-3">{p.excerpt}</p>
        <div className="mt-3 text-xs text-gray-500">By {p.author}</div>
      </div>
    </article>
  ))}
</div>



    {/* Pagination */}
    <nav
      className="mt-8 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        className="px-3 py-1.5 rounded-lg border bg-white disabled:opacity-50"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1.5 rounded-lg border ${
            page === i + 1
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white"
          }`}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="px-3 py-1.5 rounded-lg border bg-white disabled:opacity-50"
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
      >
        Next
      </button>
    </nav>

    {/* Newsletter CTA */}
    <section className="mt-12 bg-white rounded-2xl border p-6 text-center">
      <h3 className="text-xl font-semibold">Get the latest in your inbox</h3>
      <p className="text-sm text-gray-600 mt-1">
        Weekly round-up of guides, insights, and tools. No spam—unsubscribe
        anytime.
      </p>
      <form
        className="mt-4 flex flex-col sm:flex-row gap-3 justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          setToast("Thanks! You’re subscribed.");
        }}
      >
        <input
          type="email"
          required
          placeholder="you@company.com"
          className="rounded-xl border px-3 py-2 w-full sm:w-80"
          aria-label="Email address"
        />
        <button className="rounded-xl bg-indigo-600 text-white px-5 py-2 hover:bg-indigo-700">
          Subscribe
        </button>
      </form>
    </section>

    {/* Toast */}
    {toast && (
      <div
        role="status"
        aria-live="polite"
        className="fixed bottom-5 right-5 bg-gray-900 text-white px-4 py-3 rounded-xl shadow"
      >
        {toast}
      </div>
    )}
  </section>
);

}