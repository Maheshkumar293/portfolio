import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean API handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="07 / CONTACT"
          title="Let's build something useful."
          subtitle="Open to opportunities in software development, full-stack engineering, cloud technologies, and related technical roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Box */}
            <div className="architectural-card p-6 md:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100 font-sans">
                  Direct Communication
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Feel free to reach out via email or phone. I actively respond to all genuine software development inquiries.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="font-mono text-[10px] text-slate-500 uppercase">EMAIL</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-sky-300 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-500 uppercase">PHONE</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="font-mono text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-emerald-300 transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-sky-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-500 uppercase">GITHUB</div>
                    <div className="font-mono text-xs font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">
                      github.com/Maheshkumar293
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors shrink-0" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-sky-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-slate-500 uppercase">LINKEDIN</div>
                    <div className="font-mono text-xs font-semibold text-slate-200 group-hover:text-sky-400 transition-colors">
                      linkedin.com/in/maheshkumar-r
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors shrink-0" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase">LOCATION</div>
                  <div className="font-mono text-xs font-semibold text-slate-300">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-sans font-semibold text-sm transition-all shadow-lg shadow-sky-500/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email Directly</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="architectural-card p-6 md:p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-800">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <h3 className="text-xl font-bold text-slate-100 font-sans">
                  Send a Message
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-100 font-sans">
                    Message Sent Successfully
                  </h4>
                  <p className="text-slate-400 text-sm max-w-md mx-auto font-sans">
                    Thank you for reaching out, Maheshkumar will get back to you shortly!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-mono text-xs transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-slate-400">
                        YOUR NAME <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className={`w-full px-4 py-3 rounded-lg bg-slate-900 border text-slate-100 text-sm focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/80 focus:border-red-400' : 'border-slate-800 focus:border-sky-500/60'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs font-mono">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-slate-400">
                        YOUR EMAIL <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-3 rounded-lg bg-slate-900 border text-slate-100 text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-400' : 'border-slate-800 focus:border-sky-500/60'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-slate-400">
                      SUBJECT / TOPIC
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Developer Position / Project Inquiry"
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-sky-500/60 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-slate-400">
                      MESSAGE <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-lg bg-slate-900 border text-slate-100 text-sm focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500/80 focus:border-red-400' : 'border-slate-800 focus:border-sky-500/60'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-slate-100 font-sans font-semibold text-sm border border-slate-700 hover:border-sky-400 transition-all duration-200 shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-400 border-t-sky-400 rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
