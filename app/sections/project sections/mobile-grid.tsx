


import {ProjectCardPhone} from "@/app/components/ui/project-card";
import { motion } from "motion/react";
import {MobilePorjectsList} from "@/app/constants";



export default function MobileGrid(){
    return(
        <motion.div
            exit={{y:'-200%'}}
            transition={{duration:0.3,ease:'linear'}}
            className='flex  flex-wrap items-center justify-center w-full'>
            {MobilePorjectsList.map((p,i)=>(
                <ProjectCardPhone ProjectCardContent={p} index={i} />
            ))}
        </motion.div>
    )
}