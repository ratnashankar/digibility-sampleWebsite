import React from "react";

const featuresData = [
  {
    img: "/images/tool-icon.svg", 
    title: "Too Many Tools",
    description: "Managing 6+ apps just to post one update.",
  },
  {
    img: "/images/results-icon.svg",
    title: "No Clear Results",
    description: "Agencies send reports you can’t decode.",
  },
  {
    img: "/images/diy-icon.svg",
    title: "DIY Burnout",
    description: "Spending weekends on Canva instead of customers.",
  },
  {
    img: "/images/inconsistent-icon.svg",
    title: "Inconsistent Posting",
    description: "Hard to stay regular without a dedicated team.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className=" font-bold mb-10 ml-[8vw] text-[20px] sm:text-[30px] lg:text-[36px]">
          Why Marketing Feels Broken 😩
        </h1>

       <div className="flex flex-wrap justify-center gap-5 h-fit">
  {featuresData.map((item, index) => (
  <div
  key={index}
  className="bg-white w-[100vw] sm:w-[40vw] lg:w-[17vw] p-5 rounded-xl border-2 transition-transform duration-300 hover:-translate-y-2"
>

      <img
        src={item.img}
        alt={item.title}
        className="w-22 h-5 mt-3 mx-auto mb-1"
      />
      <h3 className="text-lg font-bold mb-2 text-center">{item.title}</h3>
      <p className="text-gray-600 text-center">{item.description}</p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
