# FitnessFranchise.com.au — MVP

Lead generation platform for Australian fitness franchise buyers.

---

## Folder Structure

```
fitnessfranchise/
├── app/
│   ├── layout.tsx           # Root layout (fonts, metadata)
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles + Tailwind
│   ├── api/
│   │   └── leads/
│   │       └── route.ts     # POST (save lead) + GET (admin fetch)
│   ├── admin/
│   │   └── page.tsx         # Admin dashboard to view leads
│   └── franchise/
│       └── [slug]/
│           └── page.tsx     # Individual franchise detail page
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── FranchiseCard.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FranchiseListings.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── TrustSection.tsx
│   │   ├── LeadFormSection.tsx
│   │   └── CtaBanner.tsx
│   └── form/
│       └── LeadForm.tsx     # Multi-step lead capture form
├── lib/
│   ├── supabase.ts          # Supabase client
│   └── franchises.ts        # Hardcoded franchise data
├── .env.local.example       # Environment variable template
├── supabase-setup.sql       # Run this in Supabase SQL editor
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## Step 1 — Set Up Supabase (Database)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **New Project**, choose a name (e.g. `fitnessfranchise`), set a database password, select **Australia (Sydney)** region
3. Wait ~2 minutes for the project to provision
4. Go to **SQL Editor** (left sidebar) → **New Query**
5. Paste the entire contents of `supabase-setup.sql` and click **Run**
6. You should see the `leads` table columns listed in the results

### Get your API keys:
- Go to **Settings** → **API**
- Copy **Project URL** (looks like `https://abcdefgh.supabase.co`)
- Copy **anon / public** key (long string starting with `eyJ...`)
- Copy **service_role** key (keep this secret — server use only)

---

## Step 2 — Configure Environment Variables

Copy the example file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in your values:
```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your_anon_key...
SUPABASE_SERVICE_ROLE_KEY=eyJ...your_service_role_key...
ADMIN_PASSWORD=choose_a_strong_password_here
```

> ⚠️ Never commit `.env.local` to Git. It's already in `.gitignore`.

---

## Step 3 — Run Locally

### Prerequisites
- Node.js 18+ (download from [nodejs.org](https://nodejs.org))
- npm (comes with Node)

### Install and run:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site will load.

### Test the lead form:
1. Click "Find Your Ideal Franchise"
2. Complete all 5 steps
3. Submit
4. Check Supabase: **Table Editor** → **leads** — your test lead should appear

### View the admin dashboard:
- Go to [http://localhost:3000/admin](http://localhost:3000/admin)
- Enter your `ADMIN_PASSWORD` from `.env.local`

---

## Step 4 — Deploy to Production

### Option A: Vercel (Recommended — free, fastest)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/fitnessfranchise.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo

3. In **Environment Variables**, add all three keys from your `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_PASSWORD`

4. Click **Deploy** — your site will be live in ~2 minutes

5. To connect your domain `fitnessfranchise.com.au`:
   - In Vercel: **Settings** → **Domains** → Add `fitnessfranchise.com.au`
   - In your domain registrar (e.g. GoDaddy, Namecheap): Add the DNS records Vercel shows you (usually an A record and CNAME)
   - SSL is automatic

### Option B: SiteGround / cPanel Hosting

SiteGround doesn't natively support Next.js. Options:

**Recommended approach — Hybrid:**
- Host the Next.js app on Vercel (free tier is generous)
- Point your domain to Vercel
- Use SiteGround only for email hosting if needed

**If you must use SiteGround:**
1. Build the app: `npm run build`
2. SiteGround supports Node.js apps via their Node.js Manager in cPanel
3. Upload files via SFTP or Git
4. Set Node.js version to 18+ in cPanel Node.js Manager
5. Set the startup file to `node_modules/.bin/next` with `start` command
6. Add environment variables in cPanel → Node.js Manager → Environment Variables
7. Note: This setup is more complex — Vercel is strongly recommended

---

## How to View Submitted Leads

### Method 1 — Admin Dashboard (easiest)
- Visit `https://yourdomain.com.au/admin`
- Enter your admin password
- View all leads in a table, export to CSV

### Method 2 — Supabase Dashboard
- Go to [supabase.com](https://supabase.com) → Your project
- Click **Table Editor** → **leads**
- All submissions are here with full data

### Method 3 — API (developers)
```bash
curl "https://yourdomain.com.au/api/leads?password=your_admin_password"
```

---

## Customisation Guide

### Add or edit franchises
Edit `lib/franchises.ts` — each franchise object has:
- `name`, `category`, `investmentMin/Max`
- `description`, `highlights[]`
- `locations`, `established`
- `featured: true/false` (featured ones show on homepage)

### Change colours
Edit `tailwind.config.js` → `theme.extend.colors.brand` — change the green shades to any colour.

### Change admin password
Update `ADMIN_PASSWORD` in your `.env.local` (local) and in Vercel environment variables (production).

### Add email notifications for new leads
Install Resend or SendGrid and add to `app/api/leads/route.ts` after the Supabase insert.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Fonts | DM Serif Display + DM Sans |
| Icons | Lucide React |
| Hosting | Vercel (recommended) |

---

## Support

For issues, check:
1. `.env.local` has all 4 variables set correctly
2. Supabase SQL was run successfully (table exists)
3. Supabase anon key allows inserts (RLS policy applied)
4. Browser console for any JS errors
