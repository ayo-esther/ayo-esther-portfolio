import React from 'react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="py-12 bg-[#0D1B2A] text-[#8E9DB2] border-t border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-xs sm:text-sm font-normal text-[#8E9DB2]">
          © 2026 {PERSONAL_INFO.name}. All rights reserved.
        </div>

        {/* Right: Social & Functional links */}
        <div className="flex items-center gap-6">
          <a
            id="footer-email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send email"
            className="p-2 text-[#A0B0C4] hover:text-[#FAF8F5] hover:bg-[#112235] rounded-full transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            id="footer-linkedin-link"
            href={PERSONAL_INFO.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 text-[#A0B0C4] hover:text-[#FAF8F5] hover:bg-[#112235] rounded-full transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Twitter / X svg */}
          <a
            id="footer-x-link"
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="p-2 text-[#A0B0C4] hover:text-[#FAF8F5] hover:bg-[#112235] rounded-full transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <div className="w-px h-4 bg-[#2D435F] mx-1"></div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#A0B0C4] hover:text-[#FAF8F5] transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
