import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Working from'./components/Working'
import BuiltFor from './components/BuiltFor'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <Working/>
        <BuiltFor/>
      </main>
      <Footer />
    </div>
  )
}