import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/SLOGAN.png';
import { Building2, Briefcase, Tractor } from 'lucide-react';
import AnimatedElement from './animations/AnimatedElement';
import axios from 'axios';
import LocationSearch from './search/LocationSearch';
import LocationSelector from './search/LocationSelector';


const images = [
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    alt: "Luxury modern home with pool"
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    alt: "Contemporary luxury house"
  },
  {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
    alt: "Modern architectural masterpiece"
  }
];

const PropertyCard = ({ title, description, icon: Icon, backgroundUrl, delay }) => {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <AnimatedElement direction="left" delay={0}>
      <Link
        to="/apartments"
        className="relative group block max-sm:w-[250px] max-sm:h-[150px] h-[250px] rounded-2xl overflow-hidden cursor-glow"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0">
          <img
            src={backgroundUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-gray-900 group-hover:opacity-75 transition-opacity duration-500" />
        </div>


        <div className="relative max-sm:h-[300px] h-full flex flex-col items-center justify-center text-center sm:p-8">
          {/* <Icon className="w-16 h-16 max-sm:-mt-3 max-sm:h-6 max-sm:w-6 text-white mb-2 sm:mb-6 transform group-hover:scale-110 transition-transform duration-500" /> */}
          <h3 className="max-sm:text-xl sm:my-auto text-3xl font-bold text-white">{title}</h3>
          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </Link>
    </AnimatedElement>
  );
};

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState([]);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const { data } = await axios.get('/api/category/find');
        if (data.success) {
          setCategory(data.data);
        } else {
          alert("Error Fetching categories");
        }
      } catch (e) {
        console.log(`Error: ${String(e)}`);
      }
    }

    fetchCategory();
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative -mt-[64px] w-full">
      {/* Content Container */}
      <div className="flex sm:items-center px-5">
        {/* Main Content */}
        <div className="flex-1 text-center pt-44 text-gray-600">
          <h1 className="text-3xl sm:text-3xl py-12 md:text-5xl mb-8">
            <img src={Logo} className="h-40 max-sm:h-16 -mt-16 max-sm:-my-6 -m-12 max-sm:-mx-4 inline drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            {/* {' '} - Just as Awesome as{' '}
            <span className="font-cursive text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent damion-regular">
              You!
            </span> */}
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 mb-16">
          <div className="bg-white rounded-lg shadow-xl shadow-[#ccc] p-2 flex items-center">
            <LocationSelector
              isOpen={isLocationOpen}
              onToggle={() => setIsLocationOpen(!isLocationOpen)}
            />
            <div className="mx-2 flex-1">
              <LocationSearch />
            </div>
          </div>
        </div>
      {category.length > 0 && <div className="flex -mt-4 overflow-x-auto max-sm:space-x-2 md:grid md:grid-cols-3 max-sm:gap-2 gap-2 max-w-7xl mx-auto px-4">
        {category.map((val) => {
          return <PropertyCard
            key={val._id}
            title={val.category}
            description={val.description}
            backgroundUrl={val.image}
            delay={0}
            icon={Building2}
          />
        })}
      </div>}
      <div className='flex items-center justify-center py-8'>
        <Link
          to="/get-started"
          className="get-started-button text-center justify-center inline-flex items-center px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-lg"
        >
          Join CoBrother <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
      {/* Bottom Fade
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-200 via-gray-100/20 to-transparent"
        style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0% 100%)' }}
      /> */}
    </div>
  );
};

export default ImageCarousel;