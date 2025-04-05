'use client'
import { easeIn, easeInOut, motion } from "motion/react";

const Overview = ()=>{
    return (
        <div className=' w-full h-full'>
            <div className=' flex  flex-col md:inline-flex md:flex-row  md:max-h-[22rem]  gap-4  '>
                <img className='w-[15rem] z-2  self-center rounded-2xl h-auto'
                     src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg'
                     alt={'s'}/>
                <div className='flex flex-col  mt-10 justify-start items-start'>
                    <div className='inline-flex gap-4 text-5xl overflow-hidden font-bold flex-row '>
                        <div className='overflow-hidden bg-[#0a0a0a]'>

                            <motion.h1
                                initial={{x: '-150%'}}
                                animate={{x: 0}}
                                transition={{
                                    transitionEnd: {
                                        display: "none",
                                        easeInOut
                                      },
                                    duration: 0.5}}
                                className='overflow-hidden  '
                            >
                                Billel
                            </motion.h1>
                        </div>

                        <motion.span
                            initial={{x: '-200%'}}
                            animate={{x: 0}}
                            style={{zIndex: -1}}
                           
                            transition={{
                                transitionEnd: {
                                    display: "none",
                                    easeInOut
                                  },
                                duration: 0.75, delay: 0.25}}
                        > Boulahia
                        </motion.span>


                    </div>
                    <div className='flex flex-col h-full justify-center  max-w-xl'>
                        <p className='text-2xl  font-semibold'>hey there👋,
                            I am a FullStack Software Devoloper,
                            specialized in web and mobile applications development using .Net and JavaScript frameworks.
                            Also a huge warhammer fan ,
                            I create and contribute to amazing web applications making the internet a better place.
                            You can talk to me about Dj
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview;
