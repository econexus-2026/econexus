import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  RotateCcw, 
  ArrowRight, 
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

interface Question {
  id: string;
  category: 'Environmental' | 'Social' | 'Governance';
  question: string;
  options: { label: string; points: number }[];
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 'q1',
    category: 'Environmental',
    question: 'What is your current status with the Higg Index FEM (Facility Environmental Module)?',
    options: [
      { label: 'Verified FEM Score above 70% in the last 12 months', points: 25 },
      { label: 'Completed Self-Assessment only (Not verified)', points: 15 },
      { label: 'Aware of FEM but have not filled data yet', points: 5 },
      { label: 'Not initiated / Not applicable', points: 0 },
    ],
  },
  {
    id: 'q2',
    category: 'Environmental',
    question: 'How do you monitor and manage chemical inventory and wastewater discharge?',
    options: [
      { label: 'ZDHC Gateway Level 3 compliant with regular ETP wastewater tests', points: 25 },
      { label: 'ZDHC InCheck Level 1 / Basic Safety Data Sheets maintained', points: 15 },
      { label: 'Local State Pollution Control Board compliance only', points: 10 },
      { label: 'No structured chemical tracking system currently', points: 0 },
    ],
  },
  {
    id: 'q3',
    category: 'Environmental',
    question: 'Has your enterprise quantified greenhouse gas emissions (Scope 1, Scope 2, Scope 3)?',
    options: [
      { label: 'Audited Scope 1 & 2 + partial Scope 3 aligned with GHG Protocol', points: 25 },
      { label: 'Track monthly fuel (diesel/coal) and electricity bills only', points: 12 },
      { label: 'Preparing for upcoming EU CBAM / buyer carbon reporting', points: 8 },
      { label: 'No formal carbon footprint accounting undertaken', points: 0 },
    ],
  },
  {
    id: 'q4',
    category: 'Social',
    question: 'What social compliance & labor audits does your factory currently hold?',
    options: [
      { label: 'SLCP Verified / SMETA 4-Pillar / SA8000 Certified with zero critical NCs', points: 25 },
      { label: 'Basic buyer code of conduct audits completed within 18 months', points: 15 },
      { label: 'Statutory Factories Act registers maintained without external audit', points: 8 },
      { label: 'Facing buyer audit findings or social non-conformances', points: 0 },
    ],
  },
];

