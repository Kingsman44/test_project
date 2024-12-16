import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import AnimatedElement from '../components/animations/AnimatedElement';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <AnimatedElement direction="up" delay={0.2}>
    <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-primary-100">
      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <div>
        <h3 className="text-gray-900 font-semibold">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  </AnimatedElement>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about co-ownership? Our team is here to help you understand the process and explore opportunities.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  content="+91 (555) 123-4567"
                />
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  content="cobrother.com@gmail.com"
                />
                <ContactInfo
                  icon={MapPin}
                  title="Office"
                  content="123 Business Avenue, Mumbai"
                />
                <ContactInfo
                  icon={Clock}
                  title="Hours"
                  content="Mon-Fri: 9AM to 6PM"
                />
              </div>

              <AnimatedElement direction="up" delay={0.3}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Mumbai HQ</h3>
                      <p className="text-gray-600">123 Business Avenue, Mumbai Central</p>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Bangalore Office</h3>
                      <p className="text-gray-600">456 Tech Park, Electronic City</p>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Delhi NCR</h3>
                      <p className="text-gray-600">789 Business Hub, Gurugram</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            <AnimatedElement direction="up" delay={0.4}>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Message subject"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;