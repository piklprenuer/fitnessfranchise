import { Franchise } from '@/lib/franchises';
import { MapPin, Globe, TrendingUp, ChevronRight, Clock } from 'lucide-react';
import Link from 'next/link';

const categoryColors: Record<string, string> = {
  gym: 'bg-blue-100 text-blue-700',
  pilates: 'bg-pink-100 text-pink-700',
  'functional-training': 'bg-orange-100 text-orange-700',
  boutique: 'bg-purple-100 text-purple-700',
};

const categoryLabels: Record<string, string> = {
  gym: 'Gym',
  pilates: 'Pilates',
  'functional-training': 'Functional',
  boutique: 'Boutique',
};

const formatLabels: Record<string, string> = {
  '24/7': '24/7 Access',
  'class-based': 'Class Based',
  hybrid: 'Hybrid',
};

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(amount);

export default function FranchiseCard({ franchise }: { franchise: Franchise }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col group">
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[franchise.category] || 'bg-slate-100 text-slate-600'}`}>
                {categoryLabels[franchise.category] || franchise.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                {formatLabels[franchise.format] || franchise.format}
              </span>
            </div>
            <h3 className="font-display text-xl text-slate-900">{franchise.name}</h3>
            {franchise.tagline && (
              <p className="text-slate-500 text-xs mt-0.5 italic">{franchise.tagline}</p>
            )}
          </div>
          <div className="w-14 h-14 rounded-xl bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[#1e3a8a] font-bold text-lg">{franchise.shortName.charAt(0)}</span>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{franchise.description}</p>
      </div>

      <div className="px-6 pb-4 grid grid-cols-2 gap-3">
        {franchise.totalInvestmentRange && (
          <div className="flex items-start gap-2">
            <TrendingUp size={14} className="text-[#1e3a8a] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Investment</p>
              <p className="text-xs font-semibold text-slate-800">
                {formatCurrency(franchise.totalInvestmentRange.min)}–{formatCurrency(franchise.totalInvestmentRange.max)}
              </p>
            </div>
          </div>
        )}
        {franchise.australianLocations ? (
          <div className="flex items-start gap-2">
            <MapPin size={14} className="text-[#1e3a8a] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Australian Locations</p>
              <p className="text-xs font-semibold text-slate-800">{franchise.australianLocations}+</p>
            </div>
          </div>
        ) : franchise.globalLocations ? (
          <div className="flex items-start gap-2">
            <Globe size={14} className="text-[#1e3a8a] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Global Locations</p>
              <p className="text-xs font-semibold text-slate-800">{franchise.globalLocations}+</p>
            </div>
          </div>
        ) : null}
        {franchise.founded && (
          <div className="flex items-start gap-2">
            <Clock size={14} className="text-[#1e3a8a] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Founded</p>
              <p className="text-xs font-semibold text-slate-800">{franchise.founded}</p>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 pb-4 flex-1">
        <ul className="space-y-1.5">
          {franchise.keyFeatures.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
              <ChevronRight size={14} className="text-[#1e3a8a] mt-0.5 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {franchise.fees?.initialFranchiseFee && (
        <div className="mx-6 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-xs text-slate-500 mb-1">Franchise Fee</p>
          <p className="text-sm font-semibold text-slate-800">{franchise.fees.initialFranchiseFee}</p>
          {franchise.fees.monthlyRoyaltyFee && (
            <p className="text-xs text-slate-500 mt-1">Royalty: {franchise.fees.monthlyRoyaltyFee}</p>
          )}
        </div>
      )}

      <div className="px-6 pb-6">
        <Link
          href="#get-matched"
          className="w-full text-center block py-3 px-4 rounded-lg bg-[#1e3a8a]/5 text-[#1e3a8a] font-semibold text-sm hover:bg-[#1e3a8a] hover:text-white transition-all duration-200 group-hover:bg-[#1e3a8a] group-hover:text-white"
        >
          Get Full Details →
        </Link>
      </div>
    </div>
  );
}
// updated
