import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WiproSarjapurLanding from '@/components/WiproSarjapurLanding';
import { WIPRO_SARJAPUR_FAQS } from '@/lib/wipro-sarjapur-data';

const PAGE_TITLE =
  'Premium Apartments Near Wipro Sarjapur | MANA SKANDA 3 & 3.5 BHK from ₹1.75 Cr';
const PAGE_DESCRIPTION =
  'Explore premium apartments near Wipro Sarjapur at MANA SKANDA, a 100+ acre child-centric township on Varthur-Sarjapur Road. 3 & 3.5 BHK from ₹1.75 Cr. Fill the form for details.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'Premium Apartments Near Wipro Sarjapur',
    'apartments on Sarjapur Road',
    '3 BHK apartments near Wipro Sarjapur',
    'luxury apartments Varthur Sarjapur Road',
    'integrated township East Bangalore',
    'apartments near Whitefield',
    '3.5 BHK apartments Sarjapur',
    'apartments near Wipro Corporate Office',
    'township apartments East Bangalore',
    'apartments near Whitefield ITPL',
    'apartments near international schools Sarjapur',
    'MANA SKANDA Sarjapur',
  ],
  alternates: {
    canonical: '/premium-apartments-near-wipro-sarjapur',
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/premium-apartments-near-wipro-sarjapur',
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
  mainEntity: WIPRO_SARJAPUR_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function PremiumApartmentsNearWiproSarjapurPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F7] text-[#181C19]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <Navbar />
      <main className="flex-1">
        <WiproSarjapurLanding />
      </main>
      <Footer />
    </div>
  );
}
