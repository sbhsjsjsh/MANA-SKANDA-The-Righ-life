export interface UnitConfig {
  id: '3bhk' | '3.5bhk';
  label: string;
  title: string;
  areaRange: string;
  startingPrice: string;
  startingPriceNumeric: number;
  structure: string;
  orientation: string;
  highlights: string[];
  rooms: { name: string; note: string }[];
}

export interface ProximityItem {
  name: string;
  detail: string;
  distance?: string;
}

export interface ProximityCategory {
  id: 'schools' | 'tech-parks' | 'hospitals' | 'retail';
  label: string;
  summary: string;
  items: ProximityItem[];
}

export const PROJECT_METRICS = [
  {
    value: '100+ Acres',
    label: 'Integrated Masterplan',
    note: '31 Acres in Phase 1',
  },
  {
    value: '84%',
    label: 'Open Landscapes',
    note: '51% Hardscape · 33% Softscape',
  },
  {
    value: '3.5L Sq.Ft.',
    label: 'Clubhouse Footprint',
    note: '100+ Curated Experiences',
  },
  {
    value: '₹1.75 Cr*',
    label: '3 & 3.5 BHK Homes',
    note: '1661 – 2244 Sq.Ft.',
  },
];

export const UNIT_CONFIGS: UnitConfig[] = [
  {
    id: '3bhk',
    label: '3 BHK Residences',
    title: '3 BHK Forest & Courtyard Residences',
    areaRange: '1661 – 1953 sq.ft.',
    startingPrice: '₹1.75 Crore',
    startingPriceNumeric: 17500000,
    structure: '3B + G + 35 Floors',
    orientation: '100% Vastu-Compliant Layouts',
    highlights: [
      'Cross-ventilated living and dining opening to wide forest-facing deck',
      'Zero shared walls for acoustic privacy across family bedrooms',
      'Dedicated utility terrace and smart home-ready provisions',
      'Direct lift access to vehicle-free podium parks and learning zones',
    ],
    rooms: [
      { name: 'Living & Dining', note: 'Expansive family lounge with floor-to-ceiling glazing' },
      { name: 'Primary Suite', note: 'Walk-in wardrobe alcove & corner garden views' },
      { name: 'Children’s Bedroom', note: 'Study niche engineered for natural daylight' },
      { name: 'Kitchen & Utility', note: 'Ergonomic wet/dry kitchen zoning with ventilation' },
    ],
  },
  {
    id: '3.5bhk',
    label: '3.5 BHK Residences',
    title: '3.5 BHK Grand Lake-View Residences',
    areaRange: '2067 – 2244 sq.ft.',
    startingPrice: '₹2.35 Crore',
    startingPriceNumeric: 23500000,
    structure: '3B + G + 35 Floors',
    orientation: '100% Vastu-Compliant Corner Suites',
    highlights: [
      'Expansive wrap-around deck overlooking the 13-acre lake and canopy',
      'Flexible +0.5 study, home office, or private nursery suite',
      'Private foyer entrance with dual-aspect natural light',
      'Generous master bath and separate service utility corridor',
    ],
    rooms: [
      { name: 'Grand Living Pavilion', note: 'Dual-aspect living room extending onto wide timber deck' },
      { name: 'Master Sanctuary', note: 'Corner panoramic suite with private lounge corner' },
      { name: 'Flex Study / 0.5 Room', note: 'Quiet acoustic room for remote work or home library' },
      { name: 'Two Family Suites', note: 'En-suite bathrooms and full-height wardrobe walls' },
    ],
  },
];

