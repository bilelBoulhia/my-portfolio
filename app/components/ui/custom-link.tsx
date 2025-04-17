"use client"


import { m} from "motion/react"
import {HiDocumentChartBar} from "react-icons/hi2";
import {useMediaQuery} from "usehooks-ts";


interface CustomLinkProps {
    href: string

}

export default function CustomLink({href,

                                      }: CustomLinkProps) {

    const phrase = "Download Resume"
    const phone = useMediaQuery('(min-width: 768px)')


    return (
        <div className="inline-flex mt-5 items-center space-x-3  bg-neutral-800 rounded-full">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center"
            >
                <div className="bg-gradient-to-tr from-indigo-500 to-purple-700 p-2 rounded-full">
                    <HiDocumentChartBar className="w-4 h-4 text-white"/>
                </div>
                <div

                    className="overflow-hidden ml-2"
                >
                    <span className="block font-bold mr-2 text-sm text-white whitespace-nowrap">
                          {phrase}
                 </span>

                </div>
            </a>
        </div>
    )
}