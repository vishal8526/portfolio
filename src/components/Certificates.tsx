import React, { useState } from 'react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  icon: string;
  color: string;
  skills: string[];
}

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Internal Smart India Hackathon Winner',
      issuer: 'PIET AICTE IDEA LAB',
      date: '2024',
      credentialId: 'SIH-INT-2024',
      icon: '🏆',
      color: 'from-yellow-400 to-orange-600',
      skills: ['Problem Solving', 'Team Collaboration', 'Rapid Prototyping', 'Innovation'],
    },
    {
      id: 2,
      title: 'Problem Solving Through Programming in C',
      issuer: 'NPTEL',
      date: '2024',
      credentialId: 'NPTEL-C-PROG',
      icon: '🧮',
      color: 'from-blue-400 to-indigo-600',
      skills: ['C Programming', 'Logic Building', 'Problem Solving', 'Fundamentals'],
    },
    {
      id: 3,
      title: 'Fundamentals of Object Oriented Programming',
      issuer: 'NPTEL',
      date: '2024',
      credentialId: 'NPTEL-OOP',
      icon: '🧠',
      color: 'from-purple-400 to-indigo-600',
      skills: ['OOP Concepts', 'Class Design', 'Abstraction', 'Code Reusability'],
    },
    {
      id: 4,
      title: 'Dart & Flutter Development Certification',
      issuer: 'Samyak Computer Classes',
      date: '2025',
      credentialId: 'SAMYAK-DFD',
      icon: '📱',
      color: 'from-cyan-400 to-blue-500',
      skills: ['Flutter', 'Dart', 'Mobile UI', 'App Development'],
    },
    {
      id: 5,
      title: 'Cybersecurity Certification',
      issuer: 'Google Cloud',
      date: '2026',
      credentialId: 'GOOGLE-CYBER',
      icon: '🔒',
      color: 'from-cyan-400 to-blue-500',
      skills: ['Cybersecurity', 'Network Security', 'Threat Analysis', 'Incident Response'],
    },
  ];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">Certifications</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Certifications &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Recognitions and certifications from hackathons, NPTEL courses, and Flutter development training.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 cursor-pointer hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {cert.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-xs">{cert.date}</p>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '5', label: 'Certificates', icon: '🏅' },
            { value: '1', label: 'Hackathon Win', icon: '🏆' },
            { value: '2', label: 'NPTEL Courses', icon: '📘' },
            { value: '1', label: 'Flutter Certification', icon: '📱' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center group hover:border-purple-500/30 transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-gray-800 border border-gray-700 rounded-3xl p-8 max-w-lg w-full transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Content */}
            <div className="text-center">
              <div className={`w-24 h-24 bg-gradient-to-br ${selectedCert.color} rounded-3xl flex items-center justify-center text-5xl mx-auto mb-6 shadow-xl`}>
                {selectedCert.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
              <p className="text-cyan-400 font-medium mb-1">{selectedCert.issuer}</p>
              <p className="text-gray-400 text-sm mb-6">{selectedCert.date}</p>

              {/* Credential ID */}
              <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
                <p className="text-gray-500 text-xs mb-1">Credential ID</p>
                <p className="text-white font-mono">{selectedCert.credentialId}</p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-3">Skills Validated</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedCert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-shadow">
                Verify Credential
              </button>
            </div>
          </div>

          <style>{`
            @keyframes scale-in {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-scale-in { animation: scale-in 0.3s ease-out; }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default Certificates;