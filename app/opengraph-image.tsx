import { ImageResponse } from 'next/og';

export const alt =
  'Mana Skanda Bangalore | Luxury 3 & 3.5 BHK Apartments in Sarjapur Road';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#13221A',
          padding: '64px 72px',
          color: '#F8F9F7',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#A8C8B4',
            letterSpacing: '0.06em',
          }}
        >
          <span>VARTHUR–SARJAPUR ROAD · EAST BANGALORE</span>
          <span>100+ ACRE FOREST TOWNSHIP</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              fontFamily: 'Georgia, serif',
              color: '#FFFFFF',
            }}
          >
            MANA SKANDA – The Right Life
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: '#D6E2D9',
              maxWidth: 960,
            }}
          >
            Luxury 3 &amp; 3.5 BHK Vastu-Compliant Apartments starting at ₹1.75 Crore
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 48,
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: 28,
            fontSize: 22,
            color: '#C7D4CB',
          }}
        >
          <span>84% Open Spaces</span>
          <span>3.5L Sq.Ft. Clubhouses</span>
          <span>6.5-Acre Sports</span>
          <span>13-Acre Lakefront</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
