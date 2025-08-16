import React from "react";
import backgroundVideo from "../assets/backgroundvideo.mp4";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12">
        <h1 className="text-[11vw] md:text-[7vw] lg:text-[5vw] font-extrabold leading-tight text-white drop-shadow-lg">
          Your Social Media, <br />
          <span className="text-[#00e676]">Fully Managed.</span>
        </h1>

        <p className="mt-6 text-[5vw] md:text-[2.5vw] lg:text-[1.6vw] font-medium max-w-3xl text-gray-100 drop-shadow-md">
          Plan, create, schedule, and optimize — all without chasing freelancers
          or managing a dozen tools. 🚀
        </p>

        <div className="mt-10 flex flex-wrap gap-5 justify-center">
          <a
            href="#"
            className="bg-[#00e676] hover:bg-[#00c853] px-8 py-4 rounded-xl text-white font-bold 
                       transition-transform duration-300 text-[4vw] md:text-[1.8vw] lg:text-[1.2vw]
                       shadow-lg hover:scale-105"
          >
            🚀 Join Early Access
          </a>
          <a
            href="#"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 
                       px-6 py-4 rounded-xl text-white font-bold transition-all duration-300 
                       flex items-center gap-3 text-[4vw] md:text-[1.8vw] lg:text-[1.2vw]
                       shadow-md hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <polygon points="10,8 16,12 10,16" fill="currentColor" />
            </svg>
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
