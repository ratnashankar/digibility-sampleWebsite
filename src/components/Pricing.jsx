import React from 'react'
const plans = [
  {name:'Starter', price:'$29', bullets:['1 user','Basic analytics']},
  {name:'Team', price:'$99', bullets:['5 users','Scheduling & approvals']},
  {name:'Agency', price:'Custom', bullets:['Unlimited users','Priority support']}
]
export default function Pricing(){
  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <p className="mt-3 text-gray-600">Simple pricing for teams of any size.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-lg border shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="text-2xl font-bold">{p.price}</div>
              </div>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                {p.bullets.map((b, idx) => <li key={idx}>• {b}</li>)}
              </ul>
              <div className="mt-6">
                <a href="#" className="block text-center px-4 py-2 rounded-md bg-cyan-500 text-white">Choose</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}