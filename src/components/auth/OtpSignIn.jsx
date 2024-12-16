import React, { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBihQygxha0qRxb14LV81MH65GQshstBbU",
  authDomain: "cobrother-5f961.firebaseapp.com",
  projectId: "cobrother-5f961",
  storageBucket: "cobrother-5f961.firebasestorage.app",
  messagingSenderId: "1030961019067",
  appId: "1:1030961019067:web:ae2664d87d2a937c1cd19e",
  measurementId: "G-C49053S5SH",
};

initializeApp(firebaseConfig);
const auth = getAuth();

const OtpInput = ({ value, onChange, error }) => {
  const inputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef());

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
    const newOtp = [...Array(6)]
      .map((_, i) => (i === index ? value : value[i] || ""))
      .join("");
    onChange(newOtp);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
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
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`w-10 h-12 text-center text-xl font-semibold rounded-lg border ${
              error ? "border-red-500" : "border-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
    </div>
  );
};

const OtpSignIn = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(0);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!/^\d{10}$/.test(phone.replace(/[^0-9]/g, ""))) {
      setError("Please enter a valid 10-digit phone number 6556");
      return;
    }

    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
      );

      const formattedPhone = `+91${phone}`; // Assuming Indian numbers
      const result = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier);
      setConfirmationResult(result);
      setStep(2);
      setTimer(30);

      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError("Failed to send OTP. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      const userCredential = await confirmationResult.confirm(otp);
      const idToken = await userCredential.user.getIdToken();
      onSubmit({ phone, idToken }); // Pass the phone and ID token to the parent
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    if (timer === 0) {
      await handlePhoneSubmit(); // Resend OTP logic
    }
  };

  return (
    <div className="space-y-6">
      {step === 1 ? (
        <form onSubmit={handlePhoneSubmit} className="space-y-4">
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
            </div>
            <div id="recaptcha-container"></div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Get OTP</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit} className="space-y-6">
          <div>
            <h3 className="text-center text-gray-700 mb-4">
              Enter the verification code sent to {phone}
            </h3>
            <OtpInput value={otp} onChange={setOtp} error={error} />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Verify OTP
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={handleResendOtp}
              className={`text-primary-600 ${
                timer > 0 ? "opacity-50 cursor-not-allowed" : "hover:text-primary-700"
              }`}
              disabled={timer > 0}
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default OtpSignIn;
