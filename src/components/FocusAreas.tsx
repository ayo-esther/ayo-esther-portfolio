import React from 'react';
import { FileText, Globe, BookOpen, Check } from 'lucide-react';
import { FOCUS_AREAS } from '../data/portfolioData';

export const FocusAreas: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#FAF8F5]" strokeWidth={1.8} />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#FAF8F5]" strokeWidth={1.8} />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#FAF8F5]" strokeWidth={1.8} />;
      default:
        return <FileText className="w-5 h-5 text-[#FAF8F5]" strokeWidth={1.8} />;
    }
  };

  return (
    <section id="focus-areas" className="py-16 sm:py-24 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">
                CORE EXPERTISE
              </span>
              <span className="w-12 h-px bg-[#2D435F]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
              Focus Areas
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B8C5D6] max-w-md font-normal">
            Interdisciplinary approaches to modern legal challenges.
          </p>
        </div>

        {/* 3 Dark Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.id}
              id={`focus-card-${area.id}`}
              className="bg-[#112235] rounded-xs border border-[#1E2E42] p-8 flex flex-col justify-between hover:border-[#385170] transition-colors shadow-sm group"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xs bg-[#0D1B2A] border border-[#2D435F] flex items-center justify-center mb-6 text-[#FAF8F5]">
                  {getIcon(area.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal mb-3 group-hover:text-white transition-colors">
                  {area.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#B8C5D6] leading-relaxed mb-6 font-normal">
                  {area.summary}
                </p>

                {/* Specific bullets */}
                <div className="pt-4 border-t border-[#1E2E42] space-y-2.5">
                  <span className="block text-[10px] uppercase tracking-[0.16em] text-[#8E9DB2] font-semibold">
                    CORE DOMAINS
                  </span>
                  <ul className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1] leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8E9DB2] mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
