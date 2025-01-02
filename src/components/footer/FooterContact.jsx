import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3">
    <Icon className="w-5 h-5 absolute text-gray-600" />
    <span dangerouslySetInnerHTML={{ __html: text }} className="px-5 text-gray-600"></span>
  </div>
);

const FooterContact = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-800 font-semibold mb-4">Contact Us</h3>
      <div className="space-y-3">
        <ContactItem 
          icon={Phone} 
          text="080 8575 8575" 
        />
        <ContactItem 
          icon={Mail} 
          text="hello@cobrother.com" 
        />
        <ContactItem 
          icon={MapPin} 
          text="#27 3<sup>rd</sup> Floor, D block, Shinde complex, Neetigin Road, Hubli, Karnataka, IN (580029)" 
        />
      </div>
    </div>
  );
};

export default FooterContact;