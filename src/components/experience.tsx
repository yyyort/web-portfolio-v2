import Link from "next/link";
import React from "react";

type experienceType = {
  title: string;
  link?: string;
  company?: string;
  date?: string;
  accomplishment: string[];
};

const experience: experienceType[] = [
  {
    title: "Software Developer Intern",
    link: "https://www.codebility.tech/",
    company: "Codebility",
    date: "Oct 2024 - current",
    accomplishment: [
      "Codeveloped TaskBuddy mobile app using React Native and Firebase",
      "Contributted to the development of Codebility's website using NextJS and Supabase",
    ],
  },
  {
    title: "Software Developer Intern",
    link: "https://www.usacfi.net/internship-program.html",
    company: "Center for Informatics",
    date: "Jan 2024 - Jun 2024",
    accomplishment: [
      "Developed audit trail and audit log in Knack no code platform",
      "Developed GIS for MPA FishMApp using flutter and firebase",
      "Helped in data cleaning and data deduplication using python",
    ],
  },
  {
    title: "Project Manager",
    company: "Google Developer Student Club - USA",
    date: "Jan 2023 - Jun 2024",
    accomplishment: [
      "Developed Ani-un, a 2D game using pygame and mediapipe for computer vision",
      "Helped implement computer vision in Harry Potter Game, using mediapipe",
      "Helped developed USASG website using NuxtJS and Firebase",
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col min-h-full justify-center">
      <h1 className="text-2xl font-bold px-3 ml-auto pb-2 pt-5">Experience</h1>
      {experience.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 backdrop-blur-[1.5px] rounded-[0.5rem] shadow-light_shadow
                    lg:p-10 lg:mb-6
                    mobile_s:p-5 mobile_s:mb-4
                    dark:shadow-dark_shadow
                    "
        >
          <h2
            className="font-bold
                            lg:text-2xl
                            mobile_s:text-lg 
                        "
          >
            {experience.title}
          </h2>

          <div className="flex items-center justify-between gap-2">
            <Link
              href={experience.link || "#"}
              className="cursor-pointer dark:hover:text-teal-100 hover:text-teal-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3
                className="font-semibold
                            lg:text-lg
                            mobile_s:text-sm
                            "
              >
                {experience.company}
              </h3>
            </Link>
            <p className="lg:text-[1.1rem] mobile_s:text-sm">
              {experience.date}
            </p>
          </div>
          <ul>
            {experience.accomplishment.map((accomplishment, index) => (
              <li
                key={index}
                className="list-disc ml-5
                                    lg:text-base
                                    mobile_s:text-xs
                                    "
              >
                {accomplishment}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
