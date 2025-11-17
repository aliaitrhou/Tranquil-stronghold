import React from 'react'
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
  about: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link, about }) => (
  <div className="flex-1 overflow-hidden rounded-[28px] bg-zinc-100 transition-all duration-500 ease-out border-[1px] border-zinc-200">
    {/* Image Container */}
    <div className="relative w-full h-[250px] hover:scale-[1.1] transition-all duration-500 ease-out">
      <Image
        src={`/team/member_${id}.png`}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-100/10 to-zinc-100" />
    </div>


    <div className="p-4 md:p-6">
      <h2 className="mb-1.5 text-2xl font-bold tracking-[-0.03em] text-[#1d1d1f] md:text-2xl">
        {name}
      </h2>
      <div className='mb-3'>
        <p className="inline mr-4 text-sm font-medium tracking-[0.012em] text-[#86868b] md:text-base">
          {socialId}
        </p>
        <span className='text-sm font-bold text-blue-500 hover:underline hover:decoration-2'>
          @Helloworld
        </span>

      </div>
      <p className="text-xs leading-relaxed tracking-[-0.022em] text-[#6e6e73] md:text-sm">
        {about}
      </p>
    </div>
  </div>
);

export default Member;
