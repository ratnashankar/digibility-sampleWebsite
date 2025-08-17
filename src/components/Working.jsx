import React from "react";

import step1 from "../assets/step1.JPG";
import step2 from "../assets/step2.JPG";
import step3 from "../assets/step3.JPG";

export default function HowItWorks() {
  const steps = [
    {
      title: "Step 1",
      description: "Answer a few easy questions about your business",
      img: step1,
    },
    {
      title: "Step 2",
      description: "We create your social media strategy automatically",
      img: step2,
    },
    {
      title: "Step 3",
      description: "Your content is scheduled & optimized — on autopilot",
      img: step3,
    },
  ];

  return (
    <div className="py-16 px-6  ">
<h2 className="text-3xl lg:text-5xl font-bold pl-5 lg:pl-[20vh] pb-10 lg:pb-[10vh]  ">        How It Works 🎯
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group text-center  cursor-pointer bg-white w-[90vw] md:w-[40vw] xl:w-[25vw] 
                       p-6 rounded-2xl border shadow-md 
                       transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl"
          >
            <div className="flex justify-center mb-6">
              <img
                src={step.img}
                alt={step.title}
                className="max-h-48 object-contain rounded-lg drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-xl font-bold mb-3  text-gray-800 group-hover:text-indigo-600">{step.title}</h3>
            <p className="text-gray-800 text-xl leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
