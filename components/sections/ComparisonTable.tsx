import { Check, Minus } from 'lucide-react';
import { formatCurrency } from '@/lib/franchises';

const brands = [
  {
    name: 'IronCore Fitness',
    category: 'Gym',
    investment: '$250k–$450k',
    recurring: true,
    training: true,
    national: true,
    siteSelection: true,
    lowStaff: false,
  },
  {
    name: 'Studio Reform',
    category: 'Pilates',
    investment: '$150k–$280k',
    recurring: true,
    training: true,
    national: true,
    siteSelection: false,
    lowStaff: true,
  },
  {
    name: 'Apex Performance',
    category: 'Functional',
    investment: '$180k–$320k',
    recurring: true,
    training: true,
    national: false,
    siteSelection: true,
    lowStaff: false,
  },
  {
    name: 'Revive Recovery',
    category: 'Recovery',
    investment: '$200k–$380k',
    recurring: true,
    training: true,
    national: false,
    siteSelection: false,
    lowStaff: true,
  },
];

const features = [
  { key: 'recurring', label: 'Recurring Revenue Model' },
  { key: 'training', label: 'Full Training Included' },
  { key: 'national', label: 'National Marketing Fund' },
  { key: 'siteSelection', label: 'Site Selection Assistance' },
  { key: 'lowStaff', label: 'Low Staff Model' },
];

export default function ComparisonTable() {
  return (
    <section id="compare" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Side by Side</p>
          <h2 className="section-heading mb-4">Compare Top Brands</h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            A quick snapshot comparison of our featured franchise brands.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-6 py-5 text-slate-500 text-sm font-medium w-52">Feature</th>
                {brands.map((b) => (
                  <th key={b.name} className="text-center px-4 py-5">
                    <p className="font-display text-slate-900 text-base">{b.name}</p>
                    <span className="text-xs font-medium text-slate-500">{b.category}</span>
                  </th>
                ))}
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50">
                <td className="px-6 py-4 text-sm font-semibold text-slate-700">Investment Range</td>
                {brands.map((b) => (
                  <td key={b.name} className="text-center px-4 py-4 text-sm font-semibold text-brand-700">
                    {b.investment}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {features.map((f) => (
                <tr key={f.key} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-700">{f.label}</td>
                  {brands.map((b) => (
                    <td key={b.name} className="text-center px-4 py-4">
                      {(b as any)[f.key] ? (
                        <Check size={18} className="text-brand-600 mx-auto" />
                      ) : (
                        <Minus size={18} className="text-slate-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">
          * Data is indicative. Full details provided after completing your free enquiry.
        </p>
      </div>
    </section>
  );
}
