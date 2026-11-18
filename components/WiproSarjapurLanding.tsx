'use client';

import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';
import ResilientImage from './ResilientImage';
import heroTownshipImg from '@/src/assets/images/hero_forest_township_1795001606805.jpg';
import childParkImg from '@/src/assets/images/child_centric_park_1795001603789.jpg';
import clubhouseImg from '@/src/assets/images/clubhouse_lifestyle_1795001604635.jpg';
import sportsImg from '@/src/assets/images/lakefront_sports_zone_1795001605447.jpg';
import interiorImg from '@/src/assets/images/luxury_residence_interior_1795001620112.jpg';
import { WIPRO_SARJAPUR_FAQS } from '@/lib/wipro-sarjapur-data';

const PHONE_E164 = '+918926267958';
const PHONE_DISPLAY = '89262 67958';
const WHATSAPP_URL =
  'https://wa.me/918926267958?text=Hello%2C%20I%20am%20interested%20in%20Premium%20Apartments%20Near%20Wipro%20Sarjapur%20at%20MANA%20SKANDA%20%E2%80%93%20The%20Right%20Life.';

const OVERVIEW_SPECS = [
  { label: 'Project Name', value: 'MANA SKANDA – The Right Life' },
  { label: 'Location', value: 'Varthur–Sarjapur Road, East Bangalore (near Whitefield)' },
  {
    label: 'Type',
    value: '100+ acre integrated township (residential, commercial, retail and sports)',
  },
  {
    label: 'Theme',
    value: 'Nature-integrated, child-centric, forest-themed township',
  },
  { label: 'Phase 1', value: '31 acres with 3 towers' },
  { label: 'Overall Plan', value: '9 high-rise towers with 2000+ premium residences' },
  { label: 'Structure', value: '3B + G + 35 floors, Vastu-compliant designs' },
  { label: 'Completion Timeline', value: '2028 onwards' },
];

const WHY_WIPRO_SARJAPUR = [
  {
    index: '01',
    title: 'Walk-to-Work Convenience for IT Professionals',
    description:
      'The Wipro Corporate Office and a cluster of major tech parks are close by, including RGA Tech Park, Microsoft Office, RMZ Ecospace, Global Technology Park, Pritech Park SEZ, RMZ Eco World, Embassy Tech Village and Bagmane Constellation Business Park.',
  },
  {
    index: '02',
    title: 'Main-Road Frontage, Easy Access',
    description:
      'Located right on the main road, MANA SKANDA gives direct access to ORR, Sarjapur SEZ and Whitefield–ITPL, so daily commutes stay simple.',
  },
  {
    index: '03',
    title: 'Surrounded by Top International Schools',
    description:
      'Greenwood High International School (100m), Global Indian International School (700m), TISB (850m) and Oakridge International School (1.5 km) are all nearby. Inventure Academy and United World Academy are right next door.',
  },
  {
    index: '04',
    title: "Nature in the Middle of the City's Tech Belt",
    description:
      'A 13-acre scenic lake nearby creates a natural microclimate with lush greenery and tranquil views.',
  },
];

