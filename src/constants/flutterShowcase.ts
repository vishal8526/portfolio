export type FlutterProjectId = 'automatic-calling-system' | 'habit-tracker' | 'mindful-spending';

export interface ShowcaseStat {
  label: string;
  value: string;
}

export interface ShowcaseFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ShowcaseProject {
  id: FlutterProjectId;
  name: string;
  category: string;
  tagline: string;
  subtitle: string;
  logoMark: string;
  logoUrl?: string;
  colorFrom: string;
  colorTo: string;
  stats: ShowcaseStat[];
  description: string;
  purpose: string;
  benefits: string[];
  features: ShowcaseFeature[];
  screenshots: string[];
  highlights: string[];
  version: string;
  size: string;
  downloads: string;
  platformSupport: string;
  apkLabel: string;
  apkPath?: string;
}

const createAssetList = (folderName: string, files: string[]) =>
  files.map((fileName) => new URL(`../../App photo/${folderName}/${fileName}`, import.meta.url).href);

const connectFlowScreenshots = createAssetList('ConnectFlow', [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.png',
]);

const habitBanaoScreenshots = createAssetList('HabitBanao', [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
]);

const mindfulSpendingScreenshots = createAssetList('Mindful Spending', [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.png',
]);

const habitBanaoLogo = createAssetList('HabitBanao', ['HabitBanao Logo.png'])[0];
const mindfulSpendingLogo = createAssetList('Mindful Spending', ['MindFull logo.png'])[0];

// APK paths - served as static assets
const connectFlowApk = `${import.meta.env.BASE_URL}App photo/ConnectFlow/Connectflow.apk`;
const habitBanaoApk = `${import.meta.env.BASE_URL}App photo/HabitBanao/HabitBanao.apk`;
const mindfulSpendingApk = `${import.meta.env.BASE_URL}App photo/Mindful Spending/Mindful.apk`;

