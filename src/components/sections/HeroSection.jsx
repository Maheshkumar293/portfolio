import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Send, Sparkles, Code2, Server, Database, Cloud } from 'lucide-react';
import { personalInfo, heroTechFloating } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const HeroSection = ({ onOpenResume }) => {
  const techIcons = {
    'ReactJS': <Code2 className="w-3.5 h-3.5 text-sky-400" />,
    'Spring Boot': <Server className="w-3.5 h-3.5 text-emerald-400" />,
    'AWS': <Cloud className="w-3.5 h-3.5 text-amber-400" />,
    'MySQL': <Database className="w-3.5 h-3.5 text-cyan-400" />
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Technical Lines */}
      <div className="absolute inset-0 tech-grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-slate-300 tracking-wide font-medium">
                {personalInfo.status}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="font-mono text-xs md:text-sm font-semibold tracking-widest text-sky-400 uppercase">
              {personalInfo.eyebrow}
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 font-sans leading-[1.1]">
              {personalInfo.headline}
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-sans leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary CTA */}
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-sans font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 group"
                >
                  <span>View My Work</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </a>

                {/* Secondary CTA - Download Resume */}
                <a
                  href="/Maheshkumar_resume.pdf"
                  download="Maheshkumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-100 font-sans font-semibold text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Download Resume</span>
                </a>

                {/* Small CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-mono font-medium text-slate-400 hover:text-sky-300 hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  <span>Let's Connect</span>
                </a>
              </div>

              {/* Developer Profile Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  PROFILES:
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-sky-400 border border-slate-800 hover:border-sky-500/40 font-mono text-xs font-semibold transition-all duration-200 shadow-sm group"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-sky-400 border border-slate-800 hover:border-sky-500/40 font-mono text-xs font-semibold transition-all duration-200 shadow-sm group"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Framed Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Frame Background Glow & Borders */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-blue-600/10 to-indigo-500/20 rounded-2xl blur-xl opacity-50" />

              {/* Architectural Frame Container */}
              <div className="relative rounded-2xl bg-slate-900/90 p-3 border border-slate-800 shadow-2xl shadow-black/80 backdrop-blur-md">
                
                {/* Frame Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-3 font-mono text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-slate-500">ENGINEER_PORTRAIT.RAW</span>
                </div>

                {/* Profile Image Wrap */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 group">
                  <img
                    src="/profile.jpg"
                    alt="Maheshkumar R - Software Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark subtle overlay gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Technical Labels */}
                <div className="absolute -top-3 -right-3 z-20">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-950/90 border border-sky-500/30 text-sky-300 font-mono text-xs shadow-lg backdrop-blur-md"
                  >
                    {techIcons['ReactJS']}
                    <span>ReactJS</span>
                  </motion.div>
                </div>

                <div className="absolute top-1/3 -left-4 z-20">
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-950/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs shadow-lg backdrop-blur-md"
                  >
                    {techIcons['Spring Boot']}
                    <span>Spring Boot</span>
                  </motion.div>
                </div>

                <div className="absolute bottom-20 -right-4 z-20">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-950/90 border border-amber-500/30 text-amber-300 font-mono text-xs shadow-lg backdrop-blur-md"
                  >
                    {techIcons['AWS']}
                    <span>AWS</span>
                  </motion.div>
                </div>

                <div className="absolute -bottom-3 left-6 z-20">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.5 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-950/90 border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-lg backdrop-blur-md"
                  >
                    {techIcons['MySQL']}
                    <span>MySQL</span>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
