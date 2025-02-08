import React from 'react';

import { BusinessCardData } from '@/types';

interface TemplateProps {
  data: BusinessCardData;
}
export const templatethree: React.FC<TemplateProps> = ({ data }) => (
  <div
    className="w-96 h-56 rounded-xl shadow-2xl relative overflow-hidden"
    style={{
      background: 'linear-gradient(120deg, #2c3e50, #3498db)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
    }}
  >
    {/* Geometric Patterns */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-40 h-40 rotate-45 bg-white/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 -rotate-45 bg-white/20" />
    </div>

    {/* Content Wrapper */}
    <div className="relative h-full p-6 flex flex-col">
      {/* Header */}
      <div className="mb-auto">
       
        <h2 className="text-2xl font-bold text-white tracking-wide">{data.name}</h2>
      </div>

      {/* Contact Info */}
      <div className="space-y-3">
        {/* Phone */}
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/10 transition-colors group">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex-shrink-0 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.055 15.055 0 006.59 6.59l2.2-2.2a1 1 0 011.17-.2 11.72 11.72 0 004.1.72 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.72 4.1 1 1 0 01-.2 1.17z" />
            </svg>
          </div>
          <span className="text-white/90 font-medium">{data.phone}</span>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-black/10 transition-colors group">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex-shrink-0 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white"
              fill="currentColor"
            >
              <path d="M12 2a7 7 0 00-7 7c0 5.25 7 12 7 12s7-6.75 7-12a7 7 0 00-7-7zm0 9a2 2 0 112-2 2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-white/90 font-medium break-words flex-1 mt-1">{data.address}</span>
        </div>
      </div>
    </div>
  </div>
);





