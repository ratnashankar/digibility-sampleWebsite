import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Working from "./components/Working";
import BuiltFor from "./components/BuiltFor";
import About from "./components/About";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Header />
                <Hero />
                <Features />
                <Pricing />
                <Working />
                <BuiltFor />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
