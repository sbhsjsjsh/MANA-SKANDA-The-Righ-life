'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import ResilientImage from './ResilientImage';
import clubhouseImg from '@/src/assets/images/clubhouse_lifestyle_1795001604635.jpg';
import sportsImg from '@/src/assets/images/lakefront_sports_zone_1795001605447.jpg';
import { CLUBHOUSE_EXPERIENCE_GROUPS } from '@/lib/project-data';

export default function ClubhouseSportsSection() {
  const [activeTab, setActiveTab] = useState(CLUBHOUSE_EXPERIENCE_GROUPS[0].id);
  const currentGroup =
    CLUBHOUSE_EXPERIENCE_GROUPS.find((g) => g.id === activeTab) ??
    CLUBHOUSE_EXPERIENCE_GROUPS[0];

  return (
    <section id="clubhouse" className="py-20 sm:py-28 bg-[#13221A] text-[#F8F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-medium text-[#9AC2AA] tracking-wide mb-3">
            03. Clubhouses, Sports &amp; Lakefront
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.12] text-balance">
            3.5 lakh sq.ft. of clubhouses and 6.5 acres of dedicated sports
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C7D4CB] leading-relaxed">
            Over 100 curated lifestyle experiences, stadium-scale athletic courts, and a serene 13-acre lakeside microclimate come together inside one integrated campus.
          </p>
        </div>

        {/* Dual Architectural Photography Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-[#1B2F24]">
            <ResilientImage
              src={clubhouseImg}
              alt="3.5 lakh sq.ft. luxury clubhouse pavilion with infinity pool and timber colonnade"
              fallbackTitle="3.5 Lakh Sq.Ft. Clubhouses"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B140F]/90 via-[#0B140F]/45 to-transparent"
            />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-xs text-[#A8C8B4] tabular-nums">3,50,000 SQ.FT. · 100+ EXPERIENCES</p>
              <p className="font-display text-xl sm:text-2xl font-semibold text-white mt-1">
                Social &amp; Wellness Clubhouses
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-[#1B2F24]">
            <ResilientImage
              src={sportsImg}
              alt="6.5-acre dedicated sports facilities with running track, stadiums, and multi-purpose courts beside a scenic lake"
              fallbackTitle="6.5-Acre Sports Campus"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B140F]/90 via-[#0B140F]/45 to-transparent"
            />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-mono text-xs text-[#A8C8B4] tabular-nums">6.5 ACRES · STADIUMS &amp; TRACKS</p>
              <p className="font-display text-xl sm:text-2xl font-semibold text-white mt-1">
                Dedicated Athletics &amp; Lakefront
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Experience Explorer */}
        <div className="border border-white/15 rounded-xl bg-[#1A2E23] p-6 sm:p-9">
          <div
            role="tablist"
            aria-label="Township lifestyle zones"
            className="flex flex-wrap gap-2 pb-6 border-b border-white/15"
          >
            {CLUBHOUSE_EXPERIENCE_GROUPS.map((group) => {
              const isActive = group.id === activeTab;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(group.id)}
                  className={`px-4 py-2.5 min-h-[42px] text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                    isActive
                      ? 'bg-white text-[#181C19]'
                      : 'bg-white/5 text-[#D6E2D9] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                {currentGroup.headline}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#C7D4CB] leading-relaxed">
                {currentGroup.description}
              </p>
            </div>

            <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {currentGroup.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[#E8EFEA]">
                  <Check className="w-4 h-4 text-[#9AC2AA] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
