import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#13221A] text-[#C7D4CB] border-t border-white/10 pb-20 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold text-white tracking-tight">
              MANA SKANDA – The Right Life
            </p>
            <p className="mt-2 text-sm text-[#A8C8B4]">
              Varthur–Sarjapur Road, East Bangalore (Near Whitefield)
            </p>
            <p className="mt-3 text-xs text-[#9AA99F] max-w-md leading-relaxed">
              100+ Acre Forest-Themed Child-Centric Integrated Township combining luxury 3 &amp; 3.5 BHK residences, commercial avenues, curated retail, 6.5 acres of sports facilities, and a 3.5 lakh sq.ft. clubhouse ecosystem.
            </p>
            <p className="mt-4 text-sm text-white font-medium tabular-nums">
              Sales &amp; Site Visits:{' '}
              <a
                href="tel:+918926267958"
                className="underline underline-offset-4 hover:text-[#A8C8B4] transition-colors"
              >
                +91 89262 67958
              </a>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-white mb-3">Pages</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/masterplan" className="hover:text-white transition-colors">
                  Masterplan &amp; Open Spaces
                </Link>
              </li>
              <li>
                <Link href="/residences" className="hover:text-white transition-colors">
                  3 &amp; 3.5 BHK Residences
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-white transition-colors">
                  Clubhouse &amp; Sports
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-white transition-colors">
                  Location &amp; Schools
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Visit &amp; RERA
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-white mb-3">RERA Registration</p>
            <div className="font-mono text-xs text-[#A8C8B4] space-y-1 break-all tabular-nums">
              <p>PRM/KA/RERA/1251/308/PR/120326/008521</p>
              <p>PRM/KA/RERA/1251/308/PR/120326/008522</p>
            </div>
            <p className="mt-3 text-xs text-[#9AA99F] tabular-nums">
              Possession / Completion: 2028 onwards
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9AA99F]">
          <p>© {new Date().getFullYear()} MANA SKANDA – The Right Life. All rights reserved.</p>
          <p>
            *Starting prices and configurations are indicative for Phase 1 (31 Acres · 3B + G + 35 Floors).
          </p>
        </div>
      </div>
    </footer>
  );
}
