'use client'
import React from 'react';
import { BusinessCardData } from '@/types';
interface TemplateProps {
  data: BusinessCardData;
}

// Individual Template Components
export const templateEleven: React.FC<TemplateProps> = ({ data }) => (
<div
  className="w-96 h-56 p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm"
  style={{
    backgroundImage: `url('/images/image13.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  }}
>
  {/* Content Container */}
  <div className="relative h-full flex flex-col justify-between z-10">
    {/* Header Section */}
    <div>
      <h2 className="text-2xl font-bold text-white tracking-wide">
        {data.name}
      </h2>
      <div className="flex items-center gap-2 mt-2">
        <div className="h-0.5 w-8 bg-white/70" />
        <div className="h-0.5 w-4 bg-white/50" />
      </div>
    </div>

    {/* Contact Details */}
    <div className="space-y-4">
      {/* Phone Number */}
      <div className="flex gap-4 group">
        <div className="w-8 h-8 rounded-lg bg-black/30 flex-shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-all backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-white"
            fill="currentColor"
          >
            <path d="M6.62 10.79a15.055 15.055 0 006.59 6.59l2.2-2.2a1 1 0 011.17-.2 11.72 11.72 0 004.1.72 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.72 4.1 1 1 0 01-.2 1.17z" />
          </svg>
        </div>
        <p className="text-white mt-1 text-sm font-medium group-hover:text-white/80 transition-colors">
          {data.phone}
        </p>
      </div>

      {/* Address */}
      <div className="flex gap-4 group">
        <div className="w-8 h-8 rounded-lg bg-black/30 flex-shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-all backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-white"
            fill="currentColor"
          >
            <path d="M12 2a7 7 0 00-7 7c0 5.25 7 12 7 12s7-6.75 7-12a7 7 0 00-7-7zm0 9a2 2 0 112-2 2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className= "text-white mt-1 text-sm font-medium break-words flex-1 group-hover:text-white/80 transition-colors">
          {data.address}
        </p>
      </div>
    </div>
  </div>
</div>



);

  
  
  
  