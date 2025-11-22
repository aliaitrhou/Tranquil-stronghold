import React from 'react'
import { IconType } from 'react-icons';
import Image from 'next/image';


interface CardProps {
  id?: number
  title: string
  desc: string
  icon: IconType
  left: boolean
}

const Card: React.FC<CardProps> = ({ id, title, desc, icon: Icon, left }) => {
  return (
    <div className={`w-full p-4  transition-all duration-700 ease-in-out rounded-3xl flex ${left ? "flex-row" : "flex-row-reverse"} items-center justify-between p-8`}>
      <div className="relative w-full h-[350px] max-w-1/2 rounded-3xl overflow-hidden">
        <Image src={`/home/image_${id}.png`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
        />
      </div>
      <div className='text-start'>
        <h3 className="text-4xl font-semibold mb-6 underline decoration-teal-700 decoration-6 underline-offset-[10px]">
          {title}
        </h3>
        <p className="text-gray-600 max-w-lg text-xl leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Card
