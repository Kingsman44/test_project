import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import AnimatedElement from '../components/animations/AnimatedElement';

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
          className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
            selected.includes(option)
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded border flex items-center justify-center ${
              selected.includes(option) ? 'border-white' : 'border-gray-400'
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
          className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
            selected === option
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
              selected === option ? 'border-white bg-white' : 'border-gray-400'
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

const Bond = () => {
  const [preferences, setPreferences] = useState({
    ageGroup: [],
    occupation: [],
    earnings: [],
    maritalStatus: [],
    children: [],
    dietary: [],
    environment: [],
    pets: [],
    smoking: '',
    drinking: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', preferences);
  };

  return (
    <div className="min-h-screen bg-primary-50">
      <Navbar />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement direction="up" delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Preferred Co-Brother</h1>
              <p className="text-gray-600 mb-8">
                Help us find your ideal neighbors by sharing your preferences. You can select multiple options for most questions.
              </p>
              <button
                  className="mb-3 w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Skip Preferences
                </button>

              <form onSubmit={handleSubmit} className="space-y-8">
                <MultiSelect
                  label="1. Age Group"
                  options={['18-25', '26-35', '36-45', '46-55', '56-65', '66+']}
                  selected={preferences.ageGroup}
                  onChange={(value) => setPreferences({ ...preferences, ageGroup: value })}
                />

                <MultiSelect
                  label="2. Occupation"
                  options={['Skip','Employee', 'Freelancer', 'Business Owner', 'Retired', 'Student', 'Other']}
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
                  options={['Skip','Single', 'Married']}
                  selected={preferences.maritalStatus}
                  onChange={(value) => setPreferences({ ...preferences, maritalStatus: value })}
                />

                <MultiSelect
                  label="5. Do you prefer neighbors with children?"
                  options={['Skip','No Children', 'Children aged 0-5', 'Children aged 6-12', 'Teenagers', 'Adult Children']}
                  selected={preferences.children}
                  onChange={(value) => setPreferences({ ...preferences, children: value })}
                />

                <MultiSelect
                  label="6. Dietary Preference"
                  options={['Skip','Vegetarian', 'Non-Vegetarian', 'Vegan']}
                  selected={preferences.dietary}
                  onChange={(value) => setPreferences({ ...preferences, dietary: value })}
                />

                <MultiSelect
                  label="7. Environment"
                  options={['Skip','Quiet', 'Social', 'Active']}
                  selected={preferences.environment}
                  onChange={(value) => setPreferences({ ...preferences, environment: value })}
                />

                <MultiSelect
                  label="8. Do you prefer neighbors with pets? If yes, which ones are you okay with?"
                  options={['Skip','No Pets', 'Dog', 'Cat', 'Bird', 'Fish', 'Reptile', 'Others']}
                  selected={preferences.pets}
                  onChange={(value) => setPreferences({ ...preferences, pets: value })}
                />

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join Co-Brother
                </button>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default Bond;