export const CLUBHOUSE_EXPERIENCE_GROUPS = [
  {
    id: 'clubhouse',
    label: '3.5L Sq.Ft. Clubhouses',
    headline: '100+ experiences curated across multi-generational social pavilions',
    description:
      'Spanning 3.5 lakh square feet, the township clubhouses anchor everyday wellness, co-working, fine dining, and family celebration without leaving the gates.',
    features: [
      'Temperature-controlled leisure & lap swimming pools',
      'Private cinema lounge, culinary studio & banquet lawns',
      'Quiet forest-view co-working library & study pods',
      'Indoor badminton, squash, yoga deck & hydro-spa suites',
      'Dedicated children’s STEM workshop, music room & creche',
      'Guest hospitality suites for visiting extended family',
    ],
  },
  {
    id: 'sports',
    label: '6.5-Acre Sports Arena',
    headline: 'Dedicated stadium-scale athletic grounds built for daily training',
    description:
      'Set apart from residential towers yet reachable via car-free trails, 6.5 acres are reserved purely for competitive and recreational sports.',
    features: [
      'World-class tournament stadium & multi-sport turf fields',
      'Regulation synthetic athletic running & cycling tracks',
      'Floodlit tennis, basketball & multi-purpose courts',
      'Cricket practice nets & coaching academies for children',
      'Outdoor calisthenics & senior mobility circuits',
      'Skate park, rock climbing wall & adventure obstacle zone',
    ],
  },
  {
    id: 'lakefront',
    label: '13-Acre Lake & Forest',
    headline: 'A living forest province anchored by a 13-acre natural lakefront',
    description:
      'Designed with 84% open spaces (51% hardscape plazas and 33% lush softscape canopy), the landscape creates a naturally cooler microclimate.',
    features: [
      'Scenic 13-acre lakefront promenade & sunrise viewing decks',
      '100% no-vehicle pedestrian podiums for safe child exploration',
      'Sensory botanical trails, butterfly gardens & orchard groves',
      'Shaded timber reading pavilions & outdoor learning amphitheaters',
      'Integrated township temple, retail high-street & everyday mart',
      'Future commercial workspaces within walking distance',
    ],
  },
];

export const PROXIMITY_CATEGORIES: ProximityCategory[] = [
  {
    id: 'schools',
    label: 'Top Schools (0–5 km)',
    summary: 'Walkable and 5-minute access to Bangalore’s premier international schools.',
    items: [
      { name: 'Inventure Academy', detail: 'International Baccalaureate & Cambridge', distance: 'Next door' },
      { name: 'United World Academy', detail: 'Integrated K–12 Campus', distance: 'Next door' },
      { name: 'Greenwood High International School', detail: 'IB / IGCSE / ICSE Campus', distance: '100 m' },
      { name: 'Global Indian International School (GIIS)', detail: 'SMART Campus', distance: '700 m' },
      { name: 'The International School Bangalore (TISB)', detail: 'IB & IGCSE', distance: '850 m' },
      { name: 'Oakridge International School', detail: 'Nord Anglia Education', distance: '1.5 km' },
      { name: 'One World International School (OWIS)', detail: 'Sarjapur Campus', distance: '4.6 km' },
      { name: 'Delhi Public School East', detail: 'CBSE K–12', distance: 'Within 5 km' },
      { name: 'Head Start Educational Academy', detail: 'Montessori & Cambridge', distance: 'Within 5 km' },
      { name: 'Harvest International School', detail: 'IB & CBSE Campus', distance: 'Within 5 km' },
    ],
  },
  {
    id: 'tech-parks',
    label: 'Tech Parks',
    summary: 'Seamless main-road connectivity to ORR, Sarjapur SEZ, and Whitefield–ITPL corridors.',
    items: [
      { name: 'RGA Tech Park', detail: 'Sarjapur Road IT Corridor', distance: 'Direct access' },
      { name: 'Wipro Corporate Office', detail: 'Sarjapur Main Road', distance: 'Direct access' },
      { name: 'Microsoft Office', detail: 'Bellandur / ORR Corridor', distance: 'ORR access' },
      { name: 'RMZ Ecospace', detail: 'Outer Ring Road SEZ', distance: 'ORR access' },
      { name: 'RMZ Eco World', detail: 'Outer Ring Road Campus', distance: 'ORR access' },
      { name: 'Embassy Tech Village', detail: 'Devarabeesanahalli, ORR', distance: 'ORR access' },
      { name: 'Global Technology Park', detail: 'Outer Ring Road', distance: 'ORR access' },
      { name: 'Pritech Park SEZ', detail: 'Bellandur, ORR', distance: 'ORR access' },
      { name: 'Bagmane Constellation Business Park', detail: 'Outer Ring Road / Mahadevapura', distance: 'Whitefield link' },
    ],
  },
  {
    id: 'hospitals',
    label: 'Hospitals',
    summary: 'Multi-specialty quaternary care and pediatric centers within quick reach.',
    items: [
      { name: 'Manipal Hospitals', detail: 'Sarjapur Road & Whitefield', distance: 'Nearby' },
      { name: 'Sakra World Hospital', detail: 'Outer Ring Road, Bellandur', distance: 'ORR corridor' },
      { name: 'Motherhood Hospitals', detail: 'Maternity & Pediatric Care', distance: 'Nearby' },
      { name: 'Cloudnine Hospital', detail: 'Women & Child Specialists', distance: 'Nearby' },
      { name: "Rainbow Children's Hospital", detail: 'Pediatric Multi-Specialty', distance: 'Nearby' },
      { name: 'Apollo Hospitals', detail: 'Multi-Specialty Care', distance: 'Nearby' },
      { name: 'Columbia Asia Hospital', detail: 'Whitefield / Sarjapur', distance: 'Nearby' },
      { name: 'Belenus Champion Hospital (New Apollo)', detail: 'Sarjapur Road', distance: 'Nearby' },
    ],
  },
  {
    id: 'retail',
    label: 'Retail & Malls',
    summary: 'Major shopping destinations alongside the township’s own curated retail high-street.',
    items: [
      { name: 'Forum Mall', detail: 'Shopping, Dining & Multiplex', distance: '5 km' },
      { name: 'Soul Space Spirit Centro Mall', detail: 'Bellandur / ORR', distance: 'ORR corridor' },
      { name: 'Phoenix Marketcity', detail: 'Whitefield Main Road', distance: 'Whitefield link' },
      { name: 'Forum Neighbourhood Mall', detail: 'Whitefield', distance: 'Whitefield link' },
      { name: 'Market Square Mall', detail: 'Sarjapur Road', distance: 'Sarjapur Road' },
      { name: 'Total Mall', detail: 'Sarjapur / Kaikondrahalli', distance: 'Sarjapur Road' },
    ],
  },
];

