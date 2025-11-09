
import React from 'react'

const Team = () => {
  return (
    <div className='w-full min-h-[85dvh] flex flex-col items-center justify-start max-w-4xl mx-auto p-5'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>The Team</h1>
        <p className='mb-3'>At Steadfast Haven, our team is a diverse group of passionate individuals dedicated to empowering youth through the arts. Each member brings unique skills and experiences that contribute to our mission of fostering creativity and self-expression.</p>
      </div>
      <div>
        <h2 className='text-2xl font-semibold mb-3'>Meet Our Team Members</h2>
        <ul className='list-disc list-inside space-y-2'>
          <li><strong>Jane Doe</strong> - Founder & Director: With a background in social work and a passion for the arts, Jane leads our organization with vision and dedication.</li>
          <li><strong>John Smith</strong> - Program Coordinator: John oversees our art, film</li>
        </ul>
      </div>
    </div>)
}

export default Team

