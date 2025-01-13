import React from 'react';
import { Check, X } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const ComparisonItem = ({ feature, coOwnership, fullOwnership, delay }) => (
  <AnimatedElement direction="up" delay={delay}>
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
      <div className="text-gray-700">{feature}</div>
      <div className="text-center">
        {fullOwnership ? (
          <div className="flex items-center justify-center text-primary-600">
            <Check className="w-5 h-5" />
          </div>
        ) : (
          <div className="flex items-center justify-center text-red-500">
            <X className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="text-center">
        {coOwnership ? (
          <div className="flex items-center justify-center text-primary-600">
            <Check className="w-5 h-5" />
          </div>
        ) : (
          <div className="flex items-center justify-center text-red-500">
            <X className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  </AnimatedElement>
);

const OwnershipComparison = () => {
  const features = [
    {
      feature: "CoBrother Ecosystem",
      coOwnership: true,
      fullOwnership: false,
      delay: 0.2
    },
    {
      feature: "Professional Property Management",
      coOwnership: true,
      fullOwnership: false,
      delay: 0.3
    },
    {
      feature: "Shared Maintenance Costs",
      coOwnership: true,
      fullOwnership: false,
      delay: 0.4
    },
    {
      feature: "Premium Location Access",
      coOwnership: true,
      fullOwnership: false,
      delay: 0.5
    },
    {
      feature: "Diversified Portfolio",
      coOwnership: true,
      fullOwnership: false,
      delay: 0.6
    },
    {
      feature: "Investment Friendly",
      coOwnership: true,
      fullOwnership: false,
      delay: 0.6
    },
  ];

  return (
    <div className="py-20">
      <AnimatedElement direction="up" delay={0.1}>
        <div className="-mt-28 max-w-7xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              omparison
            </h2>
            
            <div className="grid grid-cols-3 gap-4 mb-6 text-lg font-semibold">
              <div className="text-gray-900">Features</div>
              <div className="text-center text-primary-600">Ownership</div>
              <div className="text-center text-primary-600">Co-Ownership</div>
            </div>

            {features.map((item, index) => (
              <ComparisonItem
                key={index}
                feature={item.feature}
                coOwnership={item.coOwnership}
                fullOwnership={item.fullOwnership}
                delay={item.delay}
              />
            ))}

            <div className="mt-8 text-center text-gray-600">
              Experience the benefits of co-ownership with CoBrother's professional management 
              and community-focused approach.
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default OwnershipComparison;