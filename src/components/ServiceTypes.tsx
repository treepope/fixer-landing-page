
import React from 'react';
import { Battery, Wrench, Car, Key, AirVent, PaintBucket, Truck, Fuel, CarFront } from 'lucide-react';
import { link } from 'fs';
import { useNavigate } from 'react-router-dom';

const serviceTypes = [
  {
    name: 'แบตเตอรี่',
    icon: <Battery className="w-10 h-10 text-carfix-orange mb-2" />,
  },
  {
    name: 'ปะยาง',
    icon: <Car className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'ซ่อมรถยนต์',
    icon: <Wrench className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'รถยก/รถสไลด์',
    icon: <Truck className="w-10 h-10 text-carfix-orange mb-2" />
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
    name: 'ฟิล์ม/กระจก',
    icon: <CarFront className="w-10 h-10 text-carfix-orange mb-2" />
  },
  {
    name: 'ทำสีรถยนต์',
    icon: <PaintBucket className="w-10 h-10 text-carfix-orange mb-2" />
  }

  
];

const ServiceTypes = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/my-services');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">บริการที่คุณสามารถให้บริการได้</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceTypes.map((service, index) => (
            <div
              key={index}
              className="service-card cursor-pointer"
              onClick={handleCardClick}
            >
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
