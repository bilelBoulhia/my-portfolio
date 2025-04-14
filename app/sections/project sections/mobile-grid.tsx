


import {ProjectCardPhone} from "@/app/components/ui/project-card";
import { motion } from "motion/react";

const list = [
    {
        title: "hi qr code scanner",
        description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
        technologies: ['React native', 'Google', 'TypeScript'],
        techColors: ['#0f21cf', '#ffffff', '#3178C6'],
        imageUrl: "https://i.ibb.co/qFRzRW3z/Untitled-1.png",
        projectUrl: "https://www.houseofideas.club",
        githubUrl: "https://github.com/bilelBoulhia/House-of-ideas"
    },
    {
        title: "WRT (win rah train)",
        description: "Stunning, customizable and open-source components for your next app. Time to give your code a vacation.",
        technologies: ['React native', 'Asp.Net', 'TypeScript'],
        techColors: ['#0f21cf', '#9911a3', '#3178C6'],
        imageUrl: "https://i.ibb.co/4RJ3mVVV/Untitled.png",
        projectUrl: "https://www.houseofideas.club",
        githubUrl: "https://github.com/bilelBoulhia/House-of-ideas"
    }
]

export default function MobileGrid(){
    return(
        <motion.div
            exit={{y:'-200%'}}
            transition={{duration:0.3,ease:'linear'}}
            className='flex  flex-wrap items-center justify-center w-full'>
            {list.map((p,i)=>(
                <ProjectCardPhone ProjectCardContent={p} index={i} />
            ))}
        </motion.div>
    )
}