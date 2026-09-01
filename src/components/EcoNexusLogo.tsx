import React from 'react';

interface EcoNexusLogoProps {
  variant?: 'full' | 'mark' | 'horizontal' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const EcoNexusLogo: React.FC<EcoNexusLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const sizeMap = {
    sm: { icon: 32, title: 'text-lg', sub: 'text-[10px]' },
    md: { icon: 44, title: 'text-2xl', sub: 'text-xs' },
    lg: { icon: 64, title: 'text-3xl', sub: 'text-sm' },
    xl: { icon: 110, title: 'text-5xl', sub: 'text-lg' },
  };

  const currentSize = sizeMap[size];

  // SVG Emblem matching Image 8 (Stylized leaf + gear + upward growth arrow)
  const Emblem = ({ width = 48, height = 48 }: { width?: number; height?: number }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        <linearGradient id="gearGrad" x1="50" y1="50" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="60%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#115e59" />
        </linearGradient>
        <linearGradient id="leafGrad" x1="30" y1="60" x2="140" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="arrowGrad" x1="100" y1="120" x2="165" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#10b981" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Orbit nodes and connecting network dots */}
      <circle cx="95" cy="22" r="3.5" fill="#10b981" opacity="0.8" />
      <circle cx="168" cy="85" r="3.5" fill="#0d9488" opacity="0.8" />
      <circle cx="36" cy="115" r="3.5" fill="#10b981" opacity="0.8" />
      <circle cx="105" cy="180" r="3.5" fill="#059669" opacity="0.8" />
      <circle cx="150" cy="160" r="3" fill="#10b981" opacity="0.7" />

      {/* Thin orbital lines */}
      <path d="M95 22 C 145 25, 175 60, 168 85" stroke="#a7f3d0" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
      <path d="M36 115 C 30 150, 70 178, 105 180" stroke="#a7f3d0" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />

      {/* Industrial Cogwheel (Blue-Teal) */}
      <g filter="url(#glow)">
        <path
          d="M 120 70 
             L 125 58 L 137 62 L 140 73 
             C 146 76, 151 81, 155 86 
             L 166 84 L 170 96 L 160 102 
             C 161 108, 161 114, 159 120 
             L 169 127 L 162 138 L 151 133 
             C 145 138, 139 143, 132 145 
             L 130 157 L 118 156 L 117 145 
             C 111 143, 106 139, 101 135 
             L 92 142 L 86 132 L 95 124 
             C 93 118, 93 112, 94 106 
             L 100 100 
             Z"
          fill="url(#gearGrad)"
        />
        {/* Inner hollow hole for gear */}
        <circle cx="128" cy="108" r="16" fill="#f8f9fa" />
      </g>

      {/* Dynamic Growth Arrow piercing outward */}
      <path
        d="M 108 126 
           L 138 90 
           L 134 82 
           L 158 75 
           L 155 100 
           L 146 95 
           L 118 133 
           Z"
        fill="url(#arrowGrad)"
      />

      {/* Stylized Intertwined Eco Leaf (Green / Emerald) */}
      <path
        d="M 45 110 
           C 40 70, 75 45, 95 48 
           C 115 50, 110 80, 95 98 
           C 80 115, 80 135, 105 145 
           C 125 152, 135 138, 140 128 
           C 142 142, 128 165, 100 162 
           C 65 158, 48 135, 45 110 Z"
        fill="url(#leafGrad)"
      />

      {/* Leaf Inner Veins & Tech Lattice */}
      <path
        d="M 60 90 Q 75 75 90 65"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M 68 100 Q 82 92 98 90"
        stroke="#ffffff"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M 60 90 L 68 100"
        stroke="#dcfce7"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M 75 75 L 82 92"
        stroke="#dcfce7"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="60" cy="90" r="2.5" fill="#ffffff" />
      <circle cx="75" cy="75" r="2.5" fill="#ffffff" />
      <circle cx="90" cy="65" r="2.5" fill="#ffffff" />
      <circle cx="68" cy="100" r="2.5" fill="#ffffff" />
      <circle cx="82" cy="92" r="2.5" fill="#ffffff" />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Emblem width={currentSize.icon} height={currentSize.icon} />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        <Emblem width={currentSize.icon} height={currentSize.icon} />
        <div className="mt-3">
          <div className={`font-bold tracking-tight text-[#003527] dark:text-white ${currentSize.title}`}>
            Eco<span className="text-[#10b981]">Nexus</span> Advisors
          </div>
          {showTagline && (
            <div className="mt-2 text-xs md:text-sm font-medium tracking-wide text-[#064e3b] dark:text-[#95d3ba] border-t border-[#d1fae5] pt-1">
              Where Compliance Meets Sustainability.
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup
  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      <Emblem width={currentSize.icon} height={currentSize.icon} />
      <div className="flex flex-col text-left">
        <div className={`font-bold tracking-tight leading-none ${variant === 'white' ? 'text-white' : 'text-[#003527]'} ${currentSize.title}`}>
          Eco<span className="text-[#10b981]">Nexus</span> <span className={variant === 'white' ? 'text-gray-200' : 'text-[#064e3b]'}>Advisors</span>
        </div>
        <span className={`font-medium tracking-normal mt-1 ${variant === 'white' ? 'text-emerald-300' : 'text-[#059669]'} ${currentSize.sub}`}>
          Where Compliance Meets Sustainability
        </span>
      </div>
    </div>
  );
};
