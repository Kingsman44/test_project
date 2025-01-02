import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useLocation } from '../../context/LocationContext';

const LocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setSelectedLocation, locations } = useLocation();

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSearchTerm('');
  };

  return (
    <div className="flex-1 relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      
      {searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-primary-100 py-2 z-50">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location) => (
              <button
                key={location}
                onClick={() => handleLocationSelect(location)}
                className="w-full text-left px-4 py-2 hover:bg-primary-50 transition-colors text-gray-700"
              >
                {location}
              </button>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No locations found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;