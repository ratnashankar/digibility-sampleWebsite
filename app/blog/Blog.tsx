// app/blog/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";


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
    // Schema JSON-LD
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
        <main className="bg-[#f8fbff] pt-[8vh]">

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
            />

            {/* HERO SECTION */}
            <section
                className="
                bg-gradient-to-r from-blue-600 to-blue-500 
                text-white text-center rounded-b-3xl 
                shadow-lg animate-[fadeIn_.6s_ease]
                "
            >
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow">
                        Digibility Blog
                    </h1>

                    <p className="mt-4 text-lg opacity-95 max-w-2xl mx-auto">
                        Foundation Guides, Deep Dives, How-Tos, Reviews, Case Studies, and more.
                    </p>

                    {/* Decorative blur circles like premium UI */}
                    <div className="relative mt-8">
                        <div className="absolute left-1/4 w-16 h-16 bg-white/20 blur-3xl rounded-full" />
                        <div className="absolute right-1/4 w-20 h-20 bg-white/10 blur-3xl rounded-full" />
                    </div>
                </div>
            </section>

            {/* BLOG LIST WRAPPER */}
            <div
                className="
                max-w-7xl mx-auto px-6 
                py-12 
                animate-[fadeInUp_.6s_ease] 
                "
            >
                <div
                    className="
                    bg-white/90 rounded-3xl p-6 
                    shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                    backdrop-blur
                    transition-all duration-300
                    hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
                    "
                >
                </div>
            </div>
        </main>
    );
}
