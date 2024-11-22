import React from 'react';

const StatCard = ({ value, label }: { value: string; label: string }) => {
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
      className="relative text-center p-4 rounded-lg hover:scale-105 transition-transform cursor-glow"
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
    <div className="mt-12 flex justify-center space-x-12 animate-fadeIn">
      <StatCard value="2500+" label="Properties" />
      <StatCard value="1800+" label="Happy Clients" />
      <StatCard value="100+" label="Cities" />
    </div>
  );
};

export default Stats;