import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ImaginePart from "./components/ImaginePart";
import Footer from "./components/Footer";
import Working from "./components/Working";
import BuiltFor from "./components/BuiltFor";
import About from "./components/About";
import Contact from "./components/Contact";
import pho5 from "../src/assets/storybg.JPG";


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
                <div
                  className="h-fit bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${pho5})` }}
                >
                  <Features />
                  <ImaginePart />
                  <Working />
                  <BuiltFor />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
