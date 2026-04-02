import React, { useState } from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education';
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Flutter Intern',
      company: 'Indeses Business Venture Pvt. Ltd.',
      location: 'Jaipur, Rajasthan',
      period: 'June 2025',
      description: [
        'Designed and developed an automatic calling system in Flutter for bulk calling workflows.',
        'Integrated call handling APIs including flutter_phone_direct_caller, phone_state, and permission_handler.',
        'Implemented offline storage with Hive for call logs and feedback records.',
        'Added retry logic and CSV/PDF export to improve reliability and reporting.',
      ],
      technologies: ['Flutter', 'Hive', 'Firebase', 'Phone APIs', 'CSV/PDF Export'],
      type: 'work',
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'Indeses Business Venture Pvt. Ltd.',
      location: 'Jaipur, Rajasthan',
      period: '15 Days (June 2024)',
      description: [
        'Designed and developed an Event Management System in HTML, CSS, and JavaScript',
        'Implemented a responsive and user-friendly interface for event registration, booking, and admin management.',
        'Implemented form handling, data storage, and user management to streamline event organization.',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      type: 'work',
    },
    {
      id: 3,
      title: 'B.Tech in Computer Science Engineering',
      company: 'Poornima Institute of Engineering and Technology',
      location: 'Jaipur, Rajasthan',
      period: '2023 - Present',
      description: [
        'Current CGPA: 8.7.',
        'Focused on computer science fundamentals and application development.',
      ],
      technologies: ['C', 'Java', 'Dart', 'OOP'],
      type: 'education',
    },
    {
      id: 4,
      title: 'Class XII (RBSE Board)',
      company: 'New Paragoan Sr. Sec. School',
      location: 'Kotputli, Rajasthan',
      period: '2023',
      description: [
        'Completed higher secondary education with 70.0% marks.',
      ],
      technologies: ['Mathematics', 'Science', 'Computer Basics'],
      type: 'education',
    },
    {
      id: 5,
      title: 'Class X (RBSE Board)',
      company: 'Bharti Public Sr. Sec. School',
      location: 'Alwar, Rajasthan',
      period: '2021',
      description: [
        'Completed secondary education with 92.0% marks.',
      ],
      technologies: ['Analytical Skills', 'Problem Solving'],
      type: 'education',
    },
  ];

  const visibleExperiences = experiences.filter((experienceItem) => experienceItem.type === activeTab);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            My Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Journey
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: 'work', label: 'Work Experience', icon: '💼' },
            { id: 'education', label: 'Education', icon: '🎓' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'work' | 'education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500"></div>

          {visibleExperiences.map((experienceItem, index) => (
            <div
              key={experienceItem.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-purple-500/50">
                <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {experienceItem.period}
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {experienceItem.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <span className="font-medium text-cyan-400">{experienceItem.company}</span>
                    <span>•</span>
                    <span className="text-sm">{experienceItem.location}</span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {experienceItem.description.map((detailItem, detailIndex) => (
                      <li key={`${experienceItem.id}-detail-${detailIndex}`} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-purple-400 mt-1">▸</span>
                        {detailItem}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experienceItem.technologies.map((technology) => (
                      <span
                        key={`${experienceItem.id}-${technology}`}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;