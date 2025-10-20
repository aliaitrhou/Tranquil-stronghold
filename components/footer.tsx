
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full  bg-gray-50 text-neutral-500 text-sm py-8 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between pt-2 pb-4 font-light">

        {/* Top Link Rows */}
        {/* Left Section — Site Links */}

        {/* Right Section — Social Links */}
        <div className="leading-relaxed">
          <span className="text-black font-semibold">Social Links</span>
          <div>
            <p>
              <a href="https://instagram.com/thesfhaven" target="_blank" className="hover:text-black transition-colors">
                Instagram
              </a>
            </p>
            <p>
              <a href="https://x.com/steadfasthaven1" target="_blank" className="hover:text-black transition-colors">
                X (Twitter)
              </a>
            </p>

          </div>
          <div>
            <p>
              <a href="https://www.tiktok.com/@steadfasthaven" target="_blank" className="hover:text-black transition-colors">
                TikTok
              </a>
            </p>
            <p>
              {/* https://www.youtube.com/@SteadfastHaven */}
              {/* <a hreLf="https://www.youtube.com/@SteadfastHaven" target="_blank" className="hover:text-black transition-colors" */}
              {/* Youtube */}
              {/* </a> */}
            </p>

          </div>
        </div>


        <div className="leading-relaxed">
          <span className="text-black font-semibold">Get in touch</span>
          <div>
            <p>
              Email:{' '}
              <a href="mailto:admin@steadfasthaven.com" className="hover:text-black">
                admin@steadfasthaven.com
              </a>
            </p>
            <p>
              <Link href="/contact" className="hover:text-black">
                Contact Us
              </Link>
            </p>
          </div>
        </div>

        <div className="text-neutral-600">
          <span className="text-black font-semibold">Programs</span>
          <p>
            Youth Program Enrollment:{' '}
          </p>
          <span className="text-neutral-400 italic">Coming soon</span>
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
