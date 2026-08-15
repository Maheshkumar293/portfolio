import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/ui/ResumeModal';
import { ProjectModal } from './components/ui/ProjectModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200 relative">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
