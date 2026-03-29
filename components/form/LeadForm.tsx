'use client';
import { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  budget: string;
  interest: string;
  location: string;
  timeline: string;
};

const TOTAL_STEPS = 5;

const australianStates = [
  'Australian Capital Territory',
  'New South Wales',
  'Northern Territory',
  'Queensland',
  'South Australia',
  'Tasmania',
  'Victoria',
  'Western Australia',
];

const budgetOptions = [
  { value: 'under_100k', label: 'Under $100k' },
  { value: '100k_250k', label: '$100k – $250k' },
  { value: '250k_500k', label: '$250k – $500k' },
  { value: '500k_plus', label: '$500k+' },
];

const interestOptions = [
  { value: 'gym', label: '🏋️ Gym', description: '24/7 gyms, health clubs, strength training' },
  { value: 'pilates', label: '🧘 Pilates', description: 'Reformer studios, mat Pilates, yoga hybrids' },
  { value: 'functional', label: '⚡ Functional Fitness', description: 'HIIT, group training, CrossFit-style' },
  { value: 'recovery', label: '💆 Recovery', description: 'Saunas, ice baths, wellness centres' },
];

const timelineOptions = [
  { value: 'asap', label: 'ASAP', description: 'Ready to move now' },
  { value: '3_6_months', label: '3–6 months', description: 'Planning in the near term' },
  { value: '6_12_months', label: '6–12 months', description: 'Taking my time to research' },
  { value: '12_plus_months', label: '12+ months', description: 'Just exploring for now' },
];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<FormData>({
    name: '', email: '', phone: '',
    budget: '', interest: '', location: '', timeline: '',
  });

  const update = (field: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const validateStep = (): boolean => {
    setError('');
    if (step === 1) {
      if (!data.name.trim()) { setError('Please enter your name.'); return false; }
      if (!/\S+@\S+\.\S+/.test(data.email)) { setError('Please enter a valid email.'); return false; }
      if (!data.phone.trim()) { setError('Please enter your phone number.'); return false; }
    }
    if (step === 2 && !data.budget) { setError('Please select your budget range.'); return false; }
    if (step === 3 && !data.interest) { setError('Please select your area of interest.'); return false; }
    if (step === 4 && !data.location) { setError('Please select your state.'); return false; }
    if (step === 5 && !data.timeline) { setError('Please select your timeline.'); return false; }
    return true;
  };

  const next = () => { if (validateStep()) setStep((s) => s + 1); };
  const back = () => { setError(''); setStep((s) => s - 1); };

  const submit = async () => {
    if (!validateStep()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Submission failed');
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const progress = (step / TOTAL_STEPS) * 100;

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-brand-600" />
        </div>
        <h3 className="font-display text-3xl text-slate-900 mb-3">You're all set!</h3>
        <p className="text-slate-600 text-lg mb-2">
          Thanks, <strong>{data.name.split(' ')[0]}</strong> — we'll match you with the best opportunities.
        </p>
        <p className="text-slate-500 text-sm">
          Expect to hear from us within 24 hours at <strong>{data.email}</strong>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Step {step} of {TOTAL_STEPS}</span>
          <span className="text-xs font-semibold text-brand-600">{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 1 — Contact */}
      {step === 1 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h3 className="font-display text-2xl text-slate-900 mb-1">Let's get started</h3>
            <p className="text-slate-500 text-sm">Tell us a bit about yourself</p>
          </div>
          <div>
            <label className="label">Full Name *</label>
            <input
              className="input-field"
              type="text"
              placeholder="Jane Smith"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
              autoFocus
            />
          </div>
          <div>
            <label className="label">Email Address *</label>
            <input
              className="input-field"
              type="email"
              placeholder="jane@example.com"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
            />
          </div>
          <div>
            <label className="label">Phone Number *</label>
            <input
              className="input-field"
              type="tel"
              placeholder="04xx xxx xxx"
              value={data.phone}
              onChange={(e) => update('phone', e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Step 2 — Budget */}
      {step === 2 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h3 className="font-display text-2xl text-slate-900 mb-1">What's your investment budget?</h3>
            <p className="text-slate-500 text-sm">This helps us match you with suitable franchises</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {budgetOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => update('budget', opt.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-150 font-semibold text-sm ${
                  data.budget === opt.value
                    ? 'border-brand-600 bg-brand-50 text-brand-700'
                    : 'border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 — Interest */}
      {step === 3 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h3 className="font-display text-2xl text-slate-900 mb-1">What type of fitness business?</h3>
            <p className="text-slate-500 text-sm">Select the category that interests you most</p>
          </div>
          <div className="space-y-3">
            {interestOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => update('interest', opt.value)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-150 ${
                  data.interest === opt.value
                    ? 'border-brand-600 bg-brand-50'
                    : 'border-slate-200 hover:border-brand-300 hover:bg-brand-50/50'
                }`}
              >
                <p className={`font-semibold text-sm ${data.interest === opt.value ? 'text-brand-700' : 'text-slate-900'}`}>
                  {opt.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{opt.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4 — Location */}
      {step === 4 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h3 className="font-display text-2xl text-slate-900 mb-1">Where are you located?</h3>
            <p className="text-slate-500 text-sm">We'll find franchises available in your state</p>
          </div>
          <div>
            <label className="label">State / Territory *</label>
            <select
              className="input-field bg-white"
              value={data.location}
              onChange={(e) => update('location', e.target.value)}
            >
              <option value="">Select your state...</option>
              {australianStates.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 5 — Timeline */}
      {step === 5 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <h3 className="font-display text-2xl text-slate-900 mb-1">What's your timeline?</h3>
            <p className="text-slate-500 text-sm">When are you looking to get started?</p>
          </div>
          <div className="space-y-3">
            {timelineOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => update('timeline', opt.value)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-150 ${
                  data.timeline === opt.value
                    ? 'border-brand-600 bg-brand-50'
                    : 'border-slate-200 hover:border-brand-300 hover:bg-brand-50/50'
                }`}
              >
                <p className={`font-semibold text-sm ${data.timeline === opt.value ? 'text-brand-700' : 'text-slate-900'}`}>
                  {opt.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{opt.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        {step > 1 && (
          <button
            type="button"
            onClick={back}
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>
        )}
        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={next}
            className="btn-primary flex-1"
          >
            Continue <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={loading}
            className="btn-primary flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <><Loader2 size={16} className="animate-spin" /> Submitting...</>
            ) : (
              <>Get My Matches <ArrowRight size={16} /></>
            )}
          </button>
        )}
      </div>

      <p className="text-center text-xs text-slate-400 mt-4">
        🔒 Your information is private and never sold to third parties.
      </p>
    </div>
  );
}
