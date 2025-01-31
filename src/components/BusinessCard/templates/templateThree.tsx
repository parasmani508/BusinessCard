import React from 'react';

import { BusinessCardData } from '@/types';

interface TemplateProps {
  data: BusinessCardData;
}

export const templatethree: React.FC<TemplateProps> = ({ data }) => (
<div
  className="w-96 h-56 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
  style={{
    backgroundImage: `url('/images/image6.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Top Section - Name */}
  <div className="h-1/3 flex items-center px-8 pt-6">
    <h2 className="text-3xl font-bold text-white tracking-wide">{data.name}</h2>
  </div>

  {/* Bottom Section - Contact Details */}
  <div className="h-2/3  px-8 py-6 space-y-4">
    {/* Phone */}
    <div className="flex items-center gap-4 group">
      <div className="bg-[#D08E2D] p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-[#05354B]"
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
      <p className="text-white font-medium flex-1">{data.phone}</p>
    </div>

    {/* Address */}
    <div className="flex items-center gap-4 group">
      <div className="bg-[#D08E2D] p-2 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-[#05354B]"
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
      <p className="text-white font-medium flex-1">{data.address}</p>
    </div>
  </div>
</div>





  );