import React from 'react';
import { Search, MapPin, DollarSign } from 'lucide-react';

const PriceRangeSelector = () => {
  return (
    <div className="relative w-full">
      <DollarSign className="text-purple-500" />
      <select className="w-full focus:outline-none bg-transparent text-gray-300 appearance-none">
        <option value="" className="bg-gray-800">Price Range</option>
        <option value="0-500000" className="bg-gray-800">Under $500k</option>
        <option value="500000-1000000" className="bg-gray-800">$500k - $1M</option>
        <option value="1000000-2000000" className="bg-gray-800">$1M - $2M</option>
        <option value="2000000-5000000" className="bg-gray-800">$2M - $5M</option>
        <option value="5000000+" className="bg-gray-800">$5M+</option>
      </select>
    </div>
  );
};

const SearchBar = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto rounded-lg shadow-2xl p-4 animate-fadeIn cursor-glow"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 rounded-lg bg-gray-800/40 backdrop-blur-xl"></div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r border-purple-900/20 p-2">
          <MapPin className="text-purple-500" />
          <input
            type="text"
            placeholder="Location"
            className="w-full focus:outline-none bg-transparent text-gray-300 placeholder-gray-500"
          />
        </div>
        <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r border-purple-900/20 p-2">
          <PriceRangeSelector />
        </div>
        <div className="flex items-center space-x-2">
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 group">
            <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;