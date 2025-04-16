"use client"


import {easeInOut, motion} from "motion/react"
import {HiDocumentChartBar} from "react-icons/hi2";
import {useMediaQuery} from "usehooks-ts";


interface CustomLinkProps {
    href: string

}

export default function CustomLink({href,

                                      }: CustomLinkProps) {

    const phrase = "Download Resume"
    const phone = useMediaQuery('(min-width: 768px)')


    return (
        <motion.div

            initial={{x: '-200%'}}
            animate={{x: 0}}
            exit={{
                x: phone ? '-200%' : '0',
                y: phone ? '0%' : '-200%'
            }}

            style={{zIndex: -1}}
            transition={{
                duration: 0.3,
                delay:1.5
            }}
            className="inline-flex mt-5 items-center space-x-3  bg-neutral-800 rounded-full"

        >
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center"
            >
                <div className="bg-gradient-to-tr from-indigo-500 to-purple-700 p-2 rounded-full">
                    <HiDocumentChartBar className="w-4 h-4 text-white"/>
                </div>
                <motion.div
                    initial={{width:0}}
                    animate={{width:'100%'}}
                    transition={{duration:0.3,ease:'linear'}}
                    className="overflow-hidden ml-2"
                >
                    <span className="block font-bold mr-2 text-sm text-white whitespace-nowrap">
                          {phrase}
                 </span>

                </motion.div>
            </a>
        </motion.div>
    )
}