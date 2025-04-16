'use client'
import {easeInOut, motion} from "motion/react";
import React from "react";
import {useMediaQuery} from 'usehooks-ts'

import CustomLink from "@/app/components/ui/custom-link";

const OverviewSection = () => {
    const phone = useMediaQuery('(min-width: 768px)')
    return (
        <div

            className='w-full h-full'>
            <div className=' flex p-3 sm:p-0 flex-col md:inline-flex md:flex-row  md:max-h-[22rem]  gap-4  '>
                <motion.img

                    initial={{
                        x:phone ? '-150%' : 0,
                        y:phone ? 0 : '-150%'
                }}
                    animate={{x:0,y:0}}



                    className='w-[15rem] z-2  self-center rounded-2xl h-auto'
                    src='https://i.ibb.co/qYXysw2y/pexels-italo-melo-881954-2379004-1.png'
                    exit={{
                        x: phone ? '-200%' : '0',
                        y: phone ? '0%' : '-200%'
                    }}
                    transition={{
                        transitionEnd: {
                            display: "none",
                            easeInOut
                        },
                        duration: 0.5, delay: 0.5
                    }}
                    alt={'s'}
                />
                <div className='flex flex-col   mt-10 justify-start items-start'>
                    <div className='inline-flex  gap-4 text-4xl sm:text-5xl overflow-hidden  font-bold flex-row '>
                        <div className='overflow-hidden  bg-[#0a0a0a]'>
                            <motion.h1

                                initial={{x: '200%'}}
                                animate={{x: 0}}
                                exit={{width: 0}}
                                transition={{
                                    transitionEnd: {
                                        display: "none",
                                        easeInOut
                                    },
                                    duration: 0.5
                                }}
                                className='overflow-hidden  '
                            >
                                Billel
                            </motion.h1>
                        </div>

                        <motion.span

                            initial={{x: '-200%'}}
                            animate={{x: 0}}
                            exit={{width: 0}}
                            style={{zIndex: -1}}
                            transition={{
                                transitionEnd: {
                                    display: "none",
                                    easeInOut
                                },
                                duration: 0.5, delay: 0.25
                            }}
                        > Boulahia
                        </motion.span>


                    </div>


                    <motion.div

                        exit={{width: 0}}
                        transition={{
                            delay: 0.5,
                        }}

                        className='flex overflow-hidden flex-col h-full justify-center  max-w-xl'>
                        <motion.p
                            initial={{y: 250}}
                            animate={{y: 0}}
                            exit={{width: 0}}
                            transition={{
                                delay: 0.8, duration: 0.5
                            }}

                            className=' text-xl  sm:text-2xl  font-semibold'>hey there👋,
                            I am a Full Stack Software Developer with a focus on building web and mobile applications
                            using .NET, Java,
                            and JavaScript frameworks like React and Next.js. i enjoy programming as much as a tech
                            priest enjoys his daily prayer to the machine spirit.

                        </motion.p>
                        <div className=' overflow-hidden'>
                            <CustomLink href={'https://turquoise-cynthie-96.tiiny.site'}/>
                        </div>

                    </motion.div>
                </div>
            </div>

        </div>


    )
}

export default OverviewSection;
