import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { educationData } from '../../data/portfolioData';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="06 / EDUCATION"
          title="Academic Background"
          subtitle="Formal academic degrees in Computer Science & Engineering with strong academic honors."
        />

        {/* Timeline / Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="architectural-card p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 px-3 py-1 rounded bg-slate-900 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree Name */}
                <h3 className="text-xl font-bold text-slate-100 font-sans group-hover:text-sky-300 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-sm text-slate-300 font-sans">
                  <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Details */}
                <p className="text-xs text-slate-400 font-sans leading-relaxed pt-2">
                  {edu.details}
                </p>
              </div>

              {/* Grade Highlight Pill */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">ACADEMIC SCORE</span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-sm font-bold">
                  <Award className="w-4 h-4 text-sky-400" />
                  <span>{edu.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
