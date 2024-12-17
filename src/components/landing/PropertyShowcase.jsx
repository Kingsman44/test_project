import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Users } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';
import PropertyCard from './PropertyCard';
import { useNavigate } from 'react-router-dom';
import { useLocation } from '../../context/LocationContext';
import { propertiesByLocation } from '../../data/properties';

const PropertyShowcase = () => {
  const { selectedLocation } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();


  // Get properties for the selected location
  const properties = propertiesByLocation[selectedLocation] || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [properties.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedLocation]);

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevProperty = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const property = properties[currentIndex];
  const nextPropertyIndex = (currentIndex + 1) % properties.length;
  const nextPropertyData = properties[nextPropertyIndex];

  if (!property || properties.length ==0) return null;

  return (
    <div className="relative w-full bg-gray-200">
      <AnimatedElement direction="up" delay={0.4}>
        <div className="max-w-[1920px] mx-auto pb-12">
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties in {selectedLocation}</h2>
            <p className="text-gray-600">Discover Our Premium Co-ownership Opportunities</p>
          </div>

          <div className="flex pb-8 max-sm:none">
            <div className="flex-1 grid md:grid-cols-2 gap-8 items-center px-4">
              <div className="space-y-6">
                <AnimatedElement key={currentIndex} direction="left" delay={0.2}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{property.description}</p>
                  
                  <div className="flex items-center justify-center space-x-8 mb-6">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">{property.sqft.toLocaleString()}</span>
                        <span className="text-gray-600">Sq/ft</span>
                      </div>
                    </div>
                    <div className="h-12 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">{property.members.toLocaleString()}</span>
                        <span className="text-gray-600">Cobrothers</span>
                      </div>
                    </div>
                    <div className="h-12 w-px bg-gray-300"></div>
                    <div className="flex items-center">
                      <a 
                        href={property.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <MapPin className="w-5 h-5" />
                        <span>View on Maps</span>
                      </a>
                    </div>
                  </div>

                  <button 
                    className="mt-8 px-8 py-3 get-started-button inline-flex items-center bg-gray-700 text-gray-100 rounded-lg border-2 border-primary-300 transition-all duration-300 text-lg font-semibold hover:bg-primary-300 hover:text-gray-800 hover:border-gray-300 shadow-lg hover:shadow-primary-500/50" 
                    onClick={() => navigate('/get-started',{ state: { property: property.title } })}
                  >
                    <span>Join Community</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </AnimatedElement>
              </div>

              <div 
                className="relative h-[600px] rounded-2xl overflow-hidden group"
                style={{
                  backgroundImage: `url(${property.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
                  <button
                    onClick={prevProperty}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextProperty}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {properties.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div 
              className="w-[10%] relative rounded-2xl cursor-pointer group"
              onClick={nextProperty}
              style={{
                backgroundImage: `url(${nextPropertyData.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 rounded-2xl group-hover:bg-primary-50/200 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center"></div>
              </div>
              <div className="absolute rounded-2xl bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary-900 to-transparent">
                <p className="text-white text-sm font-medium truncate">
                  {nextPropertyData.title}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
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

export default PropertyShowcase;