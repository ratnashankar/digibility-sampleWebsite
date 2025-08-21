
"use client";

import { useEffect, useState, useRef } from "react";

type FormState = {
    name: string;
    email: string;
    phone: string;
    role: string;
    linkedin: string;
    portfolio?: string;
    cover?: string;
    resume?: File | null;
    // honeypot anti-spam
    company?: string;
};

const rolesForSelect = [
    "Lead Backend Engineer (Node.js/TypeScript)",
    "AI/ML Engineer (GenAI, RAG, Vision)",
    "Senior Frontend Engineer (React/Next.js)",
    "Product Manager (Automation & UX)",
    "Content Strategist (Social + SEO)",
    "Product Designer / Design Lead",
    "Growth Marketer (Performance + SEO)",
    "Internship (Engineering / Design / Content / Growth)",
];

export default function CareersClient() {
    const resumeInputRef = useRef<HTMLInputElement | null>(null);

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        role: "",
        linkedin: "",
        portfolio: "",
        cover: "",
        resume: null,
        company: "", // honeypot
    });
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (toast) {
            const t = setTimeout(() => setToast(null), 4000);
            return () => clearTimeout(t);
        }
    }, [toast]);

    const onChange =
        (k: keyof FormState) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
                if (k === "resume" && "files" in e.target) {
                    const input = e.target as HTMLInputElement;
                    setForm((p) => ({ ...p, resume: input.files?.[0] ?? null }));
                    return;
                }
                setForm((p) => ({ ...p, [k]: e.target.value }));
            };

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!form.name.trim()) errs.name = "Please enter your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
        if (!form.role) errs.role = "Select a role.";
        if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/i.test(form.linkedin))
            errs.linkedin = "Provide a valid LinkedIn profile URL.";
        // Phone optional but if present, basic check
        if (form.phone && !/^[+0-9\-()\s]{7,}$/.test(form.phone)) errs.phone = "Enter a valid phone.";
        if (!form.resume) errs.resume = "Please attach your resume (PDF preferred).";
        // Honeypot
        if (form.company && form.company.trim().length > 0) errs.company = "Spam detected.";
        return errs;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        try {
            setSubmitting(true);

            // NOTE: This is a front-end only placeholder.
            // Wire this to your backend or a form service (e.g., Next.js route handler, Airtable, Google Forms, Make/Zapier, or EmailJS).
            // Example (pseudo):
            // const fd = new FormData();
            // Object.entries(form).forEach(([k, v]) => v && fd.append(k, v as any));
            // await fetch("/api/apply", { method: "POST", body: fd });

            setToast("Your application has been received — our team will connect back within 48 business hours.");
            setForm({
                name: "",
                email: "",
                phone: "",
                role: "",
                linkedin: "",
                portfolio: "",
                cover: "",
                resume: null,
                company: "",
            });

            // ✅ clear file input with ref instead of getElementById
            if (resumeInputRef.current) {
                resumeInputRef.current.value = "";
            }

            setErrors({});
        } catch {
            setToast("Something went wrong. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <section id="apply" className="max-w-3xl mx-auto px-6 pb-16">
            <h2 className="text-2xl font-semibold text-gray-900">Apply Now</h2>
            <p className="text-gray-600">
                Fill in your details. Mandatory fields are marked with <span className="text-red-600">*</span>.
            </p>

            <form onSubmit={onSubmit} className="mt-6 bg-white rounded-2xl border shadow p-6 space-y-5">
                {/* Honeypot (hidden) */}
                <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange("company")}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={onChange("name")}
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            placeholder="Your full name"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "err-name" : undefined}
                            required
                        />
                        {errors.name && <p id="err-name" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={onChange("email")}
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            placeholder="you@company.com"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "err-email" : undefined}
                            required
                        />
                        {errors.email && <p id="err-email" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            value={form.phone}
                            onChange={onChange("phone")}
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            placeholder="+91 98xxxxxxx"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "err-phone" : undefined}
                        />
                        {errors.phone && <p id="err-phone" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Role <span className="text-red-600">*</span>
                        </label>
                        <select
                            value={form.role}
                            onChange={onChange("role")}
                            className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
                            aria-invalid={!!errors.role}
                            aria-describedby={errors.role ? "err-role" : undefined}
                            required
                        >
                            <option value="">Select a role</option>
                            {rolesForSelect.map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                        {errors.role && <p id="err-role" className="mt-1 text-xs text-red-600">{errors.role}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            LinkedIn Profile <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="url"
                            value={form.linkedin}
                            onChange={onChange("linkedin")}
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            placeholder="https://www.linkedin.com/in/your-profile"
                            aria-invalid={!!errors.linkedin}
                            aria-describedby={errors.linkedin ? "err-linkedin" : undefined}
                            required
                        />
                        {errors.linkedin && <p id="err-linkedin" className="mt-1 text-xs text-red-600">{errors.linkedin}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Portfolio / GitHub (optional)</label>
                        <input
                            type="url"
                            value={form.portfolio}
                            onChange={onChange("portfolio")}
                            className="mt-1 w-full rounded-lg border px-3 py-2"
                            placeholder="https://dribbble.com/you or https://github.com/you"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Cover Letter (optional)</label>
                    <textarea
                        value={form.cover}
                        onChange={onChange("cover")}
                        className="mt-1 w-full rounded-lg border px-3 py-2 min-h-[120px]"
                        placeholder="Tell us why you’re a great fit…"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Resume <span className="text-red-600">*</span>
                    </label>
                    <input
                        ref={resumeInputRef}
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={onChange("resume")}
                        className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
                        aria-invalid={!!errors.resume}
                        aria-describedby={errors.resume ? "err-resume" : undefined}
                        required
                    />

                    {errors.resume && <p id="err-resume" className="mt-1 text-xs text-red-600">{errors.resume}</p>}
                    <p className="text-xs text-gray-500 mt-1">PDF preferred. Max 5MB (enforced server‑side).</p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60"
                    >
                        {submitting ? "Submitting…" : "Submit Application"}
                    </button>
                    <span className="text-sm text-gray-500">
                        We’ll respond within <strong>48 business hours</strong>.
                    </span>
                </div>
            </form>

            {/* Toast */}
            {toast && (
                <div
                    role="status"
                    className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg"
                >
                    {toast}
                </div>
            )}
        </section>
    );
}