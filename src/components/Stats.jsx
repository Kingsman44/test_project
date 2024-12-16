import React from 'react';

const StatCard = ({ value, label }) => {
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
      className="relative text-center p-6 rounded-lg hover:scale-105 transition-transform cursor-glow"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 rounded-lg bg-gray-800/40 backdrop-blur-xl"></div>
      <div className="relative">
        <p className="text-4xl font-bold text-purple-400 animate-countUp">{value}</p>
        <p className="text-gray-300">{label}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fadeIn">
      <StatCard value="100+" label="Projects" />
      <StatCard value="1000+" label="Co-owners" />
      <StatCard value="25+" label="Cities" />
      <StatCard value="98%" label="Satisfaction Rate" />
    </div>
  );
};

export default Stats;