import React from 'react';
import { Newspaper, BellRing, Sparkles } from 'lucide-react';

export const PerspectivesSection: React.FC = () => {
  return (
    <section id="perspectives" className="py-16 sm:py-24 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">
              ESSAYS & COMMENTARY
            </span>
            <span className="w-12 h-px bg-[#2D435F]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
            Perspectives
          </h2>
        </div>

        {/* Tasteful container */}
        <div className="bg-[#112235] border border-[#1E2E42] rounded-xs p-10 sm:p-14 text-center max-w-3xl mx-auto shadow-sm">
          
          <div className="w-12 h-12 rounded-full bg-[#0D1B2A] border border-[#2D435F] flex items-center justify-center mx-auto mb-6 text-[#FAF8F5]">
            <Newspaper className="w-5 h-5 text-[#FAF8F5]" strokeWidth={1.7} />
          </div>

          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-[#8E9DB2] mb-3 font-semibold">
            FORTHCOMING ESSAYS & DISPATCHES
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal leading-snug mb-4">
            Critical reflections on algorithmic copyright, data sovereignty, and digital jurisprudence.
          </h3>

          <p className="text-sm sm:text-base text-[#B8C5D6] leading-relaxed max-w-xl mx-auto font-normal mb-8">
            This space is reserved for long-form essays, regulatory dispatch analyses, and opinion pieces as active research on technology-law intersectionality progresses.
          </p>

          <div className="pt-6 border-t border-[#1E2E42] inline-flex items-center gap-2 text-xs font-mono text-[#CBD5E1]">
            <span className="w-2 h-2 rounded-full bg-[#E2B714]"></span>
            <span>Upcoming monograph: Emerging Legal Paradigms in Sub-Saharan AI Governance</span>
          </div>

        </div>

      </div>
    </section>
  );
};
