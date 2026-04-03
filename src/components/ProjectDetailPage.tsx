import React from 'react';

interface ProjectDetailPageProps {
  projectId: 'automatic-calling-system' | 'habit-tracker' | 'mindful-spending';
  onBack: () => void;
}

const projectDetails = {
  'automatic-calling-system': {
    title: 'Automatic Calling System',
    developer: 'Vishal Gupta',
    containsText: 'Contains ads · In-app purchases',
    icon: '📞',
    iconBg: 'from-cyan-500 to-blue-600',
    rating: '4.9',
    reviews: '1.1K reviews',
    downloads: '1K+',
    ageRating: 'Rated for 3+',
    availableText: 'This app is available for your device',
    familyText: 'You can share this with your family.',
    shortDescription:
      'Finally, one app to streamline calling workflows. Automatic Calling System helps with bulk calling, offline feedback tracking, and report exports.',
    aboutHeading: 'WHAT IS AUTOMATIC CALLING SYSTEM?',
    aboutText:
      'A productivity app to automate calling queues, track responses, and generate CSV/PDF summaries while keeping data accessible offline.',
    updatedOn: '31 Mar 2026',
    category: 'Productivity',
    techStack: ['Flutter', 'Dart', 'Hive', 'Firebase', 'Phone APIs'],
    screenshotCards: [
      { title: 'CALL DASHBOARD', caption: 'Track daily calling queue and activity', icon: '📱', color: 'from-sky-400 to-blue-500' },
      { title: 'AUTO DIAL FLOW', caption: 'Start/stop automated call sequence', icon: '📞', color: 'from-red-500 to-pink-500' },
      { title: 'REPORT HISTORY', caption: 'Review completion and response logs', icon: '📊', color: 'from-amber-400 to-orange-500' },
      { title: 'EXPORT CENTER', caption: 'Generate CSV and PDF reports', icon: '🧾', color: 'from-emerald-400 to-cyan-500' },
    ],
    similarApps: [
      { name: 'Call Notes Pro', studio: 'CallTech Labs', rating: '4.6', icon: '📘' },
      { name: 'CRM Dialer Lite', studio: 'SalesFlow', rating: '4.5', icon: '📗' },
      { name: 'Auto Follow-up', studio: 'TaskBee', rating: '4.4', icon: '📙' },
    ],
  },
  'habit-tracker': {
    title: 'Habit Tracker',
    developer: 'Vishal Gupta',
    containsText: 'Contains ads · In-app purchases',
    icon: '💪',
    iconBg: 'from-red-500 to-rose-600',
    rating: '4.8',
    reviews: '1.3K reviews',
    downloads: '50L+',
    ageRating: 'Rated for 3+',
    availableText: 'This app is available for your device',
    familyText: 'You can share this with your family.',
    shortDescription:
      'Finally, one app to organize your routine. Habit Tracker replaces multiple tools for habits, mood, goals, and daily consistency.',
    aboutHeading: 'WHAT IS HABIT TRACKER?',
    aboutText:
      'Your personal routine dashboard. Build habits, track streaks, improve consistency, and stay focused with simple analytics and reminders.',
    updatedOn: '31 Mar 2026',
    category: 'Productivity',
    techStack: ['Flutter', 'Firebase', 'HealthKit', 'Dart'],
    screenshotCards: [
      { title: 'DAILY HABIT PLANNER', caption: 'Plan and complete daily routine', icon: '📘', color: 'from-sky-400 to-blue-500' },
      { title: '100% CUSTOMIZABLE', caption: 'Adjust icon, color, and goals', icon: '🛠️', color: 'from-red-500 to-pink-500' },
      { title: 'KEEP LONG STREAKS', caption: 'Build consistency with reminders', icon: '🔥', color: 'from-yellow-400 to-amber-500' },
      { title: 'TRACK YOUR PROGRESS', caption: 'View trend charts and history', icon: '📈', color: 'from-emerald-400 to-cyan-500' },
    ],
    similarApps: [
      { name: 'Regain: Study Timer for Focus', studio: 'EmpowerX Labs', rating: '4.6', icon: '⏳' },
      { name: 'HabitNow Daily Routine Planner', studio: 'HabitNow', rating: '4.7', icon: '✅' },
      { name: 'Motivation - Daily quotes', studio: 'Monkey Taps LLC', rating: '4.7', icon: '❞' },
      { name: 'Habit Tracker, Routine Planner', studio: 'Routinery', rating: '4.4', icon: '🐣' },
    ],
  },
  'mindful-spending': {
    title: 'Mindful Spending',
    developer: 'Vishal Gupta',
    containsText: 'Contains ads · In-app purchases',
    icon: '💸',
    iconBg: 'from-emerald-500 to-teal-600',
    rating: '4.7',
    reviews: '780 reviews',
    downloads: '10K+',
    ageRating: 'Rated for 3+',
    availableText: 'This app is available for your device',
    familyText: 'You can share this with your family.',
    shortDescription:
      'A smart budget companion to track transactions, manage monthly limits, and visualize spending patterns with simple charts.',
    aboutHeading: 'WHAT IS MINDFUL SPENDING?',
    aboutText:
      'Track every expense, build budgets, and monitor progress in one place. Designed for clarity, speed, and practical financial habits.',
    updatedOn: '31 Mar 2026',
    category: 'Finance',
    techStack: ['Flutter', 'Firebase', 'Chart Package', 'Dart'],
    screenshotCards: [
      { title: 'BUDGET DASHBOARD', caption: 'View monthly spend at a glance', icon: '🏦', color: 'from-sky-400 to-indigo-500' },
      { title: 'TRANSACTION TRACKING', caption: 'Log income and expenses quickly', icon: '💳', color: 'from-red-500 to-pink-500' },
      { title: 'SPENDING ANALYTICS', caption: 'Understand trends with charts', icon: '📉', color: 'from-violet-500 to-purple-600' },
      { title: 'SAVING GOALS', caption: 'Set targets and follow progress', icon: '🎯', color: 'from-emerald-400 to-cyan-500' },
    ],
    similarApps: [
      { name: 'Pocket Expense Tracker', studio: 'FinLabs', rating: '4.6', icon: '📒' },
      { name: 'Daily Budget Planner', studio: 'MoneyCore', rating: '4.5', icon: '📗' },
      { name: 'Smart Wallet', studio: 'SpenderTech', rating: '4.4', icon: '👛' },
    ],
  },
} as const;

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, onBack }) => {
  const project = projectDetails[projectId];
  const ratingBars = [78, 35, 12, 4, 6];

  return (
    <main className="min-h-screen bg-[#f5f6f7] text-gray-800">
      <div className="sticky top-0 z-40 backdrop-blur-xl bg-white/90 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-xl">←</span>
            <span className="font-medium">Back to Portfolio</span>
          </button>
          <div className="text-sm text-gray-500">App details</div>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">{project.title}</h1>
              <div className="mt-4 text-2xl font-semibold text-emerald-700">{project.developer}</div>
              <div className="mt-1 text-gray-500">{project.containsText}</div>

              <div className="mt-8 flex flex-wrap items-stretch divide-x divide-gray-300 text-center">
                <div className="px-8 py-1">
                  <div className="text-3xl font-semibold text-gray-900">{project.rating}★</div>
                  <div className="text-2xl font-bold text-gray-900"></div>
                  <div className="mt-1 text-2xl font-bold text-gray-900"></div>
                  <div className="mt-1 text-gray-500 text-sm">{project.reviews}</div>
                </div>
                <div className="px-8 py-1">
                  <div className="text-3xl font-semibold text-gray-900">{project.downloads}</div>
                  <div className="mt-1 text-gray-500 text-sm">Downloads</div>
                </div>
                <div className="px-8 py-1">
                  <div className="text-3xl font-semibold text-gray-900">3+</div>
                  <div className="mt-1 text-gray-500 text-sm">{project.ageRating}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 mt-8">
                <a
                  href="#"
                  className="min-w-[220px] px-6 py-3 rounded-xl bg-emerald-600 font-semibold text-white text-center hover:bg-emerald-700 transition-colors"
                >
                  Install
                </a>
                <a
                  href="#"
                  className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
                >
                  Share
                </a>
                <a
                  href="#"
                  className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
                >
                  Add to wishlist
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-gray-600">
                <div>{project.availableText}</div>
                <div>{project.familyText}</div>
              </div>
            </div>

            <div className="flex lg:justify-end">
              <div className={`w-64 h-64 rounded-[2.5rem] bg-gradient-to-br ${project.iconBg} shadow-xl flex items-center justify-center text-[7rem]`}>
                {project.icon}
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4 overflow-x-auto pb-2">
            {project.screenshotCards.map((shot) => (
              <div key={shot.title} className="min-w-[220px] sm:min-w-[250px] rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-sm">
                <div className={`aspect-[9/16] bg-gradient-to-br ${shot.color} p-4 flex flex-col justify-between`}>
                  <div className="text-white text-2xl font-bold leading-tight">{shot.title}</div>
                  <div className="text-5xl">{shot.icon}</div>
                  <div className="text-white/90 text-sm">{shot.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold">About this app</h2>
                  <p className="text-gray-500 text-sm mt-1">{project.shortDescription}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4">{project.aboutHeading}</h3>
              <p className="text-gray-600 mt-4 leading-8">{project.aboutText}</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-gray-500">Updated on</div>
                  <div className="text-lg font-semibold mt-1">{project.updatedOn}</div>
                </div>
                <div>
                  <div className="text-gray-500">Category</div>
                  <div className="inline-flex mt-2 px-4 py-1.5 rounded-full border border-gray-300 bg-gray-100 text-gray-700 font-medium">
                    {project.category}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold">Data safety</h2>
              <p className="text-gray-600 mt-4 leading-8">
                Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region and age.
              </p>
              <div className="mt-6 rounded-2xl border border-gray-300 bg-gray-50 p-5 space-y-4 text-gray-700">
                <div>No data shared with third parties</div>
                <div>This app may collect app activity and personal info</div>
                <div>Data is encrypted in transit</div>
                <div className="text-emerald-700 font-semibold">See details</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">Ratings and reviews</h2>
                <span className="text-gray-500">Ratings and reviews are verified</span>
              </div>
              <div className="mt-6 grid md:grid-cols-[0.28fr_0.72fr] gap-8">
                <div>
                  <div className="text-7xl font-semibold leading-none">{project.rating}</div>
                  <div className="text-emerald-700 text-xl mt-2">★★★★★</div>
                  <div className="text-gray-500 mt-2">{project.reviews}</div>
                </div>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star, index) => (
                    <div key={star} className="flex items-center gap-3">
                      <span className="w-4 text-sm text-gray-600">{star}</span>
                      <div className="h-3 flex-1 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 rounded-full"
                          style={{ width: `${ratingBars[index]}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg">Sample user review</div>
                    <div className="text-gray-500 text-sm">21 August 2025</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 leading-8">
                  The app looks attractive and has useful features like routine tracking and progress insights in one place. A clean UI and practical workflow make daily use easy.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold">App support</h3>
              <p className="mt-3 text-gray-600 leading-7">
                For app support, bug reports, and feature requests, use the contact section in this portfolio.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Tech stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-700 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
