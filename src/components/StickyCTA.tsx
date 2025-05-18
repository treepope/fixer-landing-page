
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
    // Floating Circle Buttons 
    <div>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 drop-shadow-xl">
        <a
          href="https://www.24carfix.com/download"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg drop-shadow-xl transition-colors duration-200"
          aria-label="ไปที่แอป"
        >
          {/* Replace with an app icon if available */}
          <img src="/img/logo/24-app-fixer-logo-round.png" alt="24carfix-app-logo" />
        </a>
        <a
          href="https://lin.ee/jntvLG0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg drop-shadow-xl transition-colors duration-200"
          aria-label="แชทผ่าน LINE"
        >
          {/* Replace with a LINE icon if available */}
          <img src="img/icon/social/line.png" alt="line-logo" />
        </a>
      </div>
    </div>

    // Sticky Call to Action
    // <div className="sticky-cta">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <a 
    //       href="tel:094-861-9595"
    //       className="bg-carfix-orange hover:bg-carfix-dark-orange text-white rounded-full px-3 py-2 flex items-center gap-1 transition-colors duration-200"
    //       aria-label="โทรหา 24CARFIX"
    //     >
    //       <Phone size={16} />
    //       <span className="text-sm">094-861-9595</span>
    //     </a>
    //     <Button 
    //       className="btn-primary"
    //       onClick={scrollToForm}
    //     >
    //       สมัครตอนนี้
    //     </Button>
    //   </div>
    // </div>
  );
};

export default StickyCTA;
