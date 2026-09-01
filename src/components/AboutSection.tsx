import React from 'react';
import { 
  Building2, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Globe2, 
  Target, 
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';
import { EcoNexusLogo } from './EcoNexusLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual & Badge (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Decorative Gradient Border */}
              <div className="bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] rounded-3xl p-8 border border-[#10b981]/30 shadow-ambient text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/10 rounded-full blur-2xl pointer-events-none" />
                
                <EcoNexusLogo variant="full" size="lg" showTagline={true} className="mb-6" />

                <div className="mt-6 pt-6 border-t border-[#d1fae5]/80 grid grid-cols-2 gap-4 text-left">
                  <div className="bg-white/80 p-3.5 rounded-xl border border-[#d1fae5]">
                    <div className="flex items-center gap-1.5 text-[#064e3b] font-bold text-lg">
                      <MapPin className="w-4 h-4 text-[#10b981]" />
                      Kangeyam
                    </div>
                    <span className="text-[11px] text-[#404944] block">Tamil Nadu, India Hub</span>
                  </div>
                  <div className="bg-white/80 p-3.5 rounded-xl border border-[#d1fae5]">
                    <div className="flex items-center gap-1.5 text-[#064e3b] font-bold text-lg">
                      <Globe2 className="w-4 h-4 text-[#10b981]" />
                      Global
                    </div>
                    <span className="text-[11px] text-[#404944] block">Buyer Audit Alignments</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#064e3b] text-white rounded-xl text-xs flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                  <span>Licensed ESG Auditors & Certified Practitioners</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy & Pillars (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#d1fae5] mb-3">
              <Building2 className="w-4 h-4 text-[#10b981]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                About EcoNexus Advisors
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#003527] tracking-tight mb-4">
              Pioneering Pragmatic, Engineering-Led Industrial ESG
            </h2>

            <p className="text-[#404944] text-base md:text-lg leading-relaxed mb-6">
              Headquartered in Kangeyam, Tamil Nadu—at the epicenter of India’s premier textile, manufacturing, and export corridors—<strong>EcoNexus Advisors</strong> bridges the critical gap between complex statutory environmental regulations and operational industrial reality.
            </p>

            <p className="text-[#404944] text-sm md:text-base leading-relaxed mb-6">
              We reject generic "tick-the-box" compliance. Instead, our team of environmental engineers, certified energy auditors, and social compliance specialists implement data-backed systems that satisfy stringent Western retail buyer audits (Higg FEM, ZDHC, SLCP, EU CBAM) while driving tangible operational savings in water, chemical throughput, and kilowatt-hours.
            </p>

            {/* 3 Core Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e2e8f0]">
                <div className="w-9 h-9 rounded-xl bg-[#ecfdf5] flex items-center justify-center text-[#10b981] mb-2.5">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#064e3b] text-sm mb-1">Precision Audits</h4>
                <p className="text-xs text-[#404944]">Root-cause gap identification with zero ambiguity.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e2e8f0]">
                <div className="w-9 h-9 rounded-xl bg-[#ecfdf5] flex items-center justify-center text-[#10b981] mb-2.5">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#064e3b] text-sm mb-1">Measurable ROI</h4>
                <p className="text-xs text-[#404944]">Transforming environmental compliance into cost efficiency.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e2e8f0]">
                <div className="w-9 h-9 rounded-xl bg-[#ecfdf5] flex items-center justify-center text-[#10b981] mb-2.5">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#064e3b] text-sm mb-1">Global Market Access</h4>
                <p className="text-xs text-[#404944]">Unlocking frictionless trade with EU & US retailers.</p>
              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-[#064e3b] text-white hover:bg-[#053e2f] px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md text-center"
              >
                Schedule an Executive Briefing
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="w-full sm:w-auto text-[#064e3b] hover:text-[#10b981] font-semibold text-sm flex items-center justify-center gap-2"
              >
                Direct Advisory Hotline: {COMPANY_CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
