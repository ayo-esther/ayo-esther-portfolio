import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface VisionBannerProps {
  onOpenContact: () => void;
}

export const VisionBanner: React.FC<VisionBannerProps> = ({ onOpenContact }) => {
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Brand Idea / Closing Statement */}
        <div className="mb-14 pb-14 border-b border-[#1E2E42]">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4] block mb-4">
            CORE PHILOSOPHY
          </span>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF8F5] font-normal italic tracking-tight">
            "{PERSONAL_INFO.visionStatement}"
          </p>
        </div>

        {/* Collaboration Banner */}
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight mb-4">
            Seeking collaboration?
          </h2>

          <p className="text-base sm:text-lg text-[#B8C5D6] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            I am always open to discussing research opportunities, tech policy consultations, or intellectual property strategies for emerging startups.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="vision-get-in-touch-btn"
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF8F5] hover:bg-white text-[#0D1B2A] text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4 text-[#0D1B2A]" />
              <span>Get In Touch</span>
            </button>

            <a
              id="vision-read-research-link"
              href="#work"
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#112235] hover:bg-[#1A2F47] text-[#FAF8F5] border border-[#2D435F] text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors"
            >
              <span>Read Research</span>
              <ArrowRight className="w-4 h-4 text-[#FAF8F5]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
