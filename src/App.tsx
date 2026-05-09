import React, { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage.tsx';
import type { FlutterProjectId } from './constants/flutterShowcase';

const FLUTTER_PROJECT_IDS: FlutterProjectId[] = [
  'automatic-calling-system',
  'habit-tracker',
  'mindful-spending',
];

const isFlutterProjectId = (value: string): value is FlutterProjectId =>
  FLUTTER_PROJECT_IDS.includes(value as FlutterProjectId);

const getProjectIdFromHash = () => {
  const hashMatch = window.location.hash.match(/^#project\/([^/?#]+)/);

  if (!hashMatch) {
    return null;
  }

  const projectId = decodeURIComponent(hashMatch[1]);
  return isFlutterProjectId(projectId) ? projectId : null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeProjectId, setActiveProjectId] = useState<FlutterProjectId | null>(null);
  const portfolioScrollYRef = useRef<number | null>(null);

  useEffect(() => {
    const loadingTimeoutId = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(loadingTimeoutId);
  }, []);

  useEffect(() => {
    const syncProjectRoute = () => {
      setActiveProjectId(getProjectIdFromHash());
    };

    syncProjectRoute();
    window.addEventListener('hashchange', syncProjectRoute);

    return () => window.removeEventListener('hashchange', syncProjectRoute);
  }, []);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    if (activeProjectId || portfolioScrollYRef.current === null) {
      return;
    }

    const restorePositionId = window.requestAnimationFrame(() => {
      window.scrollTo({ top: portfolioScrollYRef.current ?? 0, behavior: 'auto' });
      portfolioScrollYRef.current = null;
    });

    return () => window.cancelAnimationFrame(restorePositionId);
  }, [activeProjectId]);

  const openProjectPage = (projectId: string) => {
    if (!isFlutterProjectId(projectId)) {
      return;
    }

    portfolioScrollYRef.current = window.scrollY;

    const nextHash = `#project/${projectId}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const closeProjectPage = () => {
    window.location.hash = '';
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

  if (activeProjectId) {
    return <ProjectDetailPage projectId={activeProjectId} onBack={closeProjectPage} />;
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
      <Analytics />
    </div>
  );
};

export default App;