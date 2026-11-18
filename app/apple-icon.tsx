import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1B4332',
          borderRadius: 36,
          border: '4px solid rgba(154, 194, 170, 0.35)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: '#F8F9F7',
            fontFamily: 'Georgia, serif',
          }}
        >
          MS
        </div>
        <div
          style={{
            marginTop: 4,
            fontSize: 16,
            letterSpacing: '0.18em',
            color: '#A8C8B4',
            fontFamily: 'sans-serif',
          }}
        >
          MANA SKANDA
        </div>
      </div>
    ),
    { ...size }
  );
}
