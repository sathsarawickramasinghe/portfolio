import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      {/* Ambient Glow Background Bubbles */}
      <div className="glow-bg">
        <div className="glow-bubble glow-bubble-1"></div>
        <div className="glow-bubble glow-bubble-2"></div>
        <div className="glow-bubble glow-bubble-3"></div>
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Pages / Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer Anchoring */}
      <Footer />
    </>
  );
}

export default App;
