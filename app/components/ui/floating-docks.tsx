"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, type MotionValue, motion, useMotionValue, useSpring, useTransform } from "motion/react"
import React, {forwardRef,  useImperativeHandle} from "react"
import { useRef, useState } from "react"


export const FloatingDock = ({
                                 items,
                                 className,
                                 hadnleAction,

                             }: {
    items: { title: string; icon: React.ReactNode;sectionid:number }[]
    className?: string,
    hadnleAction: (sectionId:number) => void
}) => {
    const mouseY = useMotionValue(Number.POSITIVE_INFINITY)
    return (
        <div className={cn(className, "z-100 flex-row flex items-center gap-4")}>
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
                    opacity: { duration:  0.1 },
                }}
                className="items-center  m-auto flex flex-col gap-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 py-4 pb-3 "
                onMouseMove={(e) => mouseY.set(e.pageY)}
                onMouseLeave={() => mouseY.set(Number.POSITIVE_INFINITY)}
            >
                <AnimatePresence>
                    {items.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
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
                                exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                    x: 20,
                                    transition: {
                                        delay: 0,
                                        duration: 0.15,
                                    },
                                }}
                            >
                                <IconContainer onClick={()=>hadnleAction(item.sectionid)}   mouseY={mouseY} {...item} />
                            </motion.div>
                        ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export interface iconContainerProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    mouseY: MotionValue
    title: string
    icon: React.ReactNode,
    sectionid:number
}

const IconContainer = forwardRef<HTMLDivElement,iconContainerProps>(({mouseY,title,icon,id ,...props},ref)=>{
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement  );
    const [hovered, setHovered] = useState(false)

    return (
        <div  {...props}>
             <motion.div
                 ref={innerRef}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
                 className="aspect-square h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
             >
                 <AnimatePresence>
                 {hovered && (
                     <motion.div
                         initial={{ opacity: 0, y: 10, x: "-50%" }}
                         animate={{ opacity: 1, y: 0, x: "-50%" }}
                         exit={{ opacity: 0, y: 2, x: "-50%" }}
                         className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
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



