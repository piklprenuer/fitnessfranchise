import { ClipboardList, Users, Rocket } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Tell Us About Yourself',
    description: 'Complete our quick 2-minute questionnaire about your budget, location, and fitness business interests.',
  },
  {
    icon: Users,
    number: '02',
    title: 'We Match You',
    description: 'Our team reviews your profile and matches you with the most suitable franchise opportunities in your area.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Connect & Explore',
    description: 'Receive introductions to franchise brands, attend discovery sessions, and make an informed decision.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</p>
          <h2 className="section-heading mb-4">How It Works</h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Getting matched with your ideal franchise takes less than 2 minutes. It's free, with no obligation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center">
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center mb-6 mx-auto">
                    <Icon size={36} className="text-brand-600" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-7 h-7 bg-brand-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number.replace('0', '')}
                  </span>
                </div>
                <h3 className="font-display text-xl text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
