import React from "react";

import pho1 from "../assets/pho1.JPG";
import pho2 from "../assets/pho2.JPG";
import pho3 from "../assets/pho3.JPG";
import pho4 from "../assets/pho4.JPG";

export default function BusinessCards() {
  const cards = [
    { title: "Solo Entrepreneurs", desc: "Independent professionals growing their digital presence", img: pho1 },
    { title: "Coaches & Consultants", desc: "Helping consultants reach and engage with clients online", img: pho2 },
    { title: "Small Businesses & SMBs", desc: "Empowering SMBs to scale with smart digital marketing", img: pho3 },
    { title: "Startups", desc: "Fueling startup growth with automated content strategies", img: pho4 },
  ];

  return (
    <section className="px-6 py-14 ">
      <h2 className="text-3xl lg:text-5xl font-bold pl-5 lg:pl-[20vh] pb-10 lg:pb-[10vh]">
        Built for Businesses Like Yours 💼
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group cursor-pointer bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center text-center 
                       transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-cover rounded-xl mb-5 shadow"
            />
            <h3 className="font-semibold text-[25px] group-hover:text-indigo-600 lg:text-lg mb-2">{card.title}</h3>
            <p className="text-gray-600 text-[16px]">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
