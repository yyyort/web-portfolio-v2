import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const social = [
    {
        url: 'https://github.com/yyyort',
        icon: <FaGithub />,
    },
    {
        url: 'https://linkedin.com/in/ian-troy-pahilga',
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
                <div key={index} className='pr-5 text-2xl dark:hover:text-teal-300 drop-shadow-md'>
                    <Link href={social.url} target='_blank'>
                        {social.icon}
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
