import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code2, Copy, Check } from 'lucide-react';
import { personalInfo, experienceData, projectsData, skillsCategories, certificationsData, educationData } from '../../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
MAHESHKUMAR R
Full-Stack Developer | Cloud & Software Engineer
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}

SUMMARY:
${personalInfo.summary}

EXPERIENCE:
${experienceData.map(e => `${e.role} @ ${e.company} (${e.period})\n${e.points.map(p => `- ${p}`).join('\n')}`).join('\n\n')}

EDUCATION:
${educationData.map(e => `${e.degree} - ${e.institution} (${e.period}) - ${e.grade}`).join('\n')}

CERTIFICATIONS:
${certificationsData.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-slate-300 font-semibold uppercase tracking-wider">
              MAHESHKUMAR_R_RESUME.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Maheshkumar_resume.pdf"
              download="Maheshkumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-bold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs transition-colors"
              title="Copy Resume Plaintext"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Resume Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8 font-sans text-slate-200">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sky-400 font-mono text-sm md:text-base font-semibold mt-1">
              {personalInfo.eyebrow}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs uppercase font-bold tracking-widest text-sky-400">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {personalInfo.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase font-bold tracking-widest text-sky-400">
              EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-slate-800 pl-4">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-slate-100">
                      {exp.role} <span className="text-sky-400 font-normal">@ {exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase font-bold tracking-widest text-sky-400">
              FEATURED PROJECTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-sm text-slate-100">{proj.title}</h3>
                  <p className="text-xs text-slate-400">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Education */}
            <div className="space-y-3">
              <h2 className="font-mono text-xs uppercase font-bold tracking-widest text-sky-400">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded bg-slate-950 border border-slate-800 text-xs">
                    <div className="font-bold text-slate-100">{edu.degree}</div>
                    <div className="text-slate-400">{edu.institution}</div>
                    <div className="flex items-center justify-between text-slate-400 mt-1 font-mono">
                      <span>{edu.period}</span>
                      <span className="text-sky-300 font-bold">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="font-mono text-xs uppercase font-bold tracking-widest text-sky-400">
                CERTIFICATIONS
              </h2>
              <div className="space-y-2">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="p-3 rounded bg-slate-950 border border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-slate-200">{cert.title}</div>
                    <div className="font-mono text-sky-400">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
