'use client';

import { useState } from 'react';
import ResilientImage from './ResilientImage';
import childParkImg from '@/src/assets/images/child_centric_park_1795001603789.jpg';

const OPEN_SPACE_SEGMENTS = [
  {
    id: 'total',
    label: '84% Open Areas',
    metric: '84%',
    title: 'Preserved Ecological Canvas',
    description:
      'Only 16% of the ground plane carries architectural footprints—dedicating 84% to pedestrian trails, shaded forest groves, sports lawns, and water bodies.',
    softscapeWidth: '33%',
    hardscapeWidth: '51%',
  },
  {
    id: 'hardscape',
    label: '51% Hardscape',
    metric: '51%',
    title: 'Vehicle-Free Stone Plazas & Promenades',
    description:
      'Interlocking natural stone walkways, cycling loops, amphitheaters, and shaded social courtyards designed strictly for pedestrians and children.',
    softscapeWidth: '33%',
    hardscapeWidth: '51%',
  },
  {
    id: 'softscape',
    label: '33% Softscape',
    metric: '33%',
    title: 'Native Forest Canopy & 13-Acre Lake Microclimate',
    description:
      'Dense multi-tier woodland planting adjacent to a 13-acre scenic lake cools ambient air naturally and creates a quiet botanical sanctuary.',
    softscapeWidth: '33%',
    hardscapeWidth: '51%',
  },
] as const;

