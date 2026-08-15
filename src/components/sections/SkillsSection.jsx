import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { skillsCategories } from '../../data/portfolioData';
import { Server, Code2, Database, Shield, Cloud, Wrench, Terminal } from 'lucide-react';

export const SkillsSection = () => {
  const categoryIcons = {
    'Backend': <Server className="w-5 h-5 text-sky-400" />,
    'Frontend': <Code2 className="w-5 h-5 text-sky-400" />,
    'Database': <Database className="w-5 h-5 text-sky-400" />,
    'Integration': <Shield className="w-5 h-5 text-sky-400" />,
    'Cloud & Deployment': <Cloud className="w-5 h-5 text-sky-400" />,
    'Tools': <Wrench className="w-5 h-5 text-sky-400" />,
    'Additional': <Terminal className="w-5 h-5 text-sky-400" />
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="04 / SKILLS"
          title="Engineering Capability Map"
          subtitle="Structured architectural modules covering programming languages, frameworks, cloud services, and developer tooling."
        />

        {/* Modular Grid of Capability Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="architectural-card p-6 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:border-sky-500/40 transition-colors">
                      {categoryIcons[cat.title] || <Terminal className="w-5 h-5 text-sky-400" />}
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-slate-100 group-hover:text-sky-300 transition-colors">
                        {cat.title}
                      </h3>
                      <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                        MODULE 0{idx + 1}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-sans mb-5 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skill Items Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 hover:border-sky-500/40 hover:text-sky-300 hover:bg-slate-800 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
