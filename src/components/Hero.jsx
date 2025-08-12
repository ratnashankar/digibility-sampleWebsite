import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="py-[8vh] pb-[10vh] text-white bg-gradient-to-br from-blue-500 to-purple-700 
                      w-[100vw] h-auto md:w-[90vw] md:h-[80vh] lg:w-[80vw] lg:h-[70vh] mx-auto">
        
        {/* Heading */}
        <div className="heading flex text-[15vw] md:text-[6vw] lg:text-[3vw] ml-5 font-[700] 
                        flex-col justify-items-start pl-[3vw] items-start pt-[10vh]">
          <h1>Your Social Media, Fully Managed.</h1>
          <h1>Without the Overwhelm.</h1>
        </div>

        {/* Subheading */}
        <div className="subheading text-[6vw] md:text-[2.5vw] lg:text-[1.5vw] mx-5 font-[700] 
                        flex flex-col justify-items-start pl-[3vw] items-start pt-[2vh] max-w-[90%]">
          <p>
            Plan, create, schedule, and optimize — all without chasing freelancers or managing a <br className="hidden md:block" /> dozen tools. 🚀
          </p>
        </div>

        {/* Buttons */}
        <div className="buttons flex gap-2 md:gap-4 lg:gap-5 ml-3 justify-start items-center 
                        pt-[3vh] pl-[3vw] flex-wrap md:flex-nowrap">
          <a
            href="#"
            className="bg-[#00e676] hover:bg-green-500 px-6 py-3 rounded-lg text-white font-bold 
                       transition-colors duration-300 text-[4vw] md:text-[1.5vw] lg:text-[1vw]"
          >
            Join Early Access
          </a>
          <a
            href="#"
            className="bg-transparent hover:bg-white border-2 hover:text-blue-700 px-3 pr-4 rounded-lg 
                       text-white font-bold transition-colors duration-300 flex items-center gap-2 
                       text-[4vw] md:text-[1.5vw] lg:text-[1vw]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
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
  )
}
