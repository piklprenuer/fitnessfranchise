import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import FranchiseListings from '@/components/sections/FranchiseListings';
import ComparisonTable from '@/components/sections/ComparisonTable';
import TrustSection from '@/components/sections/TrustSection';
import LeadFormSection from '@/components/sections/LeadFormSection';
import CtaBanner from '@/components/sections/CtaBanner';

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
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
