import React from 'react';
import ImageCarousel from './ImageCarousel';
import SearchBar from './SearchBar';
import Stats from './Stats';
import BusinessCards from './BusinessCards';
import Model3D from './Model3D';

const Hero = () => {
  return (
    <div className="relative pt-16">
      <Model3D />

      <div className="relative z-10 px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 animate-fadeInUp">
            Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Luxury</span> Haven
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Explore our curated collection of prestigious properties, where luxury meets lifestyle.
          </p>

          <SearchBar />
          <Stats />
          <BusinessCards />
        </div>
      </div>
    </div>
  );
};

export default Hero;