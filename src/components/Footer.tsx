import React from 'react';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Solutions: ['Fleet Management', 'Equipment Rental', 'Manpower Hiring', 'Dashcam Systems'],
    Industries: ['Construction', 'Logistics', 'Transportation', 'Manufacturing'],
    Company: ['About Us', 'Careers', 'News & Press', 'Partners'],
    Support: ['Documentation', 'Help Center', 'Contact Support', 'System Status']
  };

  

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
  <div className="flex items-center space-x-2 mb-4">
    <img
      src="/logo.png"   
      alt="Azeeza Innovations logo"
      className="w-10 h-10 rounded-lg object-contain"
    />
    <span className="text-xl font-bold">Azeeza Innovations</span>
  </div>
  
  <p className="text-gray-400 mb-6 leading-relaxed">
    Pioneering AI-driven SaaS solutions that transform operations across industries worldwide. 
    Empowering businesses with intelligent platforms for sustainable growth.
  </p>
</div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Azeeza Innovations. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;