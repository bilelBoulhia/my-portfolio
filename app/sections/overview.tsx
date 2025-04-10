'use client'
import { easeInOut, motion} from "motion/react";
import React from "react";
import { useMediaQuery } from 'usehooks-ts'

const Overview = () => {
    const phone= useMediaQuery('(min-width: 768px)')
    return (


                <motion.div


                    exit={{opacity:0}}
                    transition={{delay: 1}}
                    className='w-full h-full'>
                    <div className=' flex  flex-col md:inline-flex md:flex-row  md:max-h-[22rem]  gap-4  '>
                        <motion.img

                            className='w-[15rem] z-2  self-center rounded-2xl h-auto'
                            src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg'
                            exit={{x: phone ? '-200%' : '0',
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
                        <div className='flex flex-col  mt-10 justify-start items-start'>
                            <div className='inline-flex gap-4 text-5xl overflow-hidden font-bold flex-row '>
                                <div className='overflow-hidden bg-[#0a0a0a]'>
                                    <motion.h1

                                        initial={{x: '-200%'}}
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


                                    exit={{width: 0}}
                                    transition={{
                                        delay: 0.8, duration: 0.5
                                    }}

                                    className='text-2xl  font-semibold'>hey there👋,
                                    I am a FullStack Software Devoloper,
                                    specialized in web and mobile applications development using .Net and JavaScript
                                    frameworks.
                                    Also a huge warhammer fan ,
                                    I create and contribute to amazing web applications making the internet a better
                                    place.
                                    You can talk to me about Dj
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>

                </motion.div>


    )
}

export default Overview;
