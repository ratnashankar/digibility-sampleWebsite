"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  whatsapp: string;
  company: string;
  website: string;
  teamSize: string;
  industry: string;
  currentManagement: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+91",
    whatsapp: "",
    company: "",
    website: "",
    teamSize: "",
    industry: "",
    currentManagement: "",
    message: ""
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countryCodes = [
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+61", country: "Australia" }
  ];

  const teamSizes = [
    "Just me",
    "2-5 people",
    "6-10 people",
    "11-50 people",
    "51-200 people",
    "200+ people"
  ];

  const industries = [
    { value: "", label: "Select industry" },
    { value: "technology", label: "Technology" },
    { value: "saas", label: "SaaS" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "local-services", label: "Local Services" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "realestate", label: "Real Estate" },
    { value: "finance", label: "Finance" },
    { value: "hospitality", label: "Hospitality" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "media", label: "Media" },
    { value: "nonprofit", label: "Nonprofit" },
    { value: "other", label: "Other" },

    // Banned industries
    { value: "adult", label: "Adult Content", banned: true },
    { value: "gambling", label: "Gambling", banned: true },
    { value: "arms", label: "Arms/Weapons", banned: true },
    { value: "drugs", label: "Recreational Drugs", banned: true },
    { value: "counterfeits", label: "Counterfeits", banned: true },
    { value: "hate", label: "Hate/Extremism", banned: true }
  ];

  const currentManagementOptions = [
    { value: "", label: "Select option" },
    { value: "diy", label: "DIY (doing it myself)" },
    { value: "inhouse", label: "In-house team" },
    { value: "freelancer", label: "Freelancer" },
    { value: "agency", label: "Marketing agency" },
    { value: "tools", label: "Using scheduling tools" },
    { value: "nothing", label: "Not managing actively" }
  ];

  const bannedIndustries = industries.filter(i => i.banned).map(i => i.value);
  const isBannedIndustry = bannedIndustries.includes(formData.industry);

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\d{7,15}$/.test(formData.whatsapp.replace(/\s/g, ""))) {
      newErrors.whatsapp = "Enter a valid phone number";
    }

    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.teamSize) newErrors.teamSize = "Select team size";
    if (!formData.industry) newErrors.industry = "Select industry";
    if (!formData.currentManagement) newErrors.currentManagement = "Select an option";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isBannedIndustry) return;
    if (!validateForm()) return;

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  // --------------------
  // THANK YOU SCREEN
  // --------------------
  if (isSubmitted) {
    return (
      <div className="App">
        <Header />

        <main className="min-h-screen bg-[#F8FAFF] flex items-center justify-center py-20">
          <div
            className="max-w-2xl mx-auto px-6 text-center"
            data-testid="contact-success"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-[#4E5674]">
                Thank You!
              </h2>

              <p className="text-base text-[#64748b] mb-6">
                We have received your message and will get back to you within 24 hours.
              </p>

              <div className="bg-[#F8FAFF] rounded-lg p-4 mb-6">
                <p className="text-sm text-[#64748b]">
                  Need help? Email us at{" "}
                  <a
                    href="mailto:support@digibility.com"
                    className="text-[#6D5CEB] font-semibold hover:underline"
                  >
                    support@digibility.com
                  </a>
                </p>
              </div>

              <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
                Send Another Message
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // --------------------
  // MAIN CONTACT FORM
  // --------------------
  return (
    <div className="App">
      <Header />

      <main className="min-h-screen bg-[#F8FAFF]">
        {/* Hero */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4 text-[#4E5674]"
              data-testid="contact-heading"
            >
              Get in Touch
            </h1>
            <p className="text-base text-[#64748b]">
              Tell us about your business and how we can help you grow.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg"
              data-testid="contact-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.name ? "error" : ""}`}
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="error-message">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium mb-2">Work Email *</label>
                  <input
                    type="email"
                    className={`form-input ${errors.email ? "error" : ""}`}
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp Number *</label>
                  <div className="flex gap-2">
                    <select
                      className="form-input w-32"
                      value={formData.countryCode}
                      onChange={(e) => handleChange("countryCode", e.target.value)}
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} {c.country}
                        </option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      className={`form-input flex-1 ${errors.whatsapp ? "error" : ""}`}
                      value={formData.whatsapp}
                      onChange={(e) => handleChange("whatsapp", e.target.value)}
                      placeholder="9876543210"
                    />
                  </div>
                  {errors.whatsapp && <p className="error-message">{errors.whatsapp}</p>}
                </div>

                {/* COMPANY */}
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.company ? "error" : ""}`}
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Acme Inc."
                  />
                  {errors.company && <p className="error-message">{errors.company}</p>}
                </div>

                {/* WEBSITE */}
                <div>
                  <label className="block text-sm font-medium mb-2">Website (Optional)</label>
                  <input
                    type="url"
                    className="form-input"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    placeholder="https://example.com"
                  />
                </div>

                {/* TEAM SIZE */}
                <div>
                  <label className="block text-sm font-medium mb-2">Team Size *</label>
                  <select
                    className={`form-input ${errors.teamSize ? "error" : ""}`}
                    value={formData.teamSize}
                    onChange={(e) => handleChange("teamSize", e.target.value)}
                  >
                    <option value="">Select team size</option>
                    {teamSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  {errors.teamSize && <p className="error-message">{errors.teamSize}</p>}
                </div>

                {/* INDUSTRY */}
                <div>
                  <label className="block text-sm font-medium mb-2">Industry *</label>
                  <select
                    className={`form-input ${errors.industry ? "error" : ""}`}
                    value={formData.industry}
                    onChange={(e) => handleChange("industry", e.target.value)}
                  >
                    {industries.map((i) => (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    ))}
                  </select>
                  {errors.industry && <p className="error-message">{errors.industry}</p>}
                </div>

                {/* CURRENT MANAGEMENT */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    How do you manage social today? *
                  </label>
                  <select
                    className={`form-input ${
                      errors.currentManagement ? "error" : ""
                    }`}
                    value={formData.currentManagement}
                    onChange={(e) => handleChange("currentManagement", e.target.value)}
                  >
                    {currentManagementOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.currentManagement && (
                    <p className="error-message">{errors.currentManagement}</p>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    rows={5}
                    className={`form-input ${errors.message ? "error" : ""}`}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your goals and challenges..."
                  />
                  {errors.message && <p className="error-message">{errors.message}</p>}
                </div>
              </div>

              {/* Banned Notice */}
              {isBannedIndustry && (
                <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <p className="text-sm text-red-700 font-medium">
                    We cannot support this category.
                  </p>
                </div>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isBannedIndustry}
                  className={`btn-primary w-full justify-center ${
                    isBannedIndustry ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
