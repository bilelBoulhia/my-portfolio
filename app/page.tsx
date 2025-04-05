'use client'
import Overview from "@/app/sections/overview";
import Skillsection from "@/app/sections/skills-section";
import { motion } from "motion/react";


export default function Home() {
  return (
    <main className="flex overflow-hidden gap-10 items-center justify-evenly min-h-screen p-8 pb-20 flex-col sm:p-10 font-[family-name:var(--font-genos)]">
        <Overview/>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridTemplateRows: '1fr',
                gridColumnGap: '0px',
                gridGap: '50px',

            }}
            className='w-full '>


            <div style={{
                gridArea: '1 / 2 / 2 / 6'
            }}
                 className='max-w-3xl flex-row overflow-hidden flex justify-center items-center gap-20'>

                <motion.span

                    initial={{x: '-150%'}}
                    animate={{x: '0%'}}
                    transition={{duration: 0.75, delay: 0.75}}
                    className=' whitespace-nowrap   text-6xl font-bold '>
                    My skills
                </motion.span>
                <Skillsection/>

            </div>

        </div>


    </main>
  );
}
