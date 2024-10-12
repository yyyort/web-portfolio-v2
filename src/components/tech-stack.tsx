import React from 'react'

const stack = [
    {
        "front end": [
            "React",
            "NextJs",
            "Vue",
            "NuxtJs"
        ]
    },
    {
        "back end": [
            "NodeJs",
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
            "Dart",
            "C#"
        ]
    },
    {
        "tools": [
            "Git",
            "Docker",
            "linux",
            "Figma",
        ]
    }
]

export default function TechStack() {
  return (
    <div className='
    2xl:flex 2xl:justify-between
    md:grid md:grid-cols-3 md:gap-5
    mobile_s:grid mobile_s:grid-cols-2 mobile_s:gap-5
    '
    >
        {
            stack.map((stack, index) => (
                <div key={index} className='pb-5 flex flex-col'>
                    <h2 className='font-semibold
                    md:text-lg
                    '>{Object.keys(stack)}</h2>
                    <ul>
                        {
                            Object.values(stack).map((value) => (
                                value.map((tech: string, index:number) => (
                                    <li key={index} className='
                                    mobile_s:text-sm
                                    '>{tech}</li>
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
