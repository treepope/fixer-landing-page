import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Battery, Wrench, Car, Key, AirVent, PaintBucket, Truck, Fuel, CarFront} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';


const MyServices = () => {
  const isMobile = useIsMobile();

  const serviceCards = [
    {
      title: "แบตเตอรี่",
      icon: <Battery className="h-8 w-8 text-carfix-orange" />,
      items: [
        "เปลี่ยนแบตเตอรี่ใหม่",
        "ทดสอบระบบไฟฟ้าและการชาร์จ",
        "จัมพ์สตาร์ทฉุกเฉิน",
        "ตรวจสอบอัลเทอร์เนเตอร์"
      ],
      featured: true
    },
    {
      title: "ปะยาง",
      icon: <Car className="h-8 w-8 text-carfix-orange" />,
      items: [
        "ปะยางฉุกเฉิน",
        "เปลี่ยนยาง",
        "สลับยาง",
        "ตั้งศูนย์ถ่วงล้อ"
      ],
      featured: true
    },
    {
      title: "ช่างซ่อมทั่วไป",
      icon: <Wrench className="h-8 w-8 text-carfix-orange" />,
      items: [
        "วิเคราะห์ปัญหาเครื่องยนต์",
        "ซ่อมระบบเบรค",
        "ซ่อมระบบช่วงล่าง",
        "ซ่อมระบบไฟฟ้า"
      ],
      featured: true
    },
    {
      title: "กุญแจ",
      icon: <Key className="h-8 w-8 text-carfix-orange" />,
      items: [
        "ทำกุญแจสำรอง",
        "ซ่อมกุญแจรีโมท",
        "แก้ปัญหากุญแจล็อค",
        "เปลี่ยนแบตเตอรี่กุญแจ"
      ]
    },
    {
      title: "แอร์",
      icon: <AirVent className="h-8 w-8 text-carfix-orange" />,
      items: [
        "เติมน้ำยาแอร์",
        "ล้างแอร์รถยนต์",
        "ซ่อมระบบแอร์",
        "เปลี่ยนอะไหล่ระบบแอร์"
      ]
    },
    {
      title: "กระจก",
      icon: <CarFront className="h-8 w-8 text-carfix-orange" />,
      items: [
        "เปลี่ยนกระจกรถยนต์",
        "ซ่อมรอยร้าวกระจก",
        "เปลี่ยนระบบยกกระจก",
        "ติดฟิล์มกระจก"
      ]
    },
    {
      title: "สีรถ",
      icon: <PaintBucket className="h-8 w-8 text-carfix-orange" />,
      items: [
        "พ่นสีรถยนต์",
        "ซ่อมรอยขีดข่วน",
        "เคลือบสีรถ",
        "ขัดสีรถ"
      ]
    },
    {
      title: "รถสไลด์",
      icon: <Truck className="h-8 w-8 text-carfix-orange" />,
      items: [
        "บริการรถสไลด์",
        "เคลื่อนย้ายรถยนต์",
        "บริการรถยก",
        "ขนย้ายรถยนต์ทางไกล"
      ],
    },
    {
      title: "เติมน้ำมันฉุกเฉิน",
      icon: <Fuel className="h-8 w-8 text-carfix-orange" />, // changed icon here
      items: [
        "จัดส่งน้ำมันถึงที่",
        "ช่วยเหลือเมื่อรถน้ำมันหมดกลางทาง",
        "บริการรวดเร็วทันใจ",
        "รองรับรถยนต์ทุกประเภท"
      ],
    }
  ];

  const featuredServices = serviceCards.filter(service => service.featured);
  const otherServices = serviceCards.filter(service => !service.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Improved Design */}
        <div
          className="py-12 md:py-24 relative overflow-hidden"
          style={{
            backgroundImage: `url("https://img.salehere.co.th/p/1200x0/2023/01/16/z9eldm4prxis.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          บริการของเรา
              </h1>
              <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8 drop-shadow">
          บริการซ่อมรถคุณภาพสูงจาก 24CARFIX พร้อมช่างมืออาชีพที่พร้อมให้บริการตลอด 24 ชั่วโมง
              </p>
              <Button size="lg" className="bg-orange-600 text-carfix-white hover:bg-orange-500 drop-shadow">
          ติดต่อเรา
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Services Section */}
        {featuredServices.length > 0 && (
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">บริการยอดนิยม</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard key={`featured-${index}`} service={service} />
              ))}
            </div>
          </div>
        )}

        {/* All Services Grid with Improved Layout */}
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">บริการทั้งหมด</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {otherServices.map((service, index) => (
                <ServiceCard key={`other-${index}`} service={service} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action with Improved Design */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="bg-carfix-orange/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">ต้องการความช่วยเหลือเพิ่มเติม?</h3>
            <p className="mb-6 max-w-2xl mx-auto">หากคุณมีปัญหาอื่นๆ เกี่ยวกับรถยนต์ของคุณ เรามีช่างผู้เชี่ยวชาญพร้อมให้คำปรึกษาและช่วยเหลือคุณ</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" className="w-full sm:w-auto">ติดต่อเรา</Button>
              <Button className="w-full sm:w-auto">โทร 094-861-9595</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Service Card Component for better organization
const ServiceCard = ({ service }) => {
  return (
    <Card className={`hover:shadow-xl transition-all duration-300 border-t-4 border-t-carfix-orange ${service.featured ? 'bg-white shadow-md' : 'bg-white'}`}>
      <CardContent className="pt-6">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-carfix-orange/10 rounded-full flex items-center justify-center">
            {service.icon}
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">{service.title}</h2>
        <ul className="space-y-3 mb-8">
          {service.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-carfix-orange mr-2">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full">จองบริการ</Button>
      </CardContent>
    </Card>
  );
};

export default MyServices;