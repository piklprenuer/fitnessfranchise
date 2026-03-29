import { franchises } from '@/lib/franchises';
import { notFound } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import LeadFormSection from '@/components/sections/LeadFormSection';
import { Globe, Calendar, TrendingUp, ChevronRight, ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return franchises.map((f) => ({ slug: f.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const franchise = franchises.find((f) => f.id === params.slug);
  if (!franchise) return {};
  return {
    title: `${franchise.name} Franchise Opportunity | FitnessFranchise.com.au`,
    description: franchise.description,
  };
}

const categoryColors: Record<string, string> = {
  gym: 'bg-blue-100 text-blue-700',
  pilates: 'bg-pink-100 text-pink-700',
  'functional-training': 'bg-orange-100 text-orange-700',
  boutique: 'bg-purple-100 text-purple-700',
};

export default function FranchisePage({ params }: { params: { slug: string } }) {
  const franchise = franchises.find((f) => f.id === params.slug);
  if (!franchise) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="bg-slate-950 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/#franchises" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft size={14} /> Back to Franchises
            </Link>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-[#1e3a8a]/20 border border-[#1e3a8a]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold text-3xl">{franchise.shortName.charAt(0)}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[franchise.category] || 'bg-slate-100 text-slate-600'}`}>
                    {franchise.category}
                  </span>
                </div>
                <h1 className="font-display text-4xl text-white mb-3">{franchise.name}</h1>
                <p className="text-slate-300 text-lg max-w-2xl">{franchise.description}</p>
                <div className="flex flex-wrap gap-5 mt-5 text-slate-400 text-sm">
                  {franchise.totalInvestmentRange && (
                    <span className="flex items-center gap-1.5">
                      <TrendingUp size={14} className="text-blue-400" />
                      ${franchise.totalInvestmentRange.min.toLocaleString()} – ${franchise.totalInvestmentRange.max.toLocaleString()} AUD
                    </span>
                  )}
                  {franchise.australianLocations && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-blue-400" />
                      {franchise.australianLocations}+ locations in Australia
                    </span>
                  )}
                  {franchise.globalLocations && (
                    <span className="flex items-center gap-1.5">
                      <Globe size={14} className="text-blue-400" />
                      {franchise.globalLocations}+ locations globally
                    </span>
                  )}
                  {franchise.founded && (
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-blue-400" />
                      Est. {franchise.founded}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl text-slate-900 mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {franchise.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <ChevronRight size={18} className="text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-800 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-3xl text-slate-900 mb-6">Training & Support</h2>
                <ul className="space-y-3">
                  {franchise.trainingSupport.map((t) => (
                    <li key={t} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <ChevronRight size={18} className="text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-800 text-sm">{t}</span>
                    </li>
                  ))}
                </ul>

                {franchise.fees && (
                  <div className="mt-8">
                    <h2 className="font-display text-3xl text-slate-900 mb-6">Franchise Fees</h2>
                    <div className="space-y-3">
                      {franchise.fees.initialFranchiseFee && (
                        <div className="flex justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 text-sm">Franchise Fee</span>
                          <span className="font-semibold text-slate-900 text-sm">{franchise.fees.initialFranchiseFee}</span>
                        </div>
                      )}
                      {franchise.fees.monthlyRoyaltyFee && (
                        <div className="flex justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 text-sm">Royalty Fee</span>
                          <span className="font-semibold text-slate-900 text-sm">{franchise.fees.monthlyRoyaltyFee}</span>
                        </div>
                      )}
                      {franchise.fees.marketingFee && (
                        <div className="flex justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 text-sm">Marketing Fee</span>
                          <span className="font-semibold text-slate-900 text-sm">{franchise.fees.marketingFee}</span>
                        </div>
                      )}
                      {franchise.fees.franchiseTerm && (
                        <div className="flex justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="text-slate-600 text-sm">Franchise Term</span>
                          <span className="font-semibold text-slate-900 text-sm">{franchise.fees.franchiseTerm}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
