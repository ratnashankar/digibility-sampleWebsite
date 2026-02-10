"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ModulesBand } from "@/components/ModulesBand";

import { ProductTour } from "@/components/ProductTour";
import { PersonasOutcomes } from "@/components/PersonasOutcomes";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SocialProof } from "@/components/SocialProof";
import { FreeToolsTeaser } from "@/components/FreeToolsTeaser";
import { SecurityCompliance } from "@/components/SecurityCompliance";

import { FinalCTA } from "@/components/CTA";

import Footer from "@/components/Footer";

export default function Homepage() {
  return (
    <div className="App" data-testid="homepage">
      <Header />
      <Hero />
      <ModulesBand />
      <ProductTour />
      <PersonasOutcomes />
      <ComparisonTable />
      <SocialProof />
      <FreeToolsTeaser />
      <SecurityCompliance />

      <FinalCTA />
      <Footer />
    </div>
  );
}


