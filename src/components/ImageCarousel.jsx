import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

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

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative -mt-[64px] w-full h-screen overflow-hidden">
      {/* Mask Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent z-10" />

      {/* Images as Backgrounds */}
      {images.map((image, index) => (
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
      ))}

      {/* Content Container */}
      <div className="relative z-20 h-full flex items-center justify-between px-5">
        {/* Main Content */}
        <div className="flex-1 animate-bounce-slow text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Join Your{' '}
            <img src={Logo} className='h-44 -mt-16 brightness-0 invert -m-12 inline drop-shadow-[0_0_10px_rgba(255,255,255,0.8)' />
            {' '} who is just Awesome as{' '}
            <span className="luxury-text bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 bg-clip-text text-transparent">
              You
            </span>
          </h1>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
            Build your dream community with CoBrother – Quality construction, transparency, and eco-friendly designs.
          </p>
          <Link
            to="/get-started"
            className="get-started-button inline-flex items-center px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-lg"
          >
            Join CoBrothers <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>

<div className="w-[500px] bg-white/80 p-2 m-5 rounded-xl backdrop-blur overflow-hidden">
  <div className="relative">
    <img 
      src="https://plus.unsplash.com/premium_photo-1664116928635-83695cb3da3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Agricultural Land"
      className="w-full h-[300px] object-cover rounded-xl"
    />
    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-white text-xl font-semibold rounded-xl">
      Agricultural Land at Hubli
        <div className="text-center">
    <Link
      to="/get-started"
      state={{property:'Hubli'}}
      className="mt-4 inline-flex items-center px-6 py-3 bg-primary-600/80 hover:bg-primary-600 rounded-lg transition-all duration-300 text-white shadow-lg"
    >
      ₹9/sq.ft Only <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  </div>
    </div>
  </div>

</div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-gray-200 via-gray-100/20 to-transparent"
        style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0% 100%)' }}
      />
    </div>
  );
};

export default ImageCarousel;