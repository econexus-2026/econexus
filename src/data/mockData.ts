import { ServiceItem, StrategicPillar, IndustryInfo, TrainingProgram } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sustainability-assessments',
    title: 'Sustainability Assessments',
    category: 'Environmental',
    shortDesc: 'Rigorous evaluation of current operational practices against global ESG standards.',
    fullDesc: 'A holistic baseline and deep-dive evaluation of your industrial facility. We audit environmental emissions, resource throughput, energy intensity, and regulatory exposure to craft an actionable ESG roadmap.',
    icon: 'assignment',
    badge: 'Core Audit',
    keyDeliverables: [
      'Comprehensive ESG Gap Analysis & Risk Heatmap',
      'Facility Resource Efficiency Benchmark (Energy, Water, Waste)',
      'Actionable Prioritized Corrective Action Plan (CAP)',
      'Executive ESG Scorecard for Buyers & Investors'
    ],
    standards: ['ISO 14001', 'GRI Standards', 'BRSR Framework', 'UN SDGs'],
    metricsTargeted: 'Baseline ESG Maturity Score, Compliance Readiness %'
  },
  {
    id: 'higg-fem-consulting',
    title: 'Higg FEM Consulting',
    category: 'Environmental',
    shortDesc: 'Expert guidance for the Facility Environmental Module assessment and scoring.',
    fullDesc: 'End-to-end guidance for Higg Index FEM 4.0 verification. From data verification to onsite preparation and post-audit corrective actions, we maximize your verified FEM score for tier-1 apparel and retail buyers.',
    icon: 'factory',
    badge: 'Highest Demand',
    keyDeliverables: [
      'Pre-verification self-assessment review & data validation',
      'EMS, Energy/GHG, Water, Wastewater, Air & Chemical modules preparation',
      'Onsite audit mock-runs with trained environmental engineers',
      'Final Verified FEM Score uplift & buyer reporting dashboard'
    ],
    standards: ['Higg Index FEM 4.0', 'SAC/CasScale Guidelines', 'ZDHC Gateway'],
    metricsTargeted: 'Higg FEM Verified Score (target 75%+ across Level 1-3)'
  },
  {
    id: 'social-compliance',
    title: 'Social Compliance',
    category: 'Social',
    shortDesc: 'Auditing and implementing labor rights and workplace safety frameworks.',
    fullDesc: 'Empowering your workforce with rigorous human rights, workplace health & safety, fair compensation, and grievance mechanism systems aligned with global ethical supply chain frameworks.',
    icon: 'groups',
    badge: 'Ethical Supply Chain',
    keyDeliverables: [
      'Mock SLCP, SMETA (Sedex 2/4 Pillar), and BSCI pre-audits',
      'Occupational Health & Safety (OHS) risk assessments & hazard control',
      'Gender equality, fair wage, and working hours compliance tracking',
      'Worker-management grievance committee empowerment protocols'
    ],
    standards: ['SLCP (Converged Assessment)', 'SMETA 6.1', 'BSCI', 'SA8000', 'ILO Core Conventions'],
    metricsTargeted: 'Zero Non-Compliance in Critical Social Parameters'
  },
  {
    id: 'carbon-footprint-ghg',
    title: 'Carbon Footprint & GHG Accounting',
    category: 'Environmental',
    shortDesc: 'Scope 1, 2, and 3 emissions quantification and Science-Based Targets alignment.',
    fullDesc: 'Comprehensive greenhouse gas accounting using ISO 14064 and GHG Protocol standards. We calculate direct emissions from fuels, indirect electricity emissions, and upstream/downstream value chain impacts.',
    icon: 'cloud',
    badge: 'Net-Zero Roadmap',
    keyDeliverables: [
      'Scope 1, 2 & 3 Emission Inventory following GHG Protocol',
      'Science-Based Targets initiative (SBTi) pathway modeling',
      'Marginal Abatement Cost Curve (MACC) for decarbonization investments',
      'EU Carbon Border Adjustment Mechanism (CBAM) embedded emissions reporting'
    ],
    standards: ['GHG Protocol Corporate Standard', 'ISO 14064-1', 'SBTi', 'EU CBAM'],
    metricsTargeted: 'tCO2e / unit output reduction trajectory'
  },
  {
    id: 'zdhc-chemical-management',
    title: 'ZDHC & Chemical Stewardship',
    category: 'Chemical & Energy',
    shortDesc: 'Zero Discharge of Hazardous Chemicals management, MRSL compliance, and wastewater testing.',
    fullDesc: 'Establishing state-of-the-art chemical inventory management, Manufacturing Restricted Substances List (MRSL) conformance, chemical storage safety, and wastewater discharge compliance.',
    icon: 'science',
    badge: 'Toxic-Free Operations',
    keyDeliverables: [
      'Chemical Inventory List (CIL) verification & InCheck reports',
      'ZDHC MRSL Level 1, 2, 3 chemical sourcing alignment',
      'ETP/CETP wastewater and sludge testing protocol optimization',
      'Chemical hazard communication & SDS compliance training'
    ],
    standards: ['ZDHC MRSL v3.1', 'ZDHC Wastewater Guidelines', 'OEKO-TEX ECO PASSPORT', 'bluesign'],
    metricsTargeted: '100% MRSL Conformance & Clearstream Clear Status'
  },
  {
    id: 'circular-economy-waste',
    title: 'Circular Economy & Zero Waste',
    category: 'Environmental',
    shortDesc: 'Transforming industrial waste into circular input streams and achieving zero landfill.',
    fullDesc: 'Mapping industrial material flows to eliminate waste at the source, recover textile/fabric offcuts and post-industrial polymers, and obtain verified Zero Waste to Landfill certifications.',
    icon: 'recycling',
    keyDeliverables: [
      'Material Flow Cost Accounting (MFCA) assessment',
      'Zero Waste to Landfill (ZWTL) certification preparation',
      'Upcycling & closed-loop partner network integration',
      'Recycled Content Verification (GRS / RCS standards)'
    ],
    standards: ['Global Recycled Standard (GRS)', 'Recycled Claim Standard (RCS)', 'UL 2799 ZWTL'],
    metricsTargeted: '90%+ Waste Diversion from Landfills'
  },
  {
    id: 'energy-efficiency-transition',
    title: 'Energy Efficiency & Renewable Transition',
    category: 'Chemical & Energy',
    shortDesc: 'Thermal energy optimization, solar/wind integration, and ISO 50001 implementation.',
    fullDesc: 'Engineering-led energy audits covering boilers, steam networks, compressors, chillers, and electric drives, coupled with techno-commercial feasibility for captive rooftop & open-access renewables.',
    icon: 'bolt',
    keyDeliverables: [
      'Detailed Investment-Grade Thermal & Electrical Energy Audit',
      'Boiler efficiency, steam trap audits, and waste heat recovery design',
      'Solar Rooftop & PPA (Power Purchase Agreement) financial modeling',
      'ISO 50001 Energy Management System deployment'
    ],
    standards: ['ISO 50001:2018', 'BEE (Bureau of Energy Efficiency) Audits', 'RE100 Guidelines'],
    metricsTargeted: '15-28% Reduction in Specific Energy Consumption (SEC)'
  },
  {
    id: 'water-stewardship',
    title: 'Water Stewardship & AWS',
    category: 'Environmental',
    shortDesc: 'Catchment risk mitigation, Zero Liquid Discharge (ZLD) optimization, and water recycling.',
    fullDesc: 'Industrial water footprint accounting and catchment water balance studies to ensure water security and compliance with the Alliance for Water Stewardship (AWS) Standard.',
    icon: 'water_drop',
    keyDeliverables: [
      'Facility Water Balance & Specific Water Consumption (SWC) reduction plan',
      'Reverse Osmosis (RO) & Zero Liquid Discharge (ZLD) operational audit',
      'Catchment-level watershed vulnerability & drought risk analysis',
      'Alliance for Water Stewardship (AWS) certification consulting'
    ],
    standards: ['AWS Standard v2.0', 'ISO 14046 Water Footprint', 'CPCB/SPCB ZLD Norms'],
    metricsTargeted: 'Liters of freshwater saved per kg of finished product'
  },
  {
    id: 'global-regulatory-readiness',
    title: 'Global ESG Regulatory Readiness',
    category: 'Governance',
    shortDesc: 'Navigating EU CSDDD, CSRD, German Due Diligence Act (LkSG), and India BRSR.',
    fullDesc: 'Equipping export-oriented manufacturers with turnkey compliance mechanisms for emerging global mandatory due diligence regulations, avoiding market access barriers and customs delays.',
    icon: 'gavel',
    badge: 'Export Compliance',
    keyDeliverables: [
      'EU Corporate Sustainability Due Diligence Directive (CSDDD) gap analysis',
      'German Supply Chain Act (LkSG) risk assessment protocols',
      'Business Responsibility and Sustainability Reporting (BRSR Core) metrics',
      'Cross-border digital compliance documentation pack'
    ],
    standards: ['EU CSDDD', 'EU CSRD', 'German LkSG', 'SEBI BRSR Core', 'US UFLPA'],
    metricsTargeted: '100% Export Market Audit Readiness'
  },
  {
    id: 'corporate-esg-strategy',
    title: 'Corporate ESG Strategy & Disclosures',
    category: 'Governance',
    shortDesc: 'Double materiality assessments, GRI/SASB sustainability reporting, and ESG rating support.',
    fullDesc: 'End-to-end consulting for corporate boards and leadership teams to embed ESG into core commercial operations, publish stakeholder-grade sustainability reports, and elevate EcoVadis / CDP scores.',
    icon: 'query_stats',
    keyDeliverables: [
      'Double Materiality Assessment (Financial & Impact Materiality)',
      'GRI & SASB Aligned Annual Sustainability Report authoring',
      'EcoVadis medal improvement and CDP questionnaire optimization',
      'Executive ESG KPI dashboard and board governance policies'
    ],
    standards: ['GRI Standards 2021', 'SASB Industry Standards', 'EcoVadis Methodology', 'CDP Disclosure'],
    metricsTargeted: 'EcoVadis Gold/Platinum Readiness & CDP Score Uplift'
  }
];

