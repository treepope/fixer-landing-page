
import React from 'react';

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
          
          <div className="mt-6 md:mt-0">
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
