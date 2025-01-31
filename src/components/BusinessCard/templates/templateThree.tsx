import React from 'react';

import { BusinessCardData } from '@/types';

interface TemplateProps {
  data: BusinessCardData;
}

export const templatethree: React.FC<TemplateProps> = ({ data }) => (
<div
  className="w-96 h-56 bg-gray-800 p-6 rounded-lg shadow-lg flex relative overflow-hidden"
  style={{
    backgroundImage: "url('/images/image3.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  

  {/* Left Section */}
  <div className="flex-1 pr-4 flex flex-col justify-center space-y-3">
    <h2 className="text-2xl sm:xl  font-bold text-white break-words">{data.name}</h2>
  </div>

  {/* Right Section */}
  <div className="flex-1 pl-1 flex flex-col justify-center space-y-3">
    <div className="flex items-start gap-2">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="h-5 w-5 flex-shrink-0 text-[#433E30]" 
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
      <p className="text-gray-300 break-words flex-1">{data.phone}</p>
    </div>

    <div className="flex items-start gap-2">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="h-5 w-5 flex-shrink-0 text-[#433E30]" 
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
      <p className="text-gray-300 break-words flex-1">{data.address}</p>
    </div>
  </div>
</div>




  );