export const ESGReadinessTool: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [facilityType, setFacilityType] = useState<string>('Textile & Garment');

  const handleSelect = (qId: string, points: number) => {
    setAnswers(prev => ({ ...prev, [qId]: points }));
  };

  const totalScore: number = (Object.values(answers) as number[]).reduce((sum: number, val: number) => sum + val, 0);
  const isComplete = Object.keys(answers).length === ASSESSMENT_QUESTIONS.length;

  const getMaturityLevel = (score: number) => {
    if (score >= 80) return { title: 'Leader (ESG Resilient)', color: 'text-[#10b981]', bg: 'bg-[#ecfdf5]', badge: 'Tier-1 Global Ready' };
    if (score >= 50) return { title: 'Moderate (Standard Compliance)', color: 'text-[#d97706]', bg: 'bg-[#fffbeb]', badge: 'Action Plan Recommended' };
    return { title: 'High Risk (Vulnerable to Buyer Sanctions)', color: 'text-[#dc2626]', bg: 'bg-[#fef2f2]', badge: 'Urgent Intervention Needed' };
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-white to-[#f8f9fa] border-t border-[#e2e8f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#d1fae5] mb-3">
            <Calculator className="w-4 h-4 text-[#10b981]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
              Complimentary ESG Self-Audit Tool
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003527] tracking-tight">
            Industrial ESG Readiness Benchmark
          </h2>
          <p className="mt-3 text-base text-[#404944]">
            Assess your facility’s vulnerability against Higg FEM, ZDHC, Carbon Accounting, and global buyer export audits in 2 minutes.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#d1fae5] shadow-ambient">
          {!submitted ? (
            <div>
              {/* Facility Sector Picker */}
              <div className="mb-8 p-4 bg-[#f8f9fa] rounded-2xl border border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs md:text-sm font-bold text-[#064e3b]">
                  Select Your Manufacturing Sector:
                </span>
                <select
                  value={facilityType}
                  onChange={(e) => setFacilityType(e.target.value)}
                  className="bg-white border border-[#d1fae5] rounded-xl px-4 py-2 text-xs md:text-sm text-[#003527] font-medium focus:ring-2 focus:ring-[#10b981] outline-none"
                >
                  <option>Textile & Garment (Spinning / Weaving / Dyeing)</option>
                  <option>Leather & Footwear Manufacturing</option>
                  <option>Chemical & Polymer Formulation</option>
                  <option>Engineering, Foundries & Auto Ancillaries</option>
                  <option>Packaging, Paper & Commercial Printing</option>
                </select>
              </div>

              {/* Questions List */}
              <div className="space-y-8">
                {ASSESSMENT_QUESTIONS.map((q, idx) => (
                  <div key={q.id} className="pb-6 border-b border-[#f1f5f9] last:border-b-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#064e3b] text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase text-[#10b981] bg-[#ecfdf5] px-2 py-0.5 rounded">
                        {q.category}
                      </span>
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-[#003527] mb-3">
                      {q.question}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt, oIdx) => {
                        const isChosen = answers[q.id] === opt.points;
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => handleSelect(q.id, opt.points)}
                            className={`p-3 rounded-xl text-left text-xs md:text-sm transition-all flex items-start justify-between gap-2 cursor-pointer ${
                              isChosen
                                ? 'bg-[#ecfdf5] border-2 border-[#10b981] text-[#064e3b] font-medium shadow-sm'
                                : 'bg-[#f8f9fa] border border-[#e2e8f0] text-[#404944] hover:border-[#10b981] hover:bg-white'
                            }`}
                          >
                            <span>{opt.label}</span>
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                              isChosen ? 'border-[#10b981] bg-[#10b981] text-white' : 'border-gray-300'
                            }`}>
                              {isChosen && <CheckCircle className="w-3 h-3" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit CTA */}
              <div className="mt-8 pt-6 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#404944]">
                  {Object.keys(answers).length} of {ASSESSMENT_QUESTIONS.length} parameters answered
                </span>
                <button
                  disabled={!isComplete}
                  onClick={() => setSubmitted(true)}
                  className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isComplete
                      ? 'bg-[#064e3b] text-white hover:bg-[#053e2f] shadow-md'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Generate Facility ESG Scorecard
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="text-center animate-in fade-in duration-300">
              <div className="inline-block p-4 rounded-3xl mb-4" style={{ backgroundColor: getMaturityLevel(totalScore).bg }}>
                <span className="text-4xl md:text-5xl font-extrabold text-[#003527]">
                  {totalScore} <span className="text-xl text-[#404944]">/ 100</span>
                </span>
              </div>

              <div className="mb-2">
                <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${getMaturityLevel(totalScore).bg} ${getMaturityLevel(totalScore).color}`}>
                  {getMaturityLevel(totalScore).badge}
                </span>
                <h3 className="text-2xl font-bold text-[#003527]">
                  {getMaturityLevel(totalScore).title}
                </h3>
              </div>

              <p className="text-sm md:text-base text-[#404944] max-w-xl mx-auto mb-8">
                Based on your {facilityType} parameters, here are targeted audit recommendations tailored to ensure unhindered buyer trade:
              </p>

              {/* Action Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
                <div className="p-4 bg-[#ecfdf5] rounded-2xl border border-[#d1fae5]">
                  <strong className="text-xs font-bold text-[#064e3b] block mb-1">
                    1. Higg FEM 4.0 Verification
                  </strong>
                  <p className="text-xs text-[#064e3b]">
                    Schedule a pre-audit dry run to lift your verified score past the 75% retail threshold.
                  </p>
                </div>
                <div className="p-4 bg-[#f0f9ff] rounded-2xl border border-[#bae6fd]">
                  <strong className="text-xs font-bold text-[#0369a1] block mb-1">
                    2. Carbon & CBAM Readiness
                  </strong>
                  <p className="text-xs text-[#0c4a6e]">
                    Formulate Scope 1 & 2 inventory to avoid EU customs penalties and export disruptions.
                  </p>
                </div>
                <div className="p-4 bg-[#fff7ed] rounded-2xl border border-[#fed7aa]">
                  <strong className="text-xs font-bold text-[#c2410c] block mb-1">
                    3. ZDHC Chemical Ledger
                  </strong>
                  <p className="text-xs text-[#9a3412]">
                    Verify MRSL Level 3 conformance for all wet processing and finishing inputs.
                  </p>
                </div>
              </div>

              {/* Retake & Book CTA */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-[#064e3b] hover:bg-[#053e2f] text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Book Full Onsite Audit with EcoNexus Experts
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setAnswers({});
                  }}
                  className="w-full sm:w-auto bg-white border border-[#d1fae5] hover:bg-[#ecfdf5] text-[#064e3b] font-medium py-3.5 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
