import React from 'react';

const BenefitCard = ({ icon: Icon, title, description }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update the position of the border glow
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div 
      className="group relative p-6 rounded-xl bg-white border border-primary-500/20 transition-all duration-300"
      onMouseMove={handleMouseMove}
    >
      <Icon className="w-12 h-12 text-primary-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>

      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-[-2px] rounded-xl" 
             style={{
               background: `radial-gradient(
                 600px circle at var(--x, 50%) var(--y, 50%),
                 rgba(34, 197, 94, 0.3),
                 transparent 15%
               )`,
             }} />
      </div>
    </div>
  );
};

export default BenefitCard;