export default function MasterplanBento() {
  const [activeSpace, setActiveSpace] = useState<'total' | 'hardscape' | 'softscape'>('total');
  const currentSpace =
    OPEN_SPACE_SEGMENTS.find((seg) => seg.id === activeSpace) ?? OPEN_SPACE_SEGMENTS[0];

  return (
    <section id="masterplan" className="py-20 sm:py-28 bg-[#F8F9F7] border-b border-[#DCE2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-medium text-[#1B4332] tracking-wide mb-3">
            01. Masterplan &amp; Forest Province
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181C19] tracking-tight leading-[1.12] text-balance">
            A 100+ acre forest-themed sanctuary built around childhood
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525C54] leading-relaxed">
            Conceived as Bangalore’s largest child-centric integrated township, MANA SKANDA separates vehicular movement from daily life—giving families room to breathe, learn, and grow.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Child-Centric Sanctuary (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#DCE2DC] rounded-xl overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#EEF1ED]">
              <ResilientImage
                src={childParkImg}
                alt="Vehicle-free forest-themed children's play park and timber learning pavilion at MANA SKANDA"
                fallbackTitle="Vehicle-Free Child-Centric Sanctuary"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-[#525C54] mb-2">
                  Child-Centric Urbanism · Safe Pedestrian Zones
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                  Zero surface traffic. Pure discovery.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#525C54] leading-relaxed">
                  All vehicular transit drops directly into multi-level basements, preserving the entire forest podium for safe, no-vehicle pedestrian paths, outdoor STEM &amp; nature learning pavilions, and supervised sensory play parks.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-[#DCE2DC] flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-[#181C19] font-medium">
                <span>No-Vehicle Podiums</span>
                <span aria-hidden="true" className="text-[#8DA294]">·</span>
                <span>Dedicated Learning Zones</span>
                <span aria-hidden="true" className="text-[#8DA294]">·</span>
                <span>13-Acre Scenic Lake Nearby</span>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive 84% Open Space Allocation (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#DCE2DC] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#525C54] mb-2">
                Landscape Engineering · Natural Microclimate
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                84% Open Space Ratio
              </h3>

              {/* Interactive Segmented Control */}
              <div
                role="tablist"
                aria-label="Open space composition"
                className="mt-5 grid grid-cols-3 gap-1 p-1 bg-[#EEF1ED] rounded-lg"
              >
                {OPEN_SPACE_SEGMENTS.map((seg) => {
                  const isActive = seg.id === activeSpace;
                  return (
                    <button
                      key={seg.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveSpace(seg.id)}
                      className={`px-2 py-2.5 min-h-[40px] text-xs font-medium rounded-md transition-colors duration-200 whitespace-nowrap truncate cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332] ${
                        isActive
                          ? 'bg-white text-[#181C19] shadow-xs'
                          : 'text-[#525C54] hover:text-[#181C19]'
                      }`}
                    >
                      {seg.label}
                    </button>
                  );
                })}
              </div>

              {/* Active Breakdown Readout */}
              <div className="mt-7">
                <p className="font-display text-5xl sm:text-6xl font-semibold text-[#1B4332] tabular-nums tracking-tight">
                  {currentSpace.metric}
                </p>
                <p className="mt-3 text-base font-semibold text-[#181C19]">
                  {currentSpace.title}
                </p>
                <p className="mt-2 text-sm text-[#525C54] leading-relaxed">
                  {currentSpace.description}
                </p>
              </div>
            </div>

            {/* Land Distribution Bar */}
            <div className="mt-8 pt-6 border-t border-[#DCE2DC]">
              <div className="flex items-center justify-between text-xs text-[#525C54] mb-2 tabular-nums">
                <span>Ground Plane Split</span>
                <span>84% Open · 16% Built Footprint</span>
              </div>
              <div className="h-3 w-full rounded-sm overflow-hidden flex bg-[#EEF1ED]">
                <div
                  style={{ width: '33%' }}
                  className={`h-full transition-opacity duration-200 ${
                    activeSpace === 'hardscape' ? 'bg-[#1B4332]/35' : 'bg-[#1B4332]'
                  }`}
                  title="33% Softscape Canopy"
                />
                <div
                  style={{ width: '51%' }}
                  className={`h-full transition-opacity duration-200 ${
                    activeSpace === 'softscape' ? 'bg-[#7A9081]/35' : 'bg-[#7A9081]'
                  }`}
                  title="51% Hardscape Plazas"
                />
                <div
                  style={{ width: '16%' }}
                  className="h-full bg-[#DCE2DC]"
                  title="16% Tower Footprints"
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#525C54] tabular-nums">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#1B4332] inline-block" aria-hidden="true" />
                  33% Softscape
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#7A9081] inline-block" aria-hidden="true" />
                  51% Hardscape
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#DCE2DC] inline-block" aria-hidden="true" />
                  16% Towers
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Architectural Scale & Phase 1 (5 cols) */}
          <div className="lg:col-span-5 bg-[#EEF1ED] border border-[#DCE2DC] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#525C54] mb-2">
                Development Specifications · Phase 1 Release
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                35-Story Vastu High-Rises
              </h3>
              <p className="mt-3 text-sm text-[#525C54] leading-relaxed">
                Phase 1 spans 31 acres within the 100+ acre masterplan, launching 3 iconic high-rise towers out of 9 planned overall across 2,000+ luxury residences.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 pt-6 border-t border-[#DCE2DC]">
              <div>
                <dt className="text-xs text-[#525C54]">Elevation</dt>
                <dd className="mt-1 font-mono text-sm sm:text-base font-semibold text-[#181C19] tabular-nums">
                  3B + G + 35 Floors
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#525C54]">Phase 1 Land</dt>
                <dd className="mt-1 font-mono text-sm sm:text-base font-semibold text-[#181C19] tabular-nums">
                  31 Acres
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#525C54]">Towers Planned</dt>
                <dd className="mt-1 font-mono text-sm sm:text-base font-semibold text-[#181C19] tabular-nums">
                  9 Total (3 in Ph. 1)
                </dd>
              </div>
              <div>
                <dt className="text-xs text-[#525C54]">Residences</dt>
                <dd className="mt-1 font-mono text-sm sm:text-base font-semibold text-[#181C19] tabular-nums">
                  2,000+ Homes
                </dd>
              </div>
            </dl>
          </div>

          {/* Card 4: Future-Ready Integrated Township Ecosystem (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#DCE2DC] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#525C54] mb-2">
                Integrated Mixed-Use Township · Self-Sustained Living
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                Residential, Commercial, Retail &amp; Sports in One Province
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#525C54] leading-relaxed">
                Designed so daily conveniences, spiritual calm, commerce, and world-class athletics coexist effortlessly inside a single main-road gated ecosystem.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 pt-6 border-t border-[#DCE2DC]">
              <div>
                <h4 className="text-sm font-semibold text-[#181C19]">
                  Curated Retail High-Street &amp; Essentials
                </h4>
                <p className="mt-1 text-sm text-[#525C54]">
                  Everyday groceries, artisanal cafes, pharmacies, and boutique services along the main-road frontage.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#181C19]">
                  Upcoming Commercial District
                </h4>
                <p className="mt-1 text-sm text-[#525C54]">
                  Planned modern office suites within walking distance—reducing daily commute times to minutes.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#181C19]">
                  Township Temple &amp; Cultural Groves
                </h4>
                <p className="mt-1 text-sm text-[#525C54]">
                  A tranquil stone temple and community festival lawns integrated amidst mature native trees.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#181C19]">
                  Direct Main-Road Frontage
                </h4>
                <p className="mt-1 text-sm text-[#525C54]">
                  Unobstructed entry right off Varthur–Sarjapur Road linking ORR, Sarjapur SEZ, and Whitefield–ITPL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