// The 12 Strategic Pillars from Image 7 (Sustainability Strategic Framework)
export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: 'strong-governance',
    title: 'Strong Governance',
    category: 'Governance',
    icon: 'shield',
    color: '#1e3a8a', // Deep blue
    bgTint: '#eff6ff',
    description: 'Establishing transparent leadership, ethical compliance policies, anti-corruption oversight, and board accountability for sustainable value generation.',
    coreFocus: ['Board ESG Oversight', 'Ethics & Anti-Bribery Code', 'Whistleblower Safeguards', 'Statutory Compliance Audits'],
    frameworkAlignment: ['GRI 2: General Disclosures', 'BRSR Principle 1', 'King IV Governance Code']
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    category: 'Governance',
    icon: 'settings',
    color: '#0f172a', // Dark slate
    bgTint: '#f1f5f9',
    description: 'Proactively identifying, quantifying, and mitigating physical, regulatory, supply chain, and transitional climate risks.',
    coreFocus: ['TCFD Climate Risk Matrix', 'Supply Chain Vulnerability Mapping', 'Environmental Spill & HAZMAT Readiness', 'Legal Liability Defense'],
    frameworkAlignment: ['ISO 31000', 'TCFD Governance', 'COSO Enterprise Risk']
  },
  {
    id: 'transparency',
    title: 'Transparency',
    category: 'Governance',
    icon: 'trending_up',
    color: '#d97706', // Amber gold
    bgTint: '#fffbeb',
    description: 'Delivering audited, verifiable, and non-financial performance metrics to buyers, regulators, and institutional investors.',
    coreFocus: ['Third-Party Data Verification', 'Digital ESG Ledger', 'Open Supplier Audits', 'Stakeholder Engagement Reports'],
    frameworkAlignment: ['GRI Standards', 'SASB', 'EU CSRD Guidelines']
  },
  {
    id: 'sustainable-investment',
    title: 'Sustainable Investment',
    category: 'Strategic Value',
    icon: 'bar_chart',
    color: '#0284c7', // Sky Blue
    bgTint: '#f0f9ff',
    description: 'Directing capital expenditures toward high-ROI green technologies, clean infrastructure, and energy-efficient retrofits.',
    coreFocus: ['Green CAPEX Evaluation', 'Energy Abatement ROI Analysis', 'Green Loan & ESG Bond Criteria', 'Carbon Pricing Scenarios'],
    frameworkAlignment: ['EU Green Taxonomy', 'Equator Principles', 'IFC Performance Standards']
  },
  {
    id: 'esg-integration',
    title: 'ESG Integration',
    category: 'Strategic Value',
    icon: 'eco',
    color: '#059669', // Emerald
    bgTint: '#ecfdf5',
    description: 'Embedding environmental and social performance directly into enterprise KPIs, procurement decisions, and executive compensation.',
    coreFocus: ['Sustainable Procurement SOPs', 'Supplier ESG Scorecards', 'Departmental ESG Objectives', 'Eco-Design Product Lifecycle'],
    frameworkAlignment: ['ISO 20400 (Sustainable Procurement)', 'UN Global Compact']
  },
  {
    id: 'value-creation',
    title: 'Value Creation',
    category: 'Strategic Value',
    icon: 'lightbulb',
    color: '#7c3aed', // Purple
    bgTint: '#f5f3ff',
    description: 'Turning compliance obligations into competitive differentiators that capture tier-1 global export premiums and brand loyalty.',
    coreFocus: ['Premium Export Positioning', 'Resource Waste-to-Revenue Loops', 'Customer Carbon Neutral Offerings', 'Brand Trust Enhancement'],
    frameworkAlignment: ['Shared Value Framework', 'Circular Economy Principles']
  },
  {
    id: 'social-innovation',
    title: 'Social Innovation',
    category: 'Social',
    icon: 'engineering',
    color: '#6366f1', // Indigo
    bgTint: '#eef2ff',
    description: 'Pioneering ergonomic innovations, tech-enabled safety solutions, and worker well-being initiatives on the factory floor.',
    coreFocus: ['Factory Automation Safety', 'Worker Health & Nutrition Systems', 'Digital Grievance Apps', 'Continuous Upskilling Platforms'],
    frameworkAlignment: ['ILO Century Guidelines', 'BSCI Social Protocols']
  },
  {
    id: 'inclusive-workforce',
    title: 'Inclusive Workforce',
    category: 'Social',
    icon: 'group',
    color: '#f59e0b', // Warm Amber
    bgTint: '#fffbeb',
    description: 'Fostering gender parity, equal pay, safe migrant worker protections, and zero discrimination in industrial settings.',
    coreFocus: ['Equal Pay Audits', 'Women in Factory Leadership', 'Migrant Worker Rights Protection', 'Anti-Harassment Committees (POSH)'],
    frameworkAlignment: ['SA8000', 'UN Women Empowerment Principles', 'SLCP Social Framework']
  },
  {
    id: 'community-impact',
    title: 'Community Impact',
    category: 'Social',
    icon: 'volunteer_activism',
    color: '#ea580c', // Orange
    bgTint: '#fff7ed',
    description: 'Creating positive local socio-economic footprints through water replenishment, healthcare drives, and technical school partnerships.',
    coreFocus: ['Local Catchment Water Recharging', 'Vocational Training Centers', 'Primary Health & Sanitation Drives', 'CSR Impact Audits'],
    frameworkAlignment: ['India CSR Section 135', 'UN SDG 6, 8 & 11']
  },
  {
    id: 'biodiversity',
    title: 'Biodiversity',
    category: 'Environment',
    icon: 'local_florist',
    color: '#16a34a', // Leaf Green
    bgTint: '#f0fdf4',
    description: 'Preserving soil health, ecological balance, green cover expansion, and responsible micro-ecosystem stewardship around industrial parks.',
    coreFocus: ['Industrial Green Belts', 'Native Tree Afforestation', 'Chemical Leaching Prevention', 'Soil & Ground-Water Baseline Audits'],
    frameworkAlignment: ['TNFD (Taskforce on Nature-related Financial Disclosures)', 'Convention on Biological Diversity']
  },
  {
    id: 'circular-economy',
    title: 'Circular Economy',
    category: 'Environment',
    icon: 'cached',
    color: '#059669', // Emerald Green
    bgTint: '#ecfdf5',
    description: 'Eliminating single-use waste, regenerating industrial scrap, and building closed-loop manufacturing supply ecosystems.',
    coreFocus: ['Zero Landfill Certification', 'Pre-consumer Fabric Recycling', 'ETP Sludge Co-processing in Cement', 'Packaging Material Reduction'],
    frameworkAlignment: ['Ellen MacArthur Foundation Principles', 'GRS / RCS Standards']
  },
  {
    id: 'carbon-neutrality',
    title: 'Carbon Neutrality',
    category: 'Environment',
    icon: 'water_drop',
    color: '#065f46', // Deep Forest
    bgTint: '#ecfdf5',
    description: 'Quantifying and systematically reducing Scope 1 & 2 emissions toward certified Net Zero via energy efficiency and renewable adoption.',
    coreFocus: ['Science-Based Decarbonization Roadmap', 'Onsite Solar & Biomass Boilers', 'Scope 1-2-3 Carbon Accounting', 'Energy Audits & Waste Heat Recovery'],
    frameworkAlignment: ['GHG Protocol', 'ISO 14064', 'SBTi Net-Zero Standard']
  }
];

