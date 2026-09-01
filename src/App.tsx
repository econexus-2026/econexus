import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ShaderBackground } from './components/ShaderBackground';
import { EcoNexusLogo } from './components/EcoNexusLogo';
import { StrategicFrameworkWheel } from './components/StrategicFrameworkWheel';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { AboutSection } from './components/AboutSection';
import { TrainingSection } from './components/TrainingSection';
import { ESGReadinessTool } from './components/ESGReadinessTool';
import { AssessmentForm } from './components/AssessmentForm';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { STATS_HIGHLIGHTS, COMPANY_CONTACT } from './data/mockData';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Phone, 
  Mail, 
  Globe2, 
  Factory, 
  FileCheck2,
  Sparkles,
  Zap
} from 'lucide-react';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceBooking, setSelectedServiceBooking] = useState<string>('Sustainability Assessment & Baseline');
  const [shaderEnabled, setShaderEnabled] = useState(true);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceBooking(serviceTitle);
  };

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col selection:bg-[#10b981]/20 selection:text-[#064e3b]">
      {/* Main Sticky Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#003527] via-[#064e3b] to-[#042e23] text-white">
          {/* Fluid WebGL Simplex Noise Canvas */}
          {shaderEnabled && (
            <ShaderBackground className="absolute inset-0 w-full h-full pointer-events-none" opacity={0.6} />
          )}

          {/* Decorative Subtle Overlay Grid */}
          <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none" />

          {/* Hero Content Container */}
          <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 bg-emerald-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs md:text-sm font-semibold tracking-wide text-emerald-200">
                Where Compliance Meets Sustainability
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.15] mb-6">
              Industrial ESG & Compliance <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
                Engineered for Global Markets
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-10 font-normal">
              EcoNexus Advisors empowers export manufacturers with turnkey <strong>Higg FEM 4.0</strong>, <strong>ZDHC chemical stewardship</strong>, <strong>Scope 1-2-3 carbon accounting</strong>, and <strong>SLCP social audits</strong>.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-[#10b981] hover:bg-[#059669] text-[#00241a] hover:text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] text-sm md:text-base flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Initiate Facility Assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#framework"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-4 px-8 rounded-2xl transition-all backdrop-blur-sm text-sm md:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore 12-Pillar Framework</span>
              </a>
            </div>

            {/* Certified Buyer Standards Bar */}
            <div className="w-full pt-8 border-t border-emerald-800/40">
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-4">
                Aligned with Global Retail & Statutory Frameworks
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs font-semibold text-gray-300">
                <span className="bg-emerald-950/70 border border-emerald-700/50 px-3.5 py-1.5 rounded-lg">
                  Higg Index FEM 4.0
                </span>
                <span className="bg-emerald-950/70 border border-emerald-700/50 px-3.5 py-1.5 rounded-lg">
                  ZDHC Gateway MRSL
                </span>
                <span className="bg-emerald-950/70 border border-emerald-700/50 px-3.5 py-1.5 rounded-lg">
                  SLCP Converged
                </span>
                <span className="bg-emerald-950/70 border border-emerald-700/50 px-3.5 py-1.5 rounded-lg">
                  ISO 14064 Carbon
                </span>
                <span className="bg-emerald-950/70 border border-emerald-700/50 px-3.5 py-1.5 rounded-lg">
                  EU CBAM & CSDDD
                </span>
                <span className="bg-emerald-950/70 border border-emerald-700/50 px-3.5 py-1.5 rounded-lg">
                  SMETA / BSCI
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Key Metrics Ribbon */}
        <section className="bg-white border-b border-[#e2e8f0] py-10 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {STATS_HIGHLIGHTS.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#d1fae5]">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#003527] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-[#064e3b]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#404944] mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Sustainability Strategic Framework (Image 7) */}
        <StrategicFrameworkWheel />

        {/* 2. Core Capabilities & Services (Image 8 & Services Showcase) */}
        <ServicesSection onSelectServiceForBooking={handleSelectService} />

        {/* 3. Industry Sector Specializations */}
        <IndustriesSection />

        {/* 4. ESG Readiness Benchmark Tool */}
        <ESGReadinessTool />

        {/* 5. Capacity Building & Training Academy */}
        <TrainingSection onRegisterTraining={handleSelectService} />

        {/* 6. About EcoNexus Advisors */}
        <AboutSection />

        {/* 7. Initiate an Assessment (Direct Booking Form) */}
        <AssessmentForm initialService={selectedServiceBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedServiceBooking}
      />
    </div>
  );
}
export default App;
