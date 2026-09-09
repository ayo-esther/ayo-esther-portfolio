import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import defaultPortrait from '../assets/images/portrait.jpg';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [imageSrc, setImageSrc] = useState<string>(defaultPortrait || PERSONAL_INFO.portraitPath);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user has uploaded a custom portrait in localStorage
    const savedPortrait = localStorage.getItem('aoe_custom_portrait');
    if (savedPortrait) {
      setImageSrc(savedPortrait);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImageSrc(result);
          try {
            localStorage.setItem('aoe_custom_portrait', result);
          } catch {
            // Storage quota warning fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Portrait Asset */}
          <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-1">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              
              {/* Outer decorative framing */}
              <div className="relative overflow-hidden rounded-md border border-[#1E2E42] bg-[#0D1B2A] aspect-[4/5] shadow-lg">
                
                {/* Editorial Portrait Canvas with Portrait in Circle */}
                <div className="w-full h-full flex flex-col items-center justify-between p-6 sm:p-8 bg-[#0D1B2A] text-[#FAF8F5]">
                  <div className="w-full flex justify-between items-center text-xs tracking-widest text-[#8E9DB2] uppercase">
                    <span className="font-mono">PORTRAIT ARCHIVE</span>
                    <span className="font-mono">AOE / 2026</span>
                  </div>

                  <div className="text-center my-auto w-full">
                    {/* The circle containing the portrait */}
                    <div
                      id="hero-portrait-circle"
                      className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full border-2 border-[#D5CFC2] overflow-hidden flex items-center justify-center mb-5 bg-[#0D1B2A] shadow-md ring-4 ring-white/10 relative group/portrait transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <img
                        id="hero-portrait-img"
                        src={imageSrc}
                        alt="Portrait of Ayo Oformeh Esther"
                        className="w-full h-full object-cover object-[50%_18%] transition-transform duration-500 group-hover/portrait:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h2 className="font-serif text-2xl font-normal tracking-wide text-[#FAF8F5] mb-1.5">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs uppercase tracking-widest text-[#D5CFC2] font-medium">
                      Legal Researcher & IP Strategist
                    </p>
                    <p className="text-[11px] tracking-wide text-[#8E9DB2] mt-1">
                      Nile University of Nigeria • Public & International Law
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-[#1E2E42] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#E2E8F0] hover:text-white bg-[#142334] hover:bg-[#1B2F46] border border-[#2D435F] hover:border-[#D5CFC2] rounded-xs transition-colors"
                      title="Upload or change portrait photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Change Photo</span>
                    </button>
                    <span id="hero-portrait-location" className="text-[10px] tracking-widest uppercase text-[#8E9DB2]">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Hidden input for user photo upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  aria-label="Upload custom portrait photo"
                />
              </div>

              {/* Editorial bottom caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#8E9DB2]">
                <span>Ayo Oformeh Esther</span>
                <span className="text-[#6F829A]">Legal Scholar & Researcher</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Typography & Action */}
          <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-2 lg:pl-4">
            
            {/* Header label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">
                PROFESSIONAL PROFILE
              </span>
              <span className="w-12 h-px bg-[#2D435F]"></span>
            </div>

            {/* Display typography title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.92] tracking-tight text-[#FAF8F5] mb-6">
              <span className="block font-medium">AYO</span>
              <span className="block font-medium">OFORMEH</span>
              <span className="block text-[#8E9DB2] font-normal">ESTHER</span>
            </h1>

            {/* Subtitle / Focus pill line */}
            <div className="mb-6 pt-2 pb-1 border-y border-[#1E2E42]">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#E2E8F0] uppercase">
                LAW • INTELLECTUAL PROPERTY • TECHNOLOGY • POLICY
              </p>
            </div>

            {/* Lead editorial statement */}
            <p className="text-base sm:text-lg text-[#B8C5D6] leading-relaxed max-w-2xl mb-8 font-normal">
              {PERSONAL_INFO.leadStatement}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-explore-work-btn"
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FAF8F5] hover:bg-white text-[#0D1B2A] text-sm font-semibold tracking-wide rounded-xs transition-all duration-200 shadow-sm active:scale-[0.99]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-view-cv-btn"
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/10 text-[#FAF8F5] border border-[#3E526B] hover:border-white text-sm font-medium tracking-wide rounded-xs transition-all duration-200 active:scale-[0.99]"
              >
                <FileText className="w-4 h-4 text-[#C2D0E0]" />
                <span>View My CV</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
