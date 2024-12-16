import React, { useState } from 'react';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ title, description, sqft, members, image, location, mapUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      className="relative group h-[400px] rounded-xl overflow-hidden cursor-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        
        <div className="flex items-center space-x-4 text-white/90 mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{members.toLocaleString()} Members</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary-200 transition-colors"
            >
              View on Map
            </a>
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`transition-all duration-300 ${
          isHovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-white">
              {sqft.toLocaleString()} Sq/ft
            </span>
            <Link 
              to="/get-started"
              state={{ property: title }}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;