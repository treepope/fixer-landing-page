
import React from 'react';
import { ArrowRight, QrCode, Phone, FileText, Facebook } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ApplicationForm from './ApplicationForm';

const CallToAction = () => {
  return (
    <section className="py-16 bg-orange-50" id="signup-form">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">สมัครเป็นช่างกับเราวันนี้</h2>
          <p className="text-lg text-gray-600 mb-8">
            เริ่มต้นธุรกิจของคุณกับ 24CARFIX และรับงานได้ทันที
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Contact Methods */}
            <div className="flex flex-col space-y-6">
              {/* QR Code Section */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <QrCode className="w-16 h-16 text-carfix-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">แสกน QR Code</h3>
                <p className="text-gray-600 mb-4">แอด LINE Official: @24carfix</p>
                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  {/* Placeholder for actual QR Code */}
                  <span className="text-gray-500">QR Code LINE @24carfix</span>
                </div>
              </div>
              
              {/* Google Form Section */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <FileText className="w-16 h-16 text-carfix-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">กรอกฟอร์มสมัคร</h3>
                <p className="text-gray-600 mb-4">กรอกข้อมูลในฟอร์มสมัครออนไลน์</p>
                <Button className="btn-primary w-full flex items-center justify-center gap-2">
                  ไปยังฟอร์มสมัคร
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Right Column: Application Form */}
            <div>
              <ApplicationForm />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="flex items-center justify-center">
            <Phone className="w-5 h-5 text-carfix-orange mr-2" />
            <p className="text-gray-600">สอบถามเพิ่มเติม: 02-XXX-XXXX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
