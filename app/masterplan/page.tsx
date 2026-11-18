import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import MasterplanBento from '@/components/MasterplanBento';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Masterplan & Forest Province | Mana Skanda Bangalore',
  description:
    'Explore the 100+ acre forest-themed child-centric township masterplan on Varthur-Sarjapur Road with 84% open spaces, 31-acre Phase 1, and no-vehicle pedestrian zones.',
  alternates: {
    canonical: '/masterplan',
  },
  openGraph: {
    title: 'Masterplan & Forest Province | Mana Skanda Bangalore',
    description:
      'Explore the 100+ acre forest-themed child-centric township masterplan with 84% open spaces and no-vehicle pedestrian zones.',
    url: '/masterplan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masterplan & Forest Province | Mana Skanda Bangalore',
    description:
      'Explore the 100+ acre forest-themed child-centric township masterplan with 84% open spaces and no-vehicle pedestrian zones.',
  },
};

export default function MasterplanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#181C19]">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          kicker="Masterplan & Development Scale"
          title="100+ Acre Forest-Themed Child-Centric Township"
          description="Designed around 84% open spaces, vehicle-free pedestrian podiums, and 35-story Vastu towers in Phase 1 (31 Acres)."
        />
        <MasterplanBento />
      </main>
      <Footer />
    </div>
  );
}
