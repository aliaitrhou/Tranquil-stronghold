"use client"

import { inter, openSans } from '@/fonts';
import React from 'react'
import Link from 'next/link'
import Logo from '@/public/logo.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BiDonateHeart } from 'react-icons/bi';
import { FaDonate } from 'react-icons/fa';
import { NavItem } from './nav-item';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={`border-b border-neutral-300 bg-white w-full sticky top-0 left-0 right-0 px-3 ${inter.className}`}>
      <div className='max-w-4xl mx-auto flex flex-row items-center justify-between text-xs'>
        <Link href={"/"} className='flex flex-row items-center gap-2' >
          <Image src={Logo} className='border border-black rounded-full' alt="Steadfast haven logo" width={30} height={30} />
          <h1 className='text-lg font-[600]'>
            Steadfast Haven
          </h1>
        </Link>
        <ul className={`flex flex-row gap-5 font-thin text-black`}>
          <NavItem href="/team" url={pathname} label="Team" />
          <NavItem href="/about" url={pathname} label="About" />
          <NavItem href="/events" url={pathname} label="Events" />
          <NavItem href="/work" url={pathname} label="Work" />
          <NavItem href="/contact" url={pathname} label="Contact" />

          <Link target='_blank' href={"https://givebutter.com/auElnc"} className='text-white border border-blue-600 bg-blue-500 my-3 rounded-full px-2 py-1 flex flexrow items-center gap-1 hover:bg-blue-600'>
            <FaDonate />
            <span>
              Donate

            </span>
          </Link>
        </ul>
      </div>
    </header>)
}

export default Header;
