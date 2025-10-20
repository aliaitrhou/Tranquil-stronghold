
const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-20">

      <div className="m-4 mx-auto max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Let's get in Touch</h1>
        <p className="mb-4">We would love to hear from you! Whether you have questions, feedback, or want to get involved, feel free to reach out to us.</p>
      </div>
      <form className="space-y-4 p-8 bg-white border border-neutral-300  rounded-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full border border-gray-300 rounded-md p-2" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
      </form>


    </div>
  )
}

export default Contact
