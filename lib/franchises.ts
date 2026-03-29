export type Franchise = {
  id: string;
  name: string;
  category: 'Gym' | 'Pilates' | 'Functional' | 'Recovery';
  investmentMin: number;
  investmentMax: number;
  description: string;
  highlights: string[];
  locations: number;
  established: number;
  featured?: boolean;
};

export const franchises: Franchise[] = [
  {
    id: 'ironcore-fitness',
    name: 'IronCore Fitness',
    category: 'Gym',
    investmentMin: 250000,
    investmentMax: 450000,
    description: 'Premium 24/7 gym franchise with state-of-the-art equipment, personal training programs, and proven membership retention systems.',
    highlights: ['Proven 18-month ROI model', '24/7 access technology', 'Full training & support', 'National marketing fund'],
    locations: 87,
    established: 2009,
    featured: true,
  },
  {
    id: 'studio-reform',
    name: 'Studio Reform',
    category: 'Pilates',
    investmentMin: 150000,
    investmentMax: 280000,
    description: 'Boutique reformer Pilates studios catering to the fast-growing wellness market. High margins, loyal clientele, and premium brand positioning.',
    highlights: ['Low staff requirements', 'Recurring membership revenue', 'Premium brand positioning', 'Comprehensive franchisee support'],
    locations: 43,
    established: 2014,
    featured: true,
  },
  {
    id: 'apex-performance',
    name: 'Apex Performance',
    category: 'Functional',
    investmentMin: 180000,
    investmentMax: 320000,
    description: 'High-intensity functional training franchise with group classes, semi-private coaching, and an engaged community model.',
    highlights: ['Class-based recurring revenue', 'Strong community retention', 'Proprietary workout programming', 'Low equipment overhead'],
    locations: 61,
    established: 2011,
    featured: true,
  },
  {
    id: 'flex-yoga-pilates',
    name: 'Flex Yoga & Pilates',
    category: 'Pilates',
    investmentMin: 120000,
    investmentMax: 200000,
    description: 'Hybrid yoga and mat Pilates studios targeting the everyday wellness consumer. Accessible investment with strong community appeal.',
    highlights: ['Low entry investment', 'Flexible studio formats', 'Diverse class timetable', 'Franchise network of 40+'],
    locations: 41,
    established: 2016,
    featured: false,
  },
  {
    id: 'revive-recovery',
    name: 'Revive Recovery',
    category: 'Recovery',
    investmentMin: 200000,
    investmentMax: 380000,
    description: 'Next-gen recovery and wellness centres featuring ice baths, infrared saunas, compression therapy, and IV wellness treatments.',
    highlights: ['Emerging high-growth category', 'Premium service margins', 'Minimal competition', 'Proven US & UK model'],
    locations: 19,
    established: 2019,
    featured: true,
  },
  {
    id: 'powerhouse-24',
    name: 'Powerhouse 24',
    category: 'Gym',
    investmentMin: 300000,
    investmentMax: 500000,
    description: 'Full-service 24/7 health club franchise with pools, group fitness, and premium amenities. Ideal for larger format sites in growing suburbs.',
    highlights: ['Premium full-service model', 'High ACV memberships', 'Multiple revenue streams', 'Strong brand recognition'],
    locations: 34,
    established: 2007,
    featured: false,
  },
];

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(amount);
