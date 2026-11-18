import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import ResidencesSection from '@/components/ResidencesSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '3 & 3.5 BHK Residences & Pricing | Mana Skanda Bangalore',
  description:
    'View 3 BHK (1661–1953 sq.ft. from ₹1.75 Cr) and 3.5 BHK (2067–2244 sq.ft. from ₹2.35 Cr) Vastu-compliant apartments in Sarjapur Road, East Bangalore.',
  alternates: {
    canonical: '/residences',
  },
  openGraph: {
    title: '3 & 3.5 BHK Residences & Pricing | Mana Skanda Bangalore',
    description:
      'View 3 BHK (1661–1953 sq.ft. from ₹1.75 Cr) and 3.5 BHK (2067–2244 sq.ft. from ₹2.35 Cr) Vastu-compliant homes.',
    url: '/residences',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 & 3.5 BHK Residences & Pricing | Mana Skanda Bangalore',
    description:
      'View 3 BHK (1661–1953 sq.ft. from ₹1.75 Cr) and 3.5 BHK (2067–2244 sq.ft. from ₹2.35 Cr) Vastu-compliant homes.',
  },
};

export default function ResidencesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#181C19]">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          kicker="Residences & Pricing"
          title="3 & 3.5 BHK Vastu-Compliant High-Rise Homes"
          description="3B + G + 35 Floors across 2,000+ premium residences with forest and 13-acre lake views."
        />
        <ResidencesSection />
      </main>
      <Footer />
    </div>
  );
}
