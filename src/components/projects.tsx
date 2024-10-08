// React Server Components
import * as motion from "framer-motion/client"
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
        description: 'Personal Developer Portfolio created using NextJS',
        techStack: ['React', 'NextJS', 'Shadcn/UI', 'Aceternity/UI']
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
                    className='sticky flex flex-col gap-3 backdrop-blur-xl rounded-[0.5rem] shadow-md 
                    lg:p-10
                    mobile_s:p-4
                    bg-gradient-to-tr from-[#dae1e9] to-[#9dcbccc9]
                  dark:text-white dark:bg-gradient-to-tl dark:from-[#28333e] dark:to-[#0a1b23]
                    hover:shadow-light_shadow
                    hover:dark:shadow-dark_shadow
                    '
                    animate={{
                        borderTopColor: `hsl(0, 0%,${0 + index * 20}%)`,
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
                                    <span key={index} className='flex items-center rounded-[0.4rem] max-h-[2rem] text-nowrap text-center
                                    lg:p-2 lg:text-base
                                    mobile_s:p-1 mobile_s:text-xs
                                    bg-white text-black
                                    dark:from-[#005F73] dark:to-[#1d3337]
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
