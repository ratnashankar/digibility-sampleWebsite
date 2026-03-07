
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
const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[#D6DEFF] bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-8 py-7 text-left"
      >
        <span className="text-base font-semibold text-[#1F2E66]">
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#98A2B3]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1], // smooth material-like easing
            }}
          >
            <div className="px-8 pb-7 text-sm text-[#667085] leading-relaxed">
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
    <div className="relative bg-background font-body selection:bg-brand-start/20">

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
        <section className="relative overflow-hidden bg-[#F8FAFF]">
          {/* Soft background glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(109,92,235,0.12),transparent_60%)]" />

          <div className="section text-center py-16 md:py-20">

            {/* Top badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full
                    bg-white border border-slate-200 text-xs font-medium
                    text-brand-start mb-10">
              AI Agency, Delivered as a Platform
            </div>

            {/* Headline */}
            <h1 className="hero-title mb-6">
              Your always-on{" "}
              <span className="hero-gradient-text">
                AI marketing
                team
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle max-w-xl mx-auto mb-10">
              Digibility plans, creates, and runs campaigns across social, SEO,
              email, and ads — so you get agency-level outcomes without agency cost
              or chaos. You approve; we execute.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <button className="btn-primary-pill">
                Start Free 14-Day Trial →
              </button>
              <button className="btn-outline-pill">
                See how it works
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600 mt-6">
              <span className="trust-chip">✔ First post in 24h</span>
              <span className="trust-chip">✔ Replaces 5–8 tools</span>
              <span className="trust-chip">✔ Human review on key items</span>
              <span className="trust-chip">✔ OAuth only</span>
            </div>

            {/* Bottom tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-xs text-slate-400 tracking-wide"
            >
              Plan • Create • Run • Prove ROI
            </motion.p>
          </div>
          <div className="mt-10 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#6D5CEB]/40 to-transparent" />

        </section>

{/* SECTION 0.5: TRUST / SOCIAL PROOF */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    {/* Trust headline */}
    <p className="text-sm text-slate-400 mb-10">
      Trusted by early teams across tech, services, and D2C.
    </p>

    {/* Logo row */}
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="h-10 w-24 md:w-28 bg-slate-100 rounded-md"
        />
      ))}
    </div>
  </div>
