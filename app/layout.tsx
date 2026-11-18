import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import FloatingContactCta from '@/components/FloatingContactCta';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const rawAppUrl = process.env.APP_URL;
const SITE_URL =
  rawAppUrl && rawAppUrl.startsWith('http')
    ? rawAppUrl
    : 'https://manaskanda-bangalore.in';

const META_TITLE =
  'Mana Skanda Bangalore | Luxury 3 & 3.5 BHK Apartments in Sarjapur Road';
const META_DESCRIPTION =
  'Explore Mana Skanda – The Right Life, a premium 100+ acre integrated township on Varthur-Sarjapur Road, East Bangalore. Discover spacious 3 & 3.5 BHK apartments starting at ₹1.75 Crore, with nature-inspired living, sports facilities, premium clubhouses, and excellent connectivity.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    'Mana Skanda Bangalore',
    'Mana Skanda The Right Life',
    'Sarjapur Road luxury apartments',
    'Varthur Sarjapur Road township',
    '3 BHK apartments Sarjapur Road',
    '3.5 BHK apartments East Bangalore',
    '100 acre integrated township Bangalore',
    'child centric township Bangalore',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    siteName: 'Mana Skanda – The Right Life',
    url: '/',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ApartmentComplex',
  name: 'MANA SKANDA – The Right Life',
  description: META_DESCRIPTION,
  url: SITE_URL,
  telephone: '+91-89262-67958',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Varthur–Sarjapur Road (Near Whitefield)',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  numberOfAvailableAccommodationUnits: 2000,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '84% Open Spaces', value: true },
    { '@type': 'LocationFeatureSpecification', name: '3.5 Lakh Sq.Ft. Clubhouses', value: true },
    { '@type': 'LocationFeatureSpecification', name: '6.5 Acres Sports Facilities', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Vehicle-Free Child-Centric Zones', value: true },
    { '@type': 'LocationFeatureSpecification', name: '13-Acre Scenic Lake Nearby', value: true },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans bg-[#F8F9F7] text-[#181C19] antialiased selection:bg-[#1B4332] selection:text-white overflow-x-hidden"
      >
        {children}
        <FloatingContactCta />
      </body>
    </html>
  );
}
