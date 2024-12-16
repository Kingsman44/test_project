import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoanCard = ({ icon: Icon, title, description, features, delay }) => {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <div 
      className="bg-white group relative p-6 rounded-xl shadow-lg border border-primary-100 h-full  transition-all duration-300 hover:shadow-xl" onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/contact"
          className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors group"
        >
          Apply Now
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>

         <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-[-2px] rounded-xl" 
             style={{
               background: `radial-gradient(
                 600px circle at var(--x, 50%) var(--y, 50%),
                 rgba(34, 197, 94, 0.1),
                 transparent 15%
               )`,
             }} />
      </div>
      </div>
    </div>
  );
};

export default LoanCard;