</section>



        {/* SECTION 1: One platform, All channels */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[28px] md:text-[36px] font-semibold text-[#424A66] text-center tracking-tight mb-14"
            >
              One platform, All channels
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
">
              {[
                { title: "Social Media", status: "Live", icon: Globe, statusColor: "text-green-500 bg-green-50" },
                { title: "SEO", status: "Next", icon: Search, statusColor: "text-gray-400 bg-gray-50" },
                { title: "Email", status: "Next", icon: Mail, statusColor: "text-gray-400 bg-gray-50" },
                { title: "Ads", status: "Next", icon: Target, statusColor: "text-gray-400 bg-gray-50" }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`rounded-xl bg-white p-6 border
    ${i === 0 ? "border-[#6D5CEB]" : "border-slate-200"}
    shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
                      <card.icon className="w-4 h-4 text-[#6D5CEB]" />
                    </div>
                    <h3 className="text-sm font-medium text-slate-800">
                      {card.title}
                    </h3>
                    <span
                      className={`ml-auto text-xs px-2 py-0.5 rounded-full
        ${card.status === "Live"
                          ? "bg-green-100 text-green-600"
                          : "bg-slate-100 text-slate-400"}`}
                    >
                      {card.status}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {card.title === "Social Media" &&
                      "Plan, draft, schedule, prove ROI."}
                    {card.title === "SEO" &&
                      "Scan site, plan keywords, feed content."}
                    {card.title === "Email" &&
                      "Brand-voice newsletters, send-time suggestions."}
                    {card.title === "Ads" &&
                      "Boost winners, auto-variants, clear spend."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Why most marketing feels broken */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#4B5568] text-center mb-16">
              Why most marketing feels broken
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* The Problem */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#FDE2E2] bg-[#FFF8F8] p-10"
              >
                <h3 className="text-lg font-semibold text-[#B42318] mb-8">
                  The Problem
                </h3>

                <div className="space-y-6">
                  {[
                    { emoji: "🔗", text: "Fragmented stack: 5–8 tools, zero continuity." },
                    { emoji: "🐢", text: "Slow output: briefs → drafts → edits → missed windows." },
                    { emoji: "💸", text: "High cost: agency retainers or growing payroll." },
                    { emoji: "🎲", text: "Guesswork: weak attribution and repeatability." }
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-xl leading-none">{row.emoji}</span>
                      <p className="text-sm text-[#667085] leading-relaxed">
                        {row.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* The Digibility Way */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#D1FADF] bg-[#F6FFFB] p-10"
              >
                <h3 className="text-lg font-semibold text-[#027A48] mb-8">
                  The Digibility Way
                </h3>

                <div className="space-y-6">
                  {[
                    { emoji: "🔁", text: "One flow: plan → create → run → measure." },
                    { emoji: "⚡", text: "Always-on team: AI speed with human checks." },
                    { emoji: "💰", text: "Lower total cost: replace agencies and extra tools." },
                    { emoji: "📊", text: "Clear ROI: UTMs by post, next-month recommendations." }
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <span className="text-xl leading-none">{row.emoji}</span>
                      <p className="text-sm text-[#475467] leading-relaxed">
                        {row.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* SECTION 3: Metrics Row */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Time saved", value: "Cut ops to <1 hour/week" },
              { label: "Cost reduced", value: "60–75% lower than agency retainers" },
              { label: "Speed to live", value: "First post in 24 hours after approval" }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[#E0E7FF] bg-[#F8FAFF] px-8 py-10 text-center"
              >
                <p className="text-sm font-medium text-[#667085] mb-3">
                  {metric.label}
                </p>

                <p className="text-xl md:text-2xl font-semibold text-[#344054] leading-snug">
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* SECTION 4: How Digibility Works */}
        <section className="py-24 px-6 bg-[#F8FAFF]">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[28px] md:text-[34px] font-semibold text-[#3F4A6B] text-center mb-16"
            >
              How Digibility works
            </motion.h2>

            {/* Steps Row */}
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">

              {[
                {
                  title: "Plan",
                  desc: "Connect site + socials. We scan your brand and competitors, then propose a 30-day plan per channel."
                },
                {
                  title: "Create",
                  desc: "AI drafts on-brand statics, carousels, and reel scripts. Humans review key items. You approve."
                },
                {
                  title: "Run",
                  desc: "Best-time scheduling per platform with failsafe retries."
                },
                {
                  title: "Prove",
                  desc: "UTMs per post. See what worked and why."
                },
                {
                  title: "Learn",
                  desc: "Winning posts feed next month’s strategy."
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative bg-white border border-[#E4E7FF] rounded-2xl px-6 py-8"
                >
                  {/* Step number */}
                  <div className="w-9 h-9 rounded-full bg-[#4C7FF8] text-white flex items-center justify-center font-semibold text-sm mb-4">
                    {i + 1}
                  </div>

                  <h3 className="text-base font-semibold text-[#344054] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Arrow connector (desktop only) */}
                  {i < 4 && (
                    <div className="hidden md:flex absolute -right-7 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-[#4C7FF8]" />
                    </div>

                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#3F4A6B] text-[#3F4A6B] font-medium hover:bg-[#EEF2FF] transition">
                See the feature tour →
              </button>
            </motion.div>

          </div>
        </section>



        {/* SECTION 5: Outcomes You Can Measure */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <h2 className="text-[26px] md:text-[32px] font-medium text-[#475467] text-center mb-14">
              Outcomes you can measure
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Solo Founder",
                  desc: "Consistent presence in <1 hr/week. More qualified leads.",
                  highlight: true,
                },
                {
                  title: "Small Team",
                  desc: "2–3× output in one workflow. Clean attribution for reports.",
                },
                {
                  title: "SMB replacing agency",
                  desc: "60–75% lower cost with full control and transparency.",
                },
                {
                  title: "Local & D2C",
                  desc: "On-time IG + GBP. Simple analytics anyone can read.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`
            rounded-xl border bg-white
            px-6 py-7
            ${item.highlight
                      ? "border-[#C7C2FF]"
                      : "border-[#E5E7EB]"
                    }
          `}
                >
                  <h3 className="text-sm font-medium text-[#344054] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>



        {/* SECTION 6: Compare your options */}
        <section className="py-24 px-6 bg-[#F8FAFF]">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#3F4A6B] text-center mb-16">
              Compare your options
            </h2>

            {/* Table Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(16,24,40,0.08)]">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">

                  {/* Header */}
                  <thead>
                    <tr className="border-b border-[#E5E7EB]">
                      <th className="text-left px-6 py-4 font-medium text-[#475467]">
                        Features
                      </th>
                      {["DIY", "Freelancer", "Agency", "Tool Stack"].map((h) => (
                        <th
                          key={h}
                          className="text-center px-6 py-4 font-medium text-[#475467]"
                        >
                          {h}
                        </th>
                      ))}
                      <th className="text-center px-6 py-4 font-semibold text-[#4C7FF8] bg-[#EEF2FF]">
                        Digibility
                      </th>
                    </tr>
                  </thead>

                  {/* Body */}
                  <tbody>
                    {[
                      {
                        f: "Cost to operate",
                        diy: "$–",
                        fl: "$$",
                        ag: "$$$$",
                        ts: "$$",
                        digi: "$$",
                      },
                      {
                        f: "Speed to publish",
                        diy: "Slow",
                        fl: "Varies",
                        ag: "Slow",
                        ts: "Medium",
                        digi: "Fast",
                      },
                      {
                        f: "Consistency",
                        diy: "Low",
                        fl: "Medium",
                        ag: "Medium",
                        ts: "Medium",
                        digi: "High",
                      },
                      {
                        f: "Control & transparency",
                        diy: "High",
                        fl: "Medium",
                        ag: "Low",
                        ts: "Medium",
                        digi: "High",
                      },
                      {
                        f: "ROI visibility",
                        diy: "Low",
                        fl: "Low",
                        ag: "Medium",
                        ts: "Medium",
                        digi: "High",
                      },
                      {
                        f: "Scale across channels",
                        diy: "Hard",
                        fl: "Hard",
                        ag: "Costly",
                        ts: "Complex",
                        digi: "Simple",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-[#F2F4F7] last:border-none"
                      >
                        <td className="px-6 py-4 text-[#344054] font-medium">
                          {row.f}
                        </td>

                        {/* DIY */}
                        <td className="px-6 py-4 text-center text-red-500">
                          {row.diy}
                        </td>

                        {/* Freelancer */}
                        <td className="px-6 py-4 text-center text-red-500">
                          {row.fl}
                        </td>

                        {/* Agency */}
                        <td className="px-6 py-4 text-center text-red-500">
                          {row.ag}
                        </td>

                        {/* Tool Stack */}
                        <td className="px-6 py-4 text-center text-[#667085]">
                          {row.ts}
                        </td>

                        {/* Digibility */}
                        <td className="px-6 py-4 text-center font-semibold text-green-600 bg-[#F5F8FF]">
                          {row.digi}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#4C7FF8] text-white font-medium hover:bg-[#3B6FE3] transition">
                Start Free 14-Day Trial →
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 7: Get value in 60 seconds */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">

            {/* Heading */}
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#475467] mb-14">
              Get value in 60 seconds
            </h2>

            {/* Pills */}
            <div className="flex flex-wrap justify-center gap-5 mb-12">
              {[
                "Caption Generator",
                "Hashtag Generator",
                "Best-Time Demo",
                "UTM Builder",
                "Hooks",
                "Ideas from URL",
                "30-Day Calendar (CSV)",
              ].map((pill, i) => (
                <div
                  key={i}
                  className="
            px-8 py-5
            bg-[#F8FAFF]
            border border-[#EEF2FF]
            rounded-2xl
            text-sm font-medium text-[#344054]
          "
                >
                  {pill}
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p className="text-sm text-[#98A2B3]">
              Results unlock after name, work email, and WhatsApp.
            </p>

          </div>
        </section>


        {/* SECTION 8: Built for trust */}
        <section className="py-24 px-6 bg-[#FAFBFF]">
          <div className="max-w-7xl mx-auto text-center">

            {/* Heading */}
            <h2 className="text-[28px] md:text-[34px] font-semibold text-[#475467] mb-14">
              Built for trust
            </h2>

            {/* Trust pills */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                { label: "OAuth only (no social passwords)", icon: Key },
                { label: "Encryption in transit and at rest", icon: Lock },
                { label: "Role-based access and audit log", icon: Database },
                { label: "Export/delete on request", icon: Zap },
                { label: "Sub-processors listed and vetted", icon: ShieldCheck },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
            flex items-center gap-3
            px-5 py-4
            bg-white
            border border-[#EEF2FF]
            rounded-xl
            text-sm font-medium text-[#344054]
          "
                >
                  <item.icon className="w-4 h-4 text-[#4C7FF8]" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex justify-center gap-6 text-sm text-[#4C7FF8]">
              {["Privacy", "Terms", "Acceptable Use", "Sub-processors", "DPA"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="hover:underline"
                  >
                    {link}
                  </a>
                )
              )}
            </div>

          </div>
        </section>

        {/* SECTION 9: Frequently Asked Questions */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-[30px] md:text-[36px] font-semibold text-[#475467] text-center mb-16">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Is Digibility an agency?",
                  a: "No. Digibility is an AI-powered platform designed to replace agencies by automating planning, creation, publishing, and measurement.",
                },
                {
                  q: "Which channels are live today?",
                  a: "Social media automation is live for LinkedIn, X, Instagram, and Facebook. More channels are coming soon.",
                },
                {
                  q: "Do I approve content before it posts?",
                  a: "Yes. Nothing goes live without your explicit approval.",
                },
                {
                  q: "How fast can I see results?",
                  a: "Your first post typically goes live within 24 hours. Engagement improvements often start in week one.",
                },
                {
                  q: "What’s included vs paid as credits?",
                  a: "Standard content and scheduling are included. Advanced video and deep SEO use credits.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. There are no long-term contracts.",
                },
                {
                  q: "How do you measure ROI?",
                  a: "We use UTMs, per-post tracking, and monthly performance summaries.",
                },
                {
                  q: "How is my data protected?",
                  a: "OAuth-only access, encryption at rest and in transit, and strict role-based controls.",
                },
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