export const WHY_CHOOSE_POINTS = [
  {
    index: '01',
    title: 'One of Bangalore’s Largest Integrated Townships',
    description:
      'A self-sustained 100+ acre masterplan uniting residential towers, commercial districts, retail high-street, a temple, and 6.5 acres of sports.',
  },
  {
    index: '02',
    title: 'Kids-First Vehicle-Free Architecture',
    description:
      'Safe pedestrian-only podiums, dedicated play forests, and outdoor learning zones designed for independent childhood exploration.',
  },
  {
    index: '03',
    title: 'Main-Road Frontage with Zero Bottlenecks',
    description:
      'Direct entry from Varthur–Sarjapur Main Road eliminates narrow approach lanes and delivers smooth daily commutes.',
  },
  {
    index: '04',
    title: 'Surrounded by Top International Schools',
    description:
      'Greenwood High (100 m), GIIS (700 m), TISB (850 m), Inventure Academy, and United World Academy sit right beside the township.',
  },
  {
    index: '05',
    title: 'Triple-Corridor IT Connectivity',
    description:
      'Strategic East Bangalore positioning connects effortlessly to Outer Ring Road (ORR), Sarjapur SEZ, and Whitefield–ITPL.',
  },
];

export const RERA_DETAILS = {
  numbers: [
    'PRM/KA/RERA/1251/308/PR/120326/008521',
    'PRM/KA/RERA/1251/308/PR/120326/008522',
  ],
  completion: '2028 onwards',
  phase1Land: '31 Acres (within 100+ Acre Masterplan)',
  totalUnits: '2,000+ Premium Residences (2,000 units in masterplan scope)',
  towers: '9 High-Rise Towers Planned · 3 Towers in Phase 1',
  structure: '3B + G + 35 Floors (Vastu-Compliant)',
};
