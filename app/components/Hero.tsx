
"use client";

import React, { useState } from 'react';
import { 
  Check, Sparkles, Zap, TrendingUp, Users, Calendar, Clock, ShieldCheck,
  Layout, MessageSquare, BarChart3, Search, CheckCircle2, Globe, Award,
  ChevronRight, MousePointer2, Stars, Key, Lock, Database, X, ArrowRight,
  ChevronDown, MoveRight, Mail, Target, DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * MASTER STYLE SYSTEM:
 * Primary Blue: #4C7FF8
 * Digi Purple: #6D5CEB
 * Cyan Accent: #4CC9F0
 * Lavender: #B197FC
 * Dark Text: #1F2E66
 * Sub Text: #6B7280
 */

// Fix for key prop error: Moving FAQItem above LandingPage and adding explicit typing.
const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`bg-white rounded-[2rem] border transition-all duration-500 ${isOpen ? 'border-[#6D5CEB]/30 ring-4 ring-[#6D5CEB]/5 shadow-xl' : 'border-[#E3E8FF] shadow-sm'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-10 py-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="text-xl font-black text-[#1F2E66] leading-snug pr-8">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="flex-shrink-0">
            <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-[#6D5CEB]' : 'text-gray-300'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-10 pb-10 text-[#6B7280] font-bold leading-relaxed text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="relative bg-[#FFFFFF] font-sans selection:bg-[#4C7FF8]/20">
      
      {/* Background Decorator Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 15 + i * 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: i % 2 === 0 ? '#6D5CEB' : '#4C7FF8',
              left: `${i * 20}%`,
              top: `${i * 15}%`,
              filter: 'blur(120px)',
              opacity: 0.08
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        
        {/* SECTION 0: HERO */}
        <section className="relative min-h-screen flex items-center pt-32 pb-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full text-center">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-[#E3E8FF] shadow-[0_8px_32px_rgba(0,0,0,0.04)] mb-10 cursor-default group"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6D5CEB]/10 group-hover:bg-[#6D5CEB]/20 transition-colors">
                <Stars className="w-3 h-3 text-[#6D5CEB]" />
              </div>
              <span className="text-sm font-bold text-[#1F2E66] tracking-tight">AI Agency, Delivered as a Platform</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-[900] tracking-tight leading-[1.05] text-[#1F2E66] mb-8"
            >
              Your always-on
              <br />
              <span className="bg-gradient-to-r from-[#6D5CEB] via-[#4C7FF8] to-[#B197FC] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow pb-3 inline-block">
                AI marketing team
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-[#6B7280] font-medium leading-relaxed mb-12 px-4"
            >
              Digibility plans, creates, schedules, and tracks your entire digital presence — with AI speed and human precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(109,92,235,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#6D5CEB] to-[#4C7FF8] text-white font-bold text-lg flex items-center gap-3 transition-all"
              >
                Start Free 14-Day Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "white" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-2xl border-2 border-[#E3E8FF] bg-white/60 backdrop-blur-md text-[#1F2E66] font-bold text-lg transition-all"
              >
                See How it Works
              </motion.button>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {[
                { label: "First post in 24h", icon: Zap, color: "#6D5CEB" },
                { label: "Replaces 5–8 tools", icon: Layout, color: "#4C7FF8" },
                { label: "Human review", icon: Sparkles, color: "#B197FC" },
                { label: "OAuth only", icon: ShieldCheck, color: "#4CC9F0" }
              ].map((chip, idx) => (
                <div key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/80 border border-[#E3E8FF] shadow-sm">
                  <chip.icon className="w-4 h-4" style={{ color: chip.color }} />
                  <span className="text-sm font-bold text-[#1F2E66]">{chip.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: One platform, All channels */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#1F2E66] text-center mb-20"
            >
              One platform, All channels
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Social Media", status: "Live", icon: Globe, statusColor: "text-green-500 bg-green-50" },
                { title: "SEO", status: "Next", icon: Search, statusColor: "text-gray-400 bg-gray-50" },
                { title: "Email", status: "Next", icon: Mail, statusColor: "text-gray-400 bg-gray-50" },
                { title: "Ads", status: "Next", icon: Target, statusColor: "text-gray-400 bg-gray-50" }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(76,127,248,0.12)" }}
                  className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-[#E3E8FF] shadow-sm flex flex-col items-center text-center group transition-all"
                >
                  <div className="w-16 h-16 rounded-3xl bg-[#F6F8FF] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    <card.icon className="w-8 h-8 text-[#4C7FF8]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1F2E66] mb-4">{card.title}</h3>
                  <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${card.statusColor}`}>
                    {card.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Why most marketing feels broken */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* The Problem */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#FFF5F5]/70 backdrop-blur-xl border border-red-100 p-12 rounded-[2.5rem] shadow-sm"
              >
                <h3 className="text-2xl font-black text-[#EF4444] mb-10 flex items-center gap-4">
                  <X className="w-8 h-8 p-1.5 rounded-lg bg-red-100" />
                  The Problem
                </h3>
                <div className="space-y-8">
                  {[
                    { emoji: "⛓️", text: "Fragmented tools that don't talk" },
                    { emoji: "🐢", text: "Painfully slow manual processes" },
                    { emoji: "💸", text: "High overhead costs & agency fees" },
                    { emoji: "🎲", text: "Guesswork instead of data-driven ROI" }
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center gap-6">
                      <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{row.emoji}</span>
                      <p className="text-lg font-semibold text-[#6B7280]">{row.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* The Digibility Way */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[#F4FFF7]/70 backdrop-blur-xl border border-green-100 p-12 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(74,222,128,0.1)]"
              >
                <h3 className="text-2xl font-black text-[#4ADE80] mb-10 flex items-center gap-4">
                  <Check className="w-8 h-8 p-1.5 rounded-lg bg-green-100" />
                  The Digibility Way
                </h3>
                <div className="space-y-8">
                  {[
                    { emoji: "⚡", text: "One seamless, automated workflow" },
                    { emoji: "📅", text: "10x faster execution with AI" },
                    { emoji: "📈", text: "Lower operational cost than retainers" },
                    { emoji: "💰", text: "Crystal clear attribution and ROI" }
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center gap-6">
                      <span className="text-3xl">{row.emoji}</span>
                      <p className="text-lg font-semibold text-[#1F2E66]">{row.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Metrics Row */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Time saved", value: "Cut ops to <1 hr/week", icon: Clock },
              { label: "Cost reduced", value: "60–75% lower vs agency", icon: DollarSign },
              { label: "Speed to live", value: "First post in 24 hours", icon: Zap }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-xl p-12 rounded-[2.5rem] border border-[#E3E8FF] text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#4C7FF8]/10 text-[#4C7FF8] flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-black text-[#6D5CEB] mb-3 uppercase tracking-wider">{metric.label}</h4>
                <p className="text-2xl font-black text-[#1F2E66] leading-tight">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: How Digibility Works */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#1F2E66] text-center mb-24"
            >
              How Digibility works
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
              {[
                { title: "Plan", desc: "Strategy driven by goals." },
                { title: "Create", desc: "AI builds assets instantly." },
                { title: "Run", desc: "Automated distribution." },
                { title: "Prove", desc: "Verify performance." },
                { title: "Learn", desc: "Optimize based on results." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex-1 flex flex-col items-center text-center group relative z-10"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 rounded-full bg-white/70 backdrop-blur-md border border-[#E3E8FF] shadow-lg flex items-center justify-center mb-8 relative"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6D5CEB] to-[#4C7FF8] flex items-center justify-center text-white text-2xl font-black">
                      {i + 1}
                    </div>
                    {i < 4 && (
                      <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-[#6D5CEB]/30">
                        <MoveRight className="w-8 h-8" />
                      </div>
                    )}
                  </motion.div>
                  <h3 className="text-xl font-black text-[#1F2E66] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] font-medium leading-relaxed max-w-[150px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <button className="px-10 py-4 rounded-full border-2 border-[#E3E8FF] text-[#1F2E66] font-bold hover:border-[#6D5CEB]/40 hover:shadow-lg transition-all group flex items-center gap-2 mx-auto">
                See the feature tour
                <MousePointer2 className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: Outcomes You Can Measure */}
        <section className="py-32 px-6 bg-[#F8FAFF]/50 backdrop-blur-md border-y border-[#E3E8FF]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2E66] text-center mb-20">Outcomes you can measure</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Solo Founder", icon: MousePointer2 },
                { title: "Small Team", icon: Users },
                { title: "SMB replacing agency", icon: Award },
                { title: "Local & D2C", icon: Globe }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, backgroundColor: 'white', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.05)' }}
                  className="bg-white/40 p-12 rounded-[2.5rem] border border-[#E3E8FF] text-center transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#4C7FF8]/10 flex items-center justify-center mx-auto mb-8 text-[#4C7FF8]">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-[#1F2E66]">{item.title}</h3>
                  <p className="mt-4 text-xs font-black text-[#4C7FF8] uppercase tracking-widest">Growth Track</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Compare your options */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2E66] text-center mb-20">Compare your options</h2>
            <div className="overflow-hidden rounded-[2.5rem] border border-[#E3E8FF] bg-white/80 backdrop-blur-xl shadow-2xl shadow-[#4C7FF8]/5">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="p-10 text-left text-sm font-bold text-gray-400">Features</th>
                      <th className="p-10 text-center text-sm font-bold text-gray-600">DIY</th>
                      <th className="p-10 text-center text-sm font-bold text-gray-600">Freelancer</th>
                      <th className="p-10 text-center text-sm font-bold text-gray-600">Agency</th>
                      <th className="p-10 text-center text-sm font-bold text-gray-600">Tool Stack</th>
                      <th className="p-0 text-center bg-gradient-to-b from-[#6D5CEB] to-[#4C7FF8] text-white relative">
                        <div className="py-10 px-8 font-black text-xl relative z-10">Digibility</div>
                        <div className="absolute inset-0 bg-white/10" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F4FF]">
                    {[
                      { f: "Cost to operate", diy: "Free-ish", fl: "$2k+/mo", ag: "$5k+/mo", ts: "$500/mo", digi: "Low fixed" },
                      { f: "Speed to publish", diy: "Slow", fl: "Medium", ag: "Slow", ts: "Variable", digi: "Instant" },
                      { f: "Consistency", diy: "Low", fl: "High", ag: "Medium", ts: "High", digi: "Perfect" },
                      { f: "Control & transparency", diy: "Total", fl: "Medium", ag: "Low", ts: "High", digi: "Total" },
                      { f: "ROI visibility", diy: "None", fl: "Low", ag: "High", ts: "High", digi: "High" },
                      { f: "Scale across channels", diy: "Hard", fl: "Manual", ag: "Slow", ts: "Hard", digi: "Seamless" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-[#F8FAFF] transition-colors group">
                        <td className="p-8 text-sm font-bold text-[#1F2E66]">{row.f}</td>
                        <td className="p-8 text-center text-sm text-red-500 font-semibold">{row.diy}</td>
                        <td className="p-8 text-center text-sm text-gray-500 font-medium">{row.fl}</td>
                        <td className="p-8 text-center text-sm text-gray-500 font-medium">{row.ag}</td>
                        <td className="p-8 text-center text-sm text-gray-500 font-medium">{row.ts}</td>
                        <td className="p-8 text-center text-sm font-black text-[#4C7FF8] bg-[#F8FAFF]">{row.digi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Get value in 60 seconds */}
        <section className="py-32 px-6 bg-[#F6F8FF]/80">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2E66] mb-16">Get value in 60 seconds</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {[
                "Caption Generator", "Hashtag Generator", "Best-Time Demo", 
                "UTM Builder", "Hooks", "Ideas from URL", "30-Day Calendar"
              ].map((pill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -4, borderColor: "#4C7FF8" }}
                  className="px-10 py-5 bg-white rounded-full border border-[#E3E8FF] shadow-sm text-base font-black text-[#1F2E66] cursor-pointer transition-all"
                >
                  {pill}
                </motion.div>
              ))}
            </div>
            <p className="text-[#6B7280] font-bold text-xl italic">
              Results unlock after name, work email, and WhatsApp.
            </p>
          </div>
        </section>

        {/* SECTION 8: Built For Trust */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2E66] text-center mb-20">Built For Trust</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { label: "OAuth only", icon: Key, desc: "No passwords required." },
                { label: "Encryption", icon: Lock, desc: "At rest + transit." },
                { label: "Role-based access", icon: Database, desc: "Full audit logs." },
                { label: "Export/Delete", icon: Zap, desc: "On demand." },
                { label: "Sub-processors", icon: ShieldCheck, desc: "Publicly listed." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] border border-[#E3E8FF] shadow-sm text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F6F8FF] flex items-center justify-center mx-auto mb-8">
                    <item.icon className="w-7 h-7 text-[#6D5CEB]" />
                  </div>
                  <h3 className="text-base font-black text-[#1F2E66] mb-3">{item.label}</h3>
                  <p className="text-xs text-[#6B7280] font-bold leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: Frequently Asked Questions */}
        <section className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-[#1F2E66] text-center mb-20">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Is Digibility an agency?", a: "No, Digibility is an AI-powered platform designed to replace expensive agency retainers by automating your entire marketing workflow with AI speed and human quality checks." },
                { q: "Which channels are live today?", a: "Full social media automation is live for LinkedIn, X, Instagram, and Facebook. SEO and Email channels are launching in Q4." },
                { q: "Do I approve content before it posts?", a: "Yes. You maintain 100% control. Our AI creates premium drafts, and nothing goes live without your manual approval in our dash." },
                { q: "How fast can I see results?", a: "Your first premium post goes live within 24 hours of account connection. Most users see uplift in engagement within week one." },
                { q: "What’s included vs paid?", a: "All standard AI generation and scheduling tools are included. High-res video creation and deep-crawl SEO audits use a fair credit system." }
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 6s linear infinite;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f8faff;
        }
        ::-webkit-scrollbar-thumb {
          background: #d7dffe;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b197fc;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
