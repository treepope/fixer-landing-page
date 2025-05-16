
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
    question: 'ต้องมีรถเป็นของตัวเองไหม?',
    answer: 'ไม่จำเป็นต้องมีรถเป็นของตัวเอง ขึ้นอยู่กับประเภทของการบริการที่คุณต้องการให้บริการ บางประเภทสามารถใช้รถสาธารณะหรือมอเตอร์ไซค์ได้'
  },
  {
    question: 'ต้องมีประสบการณ์มากแค่ไหน?',
    answer: 'เราต้องการช่างที่มีความรู้พื้นฐานในงานซ่อมยานยนต์ แต่ไม่จำเป็นต้องมีประสบการณ์มากนัก เราจะมีการฝึกอบรมเพิ่มเติมให้'
  },
  {
    question: 'อยู่ต่างจังหวัดสมัครได้ไหม?',
    answer: 'สมัครได้ เรารับสมัครช่างทั่วประเทศ โดยเฉพาะในพื้นที่กรุงเทพฯ ปริมณฑล และเมืองใหญ่ในแต่ละภูมิภาค'
  },
  {
    question: 'รายได้เฉลี่ยต่อเดือนประมาณเท่าไหร่?',
    answer: 'รายได้ขึ้นอยู่กับจำนวนงานที่รับและประเภทของงาน โดยเฉลี่ยช่างที่ทำงานเต็มเวลาสามารถทำรายได้ 20,000 - 40,000 บาทต่อเดือน'
  },
  {
    question: 'มีค่าสมัครหรือค่าธรรมเนียมไหม?',
    answer: 'ไม่มีค่าสมัครหรือค่าธรรมเนียมใดๆ การสมัครเป็นช่างกับ 24CARFIX ฟรี 100%'
  }
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
