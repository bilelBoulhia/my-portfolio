"use client"

import { easeInOut, motion } from "motion/react"

export default function GitSection() {
    return (
        <div className="flex  flex-col p-3 gap-10 justify-between items-center">
            <div className="inline-flex gap-4 text-5xl absolute top-10 left-1/2 -translate-x-1/2 overflow-hidden font-bold flex-row">
                <div className="overflow-hidden  bg-[#0a0a0a]">
                    <motion.h1
                        initial={{x: "-200%"}}
                        animate={{x: 0}}
                        exit={{width: 0}}
                        transition={{
                            transitionEnd: {
                                display: "none",
                                ease:"linear",
                            },
                            duration: 0.5,
                        }}
                        className="overflow-hidden"
                    >
                        Github
                    </motion.h1>
                </div>

                <motion.span
                    initial={{x: "-200%"}}
                    animate={{x: 0}}
                    exit={{width: 0}}
                    style={{zIndex: -1}}
                    transition={{
                        transitionEnd: {
                            display: "none",
                            ease:"linear",
                        },
                        duration: 0.5,
                        delay: 0.25,
                    }}
                >
                    Stats
                </motion.span>
            </div>
            <div
                className="flex overflow-hidden mt-25 flex-col md:flex-row gap-10 justify-center items-center w-full">
                <motion.div
                    initial={{y:'120%'}}
                    animate={{y:0}}
                    exit={{x:'-240%'}}
                    transition={{ease:'linear',duration:0.3}}
                    className="bg-neutral-900/20 rounded-2xl backdrop-blur-md p-4  border border-white/10 light:border-black/10 shadow-lg overflow-hidden ">
                    <img
                        alt="Git streak"
                        src="https://github-readme-streak-stats.herokuapp.com/?user=bilelBoulhia&theme=dark&hide_border=true&background=00000000"

                    />
                </motion.div>
                <motion.div
                    initial={{y:'120%'}}
                    animate={{y:0}}
                    exit={{x:'-240%'}}
                    transition={{ease:'linear',duration:0.3}}
                    className="bg-neutral-900/20  rounded-2xl backdrop-blur-md p-4 border border-white/10 light:border-black/10 shadow-lg overflow-hidden">
                    <img
                        alt="git"
                        src="https://github-readme-stats.vercel.app/api?username=bilelBoulhia&&rank_icon=github&show_icons=true&bg_color=00000000&hide_border=true&card_width=400"

                    />
                </motion.div>
            </div>
            <div
                className="flex flex-col overflow-hidden  md:flex-row gap-10 justify-between items-center w-full">


                <motion.div
                    initial={{y:'120%'}}
                    animate={{y:0}}
                    exit={{x:'-240%'}}
                    transition={{ease:'linear',duration:0.3}}
                    className=" bg-neutral-900/20  rounded-2xl backdrop-blur-md p-4  border border-white/10 light:border-black/10 shadow-lg overflow-hidden ">
                    <img
                        alt="git"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=bilelBoulhia&hide_progress=true&layout=donut&bg_color=00000000&hide_border=true"

                    />
                </motion.div>
                <motion.div
                    initial={{y:'120%'}}
                    animate={{y:0}}
                    exit={{x:'-240%'}}
                    transition={{ease:'linear',duration:0.3}}
                    className="bg-neutral-900/20  rounded-2xl backdrop-blur-md p-4 border border-white/10 light:border-black/10 shadow-lg overflow-hidden ">
                    <img
                        alt="Metrics"
                        src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=bilelBoulhia&theme=transparent"

                    />
                </motion.div>
            </div>


        </div>
    )
}
