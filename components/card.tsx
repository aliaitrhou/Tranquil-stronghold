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
    <div className="bg-white rounded-3xl p-2 shadow-sm hover:shadow-lg transition-shadow relative group border border-gray-400">
      <div className='p-2 border-2 border-white group-hover:border-blue-500 border-dotted rounded-2xl'>
        <div className="mb-4">
          <Icon className="w-11 h-11 text-gray-800" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          {desc}
        </p>
        <button className="-rotate-45  bottom-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
          <AiOutlineArrowRight className="w-5 h-5 text-gray-800 group-hover:text-white" />
        </button>
      </div>
    </div>

  )
}

export default Card
