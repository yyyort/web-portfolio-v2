import React from 'react'

const aboutContent: String = ''

export default function About() {
  return (
    <section
      id='about'
     className='
     flex flex-col justify-center backdrop-blur-3xl rounded-[0.5rem] shadow-xl
     xl:p-12 xl:mt-7 xl:mb-14 xl:gap-3 xl:text-[1.1rem]
     mobile_s:p-5 mobile_s:mb-7 mobile_s:gap-2 mobile_s:text-base
     '>
      <h1 className='hidden text-2xl font-bold
      mobile_s:block
      '>About</h1>
      <p>
        I am a fresh graduate from the University of San Agustin with a degree in Computer Science major in Game Development, and former Project Manager of Google Developer Student Club - USA.
      </p>
      <p>
      I am a jack of all trades and is eager to learn and try anything that interests me in tech, from Web, Mobile, Game, and AI. Currently, I mainly focus on Full Stack Development, I use React, and NextJs for my Front End, Node and ExpressJS for the Back End, and I use either PostgreSQL for SQL Database or MongoDB for NoSQL.
      </p>
      <p>
        I have previous experience with mobile cross-platform before using Flutter and Firebase as a BaaS, alongside implementing a computer vision with it in my thesis project.
      </p>
      <p>
        I think taking a jack-of-all-trades route for now can help me become a better Software Engineer because, in the end, all the tech we use is just a tool, it just depends on the scenario on how and what tools we should use.
      </p>
    </section>
  )
}
