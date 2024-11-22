import React from 'react';
import { Building2, Users, User } from 'lucide-react';

const Card = ({ icon: Icon, title, description, delay }: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: string;
}) => {
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
      className={`relative p-6 rounded-xl backdrop-blur-lg floating ${delay} cursor-glow`}
      style={{
        background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.1), rgba(67, 56, 202, 0.05))',
        border: '1px solid rgba(139, 92, 246, 0.1)',
      }}
      onMouseMove={handleMouseMove}
    >
      <Icon className="w-12 h-12 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const BusinessCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-16">
      <Card
        icon={Building2}
        title="Business"
        description="Premium properties for corporate clients and businesses"
        delay="animation-delay-[200ms]"
      />
      <Card
        icon={Users}
        title="Enterprise"
        description="Large-scale real estate solutions for enterprises"
        delay="animation-delay-[400ms]"
      />
      <Card
        icon={User}
        title="Individual"
        description="Personalized luxury homes for discerning clients"
        delay="animation-delay-[600ms]"
      />
    </div>
  );
};

export default BusinessCards;