import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const social = [
    {
        url: 'https://github.com/yyyort',
        icon: <FaGithub />,
    },
    {
        url: 'www.linkedin.com/in/ian-troy-pahilga',
        icon: <FaLinkedin />,
    },
    {
        url: 'https://www.facebook.com/iantroypahilga11/',
        icon: <FaFacebook />,
    }
]

export default function SocialLinks() {
  return (
    <div className='flex'>
        {
            social.map((social, index) => (
                <div key={index} className='pr-5 text-2xl'>
                    <Link href={social.url}>
                        {social.icon}
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
