'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '200+', label: 'Franchise Opportunities' },
  { value: '$100k–$500k+', label: 'Investment Range' },
  { value: '3,000+', label: 'Australians Matched' },
];

const trustPoints = [
  'Free matching service',
  'No obligation',
  'Respond within 24 hours',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-100/40 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full animate-pulse" />
            <span className="text-[#1e3a8a] text-xs font-semibold uppercase tracking-wider">Australia's #1 Franchise Matching Service</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.1] mb-6">
            Start Your Own{' '}
            <span className="text-[#1e3a8a]">Fitness Business</span>{' '}
            with a Proven Franchise
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            Compare Australia's leading fitness franchises and find the right opportunity for you. Gyms, Pilates studios, functional fitness and more — all in one place.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {trustPoints.map((p) => (
              <div key={p} className="flex items-center gap-2 text-slate-600 text-sm">
                <CheckCircle2 size={16} className="text-[#1e3a8a] flex-shrink-0" />
                {p}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#get-matched" className="btn-primary text-base px-8 py-4">
              Find Your Ideal Franchise
              <ArrowRight size={18} />
            </Link>
            <Link href="#franchises" className="inline-flex items-center justify-center gap-2 border-2 border-[#1e3a8a] text-[#1e3a8a] font-semibold px-8 py-4 rounded-lg hover:bg-[#1e3a8a] hover:text-white transition-all duration-200 text-base">
              Browse Franchises
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-slate-200 max-w-2xl">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl md:text-3xl text-slate-900 mb-1">{s.value}</p>
              <p className="text-slate-500 text-xs md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}