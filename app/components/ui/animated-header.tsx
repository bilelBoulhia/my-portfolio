import { cn } from "@/lib/utils";
import {HTMLMotionProps, motion} from "motion/react";
import React from "react";

interface props extends HTMLMotionProps<'div'>{
    firstword:string,
    secondword:string,
    className?:string
}

const AnimatedHeader : React.FC<props> = ({firstword,className,secondword})=>{
    return (
        <motion.div
            className={cn(className,"inline-flex gap-4 text-4xl sm:text-5xl absolute top-10 left-1/2 -translate-x-1/2 overflow-hidden font-bold flex-row")}>
            <div className="overflow-hidden  bg-[#0a0a0a]">
                <motion.h1
                    initial={{x: "-200%"}}
                    animate={{x: 0}}
                    exit={{width: 0}}
                    transition={{
                        transitionEnd: {
                            display: "none",
                            ease: "linear",
                        },
                        duration: 0.5,
                    }}
                    className="overflow-hidden"
                >
                    {firstword}
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
                        ease: "linear",
                    },
                    duration: 0.5,
                    delay: 0.25,
                }}
            >
                {secondword}
            </motion.span>
        </motion.div>
    )
}

export  default  AnimatedHeader;