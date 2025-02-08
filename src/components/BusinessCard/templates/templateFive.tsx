'use client'
import React from 'react';
import { BusinessCardData } from '@/types';

interface TemplateProps {
  data: BusinessCardData;
}

export const templateFive: React.FC<TemplateProps> = ({ data }) => (
  <div
    className="w-96 h-56 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-lg flex flex-col justify-between border border-gray-300"
    style={{
      backgroundImage: `url('/images/image5.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Header Section */}
    <div className="flex flex-col items-center space-y-3">
      <div className="w-14 h-14 bg-[#123C5A] text-[#00C28B] flex items-center justify-center rounded-lg shadow-md">
        <span className="text-xl font-bold">{data.name.charAt(0).toUpperCase()}</span>
      </div>
      <h2 className="text-xl font-semibold text-[#00C28B]">{data.name}</h2>
    </div>

    {/* Contact Information Section */}
    <div className="text-gray-700">
      <div className="flex items-center mb-2">
        <div className="w-5 h-5 flex-shrink-0 mr-2"> {/* Added flex-shrink-0 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full text-[#00C28B]"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 0 0-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 0 0 2-2v-3.28a1 1 0 0 0-.684-.948l-4.493-1.498a1 1 0 0 0-1.21.502l-1.13 2.257a11.042 11.042 0 0 1-5.516-5.516l2.257-1.13a1 1 0 0 0 .502-1.21L9.228 3.684A1 1 0 0 0 8.28 3H5z"
            />
          </svg>
        </div>
        <p className="text-sm text-[#00C28B]">{data.phone}</p>
      </div>
      <div className="flex items-start"> {/* Changed items-center to items-start */}
        <div className="w-5 h-5 flex-shrink-0 mr-2"> {/* Added flex-shrink-0 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full text-[#00C28B]"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"
            />
          </svg>
        </div>
        <p className="text-sm text-[#00C28B] break-words">{data.address}</p> {/* Added break-words */}
      </div>
    </div>
  </div>
);

