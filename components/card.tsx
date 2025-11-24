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
        <div className="absolute -top-2 left-0 w-[50%] h-0.5 bg-gradient-to-r from-blue-200/80 to-transparent z-10"></div>
        <div className="absolute top-0 -left-2 w-0.5 h-[50%] bg-gradient-to-b from-blue-200/80 to-transparent z-10"></div>

        {/* Top-right corner - crossing lines */}
        <div className="absolute -top-2 right-0 w-[50%] h-0.5 bg-gradient-to-l from-blue-200/80 to-transparent z-10"></div>
        <div className="absolute top-0 -right-2 w-0.5 h-[50%] bg-gradient-to-b from-blue-200/80 to-transparent z-10"></div>

        {/* Bottom-left corner - crossing lines */}
        <div className="absolute -bottom-2 left-0 w-[50%] h-0.5 bg-gradient-to-r from-blue-200/80 to-transparent z-10"></div>
        <div className="absolute bottom-0 -left-2 w-0.5 h-[50%] bg-gradient-to-t from-blue-200/80 to-transparent z-10"></div>

        {/* Bottom-right corner - crossing lines */}
        <div className="absolute -bottom-2 right-0 w-[50%] h-0.5 bg-gradient-to-l from-blue-200/80 to-transparent z-10"></div>
        <div className="absolute bottom-0 -right-2 w-0.5 h-[50%] bg-gradient-to-t from-blue-200/80 to-transparent z-10"></div>

        <Image
          src={`/home/image_${id}.png`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
        />
      </div>

      <div className="relative text-start border-2 border-blue-200 p-5 rounded-md bg-blue-50">
        <Icon className={`size-6 absolute bottom-3 right-3 z-30  text-blue-400 rotate-45`} />
        <h3 className="text-3xl font-semibold mb-8 underline decoration-blue-300 decoration-6 underline-offset-[10px]">
          {title}
        </h3>
        <p className="text-gray-600 max-w-lg text-xl text-justify leading-relaxed text-blue-900">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;

