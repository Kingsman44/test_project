import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const VisionCard = ({ title, shortContent, fullContent, image, isActive, onClick }) => {
  return (
    <div
      className={`relative transition-all duration-500 cursor-pointer overflow-hidden rounded-xl
        ${isActive ? 'w-full' : 'flex-1'}`}
      onClick={onClick}
      style={{ height: '400px' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isActive ? 'scale-105' : 'hover:scale-110'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-b transition-opacity duration-500 ${
          isActive 
            ? 'from-black/70 via-black/60 to-black/80' 
            : 'from-black/50 via-black/40 to-black/70'
        }`} />
      </div>

      {/* Content */}
      <div className={`relative p-8 h-full flex flex-col ${
        isActive ? 'justify-start max-w-4xl mx-auto' : 'justify-end'
      }`}>
        <h3 className={`font-bold text-white mb-4 transition-all duration-500 ${
          isActive ? 'text-4xl' : 'text-2xl'
        }`}>{title}</h3>
        
        <div className={`transition-all duration-500 overflow-hidden ${
          isActive 
            ? 'opacity-100 max-h-[1000px]' 
            : 'opacity-100 max-h-20'
        }`}>
          <p className={`text-white/90 transition-all duration-500 ${
            isActive ? 'text-xl leading-relaxed' : 'text-base line-clamp-2'
          }`}>
            {isActive ? fullContent : shortContent}
          </p>
        </div>

        {isActive && (
          <button
            className="mt-6 flex items-center justify-center space-x-2 text-white/80 hover:text-white transition-colors group self-start"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <span>Show Less</span>
            <ChevronUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};

const Vision = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "The Birth of Cobrother Ecosystem",
      shortContent: "Founded during the pandemic crisis when social foundations were challenged.",
      fullContent: "Amid the unprecedented challenges of the pandemic, when the very fabric of our social and emotional connections was tested, Cobrother Ecosystem was born—a beacon of hope and solidarity. Guided by the belief that together we are stronger, we reimagined how communities could thrive, fostering a spirit of brotherhood and cooperation.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
    },
    {
      title: "Our Approach",
      shortContent: "Understanding cooperative architecture as a holistic management system.",
      fullContent: "We believe in architecture that transcends boundaries—where social, emotional, economic, and energy resources are harmonized for the greater good. Sustainability is not just a goal; it’s our guiding principle in driving the socio-economic transition towards a brighter, more equitable future. By bringing architecture closer to people, we ignite an exchange of ideas, foster knowledge, and empower individuals to become active participants in creating spaces they call home. At Cobrother, we don’t just design structures; we build the bonds that sustain them.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
    },
    {
      title: "The Future of Co-Living",
      shortContent: "Exploring alternatives for cooperative living in modern urban environments.",
      fullContent: "Co-living, a timeless concept rooted in shared needs, is being redefined to address modern challenges like urban density and rising real estate costs. Architects and planners are shaping innovative, sustainable spaces that foster connection, cooperation, and a shared vision for the future. At Cobrother, we embrace these ideas to create communities where people truly thrive together.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      <AnimatedElement direction="up" delay={0.2}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600 mt-4">At Cobrother, we envision a world where communities are built on the foundation of shared ownership, innovation, and connection. Together, we’re redefining what it means to belong and thrive.</p>
            </div>
          </div>

          <div className={`transition-all duration-500 ${
            activeCard !== null ? 'px-4' : 'flex flex-row flex-wrap sm:flex-nowrap gap-4 px-4'
          }`}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeCard !== null && activeCard !== index ? 'hidden' : ''
                }`}
              >
                <VisionCard
                  {...card}
                  isActive={activeCard === index}
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default Vision;