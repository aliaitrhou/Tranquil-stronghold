"use client"

import { AnimatedSection, AnimatedSectionH } from "@/components/animations/animated-section";
import { AnimatedContactInfoItem } from "@/components/animations/animated-contact-info";
import Card from "@/components/card";
import Link from "next/link";
import { FaDonate } from "react-icons/fa";
import { FiCalendar, FiHeart, FiUsers } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { PiPalette } from "react-icons/pi";
import SpaceAdventureGame from "@/components/space-advanture";
import { useState } from "react";
import FlyingRocket from "@/components/flying-rocket";
import { RiTeamLine } from "react-icons/ri";

export default function Home() {
  const [play, setPlay] = useState(false);
  const [showRocket, setShowRocket] = useState(true);
  const handleCloseGame = () => {
    setPlay(false);
    // Reset the rocket after a short delay
    setTimeout(() => {
      setShowRocket(true);
    }, 300);
  };

  return (
    <section className="w-full flex-1 min-h-0 flex flex-col items-center justify-start bg-white text-black">
      {showRocket && (
        <FlyingRocket
          onCatch={() => {
            setShowRocket(false);
            setPlay(true);
          }}
        />
      )}
      {
        play && (
          <SpaceAdventureGame handleClose={handleCloseGame} />
        )
      }
      <div className='flex-1 min-h-0 mx-auto px-3 w-full flex flex-row items-center justify-center mb-4'>
        <AnimatedSection
          delay={0.6}
          classNames="pt-14 pb-4 mb-12 w-full flex flex-col items-center text-center space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight max-w-4xl">
            Empowering Youth Through<br />Art, Film & Music
          </h2>

          <div className="flex items-center gap-4 mt-4">
            <Link
              href="/team"
              className="text-xl px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition border-2 border-blue-500"
            >
              Join Us
            </Link>

            <Link
              href={"/about"}
              className="group text-xl px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition"
            >
              Learn More
              <IoChevronForward className="inline-block ml-1 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* <svg viewBox="0 0 1680 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 255, 255, 1)" d="M 0 198 C 502.79999999999995 198 335.20000000000005 120 838 120 L 838 120 L 838 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 837 120 C 1342.8 120 1174.2 198 1680 198 L 1680 198 L 1680 0 L 837 0 Z" stroke-width="0"></path> </svg> */}

      <AnimatedSectionH
        classNames="w-full min-h-screen overflow-hidden bg-white rounded-t-[23rem] md:rounded-t-[20rem]  lg:rounded-t-[90%] border-t border-t-neutral-300 p-8 pb-4 text-center"
      >
        <AnimatedSection delay={0.3} classNames="w-full px-6 py-2 bg-white">
          <a target="_blank" href={"https://givebutter.com/auElnc"} className="inline-flex border border-neutral-300 items-center gap-2 bg-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-blue-600 mb-6 hover:underline hover:underline-blue-500">
            <FaDonate className="w-4 h-4" />
            Donate
          </a>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-3">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Steadfast Haven is a Memphis-based nonprofit empowering youth through
              creative freedom. We provide safe spaces where young people can learn,
              create, and share their stories — and discover a future they believe in.
            </p>
          </div>
        </AnimatedSection>

        <div className="w-[70%] mx-auto grid grid-cols-1 gap-8 lg:gap-14 py-8 px-14 my-8">

          <AnimatedContactInfoItem delay={1}>
            <Card
              id={1}
              title="Attend our events."
              desc="
Experience youth-led showcases and creative performances.
Enjoy exhibitions, celebrations, and community gatherings.
See young creators share their work throughout the year.
"
              icon={FiCalendar}
              left={true}
            />
          </AnimatedContactInfoItem>
          <AnimatedContactInfoItem delay={0.4}>
            <Card
              id={2}
              title="Support our mission."
              desc="
            Your contribution fuels local creativity and access to the arts.
            Donations provide supplies, equipment, and safe creative spaces.
            Help empower Memphis youth through meaningful artistic opportunities.
            "
              icon={FiHeart}
              left={false}
            />
          </AnimatedContactInfoItem>
        </div>
      </AnimatedSectionH>


      <AnimatedSectionH
        classNames="w-full overflow-hidden bg-white rounded-b-[23rem] md:rounded-b-[20rem]  lg:rounded-b-[90%] border-b border-b-neutral-300 px-8 pb-8 mb-8 text-center"
      >
        <div className="w-[70%] mx-auto grid grid-cols-1 gap-8 lg:gap-14 px-8 pb-8 px-14 my-8">
          <AnimatedContactInfoItem delay={0.6}>
            <Card
              id={3}
              title="Volunteer your time."
              desc="
            Share your talents in art, film, music, or mentorship.
            Support young creators by offering guidance and inspiration.
            Your time can spark growth, confidence, and new skills.
            "
              icon={FiUsers}
              left={true}
            />
          </AnimatedContactInfoItem>

          <AnimatedContactInfoItem delay={0.8}>
            <Card
              id={4}
              title="Join our programs."
              desc="
              Explore youth programs in art, film, and music.
              Develop creative skills in a supportive, hands-on environment.
              Designed to amplify youth voices and encourage self-expression.
              "
              icon={PiPalette}
              left={false}
            />
          </AnimatedContactInfoItem>
        </div>
        <a target="_blank" href={"/team"} className="inline-flex border border-neutral-300 items-center gap-2 bg-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium text-blue-600 mb-6 hover:underline hover:underline-blue-500">
          <RiTeamLine className="w-4 h-4" />
          Join our Team
        </a>
      </AnimatedSectionH>

    </section >
  );
}
