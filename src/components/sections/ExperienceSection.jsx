import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { experienceData } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="02 / EXPERIENCE"
          title="Experience"
          subtitle="Proven track record in software application development, network administration, and IT infrastructure operations."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-slate-800 to-slate-900 sm:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-500 text-sky-400 flex items-center justify-center -translate-x-1/2 z-20 shadow-lg shadow-sky-500/20">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Content Wrapper */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="architectural-card p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all duration-300 relative group">
                      
                      {/* Role Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs text-sky-400 px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-100 font-sans group-hover:text-sky-300 transition-colors">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-2 font-mono text-sm text-slate-400 mt-1 mb-4">
                        <span className="text-slate-200 font-medium">{item.company}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Accomplishments Bullet Points */}
                      <ul className="space-y-2.5 mb-6 text-sm text-slate-300 font-sans">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span className="leading-normal">{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                        {item.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
