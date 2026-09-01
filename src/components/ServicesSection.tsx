import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { 
  ClipboardCheck, 
  Factory, 
  Users2, 
  CloudRain, 
  FlaskConical, 
  Recycle, 
  Zap, 
  Droplets, 
  Scale, 
  TrendingUp,
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedAll, setExpandedAll] = useState<boolean>(false);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Environmental', 'Social', 'Governance', 'Chemical & Energy'];

  const getServiceIcon = (iconName: string, className: string = 'w-7 h-7') => {
    switch (iconName) {
      case 'assignment': return <ClipboardCheck className={className} />;
      case 'factory': return <Factory className={className} />;
      case 'groups': return <Users2 className={className} />;
      case 'cloud': return <CloudRain className={className} />;
      case 'science': return <FlaskConical className={className} />;
      case 'recycling': return <Recycle className={className} />;
      case 'bolt': return <Zap className={className} />;
      case 'water_drop': return <Droplets className={className} />;
      case 'gavel': return <Scale className={className} />;
      case 'query_stats': return <TrendingUp className={className} />;
      default: return <ClipboardCheck className={className} />;
    }
  };

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  // Initial view shows first 3 services if not expanded, or all matching
  const displayedServices = expandedAll || activeCategory !== 'All' 
    ? filteredServices 
    : filteredServices.slice(0, 3);

  const handleBookService = (service: ServiceItem) => {
    setSelectedServiceModal(null);
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(service.title);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#f8f9fa] relative" id="services">
      <div className="absolute inset-0 bg-pattern opacity-60 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#d1fae5] mb-3">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
              B2B Industrial Compliance Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003527] tracking-tight">
            Core Capabilities
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#404944] max-w-2xl mx-auto">
            Comprehensive ESG consulting tailored for industrial compliance, tier-1 buyer mandates, and regulatory resilience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count = cat === 'All' ? SERVICES_DATA.length : SERVICES_DATA.filter(s => s.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedAll(true);
                }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#064e3b] text-white shadow-sm'
                    : 'bg-white text-[#404944] border border-[#d1fae5] hover:border-[#10b981] hover:bg-[#ecfdf5]'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedServiceModal(service)}
              className="bg-white/95 backdrop-blur-sm border border-[#d1fae5] rounded-2xl p-6 shadow-ambient hover:shadow-ambient-hover hover:border-[#10b981] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon & Arrow */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-all duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {service.badge && (
                      <span className="text-[11px] font-semibold bg-[#ecfdf5] text-[#064e3b] px-2 py-0.5 rounded-md border border-[#d1fae5]">
                        {service.badge}
                      </span>
                    )}
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-[#d1fae5] group-hover:text-[#10b981] group-hover:bg-[#ecfdf5] transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-[#064e3b] mb-2 group-hover:text-[#003527]">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-[#404944] text-sm leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              {/* Footer details */}
              <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs text-[#059669] font-medium">
                <span>{service.standards[0]}</span>
                <span className="inline-flex items-center gap-1 text-[#064e3b] group-hover:text-[#10b981] transition-colors">
                  Explore Scope <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Collapse Button */}
        {activeCategory === 'All' && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setExpandedAll(!expandedAll)}
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#064e3b] text-[#064e3b] hover:bg-[#ecfdf5] hover:border-[#10b981] hover:text-[#10b981] transition-all px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer shadow-sm"
            >
              {expandedAll ? (
                <>
                  Show Featured 3 Services
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View All 10 Core Services
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#d1fae5] relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f8f9fa] border border-[#e2e8f0] flex items-center justify-center text-[#404944] hover:text-[#003527] hover:bg-[#ecfdf5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[#ecfdf5] rounded-2xl flex items-center justify-center text-[#10b981] shrink-0">
                {getServiceIcon(selectedServiceModal.icon, 'w-8 h-8')}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#10b981] bg-[#ecfdf5] px-2.5 py-0.5 rounded-full">
                  {selectedServiceModal.category}
                </span>
                <h3 className="text-2xl font-bold text-[#003527] mt-1">
                  {selectedServiceModal.title}
                </h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-[#404944] text-sm md:text-base leading-relaxed mb-6">
              {selectedServiceModal.fullDesc}
            </p>

            {/* Key Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#064e3b] mb-3">
                Key Scope & Deliverables
              </h4>
              <div className="space-y-2">
                {selectedServiceModal.keyDeliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#191c1d] bg-[#f8f9fa] p-2.5 rounded-xl border border-[#e2e8f0]">
                    <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards & Target Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#ecfdf5] p-3.5 rounded-2xl border border-[#d1fae5]">
                <span className="text-[11px] font-semibold uppercase text-[#064e3b] block mb-1">
                  Framework Standards
                </span>
                <div className="flex flex-wrap gap-1">
                  {selectedServiceModal.standards.map((std, i) => (
                    <span key={i} className="text-xs font-medium text-[#047857] bg-white px-2 py-0.5 rounded-md">
                      {std}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#f0f9ff] p-3.5 rounded-2xl border border-[#bae6fd]">
                <span className="text-[11px] font-semibold uppercase text-[#0369a1] block mb-1">
                  Target Outcome
                </span>
                <p className="text-xs text-[#0c4a6e] font-medium">
                  {selectedServiceModal.metricsTargeted}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => handleBookService(selectedServiceModal)}
                className="flex-1 bg-[#064e3b] hover:bg-[#053e2f] text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                Schedule Assessment for this Service
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="bg-[#f8f9fa] border border-[#e2e8f0] text-[#404944] hover:bg-[#edeeef] font-medium py-3 px-5 rounded-xl text-sm transition-colors cursor-pointer"
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
