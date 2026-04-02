export interface NavigationItem {
  id: string;
  label: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  link: string;
}

export const PERSON = {
  initials: 'VG',
  name: 'Vishal Gupta',
  titleCycle: ['Flutter Developer','Video Editor','Frontend Developer', 'App Developer', 'CSE Student', 'Problem Solver'],
  availabilityText: 'Open to internships and developer roles',
  location: 'Jaipur, Rajasthan, India',
  email: 'vishal63mittal@gmail.com',
  phone: '6367278526',
  website: 'leetcode.com/u/Vishal_gupta0',
} as const;

export const SECTION_NAV_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  { icon: '📧', label: 'Email', value: PERSON.email, link: `mailto:${PERSON.email}` },
  { icon: '📱', label: 'Phone', value: PERSON.phone, link: 'tel:+916367278526' },
  { icon: '📍', label: 'Location', value: PERSON.location, link: '#' },
  { icon: '🌐', label: 'LeetCode', value: PERSON.website, link: 'https://leetcode.com/u/Vishal_gupta0/' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', link: 'https://github.com/vishal8526' },
  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', link: 'https://www.linkedin.com/in/vishalgupta62/' },
  { name: 'LeetCode', icon: 'M13.545 0a1.28 1.28 0 00-.902.374L1.345 11.43a1.28 1.28 0 000 1.809l11.298 11.055a1.28 1.28 0 001.803-1.814L4.073 12.334 14.446 2.188A1.28 1.28 0 0013.545 0zM8.95 10.98h14.02a1.28 1.28 0 110 2.56H8.95a1.28 1.28 0 110-2.56z', link: 'https://leetcode.com/u/Vishal_gupta0/' },
];
