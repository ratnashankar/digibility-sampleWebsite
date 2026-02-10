"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  Check, 
  Zap, 
  Diamond, 
  Rocket, 
  Info, 
  ChevronDown, 
  Star,
  ShieldCheck,
  TrendingUp,
  Mail,
  Smartphone,
  PieChart,
  Cpu,
  ArrowRight,
  Sparkles
} from 'lucide-react';

/**
 * 🎨 PREMIUM SAAS PRICING UI
 * Everything contained in one single file.
 */

const App: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing Data
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 4999,
      description: 'For solo founders and small brands',
      icon: <Zap className="w-6 h-6 text-[#4361EE]" />,
      color: 'bg-blue-50',
      btn: 'bg-white border-2 border-[#4361EE] text-[#4361EE] hover:bg-blue-50',
      features: [
        '2 social profiles',
        '30-day content calendar',
        '12 AI-generated posts/month',
        'ROI dashboard',
        'Best-time posting',
        'Email support'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 9999,
      recommended: true,
      description: 'For growing teams that need more reach',
      icon: <Diamond className="w-6 h-6 text-white" />,
      color: 'bg-gradient-to-br from-[#4361EE] to-[#3A0CA3]',
      btn: 'bg-gradient-to-r from-[#4361EE] to-[#3A86FF] text-white shadow-lg shadow-blue-500/40',
      features: [
        '4 social profiles',
        'Everything in Starter',
        'Advanced reporting & analytics',
        'Priority content review',
        'A/B testing',
        'Priority support'
      ]
    },
    {
      id: 'scale',
      name: 'Scale',
      price: 19999,
      description: 'For agencies and high-volume brands',
      icon: <Rocket className="w-6 h-6 text-[#3A0CA3]" />,
      color: 'bg-slate-50',
      btn: 'bg-[#1F2E66] text-white hover:bg-[#15204d] shadow-lg shadow-slate-900/20',
      features: [
        '6+ social profiles',
        'Everything in Growth',
        'Team workspaces & permissions',
        'Dedicated success manager',
        'Custom integrations',
        'SLA & phone support'
      ]
    }
  ];

  // FAQ Data
  const faqs = [
    {
      q: "How does billing work?",
      a: "We offer both monthly and annual billing. Monthly plans are billed every 30 days, while annual plans are billed once per year with a significant discount. All payments are processed securely through Stripe."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. You can cancel your subscription at any time through your dashboard. Once canceled, your plan will remain active until the end of the current billing cycle."
    },
    {
      q: "Do you provide invoices with GST?",
      a: "Yes, we provide fully compliant GST invoices. You can add your business details and GSTIN in your profile settings to have them automatically included in every invoice."
    },
    {
      q: "What happens after my trial ends?",
      a: "After your 14-day free trial, you'll be automatically moved to our Starter plan unless you choose a different tier. We'll send you a reminder email 3 days before your trial ends."
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 🌌 Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/10 blur-2xl"
            style={{
              width: Math.random() * 250 + 50,
              height: Math.random() * 250 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Textured Overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234361EE' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 1️⃣ HERO PRICING HEADER */}
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-[11px] font-black uppercase tracking-[0.15em] text-blue-600">Premium Subscription Plans</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-[900] text-[#1F2E66] tracking-tight leading-[1.1] mb-8">
              Plans that scale with <br />
              <span className="gradient-text-indigo">your goals</span>
            </h1>
            
            <p className="text-gray-500 font-semibold text-lg max-w-2xl mx-auto mb-12">
              Simple tiers. 14-day free trial. Cancel anytime. <br />
              Everything you need to grow your social presence in one place.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative p-1.5 glass-card-white rounded-[1.5rem] flex items-center shadow-xl shadow-blue-900/5 border border-white/50">
                <LayoutGroup>
                  <button
                    onClick={() => setIsYearly(false)}
                    className={`relative px-10 py-3.5 text-xs font-black uppercase tracking-widest transition-all z-10 ${!isYearly ? 'text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setIsYearly(true)}
                    className={`relative px-10 py-3.5 text-xs font-black uppercase tracking-widest transition-all z-10 ${isYearly ? 'text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    Annual
                  </button>
                  <motion.div
                    layoutId="toggle-bg"
                    className="absolute h-[calc(100%-12px)] rounded-xl gradient-bg-main shadow-lg shadow-blue-500/30"
                    style={{
                      width: 'calc(50% - 6px)',
                      left: isYearly ? 'calc(50% + 0px)' : '6px',
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </LayoutGroup>
              </div>
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="bg-green-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.1em] shadow-lg shadow-green-500/20 border border-green-400/30"
              >
                SAVE 20% WITH ANNUAL
              </motion.div>
            </div>
          </motion.div>
        </header>

        {/* 2️⃣ THREE PRICING PLANS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 px-2">
          {plans.map((plan, idx) => {
            const currentPrice = isYearly ? Math.floor(plan.price * 0.8) : plan.price;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -12 }}
                className={`relative p-10 rounded-[2.5rem] flex flex-col h-full border transition-all duration-500 overflow-hidden group
                  ${plan.recommended 
                    ? 'glass-card-white border-blue-400/30 shadow-[0_20px_50px_rgba(67,97,238,0.1)] neon-glow-blue' 
                    : 'glass-card-white border-blue-100 shadow-2xl shadow-blue-900/5'}
                `}
              >
                {/* Glowing Popular Badge */}
                {plan.recommended && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-[#4361EE] to-[#3A86FF] text-white text-[9px] font-black uppercase tracking-[0.2em] py-2 px-6 rounded-bl-3xl flex items-center gap-2 shadow-xl">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-10">
                  <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center ${plan.color} shadow-inner transform group-hover:scale-110 transition-transform duration-500`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-3xl font-[900] text-[#1F2E66] mb-3 tracking-tight">{plan.name}</h3>
                  <p className="text-gray-500 text-sm font-semibold leading-relaxed">{plan.description}</p>
                </div>

                {/* Pricing Display */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-[900] text-[#1F2E66]">₹{currentPrice.toLocaleString()}</span>
                    <span className="text-gray-400 font-bold text-lg">/mo</span>
                  </div>
                  <AnimatePresence mode="wait">
                    {isYearly && (
                      <motion.p 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="text-xs font-black text-green-500 mt-2 tracking-wide"
                      >
                        BILLED ANNUALLY (₹{(currentPrice * 12).toLocaleString()}/yr)
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Feature Divider */}
                <div className="w-full h-px bg-blue-100/50 mb-8" />

                {/* Features List */}
                <div className="flex-grow space-y-4 mb-12">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3.5 group/feature">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center group-hover/feature:bg-blue-100 transition-colors">
                        <Check className="w-3 h-3 text-[#4361EE]" />
                      </div>
                      <span className="text-gray-600 text-sm font-semibold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Main CTA */}
                <button className={`w-full py-5 px-8 rounded-2xl font-[900] text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shine-effect flex items-center justify-center gap-2 group/btn ${plan.btn}`}>
                  Get Started 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Plan-specific accents */}
                {plan.recommended && (
                  <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                )}
              </motion.div>
            );
          })}
        </section>

        {/* 3️⃣ FREE TRIAL INFO BOX */}
        <section className="max-w-4xl mx-auto mb-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-white rounded-[3rem] p-10 md:p-14 border border-blue-100 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group"
          >
            <div className="flex items-center gap-8 relative z-10 text-center md:text-left">
              <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-blue-500 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Info className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-3xl font-[900] text-[#1F2E66] mb-3">14-Day Free Trial Includes</h3>
                <p className="text-gray-500 font-semibold max-w-sm leading-relaxed">
                  Brand analysis, 30-day content calendar, and initial content review. Start growing today.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6 relative z-10">
              <a href="#" className="flex items-center gap-3 text-[#4361EE] font-[900] uppercase text-[11px] tracking-[0.2em] hover:text-[#3A0CA3] transition-colors group/link underline-offset-4 hover:underline">
                How do credits work?
                <ChevronDown className="w-4 h-4 -rotate-90 group-hover/link:translate-x-1 transition-transform" />
              </a>
              <button className="bg-white px-8 py-3.5 rounded-xl border border-blue-100 text-[#1F2E66] font-black text-xs uppercase tracking-widest shadow-sm hover:shadow-md transition-all">
                Try for Free
              </button>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none group-hover:-translate-x-10 group-hover:translate-y-10 transition-transform duration-1000" />
          </motion.div>
        </section>

        {/* FEATURE GRID PREVIEW */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[900] text-[#1F2E66] mb-6">Powerful tools for elite marketing</h2>
            <div className="w-24 h-1.5 gradient-bg-main mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp />, title: "ROI Dashboard" },
              { icon: <ShieldCheck />, title: "SLA Guaranteed" },
              { icon: <PieChart />, title: "Deep Analytics" },
              { icon: <Cpu />, title: "AI Generation" },
              { icon: <Mail />, title: "Smart Inbox" },
              { icon: <Smartphone />, title: "Mobile Optimized" },
              { icon: <Sparkles />, title: "Brand Engine" },
              { icon: <Star />, title: "Priority Support" },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 glass-card-white rounded-[2rem] border-blue-50 text-center flex flex-col items-center gap-6 hover:shadow-xl hover:border-blue-100 transition-all cursor-default"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110">
                  {/* Fixed TypeScript error by casting to React.ReactElement<any> */}
                  {React.cloneElement(feat.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                </div>
                <span className="font-black text-[#1F2E66] text-[10px] uppercase tracking-[0.2em]">{feat.title}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4️⃣ FAQ ACCORDION */}
        <section className="max-w-3xl mx-auto mb-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[900] text-[#1F2E66] mb-4">Billing & Plans FAQ</h2>
            <p className="text-gray-500 font-semibold text-lg">Clear answers to your most frequent questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>

        {/* FINAL FOOTER CTA */}
        <footer className="text-center border-t border-blue-100/50 pt-20 pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-[900] text-[#1F2E66] mb-8">Ready to elevate your brand?</h2>
            <p className="text-gray-500 font-semibold mb-10 px-6">
              Join over 5,000 teams building the future of content marketing with EliteScale.
            </p>
            <button className="bg-[#1F2E66] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-900/20 hover:scale-105 transition-transform shine-effect">
              Start Your Free Trial
            </button>
            <p className="mt-12 text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em]">
              © 2024 ELITESCALE PLATFORM • SECURE PAYMENTS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

// --- FAQ ITEM COMPONENT ---
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-8 glass-card-white border border-blue-50 rounded-[1.5rem] flex items-center justify-between transition-all duration-300 hover:border-blue-200 group active:scale-[0.99]"
      >
        <span className="font-black text-[#1F2E66] pr-6 text-sm uppercase tracking-wide">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="p-8 text-gray-600 font-semibold leading-relaxed text-sm bg-blue-50/30 rounded-b-[1.5rem] -mt-2 border-x border-b border-blue-50/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
