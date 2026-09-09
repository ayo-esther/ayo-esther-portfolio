import React from 'react';
import { BookMarked, Archive, Calendar, FileCheck } from 'lucide-react';
import { PUBLICATIONS } from '../data/portfolioData';

export const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-16 sm:py-24 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">
                RESEARCH ARCHIVE
              </span>
              <span className="w-12 h-px bg-[#2D435F]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
              Publications
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B8C5D6] max-w-md font-normal">
            A permanent bibliographic register of legal papers, comparative treatises, and policy commentaries authored in 2026.
          </p>
        </div>

        {/* Archival Table / Catalog Layout */}
        <div className="bg-[#112235] border border-[#1E2E42] rounded-xs shadow-sm divide-y divide-[#1E2E42]">
          {PUBLICATIONS.map((pub, index) => (
            <div
              key={pub.id}
              id={`publication-entry-${pub.id}`}
              className="p-6 sm:p-8 hover:bg-[#15283D] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                
                {/* Year & Index */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-between text-xs font-mono text-[#8E9DB2]">
                  <span className="font-semibold text-[#FAF8F5]">VOL. 2026</span>
                  <span className="text-[11px] uppercase tracking-widest text-[#A0B0C4]">ENTRY 0{index + 1}</span>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A0B0C4] mb-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FAF8F5]" />
                    <span>{pub.type}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-normal leading-snug mb-3">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-[#B8C5D6] leading-relaxed font-normal">
                    {pub.description}
                  </p>
                </div>

                {/* Context / Bibliographic note */}
                <div className="lg:col-span-3 lg:text-right pt-2 lg:pt-0">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#8E9DB2] mb-1">
                    RESEARCH CONTEXT
                  </span>
                  <span className="text-xs text-[#CBD5E1] italic leading-snug block">
                    {pub.venueOrContext}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Archival Note */}
        <div className="mt-8 flex items-center justify-between text-xs text-[#8E9DB2] px-2">
          <span>Catalog verified: Nile University Academic Session 2025/2026</span>
          <span className="font-mono">AUTHOR ARCHIVE / LEGAL CORPUS</span>
        </div>

      </div>
    </section>
  );
};
