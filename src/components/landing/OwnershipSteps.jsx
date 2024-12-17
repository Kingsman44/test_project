import React from 'react';
import { Search, Wallet, FileText, Scale, Home } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const Step = ({ icon: Icon, number, title, points, delay }) => (
  <AnimatedElement direction="up" delay={delay}>
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-6 shadow-lg border border-primary-100">
      <div className="flex items-start space-x-4">
        <div className="max-sm:hidden flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary-600" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex max-sm:flex-col items-center space-x-2 mb-3">
            <span className="max-sm:rounded-lg max-sm:w-full max-sm:mb-3 max-sm:p-2 max-sm:bg-primary-100 text-primary-600 font-bold">STEP {number}:</span>
            <h3 className="max-sm:text-[16px] max-sm:text-left text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <ul className="space-y-2">
            {points.map((point, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
                <span className="max-sm:text-left text-gray-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </AnimatedElement>
);

const OwnershipSteps = () => {
  const steps = [
    {
      icon: Search,
      title: "FINDING YOUR PERFECT CO-BUYING TEAM",
      points: [
        "Build your ideal purchasing group",
        "Define shared values and priorities",
        "Establish group dynamics and expectations",
        "Create a compatibility framework"
      ],
      delay: 0.2
    },
    {
      icon: Wallet,
      title: "MASTERING THE FINANCES",
      points: [
        "Develop comprehensive budget plans",
        "Navigate mortgage options together",
        "Understand shared financial responsibilities",
        "Create emergency fund strategies"
      ],
      delay: 0.3
    },
    {
      icon: FileText,
      title: "CRAFTING YOUR CO-LIVING BLUEPRINT",
      points: [
        "Design house rules and shared spaces guidelines",
        "Establish maintenance responsibilities",
        "Create conflict resolution procedures",
        "Plan for shared expenses and utilities"
      ],
      delay: 0.4
    },
    {
      icon: Scale,
      title: "SECURING LEGAL PROTECTION",
      points: [
        "Draft comprehensive co-ownership agreements",
        "Address potential future scenarios",
        "Establish exit strategies",
        "Protect everyone's interests legally"
      ],
      delay: 0.5
    },
    {
      icon: Home,
      title: "DISCOVERING YOUR DREAM PROPERTY",
      points: [
        "Identify must-have property features",
        "Understand zoning requirements",
        "Evaluate renovation potential",
        "Assess neighborhood compatibility"
      ],
      delay: 0.6
    }
  ];

  return (
    <div className="w-full">
      <AnimatedElement direction="up" delay={0.1}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                YOUR JOURNEY TO SUCCESSFUL CO-OWNERSHIP
              </h2>
              <p className="text-gray-600 mt-4">
                Follow our proven 5-step roadmap to ensure a smooth and successful experience
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={index + 1}
                  {...step}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default OwnershipSteps;