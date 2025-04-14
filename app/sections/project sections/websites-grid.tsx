import {WebsitesList} from "@/app/constants";
import {ProjectCard} from "@/app/components/ui/project-card";
import React from "react";
import { motion } from "motion/react";

export default function Websitesgird(){
    return (
        <motion.div
            exit={{y:'200%'}}
            transition={{duration:0.3,ease:'linear'}}
            className="flex flex-wrap w-full items-center justify-center gap-5 ">
            {WebsitesList.map((project , i) => (
                <ProjectCard index={i} ProjectCardContent={project}/>
            ))}
        </motion.div>
    )
}