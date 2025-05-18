
import React from 'react';
import { Check, Clock, Phone } from 'lucide-react';

const benefits = [
  {
    title: 'รายได้ดี',
    description: 'รายได้ดี รับค่าแรงทันที หลังเสร็จงาน',
    icon: <Check className="w-12 h-12 mb-4 text-carfix-orange" />
  },
  {
    title: 'รับงานได้ครบวงจร',
    description: 'บริการหลากหลาย ครอบคลุมทุกความต้องการ',
    icon: <Clock className="w-12 h-12 mb-4 text-carfix-orange" />
  },
  {
    title: 'มีทีมซัพพอร์ต',
    description: 'ทีมงานคอยช่วยเหลือตลอด 24 ชั่วโมง',
    icon: <Phone className="w-12 h-12 mb-4 text-carfix-orange" />
  }
];

const BenefitsSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('app-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">ทำไมควรร่วมงานกับ 24CARFIX?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card cursor-pointer"
              onClick={scrollToForm}
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if (e.key === 'Enter' || e.key === ' ') scrollToForm();
              }}
            >
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
