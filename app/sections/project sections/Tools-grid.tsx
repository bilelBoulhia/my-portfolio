


import {ProjectCardDefault} from "@/app/components/ui/project-card";
import { motion } from "motion/react";
import {ToolsProjects} from "@/app/constants";



export default function ToolsGrid(){
    return(
        <motion.div
            exit={{y:'-200%'}}
            transition={{duration:0.3,ease:'linear'}}
            className='flex gap-5 flex-wrap items-center justify-center w-full'>
            {ToolsProjects.map((p,i)=>(
                <ProjectCardDefault ProjectCardContent={p} index={i} />
            ))}
        </motion.div>
    )
}