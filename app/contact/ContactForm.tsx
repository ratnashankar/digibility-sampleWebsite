"use client";

import { useEffect, useRef, useState } from "react";

type FormState = {
  name: string;
  email: string;
  inquiry: "Sales" | "Support" | "Careers" | "Partnerships" | "Other";
  subject: string;
  message: string;
  file?: File | null;
  // honeypot
  company?: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    inquiry: "Sales",
    subject: "",
    message: "",
    file: null,
    company: "", // honeypot (should stay empty)
  });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Simple toast auto-hide
  useEffect(() => {
    if (toast) {
      const id = setTimeout(() => setToast(null), 4500);
      return () => clearTimeout(id);
    }
  }, [toast]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setForm((p) => ({ ...p, file: f }));
  };

  const validate = () => {
    if (form.company) return false; // honeypot caught
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) return false;
    if (!form.message || form.message.trim().length < 10) return false;
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setToast("Please complete required fields (valid email & message ≥ 10 chars).");
      return;
    }
    setSubmitting(true);

    try {
      // In MVP we fake-submit. Integrate with your API/GTM/GA4 later.
      // Example: await fetch("/api/contact", { method: "POST", body: formData });
      await new Promise((r) => setTimeout(r, 900));

      // Clear form (except file input control)
      setForm({
        name: "",
        email: "",
        inquiry: "Sales",
        subject: "",
        message: "",
        file: null,
        company: "",
      });
      if (fileInputRef.current) fileInputRef.current.value = "";

      setToast("Your message has been received — our team will connect back within 48 business hours.");
    } catch {
      setToast("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-white shadow border">
      <h2 className="text-2xl font-semibold">Send us a message</h2>
      <p className="text-sm text-gray-600 mt-1">
        Fill in the form and we’ll get back within 48 business hours.
      </p>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit} noValidate>
        {/* Honeypot field (hidden) */}
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={onChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={onChange}
            required
            className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="inquiry" className="text-sm font-medium">Inquiry Type</label>
          <select
            id="inquiry"
            name="inquiry"
            value={form.inquiry}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 bg-white focus:outline-none focus:ring-2 ring-blue-300"
          >
            <option>Sales</option>
            <option>Support</option>
            <option>Careers</option>
            <option>Partnerships</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <input
            id="subject"
            name="subject"
            placeholder="How can we help?"
            value={form.subject}
            onChange={onChange}
            className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us a bit more… (min 10 characters)"
            value={form.message}
            onChange={onChange}
            required
            rows={6}
            className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="file" className="text-sm font-medium">Attach a file (optional)</label>
          <input
            id="file"
            name="file"
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            ref={fileInputRef}
            onChange={onFile}
            className="mt-1 block w-full text-sm text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

       <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-3 mt-2">
  <button
    type="submit"
    disabled={submitting}
    className="w-full md:w-auto px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 ring-blue-400 disabled:opacity-70 text-center"
  >
    {submitting ? "Sending…" : "Send Message"}
  </button>
  <a
    href="mailto:contact@digibility.ai"
    className="text-blue-600 hover:underline text-center w-full md:w-auto"
  >
    Or talk to us via email →
  </a>
</div>

      </form>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 max-w-sm rounded-xl bg-gray-900 text-white px-4 py-3 shadow-lg"
        >
          {toast}
        </div>
      )}
    </div>
  );
}