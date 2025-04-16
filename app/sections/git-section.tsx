"use client"

import {  m } from "motion/react"
import AnimatedHeader from "@/app/components/ui/animated-header";
import {useMediaQuery} from "usehooks-ts";

export default function GitSection() {
    const phone = useMediaQuery('(min-width: 766px)')
    return (
        <div className="flex  flex-col p-3 gap-10 justify-between items-center">

            <div className='overflow-hidden'>
                <div className='overflow-hidden'>
                    <AnimatedHeader firstword={'Github'} secondword={'Stats'}/>
                </div>
            </div>
            <div
                className="flex   mt-[4rem] flex-col md:flex-row gap-10 justify-center items-center w-full">

                <div className='overflow-hidden'>
                    <m.div
                        initial={{y: '120%'}}
                        animate={{y: 0}}
                        exit={{x: '-240%'}}
                        transition={{ease: 'linear', duration: 0.3}}
                        className="bg-neutral-900/20  overflow-hidden rounded-2xl backdrop-blur-md p-4 border border-white/10 light:border-black/10 shadow-lg overflow-hidden">
                        <img
                            alt="git"
                            src="https://github-readme-stats.vercel.app/api?username=bilelBoulhia&&rank_icon=github&show_icons=true&bg_color=00000000&hide_border=true&card_width=400"

                        />
                    </m.div>
                </div>
                <div className='overflow-hidden'>
                    <m.div
                        initial={{y: '120%'}}
                        animate={{y: 0}}
                        exit={{x: '-240%'}}
                        transition={{ease: 'linear', duration: 0.3}}
                        className="bg-neutral-900/20 rounded-2xl backdrop-blur-md p-4  border border-white/10 light:border-black/10 shadow-lg overflow-hidden ">
                        <img
                            alt="Git streak"
                            src="https://github-readme-streak-stats.herokuapp.com/?user=bilelBoulhia&theme=dark&hide_border=true&background=00000000"

                        />
                    </m.div>
                </div>
            </div>
            <div
                className="flex flex-col overflow-hidden  md:flex-row gap-10 justify-between items-center w-full">
                <div className='overflow-hidden'>

                    <m.div
                        initial={{y: '120%'}}
                        animate={{y: 0}}
                        exit={{x: '-240%'}}
                        transition={{ease: 'linear', duration: 0.3}}
                        className=" bg-neutral-900/20  rounded-2xl backdrop-blur-md p-4  border border-white/10 light:border-black/10 shadow-lg overflow-hidden ">
                        <img
                            alt="git"
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=bilelBoulhia&hide_progress=true&layout=donut&bg_color=00000000&hide_border=true&card_width=${phone ? '300' : '600'}`}

                        />
                    </m.div>
                </div>

                <div className='overflow-hidden'>
                    <m.div
                        initial={{y: '120%'}}
                        animate={{y: 0}}
                        exit={{x: '-240%'}}
                        transition={{ease: 'linear', duration: 0.3}}
                        className="bg-neutral-900/20  rounded-2xl backdrop-blur-md p-4 border border-white/10 light:border-black/10 shadow-lg overflow-hidden ">
                        <img
                            alt="Metrics"
                            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=bilelBoulhia&theme=transparent"

                        />
                    </m.div>
                </div>
            </div>


        </div>
    )
            }
