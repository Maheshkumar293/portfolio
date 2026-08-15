import React from 'react';
import { X, CheckCircle2, Layers, Cpu, Server, Database, Code, ArrowRight } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
              SYS_{project.id}
            </span>
            <span className="font-mono text-xs text-slate-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6 font-sans">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
              {project.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Visualization Breakdown */}
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold">
              ARCHITECTURE & DATA FLOW VISUALIZATION
            </div>

            {project.architectureType === 'diagram' && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {project.architectureNodes.map((node, idx) => (
                  <React.Fragment key={idx}>
                    <div className="px-3 py-2 rounded bg-slate-900 border border-slate-800 text-center">
                      <div className="font-mono text-xs font-bold text-sky-300">{node.name}</div>
                      <div className="font-mono text-[10px] text-slate-500">{node.sub}</div>
                    </div>
                    {idx < project.architectureNodes.length - 1 && (
                      <span className="font-mono text-sky-400 text-sm font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {project.architectureType === 'process' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {project.architectureNodes.map((node, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center">
                    <div className="font-mono text-xs font-bold text-emerald-400">Step {idx + 1}</div>
                    <div className="font-mono text-xs text-slate-200 mt-0.5">{node.name}</div>
                    <div className="font-mono text-[10px] text-slate-500">{node.sub}</div>
                  </div>
                ))}
              </div>
            )}

            {project.architectureType === 'matrix' && (
              <div className="grid grid-cols-2 gap-2 pt-2">
                {project.architectureNodes.map((node, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <div className="font-mono text-xs font-bold text-slate-200">{node.name}</div>
                      <div className="font-mono text-[10px] text-slate-500">{node.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Technical Highlights */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              KEY TECHNICAL IMPLEMENTATIONS
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Complete Technology Stack */}
          <div className="space-y-3 pt-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              TECHNOLOGY STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-3 py-1.5 rounded-md bg-slate-950 text-sky-300 border border-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-800/80 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
