import { cn } from "@/lib/utils"
import { type HTMLMotionProps, m } from "motion/react"
import type React from "react"

interface Props extends HTMLMotionProps<"div"> {
    firstword: string
    secondword: string
    className?: string
}

const AnimatedHeader: React.FC<Props> = ({ firstword, className, secondword, ...props }) => {
    return (
        <m.div
            className={cn(
                className,
                "inline-flex   gap-4 overflow-visible text-4xl sm:text-5xl absolute top-10 left-1/2 -translate-x-1/2 overflow-hidden font-bold flex-row",
            )}
            {...props}
        >
            <div className="overflow-hidden w-full bg-[#0a0a0a] ">
                <m.h1
                    initial={{ x: "130%" }}
                    animate={{ x: 0 }}
                    exit={{x: "130%"}}
                    transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                    }}
                    className='will-change-transform '

                >
                    {firstword}
                </m.h1>
            </div>

            <div style={{zIndex:-1}} className='absolute overflow-hidden inset-0 w-[30%] bg-[#0a0a0a] h-full '/>

                <m.span
                    initial={{x: "-130%"}}
                    animate={{x: 0}}
                    exit={{x: "-130%"}}
                    style={{zIndex: -2}}
                    transition={{
                        duration: 0.4,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                        type: "spring",
                        damping: 22,
                        stiffness: 90,
                    }}   className='will-change-transform '

                >
                    {secondword}
                </m.span>


        </m.div>
    )
}

export default AnimatedHeader
