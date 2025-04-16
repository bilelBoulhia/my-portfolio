import { cn } from "@/lib/utils";
import {HTMLMotionProps, m} from "motion/react";
import React from "react";

interface props extends HTMLMotionProps<'div'>{
    firstword:string,
    secondword:string,
    className?:string
}

const AnimatedHeader : React.FC<props> = ({firstword,className,secondword})=>{
    return (
        <m.div
            className={cn(className,"inline-flex gap-4 text-4xl sm:text-5xl absolute top-10 left-1/2 -translate-x-1/2 overflow-hidden font-bold flex-row")}>
            <div className="overflow-hidden  bg-[#0a0a0a]">
                <m.h1
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
                </m.h1>
            </div>

            <m.span
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
            </m.span>
        </m.div>
    )
}

export  default  AnimatedHeader;