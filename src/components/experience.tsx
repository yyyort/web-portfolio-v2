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
         className='flex flex-col min-h-full justify-center gap-10'>
            {
                experience.map((experience, index) => (
                    <div key={index} className='flex flex-col gap-3'>
                        <h2 className='text-2xl font-bold'>{experience.title}</h2>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-xl font-semibold'>{experience.company}</h3>
                            <p className='text-[1.1rem]'>{experience.date}</p>
                        </div>
                        <ul>
                            {
                                experience.accomplishment.map((accomplishment, index) => (
                                    <li key={index} className='list-disc ml-5'>{accomplishment}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
