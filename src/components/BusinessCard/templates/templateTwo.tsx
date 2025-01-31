'use client'
import React from 'react';

import { BusinessCardData } from '@/types';

interface TemplateProps {
  data: BusinessCardData;
}
export const templatetwo: React.FC<TemplateProps> = ({ data }) => (
<div
  className="w-96 h-56 p-6 rounded-xl shadow-xl relative flex flex-col justify-between text-[#F8E495] overflow-hidden"
  style={{
    backgroundImage: `url('/images/image2.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Top Decorative Circle */}
  <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-3xl -translate-x-8 -translate-y-8"></div>

  {/* Bottom Decorative Circle */}
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-800/20 rounded-full blur-3xl translate-x-8 translate-y-8"></div>

  {/* Content */}
  <div className="z-10 flex flex-col items-start">
    {/* Avatar Section */}
    <div className="w-16 h-16 bg-[#F8E495] rounded-full shadow-md flex items-center justify-center text-xl font-bold text-[#002949]">
      {data.name.charAt(0).toUpperCase()}
    </div>

    {/* Name */}
    <h2 className="mt-2 text-lg font-bold">{data.name}</h2>

    {/* Contact Info */}
    <div className="mt-4 w-full  space-y-3">
      <div className="flex items-start justify-start gap-2">
        <div className="flex-shrink-0 w-4 h-4 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#F8E495]" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 0 0-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 0 0 2-2v-3.28a1 1 0 0 0-.684-.948l-4.493-1.498a1 1 0 0 0-1.21.502l-1.13 2.257a11.042 11.042 0 0 1-5.516-5.516l2.257-1.13a1 1 0 0 0 .502-1.21L9.228 3.684A1 1 0 0 0 8.28 3H5z"
            />
          </svg>
        </div>
        <span className="text-sm">{data.phone}</span>
      </div>

      <div className="flex items-start justify-start gap-2 ">
        <div className="flex-shrink-0 w-4 h-4 mt-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full text-[#F8E495]" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"
            />
          </svg>
        </div>
        <span className="text-sm break-words">{data.address}</span>
      </div>
    </div>
  </div>
</div>





);