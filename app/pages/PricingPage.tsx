import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Info, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

// Editable pricing tokens (monthly prices)
const PRICING = {
  STARTER: { monthly: 4999, annual: 3999 },
  GROWTH: { monthly: 9999, annual: 7999 },
  SCALE: { monthly: 19999, annual: 15999 }
};

const formatPrice = (price) => {
  return price.toLocaleString('en-IN');
};

export const PricingPage = () => {
  const [showCreditsDrawer, setShowCreditsDrawer] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: 'Starter',
      monthlyPrice: PRICING.STARTER.monthly,
      annualPrice: PRICING.STARTER.annual,
      description: 'Perfect for solo founders and small brands',
      features: [
        '2 social profiles',
        '30-day content calendar',
        '12 AI-generated posts/month',
        'ROI dashboard',
        'Best-time posting',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Growth',
      monthlyPrice: PRICING.GROWTH.monthly,
      annualPrice: PRICING.GROWTH.annual,
      description: 'For growing teams that need more reach',
      features: [
        '4 social profiles',
        'Everything in Starter',
        'Advanced reporting & analytics',
        'Priority content review',
        'A/B testing',
        'Priority support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Scale',
      monthlyPrice: PRICING.SCALE.monthly,
      annualPrice: PRICING.SCALE.annual,
      description: 'For agencies and high-volume brands',
      features: [
        '6+ social profiles',
        'Everything in Growth',
        'Team workspaces & permissions',
        'Dedicated success manager',
        'Custom integrations',
        'SLA & phone support'
      ],
      cta: 'Start Free Trial',
      popular: false
    }
  ];

  const creditPricing = [
    { credits: '10k', price: '2,000' },
    { credits: '20k', price: '3,000' },
    { credits: '50k', price: '6,000' },
    { credits: '100k', price: '10,000' }
  ];

  const creditCosts = [
    { action: 'Analysis revision', cost: '100 credits' },
    { action: 'Calendar revision', cost: '250 credits' },
    { action: 'Static/Carousel revision', cost: '250 credits' },
    { action: 'Reel revision', cost: '400 credits/sec' }
  ];

  const faqs = [
    {
      question: 'How does billing work?',
      answer: 'You are billed monthly or annually (save 20% with annual). Payment via credit card, UPI, or bank transfer. All plans auto-renew unless canceled.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. No contracts, no cancellation fees. You can cancel from your dashboard anytime. You will retain access until the end of your billing period.'
    },
    {
      question: 'Do you provide invoices with GST?',
      answer: 'Yes. GST-compliant invoices are automatically generated and emailed after each payment. You can download them anytime from your billing dashboard.'
    },
    {
      question: 'What happens after my trial ends?',
      answer: 'After 14 days, you will be prompted to choose a paid plan. No auto-charge during trial. All your content and data remain accessible when you upgrade.'
    }
  ];

  return (
    <div className="App">
      <Header />
      
      <main className="min-h-screen bg-[#F8FAFF]">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-white" data-testid="pricing-hero">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#4E5674]"
                data-testid="pricing-heading"
              >
                Plans that scale with{' '}
                <span className="gradient-text">your goals</span>
              </h1>
              <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto">
                Simple tiers. 14-day free trial. Cancel anytime.
              </p>

              {/* Annual/Monthly Toggle */}
              <div className="flex items-center justify-center gap-4 mt-10" data-testid="billing-toggle">
                <span className={`text-sm font-medium ${!isAnnual ? 'text-[#4E5674]' : 'text-[#94a3b8]'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    isAnnual ? 'bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF]' : 'bg-gray-300'
                  }`}
                  data-testid="billing-toggle-button"
                  aria-label={isAnnual ? 'Switch to monthly billing' : 'Switch to annual billing'}
                >
                  <span 
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      isAnnual ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? 'text-[#4E5674]' : 'text-[#94a3b8]'}`}>
                  Annual
                </span>
                <span className="ml-2 px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                  Save 20%
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20" data-testid="pricing-tiers">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                    tier.popular ? 'border-2 border-[#6D5CEB] transform md:scale-105' : 'border-2 border-transparent'
                  }`}
                  data-testid={`pricing-tier-${tier.name.toLowerCase()}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 text-xs font-semibold bg-gradient-to-r from-[#6D5CEB] to-[#2DA4EF] text-white rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 
                      className="text-2xl font-bold mb-2 text-[#4E5674]"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-sm text-[#64748b] mb-4">
                      {tier.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-[#4E5674]">
                        ₹{formatPrice(isAnnual ? tier.annualPrice : tier.monthlyPrice)}
                      </span>
                      <span className="text-[#64748b]">/{isAnnual ? 'mo (billed yearly)' : 'month'}</span>
                    </div>
                    {isAnnual && (
                      <div className="mt-2">
                        <span className="text-xs text-green-600 font-medium">
                          Save ₹{formatPrice((tier.monthlyPrice - tier.annualPrice) * 12)}/year
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-[#64748b]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 rounded-full font-semibold text-base transition-all ${
                      tier.popular
                        ? 'btn-primary justify-center'
                        : 'btn-secondary justify-center'
                    }`}
                    data-testid={`cta-${tier.name.toLowerCase()}`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trial Note */}
        <section className="py-12 bg-white" data-testid="trial-note">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#F8FAFF] rounded-2xl p-8 border-2 border-[#6D5CEB]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 
                    className="text-lg font-bold mb-2 text-[#4E5674]"
                  >
                    14-Day Free Trial Includes
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-3">
                    Your first pass is included: brand analysis, 30-day calendar, and initial content generation. 
                    Additional revisions use credits from your plan.
                  </p>
                  <button 
                    onClick={() => setShowCreditsDrawer(!showCreditsDrawer)}
                    className="text-[#6D5CEB] text-sm font-semibold hover:underline inline-flex items-center gap-2"
                    data-testid="credits-explainer-toggle"
                  >
                    <HelpCircle className="w-4 h-4" aria-hidden="true" />
                    How do credits work?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Explainer Drawer */}
        {showCreditsDrawer && (
          <section className="py-12 bg-gradient-to-br from-[#6D5CEB]/5 to-[#2DA4EF]/5" data-testid="credits-drawer">
            <div className="max-w-4xl mx-auto px-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 
                  className="text-2xl font-bold mb-6 text-[#4E5674]"
                >
                  Credit System Explained
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-[#4E5674]">
                    Revision Costs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {creditCosts.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex justify-between items-center p-4 bg-[#F8FAFF] rounded-lg"
                      >
                        <span className="text-sm font-medium text-[#4E5674]">
                          {item.action}
                        </span>
                        <span className="text-sm font-bold text-[#6D5CEB]">
                          {item.cost}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#4E5674]">
                    Credit Top-Ups
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {creditPricing.map((item, idx) => (
                      <div 
                        key={idx}
                        className="text-center p-4 bg-[#F8FAFF] rounded-lg border-2 border-transparent hover:border-[#6D5CEB] transition-all cursor-pointer"
                        data-testid={`credit-topup-${idx}`}
                      >
                        <div className="text-2xl font-bold text-[#4E5674] mb-1">
                          {item.credits}
                        </div>
                        <div className="text-sm text-[#64748b]">credits</div>
                        <div className="text-lg font-semibold text-[#6D5CEB] mt-2">
                          ₹{item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#64748b] mt-4 text-center">
                    Credits never expire and can be used across all plans
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Mini */}
        <section className="py-20" data-testid="pricing-faq">
          <div className="max-w-4xl mx-auto px-6">
            <h3 
              className="text-3xl font-bold mb-8 text-center text-[#4E5674]"
            >
              Billing & Plans FAQ
            </h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white rounded-xl border-2 border-transparent hover:border-[#6D5CEB]/20 transition-all px-6"
                  data-testid={`pricing-faq-${index}`}
                >
                  <AccordionTrigger className="text-left text-[#4E5674] font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748b] pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-[#6D5CEB] to-[#2DA4EF] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Start Your Free Trial Today
            </h3>
            <p className="text-base sm:text-lg mb-10 opacity-95 max-w-2xl mx-auto">
              No credit card required. Full access to all features for 14 days. 
              Choose your plan when you're ready.
            </p>
            
            <button 
              className="bg-white text-[#6D5CEB] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-2"
              data-testid="pricing-final-cta"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};
