import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { Cpu, ShieldCheck, Layers, Terminal } from 'lucide-react';

export const AboutSection = () => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      title: "Full-Stack Development",
      description: "Hands-on experience building frontend web applications with ReactJS and backend API services using PHP CodeIgniter & Spring Boot."
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: "Cloud & Systems Infrastructure",
      description: "Certified foundation in AWS and Oracle Cloud Infrastructure, combined with practical UniFi networking, VLANs, and firewall administration."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
      title: "Software Engineering Rigor",
      description: "Focused on clean code modularity, database optimization with MySQL, REST API security, version control with Git, and thorough testing."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="01 / ABOUT"
          title={personalInfo.aboutHeading}
          subtitle="Computer Science & Engineering graduate combining full-stack web engineering with enterprise IT infrastructure capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-sans">
              <p>
                As a Computer Science & Engineering graduate from Anna University Regional Campus Madurai, I approach software engineering from a holistic systems perspective. My technical foundation spans front-to-back application development, enterprise database architecture, and network infrastructure management.
              </p>
              <p>
                During my software development internship at V7Lancers Technopark, I contributed directly to real-time CRM application features, implementing business logic in PHP CodeIgniter and maintaining MySQL database schemas. My earlier experience in IT Support at OTTO Clothing honed my deep understanding of core network topologies, UniFi hardware, VLANs, and firewall security.
              </p>
              <p>
                Holding professional cloud certifications from AWS, Oracle, and Cisco, I am driven to engineer reliable, maintainable, and high-performance software systems that deliver tangible business value.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/30 transition-all duration-300 space-y-2"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-slate-100 text-sm">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Statistics Counter Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="architectural-card p-6 rounded-2xl border border-slate-800 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-3 text-slate-800 group-hover:text-sky-500/20 transition-colors pointer-events-none">
                    <Terminal className="w-8 h-8" />
                  </div>
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-sky-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans text-sm font-semibold text-slate-100 mb-1">
                    {stat.label}
                  </div>
                  <div className="font-mono text-xs text-slate-400">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
