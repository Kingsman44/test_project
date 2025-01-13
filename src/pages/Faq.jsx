import React, { useState } from 'react';
import { MessageCircle, Send, Plus, Minus, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import AnimatedElement from '../components/animations/AnimatedElement';

const faqs = [
  {
    question: "What is property co-ownership?",
    answer: "Property co-ownership allows multiple investors to share ownership of a property through a structured legal framework. At CoBrother Ecosystem, we facilitate this through an LLP structure where each co-owner holds tokens representing their ownership stake."
  },
  {
    question: "How does CoBrother Ecosystem 2% management stake work?",
    answer: "CoBrother Ecosystem maintains a 2% non-dilutable management stake in each property LLP. This ensures our commitment to property management, maintenance, and value appreciation while aligning our interests with co-owners."
  },
  {
    question: "What types of properties can I invest in?",
    answer: "CoBrother Ecosystem offers co-ownership opportunities in residential, commercial, and agricultural properties. Each property is carefully selected based on location, potential returns, and growth prospects."
  },
  {
    question: "How can I exit my investment?",
    answer: "We provide structured exit options through token transfers. Co-owners have the right of first refusal, and we organize seasonal liquidity events. The process ensures fair valuation and smooth ownership transitions."
  },
  {
    question: "What are the minimum investment requirements?",
    answer: "Investment minimums vary by property and are structured to make premium real estate accessible to a broader range of investors while ensuring meaningful ownership stakes."
  }
];

const ChatMessage = ({ message, isUser }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`max-w-[80%] p-4 rounded-lg ${
      isUser 
        ? 'bg-primary-600 text-white' 
        : 'bg-white text-gray-700'
    }`}>
      {message}
    </div>
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { text: "Hello! I'm CoBrother Ecosystem AI assistant. How can I help you learn more about our co-ownership opportunities?", isUser: false }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setChatMessages([...chatMessages, { text: message, isUser: true }]);

    // Generate AI response
    setTimeout(() => {
      const aiResponse = "Thank you for your question. Our team will get back to you shortly.";
      setChatMessages(prev => [...prev, {
        text: aiResponse,
        isUser: false
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h1>
          </AnimatedElement>

          <AnimatedElement direction="up" delay={0.2}>
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
          </AnimatedElement>

          <AnimatedElement direction="up" delay={0.3}>
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-100 rounded-xl shadow-sm border border-primary-100 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-primary-50/50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary-600" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* AI Chatbot
          <div className={`fixed bottom-4 right-4 z-50 ${chatOpen ? 'w-96' : 'w-auto'}`}>
            {chatOpen ? (
              <div className="bg-white rounded-xl border border-primary-100 shadow-xl">
                <div className="p-4 border-b border-primary-100 flex justify-between items-center">
                  <h3 className="text-gray-900 font-semibold">CoBrother Ecosystem AI Assistant</h3>
                  <button 
                    onClick={() => setChatOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <div className="h-96 p-4 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <ChatMessage 
                      key={index}
                      message={msg.text}
                      isUser={msg.isUser}
                    />
                  ))}
                </div>
                <form onSubmit={handleSendMessage} className="p-4 border-t border-primary-100">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about co-ownership..."
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <button
                onClick={() => setChatOpen(true)}
                className="bg-primary-600 text-white p-4 rounded-full hover:bg-primary-700 transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Faq;