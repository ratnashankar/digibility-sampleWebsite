// app/blog/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BlogClient = dynamic(() => import("./BlogClient"), { ssr: false });

export const metadata: Metadata = {
    title: "Blog | Digibility",
    description:
        "Guides, deep dives, reviews, case studies, and insights on AI-first digital marketing. Explore the Digibility blog.",
    alternates: { canonical: "https://digibility.ai/blog" },
    openGraph: {
        title: "Blog | Digibility",
        description:
            "AI-first marketing guides, tools, and success stories by Digibility.",
        url: "https://digibility.ai/blog",
        siteName: "Digibility",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digibility Blog" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Digibility",
        description: "Read the latest AI-first marketing content from Digibility.",
        images: ["/og-image.png"],
    },
};

export default function BlogArchivePage() {
    // Blog + BreadcrumbList JSON-LD
    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Digibility Blog",
        url: "https://digibility.ai/blog",
        description:
            "Guides, deep dives, reviews, case studies, and insights on AI-first digital marketing.",
    };
    const breadcrumbs = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://digibility.ai" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://digibility.ai/blog" },
        ],
    };

    return (
        <main className="bg-gray-50 pt-[8vh]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
            {/* HERO */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
                <div className="max-w-7xl mx-auto px-6 py-14">
                    <h1 className="text-4xl md:text-5xl font-bold">Digibility Blog</h1>
                    <p className="mt-3 opacity-90">
                        Foundation Guides, Deep Dives, How‑Tos, Reviews, Case Studies, and more.
                    </p>
                </div>
            </section>
            <BlogClient />
        </main>
    );
}