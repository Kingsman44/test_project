import React from 'react';
import { ArrowRight, Building2, Users, Leaf, Shield, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import CustomerFeedback from './CustomerFeedback';
import FaqSection from './landing/FaqSection';
import ContactSection from '../pages/Contact';
import Faq from '../pages/Faq';
import PropertyTypes from './landing/PropertyTypes';
import VideoSection from './landing/VideoSection';
import OwnershipComparison from './landing/OwnershipComparison';
import AnimatedElement from './animations/AnimatedElement';
import BenefitCard from './cards/BenefitCard';
import PropertyShowcase from './landing/PropertyShowcase';
import Vision from './landing/Vision';
import IntentionalLivingTable from './landing/IntentionalLivingTable';
import CooperativeHousing from './landing/CooperativeHousing';
import OwnershipSteps from './landing/OwnershipSteps';
import FinancialServices from './financial/FinancialServices';
import ProductsSection from './products/ProductsSection';
import Apartments from '../pages/Apartments';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Tailwind 'md' breakpoint

  const benefits = [
    {
      icon: Leaf,
      title: "Sustainable Communities",
      description: "Creating eco-friendly spaces with sustainable materials and green practices.",
      delay: 0.8
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Protected by robust legal framework and professional management.",
      delay: 0.9
    },
    {
      icon: Users,
      title: "Compatible Neighbors",
      description: "Advanced matching system ensures harmonious community living.",
      delay: 1.0
    },
    {
      icon: Building2,
      title: "Premium Properties",
      description: "Carefully curated selection of high-quality real estate investments.",
      delay: 1.1
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous standards for property selection and maintenance.",
      delay: 1.2
    },
    {
      icon: Clock,
      title: "Diverse Communities",
      description: "Whether you love pets, lead an active lifestyle, there's a place for you.",
      delay: 1.3
    }
  ];

  return (
    <div className="relative pt-16 bg-white">
      <ImageCarousel />

      <div className="relative z-10">
        <div className="mx-auto text-center">
          <PropertyShowcase />

          {/* Conditional Rendering */}
          {isMobile ? <Apartments /> : <PropertyTypes />}

          <ProductsSection />

          <AnimatedElement direction="up" delay={0.6}>
            <div className="mt-8 py-4">
              <h2 className="text-3xl px-4 font-bold text-gray-900 mb-12">
                Why Choose CoBrother Ecosystem?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {benefits.map((benefit, index) => (
                  <AnimatedElement key={index} direction="up" delay={benefit.delay}>
                    <BenefitCard {...benefit} />
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>

          <Vision />
          <OwnershipSteps />
          <IntentionalLivingTable />
          <OwnershipComparison />
          <AnimatedElement direction="up" delay={0.6}>
            <ContactSection />
          </AnimatedElement>
          <AnimatedElement direction="up" delay={0.6}>
            <div className='-mt-10'>
            <Faq />
            </div>
          </AnimatedElement>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Hero;
