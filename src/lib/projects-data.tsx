/* eslint-disable @typescript-eslint/no-unused-vars */
import { StaticImageData } from "next/image";

//sayolong
import sayolongImg1 from "@/images/sayolong-fr.png";
import sayolongImg2 from "@/images/sayolong-fr2.png";

//ani-un
import aniunImg1 from "@/images/aniun1.png";
import aniunImg2 from "@/images/aniun2.png";

//usa-sg
import usasgImg1 from "@/images/usasg1.png";
import usasgImg2 from "@/images/usasg2.png";

//GIS mpa
import gis1 from "@/images/gis1.png";
import gis2 from "@/images/gis2.gif";
import gis3 from "@/images/gis3.png";
import gis4 from "@/images/gis4.png";

//portfolio
import port1 from "@/images/port1.png";
import port2 from "@/images/port2.png";

// dailiestask
import dailiestask1 from "@/images/dailiestask/1.png";
import dailiestask2 from "@/images/dailiestask/2.png";
import dailiestask3 from "@/images/dailiestask/3.png";
import dailiestask4 from "@/images/dailiestask/4.png";
import dailiestask5 from "@/images/dailiestask/5.png";
import dailiestask6 from "@/images/dailiestask/6.png";
import dailiestask7 from "@/images/dailiestask/7.png";
import dailiestask8 from "@/images/dailiestask/8.png";

export type projectType = {
  title: string;
  description: string;
  techStack: string[];
  private: boolean | null;
  github: string | null;
  link: {
    href: string;
    name: string;
  } | null;
  dialog: {
    images: StaticImageData[];
    title: string;
    fullDescription: string[];
  };
  personal?: boolean;
  company?: string;
  role?: string;
};

