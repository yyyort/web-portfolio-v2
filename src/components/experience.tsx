import React from 'react'

const experience = [
    {
        title: 'Project Manager',
        company: 'Google Developer Student Club - USA',
        date: 'Jan 2023 - Jun 2024',
        accomplishment: [
            'Developed Ani-un, a 2D game using pygame and mediapipe for computer vision',
            'Helped implement computer vision in Harry Potter Game, using mediapipe',
            'Helped developed USASG website using NuxtJS and Firebase'
        ]
    },
    {
        title: 'Software Developer Intern',
        company: 'Center for Informatics',
        date: 'Jan 2024 - Jun 2024',
        accomplishment: [
            'Developed audit trail and audit log in Knack no code platform',
            'Developed GIS for MPA FishMApp using flutter and firebase',
            'Helped in data cleaning and data deduplication using python'
        ]
    },
]

export default function Experience() {
    return (
        <div id='experience'
            className='flex flex-col min-h-full justify-center'>
            <h1 className='text-2xl font-bold px-3 ml-auto pb-2 pt-5'>Experience</h1>
            {
                experience.map((experience, index) => (
                    <div key={index} className='flex flex-col gap-3 backdrop-blur-[1.5px] rounded-[0.5rem] shadow-light_shadow
                    lg:p-10 lg:mb-6
                    mobile_s:p-5 mobile_s:mb-4
                    dark:shadow-dark_shadow
                    
                    '>
                        <h2 className='font-bold
                            lg:text-2xl
                            mobile_s:text-lg 
                        '>{experience.title}</h2>
                        <div className='flex items-center justify-between gap-2'>
                            <h3 className='font-semibold
                            lg:text-lg
                            mobile_s:text-sm
                            '>
                                {experience.company}
                            </h3>
                            <p className='lg:text-[1.1rem] mobile_s:text-sm'>
                                {experience.date}
                            </p>
                        </div>
                        <ul>
                            {
                                experience.accomplishment.map((accomplishment, index) => (
                                    <li key={index} className='list-disc ml-5
                                    lg:text-base
                                    mobile_s:text-xs
                                    '>{accomplishment}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
