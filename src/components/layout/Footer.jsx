import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowUp, Mail, Phone, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle grid accent */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-12 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono text-lg font-bold tracking-wider text-slate-100">
                {personalInfo.monogram}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Software Engineer · Full-Stack · Cloud Infrastructure. Dedicated to building performant web applications and reliable enterprise backend systems.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Madurai / Chennai, India
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-mono text-slate-400">
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">01 / About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-400 transition-colors">02 / Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition-colors">03 / Selected Work</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-colors">04 / Capability Map</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-sky-400 transition-colors">05 / Certifications</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Social */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Connect & Reach Out
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span className="font-mono text-xs">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-sky-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span className="font-mono text-xs">{personalInfo.phone}</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors group"
              >
                <GithubIcon className="w-4 h-4 text-sky-400" />
                <span className="font-mono text-xs">GitHub / Maheshkumar293</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors group"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span className="font-mono text-xs">LinkedIn / Maheshkumar R</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {personalInfo.name}. Built with React & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