export const projectsData: projectType[] = [
  {
    title: "Dailiestask",
    description: "A task management app to manage your daily tasks",
    techStack: [
      "React",
      "NextJS",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "DrizzleORM",
      "Docker",
      "NGINX",
      "AWS",
    ],
    github: "https://github.com/yyyort/DailiesTask",
    private: null,
    link: {
      href: "https://dailiestask.iantroypahilga.website/",
      name: "dailiestask.iantroypahilga.website",
    },
    dialog: {
      images: [
        dailiestask1,
        dailiestask2,
        dailiestask3,
        dailiestask4,
        dailiestask5,
        dailiestask6,
        dailiestask7,
        dailiestask8,
      ],
      title: "Dailiestask",
      fullDescription: [
        "A task management and note-taking application using the PERN stack, designed to help users manage tasks, goals, and daily routines efficiently.",
        "I have used React with NextJs for my front end, Node with ExpressJs for backend, and PostgreSQL for database with drizzleORM.",
        "I have also used other libraries such as JWT for auth, shadcnUI, react hook form, zod for validation, tiptap for richtext editor, react query and zustand for state management.",
        "The app backend is deployed in AWS EC2 with Docker, and NGINX. The frontend is deployed in Vercel.",
      ],
    },
    personal: true,
  },
  {
    title: "Personal Portfolio",
    description: "Personal Developer Portfolio created using NextJS",
    techStack: ["React", "NextJS", "Shadcn/UI", "Aceternity/UI"],
    github: "https://github.com/yyyort/web-portfolio-v2.git",
    link: {
      href: "https://www.iantroypahilga.website/",
      name: "iantroypahilga.website",
    },
    private: null,
    dialog: {
      images: [port1, port2],
      title: "Personal Developer Portfolio",
      fullDescription: [
        "My personal web portfolio that I have created using NextJs, along side using shadcnUI, and aceternityUI for UI components, and nodemailer for email automation and sending API",
      ],
    },
    personal: true,
  },
  {
    title: "Taskbuddy",
    description: "TaskBuddy is a to-do list app that blends task management with social sharing. Stay motivated, track progress, and choose to share goals or keep them private—making productivity simple and fun!",
    techStack: ["React Native", "Expo", "Firebase", "ExpressJS", "NodeJS"],
    github: null,
    link: null,
    private: true,
    dialog: {
      images: [port1, port2],
      title: "Personal Developer Portfolio",
      fullDescription: [
        "",
      ],
    },
    company: "Codebility",
    role: "Full Stack Developer",
  },
  {
    title: "Codebility Portal",
    description: "Codebility Portal is a platform for Codevs to showcase their projects and skills, clients to find the right developer for their projects, and for the community to learn and grow together.",
    techStack: ["React", "NextJS", "Shadcn/UI", "Supabase"],
    github: null,
    link: {
      href: "https://www.codebility.tech/",
      name: "codebility.tech",
    },
    private: true,
    dialog: {
      images: [port1, port2],
      title: "Personal Developer Portfolio",
      fullDescription: [
        "",
      ],
    },
    company: "Codebility",
    role: "Full Stack Developer",
  },
  {
    title: "USASG Website",
    description: "Helped developed USASG website using NuxtJS and Firebase",
    techStack: ["VueJs", "Vuetify", "NuxtJS", "Firebase"],
    link: {
      href: "https://usa-student-government-hub.web.app/developers/",
      name: "usa-student-government-hub.web.app",
    },
    private: null,
    github: null,
    dialog: {
      images: [usasgImg1, usasgImg2],
      title: "USASG or University of San Agustin Student Goverment Hub",
      fullDescription: [
        "A passion project of Google Developer Student Club - USA with collaboration to the University of San Agustin Student Government.",
        "A platform for Agustinian student to stay informed about student government initiatives, events, and updates. The website aims to bridge the gap between students and their governing body, providing a virtual space where Augustinians can connect, collaborate, and engage.",
        "The website is created using VueJs, NuxtJs, for frontend framework, Vuetify for UI library and Firebase as BaaS.",
      ],
    },
    company: "Google Developer Student Club - USA",
    role: "Software Developer",
  },
  {
    title: "Ani-un",
    description:
      "Ani-un is a 2D arcade game that uses body movement as input. The game is written in pygame and uses mediapipe body movement tracking.",
    techStack: ["Python", "Pygame", "Mediapipe"],
    github: "https://github.com/yyyort/ani-un.git",
    private: null,
    link: null,
    dialog: {
      images: [aniunImg1, aniunImg2],
      title: "Ani-un",
      fullDescription: [
        "Ani-un means to gather in hiligaynon which the game is all about, gathering fruits.",
        "It is a simple 2D arcade game with computer vision we made for a game development show case in Robotopia DEVCON event. I was assign as the Game and A.I. developer in this project and developed the game using python with pygame and we also mediapipe api for the A.I. body and hand tracking.",
      ],
    },
    company: "Google Developer Student Club - USA",
    role: "Project Manager / Game Developer",
  },
  {
    title: "GIS MPA FishMApp",
    description:
      "GIS FishMApp is a Geographic Information System that plots the fishing sites and marine protected areas in the philippines.",
    techStack: ["Flutter", "Riverpod", "Firebase", "FlutterMap"],
    private: false,
    link: null,
    github: null,
    dialog: {
      images: [gis1, gis2, gis3, gis4],
      title:
        "GIS MPA FishMApp or Geographical Information System Marine Protected Areas Fish Monitoring App",
      fullDescription: [
        "It is an experimental development for an existing project of CFI which is MPA FishMapp, the GIS is for the vizualization in interface on where is the location of fish sites and marine protected areas in Philippines.",
        "It was assigned to me as one of my development projects during my internship at the Center for Informatics.",
        "I have written the app using Flutter with Riverpod as a state management solution, flutter_map for mapping, and Firebase as a BaaS.",
      ],
    },
    company: "Center for Informatics",
    role: "Full Stack Developer",
  },
  {
    title: "SaYolo'ng",
    description:
      "A smart parking system that uses yolov8 computer vision to detect parking spots and Cross-Platform Mobile App to show available parking spots",
    techStack: [
      "Flutter",
      "Riverpod",
      "Firebase",
      "Yolov8",
      "Python",
      "OpenCV",
    ],
    private: false,
    github: "https://github.com/yyyort/SA-YOLOng-App",
    link: null,
    dialog: {
      images: [sayolongImg1, sayolongImg2],
      title: "SaYolo'ng or San Agustin Yolo Parking System",
      fullDescription: [
        "Our final thesis project in Computer Science.",
        "It is a cross-platform mobile parking app with smart parking system using yolov8 object detection.",
        "I was task with the full stack developement of the mobile app which I created using flutter and firebase as BaaS, along side with A.I. development which we used yolov8 as our object detection",
      ],
    },
    company: "Final Thesis",
    role: "Full Stack Developer",
  },
];
