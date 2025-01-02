import React from 'react';
import { useLocation } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterFaq from './FooterFaq';

const SocialLink = ({ href, icon: Icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-800 transition-colors"
  >
    <Icon className="w-6 h-6" />
  </a>
);

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/cobrother-logo.png" 
                alt="CoBrother" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-600 mb-6">
              Revolutionizing co-ownership through exceptional service and curated properties.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <FooterLinks />
          </div>

          {/* Contact and FAQ */}
          <div>
            <FooterContact />
            {isHomePage && (
              <div className="mt-8">
                <FooterFaq />
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Cobrother Ecosystem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;