import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content: "CoBrother helped me find the perfect business location, and I'm already seeing a return on my investment!",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "The transparency and professional management of my co-owned property has exceeded expectations.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Agricultural Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    content: "CoBrother's sustainable farming initiatives have made agricultural investment accessible and profitable.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="w-[350px] p-6 mx-4 rounded-xl bg-white shadow-lg border border-primary-100">
    <div className="flex items-center gap-4 mb-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="text-gray-900 font-semibold">{testimonial.name}</h3>
        <p className="text-primary-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <Quote className="w-8 h-8 text-primary-400 mb-2 opacity-50" />
    <p className="text-gray-600">{testimonial.content}</p>
  </div>
);

const CustomerFeedback = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mb-8 bg-white/80 backdrop-blur-md rounded-xl py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Here's what our successful users have to say about their CoBrother experience.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 py-8 overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)' }}
      >
        <div className="flex gap-8 animate-scroll">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;