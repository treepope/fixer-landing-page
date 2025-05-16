
import React from 'react';
import { Button } from "@/components/ui/button";

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
        <div>
          <p className="font-semibold text-carfix-orange">สมัครเป็นช่าง</p>
        </div>
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
