import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PhoneVerification from '../components/auth/verification/PhoneVerification';
import OtpVerification from '../components/auth/verification/OtpVerification';
import AnimatedElement from '../components/animations/AnimatedElement';
import { initializeApp } from 'firebase/app';
import { Check } from 'lucide-react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useLocation } from '../context/LocationContext';
import { propertiesByLocation } from '../data/properties';
import { useNavigate } from 'react-router-dom';
import { useLocation as useRouteLocation } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBihQygxha0qRxb14LV81MH65GQshstBbU',
  authDomain: 'cobrother-5f961.firebaseapp.com',
  projectId: 'cobrother-5f961',
  storageBucket: 'cobrother-5f961.firebasestorage.app',
  messagingSenderId: '1030961019067',
  appId: '1:1030961019067:web:ae2664d87d2a937c1cd19e',
  measurementId: 'G-C49053S5SH',
};

// Initialize Firebase App
initializeApp(firebaseConfig);
const auth = getAuth();

const MultiSelect = ({ options, selected, onChange, label }) => (
  <div className="space-y-2">
    <label className="block text-gray-900 font-medium mb-4">{label}</label>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => {
            if (selected.includes(option)) {
              onChange(selected.filter(item => item !== option));
            } else {
              onChange([...selected, option]);
            }
          }}
          className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${selected.includes(option)
            ? 'bg-primary-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
            }`}
        >
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded border flex items-center justify-center ${selected.includes(option) ? 'border-white' : 'border-gray-400'
              }`}>
              {selected.includes(option) && <Check className="w-3 h-3" />}
            </div>
            <span>{option}</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

const SingleSelect = ({ options, selected, onChange, label }) => (
  <div className="space-y-2">
    <label className="block text-gray-900 font-medium mb-4">{label}</label>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${selected === option
            ? 'bg-primary-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
            }`}
        >
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected === option ? 'border-white bg-white' : 'border-gray-400'
              }`}>
              {selected === option && <div className="w-2 h-2 rounded-full bg-primary-600" />}
            </div>
            <span>{option}</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

