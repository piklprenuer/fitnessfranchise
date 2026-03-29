import { Franchise, formatCurrency } from '@/lib/franchises';
import { MapPin, Calendar, TrendingUp, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const categoryColors: Record<string, string> = {
  Gym: 'badge-gym',
  Pilates: 'badge-pilates',
  Functional: 'badge-functional',
  Recovery: 'badge-recovery',
};

export default function FranchiseCard({ franchise }: { franchise: Franchise }) {
  return (
    <div className="card p-6 flex flex-col gap-5 group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[franchise.category]}`}>
              {franchise.category}
            </span>
            {franchise.featured && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold/10 text-yellow-700 border border-yellow-200">
                Featured
              </span>
            )}
          </div>
          <h3 className="font-display text-xl text-slate-900">{franchise.name}</h3>
        </div>
        {/* Logo placeholder */}
        <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
          <span className="text-brand-600 font-bold text-lg">
            {franchise.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{franchise.description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5">
        {franchise.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
            <ChevronRight size={14} className="text-brand-500 mt-0.5 flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <TrendingUp size={13} className="text-brand-500" />
          <span>{formatCurrency(franchise.investmentMin)}–{formatCurrency(franchise.investmentMax)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <MapPin size={13} className="text-brand-500" />
          <span>{franchise.locations} locations</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Calendar size={13} className="text-brand-500" />
          <span>Est. {franchise.established}</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="#get-matched"
        className="w-full text-center py-3 px-4 rounded-lg bg-brand-50 text-brand-700 font-semibold text-sm hover:bg-brand-600 hover:text-white transition-all duration-200 group-hover:bg-brand-600 group-hover:text-white"
      >
        Get Details →
      </Link>
    </div>
  );
}
