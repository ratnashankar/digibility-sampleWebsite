import React from 'react'
export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#06B6D4"/></svg>
            <span className="font-semibold">StoryReplica</span>
          </div>
          <p className="mt-4 text-sm text-gray-600">Build and publish content with your team.</p>
        </div>
        <div className="text-sm text-gray-600">
          <h4 className="font-semibold">Product</h4>
          <ul className="mt-3 space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="text-sm text-gray-600">
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">© {new Date().getFullYear()} StoryReplica — Made with ❤️</div>
      </div>
    </footer>
  )
}