import React, { useState, useEffect } from 'react';
import { Menu, X, Feather } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'work', 'publications', 'perspectives', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Publications', href: '#publications' },
    { label: 'Perspectives', href: '#perspectives' },
    { label: 'Leadership & Impact', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D1B2A]/95 backdrop-blur-md border-b border-[#1E2E42] shadow-md py-3.5'
          : 'bg-[#0D1B2A] border-b border-[#1E2E42]/80 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <a
          id="header-brand-link"
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FAF8F5] rounded-sm"
        >
          <div className="w-8 h-8 rounded-full bg-[#112235] border border-[#2D435F] flex items-center justify-center text-[#FAF8F5] transition-transform duration-300 group-hover:scale-105">
            <Feather className="w-4 h-4 text-[#FAF8F5]" strokeWidth={1.8} />
          </div>
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#FAF8F5] group-hover:text-white transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const sectionKey = item.href.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={item.label}
                id={`nav-link-${sectionKey}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#FAF8F5] font-medium'
                    : 'text-[#8E9DB2] hover:text-[#FAF8F5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FAF8F5] rounded-full" />
                )}
              </a>
            );
          })}

          <button
            id="header-cv-button"
            type="button"
            onClick={onOpenCvModal}
            className="ml-2 px-3.5 py-1.5 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] border border-[#2D435F] rounded-full hover:bg-[#FAF8F5] hover:text-[#0D1B2A] transition-colors"
          >
            CV
          </button>
        </nav>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            id="mobile-cv-toggle"
            type="button"
            onClick={onOpenCvModal}
            className="px-3 py-1 text-xs uppercase tracking-wider font-medium text-[#FAF8F5] border border-[#2D435F] rounded-full hover:bg-[#FAF8F5] hover:text-[#0D1B2A] transition-colors"
          >
            CV
          </button>
          <button
            id="mobile-menu-button"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAF8F5] hover:bg-[#112235] rounded-md transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FAF8F5]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-[#1E2E42] bg-[#0D1B2A]/98 backdrop-blur-md px-6 py-5 transition-all animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-base py-2 px-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#112235] text-[#FAF8F5] font-medium'
                      : 'text-[#8E9DB2] hover:text-[#FAF8F5] hover:bg-[#112235]/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
