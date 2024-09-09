"use client"

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { b } from 'framer-motion/client'
import React from 'react'

const projectsData = [
    {
        title: 'SaYolo\'ng',
        description: 'A smart parking system that uses yolov8 computer vision to detect parking spots and Cross-Platform Mobile App to show available parking spots',
        techStack: ['Flutter', 'Firebase', 'Yolov8', 'Python']
    },
    {
        title: 'Ani-un',
        description: 'Ani-un is a 2D arcade game that uses body movement as input. The game is written in pygame and uses mediapipe body movement tracking.',
        techStack: ['Python', 'Pygame', 'Mediapipe']
    },
    {
        title: 'USASG Website',
        description: 'Helped developed USASG website using NuxtJS and Firebase',
        techStack: ['NuxtJS', 'Firebase']
    },
    {
        title: 'GIS MPA FishMApp',
        description: 'GIS FishMApp is a Geographic Information System that plots the fishing sites and marine protected areas in the philippines.',
        techStack: ['Flutter', 'Firebase', 'FlutterMap']
    },
    {
        title: 'Personal Portfolio',
        description: 'Developed my personal portfolio using NextJS and TailwindCSS',
        techStack: ['React', 'NextJS', 'TailwindCSS', 'Framer Motion', 'Shadcn/UI', 'Aceternity/UI']
    },
    {
        title: 'Personatask',
        description: 'Developed a task management app using NextJs and ExpressJS',
        techStack: ['React', 'NextJS', 'NodeJS', 'ExpressJS', 'PostgreSQL']
    }
]

export default function Projects() {
    return (
        <div id='projects'
            className='flex flex-col justify-center min-h-full gap-4 pt-20'>
            <h1 className='sticky top-0 text-2xl font-bold ml-2'>Projects</h1>
            {
                projectsData.map((project, index: number) => (
                    <motion.div key={index} 
                    className='sticky flex flex-col gap-3 bg-slate-50 backdrop-blur-sm rounded-[0.5rem] shadow-md
                    border-b-2 border-slate-300
                    lg:p-10
                    mobile_s:p-4
                    '
                    /* q: why does it not stick when it is in mobile screen?
                        a: because the parent container is not tall enough to make it sticky
                        q: how to fix it?
                        a: add a min-height to the parent container
                        */
                    animate={{
                        borderTopColor: `hsl(0, 0%, ${100 - index * 20}%)`,
                        borderTopWidth: 1 + index * 0.1,
                        top: 35 + index * 10,
                        zIndex: projectsData.length + index
                    }}
                    >
                        <h2 className='font-bold
                        lg:text-2xl
                        mobile_s:text-lg
                        '>{project.title}</h2>
                        <p className='
                        lg:text-[1.1rem]
                        mobile_s:text-sm
                        '>{project.description}</p>
                        <div className='flex gap-3 flex-wrap'>
                            {
                                project.techStack.map((tech, index) => (
                                    <span key={index} className='bg-gray-200 rounded-[0.4rem] max-h-[2rem] text-nowrap
                                    lg:p-2 lg:text-base
                                    mobile_s:p-1 mobile_s:text-xs
                                    '>{tech}</span>
                                ))
                            }
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}
