import React, { useState } from 'react';
import { INDUSTRIES_SERVED } from '../data/mockData';
import { IndustryInfo } from '../types';
import { 
  Factory, 
  Layers, 
  FlaskConical, 
  Cog, 
  Package, 
  CheckCircle, 
  AlertTriangle,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryInfo>(INDUSTRIES_SERVED[0]);

  const getIndustryIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'shirt': return <Layers className={className} />;
      case 'footwear': return <Factory className={className} />;
      case 'flask': return <FlaskConical className={className} />;
      case 'cog': return <Cog className={className} />;
      case 'package': return <Package className={className} />;
      default: return <Factory className={className} />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-[#f8f9fa] relative border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#d1fae5] mb-3">
            <Factory className="w-4 h-4 text-[#10b981]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
              Sector-Specific Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003527] tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#404944]">
            Specialized ESG engineering, verification roadmaps, and audit defense calibrated to your production processes.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {INDUSTRIES_SERVED.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#064e3b] text-white shadow-md'
                    : 'bg-white text-[#404944] border border-[#d1fae5] hover:border-[#10b981] hover:bg-[#ecfdf5]'
                }`}
              >
                {getIndustryIcon(ind.icon, 'w-4 h-4')}
                {ind.title.split(' ')[0]} {ind.title.split(' ')[1] || ''}
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#d1fae5] shadow-ambient">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#e2e8f0]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#ecfdf5] rounded-2xl flex items-center justify-center text-[#10b981] shrink-0">
                {getIndustryIcon(selectedIndustry.icon, 'w-8 h-8')}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#003527]">
                  {selectedIndustry.title}
                </h3>
                <p className="text-sm text-[#404944] mt-0.5">
                  {selectedIndustry.description}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#064e3b] hover:bg-[#053e2f] text-white font-medium text-xs md:text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm shrink-0"
            >
              Request {selectedIndustry.title.split(' ')[0]} Facility Audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Regulatory Pressures & Vulnerabilities */}
            <div className="bg-[#fff7ed] p-6 rounded-2xl border border-[#ffedd5]">
              <div className="flex items-center gap-2 text-[#c2410c] font-bold text-sm mb-4">
                <AlertTriangle className="w-5 h-5 text-[#ea580c]" />
                Primary Compliance Vulnerabilities
              </div>
              <ul className="space-y-3">
                {selectedIndustry.complianceChallenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#7c2d12]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] mt-2 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EcoNexus Advisory Solutions */}
            <div className="bg-[#ecfdf5] p-6 rounded-2xl border border-[#d1fae5]">
              <div className="flex items-center gap-2 text-[#064e3b] font-bold text-sm mb-4">
                <CheckCircle className="w-5 h-5 text-[#10b981]" />
                EcoNexus Engineering & Advisory Solutions
              </div>
              <ul className="space-y-3">
                {selectedIndustry.solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#064e3b]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 shrink-0" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mandated Frameworks */}
          <div className="mt-8 pt-6 border-t border-[#f1f5f9] flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-[#404944]">Applicable Buyer Frameworks:</span>
            {selectedIndustry.keyRegulations.map((reg, i) => (
              <span key={i} className="text-xs bg-[#f8f9fa] border border-[#e2e8f0] text-[#064e3b] font-medium px-3 py-1 rounded-lg">
                {reg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
