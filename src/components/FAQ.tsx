
import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'สมัครเข้าร่วมกับ 24CARFIX ต้องทำยังไง?',
    answer: 'สมัครง่ายใน 3 ขั้นตอน กรอกข้อมูล - ส่งเอกสาร - รอทีมตรวจสอบภายใน 1-2 วัน ไม่มีค่าใช้จ่าย'
  },
  {
    question: 'ต้องมีประสบการณ์มากแค่ไหน?',
    answer: 'เราต้องการช่างที่มีความรู้พื้นฐานในงานซ่อมรถยนต์ แต่ถ้ามีประสบการณ์จะพิจารณาเป็นพิเศษ'
  },
  {
    question: 'อยู่ต่างจังหวัดสมัครได้ไหม?',
    answer: 'สมัครได้ เรารับสมัครช่างทั่วประเทศ โดยฉพาะในพื้นที่กรุงเทเพฯ และปริมณฑล'
  },
  {
    question: 'จะรู้ได้ยังไงว่ามีงานให้รับ?',
    answer: 'เมื่อคุณเปิดแอปพลิเคชัน 24CARFIX Fixer ระบบจะแจ้งเตือนงานใหม่ที่อยู่ใกล้คุณทันที'
  },
  {
    question: 'มีค่าสมัครหรือค่าธรรมเนียมไหม?',
    answer: 'ไม่มีค่าสมัครหรือค่าธรรมเนียมใดๆ การสมัครเป็นช่างในแพลตฟอร์ม 24CARFIX ฟรี 100%'
  },
  {
    question: 'ถ้าเจอปัญหา จะติดต่อใครได้?',
    answer: 'มีทีมซัพพอร์ตช่วยเหลือผ่านไลน์ @24carfix และโทรศัพท์ 094-861-9595 ตลอด 24 ชั่วโมง ไม่ต้องกังวล!'}
];

const FAQ = () => {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <HelpCircle className="w-8 h-8 text-carfix-orange mr-2" />
          <h2 className="text-2xl sm:text-3xl font-bold">คำถามที่พบบ่อย</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
