export default function BlogPreview() {
  const blogs = [
    { title: "Top 5 AI Marketing Trends in 2025", link: "#", excerpt: "AI is changing marketing. Here’s what you need to know." },
    { title: "How to Save 10 Hours a Week with Digibility", link: "#", excerpt: "Automation helps you scale smarter, not harder." },
    { title: "Why Small Businesses Need Social Media Automation", link: "#", excerpt: "Even solo entrepreneurs can scale big with the right tools." }
  ];
  

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Latest Insights</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((b, i) => (
          <a key={i} href={b.link} className="p-6 shadow-md rounded-lg bg-white hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-gray-600">{b.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}