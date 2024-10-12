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
import port1 from "@/images/port1.png"
import port2 from "@/images/port2.png"

//personatask
import pt1 from "@/images/pt1.png"
import pt2 from "@/images/pt2.gif"
import pt3 from "@/images/pt3.png"
import pt4 from "@/images/pt4.png"

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
};

export const projectsData: projectType[] = [
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
    private: true,
    github: null,
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
  },
  {
    title: "GIS MPA FishMApp",
    description:
      "GIS FishMApp is a Geographic Information System that plots the fishing sites and marine protected areas in the philippines.",
    techStack: ["Flutter", "Riverpod", "Firebase", "FlutterMap"],
    private: true,
    link: null,
    github: null,
    dialog: {
      images: [gis1, gis2, gis3, gis4],
      title:
        "GIS MPA FishMApp or Geographical Information System Marine Protected Areas Fish Monitoring App",
      fullDescription: [
        "It is an experimental development for an existing project of CFI which is MPA FishMapp, the GIS is for the vizualization in interface on where is the location of fish sites and marine protected areas in Philippines.",
        "It was assigned to me as one of my development projects during my internship at the Center for Informatics.",
        "I have written the app using Flutter with Riverpod as a state management solution, flutter_map for mapping, and Firebase as a BaaS."
      ],
    },
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
      title:
        "Personal Developer Portfolio",
      fullDescription: [
        "My personal web portfolio that I have created using NextJs, along side using shadcnUI, and aceternityUI for UI components, and nodemailer for email automation and sending API",
      ],
    },
  },
  {
    title: "Personatask",
    description: "Developed a task management app using NextJs and ExpressJS",
    techStack: ["React", "NextJS", "NodeJS", "ExpressJS", "PostgreSQL"],
    github: "https://github.com/yyyort/personatask-frontend.git",
    link: null,
    private: null,
    dialog: {
      images: [pt1, pt2, pt3, pt4],
      title:
        "Personatask",
      fullDescription: [
        "A personalized task management solution.",
        "I created the app due to my own necessity, and ever since I've liked notion I wanted to create something like that for my own self.",
        "Altough a \"to do\" app is the most basic app a developer could make but it helps me alot in full stack development.",
        "I have used React with NextJs for my front end, Node with ExpressJs for backend, and PostgreSQL for database with drizzleORM.",
        "I have also used other libraries such as JWT for auth, shadcnUI, react hook form, zod for validation, tiptap for richtext editor, react query and zustand for state management."
      ],
    },
  },
];
