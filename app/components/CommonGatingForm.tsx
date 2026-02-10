import React, { useState } from "react";

type FormDataType = {
  name: string;
  email: string;
  countryCode: string;
  whatsapp: string;
  industry: string;
};

type ErrorType = {
  name?: string;
  email?: string;
  whatsapp?: string;
  industry?: string;
};

type CommonGatingFormProps = {
  onUnlock: () => void;
  toolName: string;
};

export const CommonGatingForm = ({ onUnlock, toolName }: CommonGatingFormProps) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    countryCode: "+91",
    whatsapp: "",
    industry: "",
  });

 const [errors, setErrors] = useState<{
  name?: string;
  email?: string;
  whatsapp?: string;
  industry?: string;
}>({});


  const countryCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+61", country: "Australia" },
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

    // Banned categories
    { value: "adult", label: "Adult Content", banned: true },
    { value: "gambling", label: "Gambling", banned: true },
    { value: "arms", label: "Arms/Weapons", banned: true },
    { value: "drugs", label: "Recreational Drugs", banned: true },
    { value: "counterfeits", label: "Counterfeits", banned: true },
    { value: "hate", label: "Hate/Extremism", banned: true },
  ];

  const bannedIndustries = industries.filter((i) => i.banned).map((i) => i.value);
  const isBanned = bannedIndustries.includes(formData.industry);

  const validateForm = () => {
    const newErrors: ErrorType = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\d{7,15}$/.test(formData.whatsapp.replace(/\s/g, ""))) {
      newErrors.whatsapp = "Please enter a valid phone number";
    }

    if (!formData.industry) newErrors.industry = "Please select industry";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isBanned || !validateForm()) return;

    const leadData = {
      ...formData,
      whatsapp: `${formData.countryCode}${formData.whatsapp}`,
      timestamp: new Date().toISOString(),
      tool: toolName,
    };

    localStorage.setItem("digibility_tools_lead", JSON.stringify(leadData));

    onUnlock();
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
        <h3 className="text-2xl font-bold mb-2 text-[#4E5674]">
          Access {toolName}
        </h3>

        <p className="text-sm text-[#64748b] mb-6">
          Enter your details to use this free tool
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <FormField
            label="Full Name *"
            error={errors.name}
            placeholder="John Doe"
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
          />

          {/* Email */}
          <FormField
            label="Work Email *"
            error={errors.email}
            placeholder="john@company.com"
            type="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
          />

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-[#4E5674] mb-2">
              WhatsApp Number *
            </label>

            <div className="flex gap-2">
              <select
                className="h-10 px-3 rounded-lg border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500"
                value={formData.countryCode}
                onChange={(e) =>
                  setFormData({ ...formData, countryCode: e.target.value })
                }
              >
                {countryCodes.map(({ code, country }) => (
                  <option key={code} value={code}>
                    {code} {country}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                className={`h-10 flex-1 px-3 rounded-lg border text-sm ${
                  errors.whatsapp
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } bg-white focus:ring-2`}
                placeholder="1234567890"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
              />
            </div>

            {errors.whatsapp && (
              <p className="text-red-600 text-xs mt-1">{errors.whatsapp}</p>
            )}
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-[#4E5674] mb-2">
              Industry *
            </label>

            <select
              className={`h-10 w-full px-3 rounded-lg border text-sm ${
                errors.industry
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              } bg-white focus:ring-2`}
              value={formData.industry}
              onChange={(e) =>
                setFormData({ ...formData, industry: e.target.value })
              }
            >
              {industries.map((industry) => (
                <option key={industry.value} value={industry.value}>
                  {industry.label}
                </option>
              ))}
            </select>

            {errors.industry && (
              <p className="text-red-600 text-xs mt-1">{errors.industry}</p>
            )}
          </div>

          {/* Banned Section */}
          {isBanned && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-medium text-red-700">
                We cannot support this category.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isBanned}
            className={`w-full h-11 rounded-lg text-white text-sm font-semibold bg-[#5865F2] hover:bg-[#4752C4] transition-all ${
              isBanned ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Access Tool
          </button>
        </form>
      </div>
    </div>
  );
};

type FormFieldProps = {
  label: string;
  error?: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
};

const FormField = ({
  label,
  error,
  value,
  placeholder,
  type = "text",
  onChange,
}: FormFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-[#4E5674] mb-2">
      {label}
    </label>

    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`h-10 w-full px-3 rounded-lg border text-sm bg-white focus:ring-2 ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
    />

    {error && (
      <p className="text-red-600 text-xs mt-1">{error}</p>
    )}
  </div>
);
