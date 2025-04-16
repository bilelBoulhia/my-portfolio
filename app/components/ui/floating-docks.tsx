"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type React from "react"
import { forwardRef, type ReactNode, useImperativeHandle, useRef, useState } from "react"

export const FloatingDock = ({
                                 items,
                                 className,
                                 hadnleAction,
                             }: {
    items: {  icon: ReactNode; sectionid: number }[]
    className?: string
    hadnleAction: (section: number) => void
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className={cn(
                className,
                `z-100 ${isOpen ? "translate-x-[80%] " : "translate-x-[0]"
                } duration-300 ease-in flex-row flex items-center gap-4`,
            )}
        >
            <motion.button
                onClick={toggleNav}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 shadow-lg hover:shadow-xl transition-all z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={false}
            >
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-700 opacity-0"
                    animate={{
                        opacity: isOpen ? 0.9 : 0,
                        scale: isOpen ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                />

                <motion.div
                    className="flex items-center justify-center relative z-10"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <motion.div className="w-6 h-6 flex  items-center justify-center" initial={false}>
                        <motion.span
                            className="absolute block h-0.5 w-4 bg-white rounded-full"
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                translateY: isOpen ? 0 : -2,
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        />
                        <motion.span
                            className="absolute block h-0.5 w-4 bg-white rounded-full"
                            animate={{
                                opacity: isOpen ? 0 : 1,
                                width: isOpen ? 0 : 16,
                            }}
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            className="absolute block h-0.5 w-4 bg-white rounded-full"
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                translateY: isOpen ? 0 : 2,
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        />
                    </motion.div>
                </motion.div>


            </motion.button>

            <div className={`items-center w-[4rem] m-auto flex flex-col gap-4 rounded-2xl bg-neutral-900 py-4 pb-3`}>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
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
                    >
                        <IconContainer onClick={() => hadnleAction(item.sectionid)} {...item} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export interface iconContainerProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode
}

const IconContainer = forwardRef<HTMLDivElement, iconContainerProps>(({ title, icon, id, ...props }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)
    return (
        <div {...props}>
            <motion.div
                ref={innerRef}
                className="aspect-square h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center relative"
                whileTap={{ scale: 0.95 }}
            >
                <motion.div className="flex items-center justify-center">{icon}</motion.div>
            </motion.div>
        </div>
    )
})

IconContainer.displayName = "IconContainer"
