import React, { useState } from 'react';
import { TRAINING_PROGRAMS } from '../data/mockData';
import { TrainingProgram } from '../types';
import { 
  GraduationCap, 
  Clock, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface TrainingSectionProps {
  onRegisterTraining?: (programTitle: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onRegisterTraining }) => {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);

  const handleRegister = (program: TrainingProgram) => {
    if (onRegisterTraining) {
      onRegisterTraining(program.title);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="training" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#d1fae5] mb-3">
            <GraduationCap className="w-4 h-4 text-[#10b981]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
              Capacity Building & Academy
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003527] tracking-tight">
            Industrial ESG Training & Masterclasses
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#404944]">
            Equipping your plant heads, EHS leaders, and compliance coordinators with practical, hands-on audit execution skills.
          </p>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRAINING_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-[#f8f9fa] border border-[#d1fae5] rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-[#10b981] hover:bg-white transition-all duration-300 shadow-ambient group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ecfdf5] text-[#064e3b] border border-[#d1fae5]">
                    {program.level}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-[#404944]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#10b981]" /> {program.duration}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-[#059669]">
                      <Calendar className="w-3.5 h-3.5" /> {program.format}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#003527] mb-2 group-hover:text-[#064e3b]">
                  {program.title}
                </h3>

                <p className="text-sm text-[#404944] mb-4">
                  {program.summary}
                </p>

                <div className="mb-4 text-xs text-[#064e3b] bg-white p-3 rounded-xl border border-[#e2e8f0]">
                  <strong className="block text-[#003527] mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#10b981]" /> Target Audience:
                  </strong>
                  {program.targetAudience}
                </div>

                <div className="space-y-1.5 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#404944] block mb-2">
                    Curriculum Highlights:
                  </span>
                  {program.modules.map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#191c1d]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleRegister(program)}
                className="w-full bg-white hover:bg-[#064e3b] text-[#064e3b] hover:text-white border border-[#064e3b] font-semibold py-3 px-4 rounded-xl transition-all text-xs md:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                Enroll Factory Team in this Training
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Onsite Corporate Training Banner */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-[#ecfdf5] border border-[#d1fae5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#10b981] flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-[#003527] text-lg">
                Need Customized On-Premise Training for Your Facility?
              </h4>
              <p className="text-xs md:text-sm text-[#404944]">
                We design tailored workshops in Tamil, English, and Hindi directly on your factory floor.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="bg-[#064e3b] text-white hover:bg-[#053e2f] px-6 py-3 rounded-xl font-semibold text-xs md:text-sm whitespace-nowrap shadow-sm transition-all"
          >
            Inquire for Plant-Wide Batch
          </a>
        </div>
      </div>
    </section>
  );
};
