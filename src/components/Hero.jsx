import React from 'react'
export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Create content that converts — faster
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Write, optimize and publish content across multiple channels.
            Collaborate with your team and analyze results in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-cyan-500 text-white font-semibold shadow">Start free trial</a>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-200">Book a demo</a>
          </div>
          <div className="mt-6 text-sm text-gray-500">No credit card required • 14-day trial</div>
        </div>
        <div>
          <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-white p-6">
              <div className="h-48 bg-gradient-to-r from-cyan-50 to-slate-50 rounded-md flex items-center justify-center text-sm text-gray-400">Editor / Dashboard mockup</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-20 bg-gray-50 rounded-md" />
                <div className="h-20 bg-gray-50 rounded-md" />
                <div className="h-20 bg-gray-50 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}