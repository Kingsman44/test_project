import React, { useEffect, useState } from 'react';
import { Building2, Briefcase, Tractor } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../animations/AnimatedElement';
import axios from 'axios';

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
    <AnimatedElement direction="up" delay={delay}>
      <Link
        to="/apartments"
        className="relative group block h-[400px] rounded-2xl overflow-hidden cursor-glow"
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

        <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
          <Icon className="w-16 h-16 text-white mb-6 transform group-hover:scale-110 transition-transform duration-500" />
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/90 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            {description}
          </p>
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

const PropertyTypes = () => {
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

  return (
    <div>
      {category.length > 0 && <div className="py-20">
        <AnimatedElement direction="up" delay={0.4}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Featured Properties
          </h2>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
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
        </div>
      </div>}
    </div>
  );
};

export default PropertyTypes;