import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Ready to Find Your Franchise?
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Takes 2 minutes. Free. No obligation. We'll match you with the best opportunities for your budget and location.
        </p>
        <Link href="#get-matched" className="btn-primary text-base px-10 py-4">
          Get Matched Now <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
