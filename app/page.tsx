'use client'
import Overview from "@/app/sections/overview";
import Skillsection from "@/app/sections/skills-section";
import {TypewriterEffectSmooth} from "@/app/components/ui/TyperWriter";
import {FloatingDock} from "@/app/components/ui/floating-docks";
import React from "react";
import {IconBrandGithub, IconFolder, IconHome, IconPhoneCall} from "@tabler/icons-react";
import {TbWriting} from "react-icons/tb";
import {AnimatePresence, motion} from "motion/react";
import {Button} from "@/app/components/ui/button";

const links = [
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


export default function Home() {
    const handleClicking = (id: number) => {
        console.log(`Clicking ${id}`);
    }

    const [show, setShow] = React.useState(true);

    return (
        <main
            className="flex overflow-hidden min-h-screen  p-8  sm:p-10 flex-col  font-[family-name:var(--font-genos)]">
            <FloatingDock hadnleAction={handleClicking}
                          className='fixed  top-1/2  right-0 mr-2 -translate-y-1/2 items-center justify-center '
                          items={links}/>
            <section id='1' className="w-full flex  flex-col gap-10 items-center  justify-evenly   ">


                <div className='min-h-[50vh] w-full '>
                    <Overview show={show} />
                </div>

                <Button className='bg-black' onClick={()=>setShow(!show)} >asdsd</Button>
                <AnimatePresence>
                    <div
                        className='flex-col md:flex-row text-center md:text-left gap-10 flex  w-full items-center justify-center '>
                        <div className='max-w-xl '>
                            <TypewriterEffectSmooth words={[{text: 'my'}, {text: 'skils'}]}
                                                    className='font-bold text-[5rem]'/>
                        </div>
                        <div className='max-w-2xl '>
                            <Skillsection/>
                        </div>
                    </div>
                </AnimatePresence>

            </section>


            <section id='2' className="hidden w-full   flex-col gap-10 items-center  justify-evenly   ">
                <h1>sdasdasdasdasdasdad</h1>
            </section>


        </main>
    );
}
