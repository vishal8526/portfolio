import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'John is an exceptional developer who brings both technical expertise and creative problem-solving to every project. His work on our platform exceeded all expectations and was delivered ahead of schedule.',
      avatar: '👩‍💼',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'InnovateTech',
      content: 'Working with John was a game-changer for our team. His deep understanding of modern web technologies and his ability to architect scalable solutions helped us achieve our ambitious goals.',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'DigitalFlow',
      content: 'John has an incredible eye for detail and user experience. He transformed our complex requirements into an intuitive, beautiful interface that our users love. Highly recommend!',
      avatar: '👩‍🎨',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder',
      company: 'StartupXYZ',
      content: 'From concept to deployment, John was instrumental in building our MVP. His full-stack expertise and dedication to quality made him an invaluable partner in our journey.',
      avatar: '👨‍🚀',
      rating: 5,
    },
    {
      id: 5,
      name: 'Amanda Foster',
      role: 'Design Director',
      company: 'Creative Agency',
      content: 'John bridges the gap between design and development seamlessly. He implemented our designs pixel-perfectly while adding thoughtful interactions that elevated the final product.',
      avatar: '👩‍🎭',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const autoplayIntervalId = setInterval(() => {
      setActiveTestimonialIndex((previousIndex) => (previousIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(autoplayIntervalId);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (testimonialIndex: number) => {
    setActiveTestimonialIndex(testimonialIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setActiveTestimonialIndex((previousIndex) => (previousIndex === 0 ? testimonials.length - 1 : previousIndex - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setActiveTestimonialIndex((previousIndex) => (previousIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            What People{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Say About Me
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Card */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-6xl text-purple-500/20">
              "
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < testimonials[activeTestimonialIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-8 transition-all duration-500">
                "{testimonials[activeTestimonialIndex].content}"
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg">
                  {testimonials[activeTestimonialIndex].avatar}
                </div>
                <h4 className="text-white font-semibold text-lg">{testimonials[activeTestimonialIndex].name}</h4>
                <p className="text-gray-400">
                  {testimonials[activeTestimonialIndex].role} at{' '}
                  <span className="text-cyan-400">{testimonials[activeTestimonialIndex].company}</span>
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-700/50 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors group"
            >
              <svg className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-700/50 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors group"
            >
              <svg className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  activeTestimonialIndex === index
                    ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix'].map((company, index) => (
              <div
                key={index}
                className="text-gray-500 text-xl font-bold opacity-50 hover:opacity-100 hover:text-white transition-all cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;