'use client'

import { FloatingDock } from "@/app/components/ui/floating-docks";
import React, { useState, useEffect } from "react";
import { AnimatePresence, m } from "motion/react";
import { links, screens } from "@/app/constants";


export default function Home() {
    const [sectionId, setId] = useState<number>(1);
    const [LoadedComponent, setLoadedComponent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
        const screen = screens.find(s => s.id === sectionId);
        if (screen?.content) {
            const load = async () => {
                const Comp = await screen.content();
                setLoadedComponent(() => Comp.default);
            };
            load();
        } else {
            setLoadedComponent(null);
        }
    }, [sectionId]);

    return (
        <main className="flex overflow-hidden min-h-screen py-2 sm:p-10 flex-col font-[family-name:var(--font-genos)]">
            <FloatingDock
                hadnleAction={(id) => setId(id)}
                className='fixed top-1/2 right-0 mr-2 -translate-y-1/2 items-center justify-center'
                items={links}
            />

            <AnimatePresence mode='wait'>
                <m.div
                    key={sectionId}
                >
                    {LoadedComponent ? <LoadedComponent /> : null}
                </m.div>
            </AnimatePresence>
        </main>
    );
}
