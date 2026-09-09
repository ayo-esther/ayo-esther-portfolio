import React, { useState, useRef, useEffect } from 'react';
import { Scale, Award, BookOpen, Globe, ArrowRight, ShieldCheck, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import structuralFluidityImg from '../assets/structural-fluidity.jpg';

export const About: React.FC = () => {
  const [artworkSrc, setArtworkSrc] = useState<string>(structuralFluidityImg);
  const artworkInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const savedArtwork = localStorage.getItem('aoe_custom_about_artwork');
      if (savedArtwork) {
        setArtworkSrc(savedArtwork);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleArtworkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setArtworkSrc(result);
          try {
            localStorage.setItem('aoe_custom_about_artwork', result);
          } catch {
            // Ignore localStorage errors
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const scrollToExperience = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* PART 1: The Frontier of Law & Technology (From Visily Screen 1)          */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 border-b border-[#1E2E42]">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            
            {/* Editorial Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A0B0C4]">ABOUT</span>
              <span className="w-16 h-px bg-[#2D435F]"></span>
            </div>

            {/* Display Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#FAF8F5] mb-8 font-normal">
              Navigating the <span className="italic font-normal font-serif">frontier</span> of law and technology.
            </h2>

            {/* Body copy */}
            <div className="space-y-5 text-base sm:text-[17px] text-[#B8C5D6] leading-relaxed font-normal">
              <p>
                {PERSONAL_INFO.aboutOpening}
              </p>
              <p>
                {PERSONAL_INFO.aboutBody1}
              </p>
              <p>
                {PERSONAL_INFO.aboutBody2}
              </p>
            </div>

            {/* Metadata columns */}
            <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-[#1E2E42]">
              <div id="about-focus-container">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8E9DB2] mb-1">
                  FOCUS
                </span>
                <span id="about-focus-value" className="text-sm font-medium text-[#FAF8F5]">
                  {PERSONAL_INFO.focusSummary}
                </span>
              </div>
              <div id="about-location-container">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8E9DB2] mb-1">
                  LOCATION
                </span>
                <span id="about-location-value" className="text-sm font-medium text-[#FAF8F5]">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

          </div>

          {/* Right Visual Column: Structural Architectural Digital Fluidity Graphic */}
          <div className="lg:col-span-5">
            <div
              id="about-visual-container"
              className="relative group rounded-sm overflow-hidden border border-[#1E2E42] bg-[#112235] aspect-[4/5] shadow-md flex items-center justify-center p-3 sm:p-5"
            >
              {/* Fine Art Print of Structural Integration & Fluidity */}
              <div className="w-full h-full relative overflow-hidden rounded-xs border border-[#1E2E42] bg-[#FAF8F5] flex items-center justify-center">
                <img
                  id="about-fluidity-image"
                  src={artworkSrc}
                  alt="Intersection of structural integration and digital fluidity"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Editorial corner stamp */}
                <div className="absolute top-3.5 right-3.5 bg-[#091420]/90 backdrop-blur-xs px-2.5 py-1 border border-[#1E2E42] rounded-xs text-[10px] font-mono tracking-widest uppercase text-[#A0B0C4] shadow-xs">
                  ARCHIVE / 01
                </div>

                {/* Bottom subtle badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#091420]/95 backdrop-blur-md px-3.5 py-2.5 rounded-xs border border-[#1E2E42] shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1 bg-[#0D1B2A] rounded-xs text-[#FAF8F5] border border-[#2D435F]">
                      <Scale className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#C2D0E0] font-medium">
                      Structural Integrity & Digital Fluidity
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => artworkInputRef.current?.click()}
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-[#8E9DB2] hover:text-[#FAF8F5] transition-colors"
                    title="Change artwork"
                  >
                    <Camera className="w-3 h-3" />
                    <span className="hidden sm:inline">Swap</span>
                  </button>
                </div>
              </div>

              {/* Hidden file input for uploading custom artwork */}
              <input
                ref={artworkInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleArtworkUpload}
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PART 2: Strategic Pillars & Professional Context (From Visily Screen 2)   */}
        {/* ========================================================================= */}
        <div className="pt-16 sm:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading & Core Pillars */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal mb-4">
              About
            </h3>
            <div className="w-16 h-px bg-[#2D435F] mb-8"></div>

            {/* The 3 Pillars */}
            <div className="space-y-4">
              
              <div className="flex items-center gap-3 p-3 bg-[#112235] border border-[#1E2E42] rounded-xs shadow-2xs">
                <div className="w-8 h-8 rounded-xs bg-[#0D1B2A] flex items-center justify-center border border-[#2D435F] text-[#FAF8F5]">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#E2E8F0] uppercase">
                  STRATEGIC POLICY ADVISOR
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#112235] border border-[#1E2E42] rounded-xs shadow-2xs">
                <div className="w-8 h-8 rounded-xs bg-[#0D1B2A] flex items-center justify-center border border-[#2D435F] text-[#FAF8F5]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#E2E8F0] uppercase">
                  LEGAL RESEARCHER & AUTHOR
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#112235] border border-[#1E2E42] rounded-xs shadow-2xs">
                <div className="w-8 h-8 rounded-xs bg-[#0D1B2A] flex items-center justify-center border border-[#2D435F] text-[#FAF8F5]">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#E2E8F0] uppercase">
                  TECH-LAW INTEGRATION
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: In-depth Editorial Narrative */}
          <div className="lg:col-span-8 lg:pl-6">
            <h4 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] leading-snug font-normal mb-6">
              {PERSONAL_INFO.aboutSubhead}
            </h4>

            <div className="space-y-5 text-base sm:text-[17px] text-[#B8C5D6] leading-relaxed">
              <p>
                {PERSONAL_INFO.aboutExtended1}
              </p>
              <p>
                {PERSONAL_INFO.aboutExtended2}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-[#1E2E42]">
              <a
                id="about-view-journey-link"
                href="#experience"
                onClick={scrollToExperience}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#FAF8F5] hover:text-white group"
              >
                <span className="border-b border-[#8E9DB2] pb-0.5 group-hover:border-white transition-colors">
                  View Professional Journey
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
