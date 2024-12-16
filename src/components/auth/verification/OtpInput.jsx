import React, { useRef, useEffect } from 'react';

const OtpInput = ({ value, onChange, error }) => {
  const inputRefs = Array(6).fill(0).map(() => useRef(null));

  useEffect(() => {
    // Focus first input on mount
    inputRefs[0].current?.focus();
  }, []);

  const handleChange = (index, e) => {
    const val = e.target.value;
    if (val && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
    
    const newOtp = value.split('');
    newOtp[index] = val.slice(-1);
    onChange(newOtp.join(''));
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    onChange(pastedData);
    
    // Focus appropriate input after paste
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs[focusIndex].current?.focus();
  };

  return (
    <div>
      <div className="flex justify-between max-w-xs mx-auto">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`w-12 h-14 text-center text-xl font-semibold rounded-lg border ${
              error ? 'border-red-500' : 'border-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
          />
        ))}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
};

export default OtpInput;