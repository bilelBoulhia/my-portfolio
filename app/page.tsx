'use client'

import { FloatingDock } from "@/app/components/ui/floating-docks";
import React, { useState, Suspense } from "react";
import { AnimatePresence, m } from "motion/react";
import dynamic from "next/dynamic";
import { links } from "@/app/constants";
import {Spinner} from "@/app/components/ui/spinner"; // assumed to exist

const screens = [
    {
        id: 1,
        content: dynamic(() => import('@/app/screens/screen-1'), {
            loading: () => <Spinner />,
            ssr: false
        })
    },
    {
        id: 2,
        content: dynamic(() => import('@/app/screens/screen-2'), {
            loading: () => <Spinner />,
            ssr: false
        })
    },
    {
        id: 3,
        content: dynamic(() => import('@/app/screens/screen-3'), {
            loading: () => <Spinner />,
            ssr: false
        })
    },
    {
        id: 4,
        content: dynamic(() => import('@/app/screens/screen-4'), {
            loading: () => <Spinner />,
            ssr: false
        })
    },
    {
        id: 5,
        content: dynamic(() => import('@/app/screens/screen-5'), {
            loading: () => <Spinner />,
            ssr: false
        })
    }
];

export default function Home() {
    const [sectionId, setId] = useState<number>(1);
    const LoadedComponent = screens.find(s => s.id === sectionId)?.content || null;

    return (
        <main className="flex overflow-hidden min-h-screen py-2 sm:p-10 flex-col font-[family-name:var(--font-genos)]">
            <FloatingDock
                hadnleAction={(id) => setId(id)} // keeping your original typo
                className='fixed top-1/2 right-0 mr-2 -translate-y-1/2 items-center justify-center'
                items={links}
            />

            <AnimatePresence mode='wait'>
                <m.div key={sectionId}>
                    <Suspense fallback={<Spinner />}>
                        {LoadedComponent ? <LoadedComponent /> : null}
                    </Suspense>
                </m.div>
            </AnimatePresence>
        </main>
    );
}
