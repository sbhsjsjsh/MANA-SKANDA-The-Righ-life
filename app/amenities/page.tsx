import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import ClubhouseSportsSection from '@/components/ClubhouseSportsSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Clubhouses, Sports & Lakefront | Mana Skanda Bangalore',
  description:
    'Discover 3.5 lakh sq.ft. of clubhouses with 100+ experiences, 6.5 acres of sports facilities, and a 13-acre scenic lake at Mana Skanda – The Right Life.',
  alternates: {
    canonical: '/amenities',
  },
  openGraph: {
    title: 'Clubhouses, Sports & Lakefront | Mana Skanda Bangalore',
    description:
      'Discover 3.5 lakh sq.ft. of clubhouses with 100+ experiences, 6.5 acres of sports facilities, and a 13-acre scenic lake.',
    url: '/amenities',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clubhouses, Sports & Lakefront | Mana Skanda Bangalore',
    description:
      'Discover 3.5 lakh sq.ft. of clubhouses with 100+ experiences, 6.5 acres of sports facilities, and a 13-acre scenic lake.',
  },
};

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#181C19]">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          kicker="Lifestyle & Sports"
          title="3.5 Lakh Sq.Ft. Clubhouses & 6.5-Acre Sports Arena"
          description="Over 100 unique experiences, tournament-grade athletic facilities, and a 13-acre natural lakefront microclimate."
        />
        <ClubhouseSportsSection />
      </main>
      <Footer />
    </div>
  );
}
