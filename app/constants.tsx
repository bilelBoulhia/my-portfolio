import Overview from "@/app/sections/overview";
import SkillSection from "@/app/sections/skills-section";
import {IconBrandGithub, IconFolder, IconHome, IconPhoneCall} from "@tabler/icons-react";
import {TbWriting} from "react-icons/tb";
import React from "react";
import ProjectsSection from "@/app/sections/projects-section";
import { motion } from "motion/react";
export const links = [
    {
        title: "Home",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid: 1

    },

    {
        title: "Projects",
        icon: (
            <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid:2

    },
    {
        title: "Articles",
        icon: (
            <TbWriting className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid:3

    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),

        sectionid:4
    },
    {
        title: "Contact me",
        icon: (
            <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid:5
    }

];

export const screens = [
    {
        id: 1,
        content:
            <section className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                <div className='min-h-[50vh] w-full '>
                    <Overview/>
                </div>
                <div className='min-h-[30vh] w-full'>
                    <SkillSection/>
                </div>
            </section>

    },
    {
        id: 2,
        content:
            <section className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                <ProjectsSection/>
            </section>
    }
    ,
    {
        id: 3,
        content:
            <section className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                <motion.div
                    exit={{y: -500}}

                >
                    section 3
                </motion.div>
            </section>
    },
    {
        id: 4,
        content:
            <section className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                <motion.div
                    exit={{y: -500}}

                >
                    section 4
                </motion.div>
            </section>
},
{
id: 5,
    content
:
<section className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">

              <motion.div
              exit={{x: -500}}

              >
                  section 5
              </motion.div>
            </section>
    }
]


export const WebsitesList =
    [
        {
            title: "House of ideas",
            description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#818CF8', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/MD1bSQF4/Capture.png",
            projectUrl: "https://www.houseofideas.club",
            githubUrl: "https://github.com/bilelBoulhia/House-of-ideas"
        },
        {
            title: "House of ideas",
            description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#818CF8', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/nsSyGkbw/photo-6035050906766133098-w.jpg",
            projectUrl: "https://www.houseofideas.club",
            githubUrl: "https://github.com/bilelBoulhia/House-of-ideas"
        },
        {
            title: "Cinemato",
            description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#818CF8', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/jZDQw4S2/photo-6035050906766133095-w.jpg",
            projectUrl: "https://cinema-website-kappa.vercel.app",
            githubUrl: "https://github.com/bilelBoulhia/cinema-website"
        },
        {
            title: "meteo app",
            description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#818CF8', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/XfzrwLVK/login.png",
            projectUrl: "meteo1-nine.vercel.app",
            githubUrl: "https://github.com/bilelBoulhia/MeteoGestion"
        },
        {
            title: "Destroch gel",
            description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#818CF8', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/0RdnfM3Y/image.png",
            projectUrl: "https://destrouch-gel.vercel.app",
            githubUrl: "https://github.com/ALaksell/DESTROUCH-GEL"
        },

    ]
