'use client';

import Link from 'next/link';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import ResilientImage from './ResilientImage';
import heroTownshipImg from '@/src/assets/images/hero_forest_township_1795001606805.jpg';
import { PROJECT_METRICS } from '@/lib/project-data';

export default function HeroSection() {
  return (
    <section id="overview" className="border-b border-[#DCE2DC] bg-[#F8F9F7]">
      {/* Architectural 16:9 Immersive Hero Frame */}
      <div className="relative w-full min-h-[540px] sm:min-h-[600px] lg:min-h-[650px] flex items-end overflow-hidden bg-[#14241C]">
        <ResilientImage
          src={heroTownshipImg}
          alt="MANA SKANDA – The Right Life luxury high-rise towers nestled within a dense green forest canopy beside a 13-acre scenic lake"
          fallbackTitle="MANA SKANDA – The Right Life"
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Measured Contrast Scrim for >= 4.5:1 Legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0D1611]/92 via-[#0D1611]/55 to-[#0D1611]/20"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs sm:text-sm font-medium text-[#D6E2D9] tracking-wide mb-4">
              <span>Varthur–Sarjapur Road, East Bangalore</span>
              <span aria-hidden="true" className="mx-2 text-[#8DA294]">·</span>
              <span>Forest-Themed Township</span>
              <span aria-hidden="true" className="mx-2 text-[#8DA294]">·</span>
              <span>Near Whitefield</span>
            </p>

            <h1
              className="font-display font-semibold text-white tracking-tight leading-[1.06] text-balance"
              style={{ fontSize: 'clamp(2.5rem, 4.8vw, 4.35rem)' }}
            >
              MANA SKANDA — The Right Life
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#E5ECE7] leading-relaxed max-w-2xl">
              Bangalore’s largest child-centric integrated township across 100+ acres—uniting 35-story Vastu-compliant residences, vehicle-free forest trails, and a 13-acre scenic lakefront.
            </p>

            {/* Primary CTA + Secondary Link to Separate Pages */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-sm sm:text-base font-medium text-[#181C19] bg-white hover:bg-[#EEF1ED] rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Schedule Private Tour</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/residences"
                className="inline-flex items-center gap-2 py-2.5 min-h-[44px] text-sm sm:text-base font-medium text-white hover:text-[#D6E2D9] underline underline-offset-8 decoration-[#8DA294] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span>Explore 3 &amp; 3.5 BHK Pricing</span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-Width 4-Column Masterplan Metrics Strip (Below Hero) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE2DC] border-x border-[#DCE2DC] bg-white">
          {PROJECT_METRICS.map((metric) => (
            <div key={metric.label} className="px-5 py-6 sm:px-7 sm:py-7">
              <p className="font-display text-2xl sm:text-3xl font-semibold text-[#1B4332] tabular-nums tracking-tight">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#181C19]">{metric.label}</p>
              <p className="mt-0.5 text-xs text-[#525C54] tabular-nums">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
