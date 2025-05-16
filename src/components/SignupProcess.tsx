
import React from 'react';
import { MessageSquare, FileText, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'แอด LINE หรือกรอกฟอร์ม',
    description: 'เริ่มต้นด้วยการแอดไลน์ @24carfix หรือกรอกฟอร์มสมัคร',
    icon: <MessageSquare className="w-12 h-12 mb-4 text-carfix-orange" />
  },
  {
    title: 'ส่งเอกสารเบื้องต้น',
    description: 'ส่งเอกสารยืนยันตัวตนและข้อมูลเพื่อลงทะเบียน',
    icon: <FileText className="w-12 h-12 mb-4 text-carfix-orange" />
  },
  {
    title: 'เริ่มรับงานได้เลย',
    description: 'หลังอนุมัติ คุณสามารถเริ่มรับงานได้ทันที',
    icon: <CheckCircle className="w-12 h-12 mb-4 text-carfix-orange" />
  }
];

const SignupProcess = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">ขั้นตอนการสมัคร 3 ขั้นตอนง่ายๆ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-carfix-orange text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignupProcess;
