import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">ติดต่อเรา</h1>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-semibold mb-6">ส่งข้อความถึงเรา</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">ชื่อ-นามสกุล</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-carfix-orange" 
                    placeholder="กรุณาระบุชื่อ-นามสกุล"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">อีเมล</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-carfix-orange" 
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">เบอร์โทรศัพท์</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-carfix-orange" 
                    placeholder="0xx-xxx-xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">เรื่องที่ติดต่อ</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-carfix-orange" 
                    placeholder="กรุณาระบุเรื่องที่ต้องการติดต่อ"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">ข้อความ</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-carfix-orange" 
                    placeholder="กรุณาระบุรายละเอียด"
                  ></textarea>
                </div>
                <Button
                  className="btn-primary w-full"
                  type="button"
                  onClick={() => {
                    setShowAlert(true);
                    setTimeout(() => setShowAlert(false), 3000);
                  }}
                >
                  ส่งข้อความ
                </Button>
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
                  <div
                    className={`
                      bg-green-600 text-white px-6 py-3 rounded shadow-lg flex items-center gap-2
                      transition-all duration-500 ease-in-out
                      ${showAlert ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <span>ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อเรา</span>
                  </div>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">ข้อมูลการติดต่อ</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-carfix-orange/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-carfix-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium">โทรศัพท์</h3>
                    <p className="mt-1">094-861-9595</p>
                    <p className="text-sm text-gray-500">จันทร์-ศุกร์: 9:00 - 18:00 น.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-carfix-orange/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-carfix-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium">อีเมล</h3>
                    <p className="mt-1">contact@24carfix.com</p>
                    <p className="text-sm text-gray-500">เราจะตอบกลับภายใน 24 ชั่วโมง</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-carfix-orange/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-carfix-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium">ที่อยู่สำนักงาน</h3>
                    <p className="mt-1">99/9 อาคารสำนักงาน 24CARFIX ชั้น 10<br />ถนนสุขุมวิท แขวงคลองเตย<br />เขตคลองเตย กรุงเทพฯ 10110</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-carfix-orange/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-carfix-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium">เวลาทำการ</h3>
                    <p className="mt-1">จันทร์-ศุกร์: 9:00 - 18:00 น.<br />เสาร์: 9:00 - 14:00 น.<br />อาทิตย์และวันหยุดนักขัตฤกษ์: ปิดทำการ</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">ติดตามเรา</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://facebook.com/24carfix" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-carfix-orange text-white p-2 rounded-full hover:bg-carfix-dark-orange transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://line.me/24carfix" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-carfix-orange text-white p-2 rounded-full hover:bg-carfix-dark-orange transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.85 12.65C17.85 15.31 15.31 17.5 12 17.5C11.29 17.5 10.61 17.39 10 17.18V14.69H11.29V15.93C11.5 15.97 11.74 16 12 16C14.5 16 16.35 14.46 16.35 12.65C16.35 10.83 14.5 9.3 12 9.3C9.5 9.3 7.65 10.83 7.65 12.65C7.65 13.39 7.89 14.07 8.29 14.63V12.5H9.79V14.96C9.29 14.46 9 13.6 9 12.65C9 11.55 10.34 10.8 12 10.8C13.66 10.8 15 11.55 15 12.65C15 13.75 13.66 14.5 12 14.5V13H10.5V16C14.14 16 17 14.54 17 12.65C17 10.76 14.14 9.3 10.5 9.3V10.8H12C13.65 10.8 15 11.55 15 12.65C15 13.75 13.65 14.5 12 14.5C11.59 14.5 11.2 14.44 10.85 14.34V11.82L9.36 13.31V15.31L10.03 14.64C10.32 14.83 10.65 14.97 11 15.07V15.93C10.29 15.67 9.67 15.22 9.21 14.63L8.09 15.75L7.05 14.71L8.17 13.59C7.77 13 7.56 12.35 7.56 11.65C7.56 9.54 9.5 7.8 12 7.8C14.5 7.8 16.44 9.54 16.44 11.65C16.44 12.35 16.23 13 15.83 13.59L16.95 14.71L15.91 15.75L14.79 14.63C14.33 15.22 13.71 15.67 13 15.93V15.07C13.35 14.97 13.68 14.83 13.97 14.64L14.64 15.31V11.82L13.15 13.31V14.34C12.8 14.44 12.41 14.5 12 14.5C10.34 14.5 9 13.75 9 12.65C9 11.55 10.34 10.8 12 10.8C13.66 10.8 15 11.55 15 12.65Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Maps placeholder */}
          <div className="mt-12 max-w-5xl mx-auto h-80 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Maps จะแสดงที่นี่</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
