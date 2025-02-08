'use client'
import React from 'react';
import { BusinessCardData } from '@/types';
interface TemplateProps {
  data: BusinessCardData;
}

// Individual Template Components
export const templateNine: React.FC<TemplateProps> = ({ data }) => (
    <div
      className="w-96 h-56 p-8 rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to right, #1a1a1a, #2d2d2d)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full" />
  
      {/* Top Section (Name) */}
      <div className="relative">
        <h2 className="text-2xl font-bold text-white tracking-wide">{data.name}</h2>
        <div className="h-1 w-20 bg-purple-500 mt-2 rounded-full" />
      </div>
  
      {/* Bottom Section (Details) */}
      <div className="space-y-4 relative">
        {/* Phone */}
        <div className="flex items-center gap-4 group">
          <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-purple-400"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.055 15.055 0 006.59 6.59l2.2-2.2a1 1 0 011.17-.2 11.72 11.72 0 004.1.72 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.72 4.1 1 1 0 01-.2 1.17z" />
            </svg>
          </div>
          <p className="text-gray-300 font-medium">{data.phone}</p>
        </div>
  
        {/* Address */}
        <div className="flex items-start gap-4 group">
          <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-purple-400"
              fill="currentColor"
            >
              <path d="M12 2a7 7 0 00-7 7c0 5.25 7 12 7 12s7-6.75 7-12a7 7 0 00-7-7zm0 9a2 2 0 112-2 2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-300 font-medium break-words mt-1">{data.address}</p>
        </div>
      </div>
    </div>
  );
  