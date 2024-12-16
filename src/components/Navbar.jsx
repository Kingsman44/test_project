import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useLocation } from '../context/LocationContext';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const isVisible = useScrollDirection();
  const { selectedLocation, setSelectedLocation } = useLocation();

  const locations = ['Hubli', 'Delhi', 'Gulbarga', 'Bangalore'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 px-4 py-2 mt-4 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-lg bg-white/75 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex justify-between h-20 items-center px-6">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="CoBrother" className="h-16 w-auto" />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-800 hover:text-primary-600 transition-colors">Home</Link>
              <Link to="/how-it-works" className="text-gray-800 hover:text-primary-600 transition-colors">How It Works</Link>
              <Link to="/faq" className="text-gray-800 hover:text-primary-600 transition-colors">FAQ</Link>
              <Link to="/contact" className="text-gray-800 hover:text-primary-600 transition-colors">Contact Us</Link>
              
              {/* Location Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-primary-600">{selectedLocation}</span>
                </button>
                
                {isLocationOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
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
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={() => navigate('/get-started')}
                className="px-4 py-2 get-started-button inline-flex items-center bg-gray-300 text-gray-800 rounded-lg border-2 border-primary-300 transition-all duration-300 text-l font-semibold hover:bg-primary-600 hover:text-white hover:border-gray-300 shadow-lg hover:shadow-primary-500/50"
              >
                Join Us
              </button>
              <button 
                onClick={() => navigate('/apartments')}
                className="px-4 py-2 get-started-button inline-flex items-center bg-gray-300 text-gray-800 rounded-lg border-2 border-primary-300 transition-all duration-300 text-l font-semibold hover:bg-primary-600 hover:text-white hover:border-gray-300 shadow-lg hover:shadow-primary-500/50"
              >
                Apartments
              </button>
            </div>

            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-800 p-2 transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 hover:rotate-180" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-white/20 mobile-menu-enter">
              <div className="px-4 py-4 space-y-4">
                <Link 
                  to="/" 
                  className="block text-gray-800 hover:text-primary-600 transition-colors mobile-menu-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/how-it-works" 
                  className="block text-gray-800 hover:text-primary-600 transition-colors mobile-menu-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  to="/faq" 
                  className="block text-gray-800 hover:text-primary-600 transition-colors mobile-menu-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-gray-800 hover:text-primary-600 transition-colors mobile-menu-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Location Selector */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 mb-2">Select Location</p>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          handleLocationSelect(location);
                          setIsMenuOpen(false);
                        }}
                        className={`px-3 py-2 rounded-lg text-sm ${
                          selectedLocation === location
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20 space-y-4">
                  <button 
                    onClick={() => {
                      navigate('/get-started');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-primary-600 border border-primary-500 rounded-lg hover:bg-primary-50 transition-colors mobile-menu-item"
                  >
                    Join US
                  </button>
                  <button 
                    onClick={() => {
                      navigate('/apartments');
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors mobile-menu-item"
                  >
                    Apartments
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;