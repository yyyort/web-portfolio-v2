import React from "react";
import Image, { StaticImageData } from "next/image";
import TechStackCard from "./techstack-card";
import { projectType } from "@/lib/projects-data";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Link2 } from "lucide-react";

export default function SayolongDialog({ project }: { project: projectType }) {
  return (
    <div className="grid w-full
    md:grid-cols-2
    mobile_s:grid-cols-1 mobile_s:gap-5
    ">
      {/* images */}
      <div className="flex flex-col">
        {project.dialog?.images.map((image: StaticImageData, index: number) => {
          if (image.src.includes("gif")) {
            return <Image key={index} src={image} alt={`Project image ${index}`} unoptimized={true} />;
          } else {
            return <Image key={index} src={image} alt={`Project image ${index}`} />;
          }
        })}
      </div>

      {/* descriptions */}
      <div
        className="px-10
      sm:text-xl
      mobile_s:text-sm
      "
      >
        <div className="sm:sticky sm:top-0 sm:right-10 flex flex-col">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">{project.dialog?.title}</p>
            {
              project.dialog!.fullDescription.map((str, index) => <p key={index}>{str}</p>)
            }
          </div>
            <div className="sm:h-64 sm:block
            mobile_s:hidden
            "/>
          <div className="flex flex-col text-end gap-2
          ">
            <p>tech stack and tools:</p>
            <TechStackCard stack={project.techStack} />
            {
              (project.github || project.link) && <p>links:</p>
            }
            {project.github && 
              <Button variant="link" className="w-fit ml-auto p-0">
                <Link href={project.github} className="flex items-center gap-2" target="_blank">
                  <FaGithub/>
                  <p className="mobile_s:hidden sm:block">{project.github}</p>
                </Link>
              </Button>
            }
            {project.link && 
              <Button variant="link" className="w-fit ml-auto p-0">
                <Link href={project.link} className="flex items-center gap-2" target="_blank">
                  <Link2/>
                  <p className="mobile_s:hidden sm:block">{project.link.name}</p>
                </Link>
              </Button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
