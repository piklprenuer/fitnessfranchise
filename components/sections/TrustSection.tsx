import { ShieldCheck, Star, Clock, HeadphonesIcon } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Verified Brands Only',
    description: 'Every franchise on our platform is vetted for financial stability, support systems, and franchisee satisfaction.',
  },
  {
    icon: Star,
    title: 'Free & Unbiased',
    description: 'Our matching service is completely free for prospective franchisees. We earn from franchisors, never from you.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'We respond to every enquiry within 24 business hours. No waiting weeks for a follow-up call.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Guidance',
    description: 'Our team has helped over 3,000 Australians navigate the franchise buying process successfully.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="section-heading mb-4">Australia's Trusted Franchise Experts</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We've been connecting aspiring fitness entrepreneurs with Australia's best franchise brands since 2018.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-brand-600" />
                </div>
                <h3 className="font-display text-lg text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 bg-brand-600 rounded-2xl px-8 py-8 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '3,000+', label: 'Australians Helped' },
              { value: '200+', label: 'Franchise Brands Listed' },
              { value: '98%', label: 'Franchisee Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-white mb-1">{s.value}</p>
                <p className="text-brand-200 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
