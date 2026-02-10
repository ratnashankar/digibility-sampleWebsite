"use client";




import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Check, 
  Clock, 
  Search, 
  Globe, 
  Mail, 
  Target, 
  Sparkles, 
  ArrowRight,
  Youtube,
  BarChart3,
  Smartphone,
  Layers,
  ShoppingBag,
  Zap,
  LayoutGrid
} from 'lucide-react';

/**
 * STYLES & BRAND COLORS:
 * Primary Indigo: #3A0CA3
 * Blue: #4361EE
 * Cyan: #4CC9F0
 * Sky Blue: #3A86FF
 * Dark Navy: #1F2E66
 */

// --- Background Particles Component ---
const BackgroundParticles = () => {
  const blobs = [
    { color: '#3A0CA3', size: 'w-[30rem] h-[30rem]', top: '-5%', left: '-5%', delay: 0 },
    { color: '#4361EE', size: 'w-[25rem] h-[25rem]', top: '15%', left: '70%', delay: 2 },
    { color: '#4CC9F0', size: 'w-[20rem] h-[20rem]', top: '55%', left: '5%', delay: 4 },
    { color: '#3A86FF', size: 'w-[22rem] h-[22rem]', top: '75%', left: '80%', delay: 1 },
    { color: '#3A0CA3', size: 'w-[18rem] h-[18rem]', top: '35%', left: '85%', delay: 3 },
    { color: '#4361EE', size: 'w-[22rem] h-[22rem]', top: '0%', left: '35%', delay: 5 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] opacity-[0.06] ${blob.size}`}
          style={{ 
            backgroundColor: blob.color,
            top: blob.top,
            left: blob.left
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: blob.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// --- Motion Variants ---
const fadeInDown: Variants = {
  initial: { opacity: 0, y: -40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  whileInView: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Components ---

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.15em] uppercase mb-6 shadow-sm ${className}`}>
    {children}
  </span>
);

interface RoadmapCardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
  hasLeftBorder?: boolean;
}

const RoadmapCard = ({ children, className = "", accentColor = "", hasLeftBorder = false }: RoadmapCardProps) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.01 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`relative group bg-white/75 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden border border-blue-50/50 ${className}`}
  >
    {hasLeftBorder && accentColor && (
      <div className={`absolute top-0 left-0 h-full w-1.5 ${accentColor}`} />
    )}
    {/* Shine Sweep */}
    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transition-all duration-1000 group-hover:left-[150%] pointer-events-none" />
    {children}
  </motion.div>
);

const FeatureItem = ({ text, icon: Icon = Check, color = "text-[#00C853]" }: { text: string, icon?: any, color?: string }) => (
  <div className="flex items-start gap-4 mb-4 last:mb-0">
    <div className={`mt-1 p-1 rounded-full ${color.replace('text-', 'bg-')}/10 flex-shrink-0`}>
      <Icon className={`w-3.5 h-3.5 ${color}`} strokeWidth={3} />
    </div>
    <p className="text-[#1F2E66] font-semibold text-lg leading-tight tracking-tight">{text}</p>
  </div>
);

