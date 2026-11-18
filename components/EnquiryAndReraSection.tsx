'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { WHY_CHOOSE_POINTS, RERA_DETAILS } from '@/lib/project-data';

interface EnquiryAndReraSectionProps {
  initialUnit?: '3bhk' | '3.5bhk';
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  inquiryType: 'site-visit' | 'brochure';
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
}

export default function EnquiryAndReraSection({
  initialUnit = '3bhk',
}: EnquiryAndReraSectionProps) {
  const [selectedUnit, setSelectedUnit] = useState<'3bhk' | '3.5bhk'>(initialUnit);
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: 'site-visit',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }
    const cleanPhone = form.phone.replace(/[\s\-+]/g, '');
    if (!/^(91)?[6-9]\d{9}$/.test(cleanPhone) && !/^\d{10,12}$/.test(cleanPhone)) {
      nextErrors.phone = 'Enter a valid 10-digit mobile number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const code = `MS-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(code);
  };

  return (
    <section id="enquire" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why Choose MANA SKANDA + RERA Details */}
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm font-medium text-[#1B4332] tracking-wide mb-3">
              05. Why Choose MANA SKANDA &amp; RERA
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181C19] tracking-tight leading-[1.15] text-balance">
              Engineered for enduring family value in East Bangalore
            </h2>

            <ol className="mt-8 divide-y divide-[#DCE2DC] border-y border-[#DCE2DC]">
              {WHY_CHOOSE_POINTS.map((point) => (
                <li key={point.index} className="py-5 flex items-start gap-5">
                  <span className="font-mono text-xs font-semibold text-[#1B4332] pt-1 tabular-nums shrink-0">
                    {point.index}.
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#181C19]">{point.title}</h3>
                    <p className="mt-1 text-sm text-[#525C54] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* RERA & Completion Block */}
            <div id="rera" className="mt-8 bg-[#F8F9F7] border border-[#DCE2DC] rounded-xl p-6">
              <div className="flex items-center gap-2.5 text-[#1B4332]">
                <ShieldCheck className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-[#181C19]">
                  RERA Registration &amp; Possession Timeline
                </h3>
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-[#525C54]">Karnataka RERA Numbers</dt>
                  <dd className="mt-1 font-mono text-xs sm:text-sm text-[#181C19] break-all tabular-nums space-y-1">
                    {RERA_DETAILS.numbers.map((num) => (
                      <div key={num}>{num}</div>
                    ))}
                  </dd>
                </div>
                <div className="pt-3 border-t border-[#DCE2DC] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs text-[#525C54]">Completion Timeline</dt>
                    <dd className="mt-0.5 font-semibold text-[#181C19] tabular-nums">
                      {RERA_DETAILS.completion}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#525C54]">Phase 1 Scope</dt>
                    <dd className="mt-0.5 font-semibold text-[#181C19] tabular-nums">
                      31 Acres · 3 Towers (3B+G+35)
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Validated Site Visit & Cost Sheet Capture Form */}
          <div className="lg:col-span-6 bg-[#F8F9F7] border border-[#DCE2DC] rounded-xl p-6 sm:p-9">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181C19] tracking-tight">
              Schedule a Private Site Visit or Request Floor Plans
            </h3>
            <p className="mt-2 text-sm text-[#525C54]">
              Receive the Phase 1 masterplan brochure, Vastu floor plans, and unit-wise cost sheet for 3 BHK or 3.5 BHK residences.
            </p>

            {submittedRef ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-8 bg-white border border-[#1B4332]/30 rounded-xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 text-[#1B4332]">
                  <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                  <h4 className="font-display text-2xl font-semibold text-[#181C19]">
                    Request Confirmed
                  </h4>
                </div>
                <p className="mt-3 text-sm text-[#525C54] leading-relaxed">
                  Thank you, <span className="font-semibold text-[#181C19]">{form.fullName}</span>. Your{' '}
                  {form.inquiryType === 'site-visit'
                    ? 'private site tour request'
                    : 'floor plan & brochure request'}{' '}
                  for a{' '}
                  <span className="font-semibold text-[#181C19]">
                    {selectedUnit === '3bhk' ? '3 BHK (1661 – 1953 sq.ft.)' : '3.5 BHK (2067 – 2244 sq.ft.)'}
                  </span>{' '}
                  residence at MANA SKANDA – The Right Life has been registered.
                </p>
                <div className="mt-5 pt-4 border-t border-[#DCE2DC] flex flex-wrap items-center justify-between gap-3 text-xs text-[#525C54]">
                  <span className="font-mono tabular-nums">Reference: {submittedRef}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRef(null);
                      setForm({
                        fullName: '',
                        phone: '',
                        email: '',
                        inquiryType: 'site-visit',
                      });
                    }}
                    className="font-medium text-[#1B4332] hover:underline underline-offset-4 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
                {/* Inquiry Type Segmented Selector */}
                <div>
                  <span className="block text-xs font-semibold text-[#181C19] mb-2">
                    Request Type
                  </span>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#EEF1ED] border border-[#DCE2DC] rounded-lg">
                    <button
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, inquiryType: 'site-visit' }))}
                      className={`py-2.5 px-3 min-h-[42px] text-xs sm:text-sm font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        form.inquiryType === 'site-visit'
                          ? 'bg-white text-[#181C19] shadow-xs'
                          : 'text-[#525C54] hover:text-[#181C19]'
                      }`}
                    >
                      Private Site Visit
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, inquiryType: 'brochure' }))}
                      className={`py-2.5 px-3 min-h-[42px] text-xs sm:text-sm font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        form.inquiryType === 'brochure'
                          ? 'bg-white text-[#181C19] shadow-xs'
                          : 'text-[#525C54] hover:text-[#181C19]'
                      }`}
                    >
                      Floor Plans &amp; Cost Sheet
                    </button>
                  </div>
                </div>

                {/* Preferred Configuration */}
                <div>
                  <span className="block text-xs font-semibold text-[#181C19] mb-2">
                    Preferred Residence Configuration
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedUnit('3bhk')}
                      className={`text-left p-3.5 rounded-lg border transition-colors cursor-pointer ${
                        selectedUnit === '3bhk'
                          ? 'bg-white border-[#1B4332] ring-1 ring-[#1B4332]'
                          : 'bg-white/60 border-[#DCE2DC] hover:border-[#8DA294]'
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#181C19]">3 BHK Residence</p>
                      <p className="text-xs text-[#525C54] font-mono mt-0.5 tabular-nums">
                        1661 – 1953 sq.ft. · ₹1.75 Cr*
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedUnit('3.5bhk')}
                      className={`text-left p-3.5 rounded-lg border transition-colors cursor-pointer ${
                        selectedUnit === '3.5bhk'
                          ? 'bg-white border-[#1B4332] ring-1 ring-[#1B4332]'
                          : 'bg-white/60 border-[#DCE2DC] hover:border-[#8DA294]'
                      }`}
                    >
                      <p className="text-sm font-semibold text-[#181C19]">3.5 BHK Residence</p>
                      <p className="text-xs text-[#525C54] font-mono mt-0.5 tabular-nums">
                        2067 – 2244 sq.ft. · ₹2.35 Cr*
                      </p>
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-semibold text-[#181C19] mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                    placeholder="e.g., Ananya Rao"
                    className={`w-full min-h-[46px] px-4 py-2.5 bg-white border rounded-md text-sm text-[#181C19] placeholder:text-[#7A857D] focus:outline-2 focus:outline-[#1B4332] ${
                      errors.fullName ? 'border-[#B42318]' : 'border-[#DCE2DC]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lead-phone" className="block text-xs font-semibold text-[#181C19] mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="98765 43210"
                      className={`w-full min-h-[46px] px-4 py-2.5 bg-white border rounded-md text-sm text-[#181C19] placeholder:text-[#7A857D] focus:outline-2 focus:outline-[#1B4332] ${
                        errors.phone ? 'border-[#B42318]' : 'border-[#DCE2DC]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="block text-xs font-semibold text-[#181C19] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="ananya@example.com"
                      className={`w-full min-h-[46px] px-4 py-2.5 bg-white border rounded-md text-sm text-[#181C19] placeholder:text-[#7A857D] focus:outline-2 focus:outline-[#1B4332] ${
                        errors.email ? 'border-[#B42318]' : 'border-[#DCE2DC]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#B42318]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-[#1B4332] hover:bg-[#133024] rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
                >
                  {form.inquiryType === 'site-visit'
                    ? 'Confirm Private Site Visit'
                    : 'Send Floor Plans & Cost Sheet'}
                </button>

                <div className="pt-4 border-t border-[#DCE2DC] flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="tel:+918926267958"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#181C19] hover:text-[#1B4332] transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#1B4332]" aria-hidden="true" />
                    <span>+91 89262 67958</span>
                  </a>
                  <a
                    href="https://wa.me/918926267958?text=Hello%2C%20I%20would%20like%20details%20for%20MANA%20SKANDA%20%E2%80%93%20The%20Right%20Life."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1B4332] hover:underline underline-offset-4"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
