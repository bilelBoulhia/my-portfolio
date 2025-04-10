'use client'
import {FloatingDock} from "@/app/components/ui/floating-docks";
import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {links, screens} from "@/app/constants";


const defaultSection = (
    <section id='1' className="">

        sdasdasd
    </section>
)


export default function Home() {
    const [sectionId, setid] = useState<number>();
    const [section, setSection] = useState<React.ReactNode>();
    useEffect(() => {
        setSection(screens.find(s => s.id === sectionId)?.content)
    }, [sectionId])
    return (
        <main
            className="flex overflow-hidden min-h-screen  p-8  sm:p-10 flex-col  font-[family-name:var(--font-genos)]">
            <FloatingDock hadnleAction={(id) => setid(id)}
                          className='fixed  top-1/2  right-0 mr-2 -translate-y-1/2 items-center justify-center '
                          items={links}/>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={sectionId}
                >
                    {defaultSection}
                </motion.div>
            </AnimatePresence>


        </main>
    );
}
