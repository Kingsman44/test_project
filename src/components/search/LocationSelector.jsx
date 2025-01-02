import React from 'react';
import { MapPin } from 'lucide-react';
import { useLocation } from '../../context/LocationContext';

const LocationSelector = ({ onToggle, isOpen }) => {
  const { selectedLocation, setSelectedLocation, locations } = useLocation();

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    onToggle();
  };

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors"
      >
        <MapPin className="w-5 h-5 text-primary-600" />
        <span className="text-primary-600 font-medium">{selectedLocation}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-primary-100 py-2 z-50">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => handleLocationSelect(location)}
              className={`w-full text-left px-4 py-2 hover:bg-primary-50 transition-colors ${
                selectedLocation === location ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
              }`}
            >
              {location}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;