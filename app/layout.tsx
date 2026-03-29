import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Fitness Franchise Australia | Start Your Own Fitness Business',
  description: 'Compare Australia\'s leading fitness franchise opportunities. Find the right gym, Pilates, or functional fitness franchise to match your budget and goals. Free matching service.',
  keywords: 'fitness franchise australia, gym franchise, pilates franchise, fitness business opportunity, buy a gym franchise australia',
  openGraph: {
    title: 'Fitness Franchise Australia',
    description: 'Find your ideal fitness franchise opportunity in Australia.',
    type: 'website',
    locale: 'en_AU',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="font-body bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
