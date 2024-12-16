import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { validatePhoneNumber } from '../../../utils/validation';

const PhoneVerification = ({ onSubmit, error, setError }) => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validatePhoneNumber(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    onSubmit(phone);
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-center">
        Enter your phone number to get started. We'll send you a verification code.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter your phone number"
              required
            />
            <div id="recaptcha-container"></div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Send Verification Code
        </button>
      </form>
    </div>
  );
};

export default PhoneVerification;