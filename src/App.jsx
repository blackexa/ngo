import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Aims from './components/Aims'
import Support from './components/Support'
import Quotes from './components/Quotes'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingDonate from './components/FloatingDonate'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Aims />
        <Support />
        <Quotes />
        <Contact />
        <Footer />
        <FloatingDonate />
      </div>
    </LanguageProvider>
  )
}

export default App