const GetStarted = () => {
  const [step, setStep] = useState('phone');
  const [page, setPage] = useState('verify');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [otp, setOtp] = useState('');
  const [cap, setCap] = useState(false);
  const routeLocation = useRouteLocation();
  var { state } = routeLocation;
  if (state == null) {
    state = { property: '', category: '' }
  }
  if(!("property" in state)) {
    state.property='';
  }
  if(!("category" in state)) {
    state.category='';
  }
  const [form, setForm] = useState([
    {
      "name": "Age Group",
      "type": "multiselect",
      "options": ["18-25", "26-35", "36-45", "46-55", "56-65", "66+"]
    },
    {
      "name": "Occupation",
      "type": "multiselect",
      "options": ["Skip", "Employee", "Freelancer", "Business Owner", "Retired", "Student", "Other"]
    },
    {
      "name": "Annual Earnings",
      "type": "multiselect",
      "options": ["Skip", "Above 20 LPA", "Above 50 LPA", "Above 1 Cr"]
    },
    {
      "name": "Marital Status",
      "type": "multiselect",
      "options": ["Skip", "Single", "Married"]
    },
    {
      "name": "Do you prefer neighbors with children?",
      "type": "multiselect",
      "options": ["Skip", "No Children", "Children aged 0-5", "Children aged 6-12", "Teenagers", "Adult Children"]
    },
    {
      "name": "Dietary Preference",
      "type": "multiselect",
      "options": ["Skip", "Vegetarian", "Non-Vegetarian", "Vegan"]
    },
    {
      "name": "Environment",
      "type": "multiselect",
      "options": ["Skip", "Quiet", "Social", "Active"]
    },
    {
      "name": "Do you prefer neighbors with pets? If yes, which ones are you okay with?",
      "type": "multiselect",
      "options": ["Skip", "No Pets", "Dog", "Cat", "Bird", "Fish", "Reptile", "Others"]
    }
  ]);
  const { selectedLocation } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [properties, setProperties] = useState(propertiesByLocation[selectedLocation] || []);

  const [preferences, setPreferences] = useState({
    "Age Group": [],
    "Occupation": [],
    "Annual Earnings": [],
    "Marital Status": [],
    "Do you prefer neighbors with children?": [],
    "Dietary Preference": [],
    "Environment": [],
    "Do you prefer neighbors with pets? If yes, which ones are you okay with?": [],
    property: state.property,
    location: selectedLocation
  });

  useEffect(() => {
    async function fetchCategoryForms() {
      try {
        const { data } = await axios.get(`/api/category/form/find/${state.category}`);
        if (data.success) {
          if ("formFields" in data.data) {
            let pref = {}
            //console.log(data);
            data.data.formFields.forEach(form => {
              if (form.type == "multiselect") {
                pref[form.name] = []
              } else {
                pref[form.name] = ''
              }
            });
            pref["property"] = state.property;
            pref["location"] = selectedLocation;
            console.log(pref);
            setPreferences(pref);
            setForm(data.data.formFields);
          } else {
            console.log("No form present, using default")
          }
        } else {
          alert("Error Fetching categories");
        }
      } catch (e) {
        console.log(`Error: ${String(e)}`);
      }
    }
    if (state.category != '') {
      fetchCategoryForms();
    }
  }, []);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const { data } = await axios.get(`/api/property/find/${selectedLocation}`);
        if (data.success) {
          setProperties(data.data);
        }
      } catch (e) {
        console.log(`Error: ${String(e)}`);
      }
    }
    console.log("Fetch Props");
    fetchProperties();
  }, [selectedLocation])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = preferences;
    form.phoneNumber = phoneNumber;
    form.email = email;
    console.log("Test")
    try {
      const { data } = await axios.post('http://localhost:8000/api/form/save', form);
      //console.log(data);
      if (data.success == true) {
        toast.success('Form submitted Successfully, redirecting to home page', {
          position: 'top-right',
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          onClose: () => navigate('/'), // Navigate to Home after the toast
        });
        console.log("true")
      } else {
        console.log(data);
      }
    } catch (e) {
      console.log(e);
      toast.error(String(e), {
        position: 'top-right',
        autoClose: 3000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
  };

  const SelectProperty = ({ selected, onChange, label }) => (
    <div className="space-y-2">
      <label className="block text-gray-900 font-medium mb-4">{label}</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {properties.map((option) => (
          <button
            key={option.title}
            onClick={() => onChange(option.title)}
            className={`relative px-4 py-2 text-white bg-cover h-32 rounded-lg text-sm transition-all duration-300 ${selected === option.title
              ? 'shadow-lg'
              : 'hover:bg-primary-50 border border-gray-200'
              }`}
            style={{ backgroundImage: `url(${option.image})` }}
          >
            {/* Black gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent rounded-lg pointer-events-none" />

            <div className="relative flex p-4 space-x-2 h-full z-10">
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected === option.title
                  ? 'border-white bg-white'
                  : 'border-gray-400'
                  }`}
              >
                {selected === option.title && (
                  <div className="w-2 h-2 rounded-full bg-primary-600" />
                )}
              </div>
              <span >{option.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );


  const startResendTimer = () => {
    setResendTimer(30);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleGoogleSignIn = async () => {
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log('Google Sign-In Successful:', { user, token });
      if (user.phoneNumber) {
        setPhoneNumber(user.phoneNumber);
        setEmail(user.email);
        setPage('done');
      } else {
        //setError('Your Account is not linked with phone number')
        setEmail(user.email);
        setPage('done');
      }
    } catch (err) {
      console.error('Error signing in with Google:', err);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  const handleFacebookSignIn = async () => {
    setError('');
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log('Facebook Sign-In Successful:', { user, token });
      // Handle user info here
    } catch (err) {
      console.error('Error signing in with Facebook:', err);
      setError('Failed to sign in with Facebook. Please try again.');
    }
  };

  const handlePhoneSubmit = async (phone) => {
    try {
      // Initialize RecaptchaVerifier only if it's not already initialized
      // if (!window.recaptchaVerifier) {
      //   window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      //     size: 'invisible',
      //     callback: () => {
      //       console.log('Recaptcha resolved.');
      //     },
      //   });
      // }

      // const formattedPhone = `+91${phone}`;
      // const result = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);

      // // Clean up the RecaptchaVerifier after successful OTP generation
      // window.recaptchaVerifier.clear();
      // window.recaptchaVerifier = null;

      // setConfirmationResult(result);
      // setStep('otp');
      setPhoneNumber(phone);
      setError('');
      setPage('done');
      //startResendTimer(); // Start the resend timer
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError('Failed to send OTP. Please try again.');

      // Clean up the RecaptchaVerifier on error
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    }
  };


  const Temp = (e) => {
    e.preventDefault();
  }

  const handleOtpVerify = async () => {
    setError('');

    try {
      if (!confirmationResult) {
        throw new Error('No confirmation result found. Please request a new OTP.');
      }
      const userCredential = await confirmationResult.confirm(otp);
      const idToken = await userCredential.user.getIdToken();

      console.log('OTP Verified! Token:', idToken);
      setPage('done');
      // Handle successful OTP verification here (e.g., save token, redirect)
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return; // Prevent multiple resends during the timer

    try {
      setError('');
      await handlePhoneSubmit(phoneNumber); // Resend OTP by calling phone submit logic
      startResendTimer(); // Restart the resend timer
      console.log('OTP resent successfully');
    } catch (err) {
      console.error('Error resending OTP:', err);
      setError('Failed to resend OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {page === 'verify' ? (
        <div className="pt-32 pb-16 px-4">
          <div className="max-w-md mx-auto">
            <AnimatedElement direction="up" delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Get Started
                </h1>
                {step === 'phone' ? (
                  <PhoneVerification
                    onSubmit={handlePhoneSubmit}
                    error={error}
                    setError={setError}
                    handleFacebookSignIn={handleFacebookSignIn}
                    handleGoogleSignIn={handleGoogleSignIn}
                  />
                ) : (
                  <OtpVerification
                    phoneNumber={phoneNumber}
                    onVerified={handleOtpVerify}
                    onResendOtp={handleResendOtp}
                    onBack={() => setStep('phone')}
                    resendTimer={resendTimer}
                    error={error}
                    otp={otp}
                    setOtp={setOtp}
                    setError={setError}
                  />
                )}
              </div>
            </AnimatedElement>
          </div>
        </div>) : (
        <div className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement direction="up" delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Preferred Co-Brother</h1>

                {properties.length > 0 && <SelectProperty
                  label="Selected Property"
                  selected={preferences.property}
                  onChange={(value) => setPreferences({ ...preferences, property: value })}
                />}
                <p className="text-gray-600 mt-8 mb-3">
                  Help us find your ideal neighbors by sharing your preferences. You can select multiple options for most questions.
                </p>
                <button
                  className="mb-3 w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={handleSubmit}
                >
                  Skip Preferences
                </button>
                <div className="space-y-8">
                  {/* {formType == 0 && (<div>
                    <MultiSelect
                      label="1. Age Group"
                      options={['18-25', '26-35', '36-45', '46-55', '56-65', '66+']}
                      selected={preferences.ageGroup}
                      onChange={(value) => setPreferences({ ...preferences, ageGroup: value })}
                    />

                    <MultiSelect
                      label="2. Occupation"
                      options={['Skip', 'Employee', 'Freelancer', 'Business Owner', 'Retired', 'Student', 'Other']}
                      selected={preferences.occupation}
                      onChange={(value) => setPreferences({ ...preferences, occupation: value })}
                    />

                    <MultiSelect
                      label="3. Annual Earnings"
                      options={['Skip', 'Above 20 LPA', 'Above 50 LPA', 'Above 1 Cr']}
                      selected={preferences.earnings}
                      onChange={(value) => setPreferences({ ...preferences, earnings: value })}
                    />

                    <MultiSelect
                      label="4. Marital Status"
                      options={['Skip', 'Single', 'Married']}
                      selected={preferences.maritalStatus}
                      onChange={(value) => setPreferences({ ...preferences, maritalStatus: value })}
                    />

                    <MultiSelect
                      label="5. Do you prefer neighbors with children?"
                      options={['Skip', 'No Children', 'Children aged 0-5', 'Children aged 6-12', 'Teenagers', 'Adult Children']}
                      selected={preferences.children}
                      onChange={(value) => setPreferences({ ...preferences, children: value })}
                    />

                    <MultiSelect
                      label="6. Dietary Preference"
                      options={['Skip', 'Vegetarian', 'Non-Vegetarian', 'Vegan']}
                      selected={preferences.dietary}
                      onChange={(value) => setPreferences({ ...preferences, dietary: value })}
                    />

                    <MultiSelect
                      label="7. Environment"
                      options={['Skip', 'Quiet', 'Social', 'Active']}
                      selected={preferences.environment}
                      onChange={(value) => setPreferences({ ...preferences, environment: value })}
                    />

                    <MultiSelect
                      label="8. Do you prefer neighbors with pets? If yes, which ones are you okay with?"
                      options={['Skip', 'No Pets', 'Dog', 'Cat', 'Bird', 'Fish', 'Reptile', 'Others']}
                      selected={preferences.pets}
                      onChange={(value) => setPreferences({ ...preferences, pets: value })}
                    /></div>)}


                  {formType === 1 && (
                    <>
                      <MultiSelect
                        label="1. Age Group"
                        options={['18-25', '26-35', '36-45', '46-55', '56-65', '66+']}
                        selected={preferences.ageGroup}
                        onChange={(value) => setPreferences({ ...preferences, ageGroup: value })}
                      />

                      <MultiSelect
                        label="2. Occupation"
                        options={['Skip', 'Employee', 'Freelancer', 'Business Owner', 'Retired', 'Student', 'Other']}
                        selected={preferences.occupation}
                        onChange={(value) => setPreferences({ ...preferences, occupation: value })}
                      />

                      <MultiSelect
                        label="3. Annual Earnings"
                        options={['Skip', 'Above 20 LPA', 'Above 50 LPA', 'Above 1 Cr']}
                        selected={preferences.earnings}
                        onChange={(value) => setPreferences({ ...preferences, earnings: value })}
                      />
                      <MultiSelect
                        label="4. Business Type"
                        options={['Skip', 'Rental', 'Co-owned', 'Owned', 'Leased']}
                        selected={preferences.businessType}
                        onChange={(value) => setPreferences({ ...preferences, businessType: value })}
                      />
                      <MultiSelect
                        label="5. Collaboration"
                        options={['Skip', 'Investment Opportunities', 'Rental Spaces', 'Co-Working Spaces', 'Franchising', 'Other']}
                        selected={preferences.collaboration}
                        onChange={(value) => setPreferences({ ...preferences, collaboration: value })}
                      />
                      <MultiSelect
                        label="6. Business Trade"
                        options={['Skip', 'Education', 'Amusement Park', 'Warehouse', 'Industrial', 'Others']}
                        selected={preferences.businessTrade}
                        onChange={(value) => setPreferences({ ...preferences, collaboration: businessTrade })}
                      />
                    </>
                  )}

                  {formType === 2 && (
                    <>
                      <MultiSelect
                        label="1. Age Group"
                        options={['18-25', '26-35', '36-45', '46-55', '56-65', '66+']}
                        selected={preferences.ageGroup}
                        onChange={(value) => setPreferences({ ...preferences, ageGroup: value })}
                      />

                      <MultiSelect
                        label="2. Occupation"
                        options={['Skip', 'Employee', 'Freelancer', 'Business Owner', 'Retired', 'Student', 'Other']}
                        selected={preferences.occupation}
                        onChange={(value) => setPreferences({ ...preferences, occupation: value })}
                      />

                      <MultiSelect
                        label="3. Annual Earnings"
                        options={['Skip', 'Above 20 LPA', 'Above 50 LPA', 'Above 1 Cr']}
                        selected={preferences.earnings}
                        onChange={(value) => setPreferences({ ...preferences, earnings: value })}
                      />
                      <MultiSelect
                        label="4. Type of Agriculture Interest"
                        options={['Skip', 'Crop Farming', 'Horticulture', 'Livestock Farming', 'Organic Farming', 'Agroforestry', 'Aquaculture']}
                        selected={preferences.agricultureInterest}
                        onChange={(value) => setPreferences({ ...preferences, agricultureInterest: value })}
                      />
                      <MultiSelect
                        label="5. Management Preference"
                        options={['Skip', 'Shared Management', 'Independent Operations']}
                        selected={preferences.managementPreference}
                        onChange={(value) => setPreferences({ ...preferences, managementPreference: value })}
                      />
                    </>
                  )} */}
                  {form.map((val, index) => {
                    if (val.type === "multiselect") {
                      return (
                        <MultiSelect
                          key={val._id}
                          label={`${index + 1}. ${val.name}`}
                          options={val.options}
                          selected={preferences[val.name]}
                          onChange={(value) =>
                            setPreferences({ ...preferences, [val.name]: value })
                          }
                        />
                      );
                    } else if (val.type === "select") {
                      return (
                        <SingleSelect
                          key={val._id}
                          label={`${index + 1}. ${val.name}`}
                          options={val.options}
                          selected={preferences[val.name]}
                          onChange={(value) =>
                            setPreferences({ ...preferences, [val.name]: value })
                          }
                        />
                      );
                    }
                    return null;
                  })}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    onClick={handleSubmit}
                  >
                    Join Co-Brother
                  </button>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>)}
      <ToastContainer />
    </div>
  );
};

export default GetStarted;