export const INDUSTRIES_SERVED: IndustryInfo[] = [
  {
    id: 'textile-garment',
    title: 'Textile & Garment Manufacturing',
    description: 'Comprehensive ESG solutions for spinning mills, weaving units, wet processing & dyeing facilities, and garment exporters.',
    icon: 'shirt',
    complianceChallenges: [
      'High chemical water consumption in wet dyeing & washing units',
      'Higg FEM 4.0 verification demanded by European & US retail brands',
      'Strict ZDHC MRSL conformance and Zero Liquid Discharge (ZLD) mandates',
      'Stringent labor compliance (working hours, OT, SLCP verified assessments)'
    ],
    solutions: [
      'Turnkey Higg FEM audit readiness and verified scoring optimization',
      'ZDHC wastewater testing and chemical management protocols',
      'Thermal energy audits for stenters, boilers, and steam distribution',
      'SLCP and SMETA social compliance management systems'
    ],
    keyRegulations: ['Higg Index FEM 4.0', 'ZDHC Gateway', 'OEKO-TEX 100/STeP', 'SLCP Converged Assessment']
  },
  {
    id: 'leather-footwear',
    title: 'Leather & Tannery Operations',
    description: 'Environmental engineering and chemical stewardship for beamhouses, tanneries, finished leather and footwear manufacturing.',
    icon: 'footwear',
    complianceChallenges: [
      'Heavy chromium and salt management in beamhouse effluent',
      'LWG (Leather Working Group) audit certification requirements',
      'Air emissions from spraying and solvent drying tunnels',
      'Workplace safety protocols in hazardous chemical handling'
    ],
    solutions: [
      'Leather Working Group (LWG) environmental audit preparation',
      'Chromium recovery and water conservation engineering',
      'PPE and chemical handling protocol training for technicians',
      'Traceability systems for raw hide sourcing verification'
    ],
    keyRegulations: ['LWG Environmental Audit Protocol', 'REACH Regulation', 'ZDHC Leather MRSL']
  },
  {
    id: 'chemicals-polymers',
    title: 'Chemical & Specialty Materials',
    description: 'Safety, emission controls, and regulatory readiness for chemical synthesizers, resin formulators, and masterbatch plants.',
    icon: 'flask',
    complianceChallenges: [
      'Process safety management and hazardous emission monitoring',
      'GHS labeling and safety data sheet (SDS) compliance across markets',
      'Spill containment and emergency disaster management',
      'Scope 1 process greenhouse gas emission reporting'
    ],
    solutions: [
      'Hazard and Operability (HAZOP) and safety risk assessments',
      'ISO 14001 and ISO 45001 management system integration',
      'Volatile Organic Compound (VOC) abatement and scrubber design audits',
      'Carbon Scope 1 & 2 verification under ISO 14064'
    ],
    keyRegulations: ['GHS Classification', 'Responsible Care Code', 'OSHA 1910.119', 'EU REACH']
  },
  {
    id: 'engineering-auto',
    title: 'Engineering, Foundry & Auto Ancillaries',
    description: 'Energy efficiency, foundry emission mitigation, and supply chain ESG compliance for tier-1 auto component manufacturers.',
    icon: 'cog',
    complianceChallenges: [
      'High thermal electricity and fuel consumption in furnaces & machining',
      'Upcoming EU CBAM reporting requirements for steel and aluminum parts',
      'Waste cutting fluid and heavy metal oil residue disposal',
      'OEM supplier ESG sustainability ratings (Drive Sustainability / NQC)'
    ],
    solutions: [
      'Investment-grade furnace insulation and induction heater audits',
      'EU CBAM embedded carbon calculating and quarterly reporting packs',
      'Machining coolant recycling and hazardous waste minimization',
      'EcoVadis and CDP scorecard preparation for global OEM buyers'
    ],
    keyRegulations: ['EU CBAM', 'ISO 50001', 'IATF 16949 ESG clauses', 'EcoVadis Automotive']
  },
  {
    id: 'packaging-paper',
    title: 'Packaging & Corrugated Solutions',
    description: 'Sustainable material sourcing, FSC certification, and solvent reduction for carton, flexible packaging and corrugated producers.',
    icon: 'package',
    complianceChallenges: [
      'FSC / PEFC chain of custody documentation for virgin pulp',
      'Single-use plastic regulations and extended producer responsibility (EPR)',
      'Solvent-based ink emissions in rotogravure and flexo printing',
      'Recycled content certification and food contact safety'
    ],
    solutions: [
      'FSC / PEFC Chain of Custody implementation and audit support',
      'Plastic EPR credit accounting and state pollution board filings',
      'Solvent recovery system efficiency evaluations',
      'Recycled content certification (GRS / ISO 14021)'
    ],
    keyRegulations: ['FSC-STD-40-004', 'EPR Plastic Waste Management Rules', 'FDA Food Contact 21 CFR']
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'higg-fem-mastery',
    title: 'Higg FEM 4.0 Lead Facilitator Certification',
    level: 'Advanced',
    duration: '3 Days (18 Hours)',
    format: 'Hybrid',
    summary: 'Master the entire Higg FEM 4.0 methodology across all 7 environmental sections with real factory data validation exercises.',
    targetAudience: 'EHS Managers, Compliance Officers, General Plant Managers',
    modules: [
      'Higg FEM 4.0 architecture & Level 1-3 scoring logic',
      'Energy baselining & Scope 1/2 GHG verification protocols',
      'Water balance, wastewater test report interpretation, and ZDHC integration',
      'Waste tracking, chemical inventory list (CIL) preparation, and verification readiness'
    ]
  },
  {
    id: 'chemical-stewardship',
    title: 'Industrial Chemical Management & ZDHC MRSL',
    level: 'Foundational',
    duration: '2 Days (12 Hours)',
    format: 'On-site Workshop',
    summary: 'Practical hands-on training on chemical storage safety, SDS interpretation, ZDHC Gateway InCheck reports, and chemical hazard prevention.',
    targetAudience: 'Chemical Store In-charges, Dyeing Master Technicians, Safety Officers',
    modules: [
      'Understanding ZDHC MRSL v3.1 and dangerous chemical classes (APEO, PFAS, heavy metals)',
      'Chemical segregation, secondary containment, and spill kit deployment',
      'Safe chemical handling, PPE enforcement, and emergency response drills',
      'Digital chemical inventory tracking & buyer InCheck reporting'
    ]
  },
  {
    id: 'carbon-accounting',
    title: 'Corporate GHG Accounting & Decarbonization Masterclass',
    level: 'Lead Auditor',
    duration: '4 Days (24 Hours)',
    format: 'Virtual Masterclass',
    summary: 'Learn how to calculate corporate Scope 1, 2 & 3 emissions, establish baseline inventories, and prepare for EU CBAM & SBTi targets.',
    targetAudience: 'Sustainability Directors, CFOs, ESG Analysts, Operations Leads',
    modules: [
      'GHG Protocol calculation methods & emission factor selection',
      'Scope 3 category screening (purchased goods, freight, waste, capital goods)',
      'Marginal Abatement Cost Curve (MACC) preparation for solar & heat recovery',
      'CBAM reporting formats and carbon emission verification evidence packs'
    ]
  },
  {
    id: 'social-compliance-slcp',
    title: 'Social Compliance & SLCP Verification Readiness',
    level: 'Advanced',
    duration: '2 Days (14 Hours)',
    format: 'On-site Workshop',
    summary: 'Comprehensive protocol for passing SLCP, SMETA, and BSCI social audits with zero critical non-conformities.',
    targetAudience: 'HR Managers, Admin Heads, Worker Committee Representatives',
    modules: [
      'SLCP Data Collection Tool (DCT) step-by-step walkthrough',
      'Working hours & overtime calculation legal compliance in India',
      'Health & safety risk assessments, fire drills, and building structural safety',
      'Effective worker grievance resolution & committee empowerment'
    ]
  }
];

export const STATS_HIGHLIGHTS = [
  { value: '100+', label: 'Facilities Audited', sub: 'Across Tier 1-3 Manufacturing' },
  { value: '25+', label: 'Industrial Hubs Covered', sub: 'Tirupur, Coimbatore, Surat, Chennai & beyond' },
  { value: '50+', label: 'Projects Completed', sub: 'Higg, ZDHC, Carbon & Social Compliance' },
  { value: '100%', label: 'Commitment', sub: 'Audit-Ready Guarantee & Client Satisfaction' }
];

export const COMPANY_CONTACT = {
  name: 'EcoNexus Advisors',
  tagline: 'Where Compliance Meets Sustainability.',
  slogan: 'Driving Compliance. Empowering Sustainability. Creating Value. Your Partner for Global ESG Success',
  headquarters: 'Kangeyam, Tamil Nadu, India',
  address: 'Kangeyam Industrial Corridor, Tirupur District, Tamil Nadu 638701, India',
  phone: '+91 9025725668',
  email: 'infoeconexusadvisors@gmail.com',
  workingHours: 'Monday – Saturday: 9:00 AM – 6:30 PM IST'
};
