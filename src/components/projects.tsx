import { desc } from 'framer-motion/client'
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
        techStack: ['Flutter', 'Firebase']
    },
    {
        title: 'Personal Portfolio',
        description: 'Developed my personal portfolio using NextJS and TailwindCSS',
        techStack: ['NextJS', 'TailwindCSS']
    },
    {
        title: 'Personatask',
        description: 'Developed a task management app using NextJs and ExpressJS',
        techStack: ['NextJS', 'ExpressJS']
    }
]

export default function Projects() {
  return (
    <div id='projects'
     className='flex flex-col justify-center min-h-full gap-4'>
        {
            projectsData.map((project, index) => (
                <div key={index} className='flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold'>{project.title}</h2>
                    <p className='text-[1.1rem]'>{project.description}</p>
                    <div className='flex gap-3'>
                        {
                            project.techStack.map((tech, index) => (
                                <span key={index} className='p-2 bg-gray-200 rounded-[0.4rem]'>{tech}</span>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}
