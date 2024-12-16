import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const PropertyCard = ({ sqft, location, members }) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/40 transition-colors">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent animate-pulse"></div>
      </div>
      
      <div className="relative p-6 border border-primary-200/20 rounded-xl">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">
            {sqft.toLocaleString()} Sq/ft
          </h3>
          <p className="text-primary-100">{location}</p>
          <p className="text-gray-300">Community For {members.toLocaleString()} Cobrothers</p>
          
          <button className="mt-4 px-6 py-2 bg-primary-600/80 hover:bg-primary-600 text-white rounded-lg transition-all duration-300 flex items-center space-x-2 group">
            <span>JOIN</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ResidentialListings = () => {
  const properties = [
    {
      sqft: 25000,
      location: 'Hubli Vidyanagar',
      members: 72
    },
    {
      sqft: 137000,
      location: 'Hubli Central',
      members: 350
    },
    {
      sqft: 5700000,
      location: 'IIT DHARWAD',
      members: 5000
    },
    {
      sqft: 72000,
      location: 'Gokul Road Hubli',
      members: 200
    }
  ];

  return (
    <div className="py-20">
      <AnimatedElement direction="up" delay={0.4}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">RESIDENTIAL</h2>
            <p className="text-gray-300">Premium Properties Available for Co-ownership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <AnimatedElement key={index} direction="up" delay={0.2 * (index + 1)}>
                <PropertyCard {...property} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default ResidentialListings;