import React from 'react';
import { X, ExternalLink, Download, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_INFO, EXPERIENCES, LEADERSHIP_ITEMS, PUBLICATIONS } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="cv-modal-backdrop"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#091420]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-[#112235] text-[#FAF8F5] border border-[#2D435F] rounded-xs max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#1E2E42] bg-[#0D1B2A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#112235] border border-[#2D435F] flex items-center justify-center text-[#FAF8F5]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-normal text-[#FAF8F5]">
                Curriculum Vitae — {PERSONAL_INFO.name}
              </h2>
              <p className="text-xs text-[#8E9DB2]">
                Official Academic & Professional Record
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="cv-direct-pdf-open"
              href={PERSONAL_INFO.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FAF8F5] hover:bg-white text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <span>Open PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#8E9DB2] hover:text-[#FAF8F5] hover:bg-[#1E2E42] rounded-full transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Verified Record Structure */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-8 text-[#CBD5E1]">
          
          {/* Header Summary */}
          <div className="pb-6 border-b border-[#1E2E42]">
            <h1 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#A0B0C4] mb-3">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#8E9DB2]">
              <span>Email: {PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>Tel: {PERSONAL_INFO.phone1Display} / {PERSONAL_INFO.phone2Display}</span>
              <span>•</span>
              <span>LinkedIn: {PERSONAL_INFO.linkedInDisplay}</span>
              <span>•</span>
              <span>Location: {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5] mb-4 pb-1 border-b border-[#1E2E42]">
              Education
            </h3>
            <div className="bg-[#0D1B2A] border border-[#1E2E42] p-5 rounded-xs">
              <div className="flex justify-between items-start mb-1">
                <span className="font-serif text-lg text-[#FAF8F5] font-medium">{EDUCATION_INFO.degree}</span>
                <span className="text-xs font-mono text-[#8E9DB2]">{EDUCATION_INFO.period}</span>
              </div>
              <p className="text-sm font-medium text-[#CBD5E1]">{EDUCATION_INFO.institution}</p>
              <p className="text-xs text-[#8E9DB2] mt-2">Area of Focus: {EDUCATION_INFO.area}</p>
            </div>
          </div>

          {/* Legal Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5] mb-4 pb-1 border-b border-[#1E2E42]">
              Experience & Appointments
            </h3>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="bg-[#0D1B2A] border border-[#1E2E42] p-4 rounded-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#8E9DB2] mb-1">
                    <span className="font-semibold text-[#FAF8F5]">{exp.role}</span>
                    <span>{exp.date}</span>
                  </div>
                  <h4 className="font-serif text-base text-[#FAF8F5] mb-1">{exp.organization}</h4>
                  <p className="text-xs text-[#B8C5D6] italic leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmed Publications */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5] mb-4 pb-1 border-b border-[#1E2E42]">
              Confirmed Research Publications (2026)
            </h3>
            <div className="space-y-3">
              {PUBLICATIONS.map((pub) => (
                <div key={pub.id} className="bg-[#0D1B2A] border border-[#1E2E42] p-4 rounded-xs">
                  <div className="flex justify-between items-center text-xs font-mono text-[#8E9DB2] mb-1">
                    <span className="font-semibold text-[#FAF8F5]">{pub.type}</span>
                    <span>{pub.year}</span>
                  </div>
                  <p className="font-serif text-sm font-medium text-[#FAF8F5]">{pub.title}</p>
                  <p className="text-xs text-[#B8C5D6] mt-1">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Impact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF8F5] mb-4 pb-1 border-b border-[#1E2E42]">
              Leadership & Civic Engagement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LEADERSHIP_ITEMS.map((item) => (
                <div key={item.id} className="bg-[#0D1B2A] border border-[#1E2E42] p-4 rounded-xs">
                  <span className="text-[11px] font-mono text-[#8E9DB2] block mb-1">{item.period}</span>
                  <p className="font-serif text-base text-[#FAF8F5] font-medium">{item.role}</p>
                  <p className="text-xs text-[#CBD5E1] mb-2">{item.organization}</p>
                  <p className="text-xs text-[#8E9DB2] leading-snug">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#1E2E42] bg-[#0D1B2A] flex items-center justify-between">
          <div className="text-xs text-[#8E9DB2]">
            Target asset: <span className="font-mono text-[#FAF8F5]">{PERSONAL_INFO.cvPdfPath}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#CBD5E1] hover:text-[#FAF8F5]"
            >
              Close
            </button>
            <a
              href={PERSONAL_INFO.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF8F5] hover:bg-white text-[#0D1B2A] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
