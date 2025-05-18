import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ServiceTypes from '@/components/ServiceTypes';
import SignupProcess from '@/components/SignupProcess';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import AppPromotion from '@/components/AppPromotion';
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Show welcome toast for first-time visitors
    const isFirstVisit = !localStorage.getItem('visited');
    
    if (isFirstVisit) {
      setTimeout(() => {
        toast({
          title: "ยินดีต้อนรับ! 👋",
          description: "ร่วมเป็นช่างกับ 24CARFIX และเพิ่มรายได้ได้ทันที",
          duration: 5000,
        });
        localStorage.setItem('visited', 'true');
      }, 2000);
    }
  }, [toast]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <ServiceTypes />
        <SignupProcess />
        <AppPromotion />
        <FAQ />
        <CallToAction />
        
      </main>
      
      <Footer />
      
      {/* Only show sticky CTA on mobile */}
      {isMobile && <StickyCTA />}
    </div>
  );

  
};

export default Index;
