import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../components/auth/SignInForm';
import SocialSignIn from '../components/auth/SocialSignIn';
import OtpSignIn from '../components/auth/OtpSignIn';
import Navbar from '../components/Navbar';

const SignIn = () => {
  const [activeTab, setActiveTab] = useState('email');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (data) => {
    setLoading(true);
    setError('');
    try {
      // Implement email sign in logic
      console.log('Email sign in:', data);
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      // Implement Google sign in logic
      console.log('Google sign in');
    } catch (err) {
      setError('Google sign in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      // Implement WhatsApp sign in logic
      console.log('WhatsApp sign in');
    } catch (err) {
      setError('WhatsApp sign in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSignIn = async (data) => {
    setLoading(true);
    setError('');
    try {
      // Implement OTP verification logic
      console.log('OTP sign in:', data);
    } catch (err) {
      setError('OTP verification failed');
    } finally {
      setLoading(false);
    }
  };

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-primary-600 text-white'
          : 'text-gray-600 hover:text-primary-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 pt-32 pb-16">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Welcome Back</h2>

            <div className="bg-gray-100 p-1 rounded-lg flex space-x-1 mb-8">
              <TabButton id="email" label="Email" />
              <TabButton id="social" label="Social" />
              <TabButton id="otp" label="OTP" />
            </div>

            {activeTab === 'email' && (
              <SignInForm onSubmit={handleEmailSignIn} error={error} />
            )}

            {activeTab === 'social' && (
              <SocialSignIn
                onGoogleSignIn={handleGoogleSignIn}
                onWhatsAppSignIn={handleWhatsAppSignIn}
              />
            )}

            {activeTab === 'otp' && (
              <OtpSignIn onSubmit={handleOtpSignIn} />
            )}

            {loading && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <p className="mt-6 text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary-600 hover:text-primary-700">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;