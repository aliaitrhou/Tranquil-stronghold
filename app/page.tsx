import AnimatedBox from "@/components/animated-box";
import Container from "@/components/container";
import { openSans } from "@/fonts";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgCalendar } from "react-icons/cg";
import { IoChevronForward } from "react-icons/io5";

export default function Home() {
  return (
    <div className="w-full flex-1 min-h-0 flex flex-col items-center justify-start bg-white text-black">
      <Container>
        <div className="self-start max-w-3xl mx-auto pt-20 space-y-6">
          <h2 className="text-5xl font-bold text-center">
            Empowering Youth Through
            Art, Film & Music
          </h2>
          <div className={`mt-4 w-full text-center flex flex-row items-center justify-center gap-2 ${openSans.className}`}>
            <Link href={"/team"} className='text-xl font-light text-white border border-blue-500 hover:border-blue-600 bg-blue-500 my-3 rounded-full px-5 py-2 flex flexrow items-center gap-1 hover:bg-blue-600'>
              Join Us
            </Link>
            <Link href={"/work"} className='text-xl font-light border-[2px] border-blue-500 text-blue-500 hover:text-white  my-3 rounded-full px-5 py-2 flex flexrow items-center gap-1 hover:bg-blue-500 inline-flex items-center gap-2'>
              Watch Our Work
              <IoChevronForward className="" />
            </Link>
          </div>
        </div>
      </Container >

      <AnimatedBox
        classNames="w-full bg-gradient-to-br from-gray-50 to-teal-50  rounded-t-[50%] border-t border-t-neutral-300 p-12 text-center"
      >
        <Link href={"/events"} className="inline-flex border border-blue-100 items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-600 mb-6">
          <CgCalendar className="w-4 h-4" />
          Next Event
        </Link>
        <h2 className="text-4xl font-bold mb-4">Our Mession</h2>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto font-openSans">
          Steadfast Haven is a Memphis-based nonprofit empowering youth through art, film, and music.
          We provide safe creative spaces where young people can share their stories, build skills, and
          lead community change
        </p>

        <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
          <span className="text-lg">
            Donate/Volunteer
          </span>
          <IoChevronForward className="size-5" />
        </button>
      </AnimatedBox>
    </div>
  );
}
