import React from 'react'

const stack = [
    {
        "front end": [
            "React",
            "Next.js",
        ]
    },
    {
        "back end": [
            "Node.js",
            "Express",
            "Firebase",
        ]
    },
    {
        "database": [
            "MongoDB",
            "PostgreSQL",
            "Firestore"
        ]
    },
    {
        "mobile": [
            "React Native",
            "Flutter"
        ]
    },
    {
        "languages": [
            "Javascript",
            "Typescript",
            "Python",
            "Dart"
        ]
    },
    {
        "tools": [
            "Git",
            "Docker",
            "Figma",
        ]
    }
]

export default function TechStack() {
  return (
    <div className='flex justify-between'>
        {
            stack.map((stack, index) => (
                <div key={index} className='pb-5 flex flex-col'>
                    <h2 className='font-semibold text-xl'>{Object.keys(stack)}</h2>
                    <ul>
                        {
                            Object.values(stack).map((value, index) => (
                                value.map((tech: string, index:number) => (
                                    <li key={index} className='text-sm'>{tech}</li>
                                ))
                            ))
                        }
                    </ul>
                </div>
            ))
        }
    </div>
  )
}
