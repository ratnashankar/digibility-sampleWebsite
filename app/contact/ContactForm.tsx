"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";



interface FormState {
  fullName: string;
  workEmail: string;
  countryCode: string;
  phoneNumber: string;
  companyName: string;
  website: string;
  teamSize: string;
  industry: string;
  socialManagement: string;
  message: string;
  file?: File | null;
}

const countryCodes = [
  { code: "+91", label: "India" },
  { code: "+1", label: "USA" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
  { code: "+86", label: "China" },
  { code: "+81", label: "Japan" },
  { code: "+49", label: "Germany" },
  { code: "+33", label: "France" },
];

const teamSizes = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+",
];

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Manufacturing",
  "Marketing/Advertising",
  "Real Estate",
  "Other",
];

const socialManagementOptions = [
  "We manage everything in-house",
  "We use an agency",
  "We use social media management tools",
  "We don't manage social media yet",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    workEmail: "",
    countryCode: "+91",
    phoneNumber: "",
    companyName: "",
    website: "",
    teamSize: "",
    industry: "",
    socialManagement: "",
    message: "",
    file: null,
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
    if (!form.fullName.trim()) return false;
    if (!/\S+@\S+\.\S+/.test(form.workEmail)) return false;
    if (!form.phoneNumber.trim()) return false;
    if (!form.companyName.trim()) return false;
    if (!form.teamSize) return false;
    if (!form.industry) return false;
    if (!form.socialManagement) return false;
   if (!form.message.trim()) return false;
    return true;
  };

 const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setSubmitting(true);

  try {
    const formDataJson = {
      full_name: form.fullName,
      work_email: form.workEmail,
      content: {
        whatsapp_number: `${form.countryCode}${form.phoneNumber}`,
        company_name: form.companyName,
        website: form.website || null,
        team_size: form.teamSize,
        industry: form.industry,
        social_management: form.socialManagement,
        message: form.message.trim(),
        submitted_at: new Date().toISOString(),
      },
    };

    console.log("Sending JSON:", formDataJson);

    // ✅ Send to Flask backend
    const response = await fetch(
       "https://digi-python-app-test-529240833282.asia-south1.run.app/client_get_in_touch_email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataJson),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    const result = await response.json();
    console.log("Server Response:", result);

    setToast("Message sent successfully!");

    // Reset form
    setForm({
      fullName: "",
      workEmail: "",
      countryCode: "+91",
      phoneNumber: "",
      companyName: "",
      website: "",
      teamSize: "",
      industry: "",
      socialManagement: "",
      message: "",
      file: null,
    });

  } catch (error) {
    console.error(error);
    setToast("Something went wrong. Try again.");
  } finally {
    setSubmitting(false);
  }
};



  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-[#4A5568] mb-3">Get in Touch</h1>
        <p className="text-[#718096] text-lg">
          Tell us about your business and how we can help you grow.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 sm:p-10">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Row 1: Full Name & Work Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#4A5568] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={onChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4A5568] mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="workEmail"
                  type="email"
                  placeholder="john@company.com"
                  value={form.workEmail}
                  onChange={onChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Row 2: WhatsApp Number & Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#4A5568] mb-2">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={onChange}
                    className="px-3 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code} {country.label}
                      </option>
                    ))}
                  </select>
                  <input
                    name="phoneNumber"
                    type="tel"
                    placeholder="1234567890"
                    value={form.phoneNumber}
                    onChange={onChange}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4A5568] mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Acme Inc."
                  value={form.companyName}
                  onChange={onChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Row 3: Website & Team Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#4A5568] mb-2">
                  Website (Optional)
                </label>
                <input
                  name="website"
                  type="url"
                  placeholder="https://example.com"
                  value={form.website}
                  onChange={onChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4A5568] mb-2">
                  Team Size <span className="text-red-500">*</span>
                </label>
                <select
                  name="teamSize"
                  value={form.teamSize}
                  onChange={onChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "20px",
                  }}
                >
                  <option value="" disabled>
                    Select team size
                  </option>
                  {teamSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Industry */}
            <div>
              <label className="block text-sm font-medium text-[#4A5568] mb-2">
                Industry <span className="text-red-500">*</span>
              </label>
              <select
                name="industry"
                value={form.industry}
                onChange={onChange}
                className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "20px",
                }}
              >
                <option value="" disabled>
                  Select industry
                </option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 5: How do you manage social today? */}
            <div>
              <label className="block text-sm font-medium text-[#4A5568] mb-2">
                How do you manage social today? <span className="text-red-500">*</span>
              </label>
              <select
                name="socialManagement"
                value={form.socialManagement}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "20px",
                }}
              >
                <option value="" disabled>
                  Select option
                </option>
                {socialManagementOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 6: Message */}
            <div>
              <label className="block text-sm font-medium text-[#4A5568] mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your goals and challenges..."
                value={form.message}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#3B82F6] text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:opacity-95 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 max-w-sm rounded-2xl bg-gray-900 text-white px-6 py-4 shadow-2xl animate-[fadeInUp_.3s_ease] z-50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <p className="text-sm font-medium">{toast}</p>
          </div>
        </div>
      )}
    </div>
  );
}