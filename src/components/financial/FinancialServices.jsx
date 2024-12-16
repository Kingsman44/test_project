import React from 'react';
import LoanCard from './LoanCard';
import AnimatedElement from '../animations/AnimatedElement';
import { Home, GraduationCap, Wallet } from 'lucide-react';

const FinancialServices = () => {
  const loans = [
    {
      icon: Home,
      title: "Home Loan",
      description: "Realize your dream of homeownership with our competitive home loan options. Low interest rates and flexible repayment terms.",
      features: [
        "Interest rates from 8.5% p.a.",
        "Loan up to ₹5 Crore",
        "Quick approval process",
        "Zero prepayment charges"
      ],
      delay: 0.2
    },
    {
      icon: GraduationCap,
      title: "Education Loan",
      description: "Invest in your future with our education loans. Supporting your academic aspirations with tailored financial solutions.",
      features: [
        "100% funding for premier institutions",
        "Interest rates from 7.5% p.a.",
        "Moratorium period available",
        "Tax benefits under Section 80E"
      ],
      delay: 0.4
    },
    {
      icon: Wallet,
      title: "Other Loans",
      description: "Flexible financing solutions for various needs including business expansion, personal expenses, and more.",
      features: [
        "Customized loan structures",
        "Minimal documentation",
        "Quick disbursement",
        "Competitive interest rates"
      ],
      delay: 0.6
    }
  ];

  return (
    <div className="w-full py-20 bg-white">
      <AnimatedElement direction="up" delay={0.1}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Co-Financial Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive financial solutions to support your dreams and aspirations. 
              Partner with us for a secure financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loans.map((loan, index) => (
              <AnimatedElement key={index} direction="up" delay={loan.delay}>
                <LoanCard {...loan} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default FinancialServices;