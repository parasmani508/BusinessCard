import React, { useState } from 'react';
import { templateone } from './templates/templateOne';
import { templatetwo } from './templates/templateTwo';
import { templatethree } from './templates/templateThree';
import { templatefour } from './templates/templateFour';
import { templateFive } from './templates/templateFive';
import { templateSix } from './templates/templateSix';
import { templateSeven } from './templates/templateSeven';
import { templateEight } from './templates/templateEight';
import { templateNine } from './templates/templateNine';
import { templateTen } from './templates/templateTen';
import { templateEleven } from './templates/templateEleven';
import { templateTwelve } from './templates/templateTwelve';
import { BusinessCardData } from '@/types';

import { toPng } from 'html-to-image';

// Define the dummy data
const dummyData: BusinessCardData = {
  name: 'John Doe',
  phone: '(555) 123-4567',
  address: 'H-No-123 Business Ave',
};

const templates = [
  templateone,
  templatetwo,
  templatethree,
  templatefour,
  templateFive,
  templateSix,
  templateSeven,
  templateEight,
  templateNine,
  templateTen,
  templateEleven,
  templateTwelve
  
];

const BusinessCardGenerator: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1); // 1: Template Selection, 2: Form, 3: Preview
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [formData, setFormData] = useState<BusinessCardData>({
    name: '',
    phone: '',
    address: '',
  }); // Initialize with empty fields

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Template Selection Page
  const renderTemplateSelection = () => (
    <>
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Choose Your Card</h2>

      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full px-4 gap-6">
          {templates.map((Template, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-transform hover:scale-105 flex justify-center items-center ${selectedTemplate === index ? 'rounded-lg' : ''
                }`}
              onClick={() => {
                setSelectedTemplate(index);
                setCurrentPage(2);
              }}
            >
              <div className="transform scale-90">
                <Template data={dummyData} />
              </div>
            </div>
          ))}
        </div>

      </div>

    </>

  );

  const renderForm = () => {
    const isFormComplete = Object.values(formData).every(value => value.trim() !== '');

    return (
      <div className="bg-white p-4 sm:p-6 rounded-md  max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Enter Your Details</h2>

        <div className="space-y-4">
          {Object.keys(formData).map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field as keyof BusinessCardData]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none  bg-white"
                placeholder={`Enter your ${field}`}
                autoComplete="off"
              />


            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="w-full sm:w-auto px-6 py-2 text-white rounded-lg transition-colors bg-[#ec0b43] hover:bg-[#ec0b43]/90"
            onClick={() => setCurrentPage(1)}
          >
            Back
          </button>

          <button
            className={`
              w-full sm:w-auto px-6 py-2 text-white rounded-lg transition-colors
              ${isFormComplete
                ? 'bg-[#ec0b43] hover:bg-[#ec0b43]/90'
                : 'bg-gray-500 hover:bg-gray-600'
              }
            `}
            onClick={() => setCurrentPage(3)}
            disabled={!isFormComplete}
          >
            Preview
          </button>
        </div>
      </div>
    );
  };

  const renderPreview = () => (
    <>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Preview</h2>

      {/* Removed overflow-x-auto and changed padding to prevent white background */}
      <div className="flex justify-center" id="card-preview">
        {/* Removed the outer scaling div and let the card maintain its natural size */}
        {React.createElement(templates[selectedTemplate], { data: formData })}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <button
          className="w-full sm:w-auto px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors active:bg-gray-700"
          onClick={() => setCurrentPage(2)}
        >
          Back to Form
        </button>

        <button
          className="w-full sm:w-auto px-6 py-2 bg-[#ec0b43] text-white rounded-lg transition-colors active:bg-[#ec0b43]"
          onClick={downloadCard}
        >
          Download
        </button>
      </div>
    </>
  );

  const downloadCard = () => {
    const card = document.getElementById('card-preview');
    if (!card) return;

    toPng(card, {
      quality: 1, // High quality rendering
      pixelRatio: 2, // Ensures high resolution like scaling
      backgroundColor: undefined, // Transparent background, similar to what you had in html2canvas
      width: card.offsetWidth, // Use the card's actual width
      height: card.offsetHeight, // Use the card's actual height
    })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl; // The generated PNG data URL
        link.download = 'business-card.png'; // Filename for the download
        link.click(); // Trigger the download action

      })
      .catch((error) => {
        console.error('Error generating image:', error); // Handle errors
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {currentPage === 1 && renderTemplateSelection()}
      {currentPage === 2 && renderForm()}
      {currentPage === 3 && renderPreview()}
    </div>
  );
};


export default BusinessCardGenerator;
