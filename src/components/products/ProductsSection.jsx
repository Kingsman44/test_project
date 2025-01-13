import React, { useState } from 'react';
import { Building2, Warehouse, Leaf, Trophy } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const products = [
  {
    id: 'agriculture',
    icon: Leaf,
    title: 'Farming',
    shortDesc: 'Sustainable farming investments with modern agricultural practices',
    fullDesc: `Join our agricultural revolution with sustainable farming practices and modern technology integration:
    • Premium agricultural land at strategic locations
    • Modern farming infrastructure and equipment
    • Expert guidance on crop selection and management
    • Access to market networks and distribution channels
    • Community-driven farming initiatives`,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80',
    price: '9'
  },
  {
    id: 'apartments',
    icon: Building2,
    title: 'Housing',
    shortDesc: 'Premium residential spaces designed for modern community living',
    fullDesc: `Experience luxury living with our thoughtfully designed residential spaces:
    • Premium locations in thriving neighborhoods
    • Modern amenities and smart home features
    • Sustainable building practices
    • Community spaces for social interaction
    • Professional property management`,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    price: '2650'
  },
  {
    id: 'warehouse',
    icon: Warehouse,
    title: 'Co-Warehousing',
    shortDesc: 'Strategic storage solutions for businesses',
    fullDesc: `Transform your business logistics with our modern warehouse solutions:
    • Strategic locations near major transportation hubs
    • State-of-the-art storage facilities
    • Advanced inventory management systems
    • 24/7 security and monitoring
    • Flexible space allocation`,
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80',
    price: '1850'
  },
  {
    id: 'sports',
    icon: Trophy,
    title: 'Clubbing',
    shortDesc: 'World-class sports facilities for health enthusiasts',
    fullDesc: `Join our premium sports clubs for a complete fitness experience:
    • Modern gym equipment and facilities
    • Professional training programs
    • Multiple sports courts and facilities
    • Swimming pools and spa services
    • Regular sports events and competitions`,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    price: '449'
  }
];

const ProductCard = ({ product }) => {
  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden transition-all duration-500 bg-gray-800 group rounded-lg shadow-lg min-h-[300px] h-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col justify-between h-full">
        {/* Icon & Title */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <product.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{product.title}</h3>
        </div>

        {/* Short Description */}
        <p className="text-white/80 mb-4">{product.shortDesc}</p>

        {/* Price */}
        <p className="mt-auto text-primary-400 font-semibold">
          Starts at Rs {product.price} / sq.ft
        </p>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <div className="relative py-20 bg-gray-900">
      <AnimatedElement direction="up" delay={0.1}>
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our range of innovative co-ownership solutions designed to meet your needs
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default ProductsSection;
