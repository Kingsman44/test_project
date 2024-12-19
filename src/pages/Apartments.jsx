import React, { useEffect, useRef, useState } from 'react';
import { Building2, Briefcase, Tractor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnimatedElement from '../components/animations/AnimatedElement';
import axios from 'axios';

const PropertySection = ({ title, description, icon: Icon, image, onClick, showDivider }) => {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="relative min-h-screen snap-start" id={title.replace(/\s+/g, '-')}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-primary-900/60 transition-colors cursor-glow"
          onMouseMove={handleMouseMove}
        />
      </div>

      {/* Content */}
      <AnimatedElement direction="up" delay={0.2}>
        <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
          <Icon className="w-16 h-16 text-white mb-6 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-white max-w-xl mb-8">{description}</p>
          <button
            onClick={onClick}
            className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Join CoBrother
          </button>
        </div>
      </AnimatedElement>

      {/* Scroll Indicator */}
      <div className="absolute m-auto left-0 right-0 bottom-8 animate-scroll-down flex flex-col items-center">
        {showDivider ? (
          <>
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full"></div>
            </div>
            <div className="text-white/50 text-sm mt-2">Scroll Down</div>
          </>
        ) : (
          <>
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full"></div>
            </div>
            <div className="text-white/50 text-sm mt-2">Scroll Up</div>
          </>
        )}
      </div>
    </div>
  );
};

const Apartments = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
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

  useEffect(() => {
    const sections = document.querySelectorAll('.snap-start');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Auto-scroll the section into full view
          entry.target.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-primary-50">
      <div ref={containerRef} className="h-screen snap-y snap-mandatory overflow-y-scroll">
        {/* <PropertySection
          title="Residential Properties"
          description="Find your perfect residential co-ownership match. Our preference system helps you connect with like-minded neighbors who share your values and lifestyle."
          icon={Building2}
          image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
          onClick={() => navigate('/get-started', { state: { formType: 0 } })}
          showDivider={true}
        />
        <PropertySection
          title="Business Properties"
          description="Connect with compatible business neighbors. Our matching system ensures a harmonious professional environment for your enterprise."
          icon={Briefcase}
          image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80"
          onClick={() => navigate('/get-started', { state: { formType: 1 } })}
          showDivider={true}
        />
        <PropertySection
          title="Agricultural Properties"
          description="Strategic commercial locations for your Agricultural. Invest in premium office spaces and retail properties in prime locations."
          icon={Tractor}
          image="https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          onClick={() => navigate('/get-started', { state: { formType: 2 } })}
          showDivider={false}
        /> */}
        {category.map((val) => {
          return <PropertySection
            key={val._id}
            title={val.category}
            description={val.description}
            image={val.image}
            delay={0}
            icon={Building2}
            onClick={() => navigate('/get-started', { state: { category: val._id } })}
          />
        })}
      </div>
    </div>
  );
};

export default Apartments;
