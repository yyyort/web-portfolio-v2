"use client"

import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'

const link = [
    {
        section: 'About',
        url: '/about'
    },
    {
        section: 'Experience',
        url: '/experience'
    },
    {
        section: 'Projects',
        url: '/projects'
    },
    {
        section: 'Contact',
        url: '/contact'
    }
]

export default function SectionLinks() {
  return (
    <div className='flex flex-col gap-3 pb-10'>
        {
            link.map((link, index) => (
                <div key={index} 
                className='flex items-center px-2 border-r-2 border-l-2 border-transparent
                lg:text-xl
                hover:border-r-2 hover:border-l-2 hover:border-black
                '
                >
                    <Link href={link.url}>
                       {link.section}
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
