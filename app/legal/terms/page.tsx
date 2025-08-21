'use client';
import { useState } from 'react';

const sections = [
  { title: '1. Introduction', content: 'Welcome to Digibility Terms and Conditions. Please read carefully.' },
  { title: '2. Subscription & Payments', content: 'Monthly/Annual billing with auto-renewal applies. Refund not possible after content approval.' },
  { title: '3. AI Credits & Usage', content: 'Revisions capped as per plan. Credits reset monthly and do not roll over.' },
  { title: '4. Client Responsibilities', content: 'Clients must provide approvals and required assets on time.' },
  { title: '5. Liability & Indemnity', content: 'Our liability is capped to the last 3 months subscription fees.' },
];

export default function TermsPage() {
  const [open, setOpen] = useState(null); 

  return (
    <section className="max-w-4xl mx-auto py-12 px-6 pt-[9vh]">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      {sections.map((s, i) => (
        <div key={i} className="mb-4 border-b pb-2">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center text-left text-lg font-medium"
          >
            {s.title}
            <span className="ml-2">{open === i ? '-' : '+'}</span>
          </button>
          {open === i && <p className="mt-2 text-gray-700">{s.content}</p>}
        </div>
      ))}
    </section>
  );
}
