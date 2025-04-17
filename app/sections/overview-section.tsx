'use client'
import { m} from "motion/react";
import React from "react";
import {useMediaQuery} from 'usehooks-ts'

import CustomLink from "@/app/components/ui/custom-link";


const OverviewSection = () => {
    const phone = useMediaQuery('(min-width: 768px)')
    return (
        <div className='w-full h-full'>
            <div className='flex p-3 sm:p-0 flex-col md:inline-flex md:flex-row  md:max-h-[22rem]  gap-4  '>
                <m.img
                    initial={{x:phone ? '-150%' : 0, y:phone ? 0 : '-150%'}}
                    animate={{x:0,y:0}}
                    className='w-[15rem] will-change-transform z-2  self-center rounded-2xl h-auto'
                    src='https://i.ibb.co/KxxWkVDv/pexels-italo-melo-881954-2379004-1-1-1.webp'
                    exit={{
                        x: phone ? '-200%' : '0',
                        y: phone ? '0%' : '-200%'
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                        transitionEnd: {
                            display: "none"
                        }
                    }}
                    alt={'pdp'}
                />
                <div className='flex flex-col  mt-10 justify-start items-start'>
                    <div className='inline-flex  gap-4 text-4xl sm:text-5xl overflow-hidden  font-bold flex-row '>
                        <div className="overflow-hidden w-full bg-[#0a0a0a] ">
                            <m.h1
                                initial={{x: "130%"}}
                                animate={{x: 0}}
                                exit={{x: "130%"}}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                    type: "spring",
                                    damping: 20,
                                    stiffness: 100,
                                }}
                                className='will-change-transform '
                            >
                                billel
                            </m.h1>
                        </div>

                        <div style={{zIndex: -1}}
                             className='absolute overflow-hidden inset-0 w-[20%] bg-[#0a0a0a] h-full '/>

                        <m.span
                            initial={{x: "-130%"}}
                            animate={{x: 0}}
                            exit={{x: "-130%"}}
                            style={{zIndex: -2}}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                                type: "spring",
                                damping: 22,
                                stiffness: 90,
                            }}
                            className='will-change-transform'

                        >
                            boulahia
                        </m.span>

                    </div>
                    <m.div

                        exit={{width: 0}}
                        transition={{
                            delay: 0.5,
                        }}

                        className='flex  overflow-hidden flex-col h-full justify-center  max-w-xl'>
                        <m.p
                            initial={{y: 250}}
                            animate={{y: 0}}
                            exit={{width: 0}}
                            transition={{
                                delay: 0.8, duration: 0.3
                            }}

                            className=' text-xl  sm:text-2xl  font-semibold'>hey there👋,
                            I am a Full Stack Software Developer with a focus on building web and mobile
                            applications
                            using .NET, Java,
                            and JavaScript frameworks like React and Next.js. i enjoy programming as much as a tech
                            priest enjoys his daily prayer to the machine spirit.

                        </m.p>
                        <m.div
                            initial={{y: 250}}
                            animate={{y: 0}}
                            transition={{
                                delay: 0.8, duration: 0.3
                            }}
                            className='relative overflow-hidden'>
                                <CustomLink href={'https://turquoise-cynthie-96.tiiny.site'}/>
                        </m.div>

                        </m.div>
                    </div>
                </div>

            </div>


            )
            }

            export default OverviewSection;
