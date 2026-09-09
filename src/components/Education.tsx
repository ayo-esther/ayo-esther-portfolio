import React from 'react';
import { GraduationCap, Calendar, MapPin, BookMarked } from 'lucide-react';
import { EDUCATION_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-14 sm:py-20 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Section label & context */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">
                ACADEMIC FOUNDATION
              </span>
              <span className="w-12 h-px bg-[#2D435F]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal tracking-tight mb-4">
              Education
            </h2>
            <p className="text-sm sm:text-base text-[#B8C5D6] leading-relaxed font-normal">
              Rigorous grounding in legal theory, international treaties, and statutory frameworks at Nile University of Nigeria.
            </p>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-8">
            <div className="bg-[#112235] border border-[#1E2E42] rounded-xs p-8 sm:p-10 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1E2E42]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xs bg-[#0D1B2A] border border-[#2D435F] flex items-center justify-center text-[#FAF8F5]">
                    <GraduationCap className="w-6 h-6" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal">
                      {EDUCATION_INFO.degree}
                    </h3>
                    <p className="text-base text-[#CBD5E1] font-medium">
                      {EDUCATION_INFO.institution}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A2F47] border border-[#2D435F] text-xs font-semibold tracking-wider uppercase text-[#E2E8F0] rounded-full self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-[#A0B0C4]" />
                  <span>{EDUCATION_INFO.period}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E9DB2] mb-1">
                    SPECIALIZATION
                  </span>
                  <p className="text-sm font-medium text-[#FAF8F5]">
                    {EDUCATION_INFO.area}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8E9DB2] mb-1">
                    CURRICULAR EMPHASIS
                  </span>
                  <p className="text-sm text-[#B8C5D6] leading-relaxed">
                    {EDUCATION_INFO.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
