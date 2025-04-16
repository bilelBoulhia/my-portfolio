'use client'
import {FloatingDock} from "@/app/components/ui/floating-docks";
import React, {useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {links,  screens} from "@/app/constants";





export default function Home() {
    const [sectionId, setid] = useState<number>(1);

    return (
        <main
            className="flex overflow-hidden  min-h-screen py-2 sm:p-10 flex-col  font-[family-name:var(--font-genos)]">
            <FloatingDock hadnleAction={(id) => setid(id)}
                          className='fixed  top-1/2  right-0 mr-2 -translate-y-1/2 items-center justify-center '
                          items={links}/>

            <AnimatePresence mode='wait'>
                <motion.div key={sectionId} >
                    {screens.find(s => s.id === sectionId)?.content ?? screens[0].content}
                </motion.div>
            </AnimatePresence>


        </main>
    );
}
