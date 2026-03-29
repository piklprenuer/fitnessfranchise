import { franchises, formatCurrency } from '@/lib/franchises';
import { notFound } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import LeadFormSection from '@/components/sections/LeadFormSection';
import { MapPin, Calendar, TrendingUp, ChevronRight, ArrowLeft } from 'lucide-react';
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
  Gym: 'badge-gym',
  Pilates: 'badge-pilates',
  Functional: 'badge-functional',
  Recovery: 'badge-recovery',
};

export default function FranchisePage({ params }: { params: { slug: string } }) {
  const franchise = franchises.find((f) => f.id === params.slug);
  if (!franchise) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-slate-950 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/#franchises" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors">
              <ArrowLeft size={14} /> Back to Franchises
            </Link>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-brand-600/20 border border-brand-600/30 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-400 font-bold text-3xl">{franchise.name.charAt(0)}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[franchise.category]}`}>
                    {franchise.category}
                  </span>
                  {franchise.featured && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="font-display text-4xl text-white mb-3">{franchise.name}</h1>
                <p className="text-slate-300 text-lg max-w-2xl">{franchise.description}</p>
                <div className="flex flex-wrap gap-5 mt-5 text-slate-400 text-sm">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp size={14} className="text-brand-400" />
                    {formatCurrency(franchise.investmentMin)} – {formatCurrency(franchise.investmentMax)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-brand-400" />
                    {franchise.locations} locations Australia-wide
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-brand-400" />
                    Est. {franchise.established}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl text-slate-900 mb-8">Key Highlights</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {franchise.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 p-4 bg-brand-50 rounded-xl border border-brand-100">
                  <ChevronRight size={18} className="text-brand-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-800 font-medium text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lead form */}
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
