'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import ResilientImage from './ResilientImage';
import interiorImg from '@/src/assets/images/luxury_residence_interior_1795001620112.jpg';
import { UNIT_CONFIGS } from '@/lib/project-data';

export default function ResidencesSection() {
  const [selectedId, setSelectedId] = useState<'3bhk' | '3.5bhk'>('3bhk');
  const activeUnit = UNIT_CONFIGS.find((u) => u.id === selectedId) ?? UNIT_CONFIGS[0];

  return (
    <section id="residences" className="py-16 sm:py-24 bg-white border-b border-[#DCE2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Unit Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#1B4332] tracking-wide mb-3">
              Unit Configurations &amp; Pricing
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181C19] tracking-tight leading-[1.12] text-balance">
              Vastu-compliant 3 &amp; 3.5 BHK residences overlooking forest &amp; lake
            </h2>
          </div>

          {/* Interactive Unit Segmented Control */}
          <div
            role="tablist"
            aria-label="Residence configurations"
            className="inline-flex items-center p-1 bg-[#EEF1ED] border border-[#DCE2DC] rounded-lg self-start lg:self-auto"
          >
            {UNIT_CONFIGS.map((unit) => {
              const isActive = unit.id === selectedId;
              return (
                <button
                  key={unit.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedId(unit.id)}
                  className={`px-4 sm:px-5 py-2.5 min-h-[42px] text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332] ${
                    isActive
                      ? 'bg-[#1B4332] text-white'
                      : 'text-[#525C54] hover:text-[#181C19]'
                  }`}
                >
                  {unit.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Balanced 2-Column Split (items-stretch) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] rounded-xl overflow-hidden border border-[#DCE2DC] bg-[#EEF1ED]">
            <ResilientImage
              src={interiorImg}
              alt="Sunlit luxury apartment living room and expansive wooden deck balcony overlooking forest canopy and lake"
              fallbackTitle={activeUnit.title}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover lg:h-full"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D1611]/85 via-[#0D1611]/40 to-transparent"
            />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-xs sm:text-sm font-medium text-[#D6E2D9]">
                <span>{activeUnit.structure}</span>
                <span aria-hidden="true" className="mx-2 text-[#8DA294]">·</span>
                <span>{activeUnit.orientation}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#F8F9F7] border border-[#DCE2DC] rounded-xl p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium text-[#525C54] mb-2">
                {activeUnit.structure} · {activeUnit.orientation}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                {activeUnit.title}
              </h3>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-y border-[#DCE2DC]">
                <div>
                  <p className="text-xs text-[#525C54]">Super Built-Up Area</p>
                  <p className="mt-1 font-mono text-xl sm:text-2xl font-semibold text-[#181C19] tabular-nums">
                    {activeUnit.areaRange}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#525C54]">Price Starts At</p>
                  <p className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-[#1B4332] tabular-nums">
                    {activeUnit.startingPrice}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {activeUnit.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#181C19]">
                    <Check className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#DCE2DC]">
                {activeUnit.rooms.map((room) => (
                  <div key={room.name}>
                    <p className="text-sm font-semibold text-[#181C19]">{room.name}</p>
                    <p className="mt-0.5 text-xs text-[#525C54] leading-relaxed">{room.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE2DC] flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/contact?unit=${activeUnit.id}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[46px] text-sm font-medium text-white bg-[#1B4332] hover:bg-[#133024] rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
              >
                <span>Request {activeUnit.id === '3bhk' ? '3 BHK' : '3.5 BHK'} Floor Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-[#525C54] tabular-nums">
                Completion: 2028 onwards
              </p>
            </div>
          </div>
        </div>

        {/* Clean Side-by-Side Comparison Table */}
        <div className="mt-10 overflow-x-auto border border-[#DCE2DC] rounded-xl bg-white">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-[#DCE2DC] bg-[#F8F9F7] text-xs font-semibold text-[#525C54]">
                <th className="py-3.5 px-5">Configuration</th>
                <th className="py-3.5 px-5">Super Built-Up Area</th>
                <th className="py-3.5 px-5">Tower Structure</th>
                <th className="py-3.5 px-5">Starting Price</th>
                <th className="py-3.5 px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DCE2DC] text-sm">
              {UNIT_CONFIGS.map((unit) => (
                <tr key={unit.id} className="hover:bg-[#F8F9F7]/70 transition-colors">
                  <td className="py-4 px-5 font-semibold text-[#181C19]">{unit.label}</td>
                  <td className="py-4 px-5 font-mono text-[#181C19] tabular-nums">{unit.areaRange}</td>
                  <td className="py-4 px-5 text-[#525C54] tabular-nums">{unit.structure} · Vastu</td>
                  <td className="py-4 px-5 font-semibold text-[#1B4332] tabular-nums">{unit.startingPrice}</td>
                  <td className="py-4 px-5 text-right">
                    <Link
                      href={`/contact?unit=${unit.id}`}
                      className="text-sm font-medium text-[#1B4332] hover:underline underline-offset-4 whitespace-nowrap"
                    >
                      Get Cost Sheet
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
