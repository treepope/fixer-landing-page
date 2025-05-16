
import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-carfix-orange">24CARFIX</span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="tel:094-861-9595"
            className="bg-carfix-orange hover:bg-carfix-dark-orange text-white rounded-full px-4 py-2 flex items-center gap-2 transition-colors duration-200"
            aria-label="โทรหา 24CARFIX"
          >
            <Phone size={18} />
            <span className="hidden sm:inline-block">094-861-9595</span>
          </a>
          <a 
            href="https://facebook.com/24carfix" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-carfix-orange hover:text-carfix-dark-orange transition-colors duration-200"
            aria-label="24CARFIX บน Facebook"
          >
            <Facebook size={24} />
          </a>
          <Button className="btn-primary hidden sm:inline-flex">
            สมัครเป็นช่าง
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
