import OverviewSection from "@/app/sections/overview-section";
import SkillSection from "@/app/sections/skills-section";
import {IconBrandGithub, IconFolder, IconHome, IconPhoneCall} from "@tabler/icons-react";
import {TbWriting} from "react-icons/tb";
import React from "react";
import ProjectsSection from "@/app/sections/projects-section";
import {motion} from "motion/react";
import GistsSection from "@/app/sections/gist-section";
import GitSection from "@/app/sections/git-section";

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
        sectionid: 2

    },
    {
        title: "Articles",
        icon: (
            <TbWriting className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid: 3

    },
    {
        title: "GitHub",
        icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),

        sectionid: 4
    },
    {
        title: "Contact me",
        icon: (
            <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        sectionid: 5
    }

];


export const screens = [
    {
        id: 1,
        content:
            <section className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                <div className='min-h-[50vh] w-full '>
                    <OverviewSection/>
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
               <GistsSection/>
            </section>
    },
    {
        id: 4,
        content:
            <section className="w-full  flex min-h-screen  gap-10 items-center  justify-evenly   ">
                <GitSection/>
            </section>
    },
    {
        id: 5,
        content:
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
            description: "a website for checking out and applying house of ideas scientific club various activies including workshops and evnets",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#030304', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/MD1bSQF4/Capture.png",
            projectUrl: "https://www.houseofideas.club",
            githubUrl: "https://github.com/bilelBoulhia/House-of-ideas"
        },
        {
            title: "HI articels",
            description: "a website for pusblishing and reading articles for a scientific club",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#000000', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/nsSyGkbw/photo-6035050906766133098-w.jpg",
            projectUrl: "https://hi-ejournal.vercel.app/",
            githubUrl: "https://github.com/bilelBoulhia/house-of-ideas-articles"
        },
        {
            title: "Cinemato",
            description: "a demp website for booking and looking a catalogue of a cinema",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#000000', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/jZDQw4S2/photo-6035050906766133095-w.jpg",
            projectUrl: "https://cinema-website-kappa.vercel.app",
            githubUrl: "https://github.com/bilelBoulhia/cinema-website"
        },
        {
            title: "meteo app",
            description: "a demo webapp for a managing the the payroll of employess  ",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#000000', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/XfzrwLVK/login.png",
            projectUrl: "meteo1-nine.vercel.app",
            githubUrl: "https://github.com/bilelBoulhia/MeteoGestion"
        },
        {
            title: "Destroch gel",
            description: "a website that sells a pest control product",
            technologies: ['Next.js', 'Tailwind', 'TypeScript'],
            techColors: ['#000000', '#38B2AC', '#3178C6'],
            imageUrl: "https://i.ibb.co/0RdnfM3Y/image.png",
            projectUrl: "https://destrouch-gel.vercel.app",
            githubUrl: "https://github.com/ALaksell/DESTROUCH-GEL"
        },

    ]

export const ToolsProjects = [
    {
        title: "Telegram Coin Singaling Bot",
        projectType: "Bot",
        description: "a Bot service that determines the best coins with liquidity and send signals of the selected coins",
        technologies: ['Asp net', 'JWT', 'Sql'],
        techColors: ['#102475', '#1074b3', '#bf3314'],
        projectUrl: "https://t.me/+PBLMrCrf6PdhZGZk",
        githubUrl: "https://github.com/bilelBoulhia/telegram-bot-for-trade-spoting"
    },
    {
        title: "Nsfw poop remover ",
        description: "an extension that removes +18 popup without having to open an account",
        technologies: ['Google'],
        projectType: "Extension",
        techColors: ['#ae4b34'],
        projectUrl: "https://github.com/bilelBoulhia/reddit-nsfw-popup-remover",
        githubUrl: "https://github.com/bilelBoulhia/reddit-nsfw-popup-remover"
    },
    {
        title: "mass Exit from Facebook",
        description: "a selenium bot that auto exit all groups since there is no feature for that in the app",
        projectType: "automated script",
        technologies: ['Maven', 'Java', 'Selenium'],
        techColors: ['#F52660', '#7dae34', '#bf6a14'],
        projectUrl: "https://github.com/bilelBoulhia/Mass-Leave-from-facebook--Script",
        githubUrl: "https://github.com/bilelBoulhia/Mass-Leave-from-facebook--Script"
    },
    {
        title: "Html-Pdf converter",
        description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
        projectType: "CLI app",
        technologies: ['Maven', 'Pico ClI',],
        techColors: ['#F52660', '#10b37a'],
        projectUrl: "https://github.com/bilelBoulhia/Convert-Html-to-Pdf",
        githubUrl: "https://github.com/bilelBoulhia/Convert-Html-to-Pdf"
    },
    {
        title: "start apps from cmd",
        description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
        projectType: "windows  app",
        technologies: ['Winform', 'Windows'],
        techColors: ['#3d719c', '#1450bf'],
        projectUrl: "https://github.com/bilelBoulhia/start-apps-from-cmd",
        githubUrl: "https://github.com/bilelBoulhia/start-apps-from-cmd"
    },
]


export const backendProjects = [
    {
        title: "backend of articles app",
        description: "a compete backend with auth and database for an articles app ",
        technologies: ['Asp net', 'JWT', 'Sql'],
        techColors: ['#102475', '#1074b3', '#bf3314'],
        projectUrl: "https://github.com/bilelBoulhia/backend-service-for-a-blog-post-app/pkgs/container/articlesapp",
        githubUrl: "https://github.com/bilelBoulhia/backend-service-for-a-blog-post-app"
    },
    {
        title: "wrt backend",
        description: "a backend that uses websockts for real time data",
        technologies: ['Asp.net', 'JWT', 'Sql', 'SignalR'],
        techColors: ['#102475', '#1074b3', '#bf3314', '#5814bf'],
        projectUrl: "https://github.com/bilelBoulhia/Wrt-backend-server",
        githubUrl: "https://github.com/bilelBoulhia/Wrt-backend-server"
    },
]


export const MobilePorjectsList = [
    {
        title: "hi qr code scanner",
        description: "a mobile app for auto checking event visitors on a google appsheet",
        technologies: ['React native', 'Google', 'TypeScript'],
        techColors: ['#0f21cf', '#ffffff', '#3178C6'],
        imageUrl: "https://i.ibb.co/qFRzRW3z/Untitled-1.png",
        projectUrl: "https://github.com/bilelBoulhia/QR-Scanner-Trigger",
        githubUrl: "https://github.com/bilelBoulhia/QR-Scanner-Trigger"
    },
    {
        title: "WRT (win rah train)",
        description: "a demo mobile app for sending real time reports of train location",
        technologies: ['React native', 'Asp.Net', 'TypeScript'],
        techColors: ['#0f21cf', '#9911a3', '#3178C6'],
        imageUrl: "https://i.ibb.co/4RJ3mVVV/Untitled.png",
        projectUrl: "https://github.com/bilelBoulhia/WinRahTrain/releases/tag/v1",
        githubUrl: "https://github.com/bilelBoulhia/WinRahTrain"
    }
]
