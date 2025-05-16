
import React from 'react';
import { Battery, Car, Caravan, Key, AirVent, Film, Check } from 'lucide-react';

const serviceTypes = [
  {
    name: 'แบตเตอรี่',
    icon: <Battery className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'ปะยาง',
    icon: <Car className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'รถยก/รถสไลด์',
    icon: <Caravan className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'กุญแจ',
    icon: <Key className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'แอร์',
    icon: <AirVent className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'ฟิล์ม',
    icon: <Film className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'กระจก',
    icon: <Check className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'และอื่นๆ อีกมากมาย',
    icon: <Check className="w-10 h-10 text-carfix-orange mb-2" />
  }
];

const ServiceTypes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">บริการที่คุณสามารถให้บริการได้</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceTypes.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3 className="font-medium mt-1">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;
