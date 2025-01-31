'use client'
import React from 'react';
import { BusinessCardData } from '@/types';




interface TemplateProps {
  data: BusinessCardData;
}

// Individual Template Components
export const templateSix: React.FC<TemplateProps> = ({ data }) => (
    <div
  className="w-96 h-56 p-6 rounded-lg shadow-xl flex flex-col justify-between border border-gray-300"
  style={{
    backgroundImage: 'url(/images/image8.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }}
>
  {/* Top Section (Avatar + Name) */}
  <div className="flex items-center space-x-4">
    <div className="w-14 h-14 rounded-full bg-[#EFC17B] flex items-center justify-center shadow-lg border-2 border-white">
      <span className="text-xl font-semibold text-white">
        {data.name.charAt(0).toUpperCase()}
      </span>
    </div>
    <h2 className="text-xl font-bold text-white">{data.name}</h2>
  </div>

  {/* Middle Section (Details) */}
  <div className="space-y-3">
    {/* Phone */}
    <div className="flex items-center space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-[#EFC17B]" fill="currentColor">
        <path d="M6.62 10.79a15.055 15.055 0 006.59 6.59l2.2-2.2a1 1 0 011.17-.2 11.72 11.72 0 004.1.72 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.72 4.1 1 1 0 01-.2 1.17z" />
      </svg>
      <p className="text-sm text-gray-200">{data.phone}</p>
    </div>

    {/* Address */}
    <div className="flex items-center space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-[#EFC17B]" fill="currentColor">
        <path d="M12 2a7 7 0 00-7 7c0 5.25 7 12 7 12s7-6.75 7-12a7 7 0 00-7-7zm0 9a2 2 0 112-2 2 2 0 01-2 2z" />
      </svg>
      <p className="text-sm text-gray-200">{data.address}</p>
    </div>
  </div>

  {/* Bottom Section */}
  
</div>

  






);