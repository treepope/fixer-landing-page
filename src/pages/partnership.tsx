import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Users } from 'lucide-react';

const Partnership = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">พันธมิตรทางธุรกิจ</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">ร่วมเป็นส่วนหนึ่งกับเราในการปฏิวัติวงการซ่อมรถด้วยเทคโนโลยีและการบริการที่เหนือชั้น</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-carfix-orange/10 rounded-full mb-6 mx-auto">
                <Users className="h-8 w-8 text-carfix-orange" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center">ร่วมเป็นอู่ซ่อมรถพันธมิตร</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-carfix-orange mr-2">✓</span>
                  <span>เพิ่มช่องทางการหาลูกค้าใหม่ผ่านแพลตฟอร์มของเรา</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carfix-orange mr-2">✓</span>
                  <span>ระบบการจัดการงานซ่อมที่ทันสมัยและมีประสิทธิภาพ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carfix-orange mr-2">✓</span>
                  <span>ส่วนลดพิเศษสำหรับการสั่งซื้ออะไหล่ผ่านเครือข่ายพันธมิตรของเรา</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carfix-orange mr-2">✓</span>
                  <span>เข้าถึงข้อมูลเชิงลึกและการวิเคราะห์เพื่อพัฒนาธุรกิจของคุณ</span>
                </li>
              </ul>
              <Button className="btn-primary w-full">สมัครเป็นอู่พันธมิตร</Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-carfix-orange/10 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-carfix-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center">พันธมิตรทางธุรกิจ</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-carfix-orange mr-2">✓</span>
                  <span>โอกาสในการขยายธุรกิจผ่านเครือข่ายของ 24CARFIX</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carfix-orange mr-2">✓</span>
                  <span>การส่งเสริมการขายร่วมกันผ่านแพลตฟอร์มของเรา</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carfix-orange mr-2">✓</span>
                  <span>การเข้าถึงฐานลูกค้าที่มีคุณภาพและเติบโตอย่างรวดเร็ว</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carfix-orange mr-2">✓</span>
                  <span>โซลูชันที่ปรับแต่งได้เพื่อตอบสนองความต้องการทางธุรกิจของคุณ</span>
                </li>
              </ul>
              <Button className="btn-primary w-full">ติดต่อเรา</Button>
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">พันธมิตรของเรา</h2>
            <p className="mb-6">24CARFIX ภูมิใจที่ได้ร่วมงานกับแบรนด์ชั้นนำในอุตสาหกรรมยานยนต์ ร่วมกันสร้างประสบการณ์ที่ดีที่สุดให้กับลูกค้าของเรา</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Partner logos would go here - using placeholder for now */}
              <div className="aspect-w-16 aspect-h-9  rounded-lg flex items-center justify-center">
                <img src="/img/partnership/battery/fb.jpg" alt="fb-battery" />
              </div>
              <div className="aspect-w-16 aspect-h-9  rounded-lg flex items-center justify-center">
                <img src="/img/partnership/battery/3k.jpg" alt="3k-battery" />
              </div>
              <div className="aspect-w-16 aspect-h-9  rounded-lg flex items-center justify-center">
                <img src="/img/partnership/battery/gs.jpg" alt="gs-battery" />
              </div>
              <div className="aspect-w-16 aspect-h-9  rounded-lg flex items-center justify-center">
                <img src="/img/partnership/ties/Michelin.jpg" alt="Michelin-tires" />
              </div>
               <div className="aspect-w-16 aspect-h-9  rounded-lg flex items-center justify-center">
                <img src="/img/partnership/ties/bridgestone.jpg" alt="bridgestone-tires" />
              </div>
               <div className="aspect-w-16 aspect-h-9  rounded-lg flex items-center justify-center">
                <img src="/img/partnership/ties/dunlop.jpg" alt="dunlop-tires" />
              </div>
               <div className="aspect-w-16 aspect-h-9  rounded-lg flex items-center justify-center">
                <img src="/img/partnership/ties/maxxis.jpg" alt="maxxis-tires" />
              </div>
               <div className="aspect-w-16 aspect-h-9  rounded-lg flex items-center justify-center">
                <img src="/img/partnership/ties/goodyear-logo-01.jpg" alt="goodyear-logo-01-tires" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partnership;