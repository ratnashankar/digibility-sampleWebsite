import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import pho5 from "../src/assets/storybg.JPG";

const Hero = lazy(() => import("./components/Hero"));
const FeaturesOfHomePage = lazy(() => import("./components/Features"));
const ImaginePart = lazy(() => import("./components/ImaginePart"));
const Working = lazy(() => import("./components/Working"));
const BuiltFor = lazy(() => import("./components/BuiltFor"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RoadmapPage = lazy(() => import("./components/Digibility_roadmap_ui"));
const Pricing = lazy(() => import("./components/Digibility_pricing_ui"));
const Features = lazy(() => import("./components/Digibility_features_benefits_ui"));
const Privacy = lazy(() => import("./components/Digibility_privacy_react"));
const Refund = lazy(() => import("./components/Digibility_refund_policy_react"));
const Terms = lazy(() => import("./components/Digibility_terms_react"));
const Carrier = lazy(() => import("./components/Digibility_careers_react"));
const Cookies = lazy(() => import("./components/Digibility_cookie_policy_react"));
const Disclamer = lazy(() => import("./components/Digibility_disclaimer_react"));

const routes = [
  { path: "/", element: (
      <>
        <Hero />
        <div
          className="h-fit bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${pho5})` }}
        >
          <FeaturesOfHomePage />
          <ImaginePart />
          <Working />
          <BuiltFor />
        </div>
      </>
    )
  },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/roadmap", element: <RoadmapPage /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/features", element: <Features /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/refund", element: <Refund /> },
  { path: "/terms", element: <Terms /> },
  { path: "/careers", element: <Carrier /> },
  { path: "/cookie", element: <Cookies /> },
  { path: "/disclaimer", element: <Disclamer /> },
];

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
