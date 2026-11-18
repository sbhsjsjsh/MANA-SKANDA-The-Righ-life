import { Phone, MessageCircle } from 'lucide-react';

const PHONE_E164 = '+918926267958';
const PHONE_DISPLAY = '89262 67958';
const WHATSAPP_URL =
  'https://wa.me/918926267958?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20MANA%20SKANDA%20%E2%80%93%20The%20Right%20Life.';

export default function FloatingContactCta() {
  return (
    <div
      aria-label="Quick contact actions"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <a
        href={`tel:${PHONE_E164}`}
        aria-label={`Call ${PHONE_DISPLAY}`}
        title={`Call ${PHONE_DISPLAY}`}
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#181C19] hover:bg-[#2C332E] text-white shadow-lg border border-white/15 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181C19]"
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${PHONE_DISPLAY}`}
        title={`WhatsApp ${PHONE_DISPLAY}`}
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1B4332] hover:bg-[#133024] text-white shadow-lg border border-white/15 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
      </a>
    </div>
  );
}
