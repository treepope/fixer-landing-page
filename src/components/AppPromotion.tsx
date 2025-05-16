
import React from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Download } from 'lucide-react';

const AppPromotion = () => {
  return (
    <section className="bg-gradient-to-r from-carfix-orange to-carfix-light-orange py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Smartphone size={28} />
              <h2 className="text-2xl font-bold">แอพ 24CARFIX</h2>
            </div>
            <p className="text-lg">
              ดาวน์โหลดแอพพลิเคชัน 24CARFIX เพื่อรับงานได้ง่ายขึ้น
              แจ้งเตือนทันทีเมื่อมีงานใกล้คุณ
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
                <Download size={20} />
                ดาวน์โหลด iOS
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center gap-2">
                <Download size={20} />
                ดาวน์โหลด Android
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="bg-white rounded-xl p-2 shadow-lg max-w-[200px]">
              <div className="bg-gray-200 rounded-lg aspect-[9/16] flex items-center justify-center text-gray-500">
                App Screenshot
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
