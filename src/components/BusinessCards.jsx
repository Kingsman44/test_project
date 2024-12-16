import React from 'react';
import { Building2, Users, Leaf, BookOpen } from 'lucide-react';

const Card = ({ icon: Icon, title, description, delay }) => {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <div 
      className={`relative h-[300px] p-6 rounded-xl bg-white shadow-lg cursor-glow ${delay}`}
      onMouseMove={handleMouseMove}
    >
      <div className="h-full flex flex-col">
        <Icon className="w-12 h-12 text-primary-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  );
};

const BusinessCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
      <Card
        icon={Building2}
        title="Housing Projects"
        description="Premium residential properties with modern amenities and sustainable design features for comfortable community living."
        delay="animation-delay-[200ms]"
      />
      <Card
        icon={Users}
        title="Business Spaces"
        description="Strategic commercial locations designed for enterprise growth and professional collaboration opportunities."
        delay="animation-delay-[400ms]"
      />
      <Card
        icon={Leaf}
        title="Agricultural"
        description="Sustainable farming and agricultural investments with focus on eco-friendly practices and community development."
        delay="animation-delay-[600ms]"
      />
      <Card
        icon={BookOpen}
        title="Educational"
        description="Modern learning spaces and educational institutions designed to foster knowledge sharing and growth."
        delay="animation-delay-[800ms]"
      />
    </div>
  );
};

export default BusinessCards;