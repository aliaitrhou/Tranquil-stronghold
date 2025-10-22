
import Link from 'next/link'
import React from 'react'
import { FaAngleRight, FaChevronRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full text-neutral-500 text-sm pb-6 bg-teal-50">
      <div className='w-full mb-6 bg-gradient-to-r from-white via-neutral-300 to-white h-[2px]'></div>
      <div className='max-w-4xl mx-auto pt-4 flex flex-row items-cente justify-between'>
        <p className="text-center text-xs">
          &copy; {new Date().getFullYear()} Steadfast Haven. All rights reserved.
        </p>

        <div className="text-xs flex items-center sm:justify-start gap-1 sm:gap-2">
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>|
          <Link href="/terms" className="hover:text-black transition-colors">
            Terms of Service
          </Link>
        </div>
        <p className="text-center text-xs">
          3932 S Perkins Rd 3932 s, Memphis, TN 38118, USA
        </p>
      </div>
    </footer>
  )
}

export default Footer

export const ExternalLinkItem = ({ href, label }: { href: string, label: string }) => (
  <a href={href} target='_blank' className="text-blue-500 hover:text-blue-600 hover:underline hover:underline-offset-3 hover:decoration-1 transition-colors flex items-center text-sm gap-[0.8]">
    <span>
      {label}
    </span>
    <FaChevronRight className='h-3 w-3 mt-[2px]' />
  </a>
)
