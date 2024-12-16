import React from 'react';
import { Check } from 'lucide-react';

const MultiSelect = ({ options, selected, onChange, label }) => (
  <div className="space-y-2">
    <label className="block text-gray-700 mb-2">{label}</label>
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => {
            if (selected.includes(option)) {
              onChange(selected.filter(item => item !== option));
            } else {
              onChange([...selected, option]);
            }
          }}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            selected.includes(option)
              ? 'bg-primary-600 text-white'
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
    <label className="block text-gray-700 mb-2">{label}</label>
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-lg text-sm transition-colors ${
            selected === option
              ? 'bg-primary-600 text-white'
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

const RegisterStep2 = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6">
      <SingleSelect
        label="Your Age Group"
        options={['18-25', '26-35', '36-45', '46-55', '56-65', '66+']}
        selected={formData.ageGroup}
        onChange={(value) => setFormData({ ...formData, ageGroup: value })}
      />

      <SingleSelect
        label="Your Occupation"
        options={['Employee', 'Freelancer', 'Business Owner', 'Retired', 'Student', 'Other']}
        selected={formData.occupation}
        onChange={(value) => setFormData({ ...formData, occupation: value })}
      />

      <SingleSelect
        label="Your Yearly Income"
        options={['0 - 5 LPA', '6 - 10 LPA', '11 - 20 LPA', '21 - 30 LPA', '31 - 50 LPA', '51 LPA and above']}
        selected={formData.income}
        onChange={(value) => setFormData({ ...formData, income: value })}
      />

      <SingleSelect
        label="Your Marital Status"
        options={['Single', 'Married']}
        selected={formData.maritalStatus}
        onChange={(value) => setFormData({ ...formData, maritalStatus: value })}
      />

      <MultiSelect
        label="Do you have children?"
        options={['No Children', 'Children aged 0-5', 'Children aged 6-12', 'Teenagers', 'Adult Children']}
        selected={formData.children}
        onChange={(value) => setFormData({ ...formData, children: value })}
      />

      <SingleSelect
        label="Dietary Preference"
        options={['Vegetarian', 'Non-Vegetarian', 'Vegan']}
        selected={formData.dietary}
        onChange={(value) => setFormData({ ...formData, dietary: value })}
      />

      <SingleSelect
        label="Your Environment Preference"
        options={['Quiet', 'Social', 'Active']}
        selected={formData.environment}
        onChange={(value) => setFormData({ ...formData, environment: value })}
      />

      <MultiSelect
        label="Do you own pets? If yes, what kind?"
        options={['No, I don\'t own pets', 'Dog', 'Cat', 'Bird', 'Fish', 'Reptile', 'Others']}
        selected={formData.pets}
        onChange={(value) => setFormData({ ...formData, pets: value })}
      />
    </div>
  );
};

export default RegisterStep2;