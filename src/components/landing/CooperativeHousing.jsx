import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Users, Leaf } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const CooperativeHousing = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      icon: Building2,
      title: "Community-Centered Design",
      description: "Buildings designed for coexistence with common spaces and shared facilities"
    },
    {
      icon: Users,
      title: "Social Impact",
      description: "Creating resilient, self-managed communities that contribute to neighborhood vitality"
    },
    {
      icon: Leaf,
      title: "Sustainable Living",
      description: "Promoting circular economy and eco-friendly practices in housing"
    }
  ];

  return (
    <div className="w-full">
      <AnimatedElement direction="up" delay={0.2}>
        <div className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Future of Housing and Cities
              </h2>
              <p className="text-gray-600 mt-4">
                Reimagining urban living through cooperative and co-owning housing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <AnimatedElement key={index} direction="up" delay={0.2 * (index + 1)}>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Cooperative and co-owning housing proposes an alternative to the speculative real estate market, 
                  centered on the idea of community, sustainable, self-managed and co-responsible living.
                </p>

                <div className={`overflow-hidden transition-all duration-500 ${
                  isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-4 pt-4">
                    <p className="text-gray-700">
                      These communities are installed in the environment and participate in the responsibility 
                      of the neighborhood, bringing and creating a circular and close economy, and promoting 
                      a social return to the community.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                      Architectural Innovation
                    </h3>
                    <p className="text-gray-700">
                      These buildings are designed to understand coexistence, with common spaces and spaces 
                      for common use. Common spaces are staircases, lobbies, and other elements present in 
                      all communities. The common use spaces are those in which we promote coexistence between 
                      the different housing units in the building itself, such as common kitchens, multipurpose 
                      rooms or the use of the roof.
                    </p>

                    <p className="text-gray-700">
                      The model is therefore based on the creation of community and the architectural design 
                      responds to these needs. This type of architecture award responds to the eco-social 
                      transformation we are experiencing, where social, economic and sustainable aspects are 
                      increasingly valued.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-6 flex items-center justify-center w-full space-x-2 text-primary-600 hover:text-primary-700 transition-colors group"
                >
                  <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default CooperativeHousing;