import React, { useState, useEffect } from 'react';
import { PERSON, SECTION_NAV_ITEMS } from '../constants/portfolio';
import { scrollToSection } from '../utils/scrollToSection';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = SECTION_NAV_ITEMS.map((sectionItem) => document.getElementById(sectionItem.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sectionElement, sectionIndex) => {
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(SECTION_NAV_ITEMS[sectionIndex].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleSectionClick('home')}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{PERSON.initials}</span>
                </div>
                <span className="text-white font-bold text-xl hidden sm:block">{PERSON.name}</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {SECTION_NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg" />
                )}
                <span className="relative">{item.label}</span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                  activeSection === item.id ? 'w-1/2' : 'w-0 group-hover:w-1/4'
                }`} />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleSectionClick('contact')}
              className="relative group px-6 py-2.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-full group-hover:bg-transparent transition-all duration-300"></div>
              <span className="relative text-white font-medium text-sm">Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-1'}`}></span>
              <span className={`absolute left-0 top-3 w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 px-4 py-6">
          {SECTION_NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleSectionClick('contact')}
            className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-medium"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;