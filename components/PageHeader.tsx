import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  description: string;
}

export default function PageHeader({ kicker, title, description }: PageHeaderProps) {
  return (
    <div className="bg-[#EEF1ED] border-b border-[#DCE2DC] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#525C54] hover:text-[#181C19] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Overview</span>
        </Link>
        <p className="text-xs sm:text-sm font-medium text-[#1B4332] tracking-wide mb-2">
          {kicker}
        </p>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#181C19] tracking-tight leading-[1.1] max-w-3xl text-balance">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#525C54] max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
