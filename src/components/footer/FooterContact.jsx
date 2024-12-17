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
          text="080-85758575" 
        />
        <ContactItem 
          icon={Mail} 
          text="hello@cobrother.com" 
        />
        <ContactItem 
          icon={MapPin} 
          text="27, D block, Shinde complex, Hubli" 
        />
      </div>
    </div>
  );
};

export default FooterContact;