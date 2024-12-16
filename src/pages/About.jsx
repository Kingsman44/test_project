import React from 'react';
import { Users, Award, Shield, Building } from 'lucide-react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 grid-pattern">
      <Navbar />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About LuxuryEstates
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Setting the standard in luxury real estate with unparalleled service and exceptional properties.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Building,
                title: "Premium Properties",
                description: "Curated selection of the world's finest luxury properties"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Dedicated professionals with deep industry knowledge"
              },
              {
                icon: Shield,
                title: "Trusted Service",
                description: "Committed to transparency and client satisfaction"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Award-winning service in luxury real estate"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-lg border border-purple-500/20"
              >
                <item.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded with a vision to revolutionize luxury real estate, LuxuryEstates has grown to become a leading name in premium property solutions.
                </p>
                <p>
                  Our journey began with a simple mission: to provide discerning clients with access to the world's most exceptional properties while delivering unparalleled service.
                </p>
                <p>
                  Today, we continue to set new standards in the industry, combining innovative technology with personalized expertise to create remarkable real estate experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
                  alt="Luxury Office"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "2500+", label: "Properties Sold" },
              { value: "100+", label: "Cities Covered" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-lg border border-purple-500/20 text-center"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;