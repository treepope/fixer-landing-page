
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';

const StickyCTA = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky-cta">
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="tel:094-861-9595"
          className="bg-carfix-orange hover:bg-carfix-dark-orange text-white rounded-full px-3 py-2 flex items-center gap-1 transition-colors duration-200"
          aria-label="โทรหา 24CARFIX"
        >
          <Phone size={16} />
          <span className="text-sm">094-861-9595</span>
        </a>
        <Button 
          className="btn-primary"
          onClick={scrollToForm}
        >
          สมัครตอนนี้
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
