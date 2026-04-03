import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeoutId = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(loadingTimeoutId);
  }, []);

  useEffect(() => {
    if (window.location.hash.startsWith('#project/')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const openProjectPage = (_projectId: string) => {
    return;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/30"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
            <div className="absolute inset-3 rounded-full border-4 border-transparent border-t-cyan-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
          </div>
          <p className="text-white text-xl font-light tracking-widest animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects onOpenProject={openProjectPage} />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;