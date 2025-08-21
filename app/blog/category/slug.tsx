// app/blog/category/[slug]/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { categories, CategoryKey } from "../Blogdata";

const BlogClient = dynamic(() => import("../BlogClient"), { ssr: false });

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const key = params.slug as CategoryKey;
  const cat = categories[key];

  const title = cat ? `${cat.label} | Digibility Blog` : "Blog | Digibility";
  const desc = cat
    ? `Explore ${cat.label} on the Digibility Blog.`
    : "Digibility Blog categories.";

  return {
    title,
    description: desc,
    alternates: { canonical: `https://digibility.ai/blog/category/${params.slug}` },
    openGraph: {
      title,
      description: desc,
      url: `https://digibility.ai/blog/category/${params.slug}`,
      siteName: "Digibility",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/og-image.png"],
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const key = params.slug as CategoryKey;
  const cat = categories[key];

  return (
    <main className="bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            {cat ? cat.label : "Blog Category"}
          </h1>
          <p className="mt-3 opacity-90">Curated posts by category.</p>
        </div>
      </section>
      <BlogClient initialCategory={cat ? key : ("all" as CategoryKey)} />

    </main>
  );
}