// --- Main Page Component ---
export default function DigibilityRoadmap() {
  return (
    <div className="min-h-screen relative py-20 px-6 md:px-12 bg-[#F9FBFF] selection:bg-[#4CC9F0] selection:text-[#3A0CA3] overflow-x-hidden">
      <BackgroundParticles />

      <div className="max-w-6xl mx-auto">
        
        {/* --- 1. Heading --- */}
        <header className="text-center mb-32 flex flex-col items-center">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInDown}
            className="relative"
          >
            <h1 className="text-[80px] md:text-[140px] font-black leading-[0.8] tracking-tighter mb-10 select-none text-transparent bg-clip-text bg-gradient-to-r from-[#3A0CA3] via-[#4361EE] to-[#4CC9F0] animate-gradient-flow bg-[length:200%_auto] drop-shadow-sm">
              What’s <br className="hidden md:block" /> Next
            </h1>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl font-black text-[#1F2E66] leading-tight tracking-tight">
              Social is live today.
            </p>
            <p className="text-2xl md:text-3xl font-black text-[#1F2E66]/70 leading-tight tracking-tight">
              Next up: 
              <span className="inline-block mx-3 border-b-[4px] border-[#3A0CA3]/30 hover:border-[#3A0CA3] transition-all pb-1 text-[#3A0CA3]">SEO</span> 
              <span className="text-[#1F2E66]/20 font-light mx-1">→</span> 
              <span className="inline-block mx-3 border-b-[4px] border-[#4361EE]/30 hover:border-[#4361EE] transition-all pb-1 text-[#4361EE]">Email</span> 
              <span className="text-[#1F2E66]/20 font-light mx-1">→</span> 
              <span className="inline-block mx-3 border-b-[4px] border-[#4CC9F0]/30 hover:border-[#4CC9F0] transition-all pb-1 text-[#4CC9F0]">Ads</span>.
            </p>
          </motion.div>
        </header>

        {/* --- 2, 3, 4, 5. Roadmap Cards Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          
          {/* NOW (LIVE) — Social Media */}
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={slideInLeft}>
            <RoadmapCard hasLeftBorder accentColor="bg-[#00C853]" className="h-full">
              <div className="flex justify-between items-start mb-8">
                <Badge className="bg-[#E8F5E9] text-[#00C853] border border-[#00C853]/10">Live Now</Badge>
                <div className="p-6 bg-[#E8F5E9]/60 rounded-[1.8rem] text-[#00C853] shadow-inner">
                  <LayoutGrid className="w-10 h-10" strokeWidth={2.5} />
                </div>
              </div>
              
              <h3 className="text-4xl font-black text-[#1F2E66] flex items-center gap-4 mb-8 tracking-tighter">
                Social Media <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              </h3>

              <div className="space-y-1">
                <FeatureItem text="30-day content calendar" />
                <FeatureItem text="AI drafts + human review" />
                <FeatureItem text="Best-time posting scheduler" />
                <FeatureItem text="Post-level ROI tracking" />
                <FeatureItem text="Instagram, Facebook, LinkedIn, Twitter/X, TikTok, GBP" />
              </div>
            </RoadmapCard>
          </motion.div>

          {/* SEO (Alpha) */}
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={slideInRight}>
            <RoadmapCard className="h-full">
              <div className="flex justify-between items-start mb-8">
                <Badge className="bg-[#F3E5F5] text-[#3A0CA3] border border-[#3A0CA3]/10">Up Next</Badge>
                <div className="p-6 bg-white/50 rounded-[1.8rem] text-[#3A0CA3] shadow-lg border border-white">
                  <Search className="w-10 h-10" strokeWidth={2.5} />
                </div>
              </div>

              <h3 className="text-4xl font-black text-[#1F2E66] mb-2 tracking-tighter">SEO (Alpha)</h3>
              <p className="text-xl font-black text-[#3A0CA3]/30 mb-8 uppercase tracking-[0.2em]">Q1 2026</p>

              <div className="space-y-1">
                <FeatureItem text="Full site technical scan" icon={Sparkles} color="text-[#3A0CA3]" />
                <FeatureItem text="Quick wins report" icon={Sparkles} color="text-[#3A0CA3]" />
                <FeatureItem text="Keyword research & content plan" icon={Sparkles} color="text-[#3A0CA3]" />
                <FeatureItem text="Google Search Console sync" icon={Sparkles} color="text-[#3A0CA3]" />
                <FeatureItem text="On-page optimization" icon={Sparkles} color="text-[#3A0CA3]" />
              </div>
            </RoadmapCard>
          </motion.div>

          {/* Email (Beta) */}
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp}>
            <RoadmapCard className="h-full">
              <div className="flex justify-between items-start mb-8">
                <Badge className="bg-slate-100 text-slate-500 border border-slate-200">Coming Soon</Badge>
                <div className="p-6 bg-slate-50 rounded-[1.8rem] text-slate-300">
                  <Mail className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-4xl font-black text-[#1F2E66] flex items-center gap-4 mb-2 tracking-tighter">
                Email <Clock className="w-8 h-8 text-slate-200" />
              </h3>
              <p className="text-xl font-black text-slate-200 mb-8 uppercase tracking-[0.2em]">Q2 2026</p>
              <div className="space-y-1">
                <FeatureItem text="AI-powered newsletter builder" icon={Clock} color="text-slate-300" />
                <FeatureItem text="Smart segmentation & tagging" icon={Clock} color="text-slate-300" />
                <FeatureItem text="Automated drip sequences" icon={Clock} color="text-slate-300" />
                <FeatureItem text="A/B testing workflows" icon={Clock} color="text-slate-300" />
              </div>
            </RoadmapCard>
          </motion.div>

          {/* Ads (Beta) */}
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={slideInLeft}>
            <RoadmapCard className="h-full">
              <div className="flex justify-between items-start mb-8">
                <Badge className="bg-[#4361EE]/5 text-[#4361EE] border border-[#4361EE]/10">Beta Access</Badge>
                <div className="p-6 bg-[#4361EE]/5 rounded-[1.8rem] text-[#4361EE]">
                  <Target className="w-10 h-10" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-4xl font-black text-[#1F2E66] flex items-center gap-4 mb-2 tracking-tighter">
                Ads <Clock className="w-8 h-8 text-[#4361EE]/20" />
              </h3>
              <p className="text-xl font-black text-[#4361EE]/30 mb-8 uppercase tracking-[0.2em]">Q2–Q3 2026</p>
              <div className="space-y-1">
                <FeatureItem text="Dynamic ad variants generator" icon={Target} color="text-[#4361EE]" />
                <FeatureItem text="Audience targeting refinement" icon={Target} color="text-[#4361EE]" />
                <FeatureItem text="Budget allocation optimizer" icon={Target} color="text-[#4361EE]" />
                <FeatureItem text="ROAS tracking & reporting" icon={Target} color="text-[#4361EE]" />
              </div>
            </RoadmapCard>
          </motion.div>

        </div>

        {/* --- 6. Also in 2026 — Feature Pills --- */}
        <div className="mb-40">
          <motion.h4 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-[11px] font-black text-slate-400 uppercase tracking-[1.2em] mb-16"
          >
            Also in 2026
          </motion.h4>
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { label: 'YouTube Publishing', icon: Youtube },
              { label: 'Analytics+ Insights', icon: BarChart3 },
              { label: 'Approvals 2.0', icon: Layers },
              { label: 'Mobile App', icon: Smartphone },
              { label: 'Shopify Connector', icon: ShoppingBag },
              { label: 'WooCommerce Connector', icon: Globe },
            ].map((pill, idx) => (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, scale: 0.95, y: 20 },
                  whileInView: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -8, backgroundColor: 'white', borderColor: '#4361EE' }}
                className="group bg-white/60 backdrop-blur-2xl border border-slate-200 rounded-[2rem] px-10 py-6 flex items-center gap-6 cursor-pointer shadow-lg shadow-blue-900/5 hover:shadow-xl transition-all duration-300"
              >
                <pill.icon className="w-7 h-7 text-[#4361EE] group-hover:text-[#3A0CA3] transition-colors" />
                <span className="font-bold text-[#1F2E66] text-xl tracking-tighter">{pill.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- 7. Stay in the Loop (Gradient CTA) --- */}
        <motion.div 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative rounded-[5rem] p-16 md:p-24 text-center overflow-hidden shadow-[0_40px_120px_rgba(58,12,163,0.15)] z-10"
        >
          {/* Digibility Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3A0CA3] via-[#4361EE] to-[#4CC9F0] animate-gradient-flow bg-[length:200%_auto] z-[-2]" />
          <div className="absolute inset-0 bg-black/10 z-[-1]" />
          
          <div className="relative z-20 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] drop-shadow-xl">
              Stay in <br className="hidden md:block" /> the Loop
            </h2>
            <p className="text-white font-black text-xl md:text-2xl mb-16 leading-tight opacity-95 drop-shadow-md max-w-3xl mx-auto">
              Get early access notifications and first-look invites for our upcoming features. Join thousands of creators today.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -10, boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-8 bg-white text-[#3A0CA3] px-16 py-8 rounded-full font-black text-3xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#4361EE]/10 to-transparent -skew-x-12 transition-all duration-1000 group-hover:left-full pointer-events-none" />
              <span className="relative z-10">Join the Beta List</span>
              <ArrowRight className="w-10 h-10 relative z-10 group-hover:translate-x-4 transition-transform" strokeWidth={5} />
            </motion.button>
          </div>

          <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-white/20 rounded-full blur-[200px] -mr-48 -mt-48 pointer-events-none z-[-1]" />
          <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-[#3A86FF]/20 rounded-full blur-[200px] -ml-48 -mb-48 pointer-events-none z-[-1]" />
        </motion.div>

        {/* Footer Area */}
        <footer className="mt-40 text-center pb-32">
          <p className="text-slate-300 text-[13px] font-black uppercase tracking-[1.4em] mb-10">
            Digital Infrastructure
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-slate-400 font-bold text-sm">
            <span>&copy; {new Date().getFullYear()} Digibility</span>
            <span className="hidden md:block w-2 h-2 rounded-full bg-slate-200" />
            <span>London • New York • Tokyo</span>
            <span className="hidden md:block w-2 h-2 rounded-full bg-slate-200" />
            <span>Standard of Excellence</span>
          </div>
        </footer>
      </div>
    </div>
  );
}


