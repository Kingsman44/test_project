import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3">
    <Icon className="w-5 h-5 text-gray-600" />
    <span className="text-gray-600">{text}</span>
  </div>
);

const FooterContact = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-800 font-semibold mb-4">Contact Us</h3>
      <div className="space-y-3">
        <ContactItem 
          icon={Phone} 
          text="+91 (555) 123-4567" 
        />
        <ContactItem 
          icon={Mail} 
          text="cobrother.com@gmail.com" 
        />
        <ContactItem 
          icon={MapPin} 
          text="123 Business Avenue, Mumbai" 
        />
      </div>
    </div>
  );
};

export default FooterContact;