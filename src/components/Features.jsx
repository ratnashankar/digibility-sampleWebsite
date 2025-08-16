import React from "react";
import img1 from "../assets/Vibrant.JPG";
import img2 from "../assets/Illustration.JPG";
import img3 from "../assets/High.JPG";
import img4 from "../assets/Bright.JPG";



const featuresData = [
  {
    img: img1,
    title: "Too Many Tools",
    description: "Managing 6+ apps just to post one update.",
  },
  {
    img: img2,
    title: "No Clear Results",
    description: "Agencies send reports you can’t decode.",
  },
  {
    img: img3,
    title: "DIY Burnout",
    description: "Spending weekends on Canva instead of customers.",
  },
  {
    img: img4,
    title: "Inconsistent Posting",
    description: "Hard to stay regular without a dedicated team.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className=" font-bold pb-10  text-3xl pl-[3vw] sm:text-[30px] lg:text-[36px]">
          Why Marketing Feels Broken😩
        </h1>

        <div className="flex flex-wrap justify-center gap-5 h-fit">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-gradient-to-b from-white to-gray-50 w-[90vw] sm:w-[40vw] lg:w-[18vw] 
             p-6 rounded-2xl border border-gray-200 shadow-md 
             transition duration-300 hover:shadow-xl hover:-translate-y-3"
            >
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg object-contain max-h-44 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold mt-6 mb-3 text-center text-gray-900 group-hover:text-indigo-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>

          ))}
        </div>


      </div>
    </section>
  );
}
