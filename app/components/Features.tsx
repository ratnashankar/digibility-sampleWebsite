export default function Features() {
  const features = [
    { title: "AI-Driven Content", desc: "Generate posts, carousels, and reels instantly." },
    { title: "Smart Scheduling", desc: "Post at the best time for maximum reach." },
    { title: "Analytics Dashboard", desc: "See what’s working with easy-to-read insights." }
  ];

  return (
    
    <section className="py-16 px-[5vw] text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose&nbsp;Digibility?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}