"use client"

import { inter } from '@/fonts';
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from '@/public/logo.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaDonate } from 'react-icons/fa';
import { NavItem } from './nav-item';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className={`sticky top-0 left-0 right-0 z-40  bg-white border-b border-black/10 w-full px-3 ${inter.className}`}>
      <div className='max-w-4xl mx-auto flex flex-row items-center justify-between text-xs'>
        <Link href={"/"} className='flex flex-row items-center gap-2' >
          <Image src={Logo} className='border border-zinc-800' alt="Steadfast haven logo" width={34} height={34} />
          <h1 className='text-xl font-[600] py-3'>
            Steadfast Haven
          </h1>
        </Link>
        <ul className={`hidden sm:flex flex-row gap-5 font-thin text-black`}>
          <NavItem href="/team" url={pathname} label="Team" />
          <NavItem href="/about" url={pathname} label="About" />
          <NavItem href="/events" url={pathname} label="Events" />
          <NavItem href="/work" url={pathname} label="Work" />
          <NavItem href="/contact" url={pathname} label="Contact" />
          {/* <NavItem href="/donate" url={pathname} label="Donate" /> */}

          <Link target='_blank' href={"https://givebutter.com/auElnc"} className='text-white border border-blue-600 bg-blue-500 my-3 rounded-full px-2 py-1 flex flexrow items-center gap-1 hover:bg-blue-600'>
            <FaDonate />
            <span>
              Donate
            </span>
          </Link>
        </ul>
        <button onClick={() => setOpen(true)} className='sm:hidden'>
          <HiOutlineMenuAlt4 className='h-6 w-6' />
        </button>
        {open && (
          <div className='sm:hidden absolute top-0 right-0 left-0 w-full border bg-white border border-neutral-300 shadow-lg'>
            <button onClick={() => setOpen(!open)} className='absolute top-3 right-3'>
              <IoMdClose className='h-6 w-6' />
            </button>
            <ul className='flex flex-col items-start justify-center w-40 py-4 px-4 gap-2 text-lg'>
              <NavItem href="/team" url={pathname} label="Team" />
              <NavItem href="/about" url={pathname} label="About" />
              <NavItem href="/events" url={pathname} label="Events" />
              <NavItem href="/work" url={pathname} label="Work" />
              <NavItem href="/contact" url={pathname} label="Contact" />
              {/* <NavItem href="/donate" url={pathname} label="Donate" /> */}
              <Link target='_blank' href={"https://givebutter.com/auElnc"} className='text-white border border-blue-600 bg-blue-500 my-3 rounded-full px-2 py-1 flex flexrow items-center gap-1 hover:bg-blue-600'>
                <FaDonate />
                <span>
                  Donate
                </span>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>)
}

export default Header;
