import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FocusAreas } from './components/FocusAreas';
import { Education } from './components/Education';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { WorkSection } from './components/WorkSection';
import { PublicationsSection } from './components/PublicationsSection';
import { PerspectivesSection } from './components/PerspectivesSection';
import { LeadershipImpact } from './components/LeadershipImpact';
import { VisionBanner } from './components/VisionBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-[#FAF8F5] font-sans antialiased selection:bg-[#1E2E42] selection:text-[#FAF8F5]">
      {/* Editorial Sticky Header */}
      <Header onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Core Focus Areas */}
        <FocusAreas />

        {/* 4. Academic Foundation */}
        <Education />

        {/* 5. Experience / Professional Journey Timeline */}
        <ExperienceTimeline />

        {/* 6. Work Section */}
        <WorkSection />

        {/* 7. Research Publications Archive */}
        <PublicationsSection />

        {/* 8. Perspectives (Essay & Editorial Space) */}
        <PerspectivesSection />

        {/* 9. Leadership & Impact */}
        <LeadershipImpact />

        {/* 10. Vision & Collaboration Banner */}
        <VisionBanner onOpenContact={handleOpenContact} />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
    </div>
  );
}