export const FLUTTER_PROJECT_SHOWCASES: Record<FlutterProjectId, ShowcaseProject> = {
  'automatic-calling-system': {
    id: 'automatic-calling-system',
    name: 'Automatic Calling System',
    category: 'Flutter Productivity App',
    tagline: 'A refined call-operations hub built for speed, clarity, and offline reliability.',
    subtitle: 'Premium workflow management for bulk calls, feedback capture, and export-ready reporting.',
    logoMark: '📞',
    colorFrom: 'from-cyan-500',
    colorTo: 'to-blue-700',
    stats: [
      { label: 'Downloads', value: '1K+' },
      { label: 'Version', value: '2.4.0' },
      { label: 'Size', value: '28 MB' },
      { label: 'Support', value: 'Android + Web' },
    ],
    description:
      'Automatic Calling System transforms repetitive calling workflows into a polished mobile experience. The app helps teams manage large call lists, record outcomes, and generate reports without losing momentum when connectivity drops.',
    purpose: 'Designed to streamline high-volume calling operations with a modern mobile UI and resilient offline-first storage.',
    benefits: [
      'Move through calling lists quickly with a clean, low-friction interface.',
      'Keep essential feedback and history available even when the network is unreliable.',
      'Export summaries into formats that are easy to share with stakeholders.',
    ],
    features: [
      { title: 'Fast Performance', description: 'Optimized interactions for rapid call logging and queue updates.', icon: '⚡' },
      { title: 'Secure Data', description: 'Local persistence and Firebase-backed sync for dependable records.', icon: '🔒' },
      { title: 'Offline Support', description: 'Continue capturing feedback without depending on a live connection.', icon: '📡' },
      { title: 'Beautiful UI', description: 'A polished Flutter interface tuned for clarity and confidence.', icon: '✨' },
      { title: 'Smart Notifications', description: 'Timely prompts keep follow-ups and next actions visible.', icon: '🔔' },
      { title: 'Cloud Sync', description: 'Structured data flows keep reporting and backups easy to manage.', icon: '☁️' },
    ],
    screenshots: connectFlowScreenshots,
    highlights: ['Bulk calling', 'Offline feedback', 'CSV export', 'PDF export', 'Track completion'],
    version: '2.4.0',
    size: '28 MB',
    downloads: '1K+',
    platformSupport: 'Android and responsive web preview',
    apkLabel: 'Request APK',
    apkPath: connectFlowApk,
  },
  'habit-tracker': {
    id: 'habit-tracker',
    name: 'Habit Tracker',
    category: 'Flutter Wellness App',
    tagline: 'A premium routine companion for habits, consistency, and daily momentum.',
    subtitle: 'Everything you need to build streaks, stay focused, and measure progress beautifully.',
    logoMark: '💪',
    logoUrl: habitBanaoLogo,
    colorFrom: 'from-rose-500',
    colorTo: 'to-orange-600',
    stats: [
      { label: 'Downloads', value: '50L+' },
      { label: 'Version', value: '3.1.2' },
      { label: 'Size', value: '24 MB' },
      { label: 'Support', value: 'Android + iOS' },
    ],
    description:
      'Habit Tracker turns your daily routine into an elegant dashboard. It combines streak tracking, reminders, and progress insights so users can build healthier habits with less friction and more visual feedback.',
    purpose: 'A modern Flutter app that keeps routines organized, motivates repeat actions, and makes consistency feel rewarding.',
    benefits: [
      'Track habits and progress in one focused, distraction-free interface.',
      'Stay motivated with streaks, reminders, and clear progress cues.',
      'Make routine planning feel lighter with beautiful, intuitive visuals.',
    ],
    features: [
      { title: 'Fast Performance', description: 'Quick habit creation and responsive history views keep flow intact.', icon: '⚡' },
      { title: 'Secure Data', description: 'Data handling is structured to keep user progress stable.', icon: '🔐' },
      { title: 'Offline Support', description: 'Review and update habits without waiting for a refresh.', icon: '📴' },
      { title: 'Beautiful UI', description: 'The interface uses warm gradients and refined spacing.', icon: '🎨' },
      { title: 'Smart Notifications', description: 'Helpful reminders keep streaks alive and routines on schedule.', icon: '🔔' },
      { title: 'Cloud Sync', description: 'Progress can sync across sessions and devices when connected.', icon: '☁️' },
    ],
    screenshots: habitBanaoScreenshots,
    highlights: ['Habit streaks', 'Routine planner', 'Mood tracking', 'Progress charts', 'Daily reminders'],
    version: '3.1.2',
    size: '24 MB',
    downloads: '50L+',
    platformSupport: 'Android and iOS',
    apkLabel: 'Download APK',
    apkPath: habitBanaoApk,
  },
  'mindful-spending': {
    id: 'mindful-spending',
    name: 'Mindful Spending',
    category: 'Flutter Finance App',
    tagline: 'A calm, conversion-ready budget assistant that makes money management feel effortless.',
    subtitle: 'Track transactions, monitor budgets, and understand spending patterns in a clean visual system.',
    logoMark: '💸',
    logoUrl: mindfulSpendingLogo,
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-700',
    stats: [
      { label: 'Downloads', value: '10K+' },
      { label: 'Version', value: '1.9.0' },
      { label: 'Size', value: '19 MB' },
      { label: 'Support', value: 'Android + Tablets' },
    ],
    description:
      'Mindful Spending is a thoughtfully designed finance companion for users who want more clarity around everyday transactions. It pairs clean data entry with visually rich analytics so people can budget, reflect, and save with confidence.',
    purpose: 'Built to simplify personal finance with a premium Flutter interface, practical charts, and practical budgeting habits.',
    benefits: [
      'Log income and expenses in seconds with a polished flow.',
      'Understand where money goes through clear visual analytics.',
      'Keep savings targets visible so budgeting feels more actionable.',
    ],
    features: [
      { title: 'Fast Performance', description: 'Quick transaction entry keeps budgeting friction-free.', icon: '⚡' },
      { title: 'Secure Data', description: 'Structured storage helps protect financial records.', icon: '🔒' },
      { title: 'Offline Support', description: 'Add or review transactions without pausing your workflow.', icon: '📶' },
      { title: 'Beautiful UI', description: 'A premium design language keeps the finance experience calm.', icon: '🪄' },
      { title: 'Smart Notifications', description: 'Goal reminders and budget prompts help sustain good habits.', icon: '🔔' },
      { title: 'Cloud Sync', description: 'Sync-friendly design keeps records available across sessions.', icon: '☁️' },
    ],
    screenshots: mindfulSpendingScreenshots,
    highlights: ['Budget dashboard', 'Expense analytics', 'Saving goals', 'Transaction log', 'Monthly trends'],
    version: '1.9.0',
    size: '19 MB',
    downloads: '10K+',
    platformSupport: 'Android and tablet layouts',
    apkLabel: 'Request APK',
    apkPath: mindfulSpendingApk,
  },
};
