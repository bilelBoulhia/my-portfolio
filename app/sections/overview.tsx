'use client'
import { motion } from "motion/react";
import StackIcon from "tech-stack-icons";
import TechStackTag from "@/app/components/ui/tech-stack-tag";
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
    <TechStackTag stack={<StackIcon name="framer" />} />,
    <TechStackTag stack={<StackIcon name="github" />} />,
    <TechStackTag stack={<StackIcon name="gsap" />} />,
    <TechStackTag stack={<StackIcon name="java" />} />,
    <TechStackTag stack={<StackIcon name="mysql" />} />,
    <TechStackTag stack={<StackIcon name="java" />} />,
    <TechStackTag stack={<StackIcon name="nodejs" />} />,
    <TechStackTag stack={<StackIcon name="npm" />} />,
    <TechStackTag stack={<StackIcon name="render" />} />,
    <TechStackTag stack={<StackIcon name="tailwindcss" />} />,
    <TechStackTag stack={<StackIcon name="vitejs" />} />,

]
const Overview = ()=>{
    return (
        <div className=' w-full h-full'>
            <div className='inline-flex max-h-[22rem] overflow-hidden gap-4 flex-row'>
                <img className='w-[15rem] z-2   rounded-2xl h-auto'
                     src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg'
                     alt={'s'}/>
                <div className='flex flex-col gap-4  justify-start items-start'>
                    <div className='inline-flex gap-4 text-5xl overflow-hidden font-bold flex-row '>
                        <div className='overflow-hidden bg-[#0a0a0a]'>

                            <motion.h1
                                initial={{x: '-150%'}}
                                animate={{x: 0}}
                                transition={{duration: 0.75}}
                                className='overflow-hidden  '
                            >
                                Billel
                            </motion.h1>
                        </div>

                        <motion.span
                            initial={{x: '-200%'}}
                            animate={{x: 0}}
                            style={{zIndex: -1}}
                            transition={{duration: 0.75, delay: 1}}
                            > Boulahia
                            </motion.span>


                    </div>
                    <div className='flex flex-col h-full justify-center gap-6 max-w-3xl'>
                        <p className='text-3xl  font-semibold'>hey there👋,
                            im full stack devoloper who's
                            passionate
                            about web ,
                            and mobile devlopement </p>


                        <div className='flex flex-wrap  gap-12'>
                            {techstack.map((item, i) =>
                                <div key={i}>{item}</div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Overview;
