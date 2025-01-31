'use client'
import React from 'react';
import { BusinessCardData } from '@/types';

interface TemplateProps {
  data: BusinessCardData;
}

export const templatefour: React.FC<TemplateProps> = ({ data }) => (
  <div
  className="w-96 h-56 bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between relative border border-gray-200"
  style={{
    backgroundImage: `url('/images/image4.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Top Section */}
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold text-gray-900">{data.name}
      <div className="h-1 w-[180px] bg-gradient-to-r from-[#E3F4FC] to-[#84CFF6] rounded-full my-4"></div>
    </h2>
    <div className="w-12 h-12 mb-8 rounded-full bg-[#84CFF6] flex items-center justify-center shadow">
      <span className="text-lg font-semibold text-gray-900">
        {data.name.charAt(0).toUpperCase()}
      </span>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="space-y-3 text-gray-700">
    <p className="flex items-center gap-2 text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 0 0-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 0 0 2-2v-3.28a1 1 0 0 0-.684-.948l-4.493-1.498a1 1 0 0 0-1.21.502l-1.13 2.257a11.042 11.042 0 0 1-5.516-5.516l2.257-1.13a1 1 0 0 0 .502-1.21L9.228 3.684A1 1 0 0 0 8.28 3H5z"
        />
      </svg>
      <span className="leading-5 truncate">{data.phone}</span>
    </p>
    <p className="flex items-start gap-2 text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"
        />
      </svg>
      <span className="leading-5 line-clamp-2">{data.address}</span>
    </p>
  </div>
</div>


);
