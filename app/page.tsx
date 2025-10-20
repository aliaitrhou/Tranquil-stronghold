"use client"

import AnimatedBox from "@/components/animated-box";
import AnimatedSection from "@/components/animated-section";
import Container from "@/components/container";
import { inter, openSans } from "@/fonts";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgCalendar } from "react-icons/cg";
import { CiCalendar, CiHeart } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { FiCalendar, FiHeart, FiUsers } from "react-icons/fi";
import { HiHeart } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";
import { PiPalette } from "react-icons/pi";

export default function Home() {
  return (
    <div className="w-full flex-1 min-h-0 flex flex-col items-center justify-start bg-white text-black">
      <Container>
        <AnimatedSection classNames="self-start max-w-3xl mx-auto pt-20 space-y-6">
          <h2 className="text-5xl font-bold text-center">
            Empowering Youth Through
            Art, Film & Music
          </h2>
          <div className={`mt-4 w-full text-center flex flex-row items-center justify-center gap-2 ${inter.className}`}>
            <Link href={"/team"} className='text-xl font-light text-white border border-blue-500 hover:border-blue-600 bg-blue-500 my-3 rounded-full px-3 py-2 flex flexrow items-center gap-1 hover:bg-blue-600'>
              Join Us
            </Link>
            <Link href={"/work"} className='group text-xl font-light border-[2px] border-blue-500 text-blue-500 my-3 rounded-full px-3 py-2 flex flexrow items-center gap-1 inline-flex items-center gap-1'>
              <span>
                Watch Our Work
              </span>
              <IoChevronForward className="group-hover:translate-x-2  group-hover:underline-blue-500 transition-all duration-700" />
            </Link>
          </div>
        </AnimatedSection>
      </Container >

      <AnimatedBox
        classNames="w-full overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50  rounded-t-[50%] border-t border-t-neutral-300 p-12 text-center"
      >
        <section className="w-full mx-auto overflow-hidden py-8 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Ways to Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow relative group">
                <div className="mb-6">
                  <FiHeart className="w-12 h-12 text-gray-800" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Support our mission.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Your donation helps provide art supplies, equipment, and creative spaces for Memphis youth.
                </p>
                <button className="absolute bottom-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <AiOutlineArrowRight className="w-5 h-5 text-gray-800 group-hover:text-white" />
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow relative group">
                <div className="mb-6">
                  <FiUsers className="w-12 h-12 text-gray-800" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Volunteer your time.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Share your skills in art, film, music, or mentorship to inspire the next generation.
                </p>
                <button className="absolute bottom-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <AiOutlineArrowRight className="w-5 h-5 text-gray-800 group-hover:text-white" />
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow relative group">
                <div className="mb-6">
                  <PiPalette className="w-12 h-12 text-gray-800" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Join our programs.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Youth programs in art, film, and music are designed to develop skills and amplify voices.
                </p>
                <button className="absolute bottom-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <AiOutlineArrowRight className="w-5 h-5 text-gray-800 group-hover:text-white" />
                </button>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow relative group">
                <div className="mb-6">
                  <FiCalendar className="w-11 h-11 text-gray-800" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  Attend our events.
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Experience youth-led showcases, exhibitions, and community celebrations throughout the year.
                </p>
                <button className="absolute bottom-8 right-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <AiOutlineArrowRight className="w-5 h-5 text-gray-800 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <Link href={"/events"} className="inline-flex border border-blue-100 items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 mb-6"> */}
        {/*   <CgCalendar className="w-4 h-4" /> */}
        {/*   Next Event */}
        {/* </Link> */}
        {/* <h2 className="text-4xl font-bold mb-4">Our Mession</h2> */}
        {/**/}
        {/* <p className="text-gray-600 mb-8 max-w-xl mx-auto font-openSans"> */}
        {/*   Steadfast Haven is a Memphis-based nonprofit empowering youth through art, film, and music. */}
        {/*   We provide safe creative spaces where young people can share their stories, build skills, and */}
        {/*   lead community change */}
        {/* </p> */}
        {/**/}
        {/* <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors inline-flex items-center gap-2"> */}
        {/*   <span className="text-lg"> */}
        {/*     Donate/Volunteer */}
        {/*   </span> */}
        {/*   <IoChevronForward className="size-5" /> */}
        {/* </button> */}
      </AnimatedBox>
    </div >
  );
}
