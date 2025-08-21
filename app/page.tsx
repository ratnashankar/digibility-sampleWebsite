"use client";
import Hero from './components/Hero';
import Features from './components/Features';
import BlogPreview from './components/BlogPreview';
import CTA from './components/CTA';
import Header from './components/Header';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <Features />
      <BlogPreview />
      <CTA />
      <Footer/>
    </main>
  );
}
