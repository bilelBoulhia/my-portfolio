'use client'
import Overview from "@/app/sections/overview";
import Skillsection from "@/app/sections/skills-section";
import { motion } from "motion/react";
import {AnimatedHeading} from "@/app/components/ui/Animated-heading";
import {TypewriterEffect, TypewriterEffectSmooth} from "@/app/components/ui/TyperWriter";



export default function Home() {
  return (
    <main className="flex overflow-hidden gap-10 items-center justify-evenly min-h-screen p-8 pb-20 flex-col sm:p-10 font-[family-name:var(--font-genos)]">
        <Overview/>
        <div className='flex-col md:flex-row text-center md:text-left gap-10 flex w-full items-center justify-center '>
            <div className='max-w-xl '>
                <TypewriterEffectSmooth words={[{text:'my'},{text:'skils'}]} className='font-bold text-[5rem]'/>

            </div>
            <div className='max-w-2xl '>
                <Skillsection/>
            </div>
        </div>




    </main>
  );
}
