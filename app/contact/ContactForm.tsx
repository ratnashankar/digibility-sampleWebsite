"use client";

import { useEffect, useRef, useState } from "react";

type InquiryType = "Sales" | "Support" | "Careers" | "Partnerships" | "Other";

interface FormState {
  name: string;
  email: string;
  inquiry: InquiryType;
  subject: string;
  message: string;
  file?: File | null;
  company?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    inquiry: "Sales",
    subject: "",
    message: "",
    file: null,
    company: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, file: e.target.files?.[0] ?? null }));
  };

  const validate = () => {
    if (form.company) return false;
    if (!/\S+@\S+\.\S+/.test(form.email)) return false;
    if (!form.message || form.message.trim().length < 10) return false;
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setToast("Please complete required fields (email + message ≥ 10 chars).");
      return;
    }

    setSubmitting(true);

    try {
      await new Promise((res) => setTimeout(res, 900));

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
      setToast("Message received — we’ll respond within 48 business hours.");
    } catch {
      setToast("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="
        p-10 rounded-3xl 
        bg-white/95 backdrop-blur-xl 
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        border border-[#E5E9FF] 
        animate-[fadeIn_.5s_ease]
        transition-all duration-300
        hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]
      "
    >
      {/* TITLES */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-md text-white text-lg font-bold">
          ✉
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#3B4256]">Send us a message</h2>
          <p className="text-sm text-gray-600">
            We’ll respond within 48 business hours.
          </p>
        </div>
      </div>

      {/* FORM */}
      <form
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={onSubmit}
      >
        {/* Honeypot */}
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={onChange}
          className="hidden"
        />

        {/* FIELD DEFAULT CLASS */}
        {/** REUSABLE INPUT CLASS */}
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-[#505A78]">Name</label>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            className="
              mt-1 w-full rounded-2xl border px-4 py-3 bg-white
              shadow-sm focus:ring-2 focus:ring-blue-300 
              focus:shadow-md transition-all
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-[#505A78]">Email *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            value={form.email}
            onChange={onChange}
            className="
              mt-1 w-full rounded-2xl border px-4 py-3 bg-white
              shadow-sm focus:ring-2 focus:ring-blue-300 
              focus:shadow-md transition-all
            "
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="text-sm font-medium text-[#505A78]">
            Inquiry Type
          </label>
          <select
            name="inquiry"
            value={form.inquiry}
            onChange={onChange}
            className="
              mt-1 w-full rounded-2xl border px-4 py-3 bg-white
              shadow-sm focus:ring-2 focus:ring-blue-300 
              focus:shadow-md transition-all
            "
          >
            <option>Sales</option>
            <option>Support</option>
            <option>Careers</option>
            <option>Partnerships</option>
            <option>Other</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <label className="text-sm font-medium text-[#505A78]">Subject</label>
          <input
            name="subject"
            placeholder="How can we help?"
            value={form.subject}
            onChange={onChange}
            className="
              mt-1 w-full rounded-2xl border px-4 py-3 bg-white
              shadow-sm focus:ring-2 focus:ring-blue-300 
              focus:shadow-md transition-all
            "
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-[#505A78]">Message *</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell us more… (min 10 characters)"
            value={form.message}
            onChange={onChange}
            className="
              mt-1 w-full rounded-2xl border px-4 py-3 bg-white
              shadow-sm focus:ring-2 focus:ring-blue-300 
              focus:shadow-md transition-all
            "
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-[#505A78]">
            Attach a file (optional)
          </label>
          <input
            id="file"
            name="file"
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            ref={fileInputRef}
            onChange={onFile}
            className="
              mt-2 block w-full text-sm text-gray-600
              file:px-5 file:py-2 file:rounded-xl
              file:bg-blue-50 file:text-blue-700 file:border-none
              hover:file:bg-blue-100
              transition
            "
          />
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-4 mt-4">
          <button
            type="submit"
            disabled={submitting}
            className="
              w-full md:w-auto 
              px-6 py-3 rounded-2xl
              bg-gradient-to-r from-blue-600 to-blue-500
              text-white font-medium shadow-md
              hover:shadow-lg hover:opacity-95 active:scale-95
              transition-all disabled:opacity-65
            "
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>

          <a
            href="mailto:contact@digibility.ai"
            className="text-blue-600 hover:underline text-center"
          >
            Or talk to us via email →
          </a>
        </div>
      </form>

      {/* Toast */}
      {toast && (
        <div
          className="
            fixed bottom-5 right-5 max-w-sm rounded-2xl 
            bg-gray-900 text-white px-4 py-3 shadow-xl
            animate-[fadeInUp_.5s_ease]
          "
        >
          {toast}
        </div>
      )}
    </div>
  );
}
