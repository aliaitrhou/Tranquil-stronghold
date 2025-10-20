
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-300 bg-gray-100 text-neutral-500 text-sm py-4">
      <div className="max-w-5xl mx-auto px-4 flex flex-col border">

        {/* Top Link Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs py-4">
          {/* Left Section — Site Links */}

          {/* Right Section — Social Links */}
          <div className="flex flex-col justify-center sm:justify-end gap-1 sm:gap-2">
            <Link href="https://instagram.com/thesfhaven" target="_blank" className="hover:text-black transition-colors">
              Instagram
            </Link>
            <Link href="https://x.com/steadfasthaven1" target="_blank" className="hover:text-black transition-colors">
              X (Twitter)
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-black transition-colors">
              Facebook
            </Link>
          </div>


          <div className="text-center sm:text-left leading-relaxed text-xs text-neutral-600">
            <p>
              Email:{' '}
              <a href="mailto:admin@steadfasthaven.com" className="hover:text-black">
                admin@steadfasthaven.com
              </a>
            </p>
            <p>
              Instagram:{' '}
              <a href="https://instagram.com/thesfhaven" target="_blank" className="hover:text-black">
                @thesfhaven
              </a>
            </p>
          </div>

          <div className="text-center sm:text-left leading-relaxed text-xs text-neutral-600">
            <p>
              Youth Program Enrollment:{' '}
            </p>
            <span className="text-neutral-400 italic">Coming soon</span>
          </div>
        </div>



      </div>
      <div className='max-w-5xl mx-auto pt-4 border-t border-neutral-300 flex flex-row items-center justify-between'>
        <p className="text-center text-xs">
          &copy; {new Date().getFullYear()} Steadfast Haven. All rights reserved.
        </p>

        <div className="text-xs flex items-center sm:justify-start gap-1 sm:gap-2">
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>|
          <Link href="/terms" className="hover:text-black transition-colors">
            Terms of Service
          </Link>|
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact Us
          </Link>
        </div>
        <p className="text-center text-xs">
          Memphis, TN
        </p>
      </div>
    </footer>
  )
}

export default Footer
