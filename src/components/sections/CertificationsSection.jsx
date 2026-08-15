import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { certificationsData } from '../../data/portfolioData';
import { Award, ShieldCheck, CheckCircle, FileText } from 'lucide-react';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="05 / CERTIFICATIONS"
          title="Certifications"
          subtitle="Industry-recognized technical credentials validating cloud architecture and core networking competencies."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="architectural-card p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/15 to-blue-600/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-sky-300 border border-slate-800">
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-lg text-slate-100 mb-2 leading-snug group-hover:text-sky-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="font-mono text-xs font-semibold text-sky-400 mb-4">
                  {cert.issuer}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Footer Indicator */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Credential</span>
                </span>
                <span>{cert.code}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
