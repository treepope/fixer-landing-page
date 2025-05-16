
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('signup-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-carfix-black min-h-[90vh] sm:min-h-[80vh] flex items-center">
      {/* Dark overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      {/* Background image with technician */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
      />
      
      <div className="container mx-auto px-4 py-12 relative z-10 text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            สมัครเป็นช่างกับ <br />
            <span className="text-carfix-orange">24CARFIX</span>
          </h1>
          
          <p className="text-xl mb-8">
            รับงานใกล้บ้าน รายได้ดี สมัครง่าย
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <Button 
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              onClick={scrollToForm}
            >
              สมัครเป็นช่างตอนนี้ 
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
