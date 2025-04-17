'use client'
import {m} from "motion/react";
import {TypewriterEffectSmooth} from "@/app/components/ui/TyperWriter";
import React from "react";
import {techstack} from "@/app/constants";




const SkillSection = ()=>{

    return (
        <m.div
                 className='flex-col p-3 will-change-transform py-6 sm:p-0 overflow-hidden md:flex-row text-center md:text-left gap-10 flex  w-full items-center justify-center '>
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
                        transition={{duration:0.4,delay:0.1}}
                        
                        className='absolute bg-[background-color:var(--background)]  w-[45px] h-full inset-0 '/>
                    {item}
                </div>
            )}
        </div>
    );
}

export default SkillSection;