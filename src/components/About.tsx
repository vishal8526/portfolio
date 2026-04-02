import React from 'react';
import { PERSON } from '../constants/portfolio';

const About: React.FC = () => {
  const photoUrl = `${import.meta.env.BASE_URL}SAVE_20250418_112340.jpg.jpeg`;
  const resumeUrl = `${import.meta.env.BASE_URL}Vishal_Resume.pdf`;

  const highlights = [
    { icon: '📱', title: 'Flutter Development', description: 'Built production-focused Flutter features with calling APIs, Hive storage, and export modules.' },
    { icon: '🧠', title: 'Problem Solving', description: 'NPTEL-certified in C programming and OOP with a strong focus on core fundamentals.' },
    { icon: '🏆', title: 'Hackathon Winner', description: 'Internal Smart India Hackathon winner in 2024 for practical and scalable solution design.' },
    { icon: '⚡', title: 'Rapid Learner', description: 'Continuously learning through projects in mobile, web, and IoT application development.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Passionate Developer &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Designer
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-gray-800 rounded-2xl p-2 transform group-hover:-rotate-1 transition-transform duration-500">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-cyan-900">
                <img
                  src={photoUrl}
                  alt={`${PERSON.name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">1 Internship</div>
                    <div className="text-gray-400 text-sm">Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm <span className="text-white font-semibold">{PERSON.name}</span>, a B.Tech CSE student from {PERSON.location} currently studying at Poornima Institute of Engineering and Technology with a CGPA of 8.7.
                I focus on Flutter app development and building practical software solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                During my internship at Indeses Business Venture Pvt. Ltd., I developed an automatic calling system
                using Flutter, integrating call handling APIs, offline storage with Hive, and CSV/PDF export.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I enjoy solving real-world engineering problems through code and improving applications with
                reliability features like retry logic, analytics, and user-focused workflows.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Name', value: PERSON.name },
                { label: 'Location', value: PERSON.location },
                { label: 'Email', value: PERSON.email },
                { label: 'Availability', value: 'Open to Internship' },
              ].map((infoItem) => (
                <div key={infoItem.label} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="text-gray-500 text-sm">{infoItem.label}</div>
                  <div className="text-white font-medium mt-1">{infoItem.value}</div>
                </div>
              ))}
            </div>

            {/* Resume Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={resumeUrl}
                download
                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transition-transform duration-300 group-hover:scale-105"></div>
                <span className="relative text-white font-semibold">Download Resume</span>
                <svg className="relative w-5 h-5 text-white transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-gray-600 text-white font-semibold hover:border-cyan-500/70 hover:bg-gray-800/60 transition-colors"
              >
                <span>View Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6L10 16M7 7h2m-2 0v2m0-2l4 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;