const LOCATION_GROUPS = [
  {
    id: 'schools',
    title: 'Top Schools (0 – 5 km)',
    items: [
      { name: 'Greenwood High International School', distance: '100m' },
      { name: 'Global Indian International School', distance: '700m' },
      { name: 'TISB (The International School Bangalore)', distance: '850m' },
      { name: 'Oakridge International School', distance: '1.5 km' },
      { name: 'Inventure Academy & United World Academy', distance: 'Right next door' },
      { name: 'One World International School', distance: '4.6 km' },
      { name: 'Delhi Public School East', distance: 'Within 5 km' },
      { name: 'Head Start Educational Academy', distance: 'Within 5 km' },
      { name: 'Harvest International School', distance: 'Within 5 km' },
    ],
  },
  {
    id: 'tech',
    title: 'Tech Parks and Offices',
    items: [
      { name: 'Wipro Corporate Office', distance: 'Sarjapur Road' },
      { name: 'Microsoft Office', distance: 'ORR / Bellandur' },
      { name: 'RGA Tech Park', distance: 'Sarjapur Road' },
      { name: 'RMZ Ecospace', distance: 'ORR Corridor' },
      { name: 'Global Technology Park', distance: 'ORR Corridor' },
      { name: 'Pritech Park SEZ', distance: 'ORR Corridor' },
      { name: 'RMZ Eco World', distance: 'ORR Corridor' },
      { name: 'Embassy Tech Village', distance: 'ORR Corridor' },
      { name: 'Bagmane Constellation Business Park', distance: 'Whitefield / ORR' },
    ],
  },
  {
    id: 'hospitals',
    title: 'Hospitals',
    items: [
      { name: 'Manipal Hospitals', distance: 'Nearby' },
      { name: 'Sakra World Hospital', distance: 'ORR Corridor' },
      { name: 'Motherhood Hospitals', distance: 'Nearby' },
      { name: 'Columbia Asia Hospital', distance: 'Nearby' },
      { name: 'Cloudnine Hospital', distance: 'Nearby' },
      { name: 'Apollo Hospitals', distance: 'Nearby' },
      { name: "Rainbow Children's Hospital", distance: 'Nearby' },
      { name: 'Belenus Champion (New Apollo)', distance: 'Sarjapur Road' },
    ],
  },
  {
    id: 'retail',
    title: 'Retail and Malls',
    items: [
      { name: 'Forum Mall', distance: '5 km' },
      { name: 'Soul Space Spirit Centro Mall', distance: 'ORR Corridor' },
      { name: 'Phoenix Market City', distance: 'Whitefield' },
      { name: 'Market Square Mall', distance: 'Sarjapur Road' },
      { name: 'Forum Neighbourhood Mall', distance: 'Whitefield' },
      { name: 'Total Mall', distance: 'Sarjapur Road' },
    ],
  },
] as const;

const BUYER_PROFILES = [
  {
    title: 'IT Professionals',
    description:
      'Live close to Wipro and the Sarjapur and Whitefield tech corridors, with direct access to ORR and Sarjapur SEZ.',
  },
  {
    title: 'Families with Children',
    description:
      "Safe, no-vehicle zones, learning areas and some of Bangalore's best international schools nearby.",
  },
  {
    title: 'Premium Homebuyers',
    description:
      'Spacious 3 and 3.5 BHK residences with Vastu-compliant design in a 35-floor tower setting.',
  },
  {
    title: 'Investors',
    description:
      "A large integrated township in East Bangalore's growing tech and education belt.",
  },
];

const WHY_CHOOSE_BULLETS = [
  "One of Bangalore's largest integrated township experiences",
  '"Kids-First" vision with safe movement spaces and learning zones',
  'Main-road frontage with no bottlenecks and effortless access',
  'Surrounded by top international schools',
  'Excellent connectivity to ORR, Sarjapur SEZ and Whitefield–ITPL',
  '84% open areas, 13-acre lake nearby and 6.5 acres of sports facilities',
];

