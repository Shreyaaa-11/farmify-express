
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-krishi-primary text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/0142a83e-bd17-43e1-891b-424264eaa72d.png" alt="Krishi Sadhan" className="h-16 bg-white rounded-full p-1" />
              <div>
                <h3 className="font-bold text-xl">Krishi Sadhan</h3>
                <p className="text-xs">Kisaan upkaran ka ek Matra Sadhan.</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">{t('home')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">{t('home')}</Link></li>
              <li><Link to="/equipment" className="hover:underline">{t('equipment')}</Link></li>
              <li><Link to="/about" className="hover:underline">{t('about')}</Link></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Partner</a></li>
              <li><a href="#" className="hover:underline">Dispute</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
            <div className="mt-6">
              <p>Please provide us Feedback</p>
              <a href="#" className="underline font-bold">HERE</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Give us a follow on social media</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                <Instagram size={28} />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                <Facebook size={28} />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors duration-300">
                <Twitter size={28} />
              </a>
            </div>
            <p className="mb-4">Made by: Team Krishi Sadhan</p>
            
            <div className="flex items-center mt-auto">
              <img src="/lovable-uploads/7a1cd545-5d2b-4e2e-938e-3bda30eca53d.png" alt="Ministry Logo" className="h-12 mr-4" />
              <div>
                <p className="text-sm">Ministry of Skill Development and Entrepreneurship</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-krishi-secondary mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Krishi Sadhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
