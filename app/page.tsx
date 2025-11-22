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
import SpaceAdventureGame from "@/components/space-advanture";
import { useState } from "react";
import FlyingRocket from "@/components/flying-rocket";

export default function Home() {
  const [play, setPlay] = useState(false);
  const [showRocket, setShowRocket] = useState(true);

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
          <SpaceAdventureGame handleClose={() => setPlay(false)} />
        )
      }
      <div className='flex-1 min-h-0 mx-auto px-3 w-full flex flex-row items-center justify-center mb-4'>
        <AnimatedSection
          delay={0.6}
          classNames="pt-14 pb-4 mb-12 w-full flex flex-col items-center text-center space-y-6"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight max-w-4xl">
            Empowering Youth Through<br />Art, Film & Music
          </h2>

          <div className="flex items-center gap-4 mt-4">
            <Link
              href="/team"
              className="text-xl px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition border-2 border-blue-500"
            >
              Join Us
            </Link>

            <button
              onClick={() => setPlay(true)}
              className="group text-xl px-6 py-2 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition"
            >
              Learn More
              <IoChevronForward className="inline-block ml-1 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </AnimatedSection>
      </div>


      <AnimatedSectionH
        classNames="w-full overflow-hidden bg-white rounded-t-[23rem] md:rounded-t-[20rem]  lg:rounded-t-[50%] border-t border-t-neutral-300 pt-10 pb-4 text-center"
      >
        <section className="w-full mx-auto overflow-hidden py-1 px-2">
          <div className="max-w-7xl mx-auto">
            <a target="_blank" href={"https://givebutter.com/auElnc"} className="inline-flex border border-neutral-300 items-center gap-2 bg-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-blue-600 mb-6 hover:underline hover:underline-blue-500">
              <FaDonate className="w-4 h-4" />
              Donate/Volunteer
            </a>
          </div>
        </section>
        <AnimatedSection delay={0.3} classNames="w-full px-6 py-2 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-3">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Steadfast Haven is a Memphis-based nonprofit empowering youth through
              creative freedom. We provide safe spaces where young people can learn,
              create, and share their stories — and discover a future they believe in.
            </p>
          </div>
        </AnimatedSection>
      </AnimatedSectionH>

      <div className="w-[80%] grid grid-cols-1 gap-8 py-8 px-14 my-8">

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

    </section >
  );
}






// "use client";
//
// import { useState } from "react";
// import Link from "next/link";
// import { IoChevronForward } from "react-icons/io5";
// import { FiCalendar, FiHeart, FiUsers } from "react-icons/fi";
// import { PiPalette } from "react-icons/pi";
// import { FaDonate } from "react-icons/fa";
//
// import dynamic from "next/dynamic";
// import { AnimatedSection } from "@/components/animations/animated-section";
// import { AnimatedContactInfoItem } from "@/components/animations/animated-contact-info";
// import Card from "@/components/card";
//
// const SpaceAdventureGame = dynamic(() => import("@/components/space-advanture"), { ssr: false });
//
// export default function Home() {
//   const [play, setPlay] = useState(false);
//
//   return (
//     <section className="w-full flex flex-col items-center bg-white text-black overflow-hidden">
//
//       {play && <SpaceAdventureGame handleClose={() => setPlay(false)} />}
//
//       {/* ——————————————— HERO ——————————————— */}
//       <div className="relative w-full overflow-hidden pt-36 pb-32">
//         {/* Soft radial */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,230,255,0.6),transparent_65%)] pointer-events-none" />
//
//         <AnimatedSection delay={0.2} classNames="relative z-10 text-center px-6">
//           <h1 className="text-6xl md:text-8xl font-semibold leading-[1.05] tracking-tight">
//             Creativity Shapes
//             <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//               Tomorrow’s Leaders
//             </span>
//           </h1>
//
//           <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
//             We help youth express themselves through art, film, and music —
//             building confidence, community, and real opportunities.
//           </p>
//
//           <div className="mt-12 flex justify-center gap-4">
//             <Link
//               href="/team"
//               className="px-7 py-3 bg-black text-white rounded-full text-lg hover:bg-neutral-800 transition"
//             >
//               Join Us
//             </Link>
//
//             <button
//               onClick={() => setPlay(true)}
//               className="group px-7 py-3 border border-black text-black rounded-full text-lg hover:bg-black/5 transition"
//             >
//               Play
//               <IoChevronForward className="inline-block ml-1 group-hover:translate-x-1 transition" />
//             </button>
//           </div>
//         </AnimatedSection>
//       </div>
//
//       {/* ——————————————— MISSION SPOTLIGHT ——————————————— */}
//       <AnimatedSection delay={0.3} classNames="w-full px-6 py-28 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-5xl font-semibold mb-8">Our Mission</h2>
//           <p className="text-2xl text-gray-700 leading-relaxed">
//             Steadfast Haven is a Memphis-based nonprofit empowering youth through
//             creative freedom. We provide safe spaces where young people can learn,
//             create, and share their stories — and discover a future they believe in.
//           </p>
//         </div>
//       </AnimatedSection>
//
//       {/* ——————————————— EDITORIAL FEATURE GRID ——————————————— */}
//       <div className="w-full max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-20">
//         <AnimatedContactInfoItem delay={0.2}>
//           <div className="transform -translate-y-6">
//             <Card
//               title="Attend our events."
//               desc="Youth-led showcases, exhibitions, and community celebrations — happening year-round."
//               icon={FiCalendar}
//             />
//           </div>
//         </AnimatedContactInfoItem>
//
//         <AnimatedContactInfoItem delay={0.3}>
//           <div className="transform translate-y-6">
//             <Card
//               title="Support our mission."
//               desc="Your donations help fund art supplies, equipment, safe spaces, and youth-led initiatives."
//               icon={FiHeart}
//             />
//           </div>
//         </AnimatedContactInfoItem>
//
//         <AnimatedContactInfoItem delay={0.4}>
//           <Card
//             title="Volunteer your time."
//             desc="Share your skills in art, film, music, or mentorship. Your time changes lives."
//             icon={FiUsers}
//           />
//         </AnimatedContactInfoItem>
//
//         <AnimatedContactInfoItem delay={0.5}>
//           <Card
//             title="Join our programs."
//             desc="Creative programs in art, film, and music designed to strengthen skills and amplify youth voices."
//             icon={PiPalette}
//           />
//         </AnimatedContactInfoItem>
//       </div>
//
//       {/* ——————————————— DONATION RIBBON ——————————————— */}
//       <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 py-20 text-center border-t">
//         <a
//           target="_blank"
//           href="https://givebutter.com/auElnc"
//           className="inline-flex items-center gap-3 bg-white shadow-sm px-8 py-4 rounded-full text-lg border border-neutral-300 hover:shadow-md transition"
//         >
//           <FaDonate className="w-5 h-5 text-blue-600" />
//           Support Steadfast Haven
//         </a>
//       </div>
//
//     </section>
//   );
// }
