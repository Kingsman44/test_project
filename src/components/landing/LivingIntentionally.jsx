import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedElement from '../animations/AnimatedElement';

const Section = ({ title, content, isActive, onClick }) => (
  <div className="border-b border-gray-400 last:border-b-0">
    <button
      onClick={onClick}
      className="w-full py-4 flex items-center justify-between text-left transition-colors hover:bg-gray-400/20"
    >
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <ChevronRight 
        className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
          isActive ? 'rotate-90' : ''
        }`} 
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ${
        isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="pb-4 text-gray-600 leading-relaxed">{content}</p>
    </div>
  </div>
);

const LivingIntentionally = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Living Intentionally In Community",
      content: "Many co-ownership real estate purchases are made to support extended families or to create alternative home environments that foster collective care and support. These arrangements re-imagine concepts of home in the belief that individuals, children, and families thrive in community and collective environments. These environments foster interdependency and help break cultures of isolation, allowing like-minded groups—friends, chosen families, artists, seniors, or people wanting to live more sustainably—to imagine and invest in futures together."
    },
    {
      title: "Retirement Alternatives",
      content: "Many seniors are seeking alternatives to the loneliness and challenges of living alone, and the expenses of assisted living on a fixed income. Co-ownership can resolve isolation, create an opportunity for multi-generational living, and allow seniors the sense of security that comes from living in community and ageing-in-place with others."
    },
    {
      title: "Meeting Mutual Needs",
      content: "Many purchasing groups form because members have compatible offerings in a co-owned real estate purchase and living situation. For example, many seniors own large homes but may have low incomes and live in isolation. Offering equity to younger couples or families is a solution that could solve many needs."
    },
    {
      title: "Building Equity",
      content: "Investing in a co-ownership real estate purchase can be as valuable as in any other home purchase. For people who want to stop paying rent and instead build equity in their home, but cannot afford to enter the housing market on their own, co-ownership is an excellent opportunity. With thoughtful planning and due diligence, buyers can grow and redeem the value of this asset."
    },
    {
      title: "Affordability in Cities",
      content: "Renting in many cities is becoming increasingly unaffordable to most. Co-ownership may be a more affordable way to remain living in urban areas."
    },
    {
      title: "Shared Resources",
      content: "Living together as a group generally offers the prospect of mutual care, sharing resources and saving time. Your purchasing group might share child care, elder care, living assistance, or pet care. Gardening, cooking, driving and other skills and services might be shared, as well as assets like cars, bikes, gaming equipment, gyming equipment, farming implements, kids garden equipment and toys and tools. The possibilities for sharing and increasing your collective standard of living are as expansive as your purchasing group would like them to be!"
    },
    {
      title: "Potential Barriers To Co-Ownership",
      content: "While many are interested in co-purchasing as a housing alternative, they can be discouraged or swayed by the obstacles (both real and perceived)."
    },
    {
      title: "Commitment",
      content: "Committing to a co-ownership purchase may feel like a challenge when considering multiple future trajectories amongst a co-purchasing group, and uncontrollable unknowns or life changes. By using this guide, you and your group can create agreements for future potentialities, and generate a shared understanding of the level of commitment required for your co-purchase."
    },
    {
      title: "Perception of Legacy",
      content: "In some cases, home ownership can be tied to a sense of family legacy. Many homeowners expect to be able to pass their home asset on to their children. However, in a co-purchasing arrangement, a purchasing group may design their agreements so that their home ownership remains with group members, rather than falling to other family members. Co-ownership in real estate poses a cultural shift towards an understanding that living spaces can simply be equity assets, and not a guaranteed inheritance. You can contribute to that cultural shift as a group."
    },
    {
      title: "Complexity",
      content: "Even a group of adults confident in their co-purchasing group may find this process difficult. Assigning equity, developing house agreements, and creating legal contracts are all part of co-purchasing, and require detailed research and negotiation. It can feel daunting, but our team is here to guide you through these challenges."
    }
  ];

  return (
    <div className="w-full">
      <AnimatedElement direction="up" delay={0.2}>
        <div className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Living Intentionally In Community
          </h2>
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                content={section.content}
                isActive={activeSection === index}
                onClick={() => setActiveSection(activeSection === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default LivingIntentionally;