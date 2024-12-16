import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import RegisterStep2 from '../components/RegisterStep2';
import AnimatedElement from '../components/animations/AnimatedElement';

const InputField = ({ icon: Icon, label, type, value, onChange, placeholder, error }) => (
  <div>
    <label htmlFor={label} className="block text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className={`w-full bg-white border ${error ? 'border-red-500' : 'border-gray-200'} rounded-lg pl-12 pr-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
        placeholder={placeholder}
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const ProgressBar = ({ currentStep }) => (
  <div className="w-full mb-8">
    <div className="relative">
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200"></div>
      <div 
        className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-primary-600 transition-all duration-300"
        style={{ width: `${(currentStep / 2) * 100}%` }}
      ></div>
      <div className="relative flex justify-between">
        {[1, 2].map((step) => (
          <div
            key={step}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step <= currentStep ? 'bg-primary-600' : 'bg-gray-200'
            } text-white text-sm transition-colors duration-300`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-between mt-2">
      <span className="text-gray-600 text-sm">Basic Info</span>
      <span className="text-gray-600 text-sm">Personal Details</span>
    </div>
  </div>
);

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 data
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // Step 2 data
    ageGroup: '',
    occupation: '',
    income: '',
    maritalStatus: '',
    children: [],
    dietary: '',
    environment: '',
    pets: []
  });
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1 && validateStep1()) {
      handleNext();
    } else if (step === 2) {
      // Handle final form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 pt-32 pb-16">
        <div className="w-full max-w-2xl">
          <AnimatedElement direction="up" delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Create Account</h2>
              <ProgressBar currentStep={step} />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  <>
                    <InputField
                      icon={User}
                      label="Full Name"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      error={errors.fullName}
                    />
                    <InputField
                      icon={Mail}
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      error={errors.email}
                    />
                    <InputField
                      icon={Phone}
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      error={errors.phone}
                    />
                    <InputField
                      icon={Lock}
                      label="Password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a password"
                      error={errors.password}
                    />
                    <InputField
                      icon={Lock}
                      label="Confirm Password"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Confirm your password"
                      error={errors.confirmPassword}
                    />
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <RegisterStep2 formData={formData} setFormData={setFormData} />
                    <div className="flex justify-between space-x-4 pt-6">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 border border-primary-500 text-primary-600 py-3 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
                      >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Create Account
                      </button>
                    </div>
                  </>
                )}
              </form>
              <p className="mt-6 text-center text-gray-600">
                Already have an account?{' '}
                <Link to="/signin" className="text-primary-600 hover:text-primary-700">Sign In</Link>
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default Register;