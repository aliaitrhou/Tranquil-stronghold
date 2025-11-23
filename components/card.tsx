import React from 'react';
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
  return (
    <div className={`relative w-full p-4 transition-all duration-700 ease-in-out rounded-3xl flex ${left ? "flex-row" : "flex-row-reverse"} items-center justify-between gap-8 sm:gap-14 md:gap-20 px-8`}>
      <div className="relative w-full h-[300px] max-w-[60%]  hover:rotate-0 transition-transform duration-500 rounded-3xl">
        {/* Top-left corner - crossing lines */}
        <div className="absolute -top-4 left-0 w-20 h-0.5 bg-gradient-to-r from-orange-200/80 to-transparent z-10"></div>
        <div className="absolute top-0 -left-4 w-0.5 h-20 bg-gradient-to-b from-orange-200/80 to-transparent z-10"></div>

        {/* Top-right corner - crossing lines */}
        <div className="absolute -top-4 right-0 w-20 h-0.5 bg-gradient-to-l from-orange-200/80 to-transparent z-10"></div>
        <div className="absolute top-0 -right-4 w-0.5 h-20 bg-gradient-to-b from-orange-200/80 to-transparent z-10"></div>

        {/* Bottom-left corner - crossing lines */}
        <div className="absolute -bottom-4 left-0 w-20 h-0.5 bg-gradient-to-r from-orange-200/80 to-transparent z-10"></div>
        <div className="absolute bottom-0 -left-4 w-0.5 h-20 bg-gradient-to-t from-orange-200/80 to-transparent z-10"></div>

        {/* Bottom-right corner - crossing lines */}
        <div className="absolute -bottom-4 right-0 w-20 h-0.5 bg-gradient-to-l from-orange-200/80 to-transparent z-10"></div>
        <div className="absolute bottom-0 -right-4 w-0.5 h-20 bg-gradient-to-t from-orange-200/80 to-transparent z-10"></div>

        <Image
          src={`/home/image_${id}.png`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
        />
      </div>

      <div className="text-start border-2 border-teal-200 p-5 rounded-3xl bg-teal-50">
        <h3 className="text-3xl font-semibold mb-8 underline decoration-teal-500 decoration-6 underline-offset-[10px]">
          {title}
        </h3>
        <p className="text-gray-600 max-w-lg text-xl text-justify leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;

