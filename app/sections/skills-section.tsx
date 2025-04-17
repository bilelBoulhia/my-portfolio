'use client'
import TechStackTag from "@/app/components/ui/tech-stack-tag";
import {m} from "motion/react";

import StackIcon from "tech-stack-icons";
import {TypewriterEffectSmooth} from "@/app/components/ui/TyperWriter";
import React from "react";


const techstack=[
    <TechStackTag stack={<StackIcon name="nextjs2" />} /> ,
    <TechStackTag stack={<StackIcon name="typescript" />} />,
    <TechStackTag stack={<StackIcon name="reactjs" />} />,
    <TechStackTag stack={<StackIcon name="android" />} />,
    <TechStackTag stack={<StackIcon name="appwrite" />} />,
    <TechStackTag stack={<StackIcon name="chromium" />} />,
    <TechStackTag stack={<StackIcon name="csharp" />} />,
    <TechStackTag stack={<StackIcon name="docker" />} />,
    <TechStackTag stack={<StackIcon name="firebase" />} />,
    <TechStackTag stack={<StackIcon className='bg-white rounded-full p-1' name="framer" />} />,
    <TechStackTag stack={<StackIcon name="github" />} />,
    <TechStackTag stack={<StackIcon name="gsap" />} />,
    <TechStackTag stack={<StackIcon name="java" />} />,
    <TechStackTag stack={<StackIcon name="mysql" />} />,
    <TechStackTag stack={<StackIcon name="java" />} />,
    <TechStackTag stack={<StackIcon name="nodejs" />} />,
    <TechStackTag stack={<StackIcon name="npm" />} />,
    <TechStackTag stack={<StackIcon className='bg-white rounded-full p-1' name="render" />} />,
    <TechStackTag stack={<StackIcon name="tailwindcss" />} />,
    <TechStackTag stack={<StackIcon name="vitejs" />} />,

]

const SkillSection = ()=>{

    return (


             <m.div
                 className='flex-col p-3 py-6 sm:p-0 overflow-hidden md:flex-row text-center md:text-left gap-10 flex  w-full items-center justify-center '>
            <m.div
                exit={{
                    width:0
                }}
                transition={{ease:'easeInOut',duration:'0.5'}}
                className='max-w-xl '>
                <TypewriterEffectSmooth words={[{text: 'my'}, {text: 'skills'}]}
                                        className='font-bold  text-[5rem]'/>
            </m.div>
            <m.div

                exit={{
                    y:500
                }}
                transition={{ease:'easeInOut',duration:'0.5',delay:0.5}}

                className='max-w-2xl '>
                <StackGrid/>
            </m.div>
        </m.div>

    )
}


const StackGrid = () => {
    return (
        <div className='grid  grid-cols-6  gap-[1rem]'>
            {techstack.map((item, i) =>
                <div
                    className='relative overflow-hidden w-[40px]'
                    key={i}>
                    <m.div

                        initial={{
                            x: 0,
                            y: 0,
                        }}
                        animate={{
                            x: 100
                        }}
                        transition={{duration:2,delay:0.5}}
                        
                        className='absolute bg-[background-color:var(--background)]  w-[45px] h-full inset-0 '/>
                    {item}
                </div>
            )}
        </div>
    );
}

export default SkillSection;