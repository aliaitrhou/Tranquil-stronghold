
import { AnimatedContactInfoItem } from '@/components/animations/animated-contact-info'
import { AnimatedSection } from '@/components/animations/animated-section'
import Member from '@/components/memeber'
// import VantaBirds from '@/components/vanta-birds'
import React from 'react'

const Team = () => {
  return (
    <div className='w-full min-h-[85dvh] flex flex-col items-center justify-start max-w-7xl mx-auto p-10 space-y-8'>
      <AnimatedSection delay={0.2} classNames='text-center max-w-2xl space-y-2' >
        <h1 className='text-4xl font-bold'>Team Overview</h1>
        <p className='text-2xl'>
          Steadfast Haven is led by a passionate and mission-driven team committed to creating lasting
          impact through strategic leadership, clear communication, and strong community connections.
        </p>
      </AnimatedSection>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-14 lg:gap-20 p-2 sm:p-4 md:p-6 lg:p-8'>

        <AnimatedContactInfoItem delay={0.2}>
          <Member id="1" name="Director of Operations" socialId='Angelo Perry' link='#' about='Ensures smooth execution of programs and internal operations across the organization.' />
        </AnimatedContactInfoItem>

        <AnimatedContactInfoItem delay={0.4}>
          <Member id="2" name="Co-Founder" socialId='Seymone Tanzy ' link='#' about='Supports strategic development and growth initiatives at the core of the organization.' />
        </AnimatedContactInfoItem>

        <AnimatedContactInfoItem delay={0.8}>
          <Member id="3" name="Executive Director & Founder" socialId='Shadonna Banks ' link='#' about='Guides the vision and mission of Steadfast Haven with purpose, compassion, and leadership.' />
        </AnimatedContactInfoItem>

        <AnimatedContactInfoItem delay={0.6}>
          <Member id="4" name="Staffing Assistant" socialId='Mohamed El Mahdi' link='#' about='Supports day-to-day team coordination, task follow-up, and project organization.' />
        </AnimatedContactInfoItem>

        <AnimatedContactInfoItem delay={1}>
          <Member id="4" name="Staffing Assistant" socialId='Mohamed El Mahdi' link='#' about='Guides the vision and mission of Steadfast Haven with purpose, compassion, and leadership.' />
        </AnimatedContactInfoItem>

        <AnimatedContactInfoItem delay={1.2}>
          <Member id="4" name="Staffing Assistant" socialId='Mohamed El Mahdi' link='#' about='Guides the vision and mission of Steadfast Haven with purpose, compassion, and leadership.' />
        </AnimatedContactInfoItem>
      </div>
    </div>)
}

export default Team

