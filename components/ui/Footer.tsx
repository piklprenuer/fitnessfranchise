import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FF</span>
              </div>
              <span className="font-display text-xl text-white">
                Fitness<span className="text-brand-500">Franchise</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Australia's leading fitness franchise comparison and lead matching platform. We help aspiring fitness entrepreneurs find their perfect franchise opportunity.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#franchises" className="hover:text-white transition-colors">Browse Franchises</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="#compare" className="hover:text-white transition-colors">Compare Brands</Link></li>
              <li><Link href="#get-matched" className="hover:text-white transition-colors">Get Matched</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white transition-colors cursor-pointer">Gym Franchises</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Pilates Studios</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Functional Fitness</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Recovery Centres</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} FitnessFranchise.com.au. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-4 text-center">
          FitnessFranchise.com.au is a lead generation and comparison service. We are not financial advisors. Investment figures are indicative only. Always conduct independent due diligence before making any investment decision.
        </p>
      </div>
    </footer>
  );
}
