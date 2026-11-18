import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import EnquiryAndReraSection from '@/components/EnquiryAndReraSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Schedule Site Visit & RERA | Mana Skanda Bangalore',
  description:
    'Book a private tour, request 3 & 3.5 BHK floor plans, or verify Karnataka RERA details for Mana Skanda – The Right Life on Sarjapur Road.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Schedule Site Visit & RERA | Mana Skanda Bangalore',
    description:
      'Book a private tour, request 3 & 3.5 BHK floor plans, or verify Karnataka RERA details for Mana Skanda – The Right Life.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Site Visit & RERA | Mana Skanda Bangalore',
    description:
      'Book a private tour, request 3 & 3.5 BHK floor plans, or verify Karnataka RERA details for Mana Skanda – The Right Life.',
  },
};

interface ContactPageProps {
  searchParams: Promise<{ unit?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialUnit = params?.unit === '3.5bhk' ? '3.5bhk' : '3bhk';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#181C19]">
      <Navbar />
      <main className="flex-1">
        <PageHeader
          kicker="Site Visits, RERA & Sales Desk"
          title="Schedule a Private Township Tour"
          description="Connect directly on +91 89262 67958 or request the Phase 1 masterplan brochure, floor plans, and unit-wise cost sheet."
        />
        <EnquiryAndReraSection initialUnit={initialUnit} />
      </main>
      <Footer />
    </div>
  );
}
