import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, X, Layers, FileText } from 'lucide-react';
import { WORK_PROJECTS } from '../data/portfolioData';
import { WorkProject } from '../types';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  return (
    <section id="work" className="py-16 sm:py-24 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">
                RESEARCH INQUIRIES & PAPERS
              </span>
              <span className="w-12 h-px bg-[#2D435F]"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
              Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B8C5D6] max-w-md font-normal">
            Rigorous scholarship and statutory analysis spanning real property fractionalization, digital creator rights, privacy legislation, and constitutional review.
          </p>
        </div>

        {/* 4 Editorial Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORK_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              id={`work-item-${project.id}`}
              className="bg-[#112235] border border-[#1E2E42] p-8 sm:p-10 rounded-xs flex flex-col justify-between hover:border-[#385170] transition-all duration-200 shadow-sm group"
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between text-xs font-mono uppercase text-[#8E9DB2] mb-5 pb-3 border-b border-[#1E2E42]">
                  <span className="font-semibold tracking-wider text-[#A0B0C4]">PROJECT 0{idx + 1}</span>
                  <span className="tracking-widest">{project.year}</span>
                </div>

                {/* Domain Pill */}
                <span className="inline-block px-2.5 py-1 bg-[#1A2F47] border border-[#2D435F] text-[11px] font-semibold uppercase tracking-wider text-[#CBD5E1] rounded-full mb-4">
                  {project.domain}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-[26px] text-[#FAF8F5] font-normal leading-snug mb-4 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-sm sm:text-[15px] text-[#B8C5D6] leading-relaxed font-normal mb-6">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Thematic Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#1E2E42]">
                  {project.keyThemes.map((theme, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 bg-[#0D1B2A] border border-[#2D435F] text-[#CBD5E1] rounded-xs font-mono"
                    >
                      #{theme}
                    </span>
                  ))}
                </div>

                {/* Detail View trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2 text-xs font-semibold uppercase tracking-widest text-[#FAF8F5] hover:text-white group/btn pt-1"
                >
                  <span className="border-b border-[#8E9DB2] pb-0.5 group-hover/btn:border-white">Read Research Overview</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal for Research Overview */}
      {selectedProject && (
        <div
          id="project-overview-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#091420]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#112235] text-[#FAF8F5] border border-[#2D435F] rounded-xs max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-[#8E9DB2] hover:text-white hover:bg-[#1E2E42] rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#8E9DB2] mb-3">
              <span>LEGAL SCHOLARSHIP</span>
              <span>•</span>
              <span>{selectedProject.year}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal leading-snug mb-4">
              {selectedProject.title}
            </h3>

            <div className="inline-block px-3 py-1 bg-[#1A2F47] text-xs font-medium uppercase tracking-wider text-[#CBD5E1] rounded-full mb-6 border border-[#2D435F]">
              {selectedProject.domain}
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#B8C5D6] leading-relaxed border-t border-b border-[#1E2E42] py-6 my-6">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#FAF8F5]">
                Abstract & Research Inquiry
              </h4>
              <p>{selectedProject.summary}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] mb-3">
                Doctrinal & Analytical Keywords
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.keyThemes.map((theme, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-[#0D1B2A] border border-[#2D435F] text-[#CBD5E1] rounded-xs font-mono"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1E2E42] flex items-center justify-between text-xs text-[#8E9DB2]">
              <span>Author: Ayo Oformeh Esther</span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-[#FAF8F5] text-[#0D1B2A] font-medium rounded-xs hover:bg-white transition-colors"
              >
                Close Overview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
