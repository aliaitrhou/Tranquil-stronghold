import { openSans } from "@/fonts"

const Contact = () => {
  return (
    <div className={`max-w-5xl mx-auto py-20 ${openSans.className}`}>

      <div className="m-4 mx-auto max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Get in Touch.
        </h1>
        <p className="mb-4">We would love to hear from you! Whether you have questions, feedback, or want to get involved, feel free to reach out to us.</p>
      </div>
      <div className="w-full flex flex-row items-center justify-between gap-8">
        <form className="space-y-3 py-8 px-2 rounded-md">
          <div className="flex flex-row items-center gap-4">
            <div className="w-full">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <div className="w-full">
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" id="lastName" name="lastName" className="w-full border border-gray-300 rounded-md p-2" required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows={5} className="resize-none w-full border border-gray-300 rounded-md p-2" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 border border-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
        </form>
        <div className="h-full border-l-4 pl-8 pr-4 w-full max-w-sm space-y-6">
          <h3 className="font-bold text-xl">Contact Information</h3>
          <div className="contact-item">
            <h4 className="font-semibold text-lg">Email</h4>
            <a href="mailto:admin@steadfasthaven.com">admin@steadfasthaven.com</a>
          </div>
          <div className="contact-item">
            <h4
              className="font-semibold text-lg"
            >Instagram</h4>
            <a href="https://instagram.com/thesfhaven" target="_blank">@thesfhaven</a>
          </div>
          <div className="contact-item">
            <h4
              className="font-semibold text-lg"
            >Location</h4>
            <p>Memphis, Tennessee</p>
          </div>
          <div className="contact-item">
            <h4
              className="font-semibold text-lg"
            >Youth Program Enrollment</h4>
            <p>Coming soon! Check back for enrollment information.</p>
          </div>
        </div>
      </div>


      {/* <div className="max-w-5xl mx-auto flex items-center justify-between pt-2 pb-4 font-light"> */}
      {/*   <div className="leading-relaxed"> */}
      {/*     <span className="text-black font-semibold">Social Links</span> */}
      {/*     <div className='grid grid-cols-2 gap-6'> */}
      {/*       <div> */}
      {/*         <p> */}
      {/*           <a href="https://instagram.com/thesfhaven" target="_blank" className="hover:text-black transition-colors"> */}
      {/*             Instagram */}
      {/*           </a> */}
      {/*         </p> */}
      {/*         <p> */}
      {/*           <a href="https://x.com/steadfasthaven1" target="_blank" className="hover:text-black transition-colors"> */}
      {/*             X (Twitter) */}
      {/*           </a> */}
      {/*         </p> */}
      {/*       </div> */}
      {/*       <div> */}
      {/**/}
      {/*         <p> */}
      {/*           <a href="https://www.tiktok.com/@steadfasthaven" target="_blank" className="hover:text-black transition-colors"> */}
      {/*             TikTok */}
      {/*           </a> */}
      {/*         </p> */}
      {/*         <p> */}
      {/*           {/* https://www.youtube.com/@SteadfastHaven */}
      {/*           <a href="https://www.youtube.com/@SteadfastHaven" target="_blank" className="hover:text-black transition-colors"> */}
      {/*             YouTube */}
      {/*           </a> */}
      {/*         </p> */}
      {/*       </div> */}
      {/**/}
      {/*     </div> */}
      {/*   </div> */}
      {/**/}
      {/**/}
      {/*   <div className="leading-relaxed"> */}
      {/*     <span className="text-black font-semibold">Get in touch</span> */}
      {/*     <div> */}
      {/*       <p> */}
      {/*         Email:{' '} */}
      {/*         <a href="mailto:admin@steadfasthaven.com" className="hover:text-black"> */}
      {/*           admin@steadfasthaven.com */}
      {/*         </a> */}
      {/*       </p> */}
      {/*       <p> */}
      {/*         <Link href="/contact" className="hover:text-black"> */}
      {/*           Contact Us */}
      {/*         </Link> */}
      {/*       </p> */}
      {/*     </div> */}
      {/*   </div> */}
      {/**/}
      {/*   <div className="text-neutral-600"> */}
      {/*     <span className="text-black font-semibold">Programs</span> */}
      {/*     <p> */}
      {/*       Youth Program Enrollment:{' '} */}
      {/*     </p> */}
      {/*     <span className="text-neutral-400 italic">Coming soon</span> */}
      {/*   </div> */}
      {/* </div> */}
      {/**/}
    </div>
  )
}

export default Contact

