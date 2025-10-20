
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full text-neutral-500 text-sm py-6 bg-teal-50">
      <div className='max-w-4xl mx-auto pt-4 flex flex-row items-center justify-between'>
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
