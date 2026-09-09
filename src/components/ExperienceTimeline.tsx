import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Title & Editorial Subhead */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">
                  EXPERIENCE
                </span>
                <span className="w-12 h-px bg-[#2D435F]"></span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal leading-[1.08] mb-6">
                Professional<br />Journey
              </h2>

              <p className="text-sm sm:text-base text-[#B8C5D6] leading-relaxed max-w-sm font-normal">
                A curated history of legal practice, academic engagement, and advisory roles spanning intellectual property, campus leadership, and digital innovation.
              </p>

              <div className="mt-8 pt-8 border-t border-[#1E2E42] hidden lg:block">
                <div className="flex items-center gap-2 text-xs text-[#8E9DB2]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FAF8F5]"></span>
                  <span>Active Appointment / Engagement</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8E9DB2] mt-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-[#8E9DB2] bg-[#0D1B2A]"></span>
                  <span>Completed Term / Fellowship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div className="lg:col-span-8 lg:pl-4">
            <div className="relative pl-6 sm:pl-8 border-l border-[#2D435F] space-y-12">
              
              {EXPERIENCES.map((item) => (
                <div
                  key={item.id}
                  id={`experience-entry-${item.id}`}
                  className="relative group"
                >
                  {/* Timeline node marker */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                      item.isCurrent
                        ? 'bg-[#FAF8F5] border-[#FAF8F5]'
                        : 'bg-[#0D1B2A] border-[#8E9DB2]'
                    }`}
                  />

                  {/* Date & Track header */}
                  <div className="flex items-center flex-wrap gap-2 text-xs sm:text-[13px] font-semibold tracking-wider text-[#8E9DB2] uppercase mb-2">
                    <span>{item.date}</span>
                    <span className="text-[#3D5575]">——</span>
                    <span className="text-[#CBD5E1]">{item.role}</span>
                  </div>

                  {/* Organization name */}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF8F5] tracking-tight mb-2 group-hover:text-white">
                    {item.organization}
                  </h3>

                  {/* Description in subtle editorial italic text */}
                  <p className="text-sm sm:text-base italic text-[#B8C5D6] leading-relaxed max-w-2xl font-normal">
                    {item.description}
                  </p>

                  {/* Dividing line */}
                  <div className="mt-8 pt-2 border-b border-[#1E2E42]"></div>
                </div>
              ))}

              {/* Bottom Exploration Pill Badge */}
              <div className="pt-4 pb-2">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#112235] border border-[#1E2E42] rounded-full text-xs font-semibold uppercase tracking-wider text-[#CBD5E1]">
                  <span className="w-2 h-2 rounded-full bg-[#FAF8F5] animate-pulse"></span>
                  <span>CONTINUOUSLY EXPLORING NEW FRONTIERS</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
