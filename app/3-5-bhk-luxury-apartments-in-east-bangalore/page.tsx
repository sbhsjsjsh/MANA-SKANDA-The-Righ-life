import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EastBangalore35BhkLanding from '@/components/EastBangalore35BhkLanding';
import { EAST_BANGALORE_35BHK_FAQS } from '@/lib/east-bangalore-35bhk-data';

const PAGE_TITLE =
  '3.5 BHK Luxury Apartments in East Bangalore | MANA SKANDA from ₹2.35 Cr';
const PAGE_DESCRIPTION =
  'Explore 3.5 BHK luxury apartments in East Bangalore at MANA SKANDA, a 100+ acre child-centric township on Varthur-Sarjapur Road. 2067-2244 sq.ft. from ₹2.35 Cr. Fill the form for details.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    '3.5 BHK Luxury Apartments in East Bangalore',
    '3.5 BHK apartments Sarjapur Road',
    'luxury apartments Varthur Sarjapur Road',
    '3.5 BHK near Whitefield',
    'integrated township East Bangalore',
    'large apartments near Wipro Sarjapur',
    'premium 3.5 BHK Bangalore',
    '3.5 BHK flats East Bangalore',
    'luxury apartments Sarjapur Road',
    '3.5 BHK near Wipro Sarjapur',
    'premium apartments Whitefield',
    'township apartments East Bangalore',
    'large apartments near international schools',
    'MANA SKANDA 3.5 BHK',
  ],
  alternates: {
    canonical: '/3-5-bhk-luxury-apartments-in-east-bangalore',
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/3-5-bhk-luxury-apartments-in-east-bangalore',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: EAST_BANGALORE_35BHK_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function ThreePointFiveBhkEastBangalorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#181C19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <Navbar />
      <main className="flex-1">
        <EastBangalore35BhkLanding />
      </main>
      <Footer />
    </div>
  );
}
