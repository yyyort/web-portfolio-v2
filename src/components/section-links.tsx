"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsSlashLg } from 'react-icons/bs'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'

const link = [
    {
        section: 'About',
        url: '#about'
    },
    {
        section: 'Experience',
        url: '#experience'
    },
    {
        section: 'Projects',
        url: '#projects'
    },
    {
        section: 'Contact',
        url: '#contact'
    }
]

export default function SectionLinks(
    { className }: { className?: string }
) {
    const [currentSection, setCurrentSection] = useState<string>('')

    const handleScroll = () => {
        const element = document.getElementById('scroll-section')
        let scrollPosition = element?.scrollTop || 0

        link.forEach(({ section, url }) => {
            const sectionElement = document.querySelector(url)
            if (sectionElement) {
                const { offsetTop, offsetHeight } = sectionElement as HTMLElement;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setCurrentSection(section)
                }
            }
        })
    }

    useEffect(() => {
        document.getElementById("scroll-section")?.addEventListener('scroll', handleScroll)

        return () => {
            document.getElementById("scroll-section")?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`flex flex-col gap-3 pb-10 scroll-smooth ${className}`}>
            {
                link.map((link, index) => (
                    <div key={index}
                        className={cn(
                            "flex items-center px-2 border-r-2 border-l-2 border-transparent lg:text-xl",)}
                    >

                        <Link href={link.url} className={cn('flex items-center hover:text-teal-300', link.section === currentSection && 'dark:text-teal-300')}>
                            <TfiAngleLeft className={cn('hidden', link.section === currentSection ? 'block' : 'hidden')} />
                            {link.section}
                            <BsSlashLg className={cn('ml-5 -mr-1', link.section === currentSection ? 'block' : 'hidden')} />
                            <TfiAngleRight className={cn('hidden', link.section === currentSection ? 'block' : 'hidden')} />
                        </Link>

                    </div>
                ))
            }
        </div>
    )
}
