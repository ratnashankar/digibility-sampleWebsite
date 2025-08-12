import React from "react";
export default function BusinessCards() {
  const cards = [
    { title: "Solo Entrepreneurs", desc: "Solo Entrepreneurs" },
    { title: "Coaches & Consultants", desc: "Coaches & Consultants" },
    { title: "Small Businesses", desc: "Small Businesses & SMBs" },
    { title: "Startups", desc: "Startups in Growth Phase" },
  ];

  return (
    <section className="px-4 py-10">
      <h2 className="text-3xl font-bold ml-[10vw] mb-8">
        Built for Businesses Like Yours 💼
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
  {cards.map((card, idx) => (
    <div
      key={idx}
      className="bg-white border rounded-xl p-6 flex flex-col items-center text-center
                 transition-transform duration-300 hover:-translate-y-2 w-full sm:w-[48%] lg:w-[23%]"
    >
      <img src="" alt={card.title} />
      <h3 className="font-semibold text-lg">{card.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
    </div>
  ))}
</div>

    </section>
  );
}
