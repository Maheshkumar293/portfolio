import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { projectsData } from '../../data/portfolioData';
import { ArrowUpRight, Cpu, Layers, Server, Database, Cloud, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export const ProjectsSection = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="03 / PROJECTS"
          title="Selected Work"
          subtitle="Enterprise applications and software solutions built with full-stack frameworks, cloud services, and clean REST architecture."
        />

        {/* Asymmetric Projects Layout */}
        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project, idx) => {
            const isReverse = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group cursor-pointer`}
                onClick={() => onSelectProject(project)}
              >
                
                {/* Visual / System Architecture Area */}
                <div
                  className={`lg:col-span-7 ${
                    isReverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="h-full min-h-[320px] rounded-2xl bg-slate-900/90 border border-slate-800 group-hover:border-sky-500/40 transition-all duration-500 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl group-hover:shadow-sky-500/10">
                    {/* Top Blueprint Bar */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6 font-mono text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-slate-300 font-semibold">{project.category}</span>
                      </div>
                      <span className="text-slate-500">ARCH_ID // SYS_{project.id}</span>
                    </div>

                    {/* Architecture Visualization Element */}
                    <div className="my-auto py-4">
                      {project.architectureType === 'diagram' && (
                        <div className="space-y-3">
                          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                            SYSTEM ARCHITECTURE FLOW
                          </div>
                          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                            {project.architectureNodes.map((node, nIdx) => (
                              <React.Fragment key={nIdx}>
                                <div className="text-center group-hover:scale-105 transition-transform duration-300">
                                  <div className="font-mono text-xs font-bold text-sky-300 bg-sky-500/10 px-2.5 py-1 rounded border border-sky-500/20">
                                    {node.name}
                                  </div>
                                  <div className="font-mono text-[10px] text-slate-500 mt-1">
                                    {node.sub}
                                  </div>
                                </div>
                                {nIdx < project.architectureNodes.length - 1 && (
                                  <div className="font-mono text-xs text-sky-400 font-bold hidden sm:block">
                                    →
                                  </div>
                                )}
                                {nIdx < project.architectureNodes.length - 1 && (
                                  <div className="font-mono text-xs text-sky-400 font-bold block sm:hidden">
                                    ↓
                                  </div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.architectureType === 'process' && (
                        <div className="space-y-3">
                          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                            WORKFLOW PIPELINE
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                            {project.architectureNodes.map((node, nIdx) => (
                              <div key={nIdx} className="p-3 rounded bg-slate-900 border border-slate-800 text-center">
                                <div className="font-mono text-xs font-bold text-emerald-400 mb-1">
                                  0{nIdx + 1}. {node.name}
                                </div>
                                <div className="font-mono text-[10px] text-slate-400">
                                  {node.sub}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.architectureType === 'matrix' && (
                        <div className="space-y-3">
                          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                            FEATURE MODULES
                          </div>
                          <div className="grid grid-cols-2 gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                            {project.architectureNodes.map((node, nIdx) => (
                              <div key={nIdx} className="flex items-center gap-3 p-3 rounded bg-slate-900 border border-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                                <div>
                                  <div className="font-mono text-xs font-semibold text-slate-200">
                                    {node.name}
                                  </div>
                                  <div className="font-mono text-[10px] text-slate-500">
                                    {node.sub}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Tech Pills */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                      <span className="font-mono text-xs text-slate-500">
                        Click to view details & architecture
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-sky-500 group-hover:text-slate-950 flex items-center justify-center text-slate-300 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Content / Info Area */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                    isReverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Project Number */}
                    <div className="font-mono text-4xl font-black text-slate-700 group-hover:text-sky-400/60 transition-colors duration-300">
                      PROJECT {project.id}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-100 font-sans group-hover:text-sky-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-base leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Technical Highlights */}
                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Technical Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-400 font-sans">
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-sky-400 font-mono">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                        >
                          {tech}
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
    </section>
  );
};
