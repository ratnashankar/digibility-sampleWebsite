import React, { useState } from "react";
import { Check } from "lucide-react";
import ConsentBanner from "./ConsentBanner";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [showConsent, setShowConsent] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleBilling = () => {
    setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly");
  };

  const plans = [
    {
      name: "Spark",
      tag: "Starting Up",
      description: "For Solo Entrepreneurs & Micro Businesses",
      monthly: 3999,
      annual: 3199,
      usdMonthly: 49,
      usdAnnual: 39,
      features: [
        "Facebook & Instagram (cross-posting)",
        "12 static posts / month",
        "1 AI Analysis revision",
        "1 calendar revision per post",
        "3 created content revisions",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Momentum",
      tag: "Growing",
      description: "For Growing SMBs ready to accelerate",
      monthly: 11999,
      annual: 9599,
      usdMonthly: 149,
      usdAnnual: 119,
      features: [
        "Facebook, Instagram & LinkedIn",
        "28 posts / month (4 static + 1 carousel + 1 reel weekly)",
        "4 LinkedIn articles / month",
        "1 AI Analysis revision",
        "1 calendar revision per post",
        "15 created content revisions",
        "Email + Chat support",
      ],
      highlight: true,
    },
    {
      name: "Apex",
      tag: "Scaling Up",
      description: "For Scaling Businesses that want dominance",
      monthly: 24999,
      annual: 19999,
      usdMonthly: 299,
      usdAnnual: 239,
      features: [
        "Facebook, Instagram, LinkedIn & Twitter",
        "60 posts / month (10 static + 3 carousel + 2 reels weekly)",
        "4 LinkedIn articles / month",
        "7 tweets / week",
        "1 AI Analysis revision",
        "1 calendar revision per post",
        "30 created content revisions",
        "Dedicated Account Manager (Email + Chat + Phone)",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-[5vw]">
      <div className="text-center mb-10 pt-[10vh]">
        <h1 className="text-4xl font-bold mb-3">
          Choose the Right Plan to Ignite, Accelerate, or Scale Your Growth
        </h1>
        <p className="text-lg text-gray-600">
          AI-powered social media management designed for every stage of your business.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className={billingCycle === "monthly" ? "font-bold" : ""}>
            Monthly
          </span>
          <button
            className="w-14 h-7 bg-gray-300 rounded-full relative"
            onClick={toggleBilling}
          >
            <span
              className={`w-6 h-6 bg-white rounded-full absolute top-0.5 transition-all ${
                billingCycle === "monthly" ? "left-0.5" : "left-7"
              }`}
            />
          </button>
          <span className={billingCycle === "annual" ? "font-bold" : ""}>
            Annual{" "}
            <span className="text-green-600">(Save 20%)</span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto pb-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition relative ${
              plan.highlight ? "border-4 border-blue-500 scale-100" : "scale-95"
            }`}
          >
            {plan.highlight && (
              <span className="absolute top-[-1px] right-[-1px] bg-blue-500 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </span>
            )}
            <h2 className="text-2xl font-bold mb-1">{plan.name}</h2>
            <p className="text-gray-500 mb-4">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">
                ₹{billingCycle === "monthly" ? plan.monthly : plan.annual}
              </span>
              <span className="text-gray-500 ml-2 text-lg">
                / {billingCycle}
              </span>
              <p className="text-sm text-gray-500">
                or $
                {billingCycle === "monthly" ? plan.usdMonthly : plan.usdAnnual}
              </p>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="text-green-500 w-5 h-5 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setSelectedPlan(plan.name);
                setShowConsent(true);
              }}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-800 text-white hover:bg-black"
              }`}
            >
              {plan.highlight ? "Start Momentum →" : `Get ${plan.name} →`}
            </button>
          </div>
        ))}
      </div>

      {showConsent && (
        <ConsentBanner
          plan={selectedPlan}
          onConsent={() => {
            console.log("Consent given, proceed checkout with", selectedPlan);
            setShowConsent(false);
          }}
          onCancel={() => setShowConsent(false)}
        />
      )}

    </div>
  );
}
