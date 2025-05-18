import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "img/24-fixer-app/app-1.webp",
  "img/24-fixer-app/app-2.webp",
  "img/24-fixer-app/app-3.webp",
  "img/24-fixer-app/app-4.webp",
  "img/24-fixer-app/app-5.webp",
];

const AppPromotion = () => {
  const [current, setCurrent] = useState(0);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section id="app-section" className="bg-gradient-to-r from-carfix-orange to-carfix-light-orange py-10 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Info */}
          <div className="flex-1 space-y-6 max-w-xl">
            <div className="flex items-center gap-4">
              <div className="p-[2px] rounded-[12px] bg-gradient-to-br from-carfix-orange to-carfix-light-orange">
              <div className="bg-white rounded-[30px] p-3">
                <img src="/img/logo/24-logo-fixer-white.png" alt="" width={150} />
              </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow">
              24CARFIX แอปสำหรับช่างซ่อมรถยนต์
              </h2>
            </div>
            <p className="text-lg md:text-xl font-medium drop-shadow">
              เราคือแพลตฟอร์มเรียกช่างซ่อมรถยนต์ บริการทั่วประเทศไทย
              <br />
              ดาวน์โหลดแอป 24CARFIX เพื่อรับงานใกล้คุณทันที!
            </p>

            {/* Download App link */}
            <div className="flex flex-wrap gap-4 mt-6 items-center">
              <a href="https://www.24carfix.com/download">
              <img src="/img/donwload/appstore.png" alt="app-store-download" />
              </a>
              <a href="https://www.24carfix.com/download">
              <img src="/img/donwload/googleplay.png" alt="play-store-download" />
              </a><br />
              <div className="p-[3px] rounded-xl bg-gradient-to-br from-carfix-orange to-carfix-light-orange">
              <img
                src="/img/qrcode/app-qr.png"
                alt="download-app"
                width={150}
                className="bg-white rounded-lg"
              />
              </div>
            </div>
            
          </div>
          {/* Right: Mobile Preview */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl max-w-[320px] md:max-w-[340px] w-full aspect-[9/18] flex flex-col items-center">
              {/* Mobile frame */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-200 rounded-b-xl" />
              {/* Slide controls */}
              {images.length > 1 && (
                <>
                  <button
                    aria-label="Previous"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10 shadow"
                  >
                    <ChevronLeft size={24} className="text-gray-700" />
                  </button>
                  <button
                    aria-label="Next"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10 shadow"
                  >
                    <ChevronRight size={24} className="text-gray-700" />
                  </button>
                </>
              )}
              {/* Image */}
              <img
                src={images[current]}
                alt={`App screenshot ${current + 1}`}
                className="rounded-2xl aspect-[9/18] object-cover w-full h-auto border-4 border-gray-100 shadow-lg"
              />
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 border-2 ${
                      idx === current
                        ? 'bg-carfix-orange border-carfix-orange scale-110'
                        : 'bg-gray-300 border-gray-300 opacity-60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
