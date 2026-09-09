import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, ArrowRight, Phone, MessageSquare, ExternalLink, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone1' | 'phone2') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(type);
      setTimeout(() => setCopiedPhone(null), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0D1B2A] text-[#FAF8F5] border-b border-[#1E2E42] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Pill Label */}
        <div className="inline-block px-3 py-1 bg-[#1A2F47] border border-[#2D435F] rounded-full mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CBD5E1]">
            CONNECT & COLLABORATE
          </span>
        </div>

        {/* Big Editorial Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] font-normal leading-tight tracking-tight mb-8">
          Ready to navigate the intersection of law and technology?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#B8C5D6] max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          Direct inquiries for legal research collaborations, IP consultation, academic engagements, or policy advisory.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-12">
          
          {/* Primary Button: Send a Message / Call */}
          <a
            id="contact-send-message-btn"
            href={`tel:${PERSONAL_INFO.phone1}`}
            onClick={(e) => {
              e.preventDefault();
              setShowPhoneModal(true);
            }}
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#FAF8F5] hover:bg-white text-[#0D1B2A] text-sm font-medium tracking-wide rounded-xs transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] border border-[#CBD5E1]"
            title="Connect via +2349049554004 or +2349165626660"
          >
            <div className="w-7 h-7 rounded-full bg-[#0D1B2A] text-[#FAF8F5] flex items-center justify-center transition-transform group-hover:scale-110">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <span className="block font-semibold text-sm text-[#0D1B2A] leading-tight">Send a Message / Call</span>
              <span className="block text-[11px] font-mono text-[#3D5575] leading-tight">
                {PERSONAL_INFO.phone1Display} • {PERSONAL_INFO.phone2Display}
              </span>
            </div>
            <MessageSquare className="w-4 h-4 text-[#0D1B2A] transition-transform group-hover:translate-x-0.5 ml-1" />
          </a>

          {/* Secondary Link: LinkedIn Profile */}
          <a
            id="contact-linkedin-link"
            href="https://www.linkedin.com/in/oformeh-esther-a-9a325b356"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-4 bg-[#112235] hover:bg-[#1A2F47] text-[#FAF8F5] border border-[#2D435F] hover:border-[#4B6B94] text-sm font-medium tracking-wide rounded-xs transition-all duration-200 shadow-sm active:scale-[0.99]"
          >
            <span className="group-hover:text-white transition-colors">
              LinkedIn: {PERSONAL_INFO.linkedInDisplay}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#CBD5E1] group-hover:text-white" />
          </a>

        </div>

        {/* Direct Contact Cards (Phone Number & Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          
          {/* Primary Phone */}
          <div className="p-4 bg-[#112235] border border-[#1E2E42] rounded-xs shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[#8E9DB2] mb-1.5">
                <span>PRIMARY LINE</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <p className="font-mono text-sm font-medium text-[#FAF8F5] mb-2">{PERSONAL_INFO.phone1Display}</p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-[#1E2E42] text-xs">
              <a
                href={`https://wa.me/2349049554004`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-[#1A2F47] hover:bg-[#233F5E] text-[#FAF8F5] rounded-xs transition-colors flex items-center gap-1 font-sans"
              >
                <MessageSquare className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone1}`}
                className="px-2.5 py-1 bg-[#1A2F47] hover:bg-[#233F5E] text-[#FAF8F5] rounded-xs transition-colors flex items-center gap-1 font-sans"
              >
                <Phone className="w-3 h-3 text-[#A0B0C4]" />
                <span>Call</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.phone1, 'phone1')}
                className="p-1 hover:bg-[#1A2F47] rounded-xs text-[#CBD5E1] hover:text-white transition-colors ml-auto"
                title="Copy phone number"
                aria-label="Copy primary phone number"
              >
                {copiedPhone === 'phone1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="p-4 bg-[#112235] border border-[#1E2E42] rounded-xs shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[#8E9DB2] mb-1.5">
                <span>EMAIL DISPATCH</span>
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              </div>
              <p className="font-mono text-xs font-medium text-[#FAF8F5] mb-2 truncate" title={PERSONAL_INFO.email}>
                {PERSONAL_INFO.email}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-[#1E2E42] text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-2.5 py-1 bg-[#1A2F47] hover:bg-[#233F5E] text-[#FAF8F5] rounded-xs transition-colors flex items-center gap-1 font-sans"
              >
                <Mail className="w-3 h-3 text-[#A0B0C4]" />
                <span>Send Mail</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-1 hover:bg-[#1A2F47] rounded-xs text-[#CBD5E1] hover:text-white transition-colors ml-auto"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Modal when clicking Send a Message / Call */}
      {showPhoneModal && (
        <div
          id="contact-phone-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#091420]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#112235] text-[#FAF8F5] border border-[#2D435F] rounded-xs max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              type="button"
              onClick={() => setShowPhoneModal(false)}
              className="absolute top-5 right-5 p-2 text-[#8E9DB2] hover:text-white hover:bg-[#1E2E42] rounded-full transition-colors"
              aria-label="Close contact modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0D1B2A] border border-[#2D435F] flex items-center justify-center text-[#FAF8F5]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF8F5]">
                  Contact Ayo Oformeh Esther
                </h3>
                <p className="text-xs text-[#8E9DB2]">
                  Select your preferred direct line to message or call
                </p>
              </div>
            </div>

            <div className="space-y-4 my-6">
              
              {/* Option 1: Primary Line */}
              <div className="p-4 bg-[#0D1B2A] border border-[#1E2E42] rounded-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A0B0C4] font-semibold">
                    PRIMARY LINE
                  </span>
                  <span className="text-xs font-mono text-[#FAF8F5] font-semibold">
                    {PERSONAL_INFO.phone1Display}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <a
                    href="https://wa.me/2349049554004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium rounded-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+2349049554004"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#1A2F47] hover:bg-[#233F5E] text-[#FAF8F5] text-xs font-medium rounded-xs border border-[#2D435F] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>

              {/* Option 2: Direct Line */}
              <div className="p-4 bg-[#0D1B2A] border border-[#1E2E42] rounded-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A0B0C4] font-semibold">
                    DIRECT LINE
                  </span>
                  <span className="text-xs font-mono text-[#FAF8F5] font-semibold">
                    {PERSONAL_INFO.phone2Display}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <a
                    href="https://wa.me/2349165626660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium rounded-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+2349165626660"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#1A2F47] hover:bg-[#233F5E] text-[#FAF8F5] text-xs font-medium rounded-xs border border-[#2D435F] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-[#1E2E42] flex items-center justify-between text-xs text-[#8E9DB2]">
              <span>Email: {PERSONAL_INFO.email}</span>
              <button
                type="button"
                onClick={() => setShowPhoneModal(false)}
                className="px-3.5 py-1.5 bg-[#FAF8F5] text-[#0D1B2A] font-semibold rounded-xs hover:bg-white transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

