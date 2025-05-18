
import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-carfix-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <img src="/img/logo/24-h-white.png" alt="24carfix-logo" width={200}/><br />
            <p className="text-sm text-gray-400">
              บริการซ่อมรถยนต์นอกสถานที่ 24ชั่วโมง ทั่วประเทศไทย
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end">
            <div className="flex items-center gap-4 mb-3">
              
              {/* Tel icon */}
              {/* <a 
                href="tel:094-861-9595"
                className="text-white hover:text-carfix-orange transition-colors duration-200 flex items-center gap-2"
              >
                <Phone size={18} />
                <span>094-861-9595</span>
              </a> */}

              {/* Facebook icon */}
              <a 
                href="https://facebook.com/24carfix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-carfix-orange transition-colors duration-200"
                aria-label="24CARFIX บน Facebook"
              >
                <img src="/img/icon/social/social-round/facebook.png" alt="facebook-icon" width={40}/>
              </a>

              {/* Line icon */}
              <a 
                href="https://lin.ee/jntvLG0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-carfix-orange transition-colors duration-200"
                aria-label="24CARFIX บน Facebook"
              >
                <img src="/img/icon/social/social-round/line.png" alt="facebook-icon" width={40}/>
              </a>

              {/* Tiktok icon */}
              <a 
                href="https://www.tiktok.com/@24carfix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-carfix-orange transition-colors duration-200"
                aria-label="24CARFIX บน Facebook"
              >
                <img src="/img/icon/social/social-round/tiktok.png" alt="facebook-icon" width={40}/>
              </a>

              {/* YouTube icon */}
              <a 
                href="https://www.youtube.com/channel/UCpkjKOrswd5Q8YD8t1yj6kQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-carfix-orange transition-colors duration-200"
                aria-label="24CARFIX บน Facebook"
              >
                <img src="/img/icon/social/social-round/youtube.png" alt="facebook-icon" width={40}/>
              </a>

               {/* Email icon */}
              <a 
                href="mailto:support@24carfix.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-carfix-orange transition-colors duration-200"
                aria-label="24CARFIX บน Facebook"
              >
                <img src="/img/icon/social/social-round/email.png" alt="facebook-icon" width={40}/>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} 24CARFIX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
