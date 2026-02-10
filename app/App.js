import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "@/pages/Homepage";
import { FeaturesPage } from "@/pages/FeaturesPage";
import { RoadmapPage } from "@/pages/RoadmapPage";
import { PricingPage } from "@/pages/PricingPage";
import { AboutPage } from "@/pages/AboutPage";
import { FAQPage } from "@/pages/FAQPage";
import { BlogPage } from "@/pages/BlogPage";
import { ContactPage } from "@/pages/ContactPage";
import { ComparisonPage } from "@/pages/ComparisonPage";

// New Functional Tools
import { CaptionGeneratorTool } from "@/pages/tools/CaptionGeneratorTool";
import { BestTimeDemoTool } from "@/pages/tools/BestTimeDemoTool";
import { UTMBuilderTool } from "@/pages/tools/UTMBuilderTool";
import { HookHeadlineTool } from "@/pages/tools/HookHeadlineTool";
import { PostIdeasFromURLTool } from "@/pages/tools/PostIdeasFromURLTool";
import { CalendarTemplateTool } from "@/pages/tools/CalendarTemplateTool";
import HashtagGeneratorTool from "@/pages/tools/HashtagGeneratorTool";
import { 
  PrivacyPolicy, 
  TermsOfService, 
  AcceptableUse, 
  SubProcessors, 
  DPA 
} from "@/pages/LegalPages";
import { ENABLE_ANALYTICS, GA4_ID, META_PIXEL_ID } from "@/config/analytics";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (ENABLE_ANALYTICS) {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA4_ID);
      }
      
      if (typeof window.fbq !== 'undefined') {
        window.fbq('init', META_PIXEL_ID);
        window.fbq('track', 'PageView');
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        
        {/* Functional Free Tools */}
        <Route path="/tools/caption-generator" element={<CaptionGeneratorTool />} />
  
        <Route path="/tools/best-time-demo" element={<BestTimeDemoTool />} />
        <Route path="/tools/utm-builder" element={<UTMBuilderTool />} />
        <Route path="/tools/hook-headline" element={<HookHeadlineTool />} />
        <Route path="/tools/post-ideas-from-url" element={<PostIdeasFromURLTool />} />
        <Route path="/tools/calendar-template" element={<CalendarTemplateTool />} />
         <Route path="/tools/hashtag-generator" element={<HashtagGeneratorTool />} />
        {/* Legal Pages */}
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
        <Route path="/legal/terms" element={<TermsOfService />} />
        <Route path="/legal/acceptable-use" element={<AcceptableUse />} />
        <Route path="/legal/sub-processors" element={<SubProcessors />} />
        <Route path="/legal/dpa" element={<DPA />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
