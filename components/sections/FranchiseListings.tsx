import { franchises } from '@/lib/franchises';
import FranchiseCard from '@/components/ui/FranchiseCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FranchiseListings() {
  // Show first 6 franchises
  const featured = franchises.slice(0, 6);

  return (
    <section id="franchises" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-widest mb-3">Opportunities</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">Featured Franchises</h2>
            <p className="text-slate-600 text-lg mt-3 max-w-xl">
              Real Australian fitness franchise opportunities — with transparent investment figures and fees.
            </p>
          </div>
          <Link href="#get-matched" className="btn-primary whitespace-nowrap">
            Get Matched Free <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((franchise) => (
            <FranchiseCard key={franchise.id} franchise={franchise} />
          ))}
        </div>

        {franchises.length > 6 && (
          <div className="mt-10 text-center py-8 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-600 mb-4">
              <span className="font-semibold text-slate-900">+{franchises.length - 6} more franchises</span> available after completing your free profile.
            </p>
            <Link href="#get-matched" className="btn-primary">
              Unlock All Opportunities <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
