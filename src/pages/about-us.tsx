import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Globe, Handshake } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div
          className="py-20"
          style={{
            background: 'linear-gradient(to top, #ff6b00 0%, #ff944d 100%)'
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow">
          เกี่ยวกับ 24CARFIX
              </h1>
              <p className="max-w-2xl mx-auto text-white/90 text-lg drop-shadow">
          บริการช่วยเหลือฉุกเฉินบนท้องถนนตลอด 24 ชั่วโมงที่เชื่อมต่อช่างซ่อมรถมืออาชีพกับเจ้าของรถทั่วประเทศไทย
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Target className="text-carfix-orange mr-3" />
                วิสัยทัศน์ของเรา
              </h2>
              <Card className="border-t-4 border-t-carfix-orange shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="mb-4">24CARFIX มุ่งมั่นที่จะเป็นแพลตฟอร์มชั้นนำในการเชื่อมต่อช่างซ่อมรถมืออาชีพกับเจ้าของรถทั่วประเทศไทย เรามุ่งหวังที่จะปฏิวัติวงการซ่อมรถด้วยเทคโนโลยีที่ทันสมัยและบริการที่มีคุณภาพ</p>
                  <p>เราเชื่อว่าทุกคนควรเข้าถึงบริการซ่อมรถที่มีคุณภาพได้อย่างสะดวก รวดเร็ว และโปร่งใส โดยไม่ต้องกังวลเรื่องค่าใช้จ่ายที่สูงเกินจริง</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <AspectRatio ratio={16/9} className="bg-carfix-gray rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-carfix-black/10 flex items-center justify-center">
                  {/* <div className="w-24 h-24 bg-carfix-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">24/7</span>
                  </div> */}
                  <img src="https://www.24carfix.com/uploads/contents/836a77bf2d5e20fa4eaa95564d844ae0.jpg" alt="24carfix-vision" />
                </div>
              </AspectRatio>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="order-2 lg:order-1">
              <div className="h-full bg-carfix-gray rounded-xl p-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white h-24 w-24 rounded-lg shadow-sm flex items-center justify-center">
                      <Users size={36} className="text-carfix-orange" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Users className="text-carfix-orange mr-3" />
                ทีมงานของเรา
              </h2>
              <Card className="border-t-4 border-t-carfix-orange shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="mb-4">24CARFIX ก่อตั้งโดยทีมงานผู้เชี่ยวชาญด้านเทคโนโลยีและอุตสาหกรรมยานยนต์ที่มีประสบการณ์มากกว่า 10 ปี เรามีความภูมิใจในการสร้างแพลตฟอร์มที่ช่วยให้ช่างซ่อมรถสามารถหารายได้เพิ่มและช่วยให้เจ้าของรถได้รับบริการที่ดีที่สุด</p>
                  <p>ทีมงานของเรามุ่งมั่นที่จะพัฒนาแพลตฟอร์มอย่างต่อเนื่องเพื่อให้มั่นใจว่าเราจะมอบประสบการณ์ที่ดีที่สุดให้กับทั้งช่างซ่อมและเจ้าของรถ</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center">
              <Globe className="text-carfix-orange mr-3" />
              คุณค่าหลักของเรา
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-carfix-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Award className="text-carfix-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">คุณภาพ</h3>
                  <p className="text-gray-600">เรามุ่งมั่นที่จะมอบบริการที่มีคุณภาพสูงสุดให้กับลูกค้าทุกคน</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-carfix-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Globe className="text-carfix-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">ความโปร่งใส</h3>
                  <p className="text-gray-600">เราเชื่อในความโปร่งใสในทุกด้านของธุรกิจ ไม่ว่าจะเป็นการคิดราคาหรือการให้บริการ</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-carfix-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="text-carfix-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">ความเชื่อถือได้</h3>
                  <p className="text-gray-600">เราให้บริการที่เชื่อถือได้และตรงต่อเวลาเสมอ</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-carfix-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Target className="text-carfix-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">นวัตกรรม</h3>
                  <p className="text-gray-600">เราไม่หยุดนิ่งที่จะพัฒนาและนำเทคโนโลยีใหม่ๆ มาใช้เพื่อปรับปรุงการให้บริการของเรา</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <CardContent className="pt-6">
                  <div className="bg-carfix-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Handshake className="text-carfix-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">การเติบโตร่วมกัน</h3>
                  <p className="text-gray-600">เราเชื่อในการเติบโตร่วมกันกับช่างซ่อมและพันธมิตรทางธุรกิจของเรา</p>
                </CardContent>
              </Card>

                <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <CardContent className="pt-6">
                  <div className="bg-carfix-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="text-carfix-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">ความรับผิดชอบ</h3>
                  <p className="text-gray-600">เรายึดมั่นในความรับผิดชอบต่อสังคม ลูกค้า และพันธมิตรทุกฝ่าย เพื่อสร้างความไว้วางใจและความยั่งยืนในระยะยาว</p>
                </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;