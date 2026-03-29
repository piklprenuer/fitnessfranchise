import LeadForm from '@/components/form/LeadForm';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Free, no-obligation matching service',
  'Compare franchises side by side',
  'Speak directly with franchise teams',
  'Expert guidance throughout the process',
];

export default function LeadFormSection() {
  return (
    <section id="get-matched" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — copy */}
          <div className="lg:pt-4">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-4">Free Matching Service</p>
            <h2 className="font-display text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
              Find Your Ideal<br />Franchise in Minutes
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Tell us what you're looking for and we'll match you with the best fitness franchise opportunities in Australia — tailored to your budget, location, and interests.
            </p>
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{b}</span>
                </li>
              ))}
            </ul>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <p className="text-slate-700 italic text-sm leading-relaxed mb-4">
                "I had no idea where to start. FitnessFranchise.com.au matched me with three incredible opportunities within a day. I'm now 6 months into running my own Pilates studio."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
                  SK
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Sarah K.</p>
                  <p className="text-slate-500 text-xs">Studio owner, Sydney NSW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
