import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { Button } from './ui/button'

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
        <div className='flex items-center'>
            {
                social.map((social, index) => (
                    <div key={index} className='pr-5 text-2xl
                    hover:text-teal-800
                    hover:dark:text-teal-400
                '>
                        <Link href={social.url} target='_blank'>
                            {social.icon}
                        </Link>
                    </div>
                ))
            }

            <a href='/public/Ian-Troy-Pahilga-Resume.pdf' download={'/public/Ian-Troy-Pahilga-Resume.pdf'}>
                <Button className='
                    hover:bg-gradient-to-tr from-teal-700 to-cyan-600
                    hover:dark:bg-gradient-to-tr dark:from-teal-800 dark:to-teal-400
                    '>Resume</Button>
            </a>

        </div>
    )
}
