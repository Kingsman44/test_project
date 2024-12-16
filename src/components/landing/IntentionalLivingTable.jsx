import React from 'react';
import { Check } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const TableRow = ({ heading, actions }) => (
  <div className="grid md:grid-cols-3 gap-4 p-6 even:bg-gray-200 hover:bg-gray-100 transition-colors">
    <div className="font-semibold text-gray-900">{heading}</div>
    <div className="md:col-span-2">
      <ul className="space-y-2">
        {actions.map((action, index) => (
          <li key={index} className="flex items-start space-x-2">
            <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{action}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const IntentionalLivingTable = () => {
  const categories = [
    {
      heading: "Community Engagement",
      actions: [
        "Participate in local community meetings and events",
        "Join or start a neighborhood association",
        "Volunteer for local initiatives and projects",
        "Organize community gatherings and celebrations"
      ]
    },
    {
      heading: "Shared Resources",
      actions: [
        "Create a tool-sharing program",
        "Establish a community garden",
        "Organize carpooling and shared transportation",
        "Set up a skills exchange network"
      ]
    },
    {
      heading: "Social Connection",
      actions: [
        "Host regular community meals",
        "Create interest-based groups and clubs",
        "Organize recreational activities",
        "Support neighbors during life transitions"
      ]
    },
    {
      heading: "Environmental Stewardship",
      actions: [
        "Implement community recycling programs",
        "Maintain shared green spaces",
        "Organize neighborhood cleanups",
        "Support local environmental initiatives"
      ]
    },
    {
      heading: "Cultural Exchange",
      actions: [
        "Celebrate diverse cultural traditions",
        "Share traditional foods and recipes",
        "Organize cultural education events",
        "Create opportunities for intergenerational learning"
      ]
    },
    {
      heading: "Mutual Support",
      actions: [
        "Establish a neighborhood watch program",
        "Create emergency response networks",
        "Support local businesses and artisans",
        "Organize childcare and elder care sharing"
      ]
    }
  ];

  return (
    <div className="w-full">
      <AnimatedElement direction="up" delay={0.2}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Living Intentionally: A Practical Guide
            </h2>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {categories.map((category, index) => (
                <AnimatedElement key={index} direction="up" delay={0.1 * (index + 1)}>
                  <TableRow {...category} />
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default IntentionalLivingTable;