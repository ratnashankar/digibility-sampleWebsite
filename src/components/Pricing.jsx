import React from 'react'
const plans = [
  { name: 'Starter', price: '$29', bullets: ['1 user', 'Basic analytics'] },
  { name: 'Team', price: '$99', bullets: ['5 users', 'Scheduling & approvals'] },
  { name: 'Agency', price: 'Custom', bullets: ['Unlimited users', 'Priority support'] }
]
export default function Pricing() {
  return (
    <section id="pricing" className=" mb-10 ">
      <div className="ml-[10vw] mx-auto bg-slate-50 px-6 h-fit py-20 w-[80vw]">
        <h1 className='text-[36px] font-[700]   ' >Imagine This… ✨</h1>
        <ul className='list-disc text-[17px]' >
          <li>✅ Your content calendar builds itself</li>
          <li>✅ Posts designed, written, and scheduled automatically</li>
          <li>✅ Real-time strategy adjustments based on performance</li>
        </ul>
        <div className='text-lg mt-5 flex' >
          <img src="" alt="Content Calendar Demo" />
          <button class="bg-[#00e676] hover:bg-[#00bfff] border-none ml-3 mt-[-5px] text-white font-bold cursor-pointer transition-colors duration-300 m-0 p-0 text-[15px] w-[65vw] sm:w-[193px] sm:h-[45px] lg:w-[20%] h-[45px] rounded-lg">
            Get Early Access</button>
        </div>
      </div>
    </section>
  )
}