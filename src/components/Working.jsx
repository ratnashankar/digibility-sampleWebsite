import React from "react";
export default function HowItWorks() {
  const steps = [
    {
      title: "Step 1",
      description: "Answer a few easy questions about your business",
      img: "",
    },
    {
      title: "Step 2",
      description: "We create your social media strategy automatically",
      img: "",
    },
    {
      title: "Step 3",
      description:
        "Your content is scheduled & optimized — on autopilot",
      img: "",
    },
  ];

  return (
    <div className="py-10 px-5 mb-[8vh] text-center">
      <h2 className="text-3xl font-bold text-left ml-[10vw] mb-10">
        How It Works 🎯
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white w-[80vw] md:w-[40vw] xl:w-[25vw] p-6 rounded-xl border-2 transition-transform duration-300 hover:-translate-y-3"
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-full text-left ml-[40%] object-cover mb-4 rounded-md "
            />
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
