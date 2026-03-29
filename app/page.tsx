import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import FranchiseListings from '@/components/sections/FranchiseListings';
import ComparisonTable from '@/components/sections/ComparisonTable';
import TrustSection from '@/components/sections/TrustSection';
import LeadFormSection from '@/components/sections/LeadFormSection';
import CtaBanner from '@/components/sections/CtaBanner';
import SeoTextSection from '@/components/sections/SeoTextSection';
import FaqSection from '@/components/sections/FaqSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FranchiseListings />
        <CtaBanner />
        <ComparisonTable />
        <TrustSection />
        <SeoTextSection />
        <FaqSection />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