export default function WiproSarjapurLanding() {
  const [activeLocTab, setActiveLocTab] = useState<'schools' | 'tech' | 'hospitals' | 'retail'>(
    'schools'
  );
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [selectedConfig, setSelectedConfig] = useState<'3bhk' | '3.5bhk'>('3bhk');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; email?: string }>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const activeLocationGroup =
    LOCATION_GROUPS.find((g) => g.id === activeLocTab) ?? LOCATION_GROUPS[0];

  const scrollToForm = (unit?: '3bhk' | '3.5bhk') => {
    if (unit) setSelectedConfig(unit);
    const el = document.getElementById('lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: { fullName?: string; phone?: string; email?: string } = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const cleanPhone = phone.replace(/[\s\-+]/g, '');
    if (!/^\d{10,12}$/.test(cleanPhone)) {
      nextErrors.phone = 'Enter a valid 10-digit mobile number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmittedRef(`MS-WS-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#13221A] text-white border-b border-[#DCE2DC]">
        <div className="relative min-h-[540px] sm:min-h-[600px] flex items-end overflow-hidden">
          <ResilientImage
            src={heroTownshipImg}
            alt="Premium apartments near Wipro Sarjapur at MANA SKANDA – The Right Life forest-themed township"
            fallbackTitle="MANA SKANDA – The Right Life"
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B140F]/95 via-[#0B140F]/65 to-[#0B140F]/25"
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm font-medium text-[#A8C8B4] tracking-wide mb-3">
                Varthur–Sarjapur Road, East Bangalore · 3 &amp; 3.5 BHK from ₹1.75 Cr
              </p>
              <h1
                className="font-display font-semibold text-white tracking-tight leading-[1.08] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.85rem)' }}
              >
                Premium Apartments Near Wipro Sarjapur – MANA SKANDA, The Right Life
              </h1>
              <p className="mt-4 text-base sm:text-xl font-medium text-[#D6E2D9]">
                A 100+ Acre Child-Centric Integrated Township on Varthur–Sarjapur Road, East Bangalore
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#E5ECE7] leading-relaxed max-w-2xl">
                Looking for <strong>premium apartments near Wipro Sarjapur</strong>? MANA SKANDA is a 100+ acre integrated township with a forest-themed design, 84% open areas, a 3.5 lakh sq.ft. clubhouse and top international schools right next door. It sits on the main Varthur–Sarjapur Road with direct access to ORR, Sarjapur SEZ and Whitefield–ITPL.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToForm()}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-medium text-[#181C19] bg-white hover:bg-[#EEF1ED] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Get Price &amp; Brochure – Fill the Form</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-md transition-colors whitespace-nowrap tabular-nums"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm font-medium text-white bg-[#1B4332] hover:bg-[#133024] border border-white/20 rounded-md transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 sm:py-24 bg-[#F8F9F7] border-b border-[#DCE2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181C19] tracking-tight">
              Project Overview
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#525C54]">
              Integrated township apartments in East Bangalore engineered for families seeking luxury apartments on Varthur–Sarjapur Road.
            </p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-[#DCE2DC] rounded-xl divide-y sm:divide-y-0 sm:divide-x divide-[#DCE2DC]">
            {OVERVIEW_SPECS.map((item, idx) => (
              <div
                key={item.label}
                className={`p-6 ${idx >= 4 ? 'sm:border-t sm:border-[#DCE2DC]' : ''}`}
              >
                <dt className="text-xs font-medium text-[#525C54]">{item.label}</dt>
                <dd className="mt-1.5 text-sm sm:text-base font-semibold text-[#181C19] leading-snug">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why Choose Premium Apartments Near Wipro Sarjapur? */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DCE2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181C19] tracking-tight leading-[1.12] text-balance">
              Why Choose Premium Apartments Near Wipro Sarjapur?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_WIPRO_SARJAPUR.map((item) => (
              <div
                key={item.index}
                className="bg-[#F8F9F7] border border-[#DCE2DC] rounded-xl p-6 sm:p-8"
              >
                <p className="font-mono text-xs font-semibold text-[#1B4332] tabular-nums">
                  {item.index}.
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#181C19] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#525C54] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 sm:py-24 bg-[#F8F9F7] border-b border-[#DCE2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181C19] tracking-tight">
              Project Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Child-centric */}
            <div className="lg:col-span-7 bg-white border border-[#DCE2DC] rounded-xl overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] w-full bg-[#EEF1ED]">
                <ResilientImage
                  src={childParkImg}
                  alt="Safe no-vehicle pedestrian play and learning zones at MANA SKANDA"
                  fallbackTitle="Bangalore's Largest Child-Centric Integrated Township"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19]">
                  Bangalore&apos;s Largest Child-Centric Integrated Township
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#525C54] leading-relaxed">
                  Safe, no-vehicle pedestrian zones and dedicated play and learning areas are built into the masterplan, with a &ldquo;Kids-First&rdquo; vision.
                </p>
              </div>
            </div>

            {/* 84% Open Areas + Future Ready */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-white border border-[#DCE2DC] rounded-xl p-6 sm:p-8 flex-1">
                <p className="font-display text-4xl sm:text-5xl font-semibold text-[#1B4332] tabular-nums">
                  84%
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#181C19]">
                  84% Open Areas
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#525C54] leading-relaxed">
                  The masterplan includes 84% open space, made up of 51% hardscape and 33% softscape.
                </p>
              </div>

              <div className="bg-[#EEF1ED] border border-[#DCE2DC] rounded-xl p-6 sm:p-8 flex-1">
                <h3 className="font-display text-2xl font-semibold text-[#181C19]">
                  Future-Ready Township Living
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#525C54] leading-relaxed">
                  Upcoming commercial spaces, a curated retail high-street, a temple and everyday essentials within the township.
                </p>
              </div>
            </div>

            {/* Sports */}
            <div className="lg:col-span-6 bg-white border border-[#DCE2DC] rounded-xl overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] w-full bg-[#EEF1ED]">
                <ResilientImage
                  src={sportsImg}
                  alt="6.5 acres of sports facilities with stadiums, multi-purpose courts and running track"
                  fallbackTitle="6.5 Acres of Sports Facilities"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-[#181C19]">
                  6.5 Acres of Sports Facilities
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#525C54] leading-relaxed">
                  World-class stadiums, multi-purpose courts and a running track keep families active and healthy.
                </p>
              </div>
            </div>

            {/* Clubhouse */}
            <div className="lg:col-span-6 bg-white border border-[#DCE2DC] rounded-xl overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] w-full bg-[#EEF1ED]">
                <ResilientImage
                  src={clubhouseImg}
                  alt="3.5 lakh sq.ft. of premium clubhouses with 100+ unique experiences"
                  fallbackTitle="3.5 Lakh Sq.Ft. of Premium Clubhouses"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-[#181C19]">
                  3.5 Lakh Sq.Ft. of Premium Clubhouses
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#525C54] leading-relaxed">
                  More than 100 unique experiences for every age group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Configurations & Pricing */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DCE2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 relative min-h-[300px] rounded-xl overflow-hidden border border-[#DCE2DC] bg-[#EEF1ED]">
              <ResilientImage
                src={interiorImg}
                alt="Spacious 3 BHK and 3.5 BHK apartments near Wipro Sarjapur with forest balcony"
                fallbackTitle="3 & 3.5 BHK Residences"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover lg:h-full"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181C19] tracking-tight">
                  Unit Configurations &amp; Pricing
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#525C54]">
                  Spacious 3 BHK near Wipro Corporate Office and 3.5 BHK apartments on Sarjapur Road with 3B + G + 35 floor Vastu-compliant layouts.
                </p>

                <div className="mt-6 overflow-x-auto border border-[#DCE2DC] rounded-xl">
                  <table className="w-full text-left border-collapse min-w-[440px]">
                    <thead>
                      <tr className="bg-[#F8F9F7] border-b border-[#DCE2DC] text-xs font-semibold text-[#525C54]">
                        <th className="py-3.5 px-5">Configuration</th>
                        <th className="py-3.5 px-5">Size (Sq.Ft.)</th>
                        <th className="py-3.5 px-5">Starting Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DCE2DC] text-sm sm:text-base">
                      <tr>
                        <td className="py-4 px-5 font-semibold text-[#181C19]">3 BHK</td>
                        <td className="py-4 px-5 font-mono text-[#181C19] tabular-nums">
                          1661 – 1953
                        </td>
                        <td className="py-4 px-5 font-semibold text-[#1B4332] tabular-nums">
                          ₹1.75 Crore onwards
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-5 font-semibold text-[#181C19]">3.5 BHK</td>
                        <td className="py-4 px-5 font-mono text-[#181C19] tabular-nums">
                          2067 – 2244
                        </td>
                        <td className="py-4 px-5 font-semibold text-[#1B4332] tabular-nums">
                          ₹2.35 Crore onwards
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToForm('3bhk')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-medium text-white bg-[#1B4332] hover:bg-[#133024] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Get Complete Price Sheet – Fill the Form</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-16 sm:py-24 bg-[#F8F9F7] border-b border-[#DCE2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181C19] tracking-tight">
                Location Advantages
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#525C54]">
                Apartments near international schools Sarjapur, Whitefield ITPL, and major multi-specialty hospitals.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Nearby landmarks"
              className="flex flex-wrap gap-1.5 p-1 bg-[#EEF1ED] border border-[#DCE2DC] rounded-lg self-start"
            >
              {LOCATION_GROUPS.map((group) => {
                const isActive = group.id === activeLocTab;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveLocTab(group.id)}
                    className={`px-3.5 py-2 min-h-[40px] text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#1B4332] text-white'
                        : 'text-[#525C54] hover:text-[#181C19]'
                    }`}
                  >
                    {group.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white border border-[#DCE2DC] rounded-xl p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-[#181C19] pb-4 border-b border-[#DCE2DC]">
              {activeLocationGroup.title}
            </h3>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {activeLocationGroup.items.map((loc) => (
                <div
                  key={loc.name}
                  className="py-3.5 border-b border-[#DCE2DC] flex items-baseline justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-medium text-[#181C19]">
                    {loc.name}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-[#1B4332] whitespace-nowrap tabular-nums">
                    {loc.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is MANA SKANDA For? & Why Choose MANA SKANDA? */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DCE2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181C19] tracking-tight mb-10">
            Who Is MANA SKANDA For?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {BUYER_PROFILES.map((profile) => (
              <div
                key={profile.title}
                className="bg-[#F8F9F7] border border-[#DCE2DC] rounded-xl p-6"
              >
                <h3 className="font-display text-2xl font-semibold text-[#181C19]">
                  {profile.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#525C54] leading-relaxed">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-[#F8F9F7] border border-[#DCE2DC] rounded-xl p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                Why Choose MANA SKANDA?
              </h2>
              <ul className="mt-6 space-y-3.5">
                {WHY_CHOOSE_BULLETS.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base text-[#181C19]">
                    <Check className="w-4 h-4 text-[#1B4332] shrink-0 mt-1" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-[#13221A] text-white rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-[#A8C8B4]">
                <ShieldCheck className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h2 className="text-base font-semibold text-white">RERA Details</h2>
              </div>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs text-[#A8C8B4]">RERA Numbers</dt>
                  <dd className="mt-1 font-mono text-xs sm:text-sm text-white break-all tabular-nums space-y-1">
                    <div>PRM/KA/RERA/1251/308/PR/120326/008521</div>
                    <div>PRM/KA/RERA/1251/308/PR/120326/008522</div>
                  </dd>
                </div>
                <div className="pt-4 border-t border-white/15">
                  <dt className="text-xs text-[#A8C8B4]">Completion Timeline</dt>
                  <dd className="mt-1 text-base font-semibold text-white tabular-nums">
                    2028 onwards
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-24 bg-[#F8F9F7] border-b border-[#DCE2DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181C19] tracking-tight mb-8">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="bg-white border border-[#DCE2DC] rounded-xl divide-y divide-[#DCE2DC]">
            {WIPRO_SARJAPUR_FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8F9F7]/60 transition-colors cursor-pointer"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-[#181C19]">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-[#525C54] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-[#525C54] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Conversion Block + Lead Form + WhatsApp & Call CTAs */}
      <section id="lead-form" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181C19] tracking-tight leading-[1.15] text-balance">
                Own a Premium Home Near Wipro Sarjapur
              </h2>
              <p className="mt-4 text-base text-[#525C54] leading-relaxed">
                Live in a forest-themed township where kids play safely, schools are minutes away and your workplace is close by. Fill the form to get the price sheet, brochure and site visit details.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 min-h-[48px] text-sm font-medium text-white bg-[#181C19] hover:bg-[#2C332E] rounded-md transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call +91 {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto sm:ml-3 px-6 py-3.5 min-h-[48px] text-sm font-medium text-white bg-[#1B4332] hover:bg-[#133024] rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp for Brochure</span>
                </a>
              </div>

              <p className="mt-8 text-xs text-[#525C54] leading-relaxed">
                Related searches: apartments near Wipro Sarjapur · luxury apartments Sarjapur Road · 3 BHK near Wipro Corporate Office · township apartments East Bangalore · apartments near Whitefield ITPL · apartments near international schools Sarjapur · MANA SKANDA Sarjapur
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#F8F9F7] border border-[#DCE2DC] rounded-xl p-6 sm:p-9">
              {submittedRef ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-white border border-[#1B4332]/30 rounded-xl p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 text-[#1B4332]">
                    <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-2xl font-semibold text-[#181C19]">
                      Site Visit &amp; Price Sheet Request Received
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-[#525C54] leading-relaxed">
                    Thank you, <span className="font-semibold text-[#181C19]">{fullName}</span>. Our team will share the complete price sheet, brochure, and site visit details for{' '}
                    <span className="font-semibold text-[#181C19]">
                      {selectedConfig === '3bhk' ? '3 BHK (1661 – 1953 sq.ft.)' : '3.5 BHK (2067 – 2244 sq.ft.)'}
                    </span>{' '}
                    at MANA SKANDA – The Right Life.
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#DCE2DC] flex items-center justify-between text-xs text-[#525C54]">
                    <span className="font-mono tabular-nums">Ref: {submittedRef}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setFullName('');
                        setPhone('');
                        setEmail('');
                      }}
                      className="font-medium text-[#1B4332] hover:underline cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="font-display text-2xl font-semibold text-[#181C19]">
                    Book a Site Visit – Fill the Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedConfig('3bhk')}
                      className={`text-left p-3.5 rounded-lg border transition-colors cursor-pointer ${
                        selectedConfig === '3bhk'
                          ? 'bg-white border-[#1B4332] ring-1 ring-[#1B4332]'
                          : 'bg-white/60 border-[#DCE2DC]'
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#181C19]">3 BHK</p>
                      <p className="text-xs text-[#525C54] font-mono tabular-nums">
                        1661 – 1953 sq.ft. · ₹1.75 Cr*
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedConfig('3.5bhk')}
                      className={`text-left p-3.5 rounded-lg border transition-colors cursor-pointer ${
                        selectedConfig === '3.5bhk'
                          ? 'bg-white border-[#1B4332] ring-1 ring-[#1B4332]'
                          : 'bg-white/60 border-[#DCE2DC]'
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#181C19]">3.5 BHK</p>
                      <p className="text-xs text-[#525C54] font-mono tabular-nums">
                        2067 – 2244 sq.ft. · ₹2.35 Cr*
                      </p>
                    </button>
                  </div>

                  <div>
                    <label htmlFor="ws-name" className="block text-xs font-semibold text-[#181C19] mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="ws-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className={`w-full min-h-[46px] px-4 py-2.5 bg-white border rounded-md text-sm text-[#181C19] focus:outline-2 focus:outline-[#1B4332] ${
                        errors.fullName ? 'border-[#B42318]' : 'border-[#DCE2DC]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ws-phone" className="block text-xs font-semibold text-[#181C19] mb-1.5">
                        Mobile Number
                      </label>
                      <input
                        id="ws-phone"
                        type="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98765 43210"
                        className={`w-full min-h-[46px] px-4 py-2.5 bg-white border rounded-md text-sm text-[#181C19] focus:outline-2 focus:outline-[#1B4332] ${
                          errors.phone ? 'border-[#B42318]' : 'border-[#DCE2DC]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="ws-email" className="block text-xs font-semibold text-[#181C19] mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="ws-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={`w-full min-h-[46px] px-4 py-2.5 bg-white border rounded-md text-sm text-[#181C19] focus:outline-2 focus:outline-[#1B4332] ${
                          errors.email ? 'border-[#B42318]' : 'border-[#DCE2DC]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318]">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-[#1B4332] hover:bg-[#133024] rounded-md transition-colors cursor-pointer"
                  >
                    Book a Site Visit – Fill the Form
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
