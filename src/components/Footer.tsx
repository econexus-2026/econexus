import React, { useState } from 'react';
import { EcoNexusLogo } from './EcoNexusLogo';
import { COMPANY_CONTACT } from '../data/mockData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  ShieldCheck, 
  ExternalLink,
  Lock,
  FileText,
  X
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00241a] text-white pt-16 pb-12 relative overflow-hidden border-t border-[#064e3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#064e3b]">
          {/* Brand & Slogan (4 Cols) */}
          <div className="lg:col-span-4">
            <EcoNexusLogo variant="white" size="md" showTagline={false} className="mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {COMPANY_CONTACT.tagline}
            </p>
            <p className="text-xs text-emerald-300 font-medium leading-relaxed">
              {COMPANY_CONTACT.slogan}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>Certified Industrial ESG Advisory Practice</span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Sustainability Assessments</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Higg FEM Consulting</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Social & SLCP Audits</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Carbon & Scope 1-2-3</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">ZDHC Chemical Safety</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">EU CBAM & CSDDD</a></li>
            </ul>
          </div>

          {/* Sectors & Framework (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Sector Specializations
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#industries" className="hover:text-emerald-400 transition-colors">Textiles, Spinning & Dyeing</a></li>
              <li><a href="#industries" className="hover:text-emerald-400 transition-colors">Leather & Footwear Tanneries</a></li>
              <li><a href="#industries" className="hover:text-emerald-400 transition-colors">Chemical & Polymer Formulation</a></li>
              <li><a href="#industries" className="hover:text-emerald-400 transition-colors">Foundries & Auto Ancillaries</a></li>
              <li><a href="#framework" className="hover:text-emerald-400 transition-colors">12-Pillar Strategic Framework</a></li>
              <li><a href="#training" className="hover:text-emerald-400 transition-colors">EHS & Lead Auditor Academy</a></li>
            </ul>
          </div>

          {/* Regional Hub & Contact (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.headquarters}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#064e3b]">
              <a
                href="#contact"
                className="inline-block w-full text-center bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2 px-3 rounded-lg text-xs transition-all shadow-sm"
              >
                Request Regional Site Visit
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} EcoNexus Advisors. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Privacy Policy & NDA
            </button>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Advisory Terms
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#064e3b] hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal & NDA Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white text-[#191c1d] rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#d1fae5] relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#064e3b] mb-4">
              <Lock className="w-5 h-5 text-[#10b981]" />
              <h3 className="text-xl font-bold text-[#003527]">
                {activeLegalModal === 'privacy' ? 'Client Confidentiality & NDA' : 'Professional Advisory Terms'}
              </h3>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-[#404944] leading-relaxed mb-6">
              <p>
                <strong>1. Data Confidentiality:</strong> EcoNexus Advisors operates under strict Non-Disclosure Agreements for all industrial audits, chemical formulations, effluent test results, and energy billing records.
              </p>
              <p>
                <strong>2. Independent Verification:</strong> Our advisory findings strictly align with international standards including SAC Higg Index, ZDHC Gateway, SLCP, and ISO 14064 guidelines.
              </p>
              <p>
                <strong>3. Regulatory Compliance:</strong> We maintain strict neutrality and assist client facilities in achieving statutory compliance with State Pollution Control Boards and global retail standards.
              </p>
            </div>

            <button
              onClick={() => setActiveLegalModal(null)}
              className="w-full bg-[#064e3b] text-white py-2.5 rounded-xl font-bold text-xs"
            >
              Understood & Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
