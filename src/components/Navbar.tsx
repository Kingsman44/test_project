import React from 'react';
import { Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-4 py-2 mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-gray-900/60 border border-purple-900/20 rounded-2xl">
          <div className="flex justify-between h-16 items-center px-6">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">LuxuryEstates</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Properties</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-4 py-2 text-purple-400 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                List Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;