import React from 'react'
import { IconType } from 'react-icons';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface CardProps {
  title: string
  desc: string
  icon: IconType
}

const Card: React.FC<CardProps> = ({ title, desc, icon: Icon }) => {
  return (
    <div className="bg-white rounded-3xl p-2 shadow-sm hover:shadow-lg transition-shadow border border-gray-400">
      <div className='p-2 border-2 border-white rounded-2xl'>
        <div className="mb-4">
          <Icon className="w-11 h-11 text-gray-800" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          {desc}
        </p>
      </div>
    </div>

  )
}

export default Card
