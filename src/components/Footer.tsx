
import React from 'react';
import { Facebook, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-carfix-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-carfix-orange mb-2">24CARFIX</h3>
            <p className="text-sm text-gray-400">
              บริการช่วยเหลือฉุกเฉินบนท้องถนนตลอด 24 ชั่วโมง
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
            <div className="flex items-center gap-4 mb-3">
              <a 
                href="tel:094-861-9595"
                className="text-white hover:text-carfix-orange transition-colors duration-200 flex items-center gap-2"
              >
                <Phone size={18} />
                <span>094-861-9595</span>
              </a>
              <a 
                href="https://facebook.com/24carfix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-carfix-orange transition-colors duration-200"
                aria-label="24CARFIX บน Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} 24CARFIX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
