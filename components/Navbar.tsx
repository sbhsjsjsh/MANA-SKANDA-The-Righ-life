'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Overview', href: '/' },
  { label: 'Masterplan', href: '/masterplan' },
  { label: 'Residences', href: '/residences' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Location', href: '/location' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 h-16 bg-[#F8F9F7]/95 backdrop-blur-md border-b border-[#DCE2DC]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Wordmark */}
        <Link
          href="/"
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#181C19] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4332]"
        >
          MANA SKANDA
        </Link>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium underline-offset-8 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4332] ${
                  isActive
                    ? 'text-[#1B4332] underline decoration-[#1B4332]'
                    : 'text-[#525C54] hover:text-[#181C19] hover:underline'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 min-h-[40px] text-sm font-medium text-white bg-[#1B4332] hover:bg-[#133024] rounded-md transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
          >
            Schedule Visit
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#181C19] hover:bg-[#EEF1ED] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F8F9F7] border-b border-[#DCE2DC] px-4 py-5 shadow-sm">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center min-h-[44px] px-3 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#EEF1ED] text-[#1B4332]'
                      : 'text-[#181C19] hover:bg-[#EEF1ED]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#DCE2DC]">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#1B4332] hover:bg-[#133024] rounded-md transition-colors"
              >
                Schedule Visit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
