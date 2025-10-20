import Container from "@/components/container";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Container>
        <div className="max-w-4xl mx-auto pt-4">
          <h2 className="text-6xl font-bold text-center">
            Impowering Youth Through
            Art, Film & Music
          </h2>
          <p className="px-8 mt-6 text-center text-lg font-light">
            Steadfast Haven is a Memphis-based nonprofit empowering youth through art, film, and music.
            We provide safe creative spaces where young people can share their stories, build skills, and
            lead community change
          </p>
          <div className="mt-4 w-full text-center flex flex-row items-center justify-center gap-2">
            <Link href={"/team"} className='text-xl font-light text-white border border-blue-500 hover:border-blue-600 bg-blue-500 my-3 rounded-full px-5 py-2 flex flexrow items-center gap-1 hover:bg-blue-600'>
              Join Us
            </Link>
            <Link href={"/work"} className='text-xl font-light border-[2px] border-blue-500 text-blue-500 hover:text-white  my-3 rounded-full px-5 py-2 flex flexrow items-center gap-1 hover:bg-blue-500'>
              Watch Our Work
            </Link>
          </div>
        </div>
      </Container >
    </div >
  );
}
