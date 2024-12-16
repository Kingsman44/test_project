import React from 'react';
import Navbar from '../components/Navbar';
import AnimatedElement from '../components/animations/AnimatedElement';
import { Building2, Scale, Users, Leaf, ArrowRight } from 'lucide-react';

const StepCard = ({ icon: Icon, title, content, delay }) => (
  <AnimatedElement direction="up" delay={delay}>
    <div className="relative p-6 rounded-xl bg-white shadow-lg border border-primary-100 cursor-glow">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary-100 rounded-lg">
          <Icon className="w-8 h-8 text-primary-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2">
        {content.map((item, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-600">
            <ArrowRight className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </AnimatedElement>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: Building2,
      title: "Property Selection",
      content: [
        "Carefully curated premium properties",
        "Strategic locations with growth potential",
        "Thorough due diligence and verification",
        "Focus on sustainable and modern designs"
      ],
      delay: 0.2
    },
    {
      icon: Scale,
      title: "Legal Structure",
      content: [
        "LLP formation under Indian law",
        "Clear ownership documentation",
        "Transparent token distribution",
        "Professional management framework"
      ],
      delay: 0.4
    },
    {
      icon: Users,
      title: "Community Building",
      content: [
        "Advanced neighbor matching system",
        "Shared values and preferences",
        "Regular community events",
        "Collaborative decision-making"
      ],
      delay: 0.6
    },
    {
      icon: Leaf,
      title: "Sustainable Management",
      content: [
        "Professional property maintenance",
        "Eco-friendly practices",
        "Regular upgrades and improvements",
        "Efficient resource utilization"
      ],
      delay: 0.8
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How CoBrother Works
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process makes co-ownership simple, transparent, and efficient.
                Here's how we transform property investment into a collaborative experience.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>

          <AnimatedElement direction="up" delay={1.0}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Join CoBrother today and discover the future of property ownership.
                Our team is here to guide you through every step of the journey.
              </p>
              <div className="flex justify-center">
                <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Begin Your Journey
                </button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;