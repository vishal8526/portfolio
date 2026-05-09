import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiDownload, FiGrid, FiPlayCircle, FiShield, FiZap } from 'react-icons/fi';
import { PERSON } from '../constants/portfolio';
import { FLUTTER_PROJECT_SHOWCASES, type FlutterProjectId } from '../constants/flutterShowcase';
import { scrollToSection } from '../utils/scrollToSection';

interface ProjectDetailPageProps {
  projectId: FlutterProjectId;
  onBack: () => void;
}

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, onBack }) => {
  const project = FLUTTER_PROJECT_SHOWCASES[projectId];
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const apkHref = useMemo(
    () => `mailto:${PERSON.email}?subject=${encodeURIComponent(`${project.name} APK request`)}`,
    [project.name],
  );

  const handleDownloadRequest = () => {
    if (project.apkPath) {
      // Download the APK file
      const link = document.createElement('a');
      link.href = project.apkPath;
      link.download = `${project.name.replace(/\s+/g, '-')}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Fallback to email request
      window.location.href = apkHref;
    }
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    const scrollAmount = Math.max(280, galleryElement.clientWidth * 0.7);
    galleryElement.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });

    // Update button states after scroll
    setTimeout(() => updateScrollState(), 300);
  };

  const updateScrollState = () => {
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    const maxScrollLeft = galleryElement.scrollWidth - galleryElement.clientWidth;
    setCanScrollLeft(galleryElement.scrollLeft > 0);
    setCanScrollRight(galleryElement.scrollLeft < maxScrollLeft - 12);
  };

  useEffect(() => {
    if (!selectedScreenshot) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedScreenshot(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScreenshot]);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement) return;

    // Track scroll position to update button states
    const handleScroll = () => {
      updateScrollState();
    };

    galleryElement.addEventListener('scroll', handleScroll);
    updateScrollState(); // Initial state

    return () => galleryElement.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (!galleryElement || isGalleryPaused || project.screenshots.length <= 1) {
      return;
    }

    const timerId = window.setInterval(() => {
      const maxScrollLeft = galleryElement.scrollWidth - galleryElement.clientWidth;

      if (galleryElement.scrollLeft >= maxScrollLeft - 12) {
        galleryElement.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      galleryElement.scrollBy({ left: Math.max(280, galleryElement.clientWidth * 0.7), behavior: 'smooth' });
    }, 3400);

    return () => window.clearInterval(timerId);
  }, [isGalleryPaused, project.screenshots.length]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050b16] text-white selection:bg-cyan-400/30 selection:text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(180deg,_#07111f_0%,_#050b16_58%,_#030712_100%)]" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-1/3 w-[30rem] h-[30rem] rounded-full bg-emerald-500/10 blur-3xl animate-pulse" style={{ animationDuration: '11s' }} />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 88%)',
          }}
        />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#050b16]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Premium Flutter Showcase
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="hidden" animate="visible" variants={sectionMotion} transition={{ duration: 0.55 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.colorFrom} ${project.colorTo}`} />
                {project.category}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.colorFrom} ${project.colorTo} text-3xl shadow-[0_20px_60px_rgba(15,23,42,0.45)]`}>
                {project.logoUrl ? (
                  <div className={`flex h-full w-full items-center justify-center rounded-2xl bg-white/95 ${projectId === 'habit-tracker' ? 'p-0' : 'p-1'}`}>
                    <img
                      src={project.logoUrl}
                      alt={`${project.name} logo`}
                      className="h-full w-full rounded-[0.85rem] object-contain"
                    />
                  </div>
                ) : (
                  project.logoMark
                )}
              </div>
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {project.name}
                  </h1>
                  <p className="mt-2 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {project.subtitle}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.2)]">
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.24em] text-white/45">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={handleDownloadRequest}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(6,182,212,0.24)]"
                >
                  <span className={`absolute inset-0 bg-gradient-to-r ${project.colorFrom} ${project.colorTo} transition-transform duration-500 group-hover:scale-105`} />
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative inline-flex items-center gap-2">
                    <FiDownload className="h-4 w-4" />
                    Install Now
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection('gallery')}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white/88 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/10 hover:text-white"
                >
                  <FiPlayCircle className="h-4 w-4" />
                  Live Preview
                </button>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-2xl">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <InfoBadge icon={<FiZap />} label="What it does" value={project.purpose} />
                  <InfoBadge icon={<FiShield />} label="Why users love it" value={project.benefits[0]} />
                  <InfoBadge icon={<FiGrid />} label="Product focus" value={project.highlights.join(' · ')} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto w-[240px] sm:w-[270px] lg:w-[290px]"
              >
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-fuchsia-500/20 to-emerald-400/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-[#09111f] p-3 shadow-[0_30px_120px_rgba(3,7,18,0.7)]">
                  <div className="flex items-center justify-between px-3 pb-3 text-[10px] uppercase tracking-[0.35em] text-white/40">
                    <span>Featured Screenshot</span>
                    <span>Flutter UI</span>
                  </div>
                  <div className="rounded-[1.65rem] border border-white/8 bg-black/20 p-2">
                    <img
                      src={project.screenshots[0]}
                      alt={`${project.name} featured screenshot`}
                      loading="eager"
                      decoding="async"
                      className="aspect-[9/19.5] w-full rounded-[1.3rem] object-cover shadow-[0_18px_50px_rgba(15,23,42,0.5)]"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute left-0 top-16 hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl xl:block"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-white/40">Downloads</div>
                <div className="mt-2 text-xl font-semibold text-white">{project.downloads}</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute bottom-10 right-0 hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl xl:block"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-white/40">Platform</div>
                <div className="mt-2 text-xl font-semibold text-white">{project.platformSupport}</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="description"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={sectionMotion}
        transition={{ duration: 0.55 }}
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/7 p-6 backdrop-blur-2xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">App Description</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">What this app delivers</h2>
            <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">{project.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-7 text-white/75">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-2xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-200/80">Key Highlights</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white/82"
                >
                  {highlight}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/18 px-4 py-4">
                <div className="text-sm uppercase tracking-[0.25em] text-white/40">Category</div>
                <div className="mt-2 text-lg font-semibold text-white">{project.category}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/18 px-4 py-4">
                <div className="text-sm uppercase tracking-[0.25em] text-white/40">Version</div>
                <div className="mt-2 text-lg font-semibold text-white">{project.version}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/18 px-4 py-4">
                <div className="text-sm uppercase tracking-[0.25em] text-white/40">App Size</div>
                <div className="mt-2 text-lg font-semibold text-white">{project.size}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="gallery"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={sectionMotion}
        transition={{ duration: 0.55 }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">Screenshot Gallery</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Interactive preview carousel</h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm text-white/60">
            Tap any screenshot to preview it full screen
          </div>
        </div>

        <div className="relative mt-8 group">
          <div
            ref={galleryRef}
            onMouseEnter={() => setIsGalleryPaused(true)}
            onMouseLeave={() => setIsGalleryPaused(false)}
            className="flex gap-5 overflow-x-auto pb-4 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {project.screenshots.map((screenshot, index) => (
              <motion.button
                key={`${screenshot}-${index}`}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedScreenshot(screenshot)}
                className="group relative min-w-[240px] sm:min-w-[290px] md:min-w-[320px]"
              >
                <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-br from-white/18 to-white/4 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09111f] p-3 shadow-[0_25px_80px_rgba(2,6,23,0.5)]">
                  <div className="flex items-center justify-between px-2 pb-3 text-[10px] uppercase tracking-[0.3em] text-white/32">
                    <span>App screen {index + 1}</span>
                    <span>Swipe ready</span>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/8 bg-black/25 p-2">
                    <img
                      src={screenshot}
                      alt={`${project.name} screenshot ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[9/19] w-full rounded-[1.15rem] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Left Navigation Button */}
          {canScrollLeft && (
            <motion.button
              onClick={() => scrollGallery('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 sm:ml-0 z-20 inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/20 bg-gradient-to-br from-cyan-400/15 to-cyan-600/10 hover:border-cyan-400/60 hover:from-cyan-400/25 hover:to-cyan-600/20 text-cyan-300 hover:text-cyan-200 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll gallery left"
            >
              <FiChevronLeft className="h-6 w-6" />
            </motion.button>
          )}

          {/* Right Navigation Button */}
          {canScrollRight && (
            <motion.button
              onClick={() => scrollGallery('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 sm:mr-0 z-20 inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/20 bg-gradient-to-br from-cyan-400/15 to-cyan-600/10 hover:border-cyan-400/60 hover:from-cyan-400/25 hover:to-cyan-600/20 text-cyan-300 hover:text-cyan-200 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll gallery right"
            >
              <FiChevronRight className="h-6 w-6" />
            </motion.button>
          )}
        </div>
      </motion.section>

      <motion.section
        id="features"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionMotion}
        transition={{ duration: 0.55 }}
      >
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Premium feature showcase</h2>
          </div>
          <div className="hidden max-w-sm text-sm leading-7 text-white/55 lg:block">
            A focused set of product qualities that communicate performance, trust, and a polished user experience.
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {project.features.map((feature, index) => (
            <motion.article
              key={feature.title}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[1.75rem] border border-white/10 bg-white/7 p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(2,6,23,0.24)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/15 to-white/5 text-2xl ring-1 ring-white/10">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{feature.description}</p>
              <div className="mt-5 text-xs uppercase tracking-[0.28em] text-white/35">0{index + 1}</div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScreenshot(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 18, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center justify-between px-3 pb-3 text-xs uppercase tracking-[0.28em] text-white/45">
                <span>Screenshot preview</span>
                <button
                  onClick={() => setSelectedScreenshot(null)}
                  className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-white/80 transition-colors hover:bg-white/12 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-black/25 p-2">
                <img
                  src={selectedScreenshot}
                  alt={`${project.name} screenshot preview`}
                  className="max-h-[78vh] w-full rounded-[1.2rem] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

interface InfoBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoBadge: React.FC<InfoBadgeProps> = ({ icon, label, value }) => (
  <div className="rounded-2xl border border-white/10 bg-black/18 p-4">
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
      <span className="text-cyan-200">{icon}</span>
      {label}
    </div>
    <p className="mt-3 text-sm leading-7 text-white/72">{value}</p>
  </div>
);

export default ProjectDetailPage;
