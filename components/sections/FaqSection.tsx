'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a fitness franchise cost in Australia?',
    answer: 'Fitness franchise costs in Australia vary widely depending on the brand and format. Entry-level boutique studios like Pilates or yoga franchises typically start from $120,000–$200,000. Mid-range functional fitness and group training franchises generally cost $180,000–$350,000. Premium full-service gym franchises can range from $300,000–$600,000+. These figures usually include the franchise fee, fit-out costs, equipment, and initial training. Our free matching service helps you find franchises that suit your specific budget.',
  },
  {
    question: 'What is the best fitness franchise to buy in Australia?',
    answer: 'The best fitness franchise depends on your budget, location, and personal interests. Gym franchises like 24/7 health clubs offer high membership volumes and multiple revenue streams. Pilates and yoga studios typically have lower staff requirements and strong member loyalty. Functional fitness franchises benefit from strong community culture and recurring class-based revenue. Recovery and wellness centres are an emerging category with very high margins. We compare all major Australian fitness franchises and match you with the best options for your situation.',
  },
  {
    question: 'How long does it take to open a fitness franchise in Australia?',
    answer: 'The timeline from signing a franchise agreement to opening day is typically 6–12 months. This includes site selection (1–3 months), lease negotiation (1–2 months), fit-out and construction (2–4 months), staff recruitment and training (1–2 months), and pre-opening marketing. Some smaller format studios can open faster — as little as 3–4 months. Your franchisor will guide you through every step of the process.',
  },
  {
    question: 'Do I need experience in fitness to buy a fitness franchise?',
    answer: 'No — most fitness franchises do not require you to be a personal trainer or fitness professional. What matters more is business acumen, people skills, and a passion for health and wellness. Franchisors provide comprehensive training on everything from operations and marketing to staff management and financial reporting. Many successful franchise owners come from backgrounds in business, finance, real estate, and retail.',
  },
  {
    question: 'How much money can I make from a fitness franchise?',
    answer: 'Earnings vary significantly based on location, brand, size, and how well the business is run. A well-performing boutique studio can generate $150,000–$400,000 in annual revenue. A full-service gym franchise in a strong location can achieve $500,000–$1,500,000+ per year. Most franchisors provide you with a financial model during the discovery process. We recommend speaking directly with existing franchisees to understand real-world performance.',
  },
  {
    question: 'What financing options are available for fitness franchises?',
    answer: 'Several financing options are available in Australia. Major banks including ANZ, Commonwealth, NAB, and Westpac all have franchise lending divisions and are familiar with established fitness brands. The federal government\'s Small Business Loan Guarantee Scheme can also assist. Many franchisors have preferred lending partners with streamlined approval processes. Typically, lenders require a 30–50% deposit with the remainder financed over 5–7 years.',
  },
  {
    question: 'Is FitnessFranchise.com.au free to use?',
    answer: 'Yes — our service is completely free for prospective franchisees. We are compensated by franchise brands when a successful match is made, similar to how a recruiter works. There is no cost, no obligation, and no pressure. You can explore opportunities, compare brands, and speak with franchisors entirely at your own pace.',
  },
  {
    question: 'How does the matching process work?',
    answer: 'It\'s simple. You complete our short 2-minute questionnaire telling us about your budget, location, interests, and timeline. Our team reviews your profile and identifies the most suitable franchise opportunities. Within 24 hours we\'ll reach out to introduce you to the relevant brands and arrange discovery calls. From there, you speak directly with the franchise teams and make your own informed decision.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-widest mb-3">Common Questions</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about buying a fitness franchise in Australia.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 text-base leading-snug">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#1e3a8a] flex-shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Have a question not answered here?{' '}
          <a href="#get-matched" className="text-[#1e3a8a] font-semibold hover:underline">
            Get in touch with our team →
          </a>
        </p>
      </div>
    </section>
  );
}
