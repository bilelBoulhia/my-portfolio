"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, type MotionValue, motion, useMotionValue, useSpring, useTransform } from "motion/react"
import React, {forwardRef, ReactNode, useImperativeHandle} from "react"
import { useRef, useState } from "react"
import {ChevronLeftIcon} from "@heroicons/react/16/solid";


export const FloatingDock = ({
                                 items,
                                 className,
                                 hadnleAction,

                             }: {
    items: { title: string; icon: ReactNode;sectionid:number }[]
    className?: string,
    hadnleAction: (section:number) => void
}) => {
    const mouseY = useMotionValue(Number.POSITIVE_INFINITY)
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={cn(className, "z-100 flex-row flex items-center gap-4")}>
            <motion.button
                onClick={toggleNav}
                className="relative flex  items-center justify-center w-8 h-8 rounded-full   hover:scale-105 transition-colors z-10"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                initial={false}

            >
                <div  className="flex items-center  justify-center">
                    <ChevronLeftIcon className="size-8"/>
                </div>
            </motion.button>

            <motion.div
                initial={false}
                animate={{
                    width: "4rem",
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 1,
                    opacity: {duration: 0.1},
                }}
                className="items-center  m-auto flex flex-col gap-4 rounded-2xl bg-neutral-900 py-4 pb-3 "
                onMouseMove={(e) => mouseY.set(e.pageY)}
                onMouseLeave={() => mouseY.set(Number.POSITIVE_INFINITY)}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{opacity: 0, scale: 0.8, x: 20}}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                            transition: {
                                delay: index * 0.05,
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                            },
                        }}

                    >
                        <IconContainer onClick={() => hadnleAction(item.sectionid)} mouseY={mouseY} {...item} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export interface iconContainerProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    mouseY: MotionValue
    title: string
    icon: React.ReactNode,

}

const IconContainer = forwardRef<HTMLDivElement, iconContainerProps>(({mouseY, title, icon, id, ...props}, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);
    const [hovered, setHovered] = useState(false)

    return (
        <div  {...props}>
            <motion.div
                ref={innerRef}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
                 className="aspect-square h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center relative"
             >
                 <AnimatePresence>
                 {hovered && (
                     <motion.div
                         initial={{ opacity: 0, y: 10, x: "-50%" }}
                         animate={{ opacity: 1, y: 0, x: "-50%" }}
                         exit={{ opacity: 0, y: 2, x: "-50%" }}
                         className="px-2 py-0.5 whitespace-pre rounded-md  border bg-neutral-800 border-neutral-900 text-white   absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                     >
                         {title}
                     </motion.div>
                 )}
                 </AnimatePresence>
                 <motion.div  className="flex items-center justify-center">
                     {icon}
                 </motion.div>
             </motion.div>
        </div>


    )
})



