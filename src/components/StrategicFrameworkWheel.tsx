import React, { useState } from 'react';
import { STRATEGIC_PILLARS } from '../data/mockData';
import { StrategicPillar } from '../types';
import { EcoNexusLogo } from './EcoNexusLogo';
import { 
  Shield, 
  Settings, 
  TrendingUp, 
  BarChart3, 
  Sparkles, 
  Lightbulb, 
  HardHat, 
  Users, 
  HeartHandshake, 
  Sprout, 
  Recycle, 
  Droplet,
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const StrategicFrameworkWheel: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<StrategicPillar>(STRATEGIC_PILLARS[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getPillarIcon = (iconName: string, className: string = 'w-4 h-4') => {
    switch (iconName) {
      case 'shield': return <Shield className={className} />;
      case 'settings': return <Settings className={className} />;
      case 'trending_up': return <TrendingUp className={className} />;
      case 'bar_chart': return <BarChart3 className={className} />;
      case 'eco': return <Sparkles className={className} />;
      case 'lightbulb': return <Lightbulb className={className} />;
      case 'engineering': return <HardHat className={className} />;
      case 'group': return <Users className={className} />;
      case 'volunteer_activism': return <HeartHandshake className={className} />;
      case 'local_florist': return <Sprout className={className} />;
      case 'cached': return <Recycle className={className} />;
      case 'water_drop': return <Droplet className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  // 12 slices, 30 deg each (start from top at -90 deg + 15 deg offset = -75 deg)
  const numSlices = STRATEGIC_PILLARS.length;
  const sliceAngle = 360 / numSlices;
  const centerRadius = 75;
  const outerRadius = 160;
  const textRadius = 195;

  return (
    <section id="framework" className="py-20 bg-gradient-to-b from-[#f8f9fa] via-white to-[#f8f9fa] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#d1fae5] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
              Interactive Strategic Blueprint
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003527] tracking-tight">
            Sustainability Strategic Framework
          </h2>
          <p className="mt-3 text-base md:text-lg text-[#404944]">
            An integrated 360° methodology harmonizing Environmental Stewardship, Social Progress, and Corporate Governance.
          </p>
        </div>

        {/* Wheel & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Wheel Visualizer (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-white/80 backdrop-blur-md rounded-3xl border border-[#d1fae5] shadow-ambient">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <svg viewBox="-240 -240 480 480" className="w-full h-full select-none overflow-visible">
                <defs>
                  <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
                  </filter>
                  <radialGradient id="centerGlow" cx="0" cy="0" r="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="70%" stopColor="#ecfdf5" />
                    <stop offset="100%" stopColor="#d1fae5" />
                  </radialGradient>
                </defs>

                {/* Outer Connecting Orbit Lines */}
                <circle cx="0" cy="0" r="162" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="0" cy="0" r="74" fill="none" stroke="#cbd5e1" strokeWidth="1" />

                {/* 12 Wheel Slices */}
                {STRATEGIC_PILLARS.map((pillar, index) => {
                  // Slices layout starting at top-right
                  const startAngle = (index * sliceAngle - 90) * (Math.PI / 180);
                  const endAngle = ((index + 1) * sliceAngle - 90) * (Math.PI / 180);
                  const midAngle = ((index + 0.5) * sliceAngle - 90) * (Math.PI / 180);

                  const x1Outer = Math.cos(startAngle) * outerRadius;
                  const y1Outer = Math.sin(startAngle) * outerRadius;
                  const x2Outer = Math.cos(endAngle) * outerRadius;
                  const y2Outer = Math.sin(endAngle) * outerRadius;

                  const x1Inner = Math.cos(startAngle) * centerRadius;
                  const y1Inner = Math.sin(startAngle) * centerRadius;
                  const x2Inner = Math.cos(endAngle) * centerRadius;
                  const y2Inner = Math.sin(endAngle) * centerRadius;

                  const pathData = [
                    `M ${x1Inner} ${y1Inner}`,
                    `L ${x1Outer} ${y1Outer}`,
                    `A ${outerRadius} ${outerRadius} 0 0 1 ${x2Outer} ${y2Outer}`,
                    `L ${x2Inner} ${y2Inner}`,
                    `A ${centerRadius} ${centerRadius} 0 0 0 ${x1Inner} ${y1Inner}`,
                    'Z'
                  ].join(' ');

                  const isSelected = selectedPillar.id === pillar.id;
                  const isHovered = hoveredIndex === index;

                  // Label positioning
                  const labelX = Math.cos(midAngle) * textRadius;
                  const labelY = Math.sin(midAngle) * textRadius;
                  const iconX = Math.cos(midAngle) * ((centerRadius + outerRadius) / 2);
                  const iconY = Math.sin(midAngle) * ((centerRadius + outerRadius) / 2);

                  return (
                    <g
                      key={pillar.id}
                      className="cursor-pointer transition-all duration-300 group"
                      onClick={() => setSelectedPillar(pillar)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Segment Arc */}
                      <path
                        d={pathData}
                        fill={pillar.color}
                        opacity={isSelected ? 1 : isHovered ? 0.9 : 0.82}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? 3.5 : 1.8}
                        className="transition-all duration-200"
                        style={{
                          transform: isSelected || isHovered ? 'scale(1.03)' : 'scale(1)',
                          transformOrigin: '0 0',
                          filter: isSelected ? 'url(#shadowFilter)' : 'none'
                        }}
                      />

                      {/* Icon inside segment */}
                      <circle
                        cx={iconX}
                        cy={iconY}
                        r={12}
                        fill="#ffffff"
                        opacity={isSelected || isHovered ? 0.95 : 0.75}
                        className="transition-all"
                      />
                      
                      {/* Decorative connecting dot */}
                      <circle
                        cx={Math.cos(midAngle) * outerRadius}
                        cy={Math.sin(midAngle) * outerRadius}
                        r={isSelected ? 3.5 : 2}
                        fill={isSelected ? '#ffffff' : '#e2e8f0'}
                      />

                      {/* Outer Label */}
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor={Math.cos(midAngle) > 0.1 ? 'start' : Math.cos(midAngle) < -0.1 ? 'end' : 'middle'}
                        dominantBaseline="central"
                        className={`text-[10px] font-semibold transition-all select-none ${
                          isSelected 
                            ? 'fill-[#003527] font-bold text-[11px]' 
                            : 'fill-[#334155] hover:fill-[#059669]'
                        }`}
                      >
                        {pillar.title}
                      </text>
                    </g>
                  );
                })}

                {/* Central Hub with EcoNexus Logo */}
                <circle cx="0" cy="0" r={centerRadius - 2} fill="url(#centerGlow)" stroke="#10b981" strokeWidth="2.5" />
                <foreignObject x="-50" y="-50" width="100" height="100" className="pointer-events-none">
                  <div className="w-full h-full flex items-center justify-center">
                    <EcoNexusLogo variant="mark" size="sm" />
                  </div>
                </foreignObject>
              </svg>
            </div>

            {/* Category Legend */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 pt-4 border-t border-[#e2e8f0] w-full text-xs">
              <span className="font-medium text-[#404944]">Strategic Domains:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#eff6ff] text-[#1e3a8a] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#1e3a8a]" /> Governance & Risk
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ecfdf5] text-[#047857] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#059669]" /> Natural Capital & Net Zero
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fff7ed] text-[#c2410c] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#ea580c]" /> Social & Human Progress
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f5f3ff] text-[#6d28d9] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed]" /> Strategic Value & ROI
              </span>
            </div>
          </div>

          {/* Detailed Selected Pillar Card (5 Columns) */}
          <div className="lg:col-span-5">
            <div 
              className="bg-white rounded-3xl p-6 md:p-8 border shadow-ambient transition-all duration-300"
              style={{ borderColor: selectedPillar.color }}
            >
              {/* Pillar Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: selectedPillar.color }}
                  >
                    {getPillarIcon(selectedPillar.icon, 'w-6 h-6')}
                  </div>
                  <div>
                    <span 
                      className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: selectedPillar.bgTint, color: selectedPillar.color }}
                    >
                      {selectedPillar.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#003527] mt-1">
                      {selectedPillar.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#404944] text-sm md:text-base leading-relaxed mb-6">
                {selectedPillar.description}
              </p>

              {/* Core Focus Points */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#064e3b] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                  Operational Focus & Deliverables
                </h4>
                <div className="space-y-2">
                  {selectedPillar.coreFocus.map((focus, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#191c1d] bg-[#f8f9fa] p-2.5 rounded-xl border border-[#e2e8f0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1.5 shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Framework Alignment */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#064e3b] mb-2">
                  Global Standard Alignments
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPillar.frameworkAlignment.map((std, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-[#ecfdf5] text-[#064e3b] px-2.5 py-1 rounded-lg border border-[#d1fae5] font-medium"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-md text-sm hover:opacity-95"
                style={{ backgroundColor: selectedPillar.color }}
              >
                Incorporate {selectedPillar.title} into your Audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Slogan Banner from Image 7 */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#003527] via-[#064e3b] to-[#0f766e] text-white text-center shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />
          <p className="text-lg md:text-2xl font-bold tracking-tight text-emerald-300 mb-2">
            Driving Compliance. Empowering Sustainability. Creating Value.
          </p>
          <p className="text-sm md:text-base text-gray-200 font-medium">
            Your Dedicated Strategic Partner for Global Industrial ESG Success
          </p>
        </div>
      </div>
    </section>
  );
};
