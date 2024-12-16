import React, { useState } from 'react';
import { Search, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is property co-ownership through CoBrother?",
    answer: "CoBrother facilitates property co-ownership through an LLP structure where multiple investors share ownership of premium properties. Each co-owner holds tokens representing their ownership stake, with CoBrother maintaining a 2% management stake to ensure professional oversight and value appreciation."
  },
  {
    question: "How does the neighbor matching system work?",
    answer: "Our sophisticated matching system considers lifestyle preferences, professional background, and personal values to ensure compatible co-owners. This creates harmonious communities while maintaining privacy and comfort for all residents."
  },
  {
    question: "What are the minimum investment requirements?",
    answer: "Investment minimums vary by property and location. We structure investments to make premium real estate accessible while ensuring meaningful ownership stakes. Contact our team for specific property investment details."
  },
  {
    question: "How can I exit my investment?",
    answer: "We provide flexible exit options through token transfers and scheduled liquidity events. Co-owners have the right of first refusal, and we facilitate smooth ownership transitions with fair market valuations."
  },
  {
    question: "What management services does CoBrother provide?",
    answer: "CoBrother handles all aspects of property management, including maintenance, tenant relations, community engagement, and financial administration. Our 2% management stake ensures aligned interests in property value appreciation."
  }
];

const FaqSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredFaqs(
      faqs.filter(faq => 
        faq.question.toLowerCase().includes(term) || 
        faq.answer.toLowerCase().includes(term)
      )
    );
  };

  return (
    <section className="rounded-xl mb-8 py-16 bg-white/60 backdrop-blur-lg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary-500 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;