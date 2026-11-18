'use client';

import { useState } from 'react';
import { PROXIMITY_CATEGORIES, type ProximityCategory } from '@/lib/project-data';

const CORRIDORS = [
  {
    name: 'Outer Ring Road (ORR)',
    note: 'Direct main-road link to Bellandur, Ecospace, Eco World & Embassy Tech Village',
  },
  {
    name: 'Sarjapur SEZ & Wipro Hub',
    note: 'Seamless access to RGA Tech Park & Wipro Corporate Office',
  },
  {
    name: 'Whitefield – ITPL Corridor',
    note: 'Quick arterial connectivity via Varthur Main Road to ITPL & Bagmane Constellation',
  },
];

export default function LocationProximity() {
  const [activeCatId, setActiveCatId] = useState<ProximityCategory['id']>('schools');
  const activeCategory =
    PROXIMITY_CATEGORIES.find((c) => c.id === activeCatId) ?? PROXIMITY_CATEGORIES[0];

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F8F9F7] border-b border-[#DCE2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-medium text-[#1B4332] tracking-wide mb-3">
            04. Location &amp; Neighborhood Proximity
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181C19] tracking-tight leading-[1.12] text-balance">
            Main-road frontage on Varthur–Sarjapur Road, East Bangalore
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525C54] leading-relaxed">
            Zero approach bottlenecks. Direct arterial frontage links East Bangalore’s highest-density international school belt directly with ORR, Sarjapur SEZ, and Whitefield–ITPL.
          </p>
        </div>

        {/* Connectivity Corridors Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CORRIDORS.map((corridor, idx) => (
            <div
              key={corridor.name}
              className="bg-white border border-[#DCE2DC] rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <p className="font-mono text-xs text-[#525C54] tabular-nums">
                  Corridor 0{idx + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#181C19] tracking-tight">
                  {corridor.name}
                </h3>
                <p className="mt-2 text-sm text-[#525C54] leading-relaxed">{corridor.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Proximity Directory */}
        <div className="bg-white border border-[#DCE2DC] rounded-xl p-5 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-[#DCE2DC]">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                Social Infrastructure &amp; Employment Hubs
              </h3>
              <p className="mt-1 text-sm text-[#525C54]">{activeCategory.summary}</p>
            </div>

            {/* Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Proximity categories"
              className="flex flex-wrap gap-1.5 p-1 bg-[#EEF1ED] rounded-lg self-start"
            >
              {PROXIMITY_CATEGORIES.map((category) => {
                const isActive = category.id === activeCatId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCatId(category.id)}
                    className={`px-3.5 py-2 min-h-[40px] text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332] ${
                      isActive
                        ? 'bg-[#1B4332] text-white'
                        : 'text-[#525C54] hover:text-[#181C19]'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean Structured Proximity Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 divide-y md:divide-y-0">
            {activeCategory.items.map((item) => (
              <div
                key={item.name}
                className="py-4 border-b border-[#DCE2DC] flex items-baseline justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-semibold text-[#181C19]">{item.name}</p>
                  <p className="text-xs sm:text-sm text-[#525C54] mt-0.5">{item.detail}</p>
                </div>
                {item.distance && (
                  <span className="font-mono text-xs sm:text-sm font-medium text-[#1B4332] whitespace-nowrap shrink-0 tabular-nums">
                    {item.distance}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
