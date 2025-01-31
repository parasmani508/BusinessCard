'use client'
import React from 'react';
import { BusinessCardData } from '@/types';




interface TemplateProps {
  data: BusinessCardData;
}

// Individual Template Components
export const templateone: React.FC<TemplateProps> = ({ data }) => (
  <div
    className="w-96 h-56 p-6 rounded-lg shadow-xl flex items-center justify-between border border-gray-300"
    style={{
      backgroundImage: 'url(/images/image1.jpg)',  // Replace with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }}
  >
    {/* Left side content */}
    <div className="flex flex-col space-y-3">
      <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
      <p className="text-sm text-gray-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-red-600 mr-2" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 0 0-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 0 0 2-2v-3.28a1 1 0 0 0-.684-.948l-4.493-1.498a1 1 0 0 0-1.21.502l-1.13 2.257a11.042 11.042 0 0 1-5.516-5.516l2.257-1.13a1 1 0 0 0 .502-1.21L9.228 3.684A1 1 0 0 0 8.28 3H5z"
          />
        </svg>
        {data.phone}
      </p>
      <p className="text-sm text-gray-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-red-600 mr-2" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"
          />
        </svg>

        {data.address}
      </p>
    </div>

    {/* Right side content (Avatar) */}
    <div className="w-16 h-16 rounded-full bg-rgb(169,11,12) flex items-center justify-center shadow-lg border-2 border-white">
      <span className="text-xl font-semibold text-white">
        {data.name.charAt(0).toUpperCase()}
      </span>
    </div>
  </div>





);