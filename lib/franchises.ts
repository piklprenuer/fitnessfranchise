// franchises.ts
// Data sourced from business profiles (BF Brokers) and publicly available franchise information.
// Financial figures are drawn from specific studio sale documents and may not reflect all locations.

export interface OperatingHours {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

export interface FranchiseFees {
  initialFranchiseFee?: string;
  monthlyRoyaltyFee?: string;
  marketingFee?: string;
  transferFee?: string;
  renewalFee?: string;
  franchiseTerm?: string;
  notes?: string;
}

export interface LeaseInfo {
  rent?: string;
  premisesSize?: string;
  annualRentIncrease?: string;
  parking?: string;
}

export interface FeaturedLocation {
  name: string;
  address: string;
  state: string;
  established?: string;
  memberCount?: number;
  askingPrice?: string;
  premisesSize?: string;
  operatingHours?: OperatingHours;
  lease?: LeaseInfo;
}

export interface Franchise {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  category: "gym" | "boutique" | "pilates" | "functional-training";
  format: "24/7" | "class-based" | "hybrid";
  website: string;
  logoUrl?: string;
  heroImageUrl?: string;
  founded?: string;
  australianLocations?: number;
  globalLocations?: number;
  totalInvestmentRange?: {
    min: number;
    max: number;
    currency: string;
  };
  fees: FranchiseFees;
  keyFeatures: string[];
  trainingSupport: string[];
  featuredLocations?: FeaturedLocation[];
}

export const franchises: Franchise[] = [
  {
    id: "anytime-fitness",
    name: "Anytime Fitness",
    shortName: "Anytime Fitness",
    tagline: "Be the change. Go to anytime.",
    description:
      "Anytime Fitness is the world's largest and fastest-growing 24/7 fitness franchise, with over 560 locations across Australia and 5,000+ globally. Members enjoy round-the-clock access to equipment, group classes, personal training, and reciprocal access to any Anytime Fitness club worldwide.",
    category: "gym",
    format: "24/7",
    website: "https://www.anytimefitness.com.au",
    founded: "2002",
    australianLocations: 560,
    globalLocations: 5000,
    totalInvestmentRange: {
      min: 350000,
      max: 975000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "$42,500",
      monthlyRoyaltyFee: "$549/month",
      marketingFee: "$250/month",
      franchiseTerm: "5 years",
      notes:
        "Military veterans may receive a 10% discount on the franchise fee. Multi-location discounts available.",
    },
    keyFeatures: [
      "24/7 member access, 365 days a year",
      "Secure key fob entry and 24-hour security monitoring",
      "Reciprocal access to 5,000+ clubs worldwide",
      "One-on-one and group training programs",
      "Coaching and recovery services",
      "Proven global brand with strong member retention",
      "Protected exclusive territory granted per location",
    ],
    trainingSupport: [
      "5-day comprehensive training programme for new franchisees",
      "Self-paced online learning platform",
      "Ongoing continuing education credits required annually",
      "Access to a full library of operational resources",
      "Dedicated field support team",
    ],
  },

  {
    id: "f45-training",
    name: "F45 Training",
    shortName: "F45",
    tagline: "Team training. Life changing.",
    description:
      "F45 Training is a globally recognised boutique fitness franchise combining interval cardio and strength training in high-energy, 45-minute team sessions. Founded in Australia, F45 has grown into one of the world's fastest-growing fitness franchises, offering franchisees a low-royalty model with strong member community and marketing support.",
    category: "functional-training",
    format: "class-based",
    website: "https://f45training.com.au",
    founded: "2013",
    globalLocations: 1700,
    totalInvestmentRange: {
      min: 50000,
      max: 150000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "$50,000 plus GST (new agreement)",
      monthlyRoyaltyFee: "$1,500/month (fixed, excl. GST)",
      marketingFee: "$200/month (excl. GST)",
      franchiseTerm: "5 years, with two further 5-year renewal options",
      notes:
        "Monthly royalty fee increases by 2% annually on each anniversary of the agreement. Equipment pack (approx. $60,000 + GST) required for new studios. IT/intranet fees approx. $70/month.",
    },
    keyFeatures: [
      "45-minute functional team training sessions",
      "Combines interval cardio and strength training",
      "Proprietary programming updated regularly",
      "Low membership model designed for maximum margins",
      "Highly engaged member community drives organic growth",
      "Scalable model suitable for owner-operators and investors",
      "Access to premium equipment at competitive rates",
    ],
    trainingSupport: [
      "1-week induction at F45 Head Office in Sydney (no cost; travel at franchisee expense)",
      "2–4 week on-site handover training period",
      "Ongoing support via franchisor infrastructure and systems",
      "Marketing and sales support included",
      "Exercise programming and trainer support provided",
    ],
    featuredLocations: [
      {
        name: "F45 Training Narre Warren",
        address: "6/9-11 Vesper Drive",
        state: "VIC",
        established: "July 2017",
        memberCount: 284,
        askingPrice: "Expressions of Interest",
        premisesSize: "343m²",
        operatingHours: {
          monday: "5:30am–10:30am, 5:00pm–7:30pm",
          tuesday: "5:30am–10:30am, 5:00pm–7:30pm",
          wednesday: "5:30am–10:30am, 5:00pm–7:30pm",
          thursday: "5:30am–10:30am, 5:00pm–7:30pm",
          friday: "5:30am–10:30am, 5:00pm–6:30pm",
          saturday: "6:00am–9:00am",
          sunday: "7:30am–8:30am",
        },
        lease: {
          rent: "$31,827/year",
          premisesSize: "343m²",
          annualRentIncrease: "3% annually",
          parking: "4 private bays + ample street parking",
        },
      },
    ],
  },

  {
    id: "body-fit-training",
    name: "Body Fit Training",
    shortName: "BFT",
    tagline: "Different. Better.",
    description:
      "Body Fit Training (BFT) is an internationally recognised fitness franchise founded by Cameron Falloon — strength and conditioning coach to AFL clubs and personal trainer to Princess Diana. BFT's science-backed, 13-program approach uses 8-week progressive training blocks to deliver measurable results in 50-minute sessions. With 200+ studios globally and Top Franchise of the Year honours in Asia Pacific, BFT offers a compelling community-driven investment.",
    category: "functional-training",
    format: "class-based",
    website: "https://bodyfittraining.com",
    globalLocations: 200,
    totalInvestmentRange: {
      min: 295000,
      max: 600000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "$50,000 plus GST",
      monthlyRoyaltyFee:
        "$1,500/month + GST (under 140 members) OR 6% of gross revenue + GST, capped at $3,500/month (140+ members)",
      marketingFee: "$500/month + GST (minimum)",
      transferFee: "$5,000 plus GST",
      renewalFee: "$25,000 plus GST",
      franchiseTerm: "5 years, with two further 5-year renewal options",
      notes:
        "Initial training fee: $1,500 + GST per person. Additional training: $130/hour + GST. Marketing launch fee: $3,500 + GST.",
    },
    keyFeatures: [
      "50-minute science-backed training sessions",
      "13 varied programs across 8-week progressive training blocks",
      "Uses periodisation and progressive overload — same methodology as elite sports conditioning",
      "Internationally recognised brand (AU, NZ, Singapore, US)",
      "Voted Top Franchise of the Year in Asia Pacific two years running",
      "Scalable model for owner-operators or hands-off investors",
      "Holiday Destination Fee available at select locations",
    ],
    trainingSupport: [
      "Full BFT induction program covering systems, training methods, and studio management",
      "Training includes marketing, sales, and business operations",
      "Annual meetings, forums, and conferences",
      "Regular bootcamps held in Melbourne",
      "4 weeks on-site handover support from current owner (for resale locations)",
    ],
    featuredLocations: [
      {
        name: "BFT Rosebud",
        address: "1/30 McCombe Street",
        state: "VIC",
        established: "February 2020",
        memberCount: 230,
        askingPrice: "$295,000",
        premisesSize: "297m²",
        operatingHours: {
          monday: "5:00am–10:15am, 5:00pm–7:00pm",
          tuesday: "5:00am–10:15am, 5:00pm–7:00pm",
          wednesday: "5:00am–10:15am, 5:00pm–7:00pm",
          thursday: "5:00am–10:15am, 5:00pm–7:00pm",
          friday: "5:00am–10:15am, 5:00pm–6:15pm",
          saturday: "6:00am–10:00am",
          sunday: "Closed",
        },
        lease: {
          rent: "$51,500/year plus GST",
          premisesSize: "297m²",
          annualRentIncrease: "3% annually",
          parking: "Onsite parking available",
        },
      },
    ],
  },

  {
    id: "strong-pilates",
    name: "STRONG Pilates",
    shortName: "STRONG Pilates",
    tagline: "STRONG humans live better.",
    description:
      "STRONG Pilates is a world-first Pilates-inspired, cardio-infused fitness franchise born in Australia in 2019. Using exclusively licensed Rowformer and Bikeformer machines, STRONG delivers high-intensity, low-impact full-body workouts that combine cardio, flexibility, strength, and HIIT. With 130+ territories sold across Australia, NZ, Canada, Singapore, Spain, and the UK, and 350% year-on-year network growth, STRONG is one of the fastest-expanding boutique fitness concepts in the world.",
    category: "pilates",
    format: "class-based",
    website: "https://strongpilates.com.au",
    founded: "2019",
    totalInvestmentRange: {
      min: 500000,
      max: 700000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "$50,000 plus GST",
      monthlyRoyaltyFee: "8% of gross income plus GST, payable monthly",
      marketingFee: "2% of gross income plus GST, payable monthly",
      transferFee: "40% of the Franchise Fee plus GST",
      renewalFee: "$12,500 plus GST",
      franchiseTerm: "5 years, with one further 5-year renewal option",
      notes:
        "Documentation fee: $3,000 + GST. Territory cost approximately $55,000 to secure. Studios open with an average of 175+ members via STRONG's presale campaign. Typical session types: Rowformer and Bikeformer classes.",
    },
    keyFeatures: [
      "Exclusive Rowformer (rower + reformer) and Bikeformer (bike + reformer) machines",
      "High-intensity, low-impact format — suitable for all fitness levels",
      "Full-body workout combining cardio, strength, flexibility, and mobility",
      "Pilates ranked #1 fitness genre globally by ClassPass in 2023",
      "Studios open with an average of 175+ members via presale campaign",
      "350% year-on-year franchise network growth",
      "International presence: AU, NZ, Canada, Singapore, Spain, UK",
    ],
    trainingSupport: [
      "Comprehensive onboarding and brand induction before opening",
      "Full suite of music, marketing, and promotional assets",
      "Ongoing training in marketing, sales, and business operations",
      "24/7 online support desk",
      "1–3 weeks on-site handover training from current studio manager (resale locations)",
      "World-class marketing and operations guidance",
    ],
    featuredLocations: [
      {
        name: "STRONG Pilates Fortitude Valley",
        address: "Shop 3, 128A Brookes Street",
        state: "QLD",
        established: "November 2022",
        memberCount: 67,
        askingPrice: "Expressions of Interest",
        premisesSize: "270m²",
        operatingHours: {
          monday: "4:45am–6:30pm",
          tuesday: "4:45am–6:30pm",
          wednesday: "4:45am–6:30pm",
          thursday: "4:45am–6:30pm",
          friday: "4:45am–6:30pm",
          saturday: "6:30am–10:00am",
          sunday: "6:30am–10:00am",
        },
        lease: {
          rent: "$113,400/year plus GST",
          premisesSize: "270m²",
          annualRentIncrease: "CPI",
          parking: "1 onsite bay + ample street parking",
        },
      },
    ],
  },
  {
    id: "jetts-fitness",
    name: "Jetts Fitness",
    shortName: "Jetts",
    tagline: "Workout on your terms.",
    description:
      "Jetts Fitness is an Australian-owned 24/7 gym franchise founded in 2007, built on the revolutionary concept of no lock-in contracts and round-the-clock access. With a philosophy centred on making fitness accessible to all Australians, Jetts offers franchisees a systematic, fully supported business model with opportunities to scale into multi-gym ownership. Voted 7th Best Place to Work in 2022, Jetts combines a strong national brand with intensive ongoing support.",
    category: "gym",
    format: "24/7",
    website: "https://www.jetts.com.au",
    founded: "2007",
    fees: {
      monthlyRoyaltyFee: "5% of gross sales payable monthly",
      marketingFee: "$357.50 (General) + $450.00 (Regional) plus GST per month",
      transferFee: "$25,000 plus GST",
      franchiseTerm: "5 years, with one further term of 5 years",
      notes:
        "Technology Fee: $492/month + GST (per Business Profile) / $541/month + GST (per Franchise Agreement). J Series Monthly Fee: $200/month + GST. J Series Equipment Fee: $2,000/year + GST. CRM & Digital Platforms Fee: up to $150/month + GST. Financial Services Fee: $80–$120/month + GST. Survey Fee: $40–$50/month + GST. Annual Conference Attendance Fee: $1,000 + GST. Additional Training: up to $990/day + GST. Transfer Fee: $25,000 + GST.",
    },
    keyFeatures: [
      "24/7 gym access, 365 days a year — no lock-in contracts",
      "Australian owned and operated since 2007",
      "Fully systematic franchise operation with comprehensive tools and resources",
      "Revenue streams: memberships, joining fees, personal trainer rents, merchandise",
      "Suitable for both owner-operators and passive investors",
      "Ongoing marketing support and product innovation",
      "Access to best-in-class equipment via partner relationships",
      "Experienced leasing agents sourcing prime retail precinct locations",
      "Voted 7th Best Place to Work 2022",
    ],
    trainingSupport: [
      "5 days of initial training via online resources and franchisor-run workshops",
      "No prior fitness experience required (management experience advantageous)",
      "Regular franchise owner forums and monthly support meetings",
      "Culture and sales training, online learning platform",
      "Inspirational conferences and award celebrations",
      "Intensive one-on-one support from Jetts National Franchise Support Office",
      "In-field local business support and performance managers",
    ],
  },

  // ── 24/7 GYMS ──────────────────────────────────────────────────────────────

  {
    id: "snap-fitness",
    name: "Snap Fitness",
    shortName: "Snap Fitness",
    tagline: "Be Snap. Be fit.",
    description:
      "Snap Fitness is a globally recognised 24/7 gym franchise, founded in the United States in 2003 and brought to Australia in 2009. Part of the Lift Brands family, Snap Fitness is the first fitness franchise in Australia to achieve a five-star rating on the Australian Franchise Rating Scale. Known for its compact, premium fit-out and member-friendly policies, Snap Fitness offers flexible gym formats to suit different markets and locations, with over 1,000 clubs open or in development across 20+ countries.",
    category: "gym",
    format: "24/7",
    website: "https://www.snapfitnessfranchise.com.au",
    founded: "2003",
    australianLocations: 250,
    globalLocations: 1000,
    totalInvestmentRange: {
      min: 250000,
      max: 500000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "Approx. $60,000 plus GST",
      monthlyRoyaltyFee: "6% of gross monthly sales",
      marketingFee: "2% of gross monthly sales",
      franchiseTerm: "10 years, with unlimited additional 10-year renewal terms",
      notes:
        "Part of Lift Brands alongside 9Round and STEELE 365. Five-star rated on the Australian Franchise Rating Scale. Part of the ANZ Preferred Franchise Network for easier access to finance.",
    },
    keyFeatures: [
      "24/7 member access with secure, staffed and unstaffed hours",
      "Flexible gym format — adaptable size, layout, and offerings to suit local market",
      "First fitness franchise in Australia to achieve a 5-star FRANdata rating",
      "Part of ANZ Preferred Franchise Network for streamlined financing",
      "State-of-the-art cardio and strength equipment",
      "Member-friendly policies including personal training and group fitness options",
      "Part of Lift Brands — one of the world's largest fitness franchise networks",
    ],
    trainingSupport: [
      "Comprehensive initial training programme (online and in-person options)",
      "One-on-one onboarding calls, video courses, and in-club site visits",
      "Ongoing webinars with educational content and franchisee panels",
      "Dedicated field management and support teams",
      "Access to HR, marketing, and brand performance specialists",
    ],
  },

  {
    id: "plus-fitness",
    name: "Plus Fitness",
    shortName: "Plus Fitness",
    tagline: "More than just a gym.",
    description:
      "Plus Fitness is an Australian-owned, award-winning 24/7 gym franchise founded in 1996 and franchising since 2011. With a strong reputation for low cost of entry and high franchisee support, Plus Fitness offers a turnkey package that includes all gym equipment, signage, fit-out, access control, marketing, and training. Operating across Australia, New Zealand, Asia, and beyond, Plus Fitness is known for its transparent pricing, low staffing model, and fast break-even profile.",
    category: "gym",
    format: "24/7",
    website: "https://franchising.plus.fitness",
    founded: "1996",
    australianLocations: 200,
    globalLocations: 300,
    totalInvestmentRange: {
      min: 250000,
      max: 550000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "$25,000",
      monthlyRoyaltyFee: "$910/month",
      franchiseTerm: "5 years",
      notes:
        "Total investment is inclusive of all gym equipment, fit-out, signage, access control, marketing, and training. A $20,000 interstate and regional loading fee applies outside Sydney Metro. National marketing levy charged quarterly based on active member count.",
    },
    keyFeatures: [
      "All-inclusive turnkey franchise package — equipment, fit-out, marketing included",
      "24/7 access with no lock-in contracts for members",
      "Low staffing model designed for fast break-evens and strong returns",
      "Virtual exercise classes, free fitness programs, and functional training zones",
      "Reciprocal access across the Plus Fitness network",
      "Winner: FCA Emerging Franchisor of the Year; Smart Company Top Franchise",
      "International presence: Australia, New Zealand, India, Singapore",
    ],
    trainingSupport: [
      "4-day initial training at Plus Fitness Head Office and live training site",
      "Dedicated Field Manager assigned to each franchisee",
      "18-person national support team accessible via direct support line",
      "Regular workshops, online training portal, and in-field sessions",
      "Online marketing system and print management platform",
    ],
  },

  {
    id: "genesis-health-fitness",
    name: "Genesis Health + Fitness",
    shortName: "Genesis",
    tagline: "More than a gym. A community.",
    description:
      "Genesis Health + Fitness is an Australian-owned gym franchise founded in 1997 and part of the Belgravia Group — Australia's largest privately owned health and leisure business. With 40+ locations and over 75,000 members, Genesis offers full-service health clubs featuring weights, cardio, group fitness studios, Reformer Pilates, and Coaching Zone group training. Two franchise models are available to suit different investment levels and site sizes.",
    category: "gym",
    format: "hybrid",
    website: "https://www.genesisfitness.com.au",
    founded: "1997",
    australianLocations: 40,
    totalInvestmentRange: {
      min: 350000,
      max: 1200000,
      currency: "AUD",
    },
    fees: {
      franchiseTerm: "5 years",
      notes:
        "Two models: (1) Compact Club — gym floor + Coaching Zone + Reformer Pilates; from $350,000 + equipment. (2) Full-Service Club — large gym + group fitness studios + premium offerings; $400,000–$1.2M+. Minimum liquid capital approx. $300,000. Royalty and marketing fee details available on application.",
    },
    keyFeatures: [
      "Two flexible models: Compact Club and Full-Service Club",
      "Premium offerings: Reformer Pilates, Coaching Zone, group fitness, optional saunas",
      "Part of Belgravia Group — Australia's largest private health and leisure business",
      "750m² to 1,200m² full-service clubs with state-of-the-art equipment",
      "Recent clubs have opened with 2,000+ members before opening day",
      "Over 25 years of brand equity and industry experience",
    ],
    trainingSupport: [
      "Site selection, lease negotiation, and fit-out guidance",
      "Pre-sale marketing, finance, IT, and operations support",
      "Ongoing national marketing and local area marketing",
      "Sales training, club operations, helpdesk, and mastermind sessions",
      "WHS auditing, online induction systems, and annual conferences",
    ],
  },

  // ── WOMEN'S FITNESS ─────────────────────────────────────────────────────────

  {
    id: "fernwood-fitness",
    name: "Fernwood Fitness",
    shortName: "Fernwood",
    tagline: "Where women shine.",
    description:
      "Fernwood Fitness is Australia's leading women's-only health and fitness franchise, founded in 1989 by Diana Williams in Bendigo, Victoria. With 70+ clubs across every state and territory and a membership base of over 100,000 women, Fernwood has built a loyal community around its inclusive, premium environment. Offering gym floors, group fitness, FIIT30 HIIT classes, Reformer Pilates, and nutrition coaching, Fernwood won the 2024 Canstar Most Satisfied Customer Award for gyms.",
    category: "gym",
    format: "hybrid",
    website: "https://www.fernwoodfitness.com.au",
    founded: "1989",
    australianLocations: 70,
    totalInvestmentRange: {
      min: 450000,
      max: 700000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "$55,000 including GST",
      monthlyRoyaltyFee: "7% of gross sales",
      franchiseTerm: "5 years",
      notes:
        "Application fee $1,000 (refundable). Day-to-day operations must be female-led. Additional marketing fee applies. Specific ongoing fee structure available on application.",
    },
    keyFeatures: [
      "Australia's largest women's-only fitness franchise network",
      "70+ clubs nationally; 100,000+ members",
      "Holistic offering: gym floor, group fitness, FIIT30 HIIT, Reformer Pilates, nutrition coaching",
      "Winner of 2024 Canstar Most Satisfied Customer Award for gyms",
      "35+ years of brand equity and industry experience",
      "Diversified revenue: memberships, personal training, programs, retail",
      "Inclusive environment catering to women aged 18–80+",
    ],
    trainingSupport: [
      "Site selection, lease negotiation, and fit-out guides",
      "National pre-sale marketing support and launch campaign",
      "Dedicated support team: IT, HR, marketing, procurement, R&D",
      "Ongoing national and local area marketing",
      "Sales training, club operations, helpdesk, and mastermind sessions",
    ],
  },

  // ── HIIT / HEART-RATE TRAINING ──────────────────────────────────────────────

  {
    id: "orangetheory-fitness",
    name: "Orangetheory Fitness",
    shortName: "Orangetheory",
    tagline: "More life.",
    description:
      "Orangetheory Fitness is a science-backed, technology-tracked, coach-led group fitness franchise founded in 2010. Its signature one-hour heart rate-based interval workout blends treadmill, rowing, and strength training to produce an EPOC (Excess Post-Exercise Oxygen Consumption) after-burn effect. With 1,500+ studios across 25 countries — including a growing Australian presence — Orangetheory merged with Self Esteem Brands (parent of Anytime Fitness) in 2024, creating a combined network of over 7,000 locations worldwide.",
    category: "functional-training",
    format: "class-based",
    website: "https://www.orangetheory.com/en-au",
    founded: "2010",
    globalLocations: 1500,
    totalInvestmentRange: {
      min: 637000,
      max: 1297000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "Approx. AUD $92,000 (USD $59,950)",
      monthlyRoyaltyFee: "8% of gross sales",
      marketingFee: "2% of gross sales",
      franchiseTerm: "10 years, with one further 10-year renewal term",
      notes:
        "Australian investment estimated AUD $637,000–$1,297,000. Owner-operator model — absentee ownership not permitted. Merged with Anytime Fitness parent Self Esteem Brands in 2024. Master franchise and area developer models available.",
    },
    keyFeatures: [
      "Science-backed heart rate zone training — the OTF Orange Effect",
      "One-hour workouts blending treadmill, rowing, and strength training",
      "EPOC after-burn effect continues calorie burn hours post-class",
      "Proprietary heart rate monitoring technology worn during every class",
      "Recurring membership revenue model with strong average unit volumes",
      "Owner-operator model — active management required",
      "Part of a 7,000+ location combined network following 2024 merger",
    ],
    trainingSupport: [
      "4-day presales training programme at franchisee's own studio",
      "Comprehensive initial training: operations, sales, fitness, marketing",
      "Annual conference, training summit, and management programme",
      "Support across real estate, construction, design, equipment, and technology",
      "Ongoing coaching via field operations and corporate support teams",
    ],
  },

  // ── KICKBOXING ──────────────────────────────────────────────────────────────

  {
    id: "9round",
    name: "9Round",
    shortName: "9Round",
    tagline: "Stronger in 30.",
    description:
      "9Round is a kickboxing-inspired fitness franchise founded in 2008 by world-champion kickboxer Shannon Hudson and his wife Heather. Members rotate through 9 training stations in a 30-minute, schedule-free circuit workout combining strength, cardio, and functional training. Part of the Lift Brands family alongside Snap Fitness, 9Round operates a compact, lower-cost studio model — there are no class times, so members can start whenever they arrive.",
    category: "functional-training",
    format: "class-based",
    website: "https://www.9round.com.au",
    founded: "2008",
    globalLocations: 200,
    totalInvestmentRange: {
      min: 150000,
      max: 250000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "Approx. AUD $30,000",
      monthlyRoyaltyFee: "$600/month (fixed)",
      marketingFee: "$250/month or 2% of net sales (whichever is greater)",
      franchiseTerm: "5 years",
      notes:
        "Technology fee: $499/month. Local advertising: greater of 8% of gross revenue or $1,500/month. No class schedule — members start at any station on arrival. Compact studio format reduces real estate and fit-out requirements.",
    },
    keyFeatures: [
      "30-minute kickboxing-inspired circuit — 9 stations, full-body workout",
      "No class schedule — members arrive and start at any time",
      "Trainer present at all times to coach, time, and motivate",
      "Combines strength, cardio, and functional movement",
      "Compact studio format — lower fit-out and real estate costs",
      "Part of Lift Brands — global network alongside Snap Fitness",
      "Suitable for all fitness levels",
    ],
    trainingSupport: [
      "Comprehensive onboarding programme with dedicated business coaches",
      "Ongoing support from Lift Brands franchise infrastructure",
      "Marketing and brand building support",
      "Access to proprietary technology and member management systems",
    ],
  },

  // ── PILATES ─────────────────────────────────────────────────────────────────

  {
    id: "fs8",
    name: "FS8",
    shortName: "FS8",
    tagline: "Low impact. High results.",
    description:
      "FS8 is a pioneering boutique fitness franchise born in Manly, New South Wales, in April 2021. A world-first 3-in-1 workout concept, FS8 fuses Reformer and mat Pilates, Tone (resistance and strength), and Yoga into one 50-minute science-backed class. Part of the FIT Brands family alongside F45 Training and Vaura Pilates, FS8 uses its proprietary FS8 TV system to deliver consistent, centrally programmed workouts across all studios globally. With 50+ studios across five countries and master franchise rights sold across the UK, Europe, and South Korea, FS8 is one of the fastest-growing boutique fitness concepts in the world.",
    category: "pilates",
    format: "class-based",
    website: "https://fs8.com",
    founded: "2021",
    globalLocations: 50,
    totalInvestmentRange: {
      min: 294000,
      max: 720000,
      currency: "AUD",
    },
    fees: {
      initialFranchiseFee: "$50,000 plus GST",
      monthlyRoyaltyFee: "7% of gross sales",
      marketingFee: "Greater of 2% of gross sales or $200/month",
      franchiseTerm: "5 years",
      notes:
        "6-day induction seminar required; cost $1,000 for two attendees. Protected area typically defined by a population of at least 15,000. Recovery add-ons available: cold-water immersion, infrared sauna, and Hyperice percussive therapy. Part of FIT Brands alongside F45 Training.",
    },
    keyFeatures: [
      "World-first 3-in-1 workout fusing Pilates, Tone, and Yoga",
      "50-minute low-impact, high-results sessions for all fitness levels",
      "Proprietary FS8 TV technology ensures consistent programming globally",
      "Recovery integration available: cold immersion, infrared sauna, Hyperice",
      "Library of 5,000+ exercises — no two sessions are the same",
      "Born in Australia; operating in 5 countries with master rights sold globally",
      "Studios open with 200+ foundation members via pre-sale campaigns",
    ],
    trainingSupport: [
      "6-day induction seminar for franchisees and key team members",
      "Online initial training programme completed within 30 days of agreement",
      "Support across administration, marketing, hiring, and trainer onboarding",
      "FS8 TV integration — centrally programmed workouts across all studios",
      "Ongoing support from FIT Brands global infrastructure",
    ],
  },

  {
    id: "studio-pilates",
    name: "Studio Pilates International",
    shortName: "Studio Pilates",
    tagline: "Australia's original Reformer Pilates franchise.",
    description:
      "Studio Pilates International is Australia's original and oldest Reformer Pilates franchise, with 130+ studios across Australia, New Zealand, the United States, and China. Founded in Brisbane, Studio Pilates delivers instructor-led Reformer Pilates classes in a contemporary, design-led studio environment. Known for its centralised programming, high instructor standards, and all-inclusive investment structure, Studio Pilates has established itself as a trusted leader in the booming global Pilates market.",
    category: "pilates",
    format: "class-based",
    website: "https://www.studiopilates.com",
    globalLocations: 130,
    totalInvestmentRange: {
      min: 250000,
      max: 350000,
      currency: "AUD",
    },
    fees: {
      franchiseTerm: "5 years",
      notes:
        "Total investment of $250,000–$350,000 is all-inclusive with no hidden fees. Specific royalty and marketing fee details available on application. Centralised programming ensures consistency across all locations.",
    },
    keyFeatures: [
      "Australia's original and oldest Reformer Pilates franchise",
      "130+ studios across Australia, New Zealand, USA, and China",
      "Centralised programming ensures consistent quality at every studio",
      "All-inclusive investment — no hidden fees or surprise costs",
      "Reformer Pilates is the #1 growing fitness format globally",
      "Contemporary, design-led studio aesthetic",
      "Strong member retention driven by results-focused programming",
    ],
    trainingSupport: [
      "Comprehensive franchisee onboarding and induction programme",
      "Centralised instructor training with unrivalled support standards",
      "Ongoing operational, marketing, and sales guidance",
      "Access to Studio Pilates' global network and community",
    ],
  },
];

export default franchises;
export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(amount);
