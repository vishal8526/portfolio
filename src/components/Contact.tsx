import React, { useState } from 'react';
import { CONTACT_INFO_ITEMS, PERSON, SOCIAL_LINKS } from '../constants/portfolio';

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const rawFormspreeEndpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined)?.trim();
    const formspreeEndpoint = rawFormspreeEndpoint?.replace(/^['\"]|['\"]$/g, '').replace(/\/$/, '');

    if (!formspreeEndpoint) {
      setSubmitError('Contact form is not configured yet. Please set VITE_FORMSPREE_ENDPOINT.');
      setIsSubmitting(false);
      return;
    }

    let isValidFormspreeEndpoint = false;

    try {
      const parsedUrl = new URL(formspreeEndpoint);
      isValidFormspreeEndpoint = parsedUrl.hostname.toLowerCase() === 'formspree.io' && /^\/f\/[A-Za-z0-9]+$/.test(parsedUrl.pathname);
    } catch {
      isValidFormspreeEndpoint = false;
    }

    if (!isValidFormspreeEndpoint) {
      setSubmitError('Invalid Formspree endpoint. Use format: https://formspree.io/f/your-form-id');
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = new FormData();
      payload.append('name', formValues.name);
      payload.append('email', formValues.email);
      payload.append('subject', formValues.subject);
      payload.append('message', formValues.message);

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      });

      if (!response.ok) {
        let errorMessage = 'Could not send your message right now. Please try again.';

        try {
          const errorData = (await response.json()) as { errors?: Array<{ message?: string }> };
          const firstError = errorData?.errors?.[0]?.message;
          if (firstError) {
            errorMessage = firstError;
          }
        } catch {
          // Keep fallback message when response body is not JSON.
        }

        throw new Error(errorMessage);
      }

      setIsSubmitted(true);
      setFormValues({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Could not send your message right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Let's Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Together
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACT_INFO_ITEMS.map((info) => (
                <a
                  key={info.label}
                  href={info.link}
                  className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <p className="text-gray-500 text-sm">{info.label}</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{info.value}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="w-12 h-12 bg-gray-700/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    title={social.name}
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2 h-48 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl">📍</span>
                  <p className="text-gray-400 mt-2">{PERSON.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitError && (
                  <p className="text-red-400 text-sm text-center">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;