import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

const FooterFaq = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-gray-800 font-semibold mb-4">Quick Help</h3>
      <div className="space-y-3">
        <Link 
          to="/faq"
          className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <HelpCircle className="w-5 h-5 text-gray-600" />
          <span>Frequently Asked Questions</span>
        </Link>
      </div>
    </div>
  );
};

export default FooterFaq;