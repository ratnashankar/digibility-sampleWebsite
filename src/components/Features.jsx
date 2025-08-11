import React from 'react'
const items = [
  {title:'Collaborative editor', desc:'Real-time editor with comments and approvals.'},
  {title:'Multi-channel publishing', desc:'Publish to blogs, socials and CMS platforms.'},
  {title:'SEO & Analytics', desc:'Optimize content and track performance.'},
]
export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Everything you need to manage your content</h2>
        <p className="mt-3 text-gray-600">Features built for teams and agencies to scale content production.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 bg-white border rounded-lg shadow-sm">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}