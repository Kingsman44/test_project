import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import OtpInput from './OtpInput';

const OtpVerification = ({ phoneNumber, onVerified, onResendOtp, onBack, otp, setOtp, error, setError }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    // Here you would typically verify the OTP with your backend
    onVerified();
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
      onResendOtp();
    }
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </button>

      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Verify Your Phone
        </h2>
        <p className="text-gray-600">
          Enter the verification code sent to {phoneNumber}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <OtpInput
          value={otp}
          onChange={setOtp}
          error={error}
        />

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Verify Code
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={handleResend}
            className={`text-primary-600 ${
              timer > 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary-700'
            }`}
            disabled={timer > 0}
          >
            {timer > 0 ? `Resend code in ${timer}s` : 'Resend code'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtpVerification;