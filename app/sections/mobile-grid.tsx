
/*
* qr
https://i.ibb.co/C3MdDHN3/icon-1.png
https://i.ibb.co/qFRzRW3z/Untitled-1.png
https://i.ibb.co/CDrBzgm/Untitled-2.png
* */
/*
wrt
* https://i.ibb.co/qf0xQbL/icon.png
https://i.ibb.co/LDsX5VL0/Untitled-3.png
https://i.ibb.co/4RJ3mVVV/Untitled.png
*
* */

import {ProjectCardPhone} from "@/app/components/ui/project-card";

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
        title: "WRT(win rah train)",
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
        <div className='flex flex-wrap items-center justify-center w-full'>
            {list.map((p,i)=>(
                <ProjectCardPhone ProjectCardContent={p} index={i} />
            ))}
        </div>
    )
}