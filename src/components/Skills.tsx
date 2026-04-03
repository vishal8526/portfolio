import React, { useState } from 'react';
import { IconType } from 'react-icons';
import {
  SiAndroidstudio,
  SiC,
  SiCss,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHive,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSqlite,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbApi } from 'react-icons/tb';
import {
  MdAccessTime,
  MdAccountTree,
  MdAutorenew,
  MdChatBubble,
  MdEmojiEvents,
  MdExtension,
  MdGroup,
  MdKeyboardVoice,
  MdMemory,
  MdPhoneAndroid,
  MdSettingsApplications,
  MdStorage,
} from 'react-icons/md';
import { BiBugAlt } from 'react-icons/bi';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import { VscVscode } from 'react-icons/vsc';

interface Skill {
  name: string;
  level: number;
  icon: IconType;
  iconClassName?: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'C', level: 88, icon: SiC, iconClassName: 'text-blue-400', color: 'from-blue-400 to-indigo-500' },
        { name: 'Dart', level: 85, icon: SiDart, iconClassName: 'text-cyan-400', color: 'from-cyan-400 to-blue-500' },
        { name: 'Java', level: 80, icon: FaJava, iconClassName: 'text-blue-500', color: 'from-red-400 to-orange-500' },
        { name: 'HTML', level: 90, icon: SiHtml5, iconClassName: 'text-orange-400', color: 'from-orange-400 to-red-500' },
        { name: 'CSS', level: 86, icon: SiCss, iconClassName: 'text-blue-400', color: 'from-blue-400 to-cyan-500' },
        { name: 'JavaScript', level: 84, icon: SiJavascript, iconClassName: 'text-yellow-400', color: 'from-yellow-400 to-amber-500' },
      ],
    },
    {
      title: 'App & Web Development',
      icon: '📱',
      skills: [
        { name: 'Flutter', level: 88, icon: SiFlutter, iconClassName: 'text-cyan-400', color: 'from-cyan-400 to-blue-500' },
        { name: 'React', level: 82, icon: SiReact, iconClassName: 'text-cyan-400', color: 'from-cyan-400 to-sky-500' },
        { name: 'Next.js', level: 80, icon: SiNextdotjs, iconClassName: 'text-white', color: 'from-gray-400 to-gray-700' },
        { name: 'SQLite', level: 78, icon: SiSqlite, iconClassName: 'text-indigo-400', color: 'from-indigo-400 to-blue-600' },
        { name: 'Firebase', level: 82, icon: SiFirebase, iconClassName: 'text-yellow-400', color: 'from-yellow-400 to-orange-500' },
        { name: 'Hive', level: 80, icon: SiHive, iconClassName: 'text-amber-400', color: 'from-amber-400 to-yellow-600' },
        { name: 'REST APIs', level: 85, icon: TbApi, iconClassName: 'text-purple-400', color: 'from-purple-400 to-pink-500' },
        { name: 'Phone APIs', level: 80, icon: MdPhoneAndroid, iconClassName: 'text-green-400', color: 'from-green-400 to-emerald-600' },
      ],
    },
    {
      title: 'Developer Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 88, icon: SiGit, iconClassName: 'text-orange-400', color: 'from-orange-400 to-red-500' },
        { name: 'GitHub', level: 88, icon: SiGithub, iconClassName: 'text-white', color: 'from-gray-400 to-gray-600' },
        { name: 'VS Code', level: 90, icon: VscVscode, iconClassName: 'text-blue-400', color: 'from-blue-400 to-cyan-500' },
        { name: 'Android Studio', level: 80, icon: SiAndroidstudio, iconClassName: 'text-green-400', color: 'from-green-400 to-emerald-600' },
        { name: 'CSV/PDF Export', level: 78, icon: HiOutlineDocumentArrowDown, iconClassName: 'text-slate-300', color: 'from-slate-400 to-slate-600' },
        { name: 'Debugging', level: 84, icon: BiBugAlt, iconClassName: 'text-purple-400', color: 'from-purple-400 to-indigo-500' },
      ],
    },
    {
      title: 'CS Fundamentals',
      icon: '🧠',
      skills: [
        { name: 'OOP', level: 85, icon: MdAccountTree, iconClassName: 'text-purple-400', color: 'from-purple-400 to-indigo-500' },
        { name: 'Problem Solving', level: 88, icon: MdExtension, iconClassName: 'text-blue-400', color: 'from-blue-400 to-cyan-500' },
        { name: 'Data Structures', level: 80, icon: MdStorage, iconClassName: 'text-yellow-400', color: 'from-yellow-400 to-amber-500' },
        { name: 'Algorithms', level: 78, icon: MdSettingsApplications, iconClassName: 'text-green-400', color: 'from-green-400 to-emerald-500' },
        { name: 'IoT Basics', level: 76, icon: MdMemory, iconClassName: 'text-pink-400', color: 'from-pink-400 to-rose-500' },
        { name: 'Voice Control Integration', level: 75, icon: MdKeyboardVoice, iconClassName: 'text-orange-400', color: 'from-orange-400 to-red-500' },
        { name: 'Communication', level: 90, icon: MdChatBubble, iconClassName: 'text-blue-400', color: 'from-blue-400 to-cyan-500' },
        { name: 'Leadership', level: 85, icon: MdEmojiEvents, iconClassName: 'text-yellow-400', color: 'from-yellow-400 to-amber-500' },
        { name: 'Teamwork', level: 95, icon: MdGroup, iconClassName: 'text-green-400', color: 'from-green-400 to-emerald-500' },
        { name: 'Adaptability', level: 92, icon: MdAutorenew, iconClassName: 'text-pink-400', color: 'from-pink-400 to-rose-500' },
        { name: 'Time Management', level: 88, icon: MdAccessTime, iconClassName: 'text-orange-400', color: 'from-orange-400 to-red-500' },

      ],
    },
  ];

  const techLogos = [
    'Flutter', 'React', 'Next.js', 'SQLite', 'Dart', 'Firebase', 'Hive', 'JavaScript', 'Java', 
    'C', 'Git', 'GitHub', 'VS Code', 'Android Studio', 'REST APIs',
    'HTML', 'CSS', 'CSV/PDF Export', 'OOP', 'Data Structures', 'Algorithms',
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Technologies I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Work With
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Skill set based on shipped projects including Flutter apps and Gov Portal web development with React/Next.js and SQLite.
          </p>
        </div>

        {/* Tech Marquee */}
        <div className="relative mb-16 overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          <div className="flex gap-8 animate-scroll">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 font-medium hover:border-purple-500/50 hover:text-white transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <SkillIcon className={`text-2xl ${skill.iconClassName ?? 'text-white'}`} />
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Skills Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: '💻', value: '15+', label: 'Core Technologies', color: 'from-purple-500 to-pink-500' },
            { icon: '📚', value: '6', label: 'Main Projects', color: 'from-cyan-500 to-blue-500' },
            { icon: '🏆', value: '1', label: 'Hackathon Win', color: 'from-green-500 to-emerald-500' },
            { icon: '🎓', value: '8.7', label: 'Current CGPA', color: 'from-orange-500 to-red-500' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center overflow-hidden hover:border-purple-500/30 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;