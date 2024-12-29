import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingAnimation from './components/LoadingAnimation';
import Footer from './components/footer/Footer';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import HowItWorks from './pages/HowItWorks';
import Faq from './pages/Faq';
import Apartments from './pages/Apartments';
import Contact from './pages/Contact';
import About from './pages/About';
import Bond from './pages/Bond';
import GetStarted from './pages/GetStarted';
import axios from 'axios';

axios.defaults.baseURL="http://3.109.80.98"

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<><SignIn /><Footer /></>} />
      <Route path="/register" element={<><Register /><Footer /></>} />
      <Route path="/how-it-works" element={<><HowItWorks /><Footer /></>} />
      <Route path="/faq" element={<><Faq /><Footer /></>} />
      <Route path="/apartments" element={<><Navbar /><Apartments /></>} />
      <Route path="/contact" element={<><Navbar /><div className='pt-20'><Contact /></div><Footer /></>} />
      <Route path="/about" element={<><About /><Footer /></>} />
      <Route path="/get-started" element={<><GetStarted /><Footer /></>} />
      <Route path="/" element={
        <div className="min-h-screen bg-primary-50">
          <LoadingAnimation />
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <Footer />
          </div>
        </div>
      } />
    </Routes>
  );
}

export default App;