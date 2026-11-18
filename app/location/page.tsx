import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import LocationProximity from '@/components/LocationProximity';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Location & Nearby Schools | Mana Skanda Bangalore',
  description:
    'Main-road frontage on Varthur–Sarjapur Road with direct access to ORR, Sarjapur SEZ, Whitefield–ITPL, and top international schools within 0–5 km.',
  alternates: {
    canonical: '/location',
  },
  openGraph: {
    title: 'Location & Nearby Schools | Mana Skanda Bangalore',
    description:
      'Main-road frontage on Varthur–Sarjapur Road with direct access to ORR, Sarjapur SEZ, Whitefield–ITPL, and top international schools.',
    url: '/location',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location & Nearby Schools | Mana Skanda Bangalore',
    description:
      'Main-road frontage on Varthur–Sarjapur Road with direct access to ORR, Sarjapur SEZ, Whitefield–ITPL, and top international schools.',
  },
};

export default function LocationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#181C19]">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          kicker="Connectivity & Proximity"
          title="Varthur–Sarjapur Road, East Bangalore"
          description="Effortless main-road frontage connecting ORR, Sarjapur SEZ, and Whitefield–ITPL—surrounded by top international schools within 0–5 km."
        />
        <LocationProximity />
      </main>
      <Footer />
    </div>
  );
}
