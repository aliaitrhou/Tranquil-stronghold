"use client"

import { AnimatedSection, AnimatedSectionH } from '@/components/animations/animated-section';
import { AnimatedContactInfoItem } from '@/components/animations/animated-contact-info';
import Member from '@/components/memeber';
import { Heart, Film, Music, Users, Target, Mail, MapPin, CheckCircle2, Award, Lightbulb, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getTargetTriple } from 'next/dist/build/swc/generated-native';
import { getTeamMembers } from '@/lib/strapi';
import { TeamMember } from '@/types';

interface ProgramCardProps {
  icon: any;
  title: string;
  items: string[];
  index: number;
}

const ProgramCard = ({ icon: Icon, title, items, index }: ProgramCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedSection delay={0.3 + index * 0.1} classNames="group">
      <div
        className="bg-gray-100 rounded-2xl overflow-hidden transition-all duration-700 border border-gray-200 hover:border-blue-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center transition-transform ${isHovered ? 'scale-[1.05]' : ''}`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-400">
              {title}
            </h3>
          </div>
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center justify-start gap-2 text-md text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

interface ImpactCardProps {
  icon: any;
  stat: string;
  label: string;
  index: number;
}

const ImpactCard = ({ icon: Icon, stat, label, index }: ImpactCardProps) => (
  <AnimatedSection delay={0.5 + index * 0.05} classNames="group">
    <div className="bg-white rounded-3xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-500">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:scale-[1.2] transition-transform duration-700">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="text-4xl font-bold text-blue-600 mb-1">{stat}</div>
        <div className="text-sm  text-gray-600">{label}</div>
      </div>
    </div>
  </AnimatedSection>
);


export default function About() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTeam() {
      try {
        const data = await getTeamMembers();

        console.log('Fetched team data:', data)
        setTeam(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      } finally { setLoading(false); }
    }

    loadTeam()
  }, []);



  const teamMembers = [
    {
      id: "1",
      name: "Executive Director & Founder",
      socialId: "Shadonna Banks",
      link: "#",
      about: "Guides the vision and mission of Steadfast Haven with purpose, compassion, and leadership."
    },
    {
      id: "2",
      name: "Director of Operations",
      socialId: "Angelo Perry",
      link: "#",
      about: "Ensures smooth execution of programs and internal operations across the organization."
    },
    {
      id: "3",
      name: "Co-Founder",
      socialId: "Seymone Tanzy",
      link: "#",
      about: "Supports strategic development and growth initiatives at the core of the organization."
    },
    {
      id: "4",
      name: "Staffing Assistant",
      socialId: "Mohamed El Mahdi",
      link: "#",
      about: "Supports day-to-day team coordination, task follow-up, and project organization."
    }
  ];

  const programs = [
    {
      icon: Film,
      title: "Film & Documentary",
      items: [
        "Youth-led documentary production",
        "Storytelling & scriptwriting workshops",
        "Camera operation & editing skills",
        "Film screening events & showcases"
      ]
    },
    {
      icon: Music,
      title: "Music Production",
      items: [
        "Beat making & composition",
        "Recording studio sessions",
        "Music theory fundamentals",
        "Live performance opportunities"
      ]
    },
    {
      icon: Sparkles,
      title: "Visual Arts",
      items: [
        "Painting & mixed media workshops",
        "Photography & digital art",
        "Public mural projects",
        "Gallery exhibitions & showcases"
      ]
    },
    {
      icon: Users,
      title: "Mentorship & Support",
      items: [
        "One-on-one mentorship matching",
        "Career guidance & planning",
        "Support for at-risk youth",
        "Community building events"
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen bg-white text-black max-w-5xl mx-auto px-8">
      <AnimatedSection delay={0.1} classNames="text-center py-14">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-500">
          About Steadfast Haven
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Empowering Memphis youth to tell their stories and build their futures through creative expression.
        </p>
      </AnimatedSection>

      <div className="py-6">
        <AnimatedSection delay={0.2}>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full -ml-24 -mb-24" />
            </div>
            <div className="relative z-10 p-8 md:p-12 text-white">
              <div className="inline-block bg-blue-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6 max-w-3xl">
                Steadfast Haven is a Memphis-based 501(c)(3) nonprofit that empowers underserved youth
                through art, film, and music. We offer safe creative spaces for young people to tell their
                stories, develop real-world skills, and drive community change.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-sm text-gray-300">Location</div>
                  <div className="text-lg font-semibold">Memphis, TN</div>
                </div>
                <div>
                  <div className="text-sm text-gray-300">EIN</div>
                  <div className="text-lg font-semibold">99-1301788</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>


      <div className="py-10">
        <AnimatedSection delay={0.6} classNames="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Steadfast Haven is led by a passionate and mission-driven team committed to creating lasting
            impact through strategic leadership, clear communication, and strong community connections.
          </p>
        </AnimatedSection>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch gap-3 md:gap-6 lg:gap-8 px-2 py-6'>
          <Member id="1" name="Director of Operations" socialId='Angelo Perry' link='#' about='Ensures smooth execution of programs and internal operations across the organization.' />

          <Member id="2" name="Co-Founder" socialId='Seymone Tanzy ' link='#' about='Supports strategic development and growth initiatives at the core of the organization.' />

          <Member id="3" name="Executive Director & Founder" socialId='Shadonna Banks ' link='#' about='Guides the vision and mission of Steadfast Haven with purpose, compassion, and leadership.' />

          <Member id="4" name="Staffing Assistant" socialId='Mohamed El Mahdi' link='#' about='Supports day-to-day team coordination, task follow-up, and project organization.' />

          <Member id="4" name="Staffing Assistant" socialId='Mohamed El Mahdi' link='#' about='Guides the vision and mission of Steadfast Haven with purpose, compassion, and leadership.' />

          <Member id="4" name="Staffing Assistant" socialId='Mohamed El Mahdi' link='#' about='Guides the vision and mission of Steadfast Haven with purpose, compassion, and leadership.' />
        </div>
      </div>


      <div className="py-12">
        <AnimatedSection delay={0.25} classNames="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive offerings designed to nurture creativity and build real-world skills
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </div>

      <div className="py-12">
        <AnimatedSection delay={0.5} classNames="text-center mb-8">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">Our Impact</h2>
          <p className="text-lg text-gray-600">Making a real difference in the Memphis community</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ImpactCard icon={Users} stat="200+" label="Youth Empowered" index={0} />
          <ImpactCard icon={Film} stat="50+" label="Projects Created" index={1} />
          <ImpactCard icon={Award} stat="15+" label="Events Hosted" index={2} />
          <ImpactCard icon={Heart} stat="10K+" label="Lives Touched" index={3} />
        </div>
      </div>


      <AnimatedSectionH delay={0.2} classNames="max-w-5xl mx-auto w-full px-6 bg-white">
        <div className="max-w-7xl mx-auto pb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Want to get Involved?</h2>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Your support helps us empower Memphis youth to create, grow, and thrive through art, film, and music.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:angeloperryjr@gmail.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="https://givebutter.com/auElnc"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </AnimatedSectionH>
    </section>
  );
}
