import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-black/40'
          : 'py-5 bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-sky-500/20 to-blue-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono text-sm md:text-base font-bold tracking-wider text-slate-100 group-hover:text-sky-400 transition-colors">
              {personalInfo.monogram}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action - Resume Trigger */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/Maheshkumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-slate-100 bg-slate-800/80 hover:bg-sky-500/20 hover:text-sky-300 border border-slate-700 hover:border-sky-500/40 transition-all duration-200 shadow-sm group focus:outline-none"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/Maheshkumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-xs font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 mr-1"
              title="View Resume PDF"
            >
              <FileText className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 bg-slate-900 border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-mono text-slate-300 hover:text-sky-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-600">→</span>
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/80 mt-2">
              <a
                href="/Maheshkumar_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-mono font-semibold text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume PDF ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
