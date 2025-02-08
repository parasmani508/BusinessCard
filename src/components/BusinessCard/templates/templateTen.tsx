'use client'
import React from 'react';
import { BusinessCardData } from '@/types';
interface TemplateProps {
  data: BusinessCardData;
}

// Individual Template Components
export const templateTen: React.FC<TemplateProps> = ({ data }) => (
  <div
    className="w-96 h-56 p-6 rounded-xl shadow-2xl flex flex-col justify-between relative overflow-hidden"
    style={{
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
    }}
  >
    {/* Floating Shapes */}
    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5" />
    <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5" />

    {/* Top Section (Name) */}
    <div className="relative">
      <h2 className="text-2xl font-bold text-white mt-2 tracking-wide">
        {data.name}
      </h2>
      <div className="w-16 h-0.5 bg-emerald-400 mt-2" />
    </div>

    {/* Details Section */}
    <div className="space-y-3">
      {/* Phone */}
      <div className="flex items-center gap-3 group">
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-400/20 group-hover:bg-emerald-400/30 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-emerald-400"
            fill="currentColor"
          >
            <path d="M6.62 10.79a15.055 15.055 0 006.59 6.59l2.2-2.2a1 1 0 011.17-.2 11.72 11.72 0 004.1.72 1 1 0 011 1v3.5a1 1 0 01-1 1A18 18 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.72 4.1 1 1 0 01-.2 1.17z" />
          </svg>
        </div>
        <p className="text-gray-300 text-sm font-medium flex-1">{data.phone}</p>
      </div>

      {/* Address */}
      <div className="flex items-start gap-3 group">
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-emerald-400/20 group-hover:bg-emerald-400/30 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-emerald-400"
            fill="currentColor"
          >
            <path d="M12 2a7 7 0 00-7 7c0 5.25 7 12 7 12s7-6.75 7-12a7 7 0 00-7-7zm0 9a2 2 0 112-2 2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className="text-gray-300 text-sm font-medium break-words flex-1 mt-1">{data.address}</p>
      </div>
    </div>
  </div>
);

  
  
  
  