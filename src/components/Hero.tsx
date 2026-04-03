import React, { useEffect, useState } from 'react';
import { PERSON } from '../constants/portfolio';
import { scrollToSection } from '../utils/scrollToSection';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const activeTitle = PERSON.titleCycle[activeTitleIndex];

    const typingTimeoutId = setTimeout(() => {
      if (!isDeleting) {
        if (typedTitle.length < activeTitle.length) {
          setTypedTitle(activeTitle.slice(0, typedTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedTitle.length > 0) {
          setTypedTitle(typedTitle.slice(0, -1));
        } else {
          setIsDeleting(false);
          setActiveTitleIndex((previousTitleIndex) => (previousTitleIndex + 1) % PERSON.titleCycle.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typingTimeoutId);
  }, [typedTitle, isDeleting, activeTitleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating Orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x / 20,
            top: mousePosition.y / 20,
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            right: mousePosition.x / 30,
            bottom: mousePosition.y / 30,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, particleIndex) => (
          <div
            key={particleIndex}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-gray-300 text-sm">{PERSON.availabilityText}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Hi, I'm </span>
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              {PERSON.name}
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 blur-2xl opacity-30"></span>
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8 h-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="text-white">A </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
            {typedTitle}
          </span>
          <span className="animate-blink text-purple-400">|</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          B.Tech CSE student at PIET Jaipur with hands-on experience in Flutter and web development.
          I build practical products like Gov Portal using React/Next.js, SQLite, Firebase, and clean engineering practices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0.5 bg-gray-900 rounded-full group-hover:bg-opacity-0 transition-all duration-500"></div>
            <span className="relative flex items-center gap-2 text-white font-semibold">
              View My Work
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 border-2 border-gray-700 hover:border-purple-500 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="flex items-center gap-2">
              Let's Talk
              <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {[
            { value: '1', label: 'Internship' },
            { value: '5+', label: 'Key Projects' },
            { value: '8.7', label: 'Current CGPA' },
            { value: '2024', label: 'SIH Winner (Internal)' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('about')} className="p-2 text-gray-500 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </section>
  );
};

export default Hero;