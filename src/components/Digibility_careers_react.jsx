import React, { useEffect, useMemo, useRef, useState } from "react";
import { Briefcase, Search, Filter, MapPin, Send, Upload, CheckCircle2, AlertCircle, GraduationCap, Building2, Sparkles, ShieldCheck, Rocket, Mail, Linkedin, FileText, User, Phone, Link2, X, ChevronDown, ChevronRight } from "lucide-react";

const ROLES = [
  {
    id: "fe-react",
    title: "Frontend Developer (React / Next.js)",
    department: "Engineering & Product",
    level: "Mid–Senior",
    location: "Remote / Pune (Hybrid)",
    type: "Full-time",
    summary: "Build intuitive, high-performance UIs for our AI-first marketing platform.",
    responsibilities: [
      "Ship polished React/Next.js features with excellent UX & accessibility.",
      "Integrate APIs, auth, and analytics; maintain component libraries.",
      "Partner with PM/Design to iterate quickly and A/B test ideas.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "REST/GraphQL", "Performance", "Testing"],
    experience: "2–6 years",
    tags: ["react", "frontend", "nextjs", "typescript"],
  },
  {
    id: "be-node",
    title: "Backend Developer (Node.js / Python)",
    department: "Engineering & Product",
    level: "Mid–Senior",
    location: "Remote / Pune (Hybrid)",
    type: "Full-time",
    summary: "Design scalable APIs, services, and integrations with social/ad platforms.",
    responsibilities: [
      "Build secure REST/GraphQL services, webhooks, and schedulers.",
      "Own data models, queues, and observability (logs, metrics, alerts).",
      "Integrate Meta, Google, LinkedIn APIs for posting & analytics.",
    ],
    skills: ["Node.js", "Python", "PostgreSQL", "Redis/Queues", "AWS/GCP", "OAuth", "Security"],
    experience: "3–7 years",
    tags: ["backend", "node", "python", "api"],
  },
  {
    id: "ml-engineer",
    title: "AI/ML Engineer (NLP / GenAI)",
    department: "Engineering & Product",
    level: "Mid–Senior",
    location: "Remote / Pune (Hybrid)",
    type: "Full-time",
    summary: "Build AI services for analysis, content generation, and optimization.",
    responsibilities: [
      "Design prompt chains, RAG, evaluation harnesses, and safety guardrails.",
      "Experiment with multimodal models for images/reels; track cost/latency.",
      "Collaborate with PM to translate marketing outcomes into ML objectives.",
    ],
    skills: ["Python", "LLMs", "Prompt Eng", "Vector DBs", "Eval", "MLOps", "OpenAI/Tools"],
    experience: "2–6 years",
    tags: ["ml", "genai", "nlp"],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Engineering & Product",
    level: "Mid–Senior",
    location: "Remote / Pune (Hybrid)",
    type: "Full-time",
    summary: "Own roadmap from MVP to scale. Ship outcomes, not just features.",
    responsibilities: [
      "Define PRDs, success metrics, and phased rollouts (lean, fast).",
      "Coordinate across design, eng, marketing; run discovery & experiments.",
      "Prioritize automation to replace manual ops step-by-step.",
    ],
    skills: ["Roadmapping", "Metrics", "UX", "A/B", "APIs", "Agile"],
    experience: "3–7 years",
    tags: ["product", "pm"],
  },
  {
    id: "seo-specialist",
    title: "SEO Specialist",
    department: "Marketing & Growth",
    level: "Mid",
    location: "Remote",
    type: "Full-time",
    summary: "Drive organic growth with technical SEO, content strategy, and analytics.",
    responsibilities: [
      "Conduct audits, keyword research, on-page and technical fixes.",
      "Brief content; monitor rankings; automate reporting dashboards.",
      "Collaborate with PM/Eng for SEO-friendly structures & performance.",
    ],
    skills: ["Technical SEO", "GSC", "GA4", "Keyword Research", "Link Building"],
    experience: "2–5 years",
    tags: ["seo", "growth"],
  },
  {
    id: "ppc-manager",
    title: "PPC & Paid Ads Manager",
    department: "Marketing & Growth",
    level: "Mid–Senior",
    location: "Remote",
    type: "Full-time",
    summary: "Plan, launch, and optimize PPC campaigns across Google/Meta/LinkedIn.",
    responsibilities: [
      "Structure accounts, write creatives, and manage budgets & ROAS.",
      "Run experiments, audiences, and conversion tracking/GTM.",
      "Report insights; collaborate on creative testing funnels.",
    ],
    skills: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GTM", "Attribution"],
    experience: "3–7 years",
    tags: ["ppc", "ads"],
  },
  {
    id: "content-strategist",
    title: "Content Strategist & Writer",
    department: "Marketing & Growth",
    level: "Mid",
    location: "Remote",
    type: "Full-time",
    summary: "Craft high‑impact content for social, blogs, and campaigns.",
    responsibilities: [
      "Develop content calendars based on AI insights and brand voice.",
      "Write copy for posts, ads, blogs; collaborate with designers.",
      "Ensure consistency, accuracy, and measurable engagement.",
    ],
    skills: ["Copywriting", "Social", "Blogs", "SEO Basics", "AI Tools"],
    experience: "2–5 years",
    tags: ["content", "writing"],
  },
  {
    id: "designer",
    title: "Graphic/Motion Designer",
    department: "Marketing & Growth",
    level: "Mid",
    location: "Remote",
    type: "Full-time",
    summary: "Create static, carousel, and short‑form video creatives.",
    responsibilities: [
      "Design brand‑aligned visuals for multi‑channel distribution.",
      "Explore motion/animation for reels; optimize for engagement.",
      "Maintain design systems and templates for scale.",
    ],
    skills: ["Figma", "Adobe Suite", "Motion", "Branding", "Social Formats"],
    experience: "2–5 years",
    tags: ["design", "motion"],
  },
  {
    id: "account-manager",
    title: "Client Account Manager",
    department: "Client Success & Ops",
    level: "Mid",
    location: "Remote / Pune (Hybrid)",
    type: "Full-time",
    summary: "Own client outcomes, approvals, and upsell opportunities.",
    responsibilities: [
      "Lead onboarding, approvals, and weekly reporting cadence.",
      "Translate insights into actionable next‑month strategies.",
      "Champion client voice across product and ops.",
    ],
    skills: ["Communication", "Strategy", "Analytics", "CRM"],
    experience: "3–6 years",
    tags: ["account", "success"],
  },
  {
    id: "support-exec",
    title: "Customer Support Executive",
    department: "Client Success & Ops",
    level: "Junior–Mid",
    location: "Remote / Pune (Hybrid)",
    type: "Full-time",
    summary: "Deliver timely support across email/chat; ensure high CSAT.",
    responsibilities: [
      "Triage tickets; document solutions; escalate effectively.",
      "Proactively follow up on approvals and account access.",
      "Capture product feedback for continuous improvement.",
    ],
    skills: ["Helpdesk", "Comms", "Docs", "SLA"],
    experience: "1–4 years",
    tags: ["support", "ops"],
  },
  {
    id: "intern-se",
    title: "Software Engineering Intern (6 months)",
    department: "Internships",
    level: "Internship",
    location: "Remote / Pune (Hybrid)",
    type: "Internship (6 months; PPO potential)",
    summary: "Learn by building real features in a mentored environment.",
    responsibilities: [
      "Contribute to frontend/backend tasks with guidance.",
      "Write clean code, tests, and documentation.",
      "Participate in reviews and standups; ship iteratively.",
    ],
    skills: ["JavaScript", "React/Node", "Git", "Basics of APIs/DBs"],
    experience: "Final‑year / recent graduate",
    tags: ["intern", "se"],
  },
  {
    id: "intern-marketing",
    title: "Marketing Intern (6 months)",
    department: "Internships",
    level: "Internship",
    location: "Remote / Pune (Hybrid)",
    type: "Internship (6 months; PPO potential)",
    summary: "Support content, social, SEO, and campaign ops.",
    responsibilities: [
      "Draft posts/articles; research keywords/competitors.",
      "Assist with reporting dashboards and asset management.",
      "Coordinate approvals and schedules with account managers.",
    ],
    skills: ["Content", "Social", "Basic SEO", "Analytics"],
    experience: "Student / fresher",
    tags: ["intern", "marketing"],
  },
];

const DEPARTMENTS = ["Engineering & Product", "Marketing & Growth", "Client Success & Ops", "Internships"];
const LEVELS = ["Junior", "Junior–Mid", "Mid", "Mid–Senior", "Senior", "Internship"];
const LOCATIONS = ["Remote", "Remote / Pune (Hybrid)", "Pune (Onsite)"];

function classNames(...xs){ return xs.filter(Boolean).join(" "); }

function highlight(text, query){
  if(!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if(idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + query.length);
  const after = text.slice(idx + query.length);
  return (<>{before}<mark className="bg-yellow-200 rounded px-0.5">{match}</mark>{highlight(after, query)}</>);
}
export default function CareersPage(){
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("");
  const [lvl, setLvl] = useState("");
  const [loc, setLoc] = useState("");
  const [open, setOpen] = useState({});
  const formRef = useRef(null);

  const results = useMemo(()=>{
    const k = q.toLowerCase();
    return ROLES.filter(r => (
      (!dept || r.department === dept) &&
      (!lvl || r.level === lvl) &&
      (!loc || r.location.includes(loc)) &&
      (!k || [r.title, r.summary, r.skills.join(" "), r.responsibilities.join(" ")].join(" ").toLowerCase().includes(k))
    ));
  }, [q, dept, lvl, loc]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    locationPref: "Remote",
    linkedin: "",
    portfolio: "",
    experienceYears: "",
    skills: "",
    note: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onApply = (roleId) => {
    const role = ROLES.find(r=>r.id===roleId);
    setForm(f => ({ ...f, role: role?.title || f.role }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const validate = () => {
    const emailOk = /.+@.+\..+/.test(form.email);
    const phoneOk = form.phone.length >= 7;
    const urlOk = (u) => !u || /^https?:\/\//i.test(u);
    const roleOk = !!form.role;
    const fileOk = resumeFile && ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(resumeFile.type) && resumeFile.size <= 5*1024*1024;
    if(!emailOk) return "Please enter a valid email.";
    if(!phoneOk) return "Please enter a valid phone number.";
    if(!roleOk) return "Please select the role you're applying for.";
    if(!urlOk(form.linkedin)) return "LinkedIn URL must start with http(s)://";
    if(form.portfolio && !urlOk(form.portfolio)) return "Portfolio/GitHub URL must start with http(s)://";
    if(!fileOk) return "Please upload a resume (PDF/DOC/DOCX, max 5MB).";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); setSuccess(null);
    const v = validate();
    if(v){ setError(v); return; }
    setSubmitting(true);

    try{
      const payload = { ...form, resumeName: resumeFile.name, submittedAt: new Date().toISOString() };
      const key = 'digibility_careers_apps';
      const prev = JSON.parse(localStorage.getItem(key) || '[]');
      prev.push(payload);
      localStorage.setItem(key, JSON.stringify(prev));
      setSuccess(`Thank you, ${form.name || 'applicant'}! Your application has been received. Our team will connect back soon.`);
      setForm({ name:"", email:"", phone:"", role:"", locationPref:"Remote", linkedin:"", portfolio:"", experienceYears:"", skills:"", note:"" });
      setResumeFile(null);
      if(formRef.current){ formRef.current.reset(); }
    }catch(err){
      setError("Something went wrong while saving your application. Please try again.");
    }finally{
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-6 pt-[10vh] pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Build the Future of AI‑Powered Digital Marketing</h1>
            <p className="text-gray-600 mt-3">Join Digibility on our mission to democratize digital marketing with AI‑first automation. We move fast, learn faster, and ship value weekly.</p>
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 inline-flex items-center gap-1"><Sparkles className="w-4 h-4"/> AI‑first</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> Human‑in‑the‑Loop</span>
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 inline-flex items-center gap-1"><Rocket className="w-4 h-4"/> Fast & Lean</span>
            </div>
          </div>
          <div className="bg-white border rounded-2xl p-5 shadow-sm">
            <div className="font-semibold mb-2 flex items-center gap-2"><Building2 className="w-5 h-5"/> Why work with us</div>
            <ul className="text-gray-700 list-disc ml-5 space-y-1">
              <li>Work on cutting-edge AI + marketing problems with global impact.</li>
              <li>Flexible remote/hybrid culture with strong mentorship.</li>
              <li>Meritocratic growth, ownership, and learning budget.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="bg-white border rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 font-semibold mb-3"><Filter className="w-5 h-5"/> Find your role</div>
          <div className="grid md:grid-cols-12 gap-3">
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/>
              <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search by keyword (e.g., React, PPC, SEO)" className="w-full pl-9 pr-3 py-2 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"/>
            </div>
            <div className="md:col-span-3">
              <select value={dept} onChange={(e)=>setDept(e.target.value)} className="w-full px-3 py-2 rounded-xl border bg-white">
                <option value="">Department</option>
                {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="md:col-span-3">
              <select value={lvl} onChange={(e)=>setLvl(e.target.value)} className="w-full px-3 py-2 rounded-xl border bg-white">
                <option value="">Level</option>
                {LEVELS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <select value={loc} onChange={(e)=>setLoc(e.target.value)} className="w-full px-3 py-2 rounded-xl border bg-white">
                <option value="">Location</option>
                {LOCATIONS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-2">{results.length} role{results.length!==1?'s':''} found</div>
        </div>
      </section>

      {/* Roles list */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid gap-3">
          {results.map(r => {
            const isOpen = !!open[r.id];
            return (
              <article key={r.id} className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                <header className="p-4 flex items-start justify-between gap-4 cursor-pointer" onClick={()=> setOpen(o => ({ ...o, [r.id]: !isOpen }))}>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{highlight(r.title, q)}</h3>
                    <div className="text-sm text-gray-600 mt-0.5">{highlight(r.summary, q)}</div>
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-700">
                      <span className="px-2 py-1 rounded-full bg-gray-50 border inline-flex items-center gap-1"><Briefcase className="w-3.5 h-3.5"/>{r.type}</span>
                      <span className="px-2 py-1 rounded-full bg-gray-50 border inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/>{r.location}</span>
                      <span className="px-2 py-1 rounded-full bg-gray-50 border">{r.department}</span>
                      <span className="px-2 py-1 rounded-full bg-gray-50 border">{r.level}</span>
                    </div>
                  </div>
                  {isOpen ? <ChevronDown className="w-5 h-5 text-gray-500"/> : <ChevronRight className="w-5 h-5 text-gray-500"/>}
                </header>
                {isOpen && (
                  <div className="px-5 pb-5 border-t grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="font-medium">Responsibilities</div>
                      <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
                        {r.responsibilities.map((it, i)=>(<li key={i}>{highlight(it, q)}</li>))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium">Skills</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {r.skills.map((s,i)=>(<span key={i} className="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs">{highlight(s, q)}</span>))}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Experience</div>
                      <div className="mt-2 text-gray-700">{r.experience}</div>
                      <button onClick={()=> onApply(r.id)} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm"><Send className="w-4 h-4"/> Apply</button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Internship section */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="bg-white border rounded-2xl p-6 shadow-sm grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-semibold"><GraduationCap className="w-5 h-5"/> Internship Program</div>
            <p className="text-gray-700 mt-2">We offer <strong>6‑month internships</strong> with mentorship, real projects, and a chance for a <strong>full‑time offer (PPO)</strong> upon successful completion.</p>
          </div>
          <ul className="md:col-span-3 list-disc ml-5 text-gray-700 space-y-1">
            <li>Open tracks: Software Engineering, Marketing, Design, Content.</li>
            <li>Eligibility: Final‑year students & recent graduates.</li>
            <li>Location: Remote/Hybrid (Pune).</li>
          </ul>
        </div>
      </section>

      {/* Application form */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 font-semibold"><Briefcase className="w-5 h-5"/> Apply Now</div>
          <p className="text-gray-600 mt-1">Fill in your details below. Your information will be securely shared with our hiring team.</p>

          {error && (
            <div className="mt-3 p-3 rounded-xl border bg-rose-50 text-rose-800 text-sm flex items-start gap-2"><AlertCircle className="w-4 h-4 mt-0.5"/> {error}</div>
          )}
          {success && (
            <div className="mt-3 p-3 rounded-xl border bg-emerald-50 text-emerald-800 text-sm flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5"/> {success}</div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="mt-4 grid md:grid-cols-2 gap-4">
            <label className="text-sm">
              <div className="text-gray-700 mb-1">Full Name</div>
              <div className="relative"><User className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/><input value={form.name} onChange={(e)=>setForm(f=>({...f, name:e.target.value}))} className="w-full pl-9 pr-3 py-2 rounded-xl border" placeholder="Your full name" required/></div>
            </label>
            <label className="text-sm">
              <div className="text-gray-700 mb-1">Email</div>
              <div className="relative"><Mail className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/><input type="email" value={form.email} onChange={(e)=>setForm(f=>({...f, email:e.target.value}))} className="w-full pl-9 pr-3 py-2 rounded-xl border" placeholder="name@company.com" required/></div>
            </label>
            <label className="text-sm">
              <div className="text-gray-700 mb-1">Phone</div>
              <div className="relative"><Phone className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/><input value={form.phone} onChange={(e)=>setForm(f=>({...f, phone:e.target.value}))} className="w-full pl-9 pr-3 py-2 rounded-xl border" placeholder="+91‑XXXXXXXXXX" required/></div>
            </label>
            <label className="text-sm">
              <div className="text-gray-700 mb-1">Role Applying For</div>
              <select value={form.role} onChange={(e)=>setForm(f=>({...f, role:e.target.value}))} className="w-full px-3 py-2 rounded-xl border bg-white" required>
                <option value="">Select a role</option>
                {ROLES.map(r => <option key={r.id} value={r.title}>{r.title}</option>)}
              </select>
            </label>
            <label className="text-sm">
              <div className="text-gray-700 mb-1">Location Preference</div>
              <select value={form.locationPref} onChange={(e)=>setForm(f=>({...f, locationPref:e.target.value}))} className="w-full px-3 py-2 rounded-xl border bg-white">
                {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </label>
            <label className="text-sm">
              <div className="text-gray-700 mb-1">Years of Experience</div>
              <input value={form.experienceYears} onChange={(e)=>setForm(f=>({...f, experienceYears:e.target.value}))} className="w-full px-3 py-2 rounded-xl border" placeholder="e.g., 3"/>
            </label>
            <label className="text-sm md:col-span-2">
              <div className="text-gray-700 mb-1">LinkedIn Profile URL</div>
              <div className="relative"><Link2 className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/><input value={form.linkedin} onChange={(e)=>setForm(f=>({...f, linkedin:e.target.value}))} className="w-full pl-9 pr-3 py-2 rounded-xl border" placeholder="https://www.linkedin.com/in/username" required/></div>
            </label>
            <label className="text-sm md:col-span-2">
              <div className="text-gray-700 mb-1">Portfolio / GitHub (optional)</div>
              <div className="relative"><Link2 className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"/><input value={form.portfolio} onChange={(e)=>setForm(f=>({...f, portfolio:e.target.value}))} className="w-full pl-9 pr-3 py-2 rounded-xl border" placeholder="https://…"/></div>
            </label>
            <label className="text-sm md:col-span-2">
              <div className="text-gray-700 mb-1">Key Skills (comma-separated)</div>
              <input value={form.skills} onChange={(e)=>setForm(f=>({...f, skills:e.target.value}))} className="w-full px-3 py-2 rounded-xl border" placeholder="React, Node, SEO, GA4, Copywriting"/>
            </label>
            <label className="text-sm md:col-span-2">
              <div className="text-gray-700 mb-1">Short Note – Why Digibility?</div>
              <textarea value={form.note} onChange={(e)=>setForm(f=>({...f, note:e.target.value}))} className="w-full px-3 py-2 rounded-xl border" rows={4} placeholder="Tell us briefly why you’d be a great fit…"/>
            </label>

            {/* Resume upload */}
            <div className="md:col-span-2">
              <div className="text-gray-700 mb-1 text-sm">Upload Resume (PDF/DOC/DOCX, max 5MB)</div>
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-gray-50 hover:bg-gray-100 cursor-pointer">
                  <Upload className="w-4 h-4"/>
                  <span className="text-sm">Choose file</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e)=> setResumeFile(e.target.files?.[0] || null)} />
                </label>
                {resumeFile && (
                  <div className="flex items-center gap-2 text-sm bg-white border rounded-xl px-3 py-2">
                    <FileText className="w-4 h-4"/>
                    <span className="max-w-[260px] truncate">{resumeFile.name}</span>
                    <button type="button" onClick={()=> setResumeFile(null)} className="text-gray-500 hover:text-gray-700"><X className="w-4 h-4"/></button>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2 flex items-center gap-3 pt-2">
              <button disabled={submitting} className={classNames("px-4 py-2 rounded-xl text-white inline-flex items-center gap-2", submitting?"bg-gray-400":"bg-emerald-600 hover:bg-emerald-700")}>
                <Send className="w-4 h-4"/> {submitting?"Submitting…":"Submit Application"}
              </button>
              <div className="text-xs text-gray-600">By submitting, you agree to our <a className="underline" href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>. We’ll contact you via email/phone if shortlisted.</div>
          </div>
          </form>
        </div>
      </section>

      {/* Footer/legal strips */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white border rounded-2xl p-4">
            <div className="font-semibold">Equal Opportunity</div>
            <p className="text-gray-600 mt-1">Digibility is an equal‑opportunity employer. We celebrate diversity and are committed to an inclusive environment for all employees.</p>
          </div>
          <div className="bg-white border rounded-2xl p-4">
            <div className="font-semibold">Accessibility</div>
            <p className="text-gray-600 mt-1">Need accommodation for the application or interview process? Write to <a className="underline" href="mailto:careers@digibility.com">careers@digibility.com</a>.</p>
          </div>
          <div className="bg-white border rounded-2xl p-4">
            <div className="font-semibold">Fraud Alert</div>
            <p className="text-gray-600 mt-1">We never request payment at any stage of hiring. Report suspicious messages to <a className="underline" href="mailto:safety@digibility.com">safety@digibility.com</a>.</p>
          </div>
        </div>
      </section>
 </div>
  );
}
