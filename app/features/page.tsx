"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturesBenefitsPage from "../features/Digibility_features_benefits_ui";

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <FeaturesBenefitsPage />
      </main>
      <Footer />
    </>
  );
}
