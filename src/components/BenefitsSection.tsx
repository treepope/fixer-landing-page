
import React from 'react';
import { Check, Clock, Phone } from 'lucide-react';

const benefits = [
  {
    title: 'รายได้ดี',
    description: 'รายได้ดี รับค่าแรงทันที หลังเสร็จงาน',
    icon: <Check className="w-12 h-12 mb-4 text-carfix-orange" />
  },
  {
    title: 'เลือกเวลาทำงานเอง',
    description: 'ทำงานยืดหยุ่นตามเวลาของคุณ ไม่มีข้อผูกมัด',
    icon: <Clock className="w-12 h-12 mb-4 text-carfix-orange" />
  },
  {
    title: 'มีทีมซัพพอร์ต',
    description: 'ทีมงานคอยช่วยเหลือตลอด 24 ชั่วโมง',
    icon: <Phone className="w-12 h-12 mb-4 text-carfix-orange" />
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">ทำไมควรร่วมงานกับ 24CARFIX?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              {benefit.icon}
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
