import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 grid-pattern">
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;