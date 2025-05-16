
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-carfix-orange">24CARFIX</span>
        </div>
        <Button className="btn-primary hidden sm:inline-flex">
          สมัครเป็นช่าง
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
