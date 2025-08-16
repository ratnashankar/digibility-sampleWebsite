import React from 'react'

const plans = [
  { name: 'Starter', price: '$29', bullets: ['1 user', 'Basic analytics'] },
  { name: 'Team', price: '$99', bullets: ['5 users', 'Scheduling & approvals'] },
  { name: 'Agency', price: 'Custom', bullets: ['Unlimited users', 'Priority support'] }
]

export default function Pricing() {
  return (
    <section id="pricing" className="mb-10 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto bg-slate-50 rounded-2xl px-6 py-12 sm:py-16 md:py-20 w-full max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Imagine This… ✨
        </h1>

        <ul className="list-disc list-inside text-base sm:text-lg space-y-2 mb-8">
          <li>✅ Your content calendar builds itself</li>
          <li>✅ Posts designed, written, and scheduled automatically</li>
          <li>✅ Real-time strategy adjustments based on performance</li>
        </ul>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src=""
            alt="Content Calendar Demo"
            className="w-full sm:w-1/4 lg:w-1/4 rounded-lg object-cover"
          />
          <button
            className="bg-[#00e676] hover:bg-[#00bfff] text-white font-bold 
                       transition-colors duration-300 
                       px-6 py-3 text-sm sm:text-base rounded-lg w-full sm:w-[193px] lg:w-[20%]"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  )
}
