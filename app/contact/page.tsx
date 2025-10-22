

import AnimatedSection from "@/components/animations/animated-section"
import { AnimatedContactInfo, AnimatedContactInfoItem } from "@/components/animations/animated-contact-info"
import { ExternalLinkItem } from "@/components/footer"
import { openSans } from "@/fonts"
import { BiMailSend } from "react-icons/bi"
import { FaCompass } from "react-icons/fa"
import { IoLocation, IoMail } from "react-icons/io5"
import { PiInstagramLogoFill } from "react-icons/pi"

const Contact = () => {
  return (
    <div className={`w-full ${openSans.className}`}>
      <div className="max-w-2xl mx-auto pt-16">
        <AnimatedSection classNames="my-1 max-w-xl mx-auto text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <BiMailSend className="text-4xl sm:text-5xl md:text-6xl " />
            <span>
              Get in Touch.
            </span>
          </div>
          <p className="px-4 sm:px-2 text-sm sm:text-lg">We would love to hear from you! Whether you have questions, feedback, or want to get involved, feel free to reach out to us.</p>
        </AnimatedSection>
        <AnimatedSection delay={0.4} classNames="w-full md:max-w-2xl mx-auto">
          <form className="px-4 space-y-3 py-8">
            <div className="flex flex-row items-center gap-4">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 p-3" required />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="w-full border border-gray-300 p-3" required />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 p-3" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows={5} className="resize-none w-full border border-gray-300 p-3" required></textarea>
            </div>
            <div className="w-full text-end">
              <button type="submit"
                className="border border-gray-300 gap-2 bg-white px-4 py-2 font-semibold text-blue-500 hover:border-blue-500 hover:text-white  hover:bg-blue-500"
              >Send Message</button>
            </div>
          </form>
        </AnimatedSection>
      </div>

      <AnimatedContactInfo classNames="w-full bg-gray-100/70 my-12 py-3">
        <div className="max-w-4xl mx-auto text-center flex flex-row items-center justify-around flex-wrap gap-2 py-6 text-xs sm:text-sm">
          <AnimatedContactInfoItem delay={0.2}>
            <p className="flex items-center gap-1 font-semibold">
              <IoMail className="size-5" />
              <span>
                Email:
              </span>
            </p>
            <ExternalLinkItem href="mailto:admin@steadfasthaven.com" label="admin@steadfasthaven.com" />
          </AnimatedContactInfoItem>

          <AnimatedContactInfoItem delay={0.6}>
            <p className="flex items-center gap-1 font-semibold">
              <PiInstagramLogoFill className="size-5" />
              <span>
                Instagram:
              </span>
            </p>
            <ExternalLinkItem href="https://instagram.com/thesfhaven" label="@thesfhaven" />
          </AnimatedContactInfoItem>

          <AnimatedContactInfoItem delay={0.9}>
            <p className="flex items-center gap-1 font-semibold">
              <IoLocation className="size-5" />
              <span>
                Location:
              </span>
            </p>
            <p>Memphis, Tennessee</p>
          </AnimatedContactInfoItem>
          <AnimatedContactInfoItem delay={1}>
            <p className="flex items-center gap-2 font-semibold">
              <FaCompass className="size-5" />
              <span>
                Youth Program Enrollment:
              </span>
            </p>
            <span className="text-gray-500 italic">
              Coming soon!
            </span>
          </AnimatedContactInfoItem>
        </div>
      </AnimatedContactInfo>
    </div>
  )
}

export default Contact

