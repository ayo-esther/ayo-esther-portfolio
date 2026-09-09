import React from 'react';
import { Users, Shield, Award, Sparkles, Compass } from 'lucide-react';
import { LEADERSHIP_ITEMS } from '../data/portfolioData';

export const LeadershipImpact: React.FC = () => {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">
                INSTITUTIONAL SERVICE
              </span>
              <span className="w-12 h-px bg-[#2D435F]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
              Leadership & Impact
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B8C5D6] max-w-md font-normal">
            Active service across student advocacy, civic representation, national coordination, and legal community mentorship.
          </p>
        </div>

        {/* 4 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {LEADERSHIP_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`leadership-card-${item.id}`}
              className="bg-[#112235] border border-[#1E2E42] rounded-xs p-8 flex flex-col justify-between shadow-sm hover:border-[#385170] transition-colors"
            >
              <div>
                {/* Period & Role Tag */}
                <div className="flex items-center justify-between text-xs font-mono text-[#8E9DB2] uppercase mb-4 pb-3 border-b border-[#1E2E42]">
                  <span className="font-semibold text-[#FAF8F5]">{item.period}</span>
                  <span className="px-2 py-0.5 bg-[#0D1B2A] border border-[#2D435F] text-[#CBD5E1] rounded-xs">
                    ACTIVE MANDATE
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal mb-2">
                  {item.role}
                </h3>

                {/* Organization */}
                <p className="text-base text-[#CBD5E1] font-medium mb-4">
                  {item.organization}
                </p>

                {/* Focus description */}
                <p className="text-sm text-[#B8C5D6] leading-relaxed font-normal">
                  {item.focus}
                </p>
              </div>

              {/* Bottom bar */}
              <div className="mt-6 pt-4 border-t border-[#1E2E42] flex items-center gap-2 text-xs text-[#8E9DB2]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAF8F5]" />
                <span>Verified Leadership Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
