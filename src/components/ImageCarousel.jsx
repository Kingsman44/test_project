import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { Building2, Briefcase, Tractor } from 'lucide-react';
import AnimatedElement from './animations/AnimatedElement';
import axios from 'axios';


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
    <div className="relative -mt-[64px] h-screen w-full">
      {/* Mask Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent z-10" /> */}

      {/* Images as Backgrounds */}
      {/* {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30" />
        </div>
      ))} */}

      {/* Content Container */}
      <div className="flex sm:items-center px-5">
        {/* Main Content */}
        <div className="flex-1 text-center pt-44 text-gray-600">
          <h1 className="text-3xl sm:text-3xl md:text-5xl mb-8">
            Join Your{' '}
            <img src={Logo} className="h-40 max-sm:h-16 -mt-16 max-sm:-my-6 -m-12 max-sm:-mx-4 inline drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            {' '} who is just Awesome as{' '}
            <span className="font-cursive text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-primary-200 via-primary-300 to-primary-400 bg-clip-text text-transparent damion-regular">
              You
            </span>
          </h1>
          <p className="text-l mt-4 sm:text-2xl max-sm:-mt-6 mb-12 max-w-3xl mx-auto">
            Build your dream community with CoBrother – Quality construction, transparency, and eco-friendly designs.
          </p>
        </div>
      </div>
      {category.length > 0 && <div className="flex -mt-4 overflow-x-auto max-sm:space-x-2 md:grid md:grid-cols-3 max-sm:gap-2 gap-2 max-w-7xl mx-auto px-4">
        {/* <PropertyCard
          title="Residential Properties"
          description="Discover premium residential spaces designed for modern living. Find your perfect home among our carefully curated selection of properties."
          icon={Building2}
          backgroundUrl="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
          delay={0.6}
        />
        <PropertyCard
          title="Business Properties"
          description="Strategic commercial locations for your enterprise. Invest in premium office spaces and retail properties in prime locations."
          icon={Briefcase}
          backgroundUrl="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80"
          delay={0.8}
        />
        <PropertyCard
          title="Agricultural Properties"
          description="Strategic commercial locations for your Agricultural. Invest in premium office spaces and retail properties in prime locations."
          icon={Tractor}
          backgroundUrl="https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          delay={0.8}
        /> */}
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
          Join CoBrothers <ArrowRight className="ml-2 w-6 h-6" />
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