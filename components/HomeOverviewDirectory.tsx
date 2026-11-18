import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ResilientImage from './ResilientImage';
import childParkImg from '@/src/assets/images/child_centric_park_1795001603789.jpg';
import interiorImg from '@/src/assets/images/luxury_residence_interior_1795001620112.jpg';
import clubhouseImg from '@/src/assets/images/clubhouse_lifestyle_1795001604635.jpg';
import sportsImg from '@/src/assets/images/lakefront_sports_zone_1795001605447.jpg';
import { RERA_DETAILS } from '@/lib/project-data';

const TOWNSHIP_CHAPTERS = [
  {
    index: '01',
    kicker: 'Masterplan & Forest Province',
    title: '100+ Acre Child-Centric Township',
    summary:
      '84% open landscapes (51% hardscape, 33% softscape), no-vehicle pedestrian zones, 31-acre Phase 1 across 3 of 9 high-rise towers.',
    href: '/masterplan',
    cta: 'Explore Masterplan',
    image: childParkImg,
    alt: 'Vehicle-free forest-themed children play park and timber learning pavilion',
  },
  {
    index: '02',
    kicker: 'Vastu Residences & Pricing',
    title: '3 & 3.5 BHK High-Rise Homes',
    summary:
      '3B + G + 35 Floors with 3 BHK (1661–1953 sq.ft. from ₹1.75 Cr) and 3.5 BHK (2067–2244 sq.ft. from ₹2.35 Cr).',
    href: '/residences',
    cta: 'View Configurations & Pricing',
    image: interiorImg,
    alt: 'Spacious luxury apartment living room opening onto a forest and lake-facing deck',
  },
  {
    index: '03',
    kicker: 'Clubhouses, Sports & Lakefront',
    title: '3.5L Sq.Ft. Clubhouses & 6.5-Acre Sports',
    summary:
      '100+ curated experiences, world-class stadiums, running tracks, and a 13-acre scenic lakefront microclimate.',
    href: '/amenities',
    cta: 'Explore Amenities',
    image: clubhouseImg,
    alt: 'Grand luxury clubhouse pavilion with infinity pool and timber colonnade',
  },
  {
    index: '04',
    kicker: 'Connectivity & Schools',
    title: 'Varthur–Sarjapur Road Main Frontage',
    summary:
      'Zero bottlenecks to ORR, Sarjapur SEZ, and Whitefield–ITPL. Walking distance to Greenwood High, GIIS, TISB & Inventure.',
    href: '/location',
    cta: 'View Proximity Guide',
    image: sportsImg,
    alt: 'Green sports complex and running track adjacent to forest park and lake',
  },
];

export default function HomeOverviewDirectory() {
  return (
    <div className="bg-[#F8F9F7]">
      {/* Curated Directory to Dedicated Detail Pages */}
      <section className="py-16 sm:py-24 border-b border-[#DCE2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs sm:text-sm font-medium text-[#1B4332] tracking-wide mb-3">
              Explore the Township
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#181C19] tracking-tight leading-[1.12] text-balance">
              Discover each chapter of MANA SKANDA in detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {TOWNSHIP_CHAPTERS.map((chapter) => (
              <Link
                key={chapter.href}
                href={chapter.href}
                className="group bg-white border border-[#DCE2DC] hover:border-[#1B4332]/50 rounded-xl overflow-hidden flex flex-col transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#1B4332]"
              >
                <div className="relative aspect-[16/10] w-full bg-[#EEF1ED] overflow-hidden">
                  <ResilientImage
                    src={chapter.image}
                    alt={chapter.alt}
                    fallbackTitle={chapter.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#525C54]">
                      <span className="font-mono tabular-nums text-[#1B4332] mr-2">
                        {chapter.index}.
                      </span>
                      {chapter.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                      {chapter.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-[#525C54] leading-relaxed">
                      {chapter.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DCE2DC] inline-flex items-center gap-2 text-sm font-semibold text-[#1B4332]">
                    <span>{chapter.cta}</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet RERA Trust & Site Visit Banner */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EEF1ED] border border-[#DCE2DC] rounded-xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#1B4332] mb-2">
                <ShieldCheck className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-semibold text-[#181C19]">
                  RERA Approved · Completion {RERA_DETAILS.completion}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
                Book a private tour or request Phase 1 floor plans
              </h2>
              <p className="mt-2 font-mono text-xs text-[#525C54] break-all tabular-nums">
                RERA: {RERA_DETAILS.numbers[0]} &amp; 008522
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] text-sm font-medium text-white bg-[#1B4332] hover:bg-[#133024] rounded-md transition-colors whitespace-nowrap"
              >
                <span>Schedule Site Visit</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+918926267958"
                className="inline-flex items-center justify-center px-5 py-3.5 min-h-[46px] text-sm font-medium text-[#181C19] bg-white border border-[#DCE2DC] hover:border-[#1B4332] rounded-md transition-colors whitespace-nowrap tabular-nums"
              >
                +91 89262 67958
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
