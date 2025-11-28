import React, { useState } from 'react';
import { IconType } from 'react-icons';
import Image from 'next/image';

interface CardProps {
  id?: number;
  title: string;
  desc: string;
  icon: IconType;
  left: boolean;
}

const Card: React.FC<CardProps> = ({ id, title, desc, icon: Icon, left }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`group relative w-full transition-all duration-500 rounded-2xl overflow-hidden bg-white border border-gray-300 hover:shadow-sm flex flex-col ${left ? "md:flex-row" : "md:flex-row-reverse"}  items-stretch`}>
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 min-h-[300px] overflow-hidden bg-gray-100">
        <Image
          src={`/home/image_${id}.png`}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Icon Badge */}
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Content Section */}
      <div className={`relative w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-center ${left ? "text-left" : "text-right"}`}>
        <h3 className="text-3xl lg:text-4xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed mb-6 whitespace-pre-line">
          {desc}
        </p>

        <div className={`absolute bottom-8 ${left ? "left-8" : "right-8"} w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </div>
  );
};

export default Card;
