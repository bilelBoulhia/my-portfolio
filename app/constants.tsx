import Overview from "@/app/sections/overview";
import SkillSection from "@/app/sections/skills-section";
import {IconBrandGithub, IconFolder, IconHome, IconPhoneCall} from "@tabler/icons-react";
import {TbWriting} from "react-icons/tb";
import React from "react";
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
            <section id='1' className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
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
            <section id='2' className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                ddddddddddddddddddddddddddddddddddddddddddddd
            </section>
    }
    ,
    {
        id: 3,
        content:
            <section id='3' className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                ssssssssssssssssssssssssssssssssssssssssssssss
            </section>
    },
    {
        id: 4,
        content:
            <section id='3' className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                ssssssssssssssssssssssssssssssssssssssssssssss
            </section>
    },
    {
        id: 5,
        content:
            <section id='3' className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">
                ssssssssssssssssssssssssssssssssssssssssssssss
            </section>
    }
]
