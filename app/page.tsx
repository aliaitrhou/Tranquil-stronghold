"use client"

import { AnimatedSection, AnimatedSectionH } from "@/components/animations/animated-section";
import { AnimatedContactInfoItem } from "@/components/animations/animated-contact-info";
import Card from "@/components/card";
import { inter, openSans } from "@/fonts";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import { FiCalendar, FiHeart, FiUsers } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { PiPalette } from "react-icons/pi";

export default function Home() {
  return (
    <section className="w-full flex-1 min-h-0 flex flex-col items-center justify-start bg-white text-black">
      <div className='flex-1 min-h-0 mx-auto px-3 w-full flex flex-row items-center justify-center mb-4'>
        <AnimatedSection delay={0.6} classNames="self-start max-w-3xl mx-auto pt-16 space-y-6">
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
      </div>

      <AnimatedSectionH
        classNames="w-full overflow-hidden bg-gradient-to-br from-gray-50 to-teal-50 rounded-t-[23rem] md:rounded-t-[20rem]  lg:rounded-t-[50%] border-t border-t-neutral-300 pt-10 pb-12 text-center"
      >
        <section className="w-full mx-auto overflow-hidden py-1 px-2 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <a target="_blank" href={"https://givebutter.com/auElnc"} className="inline-flex border border-neutral-300 items-center gap-2 bg-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-blue-600 mb-6 hover:underline hover:underline-blue-500">
              <FaDonate className="w-4 h-4" />
              Donate/Volunteer
            </a>
            <h2 className="text-4xl font-bold mb-4">Our Mession</h2>
            <p className="text-gray-600 mb-8 max-w-xl px-6  mx-auto font-openSans">
              Steadfast Haven is a Memphis-based nonprofit empowering youth through art, film, and music.
              We provide safe creative spaces where young people can share their stories, build skills, and
              lead community change
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-3 lg:px-3 gap-6">
              <AnimatedContactInfoItem delay={0.4}>
                <Card
                  title="Support our mission."
                  desc="Your donation helps provide art supplies, equipment, and creative spaces for Memphis youth."
                  icon={FiHeart}
                />
              </AnimatedContactInfoItem>
              <AnimatedContactInfoItem delay={0.6}>
                <Card
                  title="Volunteer your time."
                  desc="Share your skills in art, film, music, or mentorship to inspire the next generation of creators."
                  icon={FiUsers}
                />
              </AnimatedContactInfoItem>

              <AnimatedContactInfoItem delay={0.8}>
                <Card
                  title="Join our programs."
                  desc="Youth programs in art, film, and music are designed to develop skills and amplify voices."
                  icon={PiPalette}
                />
              </AnimatedContactInfoItem>
              <AnimatedContactInfoItem delay={1}>
                <Card
                  title="Attend our events."
                  desc="Experience youth-led showcases, exhibitions, and community celebrations throughout the year."
                  icon={FiCalendar}
                />
              </AnimatedContactInfoItem>
            </div>
          </div>
        </section>
      </AnimatedSectionH>
    </section >
  );
}
