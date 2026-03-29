import Link from 'next/link';

export default function SeoTextSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <div>
            <p className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 leading-tight mb-6">
              Australia's Leading Fitness Franchise Comparison Platform
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                FitnessFranchise.com.au is Australia's dedicated platform for comparing and researching fitness franchise opportunities. Whether you're interested in opening a gym franchise, a Pilates studio, a functional fitness centre, or a recovery and wellness clinic — we help you find the right opportunity for your budget, location, and lifestyle goals.
              </p>
              <p>
                The Australian fitness industry is one of the fastest growing sectors in the country, valued at over $3.5 billion and continuing to expand. With more Australians prioritising health and wellness than ever before, there has never been a better time to enter the fitness business as a franchise owner.
              </p>
              <p>
                Unlike starting a gym from scratch, buying a fitness franchise gives you the advantage of a proven business model, established brand recognition, comprehensive training and support, and a network of fellow franchisees to learn from. The risk is significantly reduced compared to an independent start-up.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-widest mb-4">Why Franchise?</p>
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 leading-tight mb-6">
              Why Buy a Fitness Franchise Instead of Starting Your Own Gym?
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Starting an independent gym or fitness studio is exciting — but it comes with significant risk. You need to build brand awareness from zero, develop your own systems and processes, and figure out marketing, operations, and retention without any guidance.
              </p>
              <p>
                A fitness franchise removes most of that guesswork. You get a recognised brand that members already trust, a proven membership model, marketing support, supplier relationships, and ongoing operational guidance. Most established fitness franchises have refined their model over many years and hundreds of locations.
              </p>
              <p>
                Our free matching service helps you cut through the noise and find the franchise that genuinely suits your budget, your market, and your personal goals. We work with gym franchises, Pilates studio franchises, functional fitness franchises, and recovery centre franchises across all Australian states and territories.
              </p>
              <Link
                href="#get-matched"
                className="inline-flex items-center gap-2 mt-4 font-semibold text-[#1e3a8a] hover:underline"
              >
                Find your ideal franchise — free →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
