import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link: string;
  github: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Automatic Calling System',
      description: 'Flutter-based automatic calling app that streamlines bulk calling with offline feedback tracking and CSV/PDF exports.',
      image: '📞',
      tags: ['Flutter', 'Hive', 'Firebase', 'Phone APIs'],
      category: 'mobile',
      link: '#',
      github: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Home Automation System',
      description: 'IoT-based smart home solution with centralized control, real-time monitoring, and voice assistant integration.',
      image: '🏠',
      tags: ['IoT', 'Voice Control', 'Automation', 'Mobile App'],
      category: 'iot',
      link: '#',
      github: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Eventomate',
      description: 'Web-based event management platform with registration, booking flow, and admin-side user/data handling.',
      image: '🎟️',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      category: 'web',
      link: 'https://vishal8526.github.io/Eventomate/',
      github: 'https://github.com/vishal8526/Eventomate',
      featured: true,
    },
    {
      id: 4,
      title: 'Habit Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and progress with social challenges.',
      image: '💪',
      tags: ['Flutter', 'Firebase', 'HealthKit'],
      category: 'mobile',
      link: '#',
      github: '#',
      featured: true,
    },
      {
      id: 5,
      title: 'Mindful Spending',
      description: 'Mobile app for tracking Transactions, Managing Budget, and progress with social challenges.',
      image: '💸',
      tags: ['Flutter', 'Firebase', 'chart package'],
      category: 'mobile',
      link: '#',
      github: '#',
      featured: true,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'web', label: 'Web App' },
    { id: 'iot', label: 'IoT' },
  ];

  const filteredProjects = activeCategoryId === 'all' 
    ? projects 
    : projects.filter((projectItem) => projectItem.category === activeCategoryId);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent work. Each project represents unique challenges and creative solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategoryId === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-xs font-semibold text-white">
                  Featured
                </div>
              )}

              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center overflow-hidden">
                <div className={`text-8xl transition-transform duration-500 ${hoveredProjectId === project.id ? 'scale-110' : ''}`}>
                  {project.image}
                </div>
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent flex items-end justify-center pb-6 transition-opacity duration-300 ${
                  hoveredProjectId === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-gray-700 transition-colors border border-gray-700"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl border-2 border-gray-700 hover:border-purple-500 transition-colors">
            <span className="text-white font-semibold">View All Projects</span>
            <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;